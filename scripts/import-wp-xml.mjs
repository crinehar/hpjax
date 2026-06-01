/**
 * WordPress XML (WXR) → lib/posts-data.ts importer
 *
 * Usage:
 *   node scripts/import-wp-xml.mjs
 *
 * What it does:
 *   1. Parses the WXR export
 *   2. Extracts all published posts with Yoast SEO data, categories, tags
 *   3. Downloads featured images → public/images/blog/
 *   4. Downloads inline hpjax.com/wp-content images → public/images/blog/inline/
 *   5. Strips dead-domain images (webworksjax, Blogger, acufinder, localhost)
 *   6. Fixes residual table-based HTML → clean paragraphs
 *   7. Writes lib/posts-data.ts
 */

import { XMLParser } from "fast-xml-parser";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";
import https from "https";
import http from "http";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const XML_PATH = join(__dirname, "healthpointejacksonville.WordPress.2026-06-01 (1).xml");
const OUTPUT_PATH = join(ROOT, "lib", "posts-data.ts");
const IMAGE_DIR = join(ROOT, "public", "images", "blog");
const INLINE_DIR = join(IMAGE_DIR, "inline");
const FALLBACK_IMAGE = "/images/logo.png";

// Domains whose <img> tags should be stripped from content entirely
const DEAD_IMG_DOMAINS = [
  "hpjax.webworksjax.com",
  "healthpointeja.wpenginepowered.com",
  "localhost:9999",
  "localhost",
  "www.acufinder.com",
  "acufinder.com",
  "click.health.ibemail.com",
  "blogger.googleusercontent.com",
  "bp.blogspot.com",
  "s.w.org",           // emoji SVGs — already replaced, belt-and-suspenders
  "1.bp.blogspot.com",
  "2.bp.blogspot.com",
  "3.bp.blogspot.com",
  "4.bp.blogspot.com",
];

// Domains whose <a href> links should be replaced with their inner text
const DEAD_LINK_DOMAINS = [
  "hpjax.webworksjax.com",
  "click.health.ibemail.com",
  "www.acufinder.com",
  "acufinder.com",
];

// ── Parse XML ────────────────────────────────────────────────────────────────

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  cdataPropName: "__cdata",
  isArray: (name) => ["item", "wp:postmeta", "category"].includes(name),
  parseTagValue: false,
  trimValues: true,
});

console.log("Reading XML…");
const xml = readFileSync(XML_PATH, "utf-8");
const parsed = parser.parse(xml);
const items = parsed?.rss?.channel?.item ?? [];
console.log(`Found ${items.length} total items`);

// ── Build attachment map: post_id → url ──────────────────────────────────────

const attachments = new Map();
for (const item of items) {
  const postType = cdata(item["wp:post_type"]);
  if (postType !== "attachment") continue;
  const id = String(item["wp:post_id"]);
  const url = cdata(item["wp:attachment_url"]);
  if (url) attachments.set(id, url);
}
console.log(`Found ${attachments.size} attachments`);

// ── Extract published posts ──────────────────────────────────────────────────

const posts = [];

for (const item of items) {
  const postType = cdata(item["wp:post_type"]);
  const status = cdata(item["wp:status"]);
  if (postType !== "post" || status !== "publish") continue;

  const title = decodeHtmlEntities(cdata(item.title));
  const slug = cdata(item["wp:post_name"]);
  const rawDate = cdata(item["wp:post_date"]) ?? "";
  const date = rawDate.slice(0, 10);
  const rawContent = cdata(item["content:encoded"]) ?? "";
  const rawExcerpt = cdata(item["excerpt:encoded"]) ?? "";
  const author = cdata(item["dc:creator"]) ?? "";

  // Categories and tags
  const categoryEls = Array.isArray(item.category)
    ? item.category
    : item.category ? [item.category] : [];
  const categories = [];
  const tags = [];
  for (const el of categoryEls) {
    const domain = el["@_domain"];
    const label = cdata(el) || el["#text"] || el;
    if (typeof label !== "string") continue;
    if (domain === "category") categories.push(decodeHtmlEntities(label));
    if (domain === "post_tag") tags.push(label);
  }
  const category = categories[0] ?? "General Health";

  // Post meta
  const metaMap = buildMetaMap(item["wp:postmeta"]);
  const seoTitle = metaMap["_yoast_wpseo_title"] ?? "";
  const seoDescription = metaMap["_yoast_wpseo_metadesc"] ?? "";
  const thumbnailId = metaMap["_thumbnail_id"] ?? "";
  const attachmentUrl = thumbnailId ? attachments.get(thumbnailId) : null;

  posts.push({
    slug, title, date, rawContent, rawExcerpt, author,
    category, tags, seoTitle, seoDescription,
    _attachmentUrl: attachmentUrl,
  });
}

console.log(`Found ${posts.length} published posts`);

// ── Download featured images ─────────────────────────────────────────────────

mkdirSync(IMAGE_DIR, { recursive: true });
mkdirSync(INLINE_DIR, { recursive: true });

async function downloadImage(url, destPath) {
  return new Promise((resolve) => {
    if (existsSync(destPath)) { resolve(true); return; }
    const client = url.startsWith("https") ? https : http;
    const req = client.get(url, { timeout: 12000 }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        downloadImage(res.headers.location, destPath).then(resolve);
        return;
      }
      if (res.statusCode !== 200) {
        console.warn(`  ✗ ${res.statusCode} ${url}`);
        resolve(false);
        return;
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => { writeFileSync(destPath, Buffer.concat(chunks)); resolve(true); });
    });
    req.on("error", () => resolve(false));
    req.on("timeout", () => { req.destroy(); resolve(false); });
  });
}

console.log("Downloading featured images…");
let dlFeatured = 0, dlSkipped = 0, dlFailed = 0;

for (const post of posts) {
  if (!post._attachmentUrl) {
    dlSkipped++;
    post._localImage = FALLBACK_IMAGE;
    continue;
  }
  const url = post._attachmentUrl;
  const ext = extname(url.split("?")[0]) || ".jpg";
  const filename = `${post.slug}${ext}`;
  const destPath = join(IMAGE_DIR, filename);
  const ok = await downloadImage(url, destPath);
  post._localImage = ok ? `/images/blog/${filename}` : FALLBACK_IMAGE;
  ok ? dlFeatured++ : dlFailed++;
}
console.log(`Featured: ${dlFeatured} downloaded, ${dlSkipped} no thumbnail (logo fallback), ${dlFailed} failed`);

// ── Process content: clean tables, strip dead images, localize inline images ─

console.log("Processing post content…");
let inlineDl = 0, inlineSkip = 0, inlineFail = 0, deadStripped = 0, tablesFixed = 0;

for (const post of posts) {
  let html = post.rawContent;

  // 1. Replace WordPress emoji <img> with actual emoji character
  html = html.replace(
    /<img[^>]*role=["']img["'][^>]*alt="([^"]+)"[^>]*\/?>/gi,
    "$1"
  );

  // 2. Strip dead-domain <img> tags entirely
  html = html.replace(/<img([^>]*)>/gi, (match, attrs) => {
    const srcMatch = attrs.match(/src=["']([^"']+)["']/i);
    if (!srcMatch) {
      // img with no src (e.g. Blogger PHOTO_ID imgs that lost their src)
      deadStripped++;
      return "";
    }
    const src = srcMatch[1];
    if (DEAD_IMG_DOMAINS.some((d) => src.includes(d))) {
      deadStripped++;
      return "";
    }
    return match;
  });

  // 3. Strip dead-domain <a> links (keep inner text)
  html = html.replace(/<a([^>]*)>([\s\S]*?)<\/a>/gi, (match, attrs, inner) => {
    const hrefMatch = attrs.match(/href=["']([^"']+)["']/i);
    if (!hrefMatch) return match;
    const href = hrefMatch[1];
    if (DEAD_LINK_DOMAINS.some((d) => href.includes(d))) return inner;
    return match;
  });

  // 4. Fix residual table HTML → clean paragraphs
  if (/<table/i.test(html)) {
    tablesFixed++;
    html = html
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      // Turn table/block closers into newlines before stripping tags
      .replace(/<\/(?:td|th|tr|table|p|h[1-6]|li|div|br)[^>]*>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .split(/\n{2,}/)
      .map((s) => s.replace(/\s+/g, " ").trim())
      .filter((s) => s.length > 30)
      .map((t) => `<p>${t}</p>`)
      .join("\n");
  }

  // 5. Localize inline hpjax.com/wp-content images
  // Match hpjax.com/wp-content URLs, tolerating double-slash (//wp-content)
  const liveImgRegex = /(<img[^>]*?)src=["'](https?:\/\/hpjax\.com\/{1,2}wp-content\/uploads\/([^"']+))["']([^>]*>)/gi;
  const imgMatches = [...html.matchAll(liveImgRegex)];

  for (const m of imgMatches) {
    const [full, before, url, urlPath, after] = m;
    // Build a safe local filename from the upload path
    const filename = urlPath.replace(/\//g, "-").replace(/[^a-z0-9._-]/gi, "-").toLowerCase();
    const destPath = join(INLINE_DIR, filename);
    const localSrc = `/images/blog/inline/${filename}`;

    const ok = await downloadImage(url, destPath);
    if (ok) {
      // Ensure alt attribute exists (empty is fine for decorative images)
      let newTag = before + after;
      if (!/alt\s*=/i.test(newTag)) newTag = newTag.replace(/>$/, ' alt="">');
      // Remove old class/style cruft from WP
      newTag = newTag.replace(/\s*class="[^"]*"/gi, "").replace(/\s*style="[^"]*"/gi, "");
      html = html.replace(full, `<img${newTag} src="${localSrc}">`);
      inlineDl++;
    } else {
      // Download failed — strip the broken image
      html = html.replace(full, "");
      inlineFail++;
    }
  }

  post.content = html;

  // Re-generate excerpt from cleaned content if needed
  let excerpt = stripHtml(post.rawExcerpt).trim();
  if (!excerpt) {
    excerpt = stripHtml(html).replace(/\s+/g, " ").trim().slice(0, 200);
    if (excerpt.length === 200) excerpt += "…";
  }
  post.excerpt = excerpt;
}

console.log(`Tables fixed: ${tablesFixed}`);
console.log(`Dead images stripped: ${deadStripped}`);
console.log(`Inline images: ${inlineDl} localized, ${inlineSkip} skipped, ${inlineFail} failed`);

// ── Write posts-data.ts ──────────────────────────────────────────────────────

console.log("Writing lib/posts-data.ts…");

const lines = [
  `import type { BlogPost } from "./posts";`,
  ``,
  `// Generated by scripts/import-wp-xml.mjs — ${new Date().toISOString().slice(0, 10)}`,
  `// ${posts.length} posts imported from WordPress export`,
  `export const POSTS_DATA: BlogPost[] = [`,
];

for (const post of posts) {
  lines.push(`  {`);
  lines.push(`    slug: ${JSON.stringify(post.slug)},`);
  lines.push(`    title: ${JSON.stringify(post.title)},`);
  lines.push(`    excerpt: ${JSON.stringify(post.excerpt)},`);
  lines.push(`    date: ${JSON.stringify(post.date)},`);
  lines.push(`    category: ${JSON.stringify(post.category)},`);
  lines.push(`    tags: ${JSON.stringify(post.tags)},`);
  lines.push(`    image: ${JSON.stringify(post._localImage)},`);
  lines.push(`    imageWidth: 1200,`);
  lines.push(`    imageHeight: 630,`);
  lines.push(`    imageAlt: ${JSON.stringify(post.title + " | Health Pointe Jacksonville")},`);
  lines.push(`    author: ${JSON.stringify(post.author || "Julee Miller")},`);
  if (post.seoTitle) lines.push(`    seoTitle: ${JSON.stringify(post.seoTitle)},`);
  if (post.seoDescription) lines.push(`    seoDescription: ${JSON.stringify(post.seoDescription)},`);
  lines.push(`    content: ${JSON.stringify(post.content)},`);
  lines.push(`  },`);
}

lines.push(`];`);
lines.push(``);

writeFileSync(OUTPUT_PATH, lines.join("\n"), "utf-8");
console.log(`✅ Done — ${posts.length} posts written to lib/posts-data.ts`);

// ── Helpers ──────────────────────────────────────────────────────────────────

function cdata(node) {
  if (node == null) return null;
  if (typeof node === "string") return node;
  if (typeof node === "object") {
    if (node.__cdata != null) return String(node.__cdata);
    if (node["#text"] != null) return String(node["#text"]);
  }
  return String(node);
}

function buildMetaMap(postmeta) {
  const map = {};
  if (!postmeta) return map;
  const arr = Array.isArray(postmeta) ? postmeta : [postmeta];
  for (const meta of arr) {
    const key = cdata(meta["wp:meta_key"]);
    const val = cdata(meta["wp:meta_value"]);
    if (key && val) map[key] = val;
  }
  return map;
}

function stripHtml(html) {
  return (html || "").replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ");
}

function decodeHtmlEntities(str) {
  return (str || "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'");
}

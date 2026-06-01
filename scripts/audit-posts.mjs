/**
 * Blog post audit — checks all 125 posts for:
 *   - Broken / external image URLs
 *   - Images missing alt text in content
 *   - External links (old WP domains, tracking URLs)
 *   - Empty or very thin content
 *   - Missing excerpt, category, seoTitle, seoDescription
 *   - Residual table-based HTML (newsletter templates not fully cleaned)
 *   - Duplicate slugs
 *   - Posts still using logo fallback
 */

import { readFileSync } from "fs";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Load posts-data.ts as text and eval the array ───────────────────────────
const raw = readFileSync(join(__dirname, "../lib/posts-data.ts"), "utf8")
  .replace(/^import type.*;\n?/gm, "")          // strip TS import
  .replace(/: BlogPost\[\]/g, "")               // strip type annotation
  .replace(/export const POSTS_DATA = /, "const POSTS_DATA = ")
  .replace(/;(\s*)$/, "");                       // strip trailing semicolon

let POSTS;
try {
  // eslint-disable-next-line no-eval
  eval(raw + "\n POSTS = POSTS_DATA;");
} catch (e) {
  console.error("Failed to parse posts-data.ts:", e.message);
  process.exit(1);
}

// ── Audit helpers ────────────────────────────────────────────────────────────

const BAD_DOMAINS = [
  "hpjax.webworksjax.com",
  "healthpointeja.wpenginepowered.com",
  "click.health.ibemail.com",
  "www.acufinder.com",
  "acufinder.com",
  "s.w.org",
];

const findings = {
  logoFallback: [],
  externalImages: [],
  imgsMissingAlt: [],
  externalLinks: [],
  residualTables: [],
  thinContent: [],
  noExcerpt: [],
  noCategory: [],
  noTags: [],
  noSeoTitle: [],
  noSeoDesc: [],
  duplicateSlugs: [],
};

const slugSeen = new Map();

for (const post of POSTS) {
  const { slug, title, excerpt, date, category, tags, image, content, seoTitle, seoDescription } = post;

  // Duplicate slugs
  if (slugSeen.has(slug)) {
    findings.duplicateSlugs.push({ slug, title });
  } else {
    slugSeen.set(slug, true);
  }

  // Logo fallback
  if (image === "/images/logo.png") {
    findings.logoFallback.push({ slug, title, date });
  }

  // External featured image
  if (image.startsWith("http")) {
    findings.externalImages.push({ slug, title, image });
  }

  // Missing excerpt
  if (!excerpt || excerpt.trim().length < 20) {
    findings.noExcerpt.push({ slug, title });
  }

  // Missing category
  if (!category || category.trim() === "") {
    findings.noCategory.push({ slug, title });
  }

  // No tags
  if (!tags || tags.length === 0) {
    findings.noTags.push({ slug, title, date });
  }

  // Missing Yoast SEO title
  if (!seoTitle) {
    findings.noSeoTitle.push({ slug, title, date });
  }

  // Missing Yoast SEO description
  if (!seoDescription) {
    findings.noSeoDesc.push({ slug, title, date });
  }

  // Thin content (< 300 chars of text after stripping tags)
  const textContent = (content || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (textContent.length < 300) {
    findings.thinContent.push({ slug, title, date, chars: textContent.length });
  }

  // Residual table HTML
  if (/<table/i.test(content)) {
    findings.residualTables.push({ slug, title, date });
  }

  // Images missing alt in content
  const imgTags = [...(content || "").matchAll(/<img([^>]*)>/gi)];
  for (const [, attrs] of imgTags) {
    // Only flag truly absent alt — empty alt="" is valid for decorative images
    if (!/alt\s*=/i.test(attrs)) {
      findings.imgsMissingAlt.push({ slug, title, attrs: attrs.slice(0, 80) });
    }
  }

  // External links in content
  const links = [...(content || "").matchAll(/href=["']([^"']+)["']/gi)];
  for (const [, href] of links) {
    const isBad = BAD_DOMAINS.some((d) => href.includes(d));
    const isExternal = href.startsWith("http") && !href.includes("hpjax.com");
    if (isBad) {
      findings.externalLinks.push({ slug, title, href: href.slice(0, 100), type: "BAD_DOMAIN" });
    } else if (isExternal && !href.includes("s.w.org")) {
      // Only flag truly suspicious external domains (not general citations)
    }
  }
}

// ── Report ───────────────────────────────────────────────────────────────────

const sep = "─".repeat(70);

function section(title, items, formatter) {
  console.log(`\n${sep}`);
  console.log(`${title.toUpperCase()} (${items.length})`);
  console.log(sep);
  if (items.length === 0) {
    console.log("  ✅ None");
  } else {
    items.forEach((item) => console.log("  " + formatter(item)));
  }
}

console.log("\n========================================");
console.log("  HPJAX BLOG AUDIT — " + new Date().toLocaleDateString());
console.log("  Total posts: " + POSTS.length);
console.log("========================================");

section("Duplicate slugs", findings.duplicateSlugs,
  (i) => `❌ ${i.slug}`);

section("Residual table HTML (newsletter templates not fully cleaned)", findings.residualTables,
  (i) => `⚠️  [${i.date}] ${i.title}`);

section("Thin content (< 300 chars of text)", findings.thinContent,
  (i) => `⚠️  [${i.date}] ${i.title} — ${i.chars} chars`);

section("External / bad-domain links in content", findings.externalLinks,
  (i) => `⚠️  [${i.type}] ${i.slug}\n       → ${i.href}`);

section("Images missing alt text in content", findings.imgsMissingAlt,
  (i) => `⚠️  ${i.slug}\n       attrs: ${i.attrs}`);

section("External featured images (should be local)", findings.externalImages,
  (i) => `❌ ${i.slug} → ${i.image}`);

section("Posts using logo fallback (no featured image)", findings.logoFallback,
  (i) => `📷 [${i.date}] ${i.title.slice(0, 60)}`);

section("Missing Yoast SEO title", findings.noSeoTitle,
  (i) => `[${i.date}] ${i.title.slice(0, 60)}`);

section("Missing Yoast SEO description", findings.noSeoDesc,
  (i) => `[${i.date}] ${i.title.slice(0, 60)}`);

section("No tags", findings.noTags,
  (i) => `[${i.date}] ${i.title.slice(0, 60)}`);

section("No excerpt", findings.noExcerpt,
  (i) => `${i.slug}`);

section("No category", findings.noCategory,
  (i) => `${i.slug}`);

// ── Summary ──────────────────────────────────────────────────────────────────

console.log("\n" + sep);
console.log("SUMMARY");
console.log(sep);
const critical = findings.duplicateSlugs.length + findings.externalImages.length;
const warnings = findings.residualTables.length + findings.thinContent.length +
  findings.externalLinks.length + findings.imgsMissingAlt.length;
const seo = findings.noSeoTitle.length + findings.noSeoDesc.length + findings.noTags.length;
const info = findings.logoFallback.length;

console.log(`  ❌ Critical  : ${critical}`);
console.log(`  ⚠️  Warnings  : ${warnings}`);
console.log(`  🔍 SEO gaps  : ${seo}`);
console.log(`  📷 No image  : ${info} (using logo fallback)`);
console.log(sep + "\n");

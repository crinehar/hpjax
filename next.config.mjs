import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Extract blog slugs from posts-data.ts without importing TypeScript
function getBlogSlugs() {
  const content = readFileSync(join(__dirname, "lib/posts-data.ts"), "utf8");
  const matches = content.match(/slug:\s*["']([^"']+)["']/g) || [];
  return matches.map((m) => m.match(/["']([^"']+)["']$/)[1]);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "hpjax.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "cdn.shopify.com" },
    ],
  },
  async redirects() {
    const blogSlugs = getBlogSlugs();

    // Generate both trailing-slash and non-trailing-slash variants for each blog post
    const blogRedirects = blogSlugs.flatMap((slug) => [
      { source: `/${slug}`, destination: `/blog/${slug}`, permanent: true },
      { source: `/${slug}/`, destination: `/blog/${slug}`, permanent: true },
    ]);

    return [
      // /book — redirect to AcuBliss booking portal
      {
        source: "/book",
        destination: "https://healthpointejacksonville.acubliss.app/portal/booking/",
        permanent: false,
      },
      {
        source: "/book/",
        destination: "https://healthpointejacksonville.acubliss.app/portal/booking/",
        permanent: false,
      },
      // Dr. Julee Miller profile — old WP slug
      { source: "/about-acupuncture-physician", destination: "/our-team/dr-julee-miller", permanent: true },
      { source: "/about-acupuncture-physician/", destination: "/our-team/dr-julee-miller", permanent: true },
      // Denise — old WP slug
      { source: "/denise-lead-lmt", destination: "/our-team/denise", permanent: true },
      { source: "/denise-lead-lmt/", destination: "/our-team/denise", permanent: true },
      // Yaira — old WP slug
      { source: "/yaira-lmt", destination: "/our-team/yaira", permanent: true },
      { source: "/yaira-lmt/", destination: "/our-team/yaira", permanent: true },
      // Damaris — old WP slug
      { source: "/damaris", destination: "/our-team/damaris", permanent: true },
      { source: "/damaris/", destination: "/our-team/damaris", permanent: true },
      // Dana — old WP slug
      { source: "/dana", destination: "/our-team/dana", permanent: true },
      { source: "/dana/", destination: "/our-team/dana", permanent: true },
      // Angel — old WP slug
      { source: "/angel", destination: "/our-team/angel", permanent: true },
      { source: "/angel/", destination: "/our-team/angel", permanent: true },
      // Blog posts — WP had no /blog/ prefix, new site does
      ...blogRedirects,
    ];
  },
};

export default nextConfig;

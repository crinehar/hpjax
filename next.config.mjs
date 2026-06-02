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
    return [
      // Dr. Julee Miller profile — old WP slug
      {
        source: "/about-acupuncture-physician",
        destination: "/our-team/dr-julee-miller",
        permanent: true,
      },
      {
        source: "/about-acupuncture-physician/",
        destination: "/our-team/dr-julee-miller",
        permanent: true,
      },
      // Denise — old WP slug
      {
        source: "/denise-lead-lmt",
        destination: "/our-team/denise",
        permanent: true,
      },
      {
        source: "/denise-lead-lmt/",
        destination: "/our-team/denise",
        permanent: true,
      },
      // Yaira — old WP slug
      {
        source: "/yaira-lmt",
        destination: "/our-team/yaira",
        permanent: true,
      },
      {
        source: "/yaira-lmt/",
        destination: "/our-team/yaira",
        permanent: true,
      },
      // Damaris — old WP slug
      {
        source: "/damaris",
        destination: "/our-team/damaris",
        permanent: true,
      },
      {
        source: "/damaris/",
        destination: "/our-team/damaris",
        permanent: true,
      },
      // Dana — old WP slug
      {
        source: "/dana",
        destination: "/our-team/dana",
        permanent: true,
      },
      {
        source: "/dana/",
        destination: "/our-team/dana",
        permanent: true,
      },
      // Angel — old WP slug
      {
        source: "/angel",
        destination: "/our-team/angel",
        permanent: true,
      },
      {
        source: "/angel/",
        destination: "/our-team/angel",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

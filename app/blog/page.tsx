import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Blog",
  description: "Wellness tips, acupuncture insights, and health news from the practitioners at Health Pointe Jacksonville.",
  alternates: { canonical: "https://hpjax.com/blog" },
};

// TODO: Replace with WordPress REST API call using WORDPRESS_API_URL env var
// e.g. fetch(`${process.env.WORDPRESS_API_URL}/wp/v2/posts?_embed&per_page=12`)
const PLACEHOLDER_POSTS = [
  {
    slug: "acupuncture-for-fertility",
    title: "How Acupuncture Supports Fertility",
    excerpt: "Research shows acupuncture can improve blood flow to reproductive organs and balance hormones. Here's what the evidence says.",
    date: "2025-04-10",
    category: "Fertility",
  },
  {
    slug: "pelvic-floor-basics",
    title: "Pelvic Floor Health 101",
    excerpt: "Many people don't realize how the pelvic floor affects daily life. Learn the basics and when to seek treatment.",
    date: "2025-03-22",
    category: "Women's Health",
  },
  {
    slug: "acupuncture-long-covid",
    title: "Acupuncture and Long COVID Recovery",
    excerpt: "Emerging research supports acupuncture as a complementary therapy for fatigue, brain fog, and other Long COVID symptoms.",
    date: "2025-02-14",
    category: "Long COVID",
  },
  {
    slug: "seasonal-wellness-tips",
    title: "Seasonal Wellness: Spring TCM Guide",
    excerpt: "Traditional Chinese Medicine recognizes spring as the season of the liver. Here's how to support your health this season.",
    date: "2025-01-30",
    category: "Wellness",
  },
];

export default function BlogPage() {
  return (
    <>
      <section aria-labelledby="blog-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h1 id="blog-heading" className="section-heading">Wellness Blog</h1>
            <p className="section-subheading max-w-2xl mx-auto">
              Insights, tips, and research from our practitioners to help you live your healthiest life.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PLACEHOLDER_POSTS.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <article className="bg-white rounded-xl border border-surface-muted overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <div className="h-48 bg-surface-muted" aria-label="Post feature image placeholder" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <time dateTime={post.date} className="text-xs text-ink-subtle">
                        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </time>
                    </div>
                    <h2 className="font-heading font-bold text-ink text-lg mb-2 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`} className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-ink-muted text-sm leading-relaxed">{post.excerpt}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}

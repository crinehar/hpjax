import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BookingCTA from "@/components/BookingCTA";

// TODO: Replace with WordPress REST API call using WORDPRESS_API_URL env var
const PLACEHOLDER_POSTS: Record<string, { title: string; date: string; category: string; content: string }> = {
  "acupuncture-for-fertility": {
    title: "How Acupuncture Supports Fertility",
    date: "2025-04-10",
    category: "Fertility",
    content: "Research shows acupuncture can improve blood flow to reproductive organs and balance hormones. This is placeholder content — connect the WordPress REST API to populate real posts.",
  },
  "pelvic-floor-basics": {
    title: "Pelvic Floor Health 101",
    date: "2025-03-22",
    category: "Women's Health",
    content: "Many people don't realize how the pelvic floor affects daily life. This is placeholder content — connect the WordPress REST API to populate real posts.",
  },
  "acupuncture-long-covid": {
    title: "Acupuncture and Long COVID Recovery",
    date: "2025-02-14",
    category: "Long COVID",
    content: "Emerging research supports acupuncture as a complementary therapy for Long COVID symptoms. This is placeholder content — connect the WordPress REST API to populate real posts.",
  },
  "seasonal-wellness-tips": {
    title: "Seasonal Wellness: Spring TCM Guide",
    date: "2025-01-30",
    category: "Wellness",
    content: "Traditional Chinese Medicine recognizes spring as the season of the liver. This is placeholder content — connect the WordPress REST API to populate real posts.",
  },
};

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  // TODO: fetch slugs from WordPress REST API
  return Object.keys(PLACEHOLDER_POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = PLACEHOLDER_POSTS[params.slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.content.slice(0, 155),
    alternates: { canonical: `https://hpjax.com/blog/${params.slug}` },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = PLACEHOLDER_POSTS[params.slug];
  if (!post) notFound();

  return (
    <>
      <article>
        <header className="bg-ink py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-primary bg-primary/20 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <time dateTime={post.date} className="text-xs text-gray-400">
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </header>

        <div className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-ink-muted leading-relaxed">
              <p>{post.content}</p>
            </div>
          </div>
        </div>
      </article>

      <BookingCTA />
    </>
  );
}

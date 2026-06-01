import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingCTA from "@/components/BookingCTA";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `https://hpjax.com/blog/${params.slug}` },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [{ url: `https://hpjax.com${post.image}` }],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <article>
        {/* Header */}
        <header className="bg-ink py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Link
                href="/blog"
                className="text-xs font-semibold text-primary bg-primary/20 px-3 py-1 rounded-full hover:bg-primary/30 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full"
              >
                {post.category}
              </Link>
              <time dateTime={post.date} className="text-xs text-gray-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.author && (
                <span className="text-xs text-gray-400">by {post.author}</span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
              {post.title}
            </h1>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4" aria-label="Post tags">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-300 bg-white/10 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Featured image */}
        {post.image === "/images/logo.png" ? (
          <div className="h-4 bg-teal" />
        ) : (
          <div className="relative h-64 md:h-96 bg-surface-muted">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-ink prose-p:text-ink-muted prose-a:text-teal-dark prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-surface-muted">
              <Link
                href="/blog"
                className="text-teal-dark font-medium hover:text-teal underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>

      <BookingCTA />
    </>
  );
}

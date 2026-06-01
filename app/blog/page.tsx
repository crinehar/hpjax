import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import BlogGrid from "@/components/BlogGrid";
import { getAllPostSummaries, getAllCategories } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Acupuncture Blog & Wellness Tips",
  description:
    "Read acupuncture insights from Health Pointe Jacksonville, covering fertility, women's health, pelvic floor care, pain support, and self-care tips. Book online.",
  alternates: { canonical: "https://hpjax.com/blog" },
  openGraph: {
    title: "Acupuncture Blog & Wellness Tips | Health Pointe Jacksonville",
    description:
      "Read acupuncture insights from Health Pointe Jacksonville, covering fertility, women's health, pelvic floor care, pain support, and self-care tips. Book online.",
  },
};

export default function BlogPage() {
  const posts = getAllPostSummaries();
  const categories = getAllCategories();

  return (
    <>
      {/* Page header with background image */}
      <header className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/jacksonville-acupuncture-services.jpg"
          alt="Acupuncture and wellness treatment room at Health Pointe Jacksonville"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
        <div className="relative z-10 text-center px-4">
          <h1
            id="blog-heading"
            className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-3"
          >
            Acupuncture and Wellness Blog
          </h1>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto">
            Serving Acupuncture &amp; Massage Therapies in the greater
            Jacksonville, FL area for 17 years (and counting!)
          </p>
        </div>
      </header>

      {/* Blog grid */}
      <section aria-labelledby="blog-heading" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogGrid posts={posts} categories={categories} />
        </div>
      </section>

      <BookingCTA />
    </>
  );
}

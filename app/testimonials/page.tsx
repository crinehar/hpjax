import type { Metadata } from "next";
import Image from "next/image";
import BookingCTA from "@/components/BookingCTA";
import ReviewsGrid from "@/components/ReviewsGrid";
import { getAllReviews, getAllReviewCategories } from "@/lib/reviews";
import { testimonialsPageSchema } from "@/lib/schema";

const OG_IMAGE = "/images/patient-testimonials-acupuncture-jacksonville-fl.jpg";

export const metadata: Metadata = {
  title: "testimonials post-partum care, Jacksonville, FL, acupuncture and fertility",
  description:
    "Jacksonville, FL's Health Pointe features patient testimonials on important subjects such as post-partum care, fibromyalgia, acupuncture and fertility",
  alternates: { canonical: "https://hpjax.com/testimonials" },
  openGraph: {
    title: "testimonials post-partum care, Jacksonville, FL, acupuncture and fertility | Health Pointe Jacksonville",
    description:
      "Jacksonville, FL's Health Pointe features patient testimonials on important subjects such as post-partum care, fibromyalgia, acupuncture and fertility",
    images: [{ url: OG_IMAGE, width: 1500, height: 1000, alt: "Acupuncture treatment at Health Pointe Jacksonville" }],
  },
};

export default function TestimonialsPage() {
  const reviews = getAllReviews();
  const categories = getAllReviewCategories();

  const schema = testimonialsPageSchema(
    reviews.map((r) => ({ name: r.name, quote: r.quote, date: r.date, category: r.categories[0] }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src={OG_IMAGE}
          alt="Acupuncturist placing needles on a patient's back during treatment at Health Pointe Jacksonville, FL"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-3">
            Patient Testimonials
          </h1>
          <p className="text-white text-base md:text-lg">
            Our patient testimonials feature treatment success from a large variety of medical conditions in Jacksonville, FL
          </p>
        </div>
      </header>

      <section aria-label="Patient reviews" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReviewsGrid reviews={reviews} categories={categories} />
        </div>
      </section>

      <BookingCTA />
    </>
  );
}

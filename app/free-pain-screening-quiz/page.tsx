import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PainQuizForm from "@/components/PainQuizForm";
import { breadcrumbSchema, localBusinessEntity } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Free Pain Screening Quiz | Health Pointe Jacksonville",
  description:
    "Take the free pain screening quiz to pinpoint pain location, triggers, and symptoms. Get a clearer starting point and book online for the next steps today.",
  alternates: { canonical: "https://hpjax.com/free-pain-screening-quiz/" },
  openGraph: {
    title: "Free Pain Screening Quiz | Health Pointe Jacksonville",
    description:
      "Take our free pain screening quiz to help identify your pain patterns and find the right treatment.",
    images: [
      {
        url: "https://hpjax.com/images/free-pain-screening-quiz-chronic-pain-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "Person with knee pain — free pain screening quiz at Health Pointe Jacksonville",
      },
    ],
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/free-pain-screening-quiz/`;

export default function FreePainScreeningQuizPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Free Pain Screening Quiz | Health Pointe Jacksonville",
        description:
          "Take the free pain screening quiz to pinpoint pain location, triggers, and symptoms. Get a clearer starting point and book online for the next steps today.",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Free Pain Screening Quiz", href: "/free-pain-screening-quiz/" },
      ]),
      { ...localBusinessEntity },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <header
        aria-labelledby="page-heading"
        className="relative min-h-[18rem] md:min-h-[22rem] flex items-center justify-center overflow-hidden py-12"
      >
        <Image
          src="/images/free-pain-screening-quiz-chronic-pain-jacksonville-fl.jpg"
          alt="Person with knee pain — free pain screening quiz at Health Pointe Jacksonville"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1
            id="page-heading"
            className="font-heading font-bold text-white text-3xl md:text-4xl leading-tight"
          >
            Free Pain Screening Quiz
          </h1>
        </div>
      </header>

      {/* ── Intro ───────────────────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 id="intro-heading" className="section-heading mb-6">
              About This Quiz
            </h2>
            <p className="text-ink-muted leading-relaxed text-lg mb-4">
              Pain presents itself in many different ways, at different times and in many cases is triggered by specific activities.
            </p>
            <p className="text-ink-muted leading-relaxed text-lg">
              Health Pointe Jacksonville pioneers cutting edge innovative solutions to treat pain to help you live pain free. Our goal is to provide you with pain relieving treatments so that you can get back to living life to its fullest.
            </p>
          </ScrollReveal>

          <h2 className="font-heading font-bold text-ink text-xl mb-8 text-center">
            Quiz questions: please answer the following questions as accurately as possible
          </h2>

          <PainQuizForm />
        </div>
      </section>
    </>
  );
}

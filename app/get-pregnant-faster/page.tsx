import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import FertilityQuizForm from "@/components/FertilityQuizForm";
import { breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Get Pregnant Faster Quiz | Health Pointe Jacksonville",
  description:
    "Take the free fertility quiz if you're trying to conceive. Review cycle patterns, hormone clues, and next steps, plus tools from Health Pointe Jacksonville.",
  alternates: { canonical: "https://hpjax.com/get-pregnant-faster/" },
  openGraph: {
    title: "Get Pregnant Faster Quiz | Health Pointe Jacksonville",
    description:
      "Take the free fertility quiz if you're trying to conceive. Review cycle patterns, hormone clues, and next steps, plus tools from Health Pointe Jacksonville.",
    images: [
      {
        url: "https://hpjax.com/images/get-pregnant-faster-fertility-acupuncture-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "Happy mother and baby — fertility acupuncture at Health Pointe Jacksonville",
      },
    ],
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/get-pregnant-faster/`;

export default function GetPregnantFasterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Get Pregnant Faster Quiz | Health Pointe Jacksonville",
        description:
          "Take the free fertility quiz if you're trying to conceive. Review cycle patterns, hormone clues, and next steps, plus tools from Health Pointe Jacksonville.",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
        provider: { "@id": `${SITE_URL}/#practitioner` },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Get Pregnant Faster", href: "/get-pregnant-faster/" },
      ]),
      { ...localBusinessEntity },
      { ...drJuleeMillerEntity },
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
          src="/images/get-pregnant-faster-fertility-acupuncture-jacksonville-fl.jpg"
          alt="Happy mother holding her baby — fertility acupuncture at Health Pointe Jacksonville"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1
            id="page-heading"
            className="font-heading font-bold text-white text-3xl md:text-4xl leading-tight"
          >
            Get Pregnant Faster!
          </h1>
        </div>
      </header>

      {/* ── Intro + Form ────────────────────────────────────────────────────── */}
      <section aria-labelledby="quiz-heading" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="quiz-heading" className="section-heading mb-4 text-center">
              Take the Quiz
            </h2>
            <p className="text-ink-muted leading-relaxed text-lg text-center mb-10">
              Take the quiz &amp; get free tools from me that will help you improve egg quality, balance hormones &amp; enhance fertility so you can get pregnant faster.
            </p>
          </ScrollReveal>
          <FertilityQuizForm />
        </div>
      </section>
    </>
  );
}

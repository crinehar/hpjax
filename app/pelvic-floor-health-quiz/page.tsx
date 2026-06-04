import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PelvicFloorQuizForm from "@/components/PelvicFloorQuizForm";
import { breadcrumbSchema, localBusinessEntity } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pelvic Floor Health Quiz | Health Pointe Jacksonville",
  description:
    "Take the pelvic floor health quiz to review symptoms like leaks, heaviness, and pelvic pain. Get a clearer starting point and book online for the next steps.",
  alternates: { canonical: "https://hpjax.com/pelvic-floor-health-quiz/" },
  openGraph: {
    title: "Pelvic Floor Health Quiz | Health Pointe Jacksonville",
    description:
      "Take the pelvic floor health quiz to review symptoms like leaks, heaviness, and pelvic pain. Get a clearer starting point and book online for the next steps.",
    images: [
      {
        url: "https://hpjax.com/images/pelvic-floor-health-quiz-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "Pelvic floor health quiz — Health Pointe Jacksonville",
      },
    ],
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/pelvic-floor-health-quiz/`;

export default function PelvicFloorHealthQuizPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Pelvic Floor Health Quiz | Health Pointe Jacksonville",
        description:
          "Take the pelvic floor health quiz to review symptoms like leaks, heaviness, and pelvic pain. Get a clearer starting point and book online for the next steps.",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Pelvic Floor Health Quiz", href: "/pelvic-floor-health-quiz/" },
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
          src="/images/pelvic-floor-health-quiz-jacksonville-fl.jpg"
          alt="Woman resting hands on abdomen — pelvic floor health quiz at Health Pointe Jacksonville"
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
            Is Your Pelvic Floor Trying to Tell You Something?
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
            <p className="text-ink-muted leading-relaxed text-lg text-center mb-3">
              Take the quiz &amp; get free tools from me that will help you strengthen your pelvic floor, improve bladder control, and enhance core stability so you can feel more confident and supported every day.
            </p>
            <p className="text-ink-muted leading-relaxed text-center mb-10">
              Answer the questions below honestly. For each &lsquo;Yes,&rsquo; give yourself 1 point.
            </p>
          </ScrollReveal>
          <PelvicFloorQuizForm />
        </div>
      </section>
    </>
  );
}

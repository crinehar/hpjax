import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { faqSchema, breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";

export const metadata: Metadata = {
  title: "Long Covid Support Jacksonville, FL | Health Pointe",
  description:
    "Long Covid support in Jacksonville, FL, for fatigue, brain fog, neuropathy, and loss of taste or smell. Explore options, what to expect, and book online today.",
  alternates: { canonical: "https://hpjax.com/services/long-covid-syndrome/" },
  openGraph: {
    title: "Long Covid Support Jacksonville, FL | Health Pointe",
    description:
      "Long Covid support in Jacksonville, FL, for fatigue, brain fog, neuropathy, and loss of taste or smell. Explore options, what to expect, and book online today.",
    images: [
      {
        url: "https://hpjax.com/images/long-covid-fatigue-symptoms-acupuncture-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "Man experiencing Long COVID fatigue symptoms — acupuncture treatment at Health Pointe Jacksonville",
      },
    ],
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/long-covid-syndrome/`;

const symptomGroups = [
  {
    heading: "Respiratory & Cardiovascular Issues",
    items: [
      "Shortness of breath",
      "Heart palpitations",
      "Coughing",
      "Chest pain",
    ],
  },
  {
    heading: "Neurological & Mental Health Symptoms",
    items: [
      "Headache",
      "Difficulty concentrating or 'brain fog'",
      "Stress and anxiety",
      "Depression and fear",
      "Grief and sadness",
    ],
  },
  {
    heading: "Physical & Digestive Complications",
    items: [
      "Chronic fatigue",
      "Joint and muscle pain",
      "Loss of smell, taste, or appetite",
      "Neuropathy",
      "Digestive issues",
      "Nausea",
    ],
  },
];

const faqs = [
  {
    q: "How Does Acupuncture Support Long COVID Recovery?",
    a: "Acupuncture helps restore balance in the body by improving circulation, reducing inflammation, and supporting immune function. Many Long COVID patients experience relief from symptoms like fatigue, brain fog, and shortness of breath after consistent treatments.",
  },
  {
    q: "What Should I Expect During Treatment?",
    a: "Each session is tailored to your specific symptoms and needs. Treatments may include acupuncture, herbal medicine, and lifestyle recommendations to help regulate your nervous system, improve lung function, and boost energy levels over time.",
  },
  {
    q: "How Soon Will I See Results?",
    a: "Results vary based on symptom severity and overall health, but many patients notice improvements within a few sessions. Acupuncture works cumulatively, so regular treatments can provide long-term benefits in managing lingering Long COVID symptoms.",
  },
];

const LONG_COVID_REVIEW_SLUGS = ["allison-barrett", "janice-h", "gerd-k"];

const longCovidReviews = LONG_COVID_REVIEW_SLUGS.map((slug, i) => {
  const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
  return { id: i + 1, name: r.name, quote: r.quote };
});

export default function LongCovidPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Long Covid Support Jacksonville, FL | Health Pointe",
        description:
          "Long Covid support in Jacksonville, FL, for fatigue, brain fog, neuropathy, and loss of taste or smell. Explore options, what to expect, and book online today.",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
        about: {
          "@type": "MedicalCondition",
          name: "Long COVID Syndrome",
          alternateName: "Post-Acute Sequelae of SARS-CoV-2 (PASC)",
          possibleTreatment: {
            "@type": "MedicalTherapy",
            name: "Acupuncture",
          },
        },
        provider: { "@id": `${SITE_URL}/#practitioner` },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Long COVID Acupuncture",
        description:
          "Holistic, evidence-based acupuncture and integrative care for Long COVID recovery, addressing fatigue, brain fog, neuropathy, respiratory symptoms, and sensory loss.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Jacksonville, FL" },
          { "@type": "AdministrativeArea", name: "Duval County, FL" },
        ],
        url: PAGE_URL,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Long COVID Treatment Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acupuncture for Long COVID Fatigue" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brain Fog Treatment" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ozone Therapy for Long COVID" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electroacupuncture" } },
          ],
        },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Long COVID Care", href: "/services/long-covid-syndrome/" },
      ]),
      faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
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
        className="relative min-h-[20rem] md:min-h-[26rem] flex items-center justify-center overflow-hidden py-12"
      >
        <Image
          src="/images/long-covid-fatigue-symptoms-acupuncture-jacksonville-fl.jpg"
          alt="Man experiencing Long COVID fatigue symptoms — acupuncture treatment at Health Pointe Jacksonville"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1
            id="page-heading"
            className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-6"
          >
            Long COVID Care in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Navigate the complexities of Long Covid Syndrome with our holistic, evidence-based approach tailored for your recovery. Embrace innovative care that transforms challenges into steps toward reclaiming your vitality and wellness.
          </p>
        </div>
      </header>

      {/* ── Intro ───────────────────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="intro-heading" className="section-heading mb-6">
              For Long Covid Patients, Acupuncture Is Often the Last Resort, Yielding the Best Result
            </h2>
            <p className="text-ink-muted leading-relaxed mb-5">
              About a third of people who have had Covid develop long-term symptoms. Long Covid or chronic Covid syndrome (CCS), is a condition characterized by a collection of symptoms that persist long after the acute phase of Covid-19.
            </p>
            <p className="text-ink-muted leading-relaxed mb-8">
              Health Pointe Jacksonville has a unique and powerful approach for treating long Covid symptoms using state of the art technologies including Ozone Therapy, FSM microcurrent technology, Brain Tap&apos;s &ldquo;brain therapy&rdquo;, and electroacupuncture have offered many patients excellent results with Post-Covid Conditions, or Long COVID. Some of the most common symptoms successfully treated are fatigue, brain fog, neuropathy, paresthesia, headaches, depression, anxiety, anosmia, and poor memory.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Your Session Now (opens in new tab)"
              className="btn-primary"
            >
              Book Your Session Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What We Treat ───────────────────────────────────────────────────── */}
      <section aria-labelledby="symptoms-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 id="symptoms-heading" className="section-heading">What We Treat</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {symptomGroups.map((group, i) => (
              <ScrollReveal key={group.heading} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-muted h-full">
                  <h3 className="font-heading font-bold text-teal-dark text-xl mb-5">{group.heading}</h3>
                  <div role="list" className="space-y-2">
                    {group.items.map((item) => (
                      <div key={item} role="listitem" className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-teal-dark" aria-hidden="true" />
                        <span className="text-ink-muted text-sm leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="why-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="mb-10">
            <h2 id="why-heading" className="section-heading">
              Why Choose Acupuncture for Long Covid Recovery?
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-ink-muted leading-relaxed">
              Acupuncture provides a natural, holistic approach addressing imbalance root causes. This therapy improves circulation, reduces inflammation, regulates immune function, and restores energy while alleviating fatigue, brain fog, respiratory issues, and emotional distress.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/long-covid-acupuncture-treatment-jacksonville-fl.jpg", label: "Acupuncture" },
              { src: "/images/long-covid-herbal-vitamin-injections-jacksonville-fl.webp", label: "Herbal Prescriptions / Vitamin Injections" },
              { src: "/images/long-covid-recovery-lifestyle-changes-jacksonville-fl.jpg", label: "Nutritional / Lifestyle Changes" },
            ].map(({ src, label }) => (
              <figure key={label} className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image src={src} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 bg-ink/30" aria-hidden="true" />
                <figcaption className="absolute bottom-4 left-0 right-0 text-center text-white font-semibold text-base drop-shadow">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Quote (full-bleed) ──────────────────────────────────────── */}
      <section aria-label="Research on acupuncture and Long COVID" className="relative py-24 overflow-hidden">
        <Image
          src="/images/long-covid-coronavirus-acupuncture-research-jacksonville-fl.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/75" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <blockquote>
              <p className="font-heading font-semibold text-white text-xl md:text-2xl leading-relaxed italic mb-6">
                &ldquo;Recent reports provide early evidence of acupuncture&apos;s effectiveness in managing Long COVID symptoms and may also have disease-modifying benefits.&rdquo;
              </p>
              <cite className="text-sm font-semibold text-white/80 not-italic">
                —{" "}
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/35832109/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Emperor's College of Traditional Medicine study on PubMed (opens in new tab)"
                  className="underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
                >
                  Emperor&apos;s College of Traditional Medicine
                </a>
              </cite>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="faq-heading" className="section-heading">What to Know About Acupuncture for Long COVID</h2>
          </ScrollReveal>
          <dl className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl px-7 py-6 shadow-sm border border-surface-muted">
                <dt className="font-heading font-semibold text-ink text-lg mb-3">{q}</dt>
                <dd className="text-ink-muted leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Full-bleed band ─────────────────────────────────────────────────── */}
      <section aria-labelledby="reclaim-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/long-covid-recovery-friends-beach-jacksonville-fl.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="reclaim-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-8">
              Ready to Reclaim Your Health?
            </h2>
            <p className="text-white/90 leading-relaxed text-lg max-w-2xl mx-auto mb-10">
              Dr. Miller evaluates your specific needs to determine how best to support your recovery. Health Pointe Jacksonville blends time-tested acupuncture science with innovative medical solutions for measurable, long-lasting results.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Your Session Now (opens in new tab)"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book Your Session Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Aftercare ───────────────────────────────────────────────────────── */}
      <section aria-labelledby="aftercare-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="aftercare-heading" className="section-heading mb-6">
              Acupuncture Aftercare and Follow-Up
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-2xl mx-auto">
              To get the most out of your acupuncture treatments, proper aftercare is essential. While some patients experience immediate relief and relaxation, others may feel mild fatigue as their body adjusts and begins to heal. To maximize your results, it&apos;s important to stay hydrated, rest, and avoid strenuous activities for the remainder of the day. These steps support the body&apos;s natural healing process, reduce inflammation, and enhance the long-term benefits of your treatment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────────────── */}
      <TestimonialCarousel testimonials={longCovidReviews} />

      {/* ── Address ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Clinic location"
        className="py-12 bg-surface text-center border-t border-surface-muted"
      >
        <address className="not-italic text-ink-muted text-sm leading-relaxed">
          <strong className="text-ink font-semibold">Health Pointe Jacksonville</strong>
          <br />
          3840 Belfort Rd STE 305, Jacksonville, FL 32216
          <br />
          <a
            href="tel:9044480046"
            className="hover:text-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
          >
            (904) 448-0046
          </a>
        </address>
      </section>

      {/* ── BookingCTA ──────────────────────────────────────────────────────── */}
      <BookingCTA
        heading="Ready to reclaim your life after Long COVID?"
        body="Schedule your consultation at Health Pointe Jacksonville and get a personalized recovery plan built around your specific symptoms."
        ctaLabel="Book Your Session Now"
      />
    </>
  );
}

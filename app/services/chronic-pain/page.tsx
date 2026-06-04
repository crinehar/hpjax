import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { faqSchema, breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";

export const metadata: Metadata = {
  title: "Chronic Pain Acupuncture | Health Pointe Jacksonville",
  description:
    "Chronic pain acupuncture Jacksonville FL. Sciatica, neuropathy and arthritis treated at the root cause. Health Pointe Jacksonville.",
  alternates: { canonical: "https://hpjax.com/services/chronic-pain/" },
  openGraph: {
    title: "Chronic Pain Acupuncture | Health Pointe Jacksonville",
    description:
      "Chronic pain acupuncture Jacksonville FL. Sciatica, neuropathy and arthritis treated at the root cause. Health Pointe Jacksonville.",
    images: [
      {
        url: "https://hpjax.com/images/chronic-pain-headache-acupuncture-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "Chronic pain relief through acupuncture at Health Pointe Jacksonville",
      },
    ],
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/chronic-pain/`;

const conditionGroups = [
  {
    heading: "Chronic Pain Conditions",
    items: [
      "Arthritis",
      "Back pain",
      "Sciatica",
      "Migraines",
    ],
  },
  {
    heading: "Acupuncture Therapies",
    items: [
      "Traditional Chinese Medicine (TCM)",
      "Electro-acupuncture",
      "Cupping therapy",
      "Trigger point therapy",
    ],
  },
  {
    heading: "Supportive Care",
    items: [
      "Herbal medicine",
      "Therapeutic exercises",
      "Stress management",
      "Follow-up treatments",
    ],
  },
];

const faqs = [
  {
    q: "How Does Acupuncture Help Manage Chronic Pain?",
    a: "Acupuncture helps manage chronic pain by promoting the body's ability to heal itself. It reduces inflammation, enhances blood circulation, and triggers the release of endorphins, which help reduce pain and improve mobility, offering a natural alternative to pain medications.",
  },
  {
    q: "What Areas of the Body Does Acupuncture Target for Pain Relief?",
    a: "Depending on the pain's source, acupuncture targets specific areas such as the back, neck, joints, or muscles. By focusing on these regions, acupuncture not only alleviates immediate pain but also improves long-term recovery by restoring balance to the nervous system and enhancing tissue repair.",
  },
  {
    q: "What Are the Long-Term Benefits of Acupuncture for Chronic Pain?",
    a: "In addition to short-term pain relief, acupuncture works to strengthen the body's long-term resilience against chronic pain. Regular treatments can help prevent flare-ups, reduce reliance on pain medications, and improve overall physical function, leading to a higher quality of life.",
  },
];

const CHRONIC_PAIN_REVIEW_SLUGS = ["kelly-l", "hector-c", "lilliana-i"];

const chronicPainReviews = CHRONIC_PAIN_REVIEW_SLUGS.map((slug, i) => {
  const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
  return { id: i + 1, name: r.name, quote: r.quote };
});

export default function ChronicPainPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Chronic Pain Acupuncture | Health Pointe Jacksonville",
        description:
          "Chronic pain acupuncture Jacksonville FL. Sciatica, neuropathy and arthritis treated at the root cause. Health Pointe Jacksonville.",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
        about: {
          "@type": "MedicalCondition",
          name: "Chronic Pain",
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
        name: "Chronic Pain Acupuncture",
        description:
          "Acupuncture for chronic pain at Health Pointe Jacksonville — addressing arthritis, back pain, sciatica, and migraines through personalized, root-cause treatment.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Jacksonville, FL" },
          { "@type": "AdministrativeArea", name: "Duval County, FL" },
        ],
        url: PAGE_URL,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Chronic Pain Treatment Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acupuncture for Arthritis" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acupuncture for Back Pain" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acupuncture for Sciatica" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acupuncture for Migraine Relief" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electro-Acupuncture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cupping Therapy" } },
          ],
        },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Chronic Pain", href: "/services/chronic-pain/" },
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
          src="/images/chronic-pain-headache-acupuncture-jacksonville-fl.jpg"
          alt="Person finding relief from chronic pain through acupuncture at Health Pointe Jacksonville"
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
            Chronic Pain Acupuncture in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed">
            An integrative time tested approach to healthcare. Do you struggle to get through your day? We invite you to experience care that allows you to stop suffering, and start living the life of your dreams.
          </p>
        </div>
      </header>

      {/* ── Intro ───────────────────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="intro-heading" className="section-heading mb-6">
              Chronic Pain Relief with Acupuncture
            </h2>
            <p className="text-ink-muted leading-relaxed mb-5">
              Chronic pain can significantly impact your quality of life, but acupuncture offers a natural and effective solution. By stimulating the body&apos;s healing processes, acupuncture helps alleviate pain, reduce inflammation, and improve circulation. Whether you&apos;re dealing with back pain, arthritis, fibromyalgia, or nerve pain, our personalized treatments at Health Pointe Jacksonville target the root causes of discomfort, providing lasting relief and preventing future flare-ups.
            </p>
            <p className="text-ink-muted leading-relaxed mb-8">
              Ready to find relief? Schedule a consultation today and take the first step toward better health.
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

      {/* ── Pain Screening Quiz CTA ─────────────────────────────────────────── */}
      <section aria-labelledby="quiz-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/chronic-pain-neck-shoulder-acupuncture-jacksonville-fl.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="quiz-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-6">
              Find Out How Acupuncture Can Help Your Chronic Pain
            </h2>
            <p className="text-white/90 leading-relaxed text-lg mb-10">
              Not sure if acupuncture is the right solution for your chronic pain? Take our quick screening quiz to assess how acupuncture may benefit your specific condition. Understanding your pain triggers and how acupuncture works can help you make an informed decision about your treatment plan. Start the quiz now and take the first step towards managing your chronic pain naturally.
            </p>
            <a
              href="/free-pain-screening-quiz"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Take Our Free Pain Screening Quiz
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What We Treat ───────────────────────────────────────────────────── */}
      <section aria-labelledby="conditions-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 id="conditions-heading" className="section-heading">What We Treat</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {conditionGroups.map((group, i) => (
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

      {/* ── Quote section ───────────────────────────────────────────────────── */}
      <section aria-label="About acupuncture for chronic pain" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <blockquote className="border-l-4 border-teal px-8 py-6 bg-surface rounded-r-2xl">
              <p className="font-heading font-semibold text-ink text-xl md:text-2xl leading-relaxed italic mb-0">
                &ldquo;For chronic pain patients, acupuncture is often the last resort, yielding the best result.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>
          <ScrollReveal className="mt-10 space-y-5 text-ink-muted leading-relaxed">
            <p>
              Acupuncture is a time-tested, holistic medicine that has been used for thousands of years to decrease pain and restore function. It is also helpful in treating internal conditions such as digestive disorders, anxiety, infertility, hormone imbalances, allergies, insomnia, and so much more.
            </p>
            <p>
              Many people live with chronic conditions because they believe there is nothing more that can be done for them. Our Western Medical community is only beginning to grasp the powerful medicine that is Acupuncture and understand the mechanisms behind it. If you would like to know whether Acupuncture may be able to help you, please call us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What to Know FAQ ────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="faq-heading" className="section-heading">What to Know About Acupuncture for Chronic Pain</h2>
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
      <section aria-labelledby="relief-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/chronic-pain-headache-relief-acupuncture-jacksonville-fl.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="relief-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-8">
              Tired of Dealing with Chronic Pain?
            </h2>
            <p className="text-white/90 leading-relaxed text-lg max-w-2xl mx-auto mb-10">
              It&apos;s never too early or late to work towards being the healthiest version of you. Learn if acupuncture can help you — schedule a consultation with Dr. Julee Miller at Health Pointe Jacksonville.
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
              To get the most out of your acupuncture treatments for chronic pain in Jacksonville, proper aftercare is essential. While some patients experience immediate relief and relaxation, others may feel mild fatigue as their body adjusts and begins to heal. To maximize your results, it&apos;s important to stay hydrated, rest, and avoid strenuous activities for the remainder of the day. These simple steps will help support the body&apos;s natural healing process, reduce inflammation, and enhance the long-term benefits of acupuncture in managing chronic pain.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────────────── */}
      <TestimonialCarousel testimonials={chronicPainReviews} />

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
        heading="Start your journey to lasting pain relief"
        body="Schedule your acupuncture consultation at Health Pointe Jacksonville and get a personalized plan targeting the root cause of your chronic pain."
        ctaLabel="Book Your Session Now"
      />
    </>
  );
}

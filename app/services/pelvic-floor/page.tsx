import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";

export const metadata: Metadata = {
  title: "Pelvic Floor Acupuncture Jacksonville FL | Health Pointe",
  description:
    "Pelvic floor acupuncture Jacksonville FL. Bladder leakage, pelvic pain and postpartum recovery treated at the root cause. Health Pointe Jacksonville",
  alternates: { canonical: "https://hpjax.com/services/pelvic-floor/" },
  openGraph: {
    title: "Pelvic Floor Acupuncture Jacksonville FL | Health Pointe",
    description:
      "Pelvic floor acupuncture Jacksonville FL. Bladder leakage, pelvic pain and postpartum recovery treated at the root cause. Health Pointe Jacksonville",
    images: [
      {
        url: "https://hpjax.com/images/pelvic-floor-acupuncture-treatment-jacksonville-fl.webp",
        width: 1200,
        height: 630,
        alt: "Pelvic floor acupuncture at Health Pointe Jacksonville",
      },
    ],
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/pelvic-floor/`;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${PAGE_URL}#webpage`,
      name: "Pelvic Floor Acupuncture Jacksonville FL",
      description: "Pelvic floor acupuncture Jacksonville FL. Bladder leakage, pelvic pain and postpartum recovery treated at the root cause. Health Pointe Jacksonville",
      url: PAGE_URL,
      isPartOf: { "@id": `${SITE_URL}/#business` },
      about: {
        "@type": "MedicalTherapy",
        name: "Pelvic Floor Acupuncture",
        relevantSpecialty: "PhysicalTherapy",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Pelvic Floor Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trigger Point Needling for Pelvic Floor" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dry Needling for Pelvic Pain" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Postpartum Pelvic Floor Recovery" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bladder Control Acupuncture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pelvic Organ Prolapse Support" } },
          ],
        },
      },
      provider: { "@id": `${SITE_URL}/#practitioner` },
      breadcrumb: breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Women's Health", href: "/womens-health/" },
        { name: "Pelvic Floor Acupuncture", href: "/pelvic-floor/" },
      ]),
    },
    { ...localBusinessEntity },
    { ...drJuleeMillerEntity },
  ],
};

const PELVIC_REVIEW_SLUGS = ["leigh-ann-j", "tracey-f"];
const pelvicReviews = PELVIC_REVIEW_SLUGS.map((slug, i) => {
  const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
  return { id: i + 1, name: r.name, quote: r.quote };
});

const postPregnancyItems = [
  "Experiencing postpartum pain",
  "Dealing with incontinence",
  "Recovery from C-section",
  "Diastasis recti concerns",
];

const activeAdultItems = [
  "Athletes seeking performance enhancement",
  "Runners with pelvic pain",
  "CrossFit enthusiasts",
  "Yoga practitioners",
];

const menopausalItems = [
  "Experiencing pelvic organ prolapse",
  "Managing hormonal changes",
  "Dealing with tissue changes",
];

export default function PelvicFloorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <header
        aria-labelledby="page-heading"
        className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/pelvic-floor-acupuncture-treatment-jacksonville-fl.webp"
          alt="Pelvic floor acupuncture treatment at Health Pointe Jacksonville"
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
            Pelvic Floor Acupuncture in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Regain strength, balance, and relief with specialized pelvic floor care through
            acupuncture, tailored to support your well-being.
          </p>
        </div>
      </header>

      {/* ── Intro ────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="intro-heading" className="section-heading mb-6">
              Acupuncture is often the last resort, yielding the best result.
            </h2>
            <p className="text-lg text-ink-muted leading-relaxed">
              Our specialized program combines trigger point needling, dry needling, and advanced
              therapeutic techniques to address pelvic floor dysfunction and promote optimal health.
              Whether you&apos;re dealing with chronic pain, post-pregnancy concerns, or athletic
              performance issues, our evidence-based approach provides targeted relief and lasting
              results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why Acupuncture ──────────────────────────────────────────────────── */}
      <section aria-labelledby="why-heading" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="why-heading" className="section-heading mb-6">
              Why Use Acupuncture?
            </h2>
            <p className="text-lg text-ink-muted leading-relaxed mb-10">
              Pelvic floor acupuncture offers a range of benefits, including reduced muscle tension
              and pain, improved core stability, and enhanced bladder control. It can also support
              better sexual function, increased pelvic strength, and improved posture. Additionally,
              this therapy aids in faster post-surgery recovery and enhances athletic performance by
              promoting overall pelvic health.
            </p>
            <a href="/pelvic-health-quiz" className="btn-primary">
              Take Our Pelvic Health Quiz
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Who Should Seek Treatment ─────────────────────────────────────────── */}
      <section aria-labelledby="who-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-4">
            <h2 id="who-heading" className="section-heading">Who Should Seek Treatment?</h2>
          </ScrollReveal>
          <ScrollReveal className="text-center mb-12">
            <p className="section-subheading max-w-2xl mx-auto">
              Acupuncture for pelvic floor care benefits a wide range of individuals, from
              post-pregnancy women to active adults seeking improved strength, balance, and recovery.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.05}>
              <div className="bg-surface rounded-2xl p-8 border border-surface-muted h-full">
                <h3 className="font-heading font-semibold text-ink text-xl mb-6">
                  Post-Pregnancy Women
                </h3>
                <ul className="space-y-3">
                  {postPregnancyItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink-muted">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-surface rounded-2xl p-8 border border-surface-muted h-full">
                <h3 className="font-heading font-semibold text-ink text-xl mb-6">
                  Active Adults
                </h3>
                <ul className="space-y-3">
                  {activeAdultItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink-muted">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-surface rounded-2xl p-8 border border-surface-muted h-full">
                <h3 className="font-heading font-semibold text-ink text-xl mb-6">
                  Menopausal Women
                </h3>
                <ul className="space-y-3">
                  {menopausalItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink-muted">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Comprehensive Care ───────────────────────────────────────────────── */}
      <section aria-labelledby="care-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/pelvic-floor-pregnancy-postpartum-care-jacksonville-fl.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="care-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-6">
              Comprehensive Care for Pelvic Floor Health
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              We address a wide range of symptoms, including pelvic pain, lower back discomfort,
              bladder control issues, and complications following surgery. Whether you&apos;re
              managing pregnancy-related pain, sports injuries, or core weakness, our personalized
              approach ensures your specific needs are met. Each treatment journey begins with a
              thorough evaluation, followed by a customized plan that may incorporate techniques
              like dry needling, trigger point release, therapeutic exercises, postural education,
              and tailored home exercise programs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────────────────────────── */}
      <TestimonialCarousel testimonials={pelvicReviews} />

      {/* ── Ready to Transform CTA ───────────────────────────────────────────── */}
      <section aria-labelledby="transform-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/pelvic-floor-therapy-consultation-jacksonville-fl.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="transform-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-6">
              Ready to Transform Your Pelvic Health?
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-10">
              Take the first step toward lasting relief and improved well-being by scheduling your
              consultation today. Whether you&apos;re struggling with pelvic pain, bladder control
              issues, or recovering from surgery, our personalized approach is designed to support
              your unique needs. Through expert evaluation and tailored treatments, we&apos;ll help
              you restore strength, stability, and overall pelvic health so you can move with
              confidence and comfort.
            </p>
            <a
              href="https://acubliss.com/book/healthpointe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Book your pelvic floor acupuncture appointment (opens in new tab)"
            >
              Book Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Address ──────────────────────────────────────────────────────────── */}
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

      {/* ── BookingCTA ───────────────────────────────────────────────────────── */}
      <BookingCTA
        heading="Ready to Transform Your Pelvic Health?"
        body="Take the first step toward lasting relief and improved well-being by scheduling your consultation today."
        ctaLabel="Book Now"
      />
    </>
  );
}

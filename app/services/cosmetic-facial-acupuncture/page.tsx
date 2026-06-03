import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { faqSchema, breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "cosmetic acupuncture, cosmetic rejuvenation acupuncture, women's wellness",
  description:
    "Jacksonville, FL's Health Pointe offers cosmetic acupuncture which can reduce wrinkles, firm and tighten skin, repair sun damage, reduce scars, and improve hormonal or cystic acne",
  alternates: { canonical: "https://hpjax.com/services/cosmetic-facial-acupuncture/" },
  openGraph: {
    title: "cosmetic acupuncture, cosmetic rejuvenation acupuncture, women's wellness | Health Pointe Jacksonville",
    description:
      "Jacksonville, FL's Health Pointe offers cosmetic acupuncture which can reduce wrinkles, firm and tighten skin, repair sun damage, reduce scars, and improve hormonal or cystic acne",
    images: [
      {
        url: "https://hpjax.com/images/cosmetic-facial-acupuncture-treatment-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "Cosmetic facial acupuncture treatment at Health Pointe Jacksonville",
      },
    ],
  },
};

const benefitGroups = [
  {
    heading: "Facial Rejuvenation",
    items: [
      "Repair sun damage",
      "Reduce wrinkles",
      "Firm & tighten skin",
      "Lift sagging skin",
      "Reduce scars & hyperpigmentation",
    ],
  },
  {
    heading: "Enhanced Skin Health",
    items: [
      "Decrease eye puffiness",
      "Tighten pores & brighten eyes",
      "Restore healthy glow",
      "Reduce stress & promote total health and well-being",
    ],
  },
  {
    heading: "Therapeutic Benefits",
    items: [
      "Treats TMJ (Jaw) syndrome",
      "Bell's Palsy and stroke recovery",
      "Treats trigeminal neuralgia",
    ],
  },
];

const faqs = [
  {
    q: "How does cosmetic acupuncture work?",
    a: "Cosmetic acupuncture stimulates collagen production, improves circulation, and enhances skin elasticity by increasing blood flow to the face. By inserting fine needles at targeted points, this treatment encourages the body's natural healing response, reducing fine lines and promoting a youthful glow without the need for invasive procedures.",
  },
  {
    q: "What are the benefits beyond aesthetics?",
    a: "Beyond its cosmetic effects, this treatment supports overall well-being by reducing stress, improving sleep, and enhancing digestion. Many patients experience reduced tension in the face and jaw, relief from headaches, and an overall sense of relaxation, making it a holistic approach to beauty and health.",
  },
  {
    q: "How many sessions are needed for best results?",
    a: "Results vary depending on individual skin concerns, but most people see noticeable improvements after 5–10 sessions. For optimal and lasting effects, a full treatment plan typically includes weekly sessions for several weeks, followed by maintenance visits to sustain the results.",
  },
];

const COSMETIC_REVIEW_SLUGS = ["ashley-r", "morris-h", "tina-w"];

const cosmeticReviews = COSMETIC_REVIEW_SLUGS.map((slug, i) => {
  const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
  return { id: i + 1, name: r.name, quote: r.quote };
});

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/cosmetic-facial-acupuncture/`;

export default function CosmeticFacialAcupuncturePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Cosmetic Acupuncture in Jacksonville, FL | Health Pointe Jacksonville",
        description:
          "Natural facial rejuvenation with cosmetic acupuncture at Health Pointe Jacksonville. Reduce fine lines, lift sagging skin, and restore your healthy glow — drug-free.",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
        about: { "@id": `${PAGE_URL}#service` },
        provider: { "@id": `${SITE_URL}/#practitioner` },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Cosmetic Facial Acupuncture",
        alternateName: "Facial Rejuvenation Acupuncture",
        description:
          "Natural facial rejuvenation using fine acupuncture needles to stimulate collagen production, improve circulation, and reduce fine lines — without Botox or fillers. Also treats TMJ syndrome, Bell's Palsy, and trigeminal neuralgia.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Jacksonville, FL" },
          { "@type": "AdministrativeArea", name: "Duval County, FL" },
        ],
        url: PAGE_URL,
        serviceType: "Cosmetic Acupuncture",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://healthpointejacksonville.acubliss.app/portal/booking/",
          servicePhone: "+1-904-448-0046",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cosmetic Acupuncture Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facial Rejuvenation Acupuncture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Celluma LED + Acupuncture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Herbal Prescriptions / Vitamin Injections" } },
          ],
        },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Cosmetic Facial Acupuncture", href: "/services/cosmetic-facial-acupuncture/" },
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
      <header aria-labelledby="page-heading" className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/cosmetic-facial-acupuncture-treatment-jacksonville-fl.jpg"
          alt="Licensed acupuncture physician performing cosmetic facial acupuncture at Health Pointe Jacksonville"
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
            Cosmetic Acupuncture in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed italic">
            &ldquo;In one visit you&apos;ll see a change, in 5 you won&apos;t believe it&apos;s you, and in 10 you&apos;ll have a whole new sense of self. (yes, it really works)&rdquo;
          </p>
        </div>
      </header>

      {/* ── Why Choose Cosmetic Acupuncture ─────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="mb-10">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-3">Goodbye Fillers. Hello Gorgeous!</p>
            <h2 id="intro-heading" className="section-heading">
              Why Choose Cosmetic Acupuncture?
            </h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              Cosmetic acupuncture is a remarkable facial treatment that offers a real alternative that activates the skin cells, facial muscles, circulation and the lymphatic system. This anti-aging solution leaves your skin tighter, brighter, smoother and younger-looking without &ldquo;freezing and filling&rdquo;.
            </p>
            <p>
              Our signature treatment focuses on the face while simultaneously supporting overall health. Fine lines may be eliminated and deeper wrinkles reduced. Bags under the eyes can be diminished, drooping eyelids lifted, puffiness reduced, sagging jowls and double chins lifted.
            </p>
            <p>
              Ultimately this series of treatments helps people to be their best-looking selves. Naturally.
            </p>
          </ScrollReveal>
          <ScrollReveal className="mt-8 text-center">
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Your Session Now (opens in new tab)"
              className="btn-primary text-base px-8 py-4"
            >
              Book Your Session Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Benefits Grid ───────────────────────────────────────────────────── */}
      <section aria-labelledby="benefits-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 id="benefits-heading" className="section-heading">
              Facial Acupuncture Can Be Beneficial In the Following Areas
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefitGroups.map((group, i) => (
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

      {/* ── Comprehensive Approach ──────────────────────────────────────────── */}
      <section aria-labelledby="approach-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="approach-heading" className="section-heading">
              A Comprehensive Approach to Cosmetic Acupuncture
            </h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              This unique comprehensive treatment approach is not merely confined to the face; but also incorporates the entire body. It is important to begin the process from the inside out; therefore, we employ a full body constitutional acupuncture treatment approach.
            </p>
            <p>
              Since our treatments are individually designed, each patient will receive a slightly modified treatment regiment. We recommend a course of treatment of 12-20 visits. We may suggest 2-3 treatments per week for the first few weeks depending on severity of condition, then decrease to weekly with progress. After that program, monthly maintenance is recommended.
            </p>
            <p>
              We do not recommend facial rejuvenation treatments for patients with high blood pressure, bleeding disorders, those that are pregnant, or during an acute outbreak of a skin condition. Although this modality is minimally invasive, some bruising or bleeding may occur.
            </p>
          </ScrollReveal>

        </div>

        {/* 3-image grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/celuma-led-light-therapy-acupuncture-jacksonville-fl.jpg", label: "Celluma LED + Acupuncture" },
              { src: "/images/acupuncture-results-active-woman-jacksonville-fl.jpg", label: "Feel Like Yourself Again" },
              { src: "/images/cosmetic-acupuncture-confident-women-jacksonville-fl.jpg", label: "Look & Feel Your Best" },
            ].map(({ src, label }) => (
              <figure key={label} className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/30" aria-hidden="true" />
                <figcaption className="absolute bottom-4 left-0 right-0 text-center text-white font-semibold text-base drop-shadow">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed image band ────────────────────────────────────────────── */}
      <section aria-labelledby="glow-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/radiant-skin-cosmetic-acupuncture-jacksonville-fl.jpg"
          alt="Woman with radiant glowing skin after cosmetic acupuncture treatments at Health Pointe Jacksonville"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="glow-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-6">
              Radiant Skin From the Inside Out
            </h2>
            <p className="text-white leading-relaxed max-w-2xl mx-auto mb-8">
              Our cosmetic acupuncture treatments are performed by Dr. Julee Miller, an ABORM-certified acupuncture physician with deep expertise in facial rejuvenation and whole-body wellness. Every session is tailored to your skin, your health history, and your goals.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule Your Appointment (opens in new tab)"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Schedule Your Appointment
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="faq-heading" className="section-heading">What to Know About Cosmetic Acupuncture</h2>
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

      {/* ── Aftercare ───────────────────────────────────────────────────────── */}
      <section aria-labelledby="aftercare-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="aftercare-heading" className="section-heading mb-6">
              Aftercare and Follow-Up
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-2xl mx-auto mb-8">
              To get the most out of your acupuncture treatments for chronic pain in Jacksonville, proper aftercare is essential. While some patients experience immediate relief and relaxation, others may feel mild fatigue as their body adjusts and begins to heal. To maximize your results, it&apos;s important to stay hydrated, rest, and avoid strenuous activities for the remainder of the day. These simple steps will help support the body&apos;s natural healing process, reduce inflammation, and enhance the long-term benefits of acupuncture in managing chronic pain.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Your Session Now (opens in new tab)"
              className="btn-primary text-base px-8 py-4"
            >
              Book Your Session Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────────────── */}
      <TestimonialCarousel testimonials={cosmeticReviews} />

      {/* ── Address ─────────────────────────────────────────────────────────── */}
      <section aria-label="Clinic location" className="py-12 bg-surface text-center border-t border-surface-muted">
        <address className="not-italic text-ink-muted text-sm leading-relaxed">
          <strong className="text-ink font-semibold">Health Pointe Jacksonville</strong><br />
          3840 Belfort Rd STE 305, Jacksonville, FL 32216<br />
          <a href="tel:9044480046" className="hover:text-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded">
            (904) 448-0046
          </a>
        </address>
      </section>

      {/* ── BookingCTA ──────────────────────────────────────────────────────── */}
      <BookingCTA
        heading="Ready to restore your natural glow?"
        body="Our licensed acupuncture physician in Jacksonville is here to help you look and feel your best — naturally."
        ctaLabel="Book Your Session Now"
      />
    </>
  );
}

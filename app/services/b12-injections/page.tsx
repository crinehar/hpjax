import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { faqSchema, breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "B12 injections, Jacksonville, FL, acupuncture for women's health",
  description:
    "Health Pointe in Jacksonville, FL offers B12 and Lipotropic injections to boost energy, metabolism, weight loss, and overall wellness. Book your appointment today.",
  alternates: { canonical: "https://hpjax.com/services/b12-injections/" },
  openGraph: {
    title: "B12 injections, Jacksonville, FL, acupuncture for women's health | Health Pointe Jacksonville",
    description:
      "Health Pointe in Jacksonville, FL offers B12 and Lipotropic injections to boost energy, metabolism, weight loss, and overall wellness. Book your appointment today.",
    images: [
      {
        url: "https://hpjax.com/images/b12-injections-energy-boost-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "B12 vitamin injections at Health Pointe Jacksonville",
      },
    ],
  },
};

const benefitGroups = [
  {
    heading: "Energy & Metabolism Support",
    items: [
      "Increased energy and concentration levels",
      "Improved metabolism and helps with weight loss",
      "Helps improve sleep patterns",
      "Improves mood and symptoms of depression",
    ],
  },
  {
    heading: "Immune & Nervous System Boost",
    items: [
      "Boosts the immune system",
      "Aids in decreasing allergies",
      "Supports the nervous system, helping to build the myelin sheath around nerves and decrease neuropathy symptoms",
      "Protects against heart disease",
    ],
  },
  {
    heading: "Overall Health & Wellness",
    items: [
      "Benefits the brain, prevents loss of neurons",
      "Optimizes B12 levels for vegetarian and vegan diets that are often naturally deficient in B12",
      "Treats anemia",
      "Supports bone health",
      "May prevent certain birth defects",
    ],
  },
];

const ingredients = [
  {
    name: "Choline",
    description: "Choline is a B-complex vitamin and lipotropic nutrient essential for liver and kidney health. It helps prevent fat accumulation in the liver and supports the movement of fats into cells for energy.",
  },
  {
    name: "Methionine",
    description: "Methionine is crucial for many bodily functions. It acts as a lipotropic agent to prevent fat buildup in the liver, relieves fatigue, reduces histamine release (helpful for allergies), and works as an antioxidant.",
  },
  {
    name: "Inositol",
    description: "Inositol, closely associated with choline, supports fat metabolism and helps lower blood cholesterol. It also plays a key role in serotonin action, which influences mood and appetite regulation.",
  },
];

const faqs = [
  {
    q: "What are Lipotropic Injections?",
    a: "Known as 'fat burners' or the 'slim shot,' these injections include Methylcobalamin (B12), the purest form of B12, which boosts metabolism and aids the liver in processing fat and cholesterol.",
  },
  {
    q: "What are Lipo PLUS Injections?",
    a: "For an added boost, Lipo PLUS injections combine a potent mix of vitamins and nutrients, including Vitamin C (Ascorbic Acid), B vitamins, Methionine, Inositol, Choline, and Lidocaine, designed for maximum effectiveness in supporting metabolism, energy, and fat breakdown.",
  },
];

const B12_REVIEW_SLUGS = ["sara-a", "robin-s", "stacy-h"];

const b12Reviews = B12_REVIEW_SLUGS.map((slug, i) => {
  const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
  return { id: i + 1, name: r.name, quote: r.quote };
});

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/b12-injections/`;

export default function B12InjectionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "B12 Injections in Jacksonville, FL | Health Pointe Jacksonville",
        description:
          "Vitamin B12 and Lipotropic injections at Health Pointe Jacksonville for energy, metabolism, immune support, and overall wellness.",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
        about: { "@id": `${PAGE_URL}#service` },
        provider: { "@id": `${SITE_URL}/#practitioner` },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "B12 Injections",
        alternateName: "Lipotropic Injections",
        description:
          "Intramuscular Vitamin B12 and Lipotropic injections that bypass the gut for superior absorption, boosting energy, metabolism, immune function, and nervous system health.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Jacksonville, FL" },
          { "@type": "AdministrativeArea", name: "Duval County, FL" },
        ],
        url: PAGE_URL,
        serviceType: "Vitamin Injection Therapy",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://healthpointejacksonville.acubliss.app/portal/booking/",
          servicePhone: "+1-904-448-0046",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "B12 & Lipotropic Injection Types",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "B12 Injection", description: "Intramuscular Methylcobalamin B12 injection for energy, mood, and neurological support." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lipotropic Injection (Lipo-B)", description: "Known as 'fat burners' or the 'slim shot,' includes Methylcobalamin (B12) to boost metabolism and aid the liver in processing fat and cholesterol." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lipo PLUS Injection", description: "Combines Vitamin C, B vitamins, Methionine, Inositol, Choline, and Lidocaine for maximum support of metabolism, energy, and fat breakdown." } },
          ],
        },
        additionalProperty: ingredients.map((ing) => ({
          "@type": "PropertyValue",
          name: ing.name,
          value: ing.description,
        })),
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "B12 Injections", href: "/services/b12-injections/" },
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
          src="/images/b12-injections-energy-boost-jacksonville-fl.jpg"
          alt="Woman at gym resting after B12 energy injection at Health Pointe Jacksonville"
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
            B12 Injections in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Our nutrient injections help energize, enhance and nourish your life. If you&apos;re feeling sluggish, run down, having trouble remembering things or difficulty losing weight you might consider adding this essential vitamin to your routine.
          </p>
        </div>
      </header>

      {/* ── Intro ───────────────────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="mb-10">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-3">Energy. Recovery. Daily Vitality.</p>
            <h2 id="intro-heading" className="section-heading">
              Boost Your Energy, Recovery, and Daily Vitality with Vitamin B12
            </h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              Vitamin B12 is a water-soluble vitamin found in animal products, such as dairy, eggs and meat that plays a vital role in the normal functioning of the brain and nervous system and is a key component in the formation of red blood cells.
            </p>
            <p>
              B12 helps to produce red blood cells, which are responsible for carrying oxygen to our organs and tissues throughout our body. When we are low in B12, we are low in oxygen. Rising stress levels, poor diet and certain autoimmune disorders make Vitamin B12 deficiencies a very common factor these days. Many people have digestive issues that create an environment that makes it difficult to absorb B12.
            </p>
            <p>
              An intramuscular injection can bypass the gut and is readily absorbed resulting in increased utilization of this nutrient and increased energy. Depending on symptoms, level of deficiency and goals, we provide a wide variety of B12 injections to suit your individual needs. Our practitioners can best assess this need in your initial appointment.
            </p>
          </ScrollReveal>
          <ScrollReveal className="mt-8">
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

      {/* ── What We Treat ───────────────────────────────────────────────────── */}
      <section aria-labelledby="treat-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 id="treat-heading" className="section-heading">What We Treat</h2>
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

      {/* ── Energy and Fat Burning Injections ───────────────────────────────── */}
      <section aria-labelledby="fatburn-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="mb-10">
            <h2 id="fatburn-heading" className="section-heading">Energy and Fat Burning Injections</h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              Lipotropic injections may improve weight loss by speeding up metabolism and elimination of stored fat. Lipo injections are a combination of administered ingredients used by many to increase fat metabolism and boost wellness. The combination of these key substances raises the body&apos;s ability to break down fat by the liver.
            </p>
          </ScrollReveal>
        </div>

        {/* 3-image grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/b12-nutrition-metabolism-jacksonville-fl.jpg", label: "Lipotropic Injections" },
              { src: "/images/b12-lipotropic-fat-burning-injection-jacksonville-fl.avif", label: "Metabolism Boost" },
              { src: "/images/b12-recovery-active-wellness-jacksonville-fl.avif", label: "Lipo PLUS Wellness" },
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

      {/* ── Lipo-B Ingredients ──────────────────────────────────────────────── */}
      <section aria-labelledby="ingredients-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 id="ingredients-heading" className="section-heading">Lipo-B &amp; Lipo PLUS Injections: Key Ingredients and Benefits</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ingredients.map((ingredient, i) => (
              <ScrollReveal key={ingredient.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-muted h-full">
                  <h3 className="font-heading font-bold text-teal-dark text-xl mb-4">{ingredient.name}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{ingredient.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed image band ────────────────────────────────────────────── */}
      <section aria-labelledby="vitality-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/b12-injections-energy-vitality-jacksonville-fl.webp"
          alt="Woman feeling energized and hydrated after B12 injections at Health Pointe Jacksonville"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="vitality-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-6">
              Herbal Prescriptions / Vitamin Injections
            </h2>
            <p className="text-white leading-relaxed max-w-2xl mx-auto mb-8">
              B12 and Lipotropic injections are administered by Dr. Julee Miller and the Health Pointe Jacksonville team. Each session is quick, low-discomfort, and tailored to your health and wellness goals.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule Your Appointment (opens in new tab)"
              className="inline-flex items-center justify-center bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
            <h2 id="faq-heading" className="section-heading">Energy and Fat Burning Injection Types</h2>
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
              B12 &amp; Lipotropic Aftercare and Follow-Up
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-2xl mx-auto mb-8">
              After your B12 and Lipotropic injections, it&apos;s important to stay hydrated and maintain a balanced diet to support the body&apos;s natural processes. While these injections can help boost energy, metabolism, and overall wellness, proper nutrition, adequate rest, and regular physical activity will enhance the results.
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

      {/* ── Disclaimer ──────────────────────────────────────────────────────── */}
      <section aria-label="FDA disclaimer" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 text-center">
        <p className="text-ink-subtle text-xs leading-relaxed">
          *These statements have not been evaluated by the Food and Drug Administration. In keeping with government regulations, we make no therapeutic or medical claims on our products.
        </p>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────────────── */}
      <TestimonialCarousel testimonials={b12Reviews} />

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
        heading="Ready to boost your energy and vitality?"
        body="Dr. Julee Miller and the Health Pointe Jacksonville team are here to help you feel your best — naturally."
        ctaLabel="Book Your Session Now"
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { faqSchema, breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Acupuncture Point Injection Therapy (APIT) — Jacksonville, FL",
  description:
    "Jacksonville, FL's Health Pointe offers trigger point injection therapy for quick pain relief and improved recovery",
  alternates: { canonical: "https://hpjax.com/services/acupuncture-point-injection-therapy/" },
  openGraph: {
    title: "Acupuncture Point Injection Therapy (APIT) — Jacksonville, FL | Health Pointe Jacksonville",
    description:
      "Jacksonville, FL's Health Pointe offers trigger point injection therapy for quick pain relief and improved recovery",
    images: [
      {
        url: "https://hpjax.com/images/acupuncture-point-injection-therapy-jacksonville-fl.webp",
        width: 1200,
        height: 630,
        alt: "Acupuncture Point Injection Therapy at Health Pointe Jacksonville",
      },
    ],
  },
};

const conditionGroups = [
  {
    heading: "Pain Management",
    items: ["Arthritis", "Fibromyalgia", "Joint Pain", "Lower Back Pain", "Sciatica"],
  },
  {
    heading: "Sports & Injury Recovery",
    items: ["Sports Injuries", "Herniated Disc", "Shoulder Injuries", "Tendonitis", "Muscle Strains"],
  },
  {
    heading: "Neurological & Autoimmune Relief",
    items: ["Migraine Headaches", "Rheumatoid Arthritis", "Carpal Tunnel Syndrome", "Nerve Pain", "Chronic Inflammation"],
  },
];

const biopunctureProducts = [
  { name: "Traumeel", description: "For relief of muscular pain, joint pain, sports injuries and bruising" },
  { name: "Zeel", description: "For relief of mild to moderate arthritic pain, osteoarthritis and joint stiffness" },
  { name: "Spascupreel", description: "For relief of muscle spasms anywhere in the body including abdominal cramps, menstrual cramps, spasmodic cough, intestinal colic, and smooth musculature spasms" },
  { name: "Lymphomyosot", description: "For relief of swelling due to poor circulation, minor injury and environmental toxins" },
  { name: "Neuralgo-Rheum", description: "For neuralgia, rheumatism of the soft tissues, trigeminal neuralgia, arthritic conditions and intervertebral disc conditions" },
  { name: "Engystol", description: "For stimulation of the nonspecific defense system in viral infections such as influenza, cold sores and feverish conditions" },
  { name: "Gripp-Heel", description: "For relief from symptoms of influenza including: fever, malaise, body aches, painful joints" },
  { name: "Cerecomp", description: "For circulatory and cerebral conditions including arteriosclerosis, depression, mental fatigue, memory deficiency, lack of concentration, nervousness, anxiety and neurological disorders" },
  { name: "Galium-Heel", description: "To activate the non-specific defensive mechanism, particularly in chronic diseases" },
];

const faqs = [
  {
    q: "How frequently are treatments given?",
    a: "The process is repeated 1-2 times a week until maximum improvement is seen. A maintenance regimen is often prescribed to prevent recurrence. Maintenance may be as little as 1-2 times per month.",
  },
  {
    q: "How many office visits will I need?",
    a: "The number of procedures you will need will vary based on your specific condition and how long you have suffered with it.",
  },
  {
    q: "How long does each treatment take?",
    a: "When applied as a stand-alone treatment, this procedure is relatively quick. You're in and out of the office within 15-30 minutes. The majority of the time, treatment plans formulated by Dr. Miller draw from all of our services to give you the best comprehensive care and get you the results you desire in the most expeditious method.",
  },
  {
    q: "What outcome can I expect?",
    a: "APIT treatment can and often results in complete absence or control of symptoms, even in severe conditions that have been present for years.",
  },
];

const APIT_REVIEW_SLUGS = ["carolina-h", "stephani-t", "patrick-h"];

const apitReviews = APIT_REVIEW_SLUGS.map((slug, i) => {
  const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
  return { id: i + 1, name: r.name, quote: r.quote };
});

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/acupuncture-point-injection-therapy/`;

export default function APItPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Acupuncture Point Injection Therapy in Jacksonville, FL | Health Pointe Jacksonville",
        description:
          "Acupuncture Point Injection Therapy (APIT) delivers customized homeopathic injections to acupuncture points for fast, lasting pain relief without surgery or pharmaceuticals.",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
        about: { "@id": `${PAGE_URL}#service` },
        provider: { "@id": `${SITE_URL}/#practitioner` },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Acupuncture Point Injection Therapy",
        alternateName: "APIT",
        description:
          "A non-surgical, non-pharmaceutical treatment that injects a customized cocktail of nutraceutical vitamins, homeopathics and mild analgesics into acupuncture points for quick pain relief and physiological improvement.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Jacksonville, FL" },
          { "@type": "AdministrativeArea", name: "Duval County, FL" },
        ],
        url: PAGE_URL,
        serviceType: "Injection Therapy",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://healthpointejacksonville.acubliss.app/portal/booking/",
          servicePhone: "+1-904-448-0046",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Biopuncture Injection Products",
          itemListElement: biopunctureProducts.map((p) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: p.name,
              description: p.description,
            },
          })),
        },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Acupuncture Point Injection Therapy", href: "/services/acupuncture-point-injection-therapy/" },
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
          src="/images/acupuncture-point-injection-therapy-jacksonville-fl.webp"
          alt="Practitioner preparing homeopathic injection for Acupuncture Point Injection Therapy at Health Pointe Jacksonville"
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
            Acupuncture Point Injection Therapy in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed">
            APIT is a specialized treatment that helps to alleviate pain, prevent illness, boost immunity and improve physiological function. Your body has the ability to heal itself, sometimes it just needs a push in the right direction.
          </p>
        </div>
      </header>

      {/* ── What is APIT ────────────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="mb-10">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-3">Non-Surgical. Non-Pharmaceutical. Fast Relief.</p>
            <h2 id="intro-heading" className="section-heading">What is APIT?</h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              Acupuncture Point Injection Therapy (APIT) is a non surgical, non-pharmaceutical treatment for a variety of issues. It is the injection of a customized cocktail mixture of nutraceutical vitamins, homeopathics and mild analgesics into acupuncture points.
            </p>
            <p>
              This integrative therapy combines the best of traditional Chinese medicine with conventional and homeopathic medicines. This therapy can be very effective for alleviating pain, prevention of illness, and improvement of physiological function. When utilized for trigger point pain relief, these injections offer <strong>quick</strong> pain relief.
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
          <ScrollReveal className="text-center mb-6">
            <h2 id="treat-heading" className="section-heading">This Treatment Is Very Effective In Treating Acute Pain and Chronic Conditions Including:</h2>
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

      {/* ── How APIT Works ──────────────────────────────────────────────────── */}
      <section aria-labelledby="how-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="how-heading" className="section-heading">How Acupuncture Point Injection Therapy (APIT) Works</h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              Acupuncture Point Injection Therapy activates acupuncture points much the same way as traditional acupuncture, but with the added benefits provided by the remedies used for injection. When the cocktail is introduced to the point, the body easily absorbs the substance. Leaving a deposit of that customized cocktail at the injection site will stimulate the acupuncture point longer for further effect.
            </p>
          </ScrollReveal>
        </div>

        {/* 3-image grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/apit-acupuncture-needle-injection-jacksonville-fl.jpg", label: "Acupuncture Point Injection" },
              { src: "/images/apit-pain-relief-active-lifestyle-jacksonville-fl.jpg", label: "Quick Pain Relief" },
              { src: "/images/apit-family-wellness-jacksonville-fl.jpg", label: "Nutraceutical Vitamins & Homeopathics" },
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

      {/* ── Biopuncture Products ─────────────────────────────────────────────── */}
      <section aria-labelledby="biopuncture-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 id="biopuncture-heading" className="section-heading">Additional Types of Biopuncture (Injection Therapy) Offered at Health Pointe Jacksonville</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {biopunctureProducts.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-surface-muted h-full">
                  <h3 className="font-heading font-bold text-teal-dark text-lg mb-2">{product.name}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{product.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed image band ────────────────────────────────────────────── */}
      <section aria-labelledby="consult-band-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/apit-natural-healing-active-life-jacksonville-fl.jpg"
          alt="Man hiking after natural pain relief from Acupuncture Point Injection Therapy at Health Pointe Jacksonville"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="consult-band-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-6">
              Your Body Has the Ability to Heal Itself
            </h2>
            <p className="text-white leading-relaxed max-w-2xl mx-auto mb-4">
              An initial consultation with Dr. Miller is required to find out if you are a candidate for APIT. If you are determined to be a candidate, we can perform your first procedure on the same day.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Request a Consultation (opens in new tab)"
              className="inline-flex items-center justify-center bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a Consultation
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="faq-heading" className="section-heading">What to Know About APIT</h2>
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

      {/* ── Reviews ─────────────────────────────────────────────────────────── */}
      <TestimonialCarousel testimonials={apitReviews} />

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
        heading="Ready to find relief without surgery or drugs?"
        body="Dr. Julee Miller and the Health Pointe Jacksonville team are here to help you heal faster and feel better — naturally."
        ctaLabel="Book Your Session Now"
      />
    </>
  );
}

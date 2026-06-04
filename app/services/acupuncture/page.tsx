import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { faqSchema, breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";

export const metadata: Metadata = {
  title: "Acupuncture Jacksonville FL | Health Pointe Jacksonville",
  description:
    "Jacksonville's acupuncture clinic for fertility, chronic pain & women's health. Real treatment plans. Real results. Health Pointe",
  alternates: { canonical: "https://hpjax.com/services/acupuncture/" },
  openGraph: {
    title: "Acupuncture Jacksonville FL | Health Pointe Jacksonville",
    description:
      "Jacksonville's acupuncture clinic for fertility, chronic pain & women's health. Real treatment plans. Real results. Health Pointe",
    images: [
      {
        url: "https://hpjax.com/images/acupuncture-treatment-relaxed-patient-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "Woman relaxing during acupuncture treatment at Health Pointe Jacksonville",
      },
    ],
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/acupuncture/`;

const conditionGroups = [
  {
    heading: "Women's Health & Wellness",
    items: [
      "Women's health & fertility assistance",
      "Menstrual regulation (pain, PMS, PMDD, endometriosis)",
      "Menopausal symptoms",
      "Pregnancy support",
      "Facial rejuvenation",
    ],
  },
  {
    heading: "Chronic & Neurological Conditions",
    items: [
      "Chronic pain",
      "Fibromyalgia",
      "Trigeminal neuralgia",
      "Autoimmune diseases",
      "Neurological disorders",
      "Acute pain and injury",
      "Insomnia",
    ],
  },
  {
    heading: "Other Conditions",
    items: [
      "Digestive disorders",
      "Anxiety & depression",
      "Allergies (seasonal & environmental)",
      "Addictions (quit smoking)",
      "Stress management",
      "Cold/flu treatment & prevention",
    ],
  },
];

const faqs = [
  {
    q: "How Does Acupuncture Support Healing?",
    a: "Acupuncture works by stimulating the body's natural healing processes, improving circulation, reducing inflammation, and restoring balance. It is commonly used to manage pain, support immune function, and enhance overall well-being.",
  },
  {
    q: "What Should I Expect During Treatment?",
    a: "Each acupuncture session is tailored to your unique needs. Treatments are gentle, relaxing, and designed to promote long-term health. Many patients experience improvements in sleep, digestion, and stress levels after just a few sessions.",
  },
  {
    q: "How Many Sessions Will I Need?",
    a: "The number of treatments varies based on individual health concerns and goals. While some conditions may see improvement within a few visits, chronic issues often benefit from consistent care over time. Your practitioner will create a personalized plan to help you achieve optimal results.",
  },
];

const ACUPUNCTURE_REVIEW_SLUGS = ["teresa-e", "robin-s", "jennifer-g"];

const acupunctureReviews = ACUPUNCTURE_REVIEW_SLUGS.map((slug, i) => {
  const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
  return { id: i + 1, name: r.name, quote: r.quote };
});

export default function AcupuncturePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Acupuncture Jacksonville FL | Health Pointe Jacksonville",
        description:
          "Jacksonville's acupuncture clinic for fertility, chronic pain & women's health. Real treatment plans. Real results. Health Pointe",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
        about: { "@id": `${PAGE_URL}#service` },
        provider: { "@id": `${SITE_URL}/#practitioner` },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Acupuncture",
        description:
          "Evidence-based acupuncture at Health Pointe Jacksonville specializing in women's health, fertility, pregnancy support, chronic pain, and chronic illness.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Jacksonville, FL" },
          { "@type": "AdministrativeArea", name: "Duval County, FL" },
        ],
        url: PAGE_URL,
        serviceType: "Acupuncture",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://healthpointejacksonville.acubliss.app/portal/booking/",
          servicePhone: "+1-904-448-0046",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Acupuncture Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Women's Health Acupuncture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fertility Acupuncture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chronic Pain Acupuncture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Herbal Prescriptions / Vitamin Injections" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nutritional & Lifestyle Guidance" } },
          ],
        },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Acupuncture", href: "/services/acupuncture/" },
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
          src="/images/acupuncture-treatment-relaxed-patient-jacksonville-fl.jpg"
          alt="Woman relaxing during acupuncture facial treatment at Health Pointe Jacksonville"
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
            Acupuncture in Jacksonville, FL
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
              Health Pointe Jacksonville Acupuncture + Wellness Clinic
            </h2>
            <p className="text-ink-muted leading-relaxed mb-5">
              Experience the healing power of acupuncture at Health Pointe Jacksonville, where we specialize in women&apos;s health, fertility, pregnancy support, chronic pain, and chronic illness. Our holistic approach addresses a wide range of conditions, helping to restore balance, relieve discomfort, and enhance overall well-being.
            </p>
            <p className="text-ink-muted leading-relaxed mb-8">
              Whether you&apos;re seeking support for a specific health concern or looking to improve your quality of life, our personalized treatments are designed to meet your unique needs.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Your Consultation Now (opens in new tab)"
              className="btn-primary"
            >
              Book Your Consultation Now
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

      {/* ── Personalized Treatments ─────────────────────────────────────────── */}
      <section aria-labelledby="treatments-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="mb-10">
            <h2 id="treatments-heading" className="section-heading">
              Personalized Acupuncture Treatments
            </h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed text-left">
            <p>
              Achieving optimal health starts with restoring balance within the body. Acupuncture is a time-tested therapy that supports the body&apos;s natural healing processes, helping to relieve pain, reduce stress, and enhance overall well-being. Whether you&apos;re seeking relief from chronic conditions, managing stress, or looking to improve your vitality, acupuncture offers a holistic approach to long-term health.
            </p>
            <p>
              At Health Pointe Jacksonville, every treatment plan begins with a comprehensive health assessment to understand your unique needs and create a personalized approach to wellness. While some patients experience improvement in just a few sessions, others may benefit from ongoing care to achieve lasting results.
            </p>
            <p>
              Your acupuncture treatment plan may include a combination of traditional Chinese medicine techniques, herbal therapy, nutritional guidance, lifestyle recommendations, and patient education to support your body&apos;s optimal function. By addressing the root causes of imbalance, we help you take proactive steps toward better health and overall well-being.
            </p>
          </ScrollReveal>
        </div>

        {/* Treatment components image grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/craniosacral-acupuncture-head-massage-jacksonville-fl.jpg", label: "Acupuncture" },
              { src: "/images/acupuncture-point-injection-therapy-jacksonville-fl.webp", label: "Herbal Prescriptions / Vitamin Injections" },
              { src: "/images/pain-free-active-woman-acupuncture-jacksonville-fl.webp", label: "Nutritional / Lifestyle Changes" },
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

      {/* ── What to Know FAQ ────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="faq-heading" className="section-heading">What to Know About Acupuncture</h2>
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

      {/* ── Enhancing Wellness (full-bleed band) ────────────────────────────── */}
      <section aria-labelledby="wellness-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/acupuncture-needles-back-treatment-jacksonville-fl.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="wellness-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-8">
              Enhancing Wellness with Acupuncture
            </h2>
            <div className="space-y-5 text-white/90 leading-relaxed text-lg text-left max-w-3xl mx-auto">
              <p>
                Research has shown that acupuncture can significantly support the body&apos;s natural healing processes, promoting relaxation, improving circulation, and reducing stress. Whether you&apos;re seeking relief from chronic pain, managing a health condition, or simply looking to enhance overall well-being, acupuncture offers a safe and effective approach to holistic health.
              </p>
              <p>
                For optimal results, consistent treatments are recommended. Regular acupuncture sessions help restore balance within the body, improve energy flow, and support long-term wellness. By integrating acupuncture into your health routine, you can take proactive steps toward feeling your best.
              </p>
            </div>
            <p className="text-white/90 leading-relaxed text-lg mt-8">
              Ready to experience the benefits of acupuncture? Schedule your consultation today and begin your journey to better health!
            </p>
            <div className="mt-8">
              <a
                href="https://healthpointejacksonville.acubliss.app/portal/booking/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Schedule your consultation today (opens in new tab)"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Schedule Your Consultation Today
              </a>
            </div>
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
            <div className="space-y-5 text-ink-muted leading-relaxed mb-8 text-left">
              <p>
                To maximize the benefits of your acupuncture treatment, proper aftercare is essential. Many patients feel relaxed and rejuvenated after a session, while others may experience mild fatigue as the body adjusts. Staying hydrated, getting adequate rest, and avoiding strenuous activities for the remainder of the day can help enhance your results.
              </p>
              <p>
                Follow-up treatments are tailored to your individual needs and health goals. Some conditions improve with just a few sessions, while chronic or complex issues may require ongoing care. Your practitioner will recommend a personalized treatment plan to ensure lasting benefits and continued progress toward optimal well-being.
              </p>
            </div>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule Your Appointment (opens in new tab)"
              className="btn-primary text-base px-8 py-4"
            >
              Schedule Your Appointment
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────────────── */}
      <TestimonialCarousel testimonials={acupunctureReviews} />

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
        heading="Ready to experience the benefits of acupuncture?"
        body="Schedule your consultation today and begin your journey to better health at Health Pointe Jacksonville."
        ctaLabel="Book Your Consultation Now"
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookingCTA from "@/components/BookingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { servicePageSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Women's Health Acupuncture in Jacksonville, FL",
  description:
    "Health Pointe Jacksonville offers holistic women's health acupuncture for PCOS, endometriosis, fertility, menopause, pelvic floor, and hormonal balance. Book today.",
  alternates: { canonical: "https://hpjax.com/womens-health/" },
  openGraph: {
    title:
      "Women's Health Acupuncture in Jacksonville, FL | Health Pointe Jacksonville",
    description:
      "Health Pointe Jacksonville offers holistic women's health acupuncture for PCOS, endometriosis, fertility, menopause, pelvic floor, and hormonal balance. Book today.",
    images: [
      {
        url: "https://hpjax.com/images/womens-health-fertility-wellness-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "Women's health acupuncture at Health Pointe Jacksonville",
      },
    ],
  },
};

const schema = servicePageSchema({
  name: "Women's Health Acupuncture",
  description:
    "Holistic acupuncture and integrative care for women's health conditions including PCOS, endometriosis, fertility support, menopause, pelvic floor dysfunction, and hormonal balance at Health Pointe Jacksonville.",
  url: "/womens-health/",
});

const faqs = [
  {
    question: "What women's health conditions does acupuncture treat in Jacksonville, FL?",
    answer:
      "At Health Pointe Jacksonville, acupuncture is used to treat a wide range of women's health conditions including PCOS, endometriosis, irregular periods, hormonal acne, hormonal imbalances, anxiety, mood regulation, hormonally-charged headaches, early-onset menopause, menopause, and postmenopause symptoms.",
  },
  {
    question: "How does acupuncture help with hormonal imbalances?",
    answer:
      "Acupuncture works by restoring balance within the body, helping to regulate hormones, improve circulation, and reduce inflammation. By addressing the root causes of hormonal conditions rather than just the symptoms, it supports long-term well-being and vitality.",
  },
  {
    question: "Is acupuncture a safe, non-invasive option for women's health?",
    answer:
      "Yes. Acupuncture is a natural, non-invasive treatment rooted in thousands of years of holistic medicine. Many women are unaware of it as an option, and modern medicine is increasingly recognizing its profound benefits for women's health conditions.",
  },
  {
    question: "What happens at my first women's health acupuncture appointment?",
    answer:
      "At your first visit, Dr. Miller will meet with you and evaluate your specific needs to determine if you are a good candidate for our services. Health Pointe Jacksonville offers fertility acupuncture, pelvic floor therapy, and dry needling among its women's health treatments.",
  },
];

const faqLd = faqSchema(faqs);

const fertilityConditions = [
  "Hormonal balancing",
  "Irregular period regulation",
  "Polycystic Ovarian Syndrome (PCOS)",
  "Endometriosis",
  "Hormonal acne",
];

const healthChallenges = [
  "Hormonally-charged headaches",
  "Mood regulation",
  "Anxiety and stress",
  "Early-onset menopause",
  "Menopause",
  "Postmenopause",
];

const womensHealthServices = [
  {
    title: "Fertility Acupuncture",
    description:
      "ABORM-certified acupuncture for natural conception, IVF support, hormonal balancing, and cycle regulation.",
    href: "/services/fertility-acupuncture-jacksonville-fl-aborm-certified-dr-julee-miller",
    imageSrc: "/images/fertility-pregnancy-acupuncture-jacksonville-fl.webp",
    imageAlt: "Fertility acupuncture at Health Pointe Jacksonville",
  },
  {
    title: "Pelvic Floor Therapy",
    description:
      "Non-invasive acupuncture and electroacupuncture for pelvic pain, incontinence, interstitial cystitis, and postpartum recovery.",
    href: "/services/pelvic-floor/",
    imageSrc: "/images/pelvic-floor-acupuncture-womens-health-jacksonville-fl.webp",
    imageAlt: "Pelvic floor acupuncture therapy at Health Pointe Jacksonville",
  },
  {
    title: "Dry Needling",
    description:
      "Targeted dry needling therapy for muscle tension, pelvic pain, and myofascial release — an effective complement to women's health acupuncture care.",
    href: "/services/dry-needling-jacksonville-fl/",
    imageSrc: "/images/acupuncture-back-needles-treatment-jacksonville-fl.jpg",
    imageAlt: "Dry needling therapy at Health Pointe Jacksonville",
  },
];

export default function WomensHealthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <header
        aria-labelledby="page-heading"
        className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/womens-health-acupuncture-hero-jacksonville-fl.avif"
          alt="Women's health acupuncture care at Health Pointe Jacksonville"
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
            Women&apos;s Health Acupuncture in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Discover the power of holistic care designed to balance, restore, and empower your
            well-being. Whether navigating hormonal changes or seeking relief from chronic
            discomfort, we&apos;re here to help you embrace vitality and live fully.
          </p>
        </div>
      </header>

      {/* ── Intro ────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="intro-heading"
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="intro-heading" className="section-heading mb-6">
              Navigating Hormonal Imbalances and Reproductive Health Challenges
            </h2>
            <p className="text-lg text-ink-muted leading-relaxed mb-4">
              Rooted in thousands of years of holistic medicine, acupuncture supports the body&apos;s
              natural ability to heal and thrive. It&apos;s highly effective for addressing conditions
              like PCOS, endometriosis, menopause symptoms, hormonal acne, and more, while promoting
              overall balance and vitality.
            </p>
            <p className="text-lg text-ink-muted leading-relaxed">
              Many women endure these issues, unaware of the natural, non-invasive options available
              to them. Modern medicine is increasingly recognizing the profound benefits of
              acupuncture for women&apos;s health. If you&apos;re curious about how acupuncture can
              support your journey to wellness, please call us today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What We Treat ────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="treat-heading"
        className="py-20 bg-surface"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 id="treat-heading" className="section-heading">What We Treat</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Fertility column */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-muted h-full">
                <h3 className="text-xl font-semibold text-ink mb-6 font-display">Fertility</h3>
                <ul className="space-y-3">
                  {fertilityConditions.map((condition) => (
                    <li key={condition} className="flex items-start gap-3 text-ink-muted">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal"
                        aria-hidden="true"
                      />
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Health Challenges column */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-muted h-full">
                <h3 className="text-xl font-semibold text-ink mb-6 font-display">Health Challenges</h3>
                <ul className="space-y-3">
                  {healthChallenges.map((condition) => (
                    <li key={condition} className="flex items-start gap-3 text-ink-muted">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal"
                        aria-hidden="true"
                      />
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Our Women's Health Services ──────────────────────────────────────── */}
      <section
        aria-labelledby="services-heading"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 id="services-heading" className="section-heading">Our Women&apos;s Health Services</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Specialized care for every stage of your health journey — from fertility to postmenopause.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {womensHealthServices.map((service, i) => (
              <ScrollReveal key={service.href} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group block rounded-2xl overflow-hidden shadow-sm border border-surface-muted hover:shadow-md transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div className="relative h-48 bg-surface overflow-hidden">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-semibold text-ink mb-2 font-display group-hover:text-teal-dark transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{service.description}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-teal-dark group-hover:underline">
                      Learn more <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── A Natural Approach ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="approach-heading"
        className="py-20 bg-surface"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 id="approach-heading" className="section-heading mb-6">
                A Natural Approach to Women&apos;s Health
              </h2>
              <p className="text-lg text-ink-muted leading-relaxed mb-4">
                Acupuncture works by restoring balance within the body, helping to regulate hormones,
                improve circulation, and reduce inflammation.
              </p>
              <p className="text-lg text-ink-muted leading-relaxed">
                By addressing the root causes of these conditions rather than just the symptoms, it
                supports long-term well-being and vitality.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/womens-health-natural-wellness-jacksonville-fl.jpg"
                  alt="Woman embracing natural wellness and vitality through acupuncture care in Jacksonville FL"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-heading"
        className="py-20 bg-white"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 id="faq-heading" className="section-heading">
              Women&apos;s Health Acupuncture — Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <dl className="space-y-6">
            {faqs.map(({ question, answer }) => (
              <ScrollReveal key={question}>
                <div className="border border-surface-muted rounded-2xl p-6 bg-surface">
                  <dt className="font-heading font-semibold text-ink text-lg mb-3">{question}</dt>
                  <dd className="text-ink-muted leading-relaxed">{answer}</dd>
                </div>
              </ScrollReveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Ready to Reclaim ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="reclaim-heading"
        className="py-20 bg-white"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="reclaim-heading" className="section-heading mb-6">
              Ready to Reclaim Your Health?
            </h2>
            <p className="text-lg text-ink-muted leading-relaxed mb-8">
              While Acupuncture is one of our treatment offerings, in our clinic Dr. Miller will meet
              with you and evaluate your specific needs to determine if you are a good candidate for
              our services.
            </p>
            <a
              href="https://acubliss.com/book/healthpointe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Schedule your appointment (opens in new tab)"
            >
              Schedule Your Appointment
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
        heading="Begin Your Women's Health Journey"
        body="Our licensed acupuncture physician in Jacksonville is ready to support you — naturally and holistically."
        ctaLabel="Book Your Consultation"
      />
    </>
  );
}

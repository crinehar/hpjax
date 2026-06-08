import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { faqSchema, breadcrumbSchema, localBusinessEntity } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Acupuncture Near Ponte Vedra Beach, FL",
  description:
    "Tired of having your symptoms dismissed? Health Pointe Jacksonville serves Ponte Vedra Beach patients with personalized acupuncture for fertility, women's health, and chronic pain.",
  alternates: { canonical: "https://hpjax.com/ponte-vedra-beach-fl/" },
  openGraph: {
    title: "Acupuncture Near Ponte Vedra Beach, FL | Health Pointe Jacksonville",
    description:
      "Tired of having your symptoms dismissed? Health Pointe Jacksonville serves Ponte Vedra Beach patients with personalized acupuncture for fertility, women's health, and chronic pain.",
    images: [
      {
        url: "https://hpjax.com/images/health-pointe-jacksonville-acupuncture-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "Health Pointe Jacksonville acupuncture clinic serving Ponte Vedra Beach, FL",
      },
    ],
  },
};

const faqs = [
  {
    question: "Do you offer acupuncture in Ponte Vedra Beach, FL?",
    answer:
      "Health Pointe Jacksonville does not have a physical clinic in Ponte Vedra Beach. We serve Ponte Vedra Beach patients from our Jacksonville clinic at 3840 Belfort Rd, Jacksonville, FL 32216.",
  },
  {
    question: "How far is Health Pointe Jacksonville from Ponte Vedra Beach?",
    answer:
      "Many patients from Ponte Vedra Beach travel to our Southside Jacksonville clinic for specialized acupuncture care. Drive time depends on your starting point and traffic.",
  },
  {
    question: "Do you provide fertility acupuncture for Ponte Vedra Beach patients?",
    answer:
      "Yes. Health Pointe Jacksonville provides fertility acupuncture for patients near Ponte Vedra Beach, including support for natural conception, cycle health, PMOS, endometriosis, IVF, IUI, and preconception planning.",
  },
  {
    question: "Can acupuncture help with women's health concerns?",
    answer:
      "Acupuncture may support women's health concerns such as PMS, painful periods, irregular cycles, menopause symptoms, hot flashes, stress, headaches, and hormonal imbalance. Your care plan will depend on your symptoms and health history.",
  },
  {
    question: "Do you offer pelvic floor acupuncture near Ponte Vedra Beach?",
    answer:
      "Yes. Health Pointe Jacksonville provides pelvic floor acupuncture for concerns such as pelvic pain, bladder issues, postpartum dysfunction, and post-surgery recovery.",
  },
  {
    question: "Do you offer massage therapy near Ponte Vedra Beach?",
    answer:
      "Yes. Massage therapy is available at Health Pointe Jacksonville and may support muscle tension, stress, headaches, pain, and recovery.",
  },
  {
    question: "Do you accept insurance for acupuncture?",
    answer:
      "Health Pointe Jacksonville accepts many insurance plans for acupuncture and complementary care. You can verify your insurance before scheduling your appointment.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can call 904-448-0046 or visit the contact page to request an appointment with Health Pointe Jacksonville.",
  },
];

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/acupuncture-ponte-vedra-beach-fl/`;

export default function AcupuncturePonteVedraBeachPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Acupuncture Near Ponte Vedra Beach, FL | Health Pointe Jacksonville",
        description:
          "Health Pointe Jacksonville provides specialized acupuncture care for fertility, women's health, pelvic floor, chronic pain, and wellness for patients near Ponte Vedra Beach, FL.",
        url: PAGE_URL,
        about: {
          "@type": "MedicalTherapy",
          name: "Acupuncture",
          relevantSpecialty: "Physical Medicine",
        },
        areaServed: {
          "@type": "City",
          name: "Ponte Vedra Beach",
          containedInPlace: { "@type": "State", name: "Florida" },
        },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Acupuncture Near Ponte Vedra Beach, FL", href: "/acupuncture-ponte-vedra-beach-fl/" },
        ]),
      },
      faqSchema(faqs.map((f) => ({ question: f.question, answer: f.answer }))),
      {
        ...localBusinessEntity,
        areaServed: [
          { "@type": "City", name: "Ponte Vedra Beach", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Jacksonville Beach", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Jacksonville", containedInPlace: { "@type": "State", name: "Florida" } },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <header aria-labelledby="page-heading" className="relative overflow-hidden flex items-center justify-center py-12 md:py-16">
        <Image
          src="/images/ponte-vedra-beach-fl-acupuncture-hero.jpg"
          alt="Aerial view of Ponte Vedra Beach, FL coastline — served by Health Pointe Jacksonville acupuncture clinic"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            id="page-heading"
            className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-4"
          >
            Acupuncture Near Ponte Vedra Beach, FL
          </h1>
          <p className="text-white text-lg leading-relaxed mb-3">
            If you are looking for acupuncture near Ponte Vedra Beach, FL, Health Pointe Jacksonville provides specialized care for fertility, women&apos;s health, pelvic floor concerns, chronic pain, stress, and whole-body wellness.
          </p>
          <p className="text-white text-lg leading-relaxed mb-3">
            Our clinic is located in Jacksonville and serves patients from Ponte Vedra Beach and surrounding Northeast Florida communities who want more than general wellness care. We take a personalized approach that combines acupuncture, functional support, massage therapy, and focused treatment plans based on your health goals.
          </p>
          <p className="text-white text-lg leading-relaxed mb-6">
            Whether you are trying to conceive, managing pain, dealing with hormonal symptoms, or looking for natural support for your body, our team is here to help you feel heard, supported, and cared for.
          </p>
          <a
            href="https://healthpointejacksonville.acubliss.app/portal/booking/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book an Appointment (opens in new tab)"
            className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book an Appointment
          </a>
        </div>
      </header>

      {/* ── Specialized Care ──────────────────────────────────────────────────── */}
      <section aria-labelledby="specialized-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="specialized-heading" className="section-heading mb-6">
              Specialized Acupuncture Care for Ponte Vedra Beach Patients
            </h2>
            <p className="text-ink-muted leading-relaxed mb-5">
              Many Ponte Vedra Beach patients visit Health Pointe Jacksonville because they want care that looks at the root cause, not just the symptom.
            </p>
            <p className="text-ink-muted leading-relaxed mb-5">
              Our team works with patients dealing with complex and ongoing concerns, including fertility challenges, pelvic pain, chronic pain, migraines, hormonal imbalance, stress, and postpartum recovery. Every treatment plan is built around your body, your history, and your goals.
            </p>
            <p className="text-ink-muted leading-relaxed mb-6">At Health Pointe Jacksonville, care may include:</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 list-none p-0">
              {[
                "Acupuncture treatment",
                "Fertility acupuncture",
                "Women's health support",
                "Pelvic floor acupuncture",
                "Massage therapy",
                "Injection therapy",
                "B12 injections",
                "Cosmetic acupuncture",
                "Sports acupuncture",
                "Quit smoking support",
              ].map((item) => (
                <li
                  key={item}
                  className="bg-surface rounded-xl px-4 py-3 border border-surface-muted text-sm font-semibold text-teal-dark text-center leading-snug"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-ink-muted leading-relaxed mb-6">
              If you are based in Ponte Vedra Beach and want a clinic with a focused approach to acupuncture and wellness, our Jacksonville location is a convenient option for ongoing care.
            </p>
            <Link
              href="/services/acupuncture/"
              className="text-teal-dark font-semibold underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
            >
              Learn more about acupuncture treatment
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Fertility ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="fertility-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <h2 id="fertility-heading" className="section-heading mb-6">
                Fertility Acupuncture Near Ponte Vedra Beach
              </h2>
              <p className="text-ink-muted leading-relaxed mb-5">
                Fertility can feel stressful, emotional, and confusing, especially when you have been trying for months or years without clear answers. Health Pointe Jacksonville provides fertility acupuncture for patients from Ponte Vedra Beach who want natural support while trying to conceive or preparing for assisted reproductive treatment.
              </p>
              <p className="text-ink-muted leading-relaxed mb-5">
                Our fertility programs combine acupuncture, and functional wellness support to help optimize the body for conception.
              </p>

              <details className="group mb-6 bg-white border border-surface-muted rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between gap-3 px-6 py-4 cursor-pointer list-none font-heading font-semibold text-ink hover:text-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark">
                  <span>Fertility acupuncture may support patients dealing with:</span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-teal-dark transition-transform duration-200 group-open:rotate-180"
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <ul className="px-6 pb-5 pt-1 space-y-2 border-t border-surface-muted">
                  {[
                    "Irregular cycles",
                    "PMOS",
                    "Endometriosis",
                    "Unexplained infertility",
                    "Male and female infertility",
                    "IVF and IUI preparation",
                    "Preconception planning",
                    "Pregnancy loss history",
                    "Stress related to fertility treatment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 pt-2">
                      <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-teal-dark" aria-hidden="true" />
                      <span className="text-ink-muted text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </details>

              <p className="text-ink-muted leading-relaxed mb-6">
                For patients undergoing IVF or IUI, acupuncture may be used as part of a broader support plan to help the body feel more balanced during treatment. For patients trying to conceive naturally, care is tailored around cycle health, stress, inflammation, and overall wellness.
              </p>
              <Link
                href="/services/fertility-acupuncture-jacksonville-fl-aborm-certified-dr-julee-miller/"
                className="text-teal-dark font-semibold underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
              >
                Explore fertility acupuncture care
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <figure className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src="/images/fertility-success-mother-newborn-jacksonville-fl.jpg"
                  alt="Mother holding newborn after successful fertility acupuncture treatment at Health Pointe Jacksonville"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </figure>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Women's Health ────────────────────────────────────────────────────── */}
      <section aria-labelledby="womens-health-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-10">
            <h2 id="womens-health-heading" className="section-heading mb-5">
              Women&apos;s Health Acupuncture Near Ponte Vedra Beach
            </h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              Women&apos;s health concerns are often brushed off as &ldquo;normal,&rdquo; but symptoms like painful periods, hot flashes, pelvic discomfort, anxiety, migraines, and cycle irregularity can affect your daily life.
            </p>
            <p className="text-ink-muted leading-relaxed">
              Health Pointe Jacksonville provides women&apos;s health acupuncture for patients near Ponte Vedra Beach who want a more personalized and whole-body approach.
            </p>
          </ScrollReveal>

          <p className="text-center text-ink-muted leading-relaxed mb-8">We support patients with concerns such as:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                heading: "Cycle Health",
                items: ["PMS", "Painful periods", "Irregular menstruation", "Amenorrhea"],
              },
              {
                heading: "Hormonal Balance",
                items: ["Menopause symptoms", "Hot flashes", "Hormonal headaches", "PMOS", "Ovarian cysts"],
              },
              {
                heading: "Whole-Body Wellness",
                items: ["Stress and anxiety", "Postpartum recovery"],
              },
            ].map((group, i) => (
              <ScrollReveal key={group.heading} delay={i * 0.08}>
                <div className="bg-surface rounded-2xl p-8 shadow-sm border border-surface-muted h-full">
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

          <ScrollReveal className="text-center">
            <p className="text-ink-muted leading-relaxed mb-6 max-w-2xl mx-auto">
              Our goal is to help your body function better, reduce stress on your system, and support more consistent wellness through each stage of life.
            </p>
            <Link
              href="/womens-health/"
              className="text-teal-dark font-semibold underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
            >
              Learn more about women&apos;s health acupuncture
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Pelvic Floor ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="pelvic-floor-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="pelvic-floor-heading" className="section-heading mb-6">
              Pelvic Floor Acupuncture for Pain, Bladder Issues, and Postpartum Recovery
            </h2>
            <p className="text-ink-muted leading-relaxed mb-5">
              Pelvic floor issues can affect confidence, comfort, intimacy, exercise, and everyday movement. Many patients deal with symptoms quietly because they are not sure where to turn.
            </p>
            <p className="text-ink-muted leading-relaxed mb-5">
              Health Pointe Jacksonville provides pelvic floor acupuncture for patients near Ponte Vedra Beach who are dealing with pelvic pain, bladder concerns, postpartum changes, or post-surgical recovery.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">Pelvic floor treatment may support:</p>
            <ul className="space-y-2 mb-6 ml-1">
              {[
                "Pelvic pain",
                "Bladder issues",
                "Postpartum dysfunction",
                "Post-surgery recovery",
                "Muscle tension",
                "Pain with movement",
                "Reduced confidence with daily activity",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-teal-dark" aria-hidden="true" />
                  <span className="text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-ink-muted leading-relaxed mb-6">
              Treatment may include acupuncture, dry needling, trigger point release, therapeutic exercises, and personalized support based on your symptoms.
            </p>
            <Link
              href="/services/pelvic-floor/"
              className="text-teal-dark font-semibold underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
            >
              Learn more about pelvic floor acupuncture treatment
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Chronic Pain ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="chronic-pain-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="chronic-pain-heading" className="section-heading mb-6">
              Acupuncture for Chronic Pain Near Ponte Vedra Beach
            </h2>
            <p className="text-ink-muted leading-relaxed mb-5">
              Chronic pain can make work, exercise, sleep, and family life harder than they need to be. If pain keeps returning, masking it with short-term fixes may not be enough.
            </p>
            <p className="text-ink-muted leading-relaxed mb-5">
              Health Pointe Jacksonville works with patients from Ponte Vedra Beach who are dealing with pain, tension, inflammation, and mobility issues.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">Acupuncture may support patients with:</p>
            <ul className="space-y-2 mb-6 ml-1">
              {[
                "Back pain",
                "Neck pain",
                "Shoulder pain",
                "Sciatica",
                "Knee pain",
                "Arthritis",
                "Tendonitis",
                "Carpal tunnel symptoms",
                "TMJ",
                "Headaches and migraines",
                "Sports injuries",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-teal-dark" aria-hidden="true" />
                  <span className="text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-ink-muted leading-relaxed mb-6">
              Your treatment plan is based on where the pain is coming from, how long it has been there, and how it affects your daily life. The goal is to reduce pain, improve function, and help you get back to the things you enjoy.
            </p>
            <Link
              href="/chronic-pain/"
              className="text-teal-dark font-semibold underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
            >
              Learn more about chronic pain acupuncture
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Massage Therapy ───────────────────────────────────────────────────── */}
      <section aria-labelledby="massage-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="massage-heading" className="section-heading mb-6">
              Massage Therapy Near Ponte Vedra Beach
            </h2>
            <p className="text-ink-muted leading-relaxed mb-5">
              Massage therapy is not just about relaxation. For many patients, it is part of a broader wellness and recovery plan.
            </p>
            <p className="text-ink-muted leading-relaxed mb-5">
              Health Pointe Jacksonville offers massage therapy for patients near Ponte Vedra Beach who want support for muscle tension, stress, headaches, pain, and general recovery.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">Massage therapy may help with:</p>
            <ul className="space-y-2 mb-6 ml-1">
              {[
                "Tight muscles",
                "Stress and tension",
                "Headaches",
                "Neck and shoulder discomfort",
                "Back pain",
                "Recovery after activity",
                "Relaxation and nervous system support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-teal-dark" aria-hidden="true" />
                  <span className="text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-ink-muted leading-relaxed mb-6">
              Massage therapy can also work well alongside acupuncture when your body needs both targeted treatment and hands-on muscle support.
            </p>
            <Link
              href="/services/massage-therapy-jacksonville/"
              className="text-teal-dark font-semibold underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
            >
              Learn more about massage therapy in Jacksonville
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Sports Acupuncture ────────────────────────────────────────────────── */}
      <section aria-labelledby="sports-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <h2 id="sports-heading" className="section-heading mb-6">
                Sports Acupuncture for Active Ponte Vedra Beach Patients
              </h2>
              <p className="text-ink-muted leading-relaxed mb-5">
                Ponte Vedra Beach has an active lifestyle. Golf, tennis, running, fitness training, and beach activities all place stress on the body. When pain or stiffness gets in the way, acupuncture may help support recovery and better movement.
              </p>
              <p className="text-ink-muted leading-relaxed mb-4">Sports acupuncture may be helpful for:</p>
              <ul className="space-y-2 mb-6 ml-1">
                {[
                  "Muscle tightness",
                  "Joint pain",
                  "Overuse injuries",
                  "Shoulder pain",
                  "Knee pain",
                  "Tendon irritation",
                  "Back and hip tension",
                  "Recovery after training or competition",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-teal-dark" aria-hidden="true" />
                    <span className="text-ink-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-ink-muted leading-relaxed mb-6">
                The focus is not just pain relief. The goal is to help your body move better and recover with more consistency.
              </p>
              <Link
                href="/services/sports-acupuncture/"
                className="text-teal-dark font-semibold underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
              >
                Learn more about sports acupuncture
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <figure className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src="/images/cycling-athlete-sports-acupuncture-jacksonville-fl.jpg"
                  alt="Cyclist athlete representing the active Ponte Vedra Beach lifestyle treated with sports acupuncture at Health Pointe Jacksonville"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <figcaption className="sr-only">Sports acupuncture for active patients near Ponte Vedra Beach</figcaption>
              </figure>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Location ──────────────────────────────────────────────────────────── */}
      <section aria-labelledby="location-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal delay={0.1}>
              <figure className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src="/images/ponte-vedra-beach-active-lifestyle-jacksonville-fl.jpg"
                  alt="Paddleboarders on the water in Ponte Vedra Beach, FL near Health Pointe Jacksonville acupuncture clinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <figcaption className="sr-only">Ponte Vedra Beach, FL — served by Health Pointe Jacksonville</figcaption>
              </figure>
            </ScrollReveal>
            <ScrollReveal>
              <h2 id="location-heading" className="section-heading mb-6">
                Easy Access From Ponte Vedra Beach to Our Jacksonville Clinic
              </h2>
              <p className="text-ink-muted leading-relaxed mb-5">
                Health Pointe Jacksonville is located at:
              </p>
              <address className="not-italic mb-5">
                <p className="text-ink font-semibold">3840 Belfort Rd, Jacksonville, FL 32216</p>
              </address>
              <p className="text-ink-muted leading-relaxed mb-5">
                Our clinic serves patients across Northeast Florida, including Ponte Vedra Beach, Jacksonville Beach, San Marco, Fruit Cove, Fleming Island, and surrounding areas.
              </p>
              <p className="text-ink-muted leading-relaxed mb-6">
                For many Ponte Vedra Beach patients, our Southside Jacksonville location is a practical option for specialized acupuncture care, fertility support, women&apos;s health treatment, pelvic floor care, chronic pain support, and massage therapy.
              </p>
              <Link
                href="/contact/"
                className="text-teal-dark font-semibold underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
              >
                Contact Health Pointe Jacksonville
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="why-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="why-heading" className="section-heading mb-6">
              Why Ponte Vedra Beach Patients Choose Health Pointe Jacksonville
            </h2>
            <p className="text-ink-muted leading-relaxed mb-5">
              Patients choose Health Pointe Jacksonville because they want focused care, not rushed treatment.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">Here is what makes our clinic different:</p>
            <ul className="space-y-2 mb-6 ml-1">
              {[
                "Specialized acupuncture care for women's health and fertility",
                "Support for IVF, IUI, and natural conception",
                "Pelvic floor acupuncture for pain, bladder issues, and postpartum recovery",
                "Chronic pain and sports acupuncture support",
                "Massage therapy available in the same wellness setting",
                "Care plans built around your symptoms and goals",
                "Insurance verification available before treatment",
                "A Jacksonville clinic serving patients across Northeast Florida",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-teal-dark" aria-hidden="true" />
                  <span className="text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-ink-muted leading-relaxed mb-6">
              If you have tried other options and still feel like something is missing, this may be the right next step.
            </p>
            <Link
              href="/our-team/"
              className="text-teal-dark font-semibold underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
            >
              Meet our team
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Book CTA ──────────────────────────────────────────────────────────── */}
      <section aria-labelledby="book-heading" className="relative py-28 overflow-hidden">
        <Image
          src="/images/acupuncture-treatment-relaxed-patient-jacksonville-fl.jpg"
          alt="Relaxed patient receiving acupuncture treatment at Health Pointe Jacksonville"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="book-heading" className="font-heading font-bold text-white text-3xl md:text-4xl leading-tight mb-6">
              Book Acupuncture Near Ponte Vedra Beach, FL
            </h2>
            <p className="text-white leading-relaxed mb-5">
              If you are ready to take the next step, Health Pointe Jacksonville is here to help.
            </p>
            <p className="text-white leading-relaxed mb-6">
              Whether you need fertility support, women&apos;s health care, pelvic floor treatment, chronic pain relief, massage therapy, or general acupuncture care, our team will help you understand your options and create a plan that fits your needs.
            </p>
            <p className="text-white leading-relaxed mb-8">
              Call{" "}
              <a
                href="tel:9044480046"
                className="font-semibold underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
              >
                904-448-0046
              </a>{" "}
              or schedule your visit online.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book an Appointment (opens in new tab)"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book an Appointment
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="faq-heading" className="section-heading">Frequently Asked Questions About Acupuncture Near Ponte Vedra Beach</h2>
          </ScrollReveal>
          <dl className="space-y-6">
            {faqs.map(({ question, answer }) => (
              <ScrollReveal key={question}>
                <div className="bg-surface rounded-2xl px-7 py-6 border border-surface-muted">
                  <dt className="font-heading font-semibold text-ink text-lg mb-3">{question}</dt>
                  <dd className="text-ink-muted leading-relaxed">{answer}</dd>
                </div>
              </ScrollReveal>
            ))}
          </dl>
          <ScrollReveal className="mt-10 text-center">
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

      {/* ── Address ───────────────────────────────────────────────────────────── */}
      <section aria-label="Clinic location" className="py-12 bg-surface text-center border-t border-surface-muted">
        <address className="not-italic text-ink-muted text-sm leading-relaxed">
          <strong className="text-ink font-semibold">Health Pointe Jacksonville</strong><br />
          3840 Belfort Rd STE 305, Jacksonville, FL 32216<br />
          <a
            href="tel:9044480046"
            className="hover:text-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
          >
            (904) 448-0046
          </a>
        </address>
      </section>

      <BookingCTA
        heading="Ready to feel better?"
        body="Our Jacksonville team serves patients from Ponte Vedra Beach and across Northeast Florida. Book your first visit today."
        ctaLabel="Book an Appointment"
      />
    </>
  );
}

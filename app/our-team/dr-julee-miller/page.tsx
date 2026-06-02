import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { drJuleeMillerPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Meet Dr. Julee Miller | Health Pointe Jacksonville",
  description:
    "Meet Dr. Julee Miller, board-certified Acupuncture Physician at Health Pointe Jacksonville, with 20+ years in fertility, women's health, and pain care.",
  alternates: { canonical: "https://hpjax.com/our-team/dr-julee-miller" },
  openGraph: {
    title: "Dr. Julee Miller DAcCHM, AP, FABORM | Health Pointe Jacksonville",
    description:
      "Voted Jacksonville FL top ABORM certified holistic fertility specialist, women's health provider and chronic pain clinic. Over 20 years experience.",
    images: [
      {
        url: "https://hpjax.com/images/team/dr-julee-miller-acupuncture-physician-jacksonville-fl.jpg",
        width: 650,
        height: 650,
        alt: "Dr. Julee Miller DAcCHM AP FABORM — Acupuncture Physician, Health Pointe Jacksonville",
      },
    ],
  },
};

const specializations = [
  "Women's Health & Infertility",
  "Pelvic Floor Dysfunction & Postpartum Care",
  "Hormone Imbalances & Pregnancy Support",
  "Endometriosis & PCOS",
  "Chronic Pain & Arthritis",
  "Migraine Headaches & Nerve Pain",
  "Neurological Disorders & Shingles",
  "Autoimmune Conditions",
  "Rheumatoid Conditions",
  "Failed Surgery Recovery",
];

const faqs = [
  {
    q: "Is Dr. Julee Miller ABORM certified?",
    a: "Yes. Dr. Miller is Jacksonville's top-rated ABORM board-certified holistic fertility specialist and has helped women and couples successfully navigate their journey to parenthood since 2008, supporting natural conception and Advanced Reproductive Therapies such as IVF, IUI, and egg freezing.",
  },
  {
    q: "What conditions does Dr. Julee Miller treat?",
    a: "Dr. Miller specializes in Women's Health and Infertility, pelvic floor dysfunction, hormone imbalances, endometriosis, PCOS, postpartum care, chronic pain, arthritis, migraine headaches, nerve pain, neurological disorders, shingles, and autoimmune conditions.",
  },
  {
    q: "How many years of experience does Dr. Julee Miller have?",
    a: "Dr. Julee Miller has over 20 years of experience as a Doctor of Acupuncture and Chinese Medicine. Her career has included treating professional sports injuries, pain management, and serving as a member of the 2004 Olympic Sports Rehabilitation Team in Athens, Greece.",
  },
  {
    q: "Is Dr. Miller recognized as an Endometriosis Specialist?",
    a: "Yes. Dr. Miller is recognized as an Endometriosis Specialist on iCareBetter, a distinction earned through a rigorous application process, review of education and certifications, and patient recommendations. She is also endorsed by many Jacksonville-area endocrinologists as a trusted referral source.",
  },
  {
    q: "Where is Dr. Julee Miller located?",
    a: "Dr. Julee Miller practices at Health Pointe Jacksonville, located at 3840 Belfort Rd STE 305, Jacksonville, FL 32216. You can reach the clinic at (904) 448-0046.",
  },
];

export default function DrJuleeMillerPage() {
  const schema = drJuleeMillerPageSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Breadcrumb ───────────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-1 text-sm text-ink-muted" role="list">
            <li>
              <Link href="/" className="hover:text-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded">
                Home
              </Link>
              <span aria-hidden="true" className="ml-1 text-ink-subtle">›</span>
            </li>
            <li className="ml-1">
              <Link href="/our-team" className="hover:text-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded">
                Our Team
              </Link>
              <span aria-hidden="true" className="ml-1 text-ink-subtle">›</span>
            </li>
            <li className="ml-1 text-ink font-medium" aria-current="page">Dr. Julee Miller</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero / Profile ───────────────────────────────────────────────────── */}
      <section aria-labelledby="profile-heading" className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-24 items-center">

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/team/dr-julee-miller-acupuncture-physician-jacksonville-fl.jpg"
                  alt="Dr. Julee Miller DAcCHM AP FABORM — Owner and Acupuncture Physician at Health Pointe Jacksonville"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 440px, 520px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Bio intro — H1 first in DOM for correct heading order */}
            <div>
              <p className="text-teal-dark text-sm font-bold uppercase tracking-widest mb-4">
                Owner &amp; Lead Practitioner
              </p>
              {/* H1: page subject — correct heading-order, H2 follows below */}
              <h1
                id="profile-heading"
                className="font-heading font-bold text-ink text-5xl md:text-6xl leading-tight mb-3"
              >
                Dr. Julee Miller
              </h1>
              <p className="text-ink-muted text-base font-semibold mb-7">
                DAcCHM, AP, FABORM — Doctor of Acupuncture and Chinese Medicine
              </p>
              {/* H2: tagline — matches WP heading level, subordinate to name */}
              <h2 className="text-xl md:text-2xl font-heading font-semibold text-teal-dark leading-snug mb-7">
                Voted Jacksonville FL top ABORM certified holistic fertility specialist, women&apos;s health provider and chronic pain clinic.
              </h2>
              <p className="text-ink-muted text-lg leading-relaxed mb-9">
                Doctor of Acupuncture and Chinese Medicine, FABORM fertility expert and owner of Health Pointe Jacksonville, Dr. Julee Miller specializes in treating Women&apos;s Health &amp; Infertility, pelvic floor dysfunction, chronic pain and other chronic difficult to treat medical issues in Jacksonville, FL.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book" className="btn-primary">
                  Schedule an Appointment
                </Link>
                <a href="tel:9044480046" className="btn-secondary">
                  (904) 448-0046
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Dr. Julee ─────────────────────────────────────────────────── */}
      <section aria-labelledby="about-heading" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="about-heading" className="section-heading text-center mb-10">
              About Dr. Julee
            </h2>
          </ScrollReveal>

          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              Julee Miller is the founder and owner of Health Pointe Jacksonville. She is a Doctor of Acupuncture &amp; TCM practitioner with over 20 years experience. Her extensive career includes treating professional sports injuries and pain management, as well as being a past member of the 2004 Olympic Sports Rehabilitation Team Member in Athens, Greece.
            </p>
            <p>
              Dr. Miller is Jacksonville&apos;s top-rated board-certified ABORM holistic fertility specialist and has helped women and couples successfully navigate their journey to parenthood since 2008. Whether seeking natural conception or Advanced Reproductive Therapies such as IVF, IUI, and egg freezing, her patients receive expert integrative care, including nutrition and lifestyle support and recommendations to enhance outcomes.
            </p>
            <p>
              She is endorsed by many Jacksonville-area endocrinologists and is a trusted referral source for their patients. Dr. Miller is also recognized as an{" "}
              <strong className="text-ink font-semibold">Endometriosis Specialist</strong> on{" "}
              <a
                href="https://icarbetter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="iCareBetter (opens in new tab)"
                className="text-teal-dark underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
              >
                iCareBetter
              </a>
              , a distinction earned through a rigorous application process, review of education and certifications, and patient recommendations. In 2024 she added Pelvic Floor Acupuncture Specialist to her many certifications in hopes of providing the highest impact of care to Jacksonville&apos;s community.
            </p>
            <p>
              Dr. Miller&apos;s practice emphasis is treating comprehensive{" "}
              <Link
                href="/womens-health/"
                className="text-teal-dark underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
              >
                Women&apos;s Health
              </Link>{" "}
              and{" "}
              <Link
                href="/services/fertility-acupuncture-jacksonville-fl-aborm-certified-dr-julee-miller/"
                className="text-teal-dark underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
              >
                Infertility
              </Link>
              , hormone imbalances, pregnancy, pelvic floor and post partum care. She also specializes in treating difficult to treat chronic health issues such as migraine headaches, nerve pain, neurological disorders, shingles, autoimmune conditions,{" "}
              <Link
                href="/chronic-pain/"
                className="text-teal-dark underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
              >
                chronic pain and arthritis
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Specializations ─────────────────────────────────────────────────── */}
      <section aria-labelledby="specializations-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="specializations-heading" className="section-heading">Areas of Specialization</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {specializations.map((item) => (
                <div
                  key={item}
                  role="listitem"
                  className="flex items-start gap-3 bg-surface rounded-xl px-5 py-4"
                >
                  <span
                    className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-teal-dark flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-ink text-sm font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Making a Difference ─────────────────────────────────────────────── */}
      <section aria-labelledby="difference-heading" className="py-20 bg-teal-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="difference-heading" className="font-heading font-bold text-white text-3xl md:text-4xl">
              Making a Difference
            </h2>
          </ScrollReveal>

          <ScrollReveal className="space-y-5 text-white leading-relaxed">
            <p>
              By offering patients a truly unique and safe holistic treatment approach, Dr. Miller is able to treat a wide variety of conditions. While her career began treating acute sports injuries, focus eventually shifted to treating chronic pain, failed surgeries, debilitating neuropathies and rheumatoid conditions.
            </p>
            <p>
              As an Integrative Fertility specialist, Dr. Miller also provides safe, effective care for Women&apos;s Health issues including endometriosis and PCOS. Specializing in reproductive health, she provides a multi-disciplinary approach to treating infertility. She is dedicated to educating and advocating for increased awareness of infertility, miscarriage, and the impact on environmental toxins on health.
            </p>
            <p>
              With the help of her Comprehensive Fertility Program hundreds, if not thousands, of women and couples have become success stories. Helping them achieve their dream of starting a family brings us such joy!
            </p>
            <p className="font-semibold text-white border-l-4 border-white/40 pl-4">
              Health Pointe Jacksonville pioneers cutting edge, innovative medical solutions blended with the time-proven wisdom of Eastern Medicine to provide our patients with unparalleled care.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="faq-heading" className="section-heading">Frequently Asked Questions</h2>
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

      {/* ── Address ─────────────────────────────────────────────────────────── */}
      <section aria-label="Clinic location" className="py-12 bg-white text-center">
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

      {/* ── Back to team ────────────────────────────────────────────────────── */}
      <div className="py-8 bg-white text-center border-t border-surface-muted">
        <Link
          href="/our-team"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-dark hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
        >
          <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          Back to Our Team
        </Link>
      </div>

      {/* ── BookingCTA ──────────────────────────────────────────────────────── */}
      <BookingCTA
        heading="Questions Before Getting Started? Get In Touch."
        body="We're here to answer your questions and guide you toward the care that's right for you."
      />
    </>
  );
}

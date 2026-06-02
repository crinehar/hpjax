import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { staffMemberPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Yaira, LMT | Health Pointe Jacksonville",
  description:
    "Meet Yaira, a licensed massage therapist with 20+ years of experience at Health Pointe Jacksonville. Specializing in chronic pain relief, women's health, and prenatal massage in Jacksonville, FL.",
  alternates: { canonical: "https://hpjax.com/our-team/yaira" },
  openGraph: {
    title: "Yaira, LMT | Health Pointe Jacksonville",
    description:
      "Licensed massage therapist with over 20 years of experience specializing in chronic pain, women's health, and prenatal care at Health Pointe Jacksonville.",
    images: [
      {
        url: "https://hpjax.com/images/team/yaira-lmt-massage-therapist-jacksonville-fl.jpg",
        width: 650,
        height: 650,
        alt: "Yaira — Licensed Massage Therapist at Health Pointe Jacksonville",
      },
    ],
  },
};

const faqs = [
  {
    question: "How many years of experience does Yaira have?",
    answer:
      "Yaira has over 20 years of experience as a licensed massage therapist. She completed her massage education at the Heritage Institute in Jacksonville, FL, graduating in 2003, and has since worked across chiropractic offices and spa settings.",
  },
  {
    question: "What does Yaira specialize in?",
    answer:
      "Yaira specializes in chronic pain relief, women's health massage, and prenatal care. She offers tailored massage treatments that complement the holistic acupuncture approach at Health Pointe Jacksonville.",
  },
  {
    question: "Does Yaira offer prenatal massage in Jacksonville?",
    answer:
      "Yes. Yaira provides prenatal massage at Health Pointe Jacksonville, located at 3840 Belfort Rd STE 305, Jacksonville, FL 32216. She has extensive experience supporting clients through the transformative journey of pregnancy.",
  },
];

export default function YairaPage() {
  const schema = staffMemberPageSchema({
    name: "Yaira",
    jobTitle: "Licensed Massage Therapist",
    description:
      "Licensed massage therapist with over 20 years of experience specializing in chronic pain, women's health, and prenatal care. Graduate of the Heritage Institute in Jacksonville, FL. Part of the Health Pointe Jacksonville wellness team.",
    slug: "yaira",
    imageUrl: "/images/team/yaira-lmt-massage-therapist-jacksonville-fl.jpg",
    knowsAbout: [
      "Chronic pain massage",
      "Women's health massage",
      "Prenatal massage",
      "Therapeutic massage",
      "Spa massage",
      "Chiropractic massage",
    ],
    faqs: faqs.map((f) => ({ question: f.question, answer: f.answer })),
  });

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
            <li className="ml-1 text-ink font-medium" aria-current="page">Yaira</li>
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
                  src="/images/team/yaira-lmt-massage-therapist-jacksonville-fl.jpg"
                  alt="Yaira — Licensed Massage Therapist at Health Pointe Jacksonville"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 440px, 520px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Bio intro */}
            <div>
              <p className="text-teal-dark text-sm font-bold uppercase tracking-widest mb-4">
                Licensed Massage Therapist
              </p>
              <h1
                id="profile-heading"
                className="font-heading font-bold text-ink text-5xl md:text-6xl leading-tight mb-3"
              >
                Yaira
              </h1>
              <p className="text-ink-muted text-base font-semibold mb-7">
                LMT, Massage Therapist | Jacksonville, FL
              </p>
              <p className="text-ink-muted text-lg leading-relaxed mb-9">
                Yaira joins our team with over twenty years of experience as a licensed massage therapist! Her massage therapy journey began at the Heritage Institute in Jacksonville, FL, where she completed her massage education and graduated in 2003. Yaira&apos;s professional path includes a wide range of massage environments, ranging from chiropractic offices to spa settings.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://healthpointejacksonville.acubliss.app/portal/booking/" target="_blank" rel="noopener noreferrer" aria-label="Schedule an Appointment (opens in new tab)" className="btn-primary">
                  Schedule an Appointment
                </a>
                <a href="tel:9044480046" className="btn-secondary">
                  (904) 448-0046
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Yaira ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="about-heading" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="about-heading" className="section-heading text-center mb-10">
              About Yaira
            </h2>
          </ScrollReveal>

          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              With a rich background spanning two decades as a licensed massage therapist, she has dedicated her expertise to enhancing the well-being of individuals. Yaira is excited to join our acupuncture wellness clinic, where her unique skills in addressing{" "}
              <Link
                href="/chronic-pain/"
                className="text-teal-dark underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
              >
                chronic pain
              </Link>
              ,{" "}
              <Link
                href="/womens-health/"
                className="text-teal-dark underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
              >
                women&apos;s health
              </Link>
              , and prenatal care can shine. Throughout her extensive career, she&apos;s passionately collaborated with clients seeking relief from persistent discomfort, navigating women&apos;s health concerns, and embarking on the transformative journey of pregnancy.
            </p>
            <p>
              Yaira prides herself on offering tailored massage treatments that harmonize seamlessly with the holistic approach of the clinic, ensuring that each client&apos;s unique needs are met with care, compassion, and a wealth of experience.
            </p>
          </ScrollReveal>
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
        heading="Ready to feel your best?"
        body="Book a session with Yaira and experience massage care tailored to your unique needs."
      />
    </>
  );
}

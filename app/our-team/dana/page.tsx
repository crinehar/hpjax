import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { staffMemberPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dana, Patient Care Specialist | Health Pointe Jacksonville",
  description:
    "Meet Dana, Patient Care Specialist at Health Pointe Jacksonville. A UGA grad and former patient who brings genuine empathy and a unique perspective to every visit.",
  alternates: { canonical: "https://hpjax.com/our-team/dana" },
  openGraph: {
    title: "Dana, Patient Care Specialist | Health Pointe Jacksonville",
    description:
      "From patient to Patient Care Specialist — Dana knows firsthand what great care feels like and ensures every visitor at Health Pointe Jacksonville experiences it too.",
    images: [
      {
        url: "https://hpjax.com/images/team/dana-patient-care-health-pointe-jacksonville.jpg",
        width: 600,
        height: 600,
        alt: "Dana — Patient Care Specialist at Health Pointe Jacksonville",
      },
    ],
  },
};

const funFacts = [
  "University of Georgia grad (Bachelor's & Master's)",
  "Loves nonfiction audiobooks, outdoor walks, and volunteering",
  "Can't start the day without an iced latte",
  "Proud cat mom to Prada 🐾",
];

const faqs = [
  {
    question: "Who is Dana at Health Pointe Jacksonville?",
    answer:
      "Dana is a Patient Care Specialist at Health Pointe Jacksonville. Having once been a patient herself, she brings a unique perspective and genuine empathy to every interaction, ensuring each visit is smooth, comfortable, and supportive.",
  },
  {
    question: "What makes Dana's approach to patient care unique?",
    answer:
      "Dana experienced Health Pointe Jacksonville firsthand as a patient before joining the team. That background gives her a deep understanding of what patients need, helping her guide them through their care with confidence and compassion.",
  },
];

export default function DanaPage() {
  const schema = staffMemberPageSchema({
    name: "Dana",
    jobTitle: "Patient Care Specialist",
    description:
      "Patient Care Specialist at Health Pointe Jacksonville and former patient of the clinic. University of Georgia graduate (Bachelor's & Master's) who brings genuine empathy and a unique perspective to every patient interaction.",
    slug: "dana",
    imageUrl: "/images/team/dana-patient-care-health-pointe-jacksonville.jpg",
    knowsAbout: [
      "Patient care coordination",
      "Patient advocacy",
      "Healthcare administration",
      "Patient experience",
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
            <li className="ml-1 text-ink font-medium" aria-current="page">Dana</li>
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
                  src="/images/team/dana-patient-care-health-pointe-jacksonville.jpg"
                  alt="Dana — Patient Care Specialist at Health Pointe Jacksonville"
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
                Patient Care Specialist
              </p>
              <h1
                id="profile-heading"
                className="font-heading font-bold text-ink text-5xl md:text-6xl leading-tight mb-3"
              >
                Dana
              </h1>
              <p className="text-ink-muted text-base font-semibold mb-7">
                Patient Care Specialist | Jacksonville, FL
              </p>
              <p className="text-ink-muted text-lg leading-relaxed mb-9">
                From patient to Patient Care Specialist, Dana knows firsthand what great care feels like — and ensures every visitor experiences it too.
              </p>
              <a href="tel:9044480046" className="btn-secondary">
                (904) 448-0046
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Dana ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="about-heading" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="about-heading" className="section-heading text-center mb-10">
              About Dana
            </h2>
          </ScrollReveal>

          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              Dana is the friendly face and guiding hand for patients at Health Pointe Jacksonville. Having once been a patient herself, she brings a unique perspective and genuine empathy to every interaction. Recently promoted to Patient Care Specialist, Dana ensures every visit is smooth, comfortable, and supportive while helping patients navigate their care with confidence.
            </p>
          </ScrollReveal>

          {/* Fun Facts */}
          <ScrollReveal className="mt-10">
            <h3 className="font-heading font-semibold text-ink text-xl mb-5">Fun Facts</h3>
            <div role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {funFacts.map((fact) => (
                <div
                  key={fact}
                  role="listitem"
                  className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-surface-muted"
                >
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-teal-dark flex items-center justify-center" aria-hidden="true">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-ink text-sm font-medium leading-snug">{fact}</span>
                </div>
              ))}
            </div>
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
        heading="Come see what makes HPJax feel like home."
        body="Our team is ready to welcome you — book your visit today."
      />
    </>
  );
}

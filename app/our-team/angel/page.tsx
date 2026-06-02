import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { staffMemberPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Angel, Patient Care Specialist | Health Pointe Jacksonville",
  description:
    "Meet Angel, Patient Care Specialist at Health Pointe Jacksonville. She supports patients, coordinates visits, and helps you feel at ease. Book online today.",
  alternates: { canonical: "https://hpjax.com/our-team/angel" },
  openGraph: {
    title: "Angel, Patient Care Specialist | Health Pointe Jacksonville",
    description:
      "Meet Angel, Patient Care Specialist at Health Pointe Jacksonville. She supports patients, coordinates visits, and helps you feel at ease. Book online today.",
    images: [
      {
        url: "https://hpjax.com/images/team/angel-patient-care-specialist-health-pointe-jacksonville.jpg",
        width: 2048,
        height: 1365,
        alt: "Angel — Patient Care Specialist at Health Pointe Jacksonville",
      },
    ],
  },
};

const funFacts = [
  "Loves brightening everyone's day",
  "Passionate about community wellness",
  "Always has a song in her heart",
  "Working toward her nursing degree",
];

const faqs = [
  {
    question: "Who is the Patient Care Specialist at Health Pointe Jacksonville?",
    answer:
      "Angel is a Patient Care Specialist at Health Pointe Jacksonville. She began her HPJ journey three years ago as a back office assistant and has grown into her current role, focusing on patient advocacy, community outreach, and coordinating a positive experience for every visitor.",
  },
  {
    question: "What does a Patient Care Specialist do at Health Pointe Jacksonville?",
    answer:
      "Angel connects with patients and the community, advocates for patient needs, coordinates visits, and ensures every person who walks through the door feels at ease. She is also pursuing her nursing education to continue growing as a healthcare professional.",
  },
];

export default function AngelPage() {
  const schema = staffMemberPageSchema({
    name: "Angel",
    jobTitle: "Patient Care Specialist",
    description:
      "Patient Care Specialist at Health Pointe Jacksonville with a background in back office assistance. Focused on patient advocacy, community outreach, and coordinating a welcoming visit experience. Pursuing nursing education.",
    slug: "angel",
    imageUrl: "/images/team/angel-patient-care-specialist-health-pointe-jacksonville.jpg",
    knowsAbout: [
      "Patient care coordination",
      "Community outreach",
      "Patient advocacy",
      "Healthcare administration",
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
            <li className="ml-1 text-ink font-medium" aria-current="page">Angel</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero / Profile ───────────────────────────────────────────────────── */}
      <section aria-labelledby="profile-heading" className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-24 items-center">

            {/* Photo — landscape 3:2 */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[560px] aspect-[3/2] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/team/angel-patient-care-specialist-health-pointe-jacksonville.jpg"
                  alt="Angel — Patient Care Specialist at Health Pointe Jacksonville"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 560px, 560px"
                  className="object-cover object-center"
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
                Angel
              </h1>
              <p className="text-ink-muted text-base font-semibold mb-7">
                Patient Care Specialist | Jacksonville, FL
              </p>
              <p className="text-ink-muted text-lg leading-relaxed mb-9">
                Angel connects with patients and the community alike, using her dedication, bubbly spirit, and care-first approach to make every visit brighter.
              </p>
              <a href="tel:9044480046" className="btn-secondary">
                (904) 448-0046
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Angel ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="about-heading" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="about-heading" className="section-heading text-center mb-10">
              About Angel
            </h2>
          </ScrollReveal>

          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              Angel began her HPJ journey three years ago as a back office assistant and has since grown into her current role as a Patient Care Specialist for over a year. With her bubbly personality, infectious smile, and genuine compassion, Angel is at the heart of patient care and community outreach — connecting with patients, advocating for their needs, and spreading positivity wherever she goes. She is also pursuing her nursing education, showing her dedication to growing as a healthcare professional. Bonus: she sings too! 🎶
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
        heading="Ready to experience care that feels like home?"
        body="Book your visit at Health Pointe Jacksonville today."
      />
    </>
  );
}

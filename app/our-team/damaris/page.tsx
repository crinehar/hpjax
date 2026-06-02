import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { staffMemberPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Damaris, Office Manager | Health Pointe Jacksonville",
  description:
    "Meet Damaris, Office Manager at Health Pointe Jacksonville in Jacksonville, FL. She supports scheduling, billing, and a smooth, welcoming visit. Book online.",
  alternates: { canonical: "https://hpjax.com/our-team/damaris" },
  openGraph: {
    title: "Damaris | Office Manager | Health Pointe Jacksonville",
    description:
      "Meet Damaris, the talented orchestrator and Office Manager at Health Pointe Jacksonville — a UNF grad and Jacksonville native dedicated to exceptional patient care.",
    images: [
      {
        url: "https://hpjax.com/images/team/damaris-office-manager-health-pointe-jacksonville-fl.jpg",
        width: 655,
        height: 655,
        alt: "Damaris — Office Manager at Health Pointe Jacksonville",
      },
    ],
  },
};

const faqs = [
  {
    question: "Who is the office manager at Health Pointe Jacksonville?",
    answer:
      "Damaris is the Office Manager at Health Pointe Jacksonville. A Jacksonville native and UNF Health Sciences graduate, she oversees billing, scheduling, administrative staff training, and ensures every patient feels welcomed from the moment they arrive.",
  },
  {
    question: "What does Damaris do at Health Pointe Jacksonville?",
    answer:
      "Damaris manages the day-to-day operations of Health Pointe Jacksonville, including patient scheduling, billing and invoicing, and comprehensive administrative staff training. She is often one of the first points of contact for new patients.",
  },
];

export default function DamarisPage() {
  const schema = staffMemberPageSchema({
    name: "Damaris",
    jobTitle: "Office Manager",
    description:
      "Office Manager at Health Pointe Jacksonville. UNF Health Sciences graduate and Jacksonville native who oversees patient scheduling, billing, invoicing, and administrative staff training. Known for creating a warm, welcoming environment for every patient.",
    slug: "damaris",
    imageUrl: "/images/team/damaris-office-manager-health-pointe-jacksonville-fl.jpg",
    knowsAbout: [
      "Healthcare administration",
      "Patient scheduling",
      "Medical billing and invoicing",
      "Administrative staff training",
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
            <li className="ml-1 text-ink font-medium" aria-current="page">Damaris</li>
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
                  src="/images/team/damaris-office-manager-health-pointe-jacksonville-fl.jpg"
                  alt="Damaris — Office Manager at Health Pointe Jacksonville"
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
                Office Manager
              </p>
              <h1
                id="profile-heading"
                className="font-heading font-bold text-ink text-5xl md:text-6xl leading-tight mb-3"
              >
                Damaris
              </h1>
              <p className="text-ink-muted text-base font-semibold mb-7">
                Office Manager | Jacksonville, FL
              </p>
              <p className="text-ink-muted text-lg leading-relaxed mb-9">
                Meet Damaris, the talented orchestrator, chaos wrangler and admin staff leader of our clinic. As one of the first points of contact for our patients, she plays a vital role in setting the tone for their entire experience with us. With her exceptional multitasking skills, she ensures that everything runs smoothly, from handling billing and invoicing to efficiently scheduling patients and providing comprehensive administrative staff training. With her warm and professional demeanor, Damaris exudes a sense of genuine care and hospitality, making everyone feel like they are part of our close-knit family.
              </p>
              <a href="tel:9044480046" className="btn-secondary">
                (904) 448-0046
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Damaris ────────────────────────────────────────────────────── */}
      <section aria-labelledby="about-heading" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="about-heading" className="section-heading text-center mb-10">
              About Damaris
            </h2>
          </ScrollReveal>

          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              Patient testimonials speak volumes about the unique atmosphere at HPJax. Unlike traditional medical offices where individuals can feel like mere numbers, our patients consistently emphasize that HPJax feels like home. Damaris is a significant reason behind this sentiment, as she treats each person with the utmost kindness, respect and attentiveness, fostering an environment of trust and comfort.
            </p>
            <p>
              Damaris graduated with a Bachelor of Science in Health Sciences from UNF, bringing a wealth of knowledge and enthusiasm to her role. As a Jacksonville native, she feels a deep connection to the community she serves, and her passion for promoting health and well-being is evident in everything she does.
            </p>
            <p>
              Beyond her dedication to her work, Damaris is a true fitness enthusiast, and her commitment to a healthy lifestyle resonates with those around her. Her grace and style are apparent in both her personal and professional interactions, leaving a lasting impression on everyone she encounters.
            </p>
            <p>
              Perhaps most striking is Damaris&apos;s infectious smile, which brightens the day of anyone she meets. Her positive attitude and cheerful demeanor make her a joy to work with and a true asset to our team.
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
        heading="Come see what makes HPJax feel like home."
        body="Our team is ready to welcome you — book your visit today."
      />
    </>
  );
}

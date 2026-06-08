import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { staffMemberPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Lexi, Front Desk | Health Pointe Jacksonville",
  description:
    "Meet Lexi, the welcoming front desk team member at Health Pointe Jacksonville. She's likely the first voice you hear and the first face you see — book your visit today.",
  alternates: { canonical: "https://hpjax.com/our-team/lexi" },
  openGraph: {
    title: "Lexi, Front Desk | Health Pointe Jacksonville",
    description:
      "Meet Lexi, the welcoming front desk team member at Health Pointe Jacksonville. She's likely the first voice you hear and the first face you see — book your visit today.",
    images: [
      {
        url: "https://hpjax.com/images/team/lexi-front-desk-health-pointe-jacksonville.jpg",
        width: 600,
        height: 600,
        alt: "Lexi — Front Desk at Health Pointe Jacksonville",
      },
    ],
  },
};

export default function LexiPage() {
  const schema = staffMemberPageSchema({
    name: "Lexi",
    jobTitle: "Front Desk",
    description:
      "Front desk team member at Health Pointe Jacksonville. The first voice patients hear and the first face they see — an athlete, a connector, and a genuine believer in integrative, root-cause medicine.",
    slug: "lexi",
    imageUrl: "/images/team/lexi-front-desk-health-pointe-jacksonville.jpg",
    knowsAbout: [
      "Patient scheduling",
      "Front desk operations",
      "Patient communication",
      "Integrative medicine",
    ],
    faqs: [],
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
            <li className="ml-1 text-ink font-medium" aria-current="page">Lexi</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero / Profile ───────────────────────────────────────────────────── */}
      <section aria-labelledby="profile-heading" className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-24 items-center">

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px] aspect-square rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/team/lexi-front-desk-health-pointe-jacksonville.jpg"
                  alt="Lexi — Front Desk at Health Pointe Jacksonville"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 480px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Bio intro */}
            <div>
              <p className="text-teal-dark text-sm font-bold uppercase tracking-widest mb-4">
                Front Desk
              </p>
              <h1
                id="profile-heading"
                className="font-heading font-bold text-ink text-5xl md:text-6xl leading-tight mb-3"
              >
                Lexi
              </h1>
              <p className="text-ink-muted text-base font-semibold mb-7">
                Front Desk | Jacksonville, FL
              </p>
              <p className="text-ink-muted text-lg leading-relaxed mb-9">
                Lexi is likely the first voice you hear and the first face you see at HPJ — and honestly, we couldn&apos;t think of a better person for that job.
              </p>
              <a href="tel:9044480046" className="btn-secondary">
                (904) 448-0046
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Lexi ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="about-heading" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="about-heading" className="section-heading text-center mb-10">
              About Lexi
            </h2>
          </ScrollReveal>

          <div className="space-y-5 text-ink-muted leading-relaxed">
            <ScrollReveal>
              <p>
                She came to us from Georgia, freshly transplanted to Jacksonville with her Navy partner and their scene-stealing puppy, Teddy. She brought with her something you can&apos;t train: a genuine love for people and a real belief that healthcare should actually help you feel better.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                That&apos;s what drew her to HPJ. Lexi has always been drawn to integrative, root-cause medicine — the kind that treats the whole person, not just the symptom. Working at a clinic where that&apos;s the entire mission? For her, it&apos;s not just a job. It&apos;s a good fit.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                Jacksonville has been a perfect match for her energy too. She loves soaking up everything this city has to offer — the activities, the events, and most of all, the people.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                Here&apos;s what sealed the deal when we hired her: Lexi is an athlete. She competed in wrestling for three years, then coached the sport at her own high school after graduating. Add softball and track and field to the mix, and you start to understand how she&apos;s wired. Dr. Julee has always believed that athletes make exceptional team members — because they already know how to value team effort, hold themselves to a high standard, and show up 100% every single day. Lexi lives that.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                She also has the gift of gab. She can talk to literally anybody — and loves to make a real connection with every person she meets. Nobody leaves HPJ feeling like a stranger. Lexi makes sure of that.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                Three months in, she&apos;s already part of the family. Patients love her. The team loves her. Teddy is still working on his social skills, but we have high hopes.
              </p>
            </ScrollReveal>
          </div>
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

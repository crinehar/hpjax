import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { breadcrumbSchema, localBusinessEntity } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Acupuncture Physician | Careers at Health Pointe Jacksonville",
  description:
    "Health Pointe Jacksonville is seeking an Acupuncture Physician. Mentorship, benefits, and a clear path to growth. Apply at careers@hpjax.com.",
  alternates: { canonical: "https://hpjax.com/careers/licensed-acupuncturist" },
  openGraph: {
    title: "Acupuncture Physician | Careers at Health Pointe Jacksonville",
    description:
      "Health Pointe Jacksonville is seeking an Acupuncture Physician. Mentorship, benefits, and a clear path to growth. Apply at careers@hpjax.com.",
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/careers/licensed-acupuncturist`;

const whyUs = [
  "A warm, nurturing environment where practitioners truly flourish",
  "Mentorship that helps you reach your full potential",
  "Comprehensive benefits including health insurance and wellness services",
  "Modern, serene treatment spaces designed for optimal healing",
  "Balanced schedules that honor your wellbeing too",
];

const yourJourney = [
  "Personalized training program tailored to your goals",
  "Clear path to growth with partnership opportunities",
  "Regular collaboration with experienced practitioners",
  "Ongoing education in advanced treatment techniques",
  "The joy of practicing alongside passionate wellness experts",
];

const legacy = [
  "Jacksonville's most trusted wellness center for 8 consecutive years",
  "Over 250 patient success stories",
  "Known for integrative approach to women's health",
  "Leaders in fertility support and natural pain management",
  "A practice built on compassion, expertise, and results",
];

const requirements = [
  "Active Florida Acupuncture License",
  "Heart for women's health and fertility support",
  "AIT certification",
  "Lives within 25 minutes of Jacksonville",
  "Enthusiasm for continuous learning",
  "Ability to join occasional team trainings (3x/year)",
];

export default function AcupuncturistCareersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "JobPosting",
        title: "Acupuncture Physician",
        description:
          "Health Pointe Jacksonville is seeking an Acupuncture Physician to join our family of dedicated healers. Focused on women's health, fertility support, and prenatal care in a supportive, growth-oriented clinic.",
        datePosted: "2025-01-01",
        employmentType: "FULL_TIME",
        hiringOrganization: {
          "@type": "Organization",
          name: "Health Pointe Jacksonville",
          sameAs: "https://hpjax.com",
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            streetAddress: "3840 Belfort Rd STE 305",
            addressLocality: "Jacksonville",
            addressRegion: "FL",
            postalCode: "32216",
            addressCountry: "US",
          },
        },
        url: PAGE_URL,
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Acupuncture Physician | Careers at Health Pointe Jacksonville",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Careers", href: "/careers" },
        { name: "Acupuncture Physician", href: "/careers/licensed-acupuncturist" },
      ]),
      { ...localBusinessEntity },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Breadcrumb ───────────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="bg-surface border-b border-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-1 text-sm text-ink-muted flex-wrap" role="list">
            <li>
              <Link href="/" className="hover:text-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded">Home</Link>
              <span aria-hidden="true" className="ml-1 text-ink-subtle">›</span>
            </li>
            <li className="ml-1">
              <Link href="/careers" className="hover:text-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded">Careers</Link>
              <span aria-hidden="true" className="ml-1 text-ink-subtle">›</span>
            </li>
            <li className="ml-1 text-ink font-medium" aria-current="page">Acupuncture Physician</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <header aria-labelledby="page-heading" className="bg-teal-dark py-20 md:py-28 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-4">Now Hiring</p>
          <h1 id="page-heading" className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-6">
            Acupuncture Physician
          </h1>
          <p className="text-white/90 text-xl leading-relaxed">
            Are you dreaming of practicing in a clinic that feels like home, where your growth is nurtured and your passion for healing is celebrated?
          </p>
        </div>
      </header>

      {/* ── Intro ────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="intro-heading" className="section-heading mb-8">About the Role</h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed text-lg">
            <p>
              At Health Pointe Jacksonville, we transform lives through modern wellness with a touch of luxury. We are a family of dedicated healers focused on women&apos;s health, fertility support, and prenatal care — and we&apos;re looking for a practitioner who shares that mission.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why You'll Love It ───────────────────────────────────────────────── */}
      <section aria-labelledby="why-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="why-heading" className="section-heading mb-10">What Makes Our Practice Special</h2>
          </ScrollReveal>
          <ul className="space-y-3" role="list">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.06}>
                <li className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-surface-muted">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-teal-dark flex items-center justify-center" aria-hidden="true">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-ink text-sm font-medium leading-snug">{item}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Your Journey ────────────────────────────────────────────────────── */}
      <section aria-labelledby="journey-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="journey-heading" className="section-heading mb-10">Your Journey With Us</h2>
          </ScrollReveal>
          <ul className="space-y-3" role="list">
            {yourJourney.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.06}>
                <li className="flex items-start gap-3 bg-surface rounded-xl px-5 py-4 border border-surface-muted">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-teal-dark flex items-center justify-center" aria-hidden="true">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-ink text-sm font-medium leading-snug">{item}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Legacy ──────────────────────────────────────────────────────────── */}
      <section aria-labelledby="legacy-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="legacy-heading" className="section-heading mb-10">Our Legacy of Excellence</h2>
          </ScrollReveal>
          <ul className="space-y-3" role="list">
            {legacy.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.06}>
                <li className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-surface-muted">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-teal-dark flex items-center justify-center" aria-hidden="true">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-ink text-sm font-medium leading-snug">{item}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Requirements ────────────────────────────────────────────────────── */}
      <section aria-labelledby="requirements-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="requirements-heading" className="section-heading mb-10">What We&apos;re Looking For</h2>
          </ScrollReveal>
          <ul className="space-y-3" role="list">
            {requirements.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.06}>
                <li className="flex items-start gap-3 bg-surface rounded-xl px-5 py-4 border border-surface-muted">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-teal-dark flex items-center justify-center" aria-hidden="true">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-ink text-sm font-medium leading-snug">{item}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Apply CTA ───────────────────────────────────────────────────────── */}
      <section aria-labelledby="apply-heading" className="py-20 bg-gradient-to-br from-teal-dark to-ink text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="apply-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-5">
              Ready to transform lives while building your dream career?
            </h2>
            <p className="text-white/80 text-base italic mb-6">
              &ldquo;We hire people who are authentic, resourceful, and outgoing. We will train the right candidate.&rdquo;
            </p>
            <p className="text-white/90 leading-relaxed mb-8">
              Send your resume and a cover letter explaining why you&apos;re the right person for this role to:
            </p>
            <a
              href="mailto:careers@hpjax.com?subject=Acupuncture%20Physician%20Application"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              careers@hpjax.com
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Back to Careers ──────────────────────────────────────────────────── */}
      <div className="py-8 bg-white text-center border-t border-surface-muted">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-dark hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
        >
          <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          Back to Careers
        </Link>
      </div>
    </>
  );
}

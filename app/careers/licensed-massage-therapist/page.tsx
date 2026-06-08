import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { breadcrumbSchema, localBusinessEntity } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Licensed Massage Therapist | Careers at Health Pointe Jacksonville",
  description:
    "Health Pointe Jacksonville is seeking a passionate Licensed Massage Therapist. Join Jacksonville's top-rated wellness team. Apply via careers@hpjax.com.",
  alternates: { canonical: "https://hpjax.com/careers/licensed-massage-therapist" },
  openGraph: {
    title: "Licensed Massage Therapist | Careers at Health Pointe Jacksonville",
    description:
      "Health Pointe Jacksonville is seeking a passionate Licensed Massage Therapist. Join Jacksonville's top-rated wellness team. Apply via careers@hpjax.com.",
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/careers/licensed-massage-therapist`;

const whyUs = [
  "Collaborative, supportive clinic culture that feels like family",
  "Complementary wellness services",
  "Wellness Clinic environment passionate about patient driven care",
  "Focus on work-life integration with no weekend hours",
];

const clinicFacts = [
  "Jacksonville's Top-Rated Wellness Center – consecutive 10 years",
  "Recognized as “Top Doc” facility for 7 years running",
  "290+ five-star patient reviews",
  "Specializing in women's health, fertility support, pelvic floor dysfunction and pain management",
];

const requirements = [
  "Possess an active Florida Massage Therapy License in good standing",
  "Have a passion for Women's Health and prenatal care",
  "Have a passion to help chronic pain patients",
  "Have current liability insurance",
  "Live within 25 minutes of Jacksonville",
  "Commitment to ongoing learning and professional growth",
  "Be able to work with patients up to 25 hours per week",
  "Provide at least three professional references",
  "Agree to a background check prior to employment",
  "Agree to wear a uniform (scrubs) and closed toed shoes",
];

export default function LMTCareersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "JobPosting",
        title: "Licensed Massage Therapist",
        description:
          "Health Pointe Jacksonville is seeking a passionate Licensed Massage Therapist to join our award-winning wellness team. Specializing in women's health, prenatal care, post-surgical massage, and chronic pain management.",
        datePosted: "2025-01-01",
        employmentType: "PART_TIME",
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
        name: "Licensed Massage Therapist | Careers at Health Pointe Jacksonville",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Careers", href: "/careers" },
        { name: "Licensed Massage Therapist", href: "/careers/licensed-massage-therapist" },
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
            <li className="ml-1 text-ink font-medium" aria-current="page">Licensed Massage Therapist</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <header aria-labelledby="page-heading" className="bg-teal-dark py-20 md:py-28 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-4">Now Hiring</p>
          <h1 id="page-heading" className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-6">
            Licensed Massage Therapist
          </h1>
          <p className="text-white/90 text-xl leading-relaxed">
            Are you looking for a fun and rewarding job cheering people on as they gain their health and life back?
          </p>
        </div>
      </header>

      {/* ── Intro ────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed text-lg">
            <p>
              At Health Pointe Jacksonville, we don&apos;t just treat patients; we transform and elevate lives! Our &lsquo;gucci&rsquo; brand is all about modern wellness with a touch of luxury. We pride ourselves on being the go-to medical massage spot for post surgical patients, prenatal mamas, and chronic pain sufferers who value a supportive community. If you&apos;re looking to be part of a practice where you can grow, shine, and <strong>truly make a difference</strong>, we want to meet you!
            </p>
            <p>
              Health Pointe Jacksonville is seeking a passionate practitioner to join our award-winning wellness team! For over 17 years, we&apos;ve been transforming lives through our integrative approach to women&apos;s health, fertility support, and chronic pain management.
            </p>
            <p>
              The ideal candidate is warm and compassionate, eager to learn new skills to best help our patients, professional, confident, and excels in a team atmosphere.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why You'll Love It ───────────────────────────────────────────────── */}
      <section aria-labelledby="why-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="why-heading" className="section-heading mb-10">Why You&apos;ll Love Practicing Here</h2>
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

      {/* ── About Our Clinic ─────────────────────────────────────────────────── */}
      <section aria-labelledby="clinic-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="clinic-heading" className="section-heading mb-10">About Our Clinic</h2>
          </ScrollReveal>
          <ul className="space-y-3" role="list">
            {clinicFacts.map((item, i) => (
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

      {/* ── Requirements ────────────────────────────────────────────────────── */}
      <section aria-labelledby="requirements-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="requirements-heading" className="section-heading mb-10">Requirements</h2>
          </ScrollReveal>
          <ul className="space-y-3" role="list">
            {requirements.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.05}>
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

      {/* ── Apply CTA ───────────────────────────────────────────────────────── */}
      <section aria-labelledby="apply-heading" className="py-20 bg-gradient-to-br from-teal-dark to-ink text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="apply-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-5">
              Join a practice where wellness practitioners thrive.
            </h2>
            <p className="text-white/90 leading-relaxed text-lg mb-4">
              Where every team member is valued, supported, and empowered to make a real difference in patients&apos; lives.
            </p>
            <p className="text-white/90 leading-relaxed text-lg mb-4">
              Ready to transform lives while building your dream career? Apply now to become part of Jacksonville&apos;s most trusted wellness team.
            </p>
            <p className="text-white/80 text-base italic mb-8">
              &ldquo;We hire people who are authentic, resourceful, and outgoing. We will train the right candidate.&rdquo;
            </p>
            <p className="text-white/90 leading-relaxed mb-8">
              If this sounds interesting, and you&apos;d like to join our fun, rewarding team in Jacksonville, don&apos;t call us. Simply send your resume and a cover letter explaining why you&apos;re the right person for this job to:
            </p>
            <a
              href="mailto:careers@hpjax.com?subject=Licensed%20Massage%20Therapist%20Application"
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

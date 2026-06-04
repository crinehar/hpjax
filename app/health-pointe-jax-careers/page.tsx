import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { breadcrumbSchema, localBusinessEntity } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Careers at Health Pointe Jacksonville | Join Our Team",
  description:
    "Explore current opportunities at Health Pointe Jacksonville in Jacksonville. See open roles, clinic culture, and how to apply.",
  alternates: { canonical: "https://hpjax.com/health-pointe-jax-careers/" },
  openGraph: {
    title: "Careers at Health Pointe Jacksonville | Join Our Team",
    description:
      "Explore current opportunities at Health Pointe Jacksonville in Jacksonville. See open roles, clinic culture, and how to apply.",
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/health-pointe-jax-careers/`;

const values = [
  {
    word: "Accountable",
    body: "Our team members don't just \"show up\" — they bring 100% every day.",
  },
  {
    word: "Adaptable",
    body: "Go with the flow is a daily skillset and mindset.",
  },
  {
    word: "Compassionate",
    body: "We give more than just acupuncture and massages. We give hope, care, and encouragement.",
  },
  {
    word: "Curious & Confident",
    body: "We love to learn and grow.",
  },
  {
    word: "Happy",
    body: "Happiness is radiant and promotes feelings of trust, empathy and love.",
  },
];

const openings = [
  {
    title: "Acupuncture Physician",
    status: "open",
    description:
      "Join a clinic that feels like home, where your growth is nurtured and your passion for healing is celebrated.",
  },
  {
    title: "Licensed Massage Therapist",
    status: "filled",
    description:
      "This position is currently filled. Check back soon or reach out — we're always growing.",
  },
  {
    title: "Clinic Assistant",
    status: "open",
    description:
      "Looking for an uplifting and positive place to work? We'd love to hear from you.",
  },
];

export default function CareersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Careers at Health Pointe Jacksonville | Join Our Team",
        description:
          "Explore current opportunities at Health Pointe Jacksonville in Jacksonville. See open roles, clinic culture, and how to apply.",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Careers", href: "/health-pointe-jax-careers/" },
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

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <header
        aria-labelledby="page-heading"
        className="relative min-h-[20rem] md:min-h-[26rem] flex items-center justify-center overflow-hidden py-12"
      >
        <Image
          src="/images/careers-health-pointe-jacksonville-wellness-team.jpg"
          alt="Person looking toward the horizon — join the Health Pointe Jacksonville team"
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
            Careers at Health Pointe Jacksonville
          </h1>
          <p className="text-white text-lg leading-relaxed mb-3">
            We&apos;re always looking for talented, passionate individuals to join our team! Check out our open positions and learn more about us below.
          </p>
          <p className="text-white/90 text-lg leading-relaxed">
            We are proud to be the premier Acupuncture + Wellness Clinic serving the Jacksonville area.
          </p>
        </div>
      </header>

      {/* ── Mission ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="mission-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="mission-heading" className="section-heading mb-6">Our Mission</h2>
            <p className="text-ink-muted leading-relaxed text-lg mb-5">
              At Health Pointe Jacksonville, our mission is to change people&apos;s lives by providing long term solutions to chronic pain, chronic illness and infertility.
            </p>
            <p className="text-ink-muted leading-relaxed text-lg">
              We help our patients feel relaxed, grounded, centered and cared for, so they can be better family members, friends, partners, neighbors, colleagues, and citizens.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Core Values ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="values-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 id="values-heading" className="section-heading">Our Core Values</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.word} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-surface-muted h-full text-center">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-teal-dark font-heading font-bold text-lg" aria-hidden="true">
                      {v.word[0]}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-ink text-lg mb-3">{v.word}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ──────────────────────────────────────────────────── */}
      <section aria-labelledby="openings-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 id="openings-heading" className="section-heading">Current Openings</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {openings.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 0.08}>
                <div className={`rounded-2xl p-8 border ${job.status === "open" ? "bg-white border-surface-muted shadow-sm" : "bg-surface border-surface-muted opacity-60"}`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <h3 className="font-heading font-bold text-ink text-xl">{job.title}</h3>
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${job.status === "open" ? "bg-teal/10 text-teal-dark" : "bg-ink/10 text-ink-muted"}`}>
                      {job.status === "open" ? "Now Hiring" : "Position Filled"}
                    </span>
                  </div>
                  <p className="text-ink-muted leading-relaxed mt-3">{job.description}</p>
                  {job.status === "open" && (
                    <a
                      href="mailto:info@hpjax.com?subject=Career%20Inquiry"
                      className="mt-5 inline-flex items-center gap-1 text-teal-dark font-semibold text-sm underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
                    >
                      Apply via email →
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="contact-heading" className="py-20 bg-gradient-to-br from-teal-dark to-ink text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="contact-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-5">
              Don&apos;t see your role listed?
            </h2>
            <p className="text-white/90 leading-relaxed text-lg mb-8">
              We&apos;re always open to hearing from passionate wellness professionals. Reach out and introduce yourself.
            </p>
            <a
              href="mailto:info@hpjax.com?subject=Career%20Inquiry"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Email Us
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

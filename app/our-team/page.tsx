import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { teamPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Meet Our Team Jacksonville, FL",
  description:
    "Meet the Health Pointe Jacksonville team, including acupuncture physicians and massage therapists. Learn backgrounds, focus areas, and book online today.",
  alternates: { canonical: "https://hpjax.com/our-team" },
  openGraph: {
    title: "Meet Our Team Jacksonville, FL | Health Pointe Jacksonville",
    description:
      "Meet the Health Pointe Jacksonville team, including acupuncture physicians and massage therapists. Learn backgrounds, focus areas, and book online today.",
    images: [{ url: "https://hpjax.com/images/team/health-pointe-jacksonville-acupuncture-team.jpg", width: 1024, height: 683, alt: "Health Pointe Jacksonville acupuncture team" }],
  },
};

const team = [
  {
    name: "Dr. Julee Miller",
    credentials: "DAcCHM, AP, FABORM",
    title: "Doctor of Acupuncture and Chinese Medicine, Owner",
    bio: "Doctor of Acupuncture and Chinese Medicine, FABORM fertility expert and owner of Health Pointe Jacksonville, Dr. Julee Miller specializes in treating Women's Health & Infertility, chronic pain and other chronic difficult to treat medical issues in Jacksonville, FL.",
    photo: "/images/team/dr-julee-miller-acupuncturist-jacksonville-fl.jpg",
    slug: "dr-julee-miller",
  },
  {
    name: "Denise",
    credentials: "",
    title: "Lead LMT, Massage Therapist",
    bio: "Meet Denise, a seasoned and compassionate licensed massage therapist with a remarkable 30 years of experience in the field.",
    photo: "/images/team/denise-lmt-massage-therapist-jacksonville-fl.jpg",
    slug: "denise",
  },
  {
    name: "Damaris",
    credentials: "",
    title: "Office Manager",
    bio: "Meet Damaris, the welcoming face of Health Pointe Jax, whose warmth and professionalism help every patient feel right at home.",
    photo: "/images/team/damaris-office-manager-health-pointe-jacksonville.jpg",
    slug: "damaris",
  },
  {
    name: "Lexi",
    credentials: "",
    title: "Front Desk",
    bio: "Lexi is likely the first voice you hear and the first face you see at HPJ — and honestly, we couldn't think of a better person for that job.",
    photo: "/images/team/lexi-front-desk-health-pointe-jacksonville.jpg",
    slug: "lexi",
  },
  {
    name: "Angel",
    credentials: "",
    title: "Patient Care Specialist",
    bio: "Angel connects with patients and the community alike, using her dedication, bubbly spirit, and care-first approach to make every visit brighter.",
    photo: "/images/team/angel-patient-care-health-pointe-jacksonville.jpg",
    slug: "angel",
  },
  {
    name: "Dana",
    credentials: "",
    title: "Patient Care Specialist",
    bio: "From patient to Patient Care Specialist, Dana knows firsthand what great care feels like—and ensures every visitor experiences it too.",
    photo: "/images/team/dana-patient-care-health-pointe-jacksonville.jpg",
    slug: "dana",
  },
];

export default function OurTeamPage() {
  const schema = teamPageSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <header className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/team/health-pointe-jacksonville-acupuncture-team.jpg"
          alt="The Health Pointe Jacksonville acupuncture and wellness team outside their clinic at 3840 Belfort Rd, Jacksonville, FL"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-3">
            Proudly serving the greater Jacksonville area since 2008
          </h1>
          <p className="text-white text-base md:text-lg">
            Expert Care in Women&apos;s Health, Fertility, and Chronic Pain Management
          </p>
        </div>

        {/* ThreeBestRated award badge */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10">
          <a
            href="https://threebestrated.com/acupuncture-in-jacksonville-fl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Health Pointe Jacksonville — one of the Three Best Rated acupuncture clinics in Jacksonville, FL (opens in new tab)"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/award-three-best-rated-acupuncture-jacksonville-2025.svg"
              alt=""
              width={140}
              height={140}
              className="drop-shadow-lg"
            />
          </a>
        </div>
      </header>

      {/* ── Expert Care section ──────────────────────────────────────────────── */}
      <section aria-labelledby="expert-care-heading" className="bg-white pt-20 pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="expert-care-heading" className="section-heading mb-6">
              Expert Care in Women&apos;s Health, Fertility, and Chronic Pain Management
            </h2>
            <div className="space-y-4 text-ink-muted leading-relaxed mb-10 max-w-3xl mx-auto">
              <p>
                Experience natural wellness at its best. Acupuncture helps reduce persistent pain and boost your immune system, allowing you to enjoy life&apos;s experiences once again. Massage has become essential for a healthier, more joyful life, offering relaxation, pain relief, headache alleviation, anxiety reduction, and immune system support.
              </p>
              <p>
                O3 Regenerative Therapy uses ozone to stimulate the body&apos;s immune system, promoting healing and protection from future illnesses. For an extra boost, our nutrient injections support energy, memory, and weight loss efforts—perfect for those feeling fatigued or struggling with mental clarity.
              </p>
            </div>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Your Session Now (opens in new tab)"
              className="btn-primary mb-14"
            >
              Book Your Session Now
            </a>
          </ScrollReveal>
        </div>
        {/* Team photo — capped at native width to avoid upscale blur */}
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Image
            src="/images/team-health-pointe-jacksonville-acupuncture-clinic.webp"
            alt="Health Pointe Jacksonville acupuncture and wellness team at their clinic"
            width={1024}
            height={683}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* ── Team section ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="team-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 id="team-heading" className="section-heading">Meet our team</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Every member of our team is dedicated to your health and healing — from our board-certified practitioners to our care specialists who make every visit feel like home.
            </p>
          </ScrollReveal>

          {/* ── Dr. Julee Miller — featured ────────────────────────────────────── */}
          <ScrollReveal className="mb-10">
            <article className="group bg-teal-dark rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row">
              {/* Photo */}
              <div className="relative w-full md:w-72 lg:w-96 aspect-square md:aspect-auto flex-shrink-0 overflow-hidden">
                <Image
                  src={team[0].photo}
                  alt="Dr. Julee Miller, DAcCHM AP FABORM — Owner and Acupuncture Physician at Health Pointe Jacksonville"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center px-8 lg:px-12 py-10">
                <span className="text-white text-xs font-bold uppercase tracking-widest mb-3">Owner &amp; Lead Practitioner</span>
                <h3 className="font-heading font-bold text-white text-3xl lg:text-4xl leading-tight mb-1">
                  Dr. Julee Miller
                </h3>
                <p className="text-white text-sm font-semibold mb-4">DAcCHM, AP, FABORM — Doctor of Acupuncture and Chinese Medicine</p>
                <p className="text-white leading-relaxed mb-4 max-w-xl">
                  {team[0].bio}
                </p>
                <p className="text-white leading-relaxed mb-6 max-w-xl">
                  Our vision is to bring about positive change in every person. We aspire to have a positive impact on our patients, our team, and our community. Health Pointe Jacksonville Acupuncture + Wellness Clinic remains dedicated to providing a world class healing environment that supports the recovery and maintenance of health &amp; wellness to the community of Jacksonville.
                </p>
                <Link
                  href="/our-team/dr-julee-miller"
                  className="self-start inline-flex items-center gap-2 bg-white text-teal-dark font-body font-semibold text-sm px-6 py-3 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label="Meet Dr. Julee Miller, Owner and Lead Practitioner"
                >
                  Meet Dr. Miller
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          </ScrollReveal>

          {/* ── Rest of team ────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.slice(1).map((member, i) => (
              <ScrollReveal key={member.slug} delay={i * 0.07}>
                <article className="group bg-white rounded-2xl border border-surface-muted overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="relative aspect-square overflow-hidden bg-surface-muted">
                    <Image
                      src={member.photo}
                      alt={`${member.name} — ${member.title} at Health Pointe Jacksonville`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3">
                      <h3 className="font-heading font-bold text-ink text-xl leading-tight">{member.name}</h3>
                      <p className="text-teal-dark text-sm font-semibold mt-0.5">{member.title}</p>
                    </div>
                    <p className="text-ink-muted text-sm leading-relaxed flex-1">{member.bio}</p>
                    <Link
                      href={`/our-team/${member.slug}`}
                      className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-teal-dark hover:text-teal-dark/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
                      aria-label={`Meet ${member.name}, ${member.title}`}
                    >
                      Meet {member.name}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Address ──────────────────────────────────────────────────────────── */}
      <section aria-label="Clinic location" className="py-12 bg-white text-center">
        <address className="not-italic text-ink-muted text-sm leading-relaxed">
          <strong className="text-ink font-semibold">Health Pointe Jacksonville</strong><br />
          3840 Belfort Rd STE 305, Jacksonville, FL 32216<br />
          <a href="tel:9044480046" className="hover:text-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded">
            (904) 448-0046
          </a>
        </address>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <BookingCTA
        heading="Start your journey to better health"
        body="Start your journey to better health and well-being with a team that truly cares."
      />
    </>
  );
}

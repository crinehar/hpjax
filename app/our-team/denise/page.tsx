import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { staffMemberPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Denise, Lead LMT | Health Pointe Jacksonville",
  description:
    "Meet Denise, Lead LMT at Health Pointe Jacksonville. She provides massage therapy to support recovery, relaxation, and comfort with a personalised approach.",
  alternates: { canonical: "https://hpjax.com/our-team/denise" },
  openGraph: {
    title: "Denise, Lead LMT | Health Pointe Jacksonville",
    description:
      "A seasoned and compassionate licensed massage therapist with 30 years of experience helping clients lead pain-free lives in Jacksonville, FL.",
    images: [
      {
        url: "https://hpjax.com/images/team/denise-lead-lmt-massage-therapist-health-pointe-jacksonville.jpg",
        width: 2048,
        height: 1365,
        alt: "Denise — Lead Licensed Massage Therapist at Health Pointe Jacksonville",
      },
    ],
  },
};

const faqs = [
  {
    question: "What massage modalities does Denise offer?",
    answer:
      "Denise is certified in Neuromuscular Therapy, Prenatal Massage, Myofascial Release, Medical Massage, Trigger Point Therapy, Manual Lymphatic Drainage, and Fertility Massage — allowing her to tailor each session to the client's specific needs.",
  },
  {
    question: "How many years of experience does Denise have?",
    answer:
      "Denise has 30 years of experience as a licensed massage therapist. Her background includes a Bachelor's degree in pre-Physical Therapy from the University of Kansas and a Florida license in Massage Therapy.",
  },
  {
    question: "Does Denise offer prenatal massage in Jacksonville?",
    answer:
      "Yes. Denise is certified in Prenatal Massage and provides safe, effective care for expectant mothers at Health Pointe Jacksonville, located at 3840 Belfort Rd STE 305, Jacksonville, FL 32216.",
  },
];

export default function DenisePage() {
  const schema = staffMemberPageSchema({
    name: "Denise",
    jobTitle: "Lead Licensed Massage Therapist",
    description:
      "A seasoned and compassionate licensed massage therapist with 30 years of experience. Specializing in Neuromuscular Therapy, Prenatal Massage, Myofascial Release, Medical Massage, Trigger Point Therapy, Manual Lymphatic Drainage, and Fertility Massage at Health Pointe Jacksonville.",
    slug: "denise",
    imageUrl: "/images/team/denise-lead-lmt-massage-therapist-health-pointe-jacksonville.jpg",
    knowsAbout: [
      "Neuromuscular Therapy",
      "Prenatal Massage",
      "Myofascial Release",
      "Medical Massage",
      "Trigger Point Therapy",
      "Manual Lymphatic Drainage",
      "Fertility Massage",
      "Sports massage",
      "Pain management",
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
            <li className="ml-1 text-ink font-medium" aria-current="page">Denise</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero / Profile ───────────────────────────────────────────────────── */}
      <section aria-labelledby="profile-heading" className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-24 items-center">

            {/* Photo — landscape 3:2 to show clinic backdrop */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[560px] aspect-[3/2] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/team/denise-lead-lmt-massage-therapist-health-pointe-jacksonville.jpg"
                  alt="Denise — Lead Licensed Massage Therapist at Health Pointe Jacksonville"
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
                Lead Massage Therapist
              </p>
              <h1
                id="profile-heading"
                className="font-heading font-bold text-ink text-5xl md:text-6xl leading-tight mb-3"
              >
                Denise
              </h1>
              <p className="text-ink-muted text-base font-semibold mb-7">
                Lead LMT, Massage Therapist | Jacksonville, FL
              </p>
              <p className="text-ink-muted text-lg leading-relaxed mb-9">
                Meet Denise, a seasoned and compassionate licensed massage therapist with a remarkable 30 years of experience in the field. Her true passion lies in helping others lead pain-free lives, and her expertise has made her shine in the world of wellness.
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

      {/* ── About Denise ────────────────────────────────────────────────────── */}
      <section aria-labelledby="about-heading" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="about-heading" className="section-heading text-center mb-10">
              About Denise
            </h2>
          </ScrollReveal>

          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              Denise&apos;s journey began with a Bachelor&apos;s degree from the prestigious University of Kansas, where she studied pre-Physical Therapy, setting a solid foundation for her career in Massage Therapy. She holds a Florida license in Massage Therapy, showcasing her dedication to excellence in her field.
            </p>
            <p>
              Throughout her career, Denise has pursued advanced level certifications, making her a true master of her craft. Her skillset includes{" "}
              <Link
                href="/services/massage-therapy-jacksonville/"
                className="text-teal-dark underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
              >
                Neuromuscular Therapy, Prenatal Massage, Myofascial Release, Medical Massage, Trigger Point Therapy, Manual Lymphatic Drainage, and Fertility Massage
              </Link>
              . Her diverse expertise allows her to address a wide range of clients&apos; needs, providing tailored and effective treatments.
            </p>
            <p>
              Beyond her commitment to her clients, Denise is actively involved in making a positive impact in her community. She volunteers with esteemed organizations like K9&apos;s for Warriors, Tim Tebow Foundation, Birdies for the Brave, and the PGA Tour, where she extends her healing touch to those in need.
            </p>
            <p>
              Denise is not just a talented therapist; she is also a fervent sports enthusiast. Whether it&apos;s professional or collegiate sports, she loves them all, but her alma mater&apos;s basketball team holds a special place in her heart (Go Jayhawks!).
            </p>
            <p>
              Her vibrant energy and genuine compassion for her patients and community have made her an invaluable member of our team. Denise&apos;s dedication to her profession and her unwavering commitment to enhancing the lives of others make her a truly exceptional Massage Therapist, and we are honored to have her on board.
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
        heading="Ready to experience the difference?"
        body="Book a session with Denise and start your journey to pain-free living."
      />
    </>
  );
}

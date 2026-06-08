import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { breadcrumbSchema, localBusinessEntity } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Acupuncture & Wellness Services Jacksonville, FL | Health Pointe Jacksonville",
  description:
    "Health Pointe Jacksonville offers acupuncture, women's health, fertility support, chronic pain relief, massage therapy, O3 therapy, and more. Whole-body care built around you.",
  alternates: { canonical: "https://hpjax.com/services/" },
  openGraph: {
    title: "Acupuncture & Wellness Services Jacksonville, FL | Health Pointe Jacksonville",
    description:
      "Health Pointe Jacksonville offers acupuncture, women's health, fertility support, chronic pain relief, massage therapy, O3 therapy, and more. Whole-body care built around you.",
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/`;

const womensHealthServices = [
  {
    label: "Women's Health",
    heading: "Hormonal balance. Real support.",
    body: "From PMOS and endometriosis to menopause and mood regulation, we treat the full spectrum of women's health with acupuncture and integrative care. You deserve more than \"that's just how it is.\"",
    href: "/womens-health/",
    badge: null,
  },
  {
    label: "Fertility Programs",
    heading: "Specialized fertility support",
    body: "Dr. Miller is one of a select group of ABORM-certified fertility acupuncture specialists in Florida. We support natural conception, IVF/IUI cycles, PMOS, unexplained infertility, and pregnancy loss, with a treatment plan built around your specific situation.",
    href: "/services/fertility-acupuncture-jacksonville-fl-aborm-certified-dr-julee-miller/",
    badge: "ABORM Certified",
  },
  {
    label: "Pelvic Floor",
    heading: "Restore strength and confidence",
    body: "Pelvic pain, bladder leakage, postpartum dysfunction, and post-surgical recovery all respond well to specialized acupuncture care. We work with you to rebuild function and get you back to the activities you love.",
    href: "/services/pelvic-floor/",
    badge: null,
  },
  {
    label: "Dry Needling",
    heading: "Targeted muscle and tissue release",
    body: "Dry needling works directly on trigger points and myofascial tension, especially effective for pelvic floor dysfunction, musculoskeletal pain, and recovery. A powerful complement to acupuncture treatment.",
    href: "/services/dry-needling-jacksonville-fl/",
    badge: null,
  },
];

const acupunctureServices = [
  {
    label: "Acupuncture",
    heading: "Where healing starts",
    body: "Our acupuncture services address a wide range of conditions, from pain and stress to digestive issues and immune support. Every session begins with a thorough evaluation so your care is never one-size-fits-all.",
    href: "/services/acupuncture/",
    badge: null,
  },
  {
    label: "Chronic Pain",
    heading: "Long-term relief, not just management",
    body: "Arthritis, back pain, sciatica, neck pain, TMJ, carpal tunnel. Chronic pain has many faces. We treat the root cause, not just the symptoms, using evidence-informed acupuncture and adjunct therapies.",
    href: "/services/chronic-pain/",
    badge: null,
  },
  {
    label: "Neurological Disorders",
    heading: "Support for complex neurological conditions",
    body: "Migraines, tinnitus, vertigo, facial palsy, stroke recovery, MS, and trigeminal neuralgia are all within our scope. Acupuncture has a strong clinical track record for neurological support and symptom management.",
    href: "/services/neurological-disorders/",
    badge: null,
  },
  {
    label: "Sports Acupuncture",
    heading: "Recover faster. Perform better.",
    body: "Sports acupuncture combines proven techniques to help treat injuries, reduce inflammation, and shorten recovery time. Whether you're dealing with a current injury or preventing the next one, we've got you covered.",
    href: "/services/sports-acupuncture/",
    badge: null,
  },
  {
    label: "Pediatric Acupuncture",
    heading: "Gentle care for little ones",
    body: "Children respond remarkably well to acupuncture. We offer safe, age-appropriate treatment for a range of pediatric conditions, with techniques adjusted for each child's age and comfort level.",
    href: "/services/pediatric-acupuncture/",
    badge: null,
  },
  {
    label: "Quit Smoking Program",
    heading: "Finally ready to quit?",
    body: "Our structured quit smoking program uses acupuncture to reduce cravings, ease withdrawal, and address the stress that keeps people stuck. It's not willpower alone. It's clinical support for a real process.",
    href: "/services/quit-smoking-program-jacksonville/",
    badge: null,
  },
];

const massageServices = [
  {
    label: "Massage Therapy",
    heading: "Therapeutic massage that does more than relax",
    body: "Our massage therapy services go beyond relaxation. We offer therapeutic massage targeted at pain relief, tension release, and recovery, often used alongside acupuncture for a more complete treatment outcome.",
    href: "/services/massage-therapy-jacksonville/",
    badge: null,
  },
  {
    label: "Fertility Massage",
    heading: "Nurture your path to parenthood",
    body: "Your fertility journey deserves every ounce of support. Fertility massage is designed to harmonize your body, reduce stress, and support your reproductive health naturally.",
    href: "/services/massage-therapy-jacksonville/",
    badge: null,
  },
  {
    label: "Prenatal & Postpartum Massage",
    heading: "The magic of prenatal massage",
    body: "The journey of motherhood transforms your body in remarkable ways. At Health Pointe Jacksonville, we believe every mother deserves expert, nurturing support throughout this incredible journey.",
    href: "/services/massage-therapy-jacksonville/",
    badge: null,
  },
];

const additionalServices = [
  {
    label: "O3 Regenerative Therapy",
    heading: "Ozone therapy for injury and recovery",
    body: "O3 regenerative therapy uses ozone injections to boost your body's natural healing response. Especially effective for joint injuries, musculoskeletal repair, and conditions that haven't responded to conventional treatment.",
    href: "/services/o3-regenerative-therapy/",
    badge: null,
  },
  {
    label: "B12 Injections",
    heading: "Energy, metabolism, and more",
    body: "B12 injections support energy levels, metabolism, nerve health, and mood. A quick add-on to any visit and a common favorite among patients who've struggled with fatigue, brain fog, or nutritional gaps.",
    href: "/services/b12-injections/",
    badge: null,
  },
];

function ServiceCard({
  label,
  heading,
  body,
  href,
  badge,
}: {
  label: string;
  heading: string;
  body: string;
  href: string;
  badge: string | null;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-muted h-full flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-dark bg-teal/10 px-3 py-1 rounded-full">
          {label}
        </span>
        {badge && (
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-teal-dark px-3 py-1 rounded-full flex-shrink-0">
            {badge}
          </span>
        )}
      </div>
      <h3 className="font-heading font-bold text-ink text-xl mb-3">{heading}</h3>
      <p className="text-ink-muted leading-relaxed text-sm flex-1">{body}</p>
      <Link
        href={href}
        aria-label={`Learn more about ${heading}`}
        className="mt-6 inline-flex items-center gap-1 text-teal-dark font-semibold text-sm hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
      >
        Learn More →
      </Link>
    </div>
  );
}

function SectionBookingCTA() {
  return (
    <div className="mt-10 text-center">
      <a
        href="https://healthpointejacksonville.acubliss.app/portal/booking/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book an Appointment (opens in new tab)"
        className="btn-primary"
      >
        Book an Appointment
      </a>
    </div>
  );
}

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Acupuncture & Wellness Services Jacksonville, FL | Health Pointe Jacksonville",
        description:
          "Health Pointe Jacksonville offers acupuncture, women's health, fertility support, chronic pain relief, massage therapy, O3 therapy, and more. Whole-body care built around you.",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#services-list`,
        name: "Health Pointe Jacksonville Services",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Women's Health & Acupuncture", url: `${SITE_URL}/womens-health/` },
          { "@type": "ListItem", position: 2, name: "Fertility Acupuncture (ABORM Certified)", url: `${SITE_URL}/services/fertility-acupuncture-jacksonville-fl-aborm-certified-dr-julee-miller/` },
          { "@type": "ListItem", position: 3, name: "Pelvic Floor Acupuncture", url: `${SITE_URL}/services/pelvic-floor/` },
          { "@type": "ListItem", position: 4, name: "Dry Needling", url: `${SITE_URL}/services/dry-needling-jacksonville-fl/` },
          { "@type": "ListItem", position: 5, name: "Acupuncture", url: `${SITE_URL}/services/acupuncture/` },
          { "@type": "ListItem", position: 6, name: "Chronic Pain Acupuncture", url: `${SITE_URL}/services/chronic-pain/` },
          { "@type": "ListItem", position: 7, name: "Neurological Disorder Acupuncture", url: `${SITE_URL}/services/neurological-disorders/` },
          { "@type": "ListItem", position: 8, name: "Sports Acupuncture", url: `${SITE_URL}/services/sports-acupuncture/` },
          { "@type": "ListItem", position: 9, name: "Pediatric Acupuncture", url: `${SITE_URL}/services/pediatric-acupuncture/` },
          { "@type": "ListItem", position: 10, name: "Quit Smoking Program", url: `${SITE_URL}/services/quit-smoking-program-jacksonville/` },
          { "@type": "ListItem", position: 11, name: "Massage Therapy", url: `${SITE_URL}/services/massage-therapy-jacksonville/` },
          { "@type": "ListItem", position: 12, name: "O3 Regenerative Therapy", url: `${SITE_URL}/services/o3-regenerative-therapy/` },
          { "@type": "ListItem", position: 13, name: "B12 Injections", url: `${SITE_URL}/services/b12-injections/` },
        ],
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Services", href: "/services/" },
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
          src="/images/acupuncture-treatment-relaxed-patient-jacksonville-fl.jpg"
          alt="Patient receiving acupuncture treatment at Health Pointe Jacksonville"
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
            Whole-Body Care in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed mb-4">
            At Health Pointe Jacksonville, we take a whole-body approach to care. Our providers bring advanced clinical expertise and years of hands-on experience to every treatment plan. Nothing is cookie-cutter. Everything is built around you.
          </p>
          <p className="text-white/90 text-lg leading-relaxed">
            Whether you&apos;re navigating a fertility journey, managing chronic pain, or simply ready to feel better in your body, we have a path forward for you.
          </p>
        </div>
      </header>

      {/* ── Women's Health & Hormonal Wellness ──────────────────────────────── */}
      <section aria-labelledby="womens-health-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 id="womens-health-heading" className="section-heading">
              Women&apos;s Health &amp; Hormonal Wellness
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {womensHealthServices.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.06}>
                <ServiceCard {...s} />
              </ScrollReveal>
            ))}
          </div>
          <SectionBookingCTA />
        </div>
      </section>

      {/* ── Acupuncture Treatment ────────────────────────────────────────────── */}
      <section aria-labelledby="acupuncture-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 id="acupuncture-heading" className="section-heading">
              Acupuncture Treatment
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acupunctureServices.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.06}>
                <ServiceCard {...s} />
              </ScrollReveal>
            ))}
          </div>
          <SectionBookingCTA />
        </div>
      </section>

      {/* ── Massage Therapy ──────────────────────────────────────────────────── */}
      <section aria-labelledby="massage-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 id="massage-heading" className="section-heading">
              Massage Therapy
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {massageServices.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.06}>
                <ServiceCard {...s} />
              </ScrollReveal>
            ))}
          </div>
          <SectionBookingCTA />
        </div>
      </section>

      {/* ── Additional Services ──────────────────────────────────────────────── */}
      <section aria-labelledby="additional-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 id="additional-heading" className="section-heading">
              Additional Services
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {additionalServices.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.06}>
                <ServiceCard {...s} />
              </ScrollReveal>
            ))}
          </div>
          <SectionBookingCTA />
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="cta-heading" className="py-20 bg-gradient-to-br from-teal-dark to-ink text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="cta-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-5">
              Not sure where to start?
            </h2>
            <p className="text-white/90 leading-relaxed text-lg mb-10">
              That&apos;s okay. Many of our patients come to us with complex or overlapping conditions. Schedule a consultation and we&apos;ll help you find the right path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://healthpointejacksonville.acubliss.app/portal/booking/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book an Appointment (opens in new tab)"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book an Appointment
              </a>
              <a
                href="https://www.bluecrossma.org/blue-access/member/find-a-doctor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verify Your Insurance (opens in new tab)"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white font-body font-bold text-base px-8 py-4 rounded-md hover:bg-white hover:text-teal-dark transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Verify Your Insurance
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { faqSchema, breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";

export const metadata: Metadata = {
  title: "sports acupuncture, Jacksonville, FL, athletic injuries",
  description:
    "Health Pointe in Jacksonville, FL offers sports acupuncture for athletic injuries targeting pain relief and accelerated recovery",
  alternates: { canonical: "https://hpjax.com/services/sports-acupuncture/" },
  openGraph: {
    title: "sports acupuncture, Jacksonville, FL, athletic injuries",
    description:
      "Health Pointe in Jacksonville, FL offers sports acupuncture for athletic injuries targeting pain relief and accelerated recovery",
    images: [
      {
        url: "https://hpjax.com/images/marathon-runners-sports-acupuncture-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "Marathon runners in Jacksonville, FL — sports acupuncture at Health Pointe Jacksonville",
      },
    ],
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/sports-acupuncture/`;

const injuryGroups = [
  {
    heading: "Common Sports Injuries",
    items: [
      "Acute injuries",
      "Achilles tendonitis",
      "Carpal Tunnel Syndrome",
      "Frozen Shoulder / shoulder impingement",
      "Golfer's / Tennis elbow",
      "Traumatic Brain Injury",
      "Low Back Pain",
      "Morton's neuroma",
      "IT band syndrome",
    ],
  },
  {
    heading: "Chronic & Repetitive Injuries",
    items: [
      "Knee pain",
      "Neck pain",
      "Plantar Fasciitis",
      "Repetitive strain injuries",
      "Rotator cuff injuries",
      "Shin splints / tibial stress syndrome",
      "Spinal disc impingement / herniation",
      "Bursitis",
    ],
  },
  {
    heading: "Pain and Mobility Issues",
    items: [
      "Sciatica / Piriformis syndrome",
      "Running injuries",
      "TMJ dysfunction",
      "Tendonitis / tendinopathy",
      "Peripheral neuropathy",
      "Post surgical rehabilitation",
      "Arthritis",
    ],
  },
];

const faqs = [
  {
    q: "When Should I Start Acupuncture After a Sports Injury?",
    a: "Best results are achieved when treatments start immediately after the time of injury. Acupuncture treatments offer immediate pain and swelling reduction, and improved blood flow to the injured area to ensure regrowth of healthy tissue.",
  },
  {
    q: "How Does Acupuncture Help With Chronic Sports Injuries?",
    a: "Chronic injuries usually start out as a nagging dull ache. Once the framework of the injury is understood, a comprehensive treatment plan can be devised to address both the main symptoms and their causes. Ongoing pain can lead to further dysfunction requiring more recovery time — early treatment prevents that cycle.",
  },
  {
    q: "What Does a Sports Acupuncture Session Include?",
    a: "Sports acupuncturists do not rely on just acupuncture. They also incorporate forms of soft tissue release and mobilizations, PNF stretching, and exercises to correct postural imbalances to quickly get you back in the game pain free, maintain optimal results, and prevent further injuries.",
  },
];

const SPORTS_REVIEW_SLUGS = ["jeremy-l", "steve-l", "eileen-a"];

const sportsReviews = SPORTS_REVIEW_SLUGS.map((slug, i) => {
  const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
  return { id: i + 1, name: r.name, quote: r.quote };
});

export default function SportsAcupuncturePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "sports acupuncture, Jacksonville, FL, athletic injuries",
        description:
          "Health Pointe in Jacksonville, FL offers sports acupuncture for athletic injuries targeting pain relief and accelerated recovery",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
        about: { "@id": `${PAGE_URL}#service` },
        provider: { "@id": `${SITE_URL}/#practitioner` },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Sports Acupuncture",
        description:
          "Integrated sports acupuncture combining Traditional Chinese Medicine and Western Medicine to assess and treat athletic injuries, chronic pain, and post-surgical rehabilitation.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Jacksonville, FL" },
          { "@type": "AdministrativeArea", name: "Duval County, FL" },
        ],
        url: PAGE_URL,
        serviceType: "Sports Acupuncture",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://healthpointejacksonville.acubliss.app/portal/booking/",
          servicePhone: "+1-904-448-0046",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Sports Acupuncture Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acute Sports Injury Treatment" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chronic Sports Injury Rehabilitation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Post-Surgical Rehabilitation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Optimization Acupuncture" } },
          ],
        },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Sports Acupuncture", href: "/services/sports-acupuncture/" },
      ]),
      faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
      { ...localBusinessEntity },
      { ...drJuleeMillerEntity },
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
          src="/images/marathon-runners-sports-acupuncture-jacksonville-fl.jpg"
          alt="Marathon runners in Jacksonville, FL — sports acupuncture at Health Pointe Jacksonville"
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
            Sports Acupuncture in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Sports Acupuncture incorporates principles and techniques from Traditional Chinese Medicine and Western Medicine to assess and treat a patient&apos;s injury from a true integrated perspective.
          </p>
        </div>
      </header>

      {/* ── Intro ───────────────────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="intro-heading" className="section-heading mb-6">
              Sports Acupuncture is used to speed healing, relieve pain, improve muscle strength and stamina.
            </h2>
            <p className="text-ink-muted leading-relaxed mb-5">
              Whether you&apos;re an avid competitor, training for a race, or everyday fitness enthusiast acupuncture can help you get back in the game. Regardless of age or fitness level, injuries can happen to anyone at anytime. These treatments are especially helpful with acute pain, nagging chronic pain and post-surgical care.
            </p>
            <p className="text-ink-muted leading-relaxed mb-8">
              Top athletes all over the world are now using acupuncture as part of their regular treatment regimes. Surfers, skaters, runners, MLB baseball players, NFL football players, volleyball players, and Olympians have embraced sports acupuncture.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Your Session Now (opens in new tab)"
              className="btn-primary"
            >
              Book Your Session Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What We Treat ───────────────────────────────────────────────────── */}
      <section aria-labelledby="conditions-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 id="conditions-heading" className="section-heading">What We Treat</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {injuryGroups.map((group, i) => (
              <ScrollReveal key={group.heading} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-muted h-full">
                  <h3 className="font-heading font-bold text-teal-dark text-xl mb-5">{group.heading}</h3>
                  <div role="list" className="space-y-2">
                    {group.items.map((item) => (
                      <div key={item} role="listitem" className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-teal-dark" aria-hidden="true" />
                        <span className="text-ink-muted text-sm leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comprehensive Recovery ──────────────────────────────────────────── */}
      <section aria-labelledby="recovery-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="mb-10">
            <h2 id="recovery-heading" className="section-heading">
              Comprehensive Sports Recovery and Performance Optimization
            </h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed text-left">
            <p>
              Sports acupuncturists do not rely on just acupuncture to help their patients. They also incorporate forms of soft tissue release and mobilizations, PNF stretching, and exercises to correct postural imbalances to quickly get you back in the game pain free, maintain optimal results and prevent further injuries.
            </p>
            <p>
              At Health Pointe Jacksonville, we currently treat professional golfers, crossfitters, football players, soccer players, swimmers, marathon runners, triathletes, baseball players, cheerleaders and gymnasts. Before your first treatment our practitioners will complete an extensive health intake, evaluate symptoms and prescribe a customized course of treatment.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/foam-roller-sports-recovery-jacksonville-fl.avif", label: "Acupuncture" },
              { src: "/images/sports-nutrition-recovery-jacksonville-fl.webp", label: "Nutritional / Lifestyle Changes" },
              { src: "/images/crossfit-athletic-training-sports-acupuncture-jacksonville-fl.jpg", label: "Herbal Prescriptions / Vitamin Injections" },
            ].map(({ src, label }) => (
              <figure key={label} className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image src={src} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 bg-ink/30" aria-hidden="true" />
                <figcaption className="absolute bottom-4 left-0 right-0 text-center text-white font-semibold text-base drop-shadow">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Acute vs Chronic ────────────────────────────────────────────────── */}
      <section aria-labelledby="timing-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 id="timing-heading" className="section-heading">When to Get Acupuncture</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 border border-surface-muted h-full">
                <h3 className="font-heading font-semibold text-ink text-xl mb-4">Acute Injuries</h3>
                <p className="text-ink-muted leading-relaxed mb-4">
                  Acupuncture treatments are a great thing to add any recovery routine of an acute traumatic injury. In fact, best results are achieved when treatments start immediately after the time of injury.
                </p>
                <p className="text-ink-muted leading-relaxed">
                  These treatments offer immediate pain and swelling reduction, and improved blood flow to the injured area to ensure regrowth of healthy tissue.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="bg-white rounded-2xl p-8 border border-surface-muted h-full">
                <h3 className="font-heading font-semibold text-ink text-xl mb-4">Chronic Injuries</h3>
                <p className="text-ink-muted leading-relaxed mb-4">
                  Some injuries are not sudden, but slowly build up over time. Chronic injuries usually start out as a nagging dull ache. This is the best time to start receiving treatment for these injuries. Ongoing pain can lead to further dysfunction requiring more recovery time.
                </p>
                <p className="text-ink-muted leading-relaxed">
                  Once the framework of the injury is understood, a comprehensive treatment plan can be devised to address both the main symptoms and their causes.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Full-bleed band ─────────────────────────────────────────────────── */}
      <section aria-labelledby="help-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/cycling-athlete-sports-acupuncture-jacksonville-fl.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="help-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-8">
              Find Out How Acupuncture Can Help Your Sport Injury
            </h2>
            <p className="text-white/90 leading-relaxed text-lg max-w-2xl mx-auto mb-10">
              Acupuncture is an effective treatment for sports injuries, helping to reduce pain, promote healing, and improve mobility. By targeting specific points, acupuncture accelerates recovery, relieves muscle tension, and reduces inflammation, allowing you to get back to your sport faster and with less risk of re-injury.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Your Session Now (opens in new tab)"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book Your Session Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Aftercare ───────────────────────────────────────────────────────── */}
      <section aria-labelledby="aftercare-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="aftercare-heading" className="section-heading mb-6">
              Acupuncture Aftercare and Follow-Up
            </h2>
            <p className="text-ink-muted leading-relaxed mb-8 max-w-2xl mx-auto">
              To get the most out of your acupuncture treatments, proper aftercare is essential. While some patients experience immediate relief and relaxation, others may feel mild fatigue as their body adjusts and begins to heal. To maximize your results, it&apos;s important to stay hydrated, rest, and avoid strenuous activities for the remainder of the day. These simple steps will help support the body&apos;s natural healing process, reduce inflammation, and enhance the long-term benefits of acupuncture.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule Your Appointment (opens in new tab)"
              className="btn-primary text-base px-8 py-4"
            >
              Schedule Your Appointment
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────────────── */}
      <TestimonialCarousel testimonials={sportsReviews} />

      {/* ── Address ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Clinic location"
        className="py-12 bg-surface text-center border-t border-surface-muted"
      >
        <address className="not-italic text-ink-muted text-sm leading-relaxed">
          <strong className="text-ink font-semibold">Health Pointe Jacksonville</strong>
          <br />
          3840 Belfort Rd STE 305, Jacksonville, FL 32216
          <br />
          <a
            href="tel:9044480046"
            className="hover:text-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
          >
            (904) 448-0046
          </a>
        </address>
      </section>

      {/* ── BookingCTA ──────────────────────────────────────────────────────── */}
      <BookingCTA
        heading="Ready to get back in the game?"
        body="Schedule your sports acupuncture consultation at Health Pointe Jacksonville and get a personalized recovery plan built around your goals."
        ctaLabel="Book Your Session Now"
      />
    </>
  );
}

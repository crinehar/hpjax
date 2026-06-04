import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { faqSchema, breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";

export const metadata: Metadata = {
  title: "Neurological Disorder Support | Health Pointe Jacksonville",
  description:
    "Neurological disorder support in Jacksonville, FL, for neuropathy, migraines, Bell's palsy, and more. Explore acupuncture care and what to expect. Book online.",
  alternates: { canonical: "https://hpjax.com/services/neurological-disorders/" },
  openGraph: {
    title: "Neurological Disorder Support | Health Pointe Jacksonville",
    description:
      "Neurological disorder support in Jacksonville, FL, for neuropathy, migraines, Bell's palsy, and more. Explore acupuncture care and what to expect. Book online.",
    images: [
      {
        url: "https://hpjax.com/images/neurological-disorder-hand-pain-acupuncture-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "Person with neurological disorder hand pain seeking acupuncture at Health Pointe Jacksonville",
      },
    ],
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/neurological-disorders/`;

const conditionGroups = [
  {
    heading: "Nervous System Conditions",
    items: [
      "Multiple Sclerosis",
      "Peripheral Neuropathy",
      "Bell's Palsy",
      "Trigeminal Neuralgia",
    ],
  },
  {
    heading: "Autoimmune & Inflammatory Disorders",
    items: [
      "Rheumatoid Arthritis",
      "Lupus",
      "Autoimmune diseases",
      "Chronic Fatigue Syndrome",
    ],
  },
  {
    heading: "Pain & Digestive Conditions",
    items: [
      "Fibromyalgia",
      "Migraine headaches",
      "Irritable Bowel Syndrome",
      "Crohn's",
    ],
  },
];

const faqs = [
  {
    q: "How Does Acupuncture Support Neurological Health?",
    a: "Acupuncture helps regulate nerve function, reduce inflammation, and improve circulation, easing symptoms of conditions like neuropathy and trigeminal neuralgia.",
  },
  {
    q: "What Should I Expect During Treatment?",
    a: "Sessions target key points to relieve numbness, muscle weakness, and pain. Most patients find treatments relaxing with gradual symptom improvement.",
  },
  {
    q: "What Are the Long-Term Benefits of Acupuncture for Neurological Conditions?",
    a: "Acupuncture rebalances the nervous system, promoting lasting relief, improved mobility, and reduced reliance on medication.",
  },
];

const NEURO_REVIEW_SLUGS = ["rob-u", "teresa-e", "g-san"];

const neuroReviews = NEURO_REVIEW_SLUGS.map((slug, i) => {
  const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
  return { id: i + 1, name: r.name, quote: r.quote };
});

export default function NeurologicalDisordersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Neurological Disorder Support | Health Pointe Jacksonville",
        description:
          "Neurological disorder support in Jacksonville, FL, for neuropathy, migraines, Bell's palsy, and more. Explore acupuncture care and what to expect. Book online.",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
        about: {
          "@type": "MedicalCondition",
          name: "Neurological Disorders",
          possibleTreatment: {
            "@type": "MedicalTherapy",
            name: "Acupuncture",
          },
        },
        provider: { "@id": `${SITE_URL}/#practitioner` },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Neurological Acupuncture",
        description:
          "Specialized acupuncture for neurological disorders at Health Pointe Jacksonville, treating MS, peripheral neuropathy, Bell's palsy, trigeminal neuralgia, and autoimmune conditions.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Jacksonville, FL" },
          { "@type": "AdministrativeArea", name: "Duval County, FL" },
        ],
        url: PAGE_URL,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Neurological Acupuncture Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multiple Sclerosis Acupuncture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Peripheral Neuropathy Treatment" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bell's Palsy Acupuncture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trigeminal Neuralgia Treatment" } },
          ],
        },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Neurological Disorders", href: "/services/neurological-disorders/" },
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
          src="/images/neurological-disorder-hand-pain-acupuncture-jacksonville-fl.jpg"
          alt="Person experiencing hand and joint pain from neurological disorder seeking acupuncture at Health Pointe Jacksonville"
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
            Neurological Acupuncture in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed">
            An integrative time tested approach to healthcare. Do you struggle to get through your day? We invite you to experience care that allows you to stop suffering, and start living the life of your dreams.
          </p>
        </div>
      </header>

      {/* ── Intro ───────────────────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="intro-heading" className="section-heading mb-6">
              The Last Resort With the Best Results
            </h2>
            <p className="text-ink-muted leading-relaxed mb-5">
              At Health Pointe Jacksonville we specialize in treating difficult to manage, seemingly hopeless cases. Those patients have been everywhere else and have been told &ldquo;there&apos;s nothing more we can do,&rdquo; and &ldquo;you&apos;re just going to have to live with this&rdquo; or have been disappointed by treatment plans that simply didn&apos;t work.
            </p>
            <p className="text-ink-muted leading-relaxed mb-8">
              From stubborn conditions that won&apos;t heal, to rheumatoid arthritis and trigeminal neuralgia, Dr. Miller and the staff at Health Pointe Jacksonville will design a tailored treatment program to treat your condition to help you reclaim your health.
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
            {conditionGroups.map((group, i) => (
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

      {/* ── Natural Relief section ──────────────────────────────────────────── */}
      <section aria-labelledby="relief-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="mb-10">
            <h2 id="relief-heading" className="section-heading">
              Natural Relief for Neurological Conditions
            </h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed text-left">
            <p>
              Living with neurological disorders can be challenging, often bringing pain, numbness, fatigue, and mobility issues that affect daily life. Acupuncture offers a natural, drug-free approach to managing conditions like multiple sclerosis, peripheral neuropathy, migraines, and fibromyalgia by improving circulation, calming nerve inflammation, and promoting overall neurological balance.
            </p>
            <p>
              Unlike conventional treatments that focus solely on symptom management, acupuncture works to restore the body&apos;s natural equilibrium, helping to improve nerve function and reduce discomfort. Many patients experience increased energy, better mobility, and long-term symptom relief with regular treatments.
            </p>
            <p>
              If you&apos;re searching for an alternative approach to managing neurological symptoms in Jacksonville, Florida, reach out today to explore how acupuncture can support your health.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/nerve-cell-neurological-acupuncture-jacksonville-fl.webp", label: "Acupuncture" },
              { src: "/images/herbal-prescriptions-vitamin-injections-jacksonville-fl.jpg", label: "Herbal Prescriptions / Vitamin Injections" },
              { src: "/images/nutritional-lifestyle-changes-neurological-jacksonville-fl.jpg", label: "Nutritional / Lifestyle Changes" },
            ].map(({ src, label }) => (
              <figure key={label} className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/30" aria-hidden="true" />
                <figcaption className="absolute bottom-4 left-0 right-0 text-center text-white font-semibold text-base drop-shadow">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ready to Reclaim ────────────────────────────────────────────────── */}
      <section aria-labelledby="reclaim-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/neurological-relief-senior-couple-jacksonville-fl.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="reclaim-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-8">
              Ready to Reclaim Your Health?
            </h2>
            <div className="space-y-5 text-white/90 leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                Our treatment programs are individually designed to help you reclaim your health the natural way. While Acupuncture is one of our treatment offerings, in our clinic Dr. Miller will meet with you and evaluate your specific needs to determine if you are a good candidate for our services.
              </p>
              <p>
                Then, if you are a good candidate for our clinic, she will formulate a treatment plan specifically for you. The majority of the time, her treatment plans draw from all of our services to give you the best comprehensive care and get you the results you desire in the most expeditious method.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="https://healthpointejacksonville.acubliss.app/portal/booking/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book Your Session Now (opens in new tab)"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book Your Session Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="faq-heading" className="section-heading">What to Know About Neurological Acupuncture</h2>
          </ScrollReveal>
          <dl className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-surface rounded-2xl px-7 py-6 shadow-sm border border-surface-muted">
                <dt className="font-heading font-semibold text-ink text-lg mb-3">{q}</dt>
                <dd className="text-ink-muted leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Aftercare ───────────────────────────────────────────────────────── */}
      <section aria-labelledby="aftercare-heading" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="aftercare-heading" className="section-heading mb-6">
              Acupuncture Aftercare and Follow-Up
            </h2>
            <p className="text-ink-muted leading-relaxed mb-8 max-w-2xl mx-auto">
              To get the most out of your acupuncture treatments for chronic pain in Jacksonville, proper aftercare is essential. While some patients experience immediate relief and relaxation, others may feel mild fatigue as their body adjusts and begins to heal. To maximize your results, it&apos;s important to stay hydrated, rest, and avoid strenuous activities for the remainder of the day. These simple steps will help support the body&apos;s natural healing process, reduce inflammation, and enhance the long-term benefits of acupuncture in managing chronic pain.
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
      <TestimonialCarousel testimonials={neuroReviews} />

      {/* ── Address ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Clinic location"
        className="py-12 bg-white text-center border-t border-surface-muted"
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
        heading="Don't live with it. Come find out what we can do."
        body="Schedule your consultation at Health Pointe Jacksonville and get a treatment plan designed specifically for your condition."
        ctaLabel="Book Your Session Now"
      />
    </>
  );
}

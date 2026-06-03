import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { faqSchema, breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "O3 regenerative therapy in Jacksonville FL combines Ozone with Oxygen",
  description:
    "Jacksonville, FL's Dr. Julee Miller now offers O3 regenerative therapy injections using ozone to boost the body's ability to heal itself. Best for boosting recovery and repair of any injury.",
  alternates: { canonical: "https://hpjax.com/services/o3-regenerative-therapy/" },
  openGraph: {
    title: "O3 regenerative therapy in Jacksonville FL combines Ozone with Oxygen | Health Pointe Jacksonville",
    description:
      "Jacksonville, FL's Dr. Julee Miller now offers O3 regenerative therapy injections using ozone to boost the body's ability to heal itself. Best for boosting recovery and repair of any injury.",
    images: [
      {
        url: "https://hpjax.com/images/o3-ozone-therapy-jacksonville-fl.webp",
        width: 1200,
        height: 630,
        alt: "O3 Regenerative Therapy treatment at Health Pointe Jacksonville",
      },
    ],
  },
};

const conditionGroups = [
  {
    heading: "Joint and Back Conditions",
    items: [
      "Osteoarthritis of any joint",
      "Back pain (degenerative/disc dehydration, stenosis, facet arthrosis, SI syndrome, Sciatica)",
      "Neck pain",
      "Avascular Necrosis",
      "Rheumatoid Arthritis",
    ],
  },
  {
    heading: "Sports Injuries and Overuse Syndromes",
    items: [
      "Tennis Elbow",
      "Rotator Cuff Tears",
      "ACL Tear",
      "Chronic Ankle Sprains",
      "Achilles Tendonitis",
    ],
  },
  {
    heading: "Other Conditions",
    items: [
      "Headaches (all except true hormonal migraines)",
      "Early onset dementia and Alzheimer's",
      "Infertility",
      "Digestive disorders",
    ],
  },
];

const faqs = [
  {
    q: "What is O3 Regenerative Therapy?",
    a: "O3 Regenerative Therapy is a two-step regenerative injection. Step one: procaine, vitamin B12, Traumeel anti-inflammatory, and other homeopathic perparations as indicated. Step two: Ozone + Oxygen.\n\nYou should have reduction in pain with the very first treatment and usually need 4-8 treatments. More serious, long standing conditions may require more treatments.",
  },
  {
    q: "How does O3 Regenerative Therapy work?",
    a: "O3 Regenerative Therapy involves injecting ozone into damaged joints and tissue. The injected ozone increases blood supply and flow of healing nutrients to the area. It also acts as a very strong anti-inflammatory. More importantly, it also stimulates the deposition and activation of fibroblasts and chondroblasts. These cells synthesize collagen and cartilage that the body uses to repair damages ligaments and joints. This increase in cellular repair activity strengthens and tightens injured tissues, thereby stabilizing the area, and removing the cause of pain.",
  },
  {
    q: "Is O3 Regenerative Therapy covered by insurance?",
    a: "In a word, no. Insurance companies seem to only like to cover therapies that don't actually fix the proble. Therefore O3 Regenerative Therapy or any other regenerative injection procedure is not covered by any insurance. The good news is you are the one in charge of what procedures you get, not an insurance company.",
  },
  {
    q: "What should I expect with O3 Regenerative Therapy?",
    a: "",
    items: [
      { label: "Quick and Painless", detail: "this procedure is quick and painless, and you can expect to be out of the clinic within 30 minutes (when not combined with other therapies)." },
      { label: "Typical course of treatments", detail: "For most conditions, we typically prescribe four rounds of treatment. Some may only require one or two procedures, while others can may need as many as six or seven." },
      { label: "Accurate assessment", detail: "Once you are being treated, the doctor will analyze how your body is responding, and will and will then be able to give you an accurate estimate of what to expect from further treatments." },
      { label: "Process", detail: "The injection process is repeated every 2 weeks until the maximum amount of improvement is seen." },
      { label: "Absence of symptoms", detail: "O3 Regenerative Therapy can an often result in complete absence of symptoms, even in severe pain conditions that have been present for years." },
      { label: "Usually results are a permanent fix", detail: "The most amazing thing about O3 Regenerative Therapy is that the results are usually a permanent fix." },
    ],
  },
];

const O3_REVIEW_SLUGS = ["sarah-t", "jackie-d", "patrick-h"];

const o3Reviews = O3_REVIEW_SLUGS.map((slug, i) => {
  const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
  return { id: i + 1, name: r.name, quote: r.quote };
});

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/o3-regenerative-therapy/`;

export default function O3RegenerativeTherapyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "O3 Regenerative Therapy in Jacksonville, FL | Health Pointe Jacksonville",
        description:
          "O3 Regenerative Therapy at Health Pointe Jacksonville uses medical ozone to stimulate healing, reduce joint pain, and support tissue regeneration — drug-free.",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
        about: { "@id": `${PAGE_URL}#service` },
        provider: { "@id": `${SITE_URL}/#practitioner` },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "O3 Regenerative Therapy",
        alternateName: "Prolozone Therapy",
        description:
          "O3 Regenerative Therapy uses ozone to stimulate the body's immune system, increase blood supply to damaged joints and tissue, and promote permanent pain relief without surgery or drugs.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Jacksonville, FL" },
          { "@type": "AdministrativeArea", name: "Duval County, FL" },
        ],
        url: PAGE_URL,
        serviceType: "Regenerative Ozone Therapy",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://healthpointejacksonville.acubliss.app/portal/booking/",
          servicePhone: "+1-904-448-0046",
        },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "O3 Regenerative Therapy", href: "/services/o3-regenerative-therapy/" },
      ]),
      faqSchema(faqs.map((f) => ({
        question: f.q,
        answer: "items" in f && f.items
          ? f.items.map(({ label, detail }) => `${label}: ${detail}`).join(" ")
          : f.a,
      }))),
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
      <header aria-labelledby="page-heading" className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/o3-ozone-therapy-jacksonville-fl.webp"
          alt="O3 ozone therapy treatment at Health Pointe Jacksonville"
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
            O3 Regenerative Therapy in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed">
            O3 Regenerative Therapy involves the safe and precise use of ozone, a highly energized form of oxygen. When introduced into the body in small, controlled amounts, ozone activates the body&apos;s natural healing processes, improves circulation, and enhances cellular oxygen levels — helping you feel better, faster.
          </p>
        </div>
      </header>

      {/* ── Intro ───────────────────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="mb-10">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-3">Drug-Free. Non-Surgical. Regenerative.</p>
            <h2 id="intro-heading" className="section-heading">
              Why Use O3 Regenerative Therapy?
            </h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              O3 Regenerative Therapy uses ozone to stimulate the body&apos;s immune system to help facilitate healing and protection from future illnesses.
            </p>
            <p>
              O3 Regenerative Therapy offers effective treatments for chronic joint pain, targeting areas such as the knee, hip, back, and shoulders. By promoting tissue regeneration, this therapy helps your body heal naturally and provides lasting relief from discomfort.
            </p>
            <p>
              In addition, O3 insufflations provide a non-invasive alternative for treating digestive disorders, infertility, behavioral issues, and circulatory problems. By improving microcirculation and supporting overall wellness, O3 therapy enhances the body&apos;s ability to heal itself and restore balance.
            </p>
          </ScrollReveal>
          {/* Accordion */}
          <ScrollReveal className="mt-10 text-left space-y-3">
            <details className="group rounded-2xl border border-surface-muted bg-surface overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-heading font-semibold text-ink text-base hover:bg-surface-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded-2xl">
                What can it help with?
                <span className="ml-4 text-teal-dark text-xl transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <div className="px-6 pb-5 pt-1">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-ink-muted text-sm">
                  {["Joint pain & inflammation","Sports injuries & tissue damage","Chronic fatigue & immune support","Nerve pain & circulation issues","Wound healing & post-surgical recovery"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-teal-dark" aria-hidden="true">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            <details className="group rounded-2xl border border-surface-muted bg-surface overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-heading font-semibold text-ink text-base hover:bg-surface-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded-2xl">
                Why choose O3 therapy?
                <span className="ml-4 text-teal-dark text-xl transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <div className="px-6 pb-5 pt-1">
                <ul className="space-y-2 text-ink-muted text-sm">
                  {["Drug-free & non-surgical","Supports tissue regeneration","Reduces pain naturally","Enhances immune function","Promotes faster recovery"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 w-2 h-2 flex-shrink-0 rounded-full bg-teal-dark" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            <details className="group rounded-2xl border border-surface-muted bg-surface overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-heading font-semibold text-ink text-base hover:bg-surface-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded-2xl">
                How is it used?
                <span className="ml-4 text-teal-dark text-xl transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <div className="px-6 pb-5 pt-1 space-y-3 text-ink-muted text-sm">
                <p>At our clinic, we tailor treatment to your needs. Ozone can be delivered through:</p>
                <ul className="space-y-2">
                  <li><strong className="text-ink">Prolozone® Injections</strong> — Targeted ozone + nutrients injected into joints or soft tissues to speed healing</li>
                  <li><strong className="text-ink">Ozone Insufflation</strong> — Gentle internal treatments for systemic benefits</li>
                  <li><strong className="text-ink">Topical Ozone &amp; Ozonated Oils</strong> — For skin health and wound care</li>
                </ul>
              </div>
            </details>

            <details className="group rounded-2xl border border-surface-muted bg-surface overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-heading font-semibold text-ink text-base hover:bg-surface-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded-2xl">
                Is it safe?
                <span className="ml-4 text-teal-dark text-xl transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <div className="px-6 pb-5 pt-1 text-ink-muted text-sm leading-relaxed">
                Absolutely. O3 therapy is administered by our trained professionals using medical-grade equipment and sterile technique. It&apos;s been used for decades worldwide and is considered very safe when done properly.
              </div>
            </details>
          </ScrollReveal>

          <ScrollReveal className="mt-10">
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Your Session Now (opens in new tab)"
              className="btn-primary text-base px-8 py-4"
            >
              Book Your Session Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What We Treat ───────────────────────────────────────────────────── */}
      <section aria-labelledby="treat-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 id="treat-heading" className="section-heading">What We Treat</h2>
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

      {/* ── Personalized Consultation ───────────────────────────────────────── */}
      <section aria-labelledby="consult-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="consult-heading" className="section-heading">
              Personalized Treatment and Consultation
            </h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              While O3 Regenerative Therapy is one of our offerings in our clinic, Dr. Miller will meet with you and evaluate your specific needs to determine if you are a candidate for our services. Once it is established you are a candidate for our clinic, she will then formulate a treatment plan tailored specifically to you. The majority of the time, her treatment plans draw from all of our services to give you the best comprehensive care and get you the results you desire in the most expeditious method.
            </p>
            <p>
              An initial consultation with Dr. Miller is required to find out if you are a candidate for O3 Regenerative Therapy. If you are determinaed to be a candidate for this care in the consultation, we can perform your first procedure on the same day.
            </p>
          </ScrollReveal>
        </div>

        {/* 3-image grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/ozone-molecule-o3-regenerative-therapy-jacksonville-fl.png", label: "Ozone" },
              { src: "/images/healthy-lifestyle-o3-therapy-results-jacksonville-fl.jpg", label: "Herbal Prescriptions / Vitamin Injections" },
              { src: "/images/family-wellness-o3-regenerative-therapy-jacksonville-fl.jpg", label: "Nutritional / Lifestyle Changes" },
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

      {/* ── Full-bleed image band ────────────────────────────────────────────── */}
      <section aria-labelledby="healing-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/o3-ozone-molecule-healing-jacksonville-fl.jpg"
          alt="Ozone molecule illustration representing O3 Regenerative Therapy healing at Health Pointe Jacksonville"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="healing-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-6">
              Heal From the Inside Out
            </h2>
            <p className="text-white leading-relaxed max-w-2xl mx-auto mb-8">
              O3 Regenerative Therapy is performed by Dr. Julee Miller using medical-grade equipment and sterile technique. Each treatment plan is individually designed to your specific condition, severity, and goals.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule Your Appointment (opens in new tab)"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Schedule Your Appointment
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="faq-heading" className="section-heading">Common Questions About O3 Regenerative Therapy</h2>
          </ScrollReveal>
          <dl className="space-y-6">
            {faqs.map((faq) => {
              const { q, a } = faq;
              return (
              <div key={q} className="bg-white rounded-2xl px-7 py-6 shadow-sm border border-surface-muted">
                <dt className="font-heading font-semibold text-ink text-lg mb-3">{q}</dt>
                <dd className="text-ink-muted leading-relaxed">
                  {"items" in faq && faq.items ? (
                    <ol className="list-decimal list-outside pl-5 space-y-2">
                      {faq.items.map(({ label, detail }) => (
                        <li key={label}><strong className="text-ink">{label}:</strong> {detail}</li>
                      ))}
                    </ol>
                  ) : (
                    <div className="space-y-3">
                      {a.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
                    </div>
                  )}
                </dd>
              </div>
              );
            })}
          </dl>
        </div>
      </section>

      {/* ── Aftercare ───────────────────────────────────────────────────────── */}
      <section aria-labelledby="aftercare-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="aftercare-heading" className="section-heading mb-6">
              Ozone Aftercare and Follow-Up
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-2xl mx-auto mb-8">
              After O3 Regenerative Therapy, proper recovery is key to achieving the best results. Rest and hydration are essential in the first 24–48 hours, with activity gradually reintroduced based on Dr. Miller&apos;s guidance. Eating a nutrient-rich diet and incorporating supportive therapies like acupuncture or massage can further enhance healing. Follow-up appointments will help track progress and determine if additional treatments are needed. Dr. Miller will provide a personalized plan to ensure the best outcome for your recovery.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Your Session Now (opens in new tab)"
              className="btn-primary text-base px-8 py-4"
            >
              Book Your Session Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────────────── */}
      <TestimonialCarousel testimonials={o3Reviews} />

      {/* ── Address ─────────────────────────────────────────────────────────── */}
      <section aria-label="Clinic location" className="py-12 bg-surface text-center border-t border-surface-muted">
        <address className="not-italic text-ink-muted text-sm leading-relaxed">
          <strong className="text-ink font-semibold">Health Pointe Jacksonville</strong><br />
          3840 Belfort Rd STE 305, Jacksonville, FL 32216<br />
          <a href="tel:9044480046" className="hover:text-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded">
            (904) 448-0046
          </a>
        </address>
      </section>

      {/* ── BookingCTA ──────────────────────────────────────────────────────── */}
      <BookingCTA
        heading="Ready to heal without surgery or drugs?"
        body="Dr. Julee Miller and the Health Pointe Jacksonville team are here to help you recover, regenerate, and get back to living pain-free."
        ctaLabel="Book Your Session Now"
      />
    </>
  );
}

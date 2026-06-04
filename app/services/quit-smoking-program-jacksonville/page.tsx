import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { faqSchema, breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";

export const metadata: Metadata = {
  title: "quit smoking, Jacksonville, FL, quit vaping",
  description:
    "Health Pointe in Jacksonville, FL, offers Quit Smoking and Quit Vaping programs",
  alternates: { canonical: "https://hpjax.com/services/quit-smoking-program-jacksonville/" },
  openGraph: {
    title: "quit smoking, Jacksonville, FL, quit vaping",
    description:
      "Health Pointe in Jacksonville, FL, offers Quit Smoking and Quit Vaping programs",
    images: [
      {
        url: "https://hpjax.com/images/quit-smoking-acupuncture-cessation-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "Quit smoking with acupuncture at Health Pointe Jacksonville",
      },
    ],
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/quit-smoking-program-jacksonville/`;

const prepTips = [
  {
    number: "01",
    tip: "Quit cold turkey",
    body: "Set a quit date and commit to it fully. Cold turkey combined with acupuncture treatment gives you the best chance of success.",
  },
  {
    number: "02",
    tip: "Remove cigarettes and ashtrays",
    body: "Clear your home, car, and workspace of all cigarettes, lighters, and ashtrays before your first treatment.",
  },
  {
    number: "03",
    tip: "Tell others about your goal",
    body: "Let your friends, family, and colleagues know you are quitting. Social accountability significantly improves outcomes.",
  },
  {
    number: "04",
    tip: "Visualize yourself as a non-smoker",
    body: "Before your first appointment, spend time each day imagining your life as a non-smoker — healthier, freer, and in control.",
  },
];

const faqs = [
  {
    q: "Treatment Side Effects",
    a: "While acupuncture treatments are painless, you may experience mild discomfort from the detoxification process. Common symptoms include body aches, low-grade fever, headaches, insomnia, congestion, coughing, and mood fluctuations. Acupuncture helps alleviate these short-term discomforts, while herbal formulas support long-term balance during the quitting process.",
  },
  {
    q: "When Should I Take My Last Cigarette Before Treatment?",
    a: "Acupuncture can help at any stage, whether it has been six hours or six minutes since your last cigarette. However, the best results come when you are fully committed to quitting before your first treatment.",
  },
  {
    q: "Supporting the Detox Process",
    a: "To help your body detox and adjust, we provide a custom month-long herbal formula tailored to your needs. Additional recommendations include: Increase water intake to flush toxins and boost energy. Eat regular, nutrient-rich meals to stabilize blood sugar and mood. Expect cravings to peak in the first week. Avoid sugary foods and prepare healthy snacks. If you slip up, don't be discouraged — simply restart and stay committed.",
    items: [
      "Increase water intake to flush toxins and boost energy.",
      "Eat regular, nutrient-rich meals to stabilize blood sugar and mood.",
      "Expect cravings to peak in the first week — stay focused on the long-term goal.",
      "Avoid sugary foods and prepare healthy snacks like carrots, celery, and apples.",
      "If you slip up, don't be discouraged — simply restart and stay committed. Many patients experience setbacks before quitting for good.",
    ],
  },
];

const QUIT_SMOKING_REVIEW_SLUGS = ["robin-s", "denise-i", "stephani-t"];

const quitSmokingReviews = QUIT_SMOKING_REVIEW_SLUGS.map((slug, i) => {
  const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
  return { id: i + 1, name: r.name, quote: r.quote };
});

export default function QuitSmokingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "quit smoking, Jacksonville, FL, quit vaping",
        description:
          "Health Pointe in Jacksonville, FL, offers Quit Smoking and Quit Vaping programs",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
        about: { "@id": `${PAGE_URL}#service` },
        provider: { "@id": `${SITE_URL}/#practitioner` },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Quit Smoking Program",
        description:
          "A uniquely powerful smoking cessation program combining acupuncture, custom herbal formulas, relaxation technique instruction, and ear seed placement to help patients quit smoking or vaping naturally.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Jacksonville, FL" },
          { "@type": "AdministrativeArea", name: "Duval County, FL" },
        ],
        url: PAGE_URL,
        serviceType: "Smoking Cessation Acupuncture",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://healthpointejacksonville.acubliss.app/portal/booking/",
          servicePhone: "+1-904-448-0046",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Quit Smoking Program Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acupuncture Smoking Cessation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Herbal Formulas for Detox" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ear Seed Placement" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Relaxation Technique Instruction" } },
          ],
        },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Quit Smoking Program", href: "/services/quit-smoking-program-jacksonville/" },
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
          src="/images/quit-smoking-acupuncture-cessation-jacksonville-fl.jpg"
          alt="Fist crushing a cigarette — quit smoking with acupuncture at Health Pointe Jacksonville"
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
            Quit Smoking Program in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed">
            When you&apos;re ready to quit, we&apos;re here to help. If you have decided to quit smoking (or vaping) recently, but are unsure of exactly how to quit, we can help with our Smoking Cessation Program!
          </p>
        </div>
      </header>

      {/* ── What's the Program ──────────────────────────────────────────────── */}
      <section aria-labelledby="program-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="program-heading" className="section-heading mb-6">
              What&apos;s the Program?
            </h2>
            <p className="text-ink-muted leading-relaxed mb-8">
              Our program is uniquely powerful in that it consists of several proven interventions which includes acupuncture, custom herbal formulas, relaxation technique instruction, and ear seed placement. This program will help you quit smoking and get you through the initial nicotine detoxification phase, plus arms you with techniques to avoid returning to it. For most people 10-15 treatments are all that is needed to completely quit and recover from the detoxification process of quitting. If you feel you could use a couple more sessions beyond this program, we can continue the treatments at an a la carte rate as needed.
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

      {/* ── Program Prep ────────────────────────────────────────────────────── */}
      <section aria-labelledby="prep-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 id="prep-heading" className="section-heading mb-6">Acupuncture Cessation &amp; Program Prep</h2>
            <p className="text-ink-muted leading-relaxed max-w-3xl mx-auto">
              We have found this combination of treatments works best when combined with the actual desire to quit from the patient. You have to want to quit 100% for yourself for this to be quick and permanent. If you are on the fence to quitting, still actually LIKE smoking, or are trying to quit for someone else (family member, loved one&apos;s guilt) your success to quitting may be more temporary than permanent. Once you have firmly made up your mind that this is it, we can help you kick the habit for good.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prepTips.map((tip, i) => (
              <ScrollReveal key={tip.number} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border border-surface-muted h-full flex gap-5">
                  <span className="text-3xl font-heading font-bold text-teal/40 flex-shrink-0 leading-none mt-1">
                    {tip.number}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-ink text-lg mb-2">{tip.tip}</h3>
                    <p className="text-ink-muted leading-relaxed text-sm">{tip.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How Does It Work ────────────────────────────────────────────────── */}
      <section aria-labelledby="detox-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="mb-10">
            <h2 id="detox-heading" className="section-heading">
              How Does It Work?
            </h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed text-left">
            <p>
              Most people dread quitting smoking due to the intense detox process. Our treatments will significantly reduce cravings and physical withdrawal symptoms immediately. On a chemical level, acupuncture releases endorphins, and dopamine which are the body&apos;s natural pain killers and &ldquo;feel good&rdquo; hormones to keep you calm, improve sleep and reduce irritability.
            </p>
            <p>
              We recommend having 2-3 treatments per week for 2-4 weeks. The first treatment benefit generally wears off in the first 12-24 hours. Therefore having treatments in back-to-back succession is paramount to building a strong foundation where the benefits last longer, with permanent results.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/acupuncture-smoking-cessation-needles-jacksonville-fl.jpg", label: "Acupuncture" },
              { src: "/images/ear-seed-auricular-acupuncture-quit-smoking-jacksonville-fl.jpg", label: "Herbal Prescriptions / Vitamin Injections" },
              { src: "/images/quit-smoking-lifestyle-changes-jacksonville-fl.jpg", label: "Lifestyle Changes" },
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

      {/* ── Full-bleed band ─────────────────────────────────────────────────── */}
      <section aria-labelledby="ready-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/quit-smoking-guarantee-break-free-jacksonville-fl.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="ready-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-8">
              Is There a Guarantee or Refund?
            </h2>
            <div className="space-y-5 text-white/90 leading-relaxed text-lg max-w-3xl mx-auto text-left mb-10">
              <p>
                In a word: no. This should also give extra incentive to give your complete participation and effort here. We have never had one person who was 100% committed to quit smoking not be successful even if short term. It may be necessary to &ldquo;recommit&rdquo; yourself to your decision to quit at some point.
              </p>
              <p>
                Avoiding relapse requires two things: overcoming the habit of smoking, and implementing stress relief mechanisms that help you to deal with stress so you don&apos;t turn to cigarettes as a &ldquo;stress reliever&rdquo;.
              </p>
              <p>
                Reminding yourself of the value your health being paramount. Remember what it feels like to be smoke-free. Improved oxygen intake, improved sleep, improved smell, improved taste, improved relationships. All of it. Also know that your investment will pay for itself in just 90 days of being smoke free. You can do it!
              </p>
            </div>
            <div className="max-w-3xl mx-auto text-left mb-10">
              <p className="text-white font-semibold mb-1">Cancellation Policy</p>
              <p className="text-white/80 text-sm leading-relaxed">
                All of our patients agree to a 24 hour notification of cancellation, otherwise are charged a $45 cancellation fee.
              </p>
              <p className="text-white/60 text-xs mt-3">*Results may vary</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="faq-heading" className="section-heading">Treatment, and What to Expect.</h2>
          </ScrollReveal>
          <dl className="space-y-6">
            {faqs.map(({ q, a, items }) => (
              <div key={q} className="bg-white rounded-2xl px-7 py-6 shadow-sm border border-surface-muted">
                <dt className="font-heading font-semibold text-ink text-lg mb-3">{q}</dt>
                <dd className="text-ink-muted leading-relaxed">
                  {items ? (
                    <>
                      <p className="mb-3">To help your body detox and adjust, we provide a custom month-long herbal formula tailored to your needs. Additional recommendations include:</p>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-teal-dark" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Aftercare ───────────────────────────────────────────────────────── */}
      <section aria-labelledby="aftercare-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="aftercare-heading" className="section-heading mb-6">
              Aftercare and Follow-Up
            </h2>
            <p className="text-ink-muted leading-relaxed mb-8 max-w-2xl mx-auto">
              To get the most out of your acupuncture treatments, proper aftercare is essential. While some patients experience immediate relief and relaxation, others may feel mild fatigue as their body adjusts and begins to heal. Staying hydrated, resting, and avoiding strenuous activities for the remainder of the day will support the body&apos;s natural healing process and enhance the long-term benefits of your treatment.
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
      <TestimonialCarousel testimonials={quitSmokingReviews} />

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
        heading="When you're ready to quit, we're here to help."
        body="Book your smoking cessation consultation at Health Pointe Jacksonville and start your journey to a smoke-free life."
        ctaLabel="Book Your Session Now"
      />
    </>
  );
}

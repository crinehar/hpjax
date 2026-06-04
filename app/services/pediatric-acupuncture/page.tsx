import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { faqSchema, breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";

export const metadata: Metadata = {
  title: "pregnancy acupuncture, Jacksonville, FL, prenatal massage",
  description:
    "Health Pointe in Jacksonville, FL offers pediatric acupuncture, including behavioral problems, allergies, headaches, digestive issues, bedwetting and anxiety",
  alternates: { canonical: "https://hpjax.com/services/pediatric-acupuncture/" },
  openGraph: {
    title: "pregnancy acupuncture, Jacksonville, FL, prenatal massage",
    description:
      "Health Pointe in Jacksonville, FL offers pediatric acupuncture, including behavioral problems, allergies, headaches, digestive issues, bedwetting and anxiety",
    images: [
      {
        url: "https://hpjax.com/images/pediatric-acupuncture-child-parent-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "Happy child and parent — pediatric acupuncture at Health Pointe Jacksonville",
      },
    ],
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/pediatric-acupuncture/`;

const conditionGroups = [
  {
    heading: "Neurological & Behavioral Conditions",
    items: [
      "ADD / ADHD",
      "Anxiety",
      "Autistic Spectrum Disorders",
      "Behavioral problems",
      "Depression",
      "Mood issues",
      "Stuttering",
    ],
  },
  {
    heading: "Respiratory & Immune System Issues",
    items: [
      "Asthma",
      "Cold / flu symptoms",
      "Pneumonia",
      "RSV",
      "Recurrent infections",
      "Immune system issues",
    ],
  },
  {
    heading: "Digestive & Skin Conditions",
    items: [
      "Allergies",
      "Bedwetting",
      "Colic",
      "Digestive disorders",
      "Eczema",
      "Food allergies",
      "GERD",
      "Skin issues",
    ],
  },
];

const modalities = [
  {
    heading: "Gentle Acupuncture & Shonishin Treatments",
    body: "From newborns to teenagers, acupuncture and herbs offer a gentle, effective approach to your child's healthcare. Our practitioners specialize in Shonishin, a noninvasive pediatric acupuncture technique for children up to age 7. Shonishin involves rhythmic tapping and gentle pressure massage techniques, and as your child progresses, we may gradually introduce needles.",
  },
  {
    heading: "Cold Laser Therapy",
    body: "Cold laser treatments provide an alternative to traditional acupuncture needles. This non-invasive method uses infrared wavelengths to stimulate acupuncture points without causing discomfort. Though it's called \"cold laser,\" the treatment is neither cold nor hot, and your child will feel no sensation during the procedure.",
  },
  {
    heading: "Home Care & Herbal Medicine",
    body: "Our practitioners will teach parents how to maintain their child's progress at home through simple, daily care routines. We also focus on addressing nutritional needs and lifestyle changes. Specialized herbal medicine tailored to children's unique needs can be used to enhance and sustain the benefits of treatment.",
  },
];

const faqs = [
  {
    q: "What Is Shonishin and How Does It Work?",
    a: "Shonishin involves rhythmic tapping and gentle pressure massage techniques for children up to age 7. These noninvasive techniques are deeply effective and require no needle insertion, making them ideal for young children or those who are nervous about needles.",
  },
  {
    q: "What Should I Expect at My Child's First Appointment?",
    a: "Parents should prepare children ahead of time, avoiding words like 'needles' or 'poke.' We refer to pediatric acupuncture as 'taps' due to the tapping and massage involved before any needles are introduced. First visits include an extensive health history discussion. After age 5, needle treatments are introduced more readily as children feel comfortable.",
  },
  {
    q: "How Does Acupuncture Support My Child's Health?",
    a: "Acupuncture and herbal therapy offer safe, natural, effective support for childhood health. These holistic treatments address chronic issues like eczema and digestive disorders while stimulating the body's natural healing abilities and fostering stronger immune systems.",
  },
];

const PEDIATRIC_REVIEW_SLUGS = ["stephanie-o", "heather-d", "heather-k"];

const pediatricReviews = PEDIATRIC_REVIEW_SLUGS.map((slug, i) => {
  const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
  return { id: i + 1, name: r.name, quote: r.quote };
});

export default function PediatricAcupuncturePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "pregnancy acupuncture, Jacksonville, FL, prenatal massage",
        description:
          "Health Pointe in Jacksonville, FL offers pediatric acupuncture, including behavioral problems, allergies, headaches, digestive issues, bedwetting and anxiety",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
        about: { "@id": `${PAGE_URL}#service` },
        provider: { "@id": `${SITE_URL}/#practitioner` },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Pediatric Acupuncture",
        description:
          "A gentle, noninvasive and effective treatment for children. Includes Shonishin, cold laser therapy, herbal medicine, and traditional acupuncture tailored to each child's age and comfort level.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Jacksonville, FL" },
          { "@type": "AdministrativeArea", name: "Duval County, FL" },
        ],
        url: PAGE_URL,
        serviceType: "Pediatric Acupuncture",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://healthpointejacksonville.acubliss.app/portal/booking/",
          servicePhone: "+1-904-448-0046",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Pediatric Acupuncture Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shonishin Pediatric Acupuncture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cold Laser Therapy for Children" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pediatric Herbal Medicine" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "ATP Resonance Biotherapy" } },
          ],
        },
      },
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Pediatric Acupuncture", href: "/services/pediatric-acupuncture/" },
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
          src="/images/pediatric-acupuncture-child-parent-jacksonville-fl.jpg"
          alt="Happy child and parent at home — pediatric acupuncture care at Health Pointe Jacksonville"
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
            Pediatric Acupuncture in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed">
            A gentle, noninvasive and effective treatment for children.
          </p>
        </div>
      </header>

      {/* ── Intro ───────────────────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="intro-heading" className="section-heading mb-6">
              Pediatric Acupuncture for Safe and Effective Care
            </h2>
            <p className="text-ink-muted leading-relaxed mb-8">
              Chinese Medicine is becoming a popular option for parents seeking safe, natural treatments for their children&apos;s health concerns. We help children find relief from issues like digestive problems, eczema, allergies, anxiety, bedwetting, and headaches. Whether it&apos;s treating colic in infants or addressing congenital issues, our experienced acupuncturists offer both needle and non-needle options like ATP Resonance Biotherapy, O3 Regenerative Therapy, and laser treatments to ensure comfort and healing.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Your Child's Session Now (opens in new tab)"
              className="btn-primary"
            >
              Book Your Child&apos;s Session Now
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

      {/* ── The Warm Up & What to Expect ────────────────────────────────────── */}
      <section aria-labelledby="warmup-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="mb-10">
            <h2 id="warmup-heading" className="section-heading">
              The Warm Up &amp; What to Expect
            </h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed text-left">
            <p>
              To start the treatment process smoothly, we suggest our parents begin introducing the idea of acupuncture treatment at home to their little ones. Beginning this process at home can better prepare and support children for their upcoming treatment. Avoid using the words &ldquo;needles&rdquo;, &ldquo;poke&rdquo;, &ldquo;pinch&rdquo;, or &ldquo;pins&rdquo; as children often associate these words with a vaccination or hospital experience and may cause unnecessary fear.
            </p>
            <p>
              In our clinic, we prefer to refer to pediatric acupuncture as &ldquo;taps&rdquo; because there is a lot of tapping on the skin involved (or massage, or rubbing) even before any needle is used.
            </p>
            <p>
              During the child&apos;s first visit, we will spend a considerable amount of time discussing the child&apos;s health history and while we have many items of distraction in our office we suggest parents bring something special to help entertain their child during this part of the visit. This is especially helpful for children under the age of 5.
            </p>
            <p>
              For chronically ill children or fear of doctors, we suggest also bringing an item of special comfort such as a teddy bear or blanket. Some of our little ones even dress up in costumes to add an extra layer of &ldquo;strength&rdquo; for their visit. We assure you that in 1-2 treatments such things will no longer be necessary as many of our little ones look forward to their treatment and even hop up on the tables ready to begin without instruction. Most kids are eager to get involved in learning how to &ldquo;tap&rdquo;!
            </p>
            <p>
              Past the age of 5, we will begin to introduce acupuncture needle treatments to kids more readily as they are much more tolerant and receptive after this age. Again, we will not force these treatments on your little ones, but rather ease them into other styles of treatments we feel best suited for their recovery and health.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/pediatric-acupuncture-needles-treatment-jacksonville-fl.jpg", label: "Acupuncture" },
              { src: "/images/pediatric-herbal-vitamin-injections-jacksonville-fl.jpg", label: "Herbal Prescriptions / Vitamin Injections" },
              { src: "/images/pediatric-nutritional-lifestyle-jacksonville-fl.jpg", label: "Nutritional / Lifestyle Changes" },
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

      {/* ── Treatment Modalities ────────────────────────────────────────────── */}
      <section aria-labelledby="modalities-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 id="modalities-heading" className="section-heading">Holistic Care for Kids</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modalities.map((m, i) => (
              <ScrollReveal key={m.heading} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-muted h-full">
                  <h3 className="font-heading font-semibold text-ink text-xl mb-4">{m.heading}</h3>
                  <p className="text-ink-muted leading-relaxed text-sm">{m.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed band ─────────────────────────────────────────────────── */}
      <section aria-labelledby="wellness-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/pediatric-acupuncture-shonishin-child-jacksonville-fl.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="wellness-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-8">
              How Acupuncture Supports Pediatric Health
            </h2>
            <p className="text-white/90 leading-relaxed text-lg max-w-3xl mx-auto mb-10">
              Acupuncture and herbal therapy offer a safe, natural, and effective way to support your child&apos;s overall health, from relieving allergies to soothing tummy aches. These holistic treatments are tailored to each child&apos;s unique needs, promoting balance and well-being without the use of harsh medications. Whether addressing chronic issues like eczema and digestive disorders, or providing relief for seasonal allergies, acupuncture provides a gentle solution for many common pediatric health concerns. By stimulating the body&apos;s natural healing abilities, acupuncture fosters a stronger immune system and encourages overall wellness.
            </p>
            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Your Child's Session Now (opens in new tab)"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book Your Child&apos;s Session Now
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
            <p className="text-ink-muted leading-relaxed max-w-2xl mx-auto">
              To get the most out of your acupuncture treatments for chronic pain in Jacksonville, proper aftercare is essential. While some patients experience immediate relief and relaxation, others may feel mild fatigue as their body adjusts and begins to heal. To maximize your results, it&apos;s important to stay hydrated, rest, and avoid strenuous activities for the remainder of the day. These simple steps will help support the body&apos;s natural healing process, reduce inflammation, and enhance the long-term benefits of acupuncture in managing chronic pain.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────────────────── */}
      <TestimonialCarousel testimonials={pediatricReviews} />

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

    </>
  );
}

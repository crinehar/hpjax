import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";

export const metadata: Metadata = {
  title: "Fertility Acupuncture Jacksonville FL | ABORM-Certified | Dr. Julee Miller",
  description:
    "ABORM fertility acupuncture specialist, Dr. Julee Miller specializes in treating infertility and women's health conditions",
  alternates: { canonical: "https://hpjax.com/services/fertility-acupuncture-jacksonville-fl-aborm-certified-dr-julee-miller/" },
  openGraph: {
    title: "Fertility Acupuncture Jacksonville FL | ABORM-Certified | Dr. Julee Miller | Health Pointe Jacksonville",
    description:
      "ABORM fertility acupuncture specialist, Dr. Julee Miller specializes in treating infertility and women's health conditions",
    images: [
      {
        url: "https://hpjax.com/images/fertility-pregnancy-acupuncture-jacksonville-fl.webp",
        width: 1200,
        height: 630,
        alt: "Fertility acupuncture with Dr. Julee Miller at Health Pointe Jacksonville",
      },
    ],
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/fertility-acupuncture-jacksonville-fl-aborm-certified-dr-julee-miller/`;


const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${PAGE_URL}#webpage`,
      name: "Fertility Acupuncture Jacksonville FL | ABORM-Certified | Dr. Julee Miller",
      description: "ABORM fertility acupuncture specialist, Dr. Julee Miller specializes in treating infertility and women's health conditions",
      url: PAGE_URL,
      isPartOf: { "@id": `${SITE_URL}/#business` },
      about: {
        "@type": "MedicalTherapy",
        name: "Fertility Acupuncture",
        relevantSpecialty: "ReproductiveMedicine",
        recognizingAuthority: {
          "@type": "Organization",
          name: "Acupuncture & TCM Board of Reproductive Medicine (ABORM)",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Fertility Acupuncture Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "IVF/IUI Acupuncture Support" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Natural Conception Acupuncture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Male Fertility Acupuncture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Prenatal Acupuncture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Postpartum Acupuncture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fertility Herbal Prescriptions" } },
          ],
        },
      },
      provider: { "@id": `${SITE_URL}/#practitioner` },
      breadcrumb: breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Women's Health", href: "/womens-health/" },
        { name: "Fertility Acupuncture", href: "/services/fertility-acupuncture-jacksonville-fl-aborm-certified-dr-julee-miller/" },
      ]),
    },
    { ...localBusinessEntity },
    { ...drJuleeMillerEntity },
  ],
};

const FERTILITY_REVIEW_SLUGS = ["liss-a", "kerri-b", "crystal-b", "elizabeth-h"];
const fertilityReviews = FERTILITY_REVIEW_SLUGS.map((slug, i) => {
  const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
  return { id: i + 1, name: r.name, quote: r.quote };
});

const fertilityConditions = [
  "IVF/IUI support",
  "Hormone balancing",
  "Male and female treatment",
  "Improvement of blood flow",
  "Improvement of organ function",
  "Anxiety and stress relief",
  "Fertility coaching",
  "Fertility specific herbal formulas and supplements",
  "Natural conception treatment programs",
];

const complexFertilityConditions = [
  "Hormonal balancing",
  "Management of pre-existing conditions",
  "Management of miscarriage-related challenges",
  "Male and female treatment",
  "Improvement of blood flow",
  "Improvement of organ function",
  "Anxiety and stress relief",
];

const pregnancyConditions = [
  "Pregnancy Symptom Management",
  "Miscarriage reduction",
  "Hormonal balancing",
  "Monitoring and management of symptoms",
  "Strengthening of placenta",
  "Flipping breech babies",
  "Pregnancy-related anxiety, stress, and depression relief",
  "Birthing prep and support",
  "Postpartum healing support",
  "Postpartum depression and anxiety",
];

const ivfBenefits = [
  "Pre- and post-transfer IVF transfer day acupuncture onsite at Olive Fertility Centre",
  "Repeated unsuccessful IVF cycles",
  "Implantation failure",
  "Miscarriages and repeated pregnancy loss",
  "Donor Egg Cycles",
  "FET",
  "Thin lining",
  "Optimizing egg and sperm quality",
  "Reduce the negative effects of IVF drugs",
  "Balance hormones",
  "Regulate immune system",
  "Increased blood flow to ovaries and uterus",
  "Implantation and uterine receptivity",
  "Reduce negative effects of stress",
  "Regulate inflammation",
];

const maleFertilityConditions = [
  "Low Sperm Count",
  "Decreased Sperm Motility",
  "Decreased Sperm Morphology",
  "Erectile Dysfunction",
  "Poor Liquefaction",
  "Varicocele",
  "Prostate Swelling",
  "Premature Ejaculation",
  "Anxiety/Hopelessness/Depression",
];

export default function FertilityAcupuncturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <header
        aria-labelledby="page-heading"
        className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/fertility-acupuncture-mother-baby-jacksonville-fl.png"
          alt="Mother holding newborn baby after successful fertility acupuncture treatment in Jacksonville FL"
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
            Fertility Acupuncture in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Dr. Miller is a Fellow of the Acupuncture &amp; TCM Board of Reproductive Medicine and
            fertility expert. Health Pointe Jacksonville offers comprehensive treatment programs
            designed to enhance and enrich fertility. We help couples turn their dreams of having a
            baby into a reality.
          </p>
        </div>
      </header>

      {/* ── Intro ────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="intro-heading" className="section-heading">
              Helping to Grow Families in Jacksonville, FL Since 2008
            </h2>
            <p className="text-lg text-ink-muted leading-relaxed mt-6">
              Our Fertility programs use acupuncture and Traditional Chinese medicine and functional
              medicine to help optimize fertility at any stage—whether you&apos;re exhausted from
              trying naturally, or undergoing ART (IVF/IUI/OI). Our integrative, research-backed
              approach helps restore balance, calms your nervous system and supports your fertility
              goals.
            </p>
          </ScrollReveal>

          {/* Key message callout */}
          <ScrollReveal>
            <blockquote className="border-l-4 border-teal bg-teal/5 rounded-r-2xl px-8 py-6 my-10 text-xl font-heading font-semibold text-teal-dark leading-snug">
              &ldquo;The 100 days before conception, natural or IVF, are key to optimizing fertility
              for both partners.&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-lg text-ink-muted leading-relaxed text-center">
              Through our comprehensive Fertility Audit, we identify and address the underlying
              causes of infertility with a patient-centered approach that treats the whole person,
              not just symptoms. Our recommendations focus on optimizing egg and sperm quality and
              enhancing uterine receptivity, helping you achieve peak fertility naturally or through
              IVF.
            </p>
          </ScrollReveal>

          <ScrollReveal className="text-center mt-10">
            <a
              href="/fertility-quiz"
              className="btn-primary"
            >
              Take Our Fertility Quiz
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What We Treat ────────────────────────────────────────────────────── */}
      <section aria-labelledby="treat-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 id="treat-heading" className="section-heading">What We Treat</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fertility */}
            <ScrollReveal delay={0.05}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-muted h-full">
                <h3 className="font-heading font-semibold text-ink text-xl mb-6">Fertility</h3>
                <ul className="space-y-3">
                  {fertilityConditions.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-ink-muted">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Complex Fertility */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-muted h-full">
                <h3 className="font-heading font-semibold text-ink text-xl mb-6">Complex Fertility</h3>
                <ul className="space-y-3">
                  {complexFertilityConditions.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-ink-muted">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Pregnancy & Postpartum */}
            <ScrollReveal delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-muted h-full">
                <h3 className="font-heading font-semibold text-ink text-xl mb-6">Pregnancy &amp; Postpartum</h3>
                <ul className="space-y-3">
                  {pregnancyConditions.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-ink-muted">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Targeted Treatments ──────────────────────────────────────────────── */}
      <section aria-labelledby="targeted-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-3">
              Expert Care
            </p>
            <h2 id="targeted-heading" className="section-heading mb-6">
              Targeted Acupuncture Fertility Treatments
            </h2>
            <p className="text-ink-muted leading-relaxed mb-4 text-lg">
              Your Jacksonville, FL expert in holistic fertility and Oriental Reproductive medicine.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              It makes sense that healthy bodies are more likely to make healthy babies. Therefore,
              as you begin to consider starting a family, it is necessary to commit to investing in
              your health and body prior to conception in order to get in the best fertility shape
              possible.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              The acupuncture fertility plan here at Health Pointe Jacksonville begins with a full
              health history that will be used to develop a personalized plan to increase your
              chances of conceiving. For natural conception fertility assisted treatments we suggest
              committing to 3–6 months of treatment. While some patients have success in as little
              as 6 weeks conceiving, others may take a longer course of treatment.*
            </p>
            <p className="text-ink-muted leading-relaxed">
              Common treatment prescriptions for fertility may include acupuncture &amp; TCM
              techniques, herbal prescriptions, vitamin injections, nutritional and exercise
              adjustments, lifestyle changes, patient education, or a combination of all the above
              to bring your system back to its proper and highest functioning state. Many fertility
              acupuncturists refer to this treatment phase as &ldquo;harvesting the soil before
              planting the seed.&rdquo;
            </p>
          </ScrollReveal>

          {/* Treatment component image grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            {[
              {
                src: "/images/fertility-acupuncture-tcm-pregnancy-jacksonville-fl.png",
                label: "Acupuncture & TCM Techniques",
              },
              {
                src: "/images/fertility-herbal-vitamin-injections-jacksonville-fl.png",
                label: "Herbal Prescriptions / Vitamin Injections",
              },
              {
                src: "/images/fertility-nutrition-lifestyle-couples-jacksonville-fl.png",
                label: "Nutritional / Lifestyle Changes",
              },
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

      {/* ── IVF / FET Support ────────────────────────────────────────────────── */}
      <section aria-labelledby="ivf-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 id="ivf-heading" className="section-heading">IVF &amp; FET Support &amp; Success</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: general IVF */}
            <ScrollReveal delay={0.05}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-muted h-full">
                <h3 className="font-heading font-semibold text-ink text-xl mb-4">
                  Can I receive treatment if I&apos;m going through an IVF or FET cycle?
                </h3>
                <p className="text-ink-muted leading-relaxed mb-4">
                  Absolutely! We have worked closely with the three main IVF clinics here in
                  Jacksonville for many years, offering integrative care alongside reproductive
                  endocrinologists. This collaborative approach makes Health Pointe Jacksonville a
                  clinic you can trust to support you through your IVF journey.
                </p>
                <p className="text-ink-muted leading-relaxed mb-6">
                  We recommend 6–8 treatments before a frozen transfer and 2 months consistent care
                  before an IVF retrieval for optimal results.
                </p>
                <h4 className="font-heading font-semibold text-ink mb-4">
                  Who can benefit from treatment?
                </h4>
                <ul className="space-y-2">
                  {ivfBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-ink-muted text-sm">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Right: male factor */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-muted h-full">
                <h3 className="font-heading font-semibold text-ink text-xl mb-4">
                  Can males benefit from treatment?
                </h3>
                <p className="text-ink-muted leading-relaxed mb-6">
                  The importance of sperm quality cannot be overstated. It can impact miscarriage
                  rates, as well as the future health of the baby. Because men are producing new
                  sperm all the time, we have a significant opportunity to impact quality.
                  We&apos;re here to help you with:
                </p>
                <ul className="space-y-3">
                  {maleFertilityConditions.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-ink-muted">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Research & Stats ─────────────────────────────────────────────────── */}
      <section aria-labelledby="research-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="research-heading" className="section-heading">
              The Impact of Acupuncture Treatment for IVF/IUI Patients
            </h2>
          </ScrollReveal>

          {/* Stat callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <ScrollReveal delay={0.05}>
              <div className="text-center bg-teal/5 rounded-2xl p-6 border border-teal/20">
                <p className="font-heading font-bold text-teal-dark text-4xl mb-2">50%</p>
                <p className="text-ink-muted text-sm">increased conception chance with day-of-transfer acupuncture</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="text-center bg-teal/5 rounded-2xl p-6 border border-teal/20">
                <p className="font-heading font-bold text-teal-dark text-4xl mb-2">70%</p>
                <p className="text-ink-muted text-sm">boost in conception rates with a full acupuncture-assisted IVF program</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="text-center bg-teal/5 rounded-2xl p-6 border border-teal/20">
                <p className="font-heading font-bold text-teal-dark text-4xl mb-2">24%</p>
                <p className="text-ink-muted text-sm">national average IVF conception rate without acupuncture support</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>
              Several landmark research studies have shown that combining acupuncture with the IVF
              pre and post embryonic transfer dramatically increases the chances for conception by as
              much as 50%. And that&apos;s just for the day-of-transfer treatment statistic.
            </p>
            <p>
              For best results, our acupuncture assisted IVF treatment program begins with weekly
              treatments several weeks prior to the stimulatory phase of the IVF cycle, twice weekly
              during the stimulatory phase, continues through the implantation procedure with a pre
              and/or post transfer treatment, as well as one week after the transfer. These
              additional treatments help to prepare the patient for optimum fertility and to achieve
              even better results. The transfer-specific treatments can better boost conception rates
              by as much as 70%.²
            </p>
            <p>
              Considering the national average of conception with the first IVF treatment alone is
              just 24%, and most couples will go through 3–5 rounds of IVF cycles, a 70% increased
              boost using acupuncture assistance is A LOT!
            </p>
            <p>
              IUI patients are typically treated 1–2 times per week throughout, with increased
              frequency as necessary.
            </p>
            <p>
              Acupuncture works to improve success rates of these interventions by increasing blood
              flow to the ovaries during the stimulation phase of IVF or a medicated IUI cycle,
              improving the effectiveness of the drugs given. It also relaxes the uterus and
              addresses uterine spasm after embryo transfer or IUI. Acupuncture also reduces stress
              and offsets side effects from the fertility drugs.*
            </p>
          </ScrollReveal>

          <ScrollReveal className="text-center mt-10">
            <a
              href="https://acubliss.com/book/healthpointe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Book your fertility acupuncture appointment (opens in new tab)"
            >
              Book Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Pregnancy Support ────────────────────────────────────────────────── */}
      <section aria-labelledby="pregnancy-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.1}>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/pregnancy-massage-jacksonville-fl.jpg"
                  alt="Prenatal acupuncture care at Health Pointe Jacksonville"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2 id="pregnancy-heading" className="section-heading mb-6">
                Comprehensive Care for a Healthy Pregnancy
              </h2>
              <p className="text-ink-muted leading-relaxed">
                Once pregnant, ongoing care and treatments may be recommended to support a healthy
                pregnancy and address concerns such as threatened miscarriage, morning sickness, back
                pain, sciatica, pelvic pain, carpal tunnel syndrome, placenta previa, breech
                presentation, pregnancy-induced hypertension, and cervical ripening for labor
                preparation. Our services include fertility and prenatal consultations, acupuncture
                therapy, and diet therapy support. We offer biweekly acupuncture sessions to enhance
                uterine lining and follicular growth during the stimulation follicular phase, as well
                as pre- and post-IUI or IVF acupuncture treatments. For high-risk patients, we
                provide weekly miscarriage prevention treatments up to weeks 12–15 of pregnancy.
                Additionally, our monthly Pregnancy Wellness &amp; Balancing Acupuncture Therapy
                promotes overall well-being throughout pregnancy.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Prenatal & Postpartum ────────────────────────────────────────────── */}
      <section aria-labelledby="postpartum-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="postpartum-heading" className="section-heading">
              Prenatal &amp; Postpartum Care
            </h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-6 text-ink-muted leading-relaxed">
            <p>
              Prenatal acupuncture can provide SAFE and gentle care during this most precious time
              of your life. When you&apos;ve been trying to conceive, a positive pregnancy test
              brings joy and excitement. However, for many, there are uncomfortable symptoms as
              well. Our treatments can help in the management of all the negative symptoms and
              improve labor. Receiving acupuncture during pregnancy statistically reduces labor and
              delivery pains and allows for a smoother and healthier delivery.
            </p>
            <p>
              Our goal at Health Pointe Jacksonville is to help you get pregnant and have a healthy
              baby. But we&apos;re also here for you after you give birth! We are thrilled to offer
              Postpartum Acupuncture. In Chinese Medicine, we say how a woman treats her body in the
              first 30 days post-birth can affect her health for the rest of her life. We use
              Postpartum Acupuncture, herbal formulas, nutritional therapy and moxa to strengthen
              the new mother&apos;s energy and boost her immune system.
            </p>
            <p>
              Postpartum treatment focuses on warming and &ldquo;tonifying&rdquo; the new mother.
              Think of it as relighting the pilot light. The optimal time to start reintroducing
              heat is five to seven days after birth as long as there is no infection. In many
              cultures, warming techniques are used as routine care after birth. This may include
              hot stones, water bottles, warm oils, or fires. In Chinese Medicine, moxa, or
              mugwort, is used to warm the belly and low back to reintroduce substance into the
              lower abdomen.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────────────────────────── */}
      <TestimonialCarousel testimonials={fertilityReviews} />

      {/* ── Address ──────────────────────────────────────────────────────────── */}
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

      {/* ── BookingCTA ───────────────────────────────────────────────────────── */}
      <BookingCTA
        heading="Ready to Start Your Fertility Journey?"
        body="Dr. Julee Miller and our team are here to support you every step of the way — from your first appointment to your first positive test."
        ctaLabel="Book Your Consultation"
      />
    </>
  );
}

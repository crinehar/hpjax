import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";

export const metadata: Metadata = {
  title: "Dry Needling for Women's Health in Jacksonville FL",
  description:
    "Struggling with pelvic pain, endometriosis, hormonal tension, or a body no one has been able to explain? Dr. Julee at Health Pointe Jacksonville offers dry needling built around women's health. Book your consultation.",
  alternates: { canonical: "https://hpjax.com/services/dry-needling-jacksonville-fl/" },
  openGraph: {
    title: "Dry Needling for Women's Health in Jacksonville FL | Health Pointe Jacksonville",
    description:
      "Struggling with pelvic pain, endometriosis, hormonal tension, or a body no one has been able to explain? Dr. Julee at Health Pointe Jacksonville offers dry needling built around women's health. Book your consultation.",
    images: [
      {
        url: "https://hpjax.com/images/acupuncture-back-needles-treatment-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "Dry needling treatment at Health Pointe Jacksonville",
      },
    ],
  },
};

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/dry-needling-jacksonville-fl/`;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${PAGE_URL}#webpage`,
      name: "Dry Needling for Women's Health in Jacksonville FL",
      description: "Struggling with pelvic pain, endometriosis, hormonal tension, or a body no one has been able to explain? Dr. Julee at Health Pointe Jacksonville offers dry needling built around women's health. Book your consultation.",
      url: PAGE_URL,
      isPartOf: { "@id": `${SITE_URL}/#business` },
      about: {
        "@type": "MedicalTherapy",
        name: "Dry Needling",
        relevantSpecialty: "PhysicalTherapy",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dry Needling Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pelvic Floor Dry Needling" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Endometriosis Pain Dry Needling" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nervous System Regulation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fertility Support Dry Needling" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trigger Point Release" } },
          ],
        },
      },
      provider: { "@id": `${SITE_URL}/#practitioner` },
      breadcrumb: breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Women's Health", href: "/womens-health/" },
        { name: "Dry Needling", href: "/services/dry-needling-jacksonville-fl/" },
      ]),
    },
    { ...localBusinessEntity },
    { ...drJuleeMillerEntity },
  ],
};

const DRY_NEEDLING_REVIEW_SLUGS = ["eileen-a", "leighann"];
const dryNeedlingReviews = DRY_NEEDLING_REVIEW_SLUGS.map((slug, i) => {
  const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
  return { id: i + 1, name: r.name, quote: r.quote };
});

const conditions = [
  {
    title: "Pelvic Floor Dysfunction",
    body: "Pelvic floor muscles carry tension the same way your neck and shoulders do, often more, and with less acknowledgment. When those muscles are overactive or in spasm, the result can be pelvic pain, painful sex, urinary urgency, or pressure that has no clear structural cause on imaging. Dry needling helps release overactive pelvic floor tissue, reduce referred pain patterns, and restore normal muscle function. Many women notice improvement within the first few sessions.",
  },
  {
    title: "Endometriosis and Chronic Pelvic Pain",
    body: "Endometriosis creates lesions outside the uterus, but the pain it produces is not always where the tissue is. Nerve sensitization, muscle guarding, and fascial restriction all compound over time, creating a pain pattern that goes far beyond the cycle itself. Dry needling targets the secondary muscle dysfunction and nervous system overactivation that endometriosis causes. It does not treat the lesions. It addresses the layers of tension and pain that build up around them. For women managing endometriosis long-term, this kind of targeted relief is often the piece that has been missing.",
  },
  {
    title: "Nervous System Regulation and Emotional Balance",
    body: "Chronic pain changes the nervous system. Stress, trauma, and years of being in fight-or-flight teach your body to hold tension even when there is no immediate threat. That accumulated tension is real, it is physical, and it is treatable. Dry needling activates the parasympathetic response, which is your rest-and-repair mode. Many patients describe feeling a deep release during and after treatment, not just in the muscle being treated but throughout their body. If your system has been running hot for a long time, this matters.",
  },
  {
    title: "Fertility Support",
    body: "While dry needling is not a fertility treatment, it plays a supportive role for women going through IVF, navigating cycle irregularities, or dealing with conditions like PCOS that affect hormonal balance and muscle tension. Reducing pelvic tension, supporting circulation, and calming an overactive nervous system all create a better internal environment for reproductive health. Dr. Julee works alongside your reproductive care team. Treatment is adapted based on where you are in your cycle or protocol.",
  },
];

const whyChoosePoints = [
  "Specialized focus in women's health and fertility",
  "Dry needling integrated with acupuncture and holistic care",
  "Personalized treatment plans, not protocols",
  "Limited patient volume so care stays focused",
  "Located in Jacksonville, FL",
];

export default function DryNeedlingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <header
        aria-labelledby="page-heading"
        className="relative min-h-[20rem] md:min-h-[26rem] flex items-center justify-center overflow-hidden py-12"
      >
        <Image
          src="/images/dry-needling-treatment-womens-health-jacksonville-fl.jpg"
          alt="Dr. Julee Miller performing dry needling treatment at Health Pointe Jacksonville"
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
            Dry Needling for Women&apos;s Health in Jacksonville, FL
          </h1>
          <p className="text-white text-lg leading-relaxed mb-4">
            Finally, a provider who understands that pain in your body does not always come with a
            clean explanation on a chart.
          </p>
          <p className="text-white/90 text-base leading-relaxed">
            At Health Pointe Jacksonville, Dr. Julee offers dry needling as a targeted, hands-on
            treatment for women dealing with pelvic floor dysfunction, endometriosis and chronic
            pelvic pain, hormonal tension, cycle-related symptoms, and nervous system dysregulation.
            This is not the same dry needling you will find at a PT office treating a hamstring pull.
          </p>
        </div>
      </header>

      {/* ── What Is Dry Needling ─────────────────────────────────────────────── */}
      <section aria-labelledby="what-heading" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-teal-dark font-medium text-lg mb-4">
              If you have been dismissed, told your labs look fine, or handed a prescription that
              never solved the root problem, this page is for you.
            </p>
            <h2 id="what-heading" className="section-heading mb-8">
              What Is Dry Needling? (And Why It Works Differently Here)
            </h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              Dry needling uses thin, sterile needles inserted into specific points in muscle
              tissue to release tension, interrupt pain signals, and trigger your body&apos;s
              natural healing response. When a needle contacts a trigger point, the muscle often
              responds with a brief involuntary twitch. That twitch is a reset. The result:
              reduced pain, improved circulation, looser tissue, and a nervous system that starts
              to come out of overdrive.
            </p>
            <p className="text-ink-muted leading-relaxed">
              At Health Pointe Jacksonville, dry needling is integrated into a broader care plan.
              Dr. Julee does not use it as a standalone fix. She uses it as one precise tool
              within a personalized approach to your health.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Conditions We Treat ──────────────────────────────────────────────── */}
      <section aria-labelledby="conditions-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-6">
            <h2 id="conditions-heading" className="section-heading">Conditions We Treat</h2>
          </ScrollReveal>
          <ScrollReveal className="text-center mb-12">
            <p className="section-subheading max-w-2xl mx-auto">
              Dr. Julee specializes in using dry needling to address conditions that are frequently
              undertreated, misdiagnosed, or dismissed. If any of the following sound familiar, you
              are in the right place.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conditions.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.08}>
                <div className="bg-surface rounded-2xl p-8 border border-surface-muted h-full">
                  <h3 className="font-heading font-semibold text-ink text-xl mb-4">{c.title}</h3>
                  <p className="text-ink-muted leading-relaxed">{c.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Expect ───────────────────────────────────────────────────── */}
      <section aria-labelledby="expect-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/health-pointe-jacksonville-acupuncture-team.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="expect-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-8">
              What to Expect at Health Pointe Jacksonville
            </h2>
            <div className="space-y-5 text-white/90 leading-relaxed text-lg text-left max-w-3xl mx-auto">
              <p>
                Your first appointment starts with a conversation. Dr. Julee will review your health
                history, understand your symptoms in full, and identify where dry needling fits into
                your care plan. Sessions typically run 35–45 minutes. The needles themselves are
                thin, most patients describe the sensation as a brief ache or pressure at the trigger
                point, followed by a release.
              </p>
              <p>
                Some patients feel immediate relief. Others notice improvement in the days following
                treatment as inflammation settles and tissue responds. After your session: drink
                water, rest if you need to, avoid intense exercise that day. Mild soreness is normal
                and typically resolves within 24 to 48 hours.
              </p>
            </div>
            <blockquote className="mt-10 border-l-4 border-teal px-8 py-4 text-lg font-heading font-semibold text-white italic text-left max-w-3xl mx-auto">
              &ldquo;This is not a volume clinic. Dr. Julee sees a limited number of patients to
              ensure every treatment plan is genuinely personalized. You will not be handed off to a
              tech or rushed through a protocol.&rdquo;
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ── How Many Sessions ────────────────────────────────────────────────── */}
      <section aria-labelledby="sessions-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="sessions-heading" className="section-heading mb-6">
              How Many Sessions Will I Need?
            </h2>
            <p className="text-lg text-ink-muted leading-relaxed">
              Most patients see meaningful improvement within 3 to 6 sessions. Complex conditions
              like endometriosis or long-standing pelvic floor dysfunction may benefit from a longer
              course of care. Dr. Julee reassesses after every few sessions and adjusts the plan
              based on your response. There is no fixed protocol forced onto every patient. The goal
              is progress, and the plan shifts with you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Dry Needling vs Acupuncture ──────────────────────────────────────── */}
      <section aria-labelledby="compare-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 id="compare-heading" className="section-heading mb-6">
                Dry Needling vs. Acupuncture: How Are They Different?
              </h2>
              <p className="text-ink-muted leading-relaxed">
                Both use needles. Same points. Same science. Both use evidence based practices Dry
                needling is rooted in Western anatomy and neuroscience. The goal is to release
                trigger points in muscle and fascia, interrupt pain signals, and restore normal
                tissue function. Dr. Julee targets specific, palpable points of dysfunction
                identified through physical assessment. Acupuncture is rooted in Traditional Chinese
                Medicine. It works by stimulating specific points along the body&apos;s neurovascular
                pathways — influencing the nervous system, improving circulation, reducing
                inflammation, and restoring the body&apos;s natural healing mechanisms. Traditional
                Chinese Medicine gave us the map. Modern neuroscience is confirming why it works.
                Licensed acupuncturists complete extensive graduate-level training in Acupuncture,
                TCM theory, Western Biomedical science and extensive skills practice. At Health
                Pointe Jacksonville, Dr. Julee offers both, which means you do not have to choose
                based on a comparison article. She will recommend the right tool for your specific
                presentation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/dry-needling-acupuncture-womens-health-results-jacksonville-fl.jpg"
                  alt="Woman feeling relief and confidence after dry needling treatment at Health Pointe Jacksonville"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Why Choose Health Pointe ─────────────────────────────────────────── */}
      <section aria-labelledby="why-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/womens-health-community-jacksonville-fl.jpg"
                  alt="Diverse women smiling — patients at Health Pointe Jacksonville dry needling clinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 id="why-heading" className="section-heading mb-6">
                Why Patients Choose Health Pointe Jacksonville
              </h2>
              <p className="text-ink-muted leading-relaxed mb-4">
                Most dry needling providers in Jacksonville treat athletes and post-surgical
                patients. That work is valid. But it is a different patient than the woman who has
                been managing pelvic pain for three years, or who is preparing her body for embryo
                transfer, or who has been told her symptoms are anxiety.
              </p>
              <p className="text-ink-muted leading-relaxed mb-8">
                Dr. Julee built her practice around the patient who has not been well served by the
                standard system. She takes time to understand the full picture, not just the
                complaint on the intake form.
              </p>
              <ul className="space-y-3">
                {whyChoosePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-ink-muted">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Ready to Find Out ────────────────────────────────────────────────── */}
      <section aria-labelledby="ready-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="ready-heading" className="section-heading mb-6">
              Ready to Find Out If Dry Needling Is Right for You?
            </h2>
            <p className="text-lg text-ink-muted leading-relaxed mb-8">
              If you are dealing with pelvic pain, cycle-related symptoms, endometriosis, or a body
              that has been carrying tension for too long, book a consultation with Dr. Julee at
              Health Pointe Jacksonville. We will review your history, answer your questions, and
              build a care plan around your actual goals.
            </p>
            <a
              href="https://acubliss.com/book/healthpointe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Book your dry needling consultation (opens in new tab)"
            >
              Book Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────────────────────────── */}
      <TestimonialCarousel testimonials={dryNeedlingReviews} />

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
        heading="Dry Needling Tailored to You"
        body="Schedule your consultation with Dr. Julee Miller and get a care plan built around your specific goals — not a protocol."
        ctaLabel="Schedule Your Appointment"
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { faqSchema, breadcrumbSchema, localBusinessEntity, drJuleeMillerEntity } from "@/lib/schema";
import { REVIEWS_DATA } from "@/lib/reviews-data";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Voted Best in Jax Medical Massage Therapy",
  description:
    "Health Pointe Jacksonville's massage therapists have over 25 years experience treating chronic pain conditions. Book Now",
  alternates: { canonical: "https://hpjax.com/services/massage-therapy-jacksonville" },
  openGraph: {
    title: "Massage Therapy Jacksonville, FL | Health Pointe Jacksonville",
    description:
      "Medical massage therapy in Jacksonville, FL. Deep tissue, prenatal, sports massage, Manual Lymphatic Drainage, and more. Voted Jacksonville's top massage therapy clinic.",
    images: [{ url: "https://hpjax.com/images/massage-therapy-jacksonville-fl-health-pointe.jpg", width: 1024, height: 622, alt: "Massage therapy session at Health Pointe Jacksonville" }],
  },
};

const serviceTypes = [
  {
    heading: "Deep Tissue & Medical Massage",
    items: [
      { label: "Chronic pain conditions" },
      { label: "Postural imbalances" },
      { label: "Repetitive strain injuries" },
      { label: "Myofascial restrictions" },
      { label: "Trigger points & muscle knots" },
    ],
  },
  {
    heading: "Sports & Performance Massage",
    items: [
      { label: "Injury prevention & recovery" },
      { label: "Muscle tightness & soreness" },
      { label: "Joint mobility improvement" },
      { label: "Tendonitis & overuse injuries" },
      { label: "Pre-event & post-event care" },
    ],
  },
  {
    heading: "Women's Health Massage",
    items: [
      { label: "Fertility Massage", href: "/blog/nurture-your-path-to-parenthood-with-fertility-massage/" },
      { label: "Pregnancy / prenatal massage", href: "/blog/the-transformative-benefits-of-prenatal-postpartum-massage-your-guide-to-supported-motherhood/" },
      { label: "Postpartum massage" },
      { label: "Lower back & hip pain" },
      { label: "Sciatica & nerve discomfort" },
      { label: "Swelling & fluid retention" },
      { label: "Postpartum recovery support" },
      { label: "Stress & sleep improvement" },
    ],
  },
];

const faqs = [
  {
    q: "What should I expect during my first massage?",
    a: "Your therapist will begin with a brief consultation to understand your health history, pain areas, and goals. You'll be guided to a calm, private space and given instructions on how to prepare for the session. You'll be draped with a sheet for modesty, and your comfort is always the priority.",
  },
  {
    q: "Does massage therapy hurt?",
    a: "Some types of massage—like deep tissue—may involve firm pressure, but it should never be painful. Always communicate with your therapist so they can adjust the intensity to suit your needs.",
  },
  {
    q: "What types of massage do you offer?",
    a: "We provide a wide range of massage therapies including Deep Tissue, Manual Lymphatic Drainage (MLD), Sports Massage, Fertility Massage, and Prenatal/Postpartum Massage. Each session is customized to your body and needs.",
  },
];

const MASSAGE_REVIEW_SLUGS = ["jada-l", "erin-g", "hunter-d", "janice-h", "pam-a", "brittney-r"];

const massageReviews = MASSAGE_REVIEW_SLUGS
  .map((slug, i) => {
    const r = REVIEWS_DATA.find((r) => r.slug === slug)!;
    return { id: i + 1, name: r.name, quote: r.quote };
  });

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/services/massage-therapy-jacksonville/`;

export default function MassageTherapyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Voted Best in Jax Medical Massage Therapy | Health Pointe Jacksonville",
        description:
          "Health Pointe Jacksonville's massage therapists have over 25 years experience treating chronic pain conditions. Deep tissue, prenatal, sports massage, MLD, and fertility massage in Jacksonville, FL.",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#business` },
        about: {
          "@type": "MedicalTherapy",
          name: "Massage Therapy",
          alternateName: "Medical Massage",
          relevantSpecialty: "Physical Therapy",
        },
        provider: { "@id": `${SITE_URL}/#practitioner` },
        breadcrumb: breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Massage Therapy", href: "/services/massage-therapy-jacksonville/" },
        ]),
      },
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
      <header aria-labelledby="page-heading" className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/massage-therapy-jacksonville-fl-health-pointe.jpg"
          alt="Licensed massage therapist performing therapeutic massage at Health Pointe Jacksonville"
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
            Voted Jacksonville FL&apos;s top massage therapy clinic (again!)
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Looking for more relaxation and less pain? What if you could also finally alleviate your back pain, chronic headaches, TMJ jaw pain, carpal tunnel wrist pain, recover from a recent sports injury or auto accident?
            <br /><br />
            Medical Massage at Health Pointe Jacksonville is here to help!
          </p>
        </div>
      </header>

      {/* ── Redefining Self Care ─────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="mb-10">
            <h2 id="intro-heading" className="section-heading">
              Redefining Self Care with Medical Massage Therapy in Jacksonville, FL
            </h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>Massage therapy is more than just relaxation—it&apos;s a powerful tool for pain relief, recovery, and overall wellness.</p>
            <p>At Health Pointe Jacksonville, our skilled therapists bring advanced training and certifications in specialties such as{" "}
              <Link href="/blog/the-transformative-benefits-of-prenatal-postpartum-massage-your-guide-to-supported-motherhood/" className="text-teal-dark underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded">prenatal massage</Link>{" "}
              and{" "}
              <Link href="/blog/the-power-of-mld-massage-your-path-to-optimal-post-surgical-recovery/" className="text-teal-dark underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded">Manual Lymphatic Drainage (MLD)</Link>
              , two of the most frequently requested areas of expertise.</p>
            <p>Whether you&apos;re recovering from an injury, managing chronic pain, or seeking support through pregnancy, our team delivers thoughtful, personalized care.</p>
          </ScrollReveal>
          <ScrollReveal className="mt-8 text-center">
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
            {serviceTypes.map((type, i) => (
              <ScrollReveal key={type.heading} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-muted h-full">
                  <h3 className="font-heading font-bold text-teal-dark text-xl mb-5">{type.heading}</h3>
                  <div role="list" className="space-y-2">
                    {type.items.map((item) => (
                      <div key={item.label} role="listitem" className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-teal-dark" aria-hidden="true" />
                        {item.href ? (
                          <Link href={item.href} className="text-teal-dark text-sm leading-snug underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded">
                            {item.label}
                          </Link>
                        ) : (
                          <span className="text-ink-muted text-sm leading-snug">{item.label}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deep Tissue ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="deep-tissue-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="deep-tissue-heading" className="section-heading">Targeted Relief With Deep Tissue Massage</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-ink-muted leading-relaxed">
              Deep tissue massage focuses on the deeper layers of muscle and connective tissue to address chronic pain, postural imbalances, and injury recovery. This specialized approach is ideal for relieving repetitive strain and muscle tension. Common techniques include Neuromuscular Therapy (trigger point therapy) and Myofascial Release, followed by gentle stretching to enhance mobility and promote long-term relief.
            </p>
          </ScrollReveal>
        </div>

        {/* 3-image grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: "/images/pregnancy-massage-jacksonville-fl.jpg", label: "Pregnancy Massage" },
              { src: "/images/sports-massage-jacksonville-fl.jpg", label: "Sports Massage" },
              { src: "/images/deep-tissue-massage-jacksonville-fl.jpg", label: "Deep Tissue Massage" },
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

      {/* ── Manual Lymphatic Drainage ───────────────────────────────────────── */}
      <section aria-labelledby="mld-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <div>
              <ScrollReveal>
                <h2 id="mld-heading" className="section-heading mb-6">
                  Manual Lymphatic Drainage (MLD)
                </h2>
                <p className="text-ink-muted leading-relaxed mb-5">
                  Within each of us resides a silent system — the lymphatic system — whose only function is to remove toxic build-up and keep us healthy. Manual Lymphatic Drainage (MLD) is a gentle, scientifically-proven massage technique designed to work specifically with this system, helping it function more efficiently.
                </p>
                <p className="text-ink-muted leading-relaxed mb-5">
                  Unlike deep tissue massage, MLD uses very light pressure with specific rhythmic strokes that stimulate lymph flow, speeding up the removal of toxins, inflammation, and cellular waste. Our certified therapists use the renowned <strong className="text-ink">Vodder technique</strong> — the gold standard in lymphatic drainage therapy.
                </p>

                <a
                  href="https://healthpointejacksonville.acubliss.app/portal/booking/denise-reek/jacksonville/massage-manual-lymphatic-drainage-50-minutes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book Your MLD Session (opens in new tab)"
                  className="btn-primary"
                >
                  Book Your MLD Session
                </a>
              </ScrollReveal>
            </div>

            {/* Image */}
            <ScrollReveal delay={0.1}>
              <figure className="relative overflow-hidden rounded-2xl aspect-square">
                <Image
                  src="/images/manual-lymphatic-drainage-massage-jacksonville-fl.webp"
                  alt="Manual lymphatic drainage massage therapist performing abdominal MLD technique at Health Pointe Jacksonville"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </figure>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Discover the Healing Power ──────────────────────────────────────── */}
      <section aria-labelledby="healing-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/therapeutic-massage-health-pointe-jacksonville.jpg"
          alt="Massage therapist providing therapeutic treatment at Health Pointe Jacksonville"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="healing-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-6">
              Discover the Healing Power of Therapeutic Massage
            </h2>
            <p className="text-white leading-relaxed max-w-2xl mx-auto mb-8">
              Feel the difference expert bodywork can make. Whether you&apos;re struggling with chronic pain, recovering from injury, navigating tension and stress, or simply prioritizing your well-being, our massage therapists create a personalized experience designed to support your body&apos;s natural healing process.
            </p>
            <Link
              href="/blog/nurture-your-path-to-parenthood-with-fertility-massage/"
              aria-label="Learn more about fertility massage"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-body font-bold text-base px-8 py-4 rounded-md hover:bg-teal hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn More
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="faq-heading" className="section-heading">What to Know About Massage Therapy</h2>
          </ScrollReveal>
          <dl className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl px-7 py-6 shadow-sm border border-surface-muted">
                <dt className="font-heading font-semibold text-ink text-lg mb-3">{q}</dt>
                <dd className="text-ink-muted leading-relaxed">{a}</dd>
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
              Aftercare and Continuing Your Healing Journey
            </h2>
            <p className="text-ink-muted leading-relaxed mb-4 max-w-2xl mx-auto">
              Your massage session is just the beginning of your path to greater wellness.
            </p>
            <p className="text-ink-muted leading-relaxed max-w-2xl mx-auto mb-8">
              To extend the benefits of your treatment, we offer guidance on simple self-care practices and recommend a follow-up schedule tailored to your body&apos;s needs.
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
      <TestimonialCarousel testimonials={massageReviews} />

      {/* ── Address ─────────────────────────────────────────────────────────── */}
      <section aria-label="Clinic location" className="py-12 bg-surface text-center border-t border-surface-muted">
        <address className="not-italic text-ink-muted text-sm leading-relaxed">
          <strong className="text-ink font-semibold">Health Pointe Jacksonville</strong><br />
          3840 Belfort Rd STE 305, Jacksonville, FL 32216<br />
          <a href="tel:9044480046" className="hover:text-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded">
            (904) 448-0046
          </a>
          <br />
          <span className="text-ink-subtle">Massage Establishment #MM22273</span>
        </address>
      </section>

      {/* ── BookingCTA ──────────────────────────────────────────────────────── */}
      <BookingCTA
        heading="Ready to feel your best?"
        body="Our licensed massage therapists in Jacksonville are here to help you recover, relax, and reclaim your well-being."
        ctaLabel="Book Your Session Now"
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { servicePageSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Massage Therapy Jacksonville, FL | Health Pointe Jacksonville",
  description:
    "Medical massage therapy in Jacksonville, FL. Deep tissue, prenatal, sports massage, Manual Lymphatic Drainage, and more. Voted Jacksonville's top massage therapy clinic. Call (904) 448-0046.",
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
      "Chronic pain conditions",
      "Postural imbalances",
      "Repetitive strain injuries",
      "Myofascial restrictions",
      "Trigger points & muscle knots",
    ],
  },
  {
    heading: "Sports & Performance Massage",
    items: [
      "Injury prevention & recovery",
      "Muscle tightness & soreness",
      "Joint mobility improvement",
      "Tendonitis & overuse injuries",
      "Pre-event & post-event care",
    ],
  },
  {
    heading: "Women's Health Massage",
    items: [
      "Fertility Massage",
      "Pregnancy / prenatal massage",
      "Postpartum massage",
      "Lower back & hip pain",
      "Sciatica & nerve discomfort",
      "Swelling & fluid retention",
      "Postpartum recovery support",
      "Stress & sleep improvement",
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

export default function MassageTherapyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      servicePageSchema({
        name: "Massage Therapy Jacksonville, FL",
        description:
          "Medical massage therapy in Jacksonville, FL including deep tissue, prenatal, sports massage, Manual Lymphatic Drainage, and fertility massage at Health Pointe Jacksonville.",
        url: "/services/massage-therapy-jacksonville/",
        alternateName: "Medical Massage Jacksonville",
      }),
      faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Massage Therapy", href: "/services/massage-therapy-jacksonville/" },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <header aria-labelledby="page-heading" className="relative h-80 md:h-[480px] flex items-center overflow-hidden">
        <Image
          src="/images/massage-therapy-jacksonville-fl-health-pointe.jpg"
          alt="Licensed massage therapist performing therapeutic massage at Health Pointe Jacksonville"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <h1
              id="page-heading"
              className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-6"
            >
              Voted Jacksonville FL&apos;s top massage therapy clinic (again!)
            </h1>
            <p className="text-white text-lg leading-relaxed mb-8">
              Looking for more relaxation and less pain? What if you could also finally alleviate your back pain, chronic headaches, TMJ jaw pain, carpal tunnel wrist pain, recover from a recent sports injury or auto accident?
              <br /><br />
              Medical Massage at Health Pointe Jacksonville is here to help!
            </p>
          </div>
        </div>
      </header>

      {/* ── Redefining Self Care ─────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
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

      {/* ── Deep Tissue ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="deep-tissue-heading" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="deep-tissue-heading" className="section-heading">Targeted Relief With Deep Tissue Massage</h2>
          </ScrollReveal>
          <ScrollReveal className="space-y-5 text-ink-muted leading-relaxed">
            <p>Deep tissue massage focuses on the deeper layers of muscle and connective tissue to address chronic pain, postural imbalances, and injury recovery.</p>
            <p>This specialized approach is ideal for relieving repetitive strain and muscle tension.</p>
            <p>Common techniques include Neuromuscular Therapy (trigger point therapy) and Myofascial Release, followed by gentle stretching to enhance mobility and promote long-term relief.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Discover the Healing Power ──────────────────────────────────────── */}
      <section aria-labelledby="healing-heading" className="py-20 bg-teal-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="healing-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-6">
              Discover the Healing Power of Therapeutic Massage
            </h2>
            <p className="text-white leading-relaxed mb-8 max-w-2xl mx-auto">
              Feel the difference expert bodywork can make. Whether you&apos;re struggling with chronic pain, recovering from injury, navigating tension and stress, or simply prioritizing your well-being, our massage therapists create a personalized experience designed to support your body&apos;s natural healing process.
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
            <p className="text-ink-muted leading-relaxed max-w-2xl mx-auto">
              To extend the benefits of your treatment, we offer guidance on simple self-care practices and recommend a follow-up schedule tailored to your body&apos;s needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

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

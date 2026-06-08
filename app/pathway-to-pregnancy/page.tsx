import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookingCTA from "@/components/BookingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pathway to Pregnancy eBook | Health Pointe Jacksonville",
  description:
    "Download The Pathway to Pregnancy eBook for integrative fertility support in Jacksonville, FL. Learn about IVF and FET care, male factor, and next steps.",
  alternates: { canonical: "https://hpjax.com/pathway-to-pregnancy/" },
};

const conditionBoxes = [
  {
    heading: "IVF & FET Support",
    items: [
      "Pre- and post-transfer IVF transfer day acupuncture onsite at Olive Fertility Centre",
      "Repeated unsuccessful IVF cycles",
      "Implantation failure",
      "Miscarriages and repeated pregnancy loss",
      "Donor Egg Cycles",
      "FET (Frozen Embryo Transfer)",
      "Thin lining",
    ],
  },
  {
    heading: "Reproductive Optimization",
    items: [
      "Optimizing egg and sperm quality",
      "Reduce the negative effects of IVF drugs",
      "Balance hormones",
      "Regulate immune system",
      "Increased blood flow to ovaries and uterus",
      "Implantation and uterine receptivity",
      "Reduce negative effects of stress",
      "Regulate inflammation",
    ],
  },
  {
    heading: "Male Factor Support",
    items: [
      "Low Sperm Count",
      "Decreased Sperm Motility",
      "Decreased Sperm Morphology",
      "Erectile Dysfunction",
      "Poor Liquefaction",
      "Varicocele",
      "Prostate Swelling",
      "Premature Ejaculation",
      "Anxiety / Hopelessness / Depression",
    ],
  },
];

export default function PathwayToPregnancyPage() {
  return (
    <>
      <header
        aria-labelledby="page-heading"
        className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/pathway-to-pregnancy-fertility-acupuncture-jacksonville-fl.jpg"
          alt="Pregnant mother with toddler kissing belly — fertility support at Health Pointe Jacksonville"
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
            The Pathway to Pregnancy
          </h1>
          <p className="text-white text-lg leading-relaxed">
            A holistic integrative approach for a healthy pregnancy
          </p>
        </div>
      </header>

      {/* Healthy Bodies Make Healthy Babies */}
      <section aria-labelledby="intro-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="intro-heading" className="section-heading text-center mb-6">
              Healthy Bodies Make Healthy Babies.
            </h2>
            <p className="text-ink-muted leading-relaxed mb-6">
              The path to pregnancy is not always an easy one. In fact, 1 in 8 couples struggle with infertility.
              Our clinic&rsquo;s integrative treatment is focused on using evidence-based therapies such as acupuncture
              and massage as well as supplements and herbal recommendations, nutrition, mind body medicine, and
              lifestyle interventions.
            </p>
            <p className="text-ink-muted leading-relaxed mb-6">
              In this E-Book I&rsquo;m going to provide you with helpful tools and tips that will bring your system
              back to its proper and highest functioning state. Many fertility acupuncturists refer to this treatment
              phase as &ldquo;harvesting the soil before planting the seed.&rdquo;
            </p>
            <div className="mt-8 bg-surface rounded-2xl p-8 text-center border border-surface-muted">
              <h3 className="font-heading font-bold text-ink text-2xl mb-3">Download Your E-Book Now!</h3>
              <p className="text-ink-muted mb-6">
                Free fertility guide from Dr. Julee Miller, ABORM-certified acupuncture physician.
              </p>
              <a
                href="/images/ebooks/the-pathway-to-pregnancy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex px-8 py-3"
                aria-label="Download the Pathway to Pregnancy fertility guide PDF (opens in new tab)"
              >
                Download the E-Book
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Compassionate, Personalized Fertility Support */}
      <section aria-labelledby="personalized-heading" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="personalized-heading" className="section-heading text-center mb-6">
              Compassionate, Personalized Fertility Support
            </h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              While acupuncture is one of our treatment offerings, Dr. Miller will meet with you and evaluate your
              specific needs to determine if you are a good candidate for our services. Then, if you are a good
              candidate for our clinic, she will formulate a treatment plan specifically for you.
            </p>
            <p className="text-ink-muted leading-relaxed">
              The majority of the time, her treatment plans draw from all of our services to give you the best
              comprehensive care and get you the results you desire in the most expeditious method.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* IVF intro — bg image with overlay */}
      <section aria-labelledby="ivf-heading" className="relative py-24 overflow-hidden">
        <Image
          src="/images/ivf-fertility-acupuncture-consultation-jacksonville-fl.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom scale-105 translate-y-3"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="ivf-heading" className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-6">
              IVF &amp; FET Support &amp; Success
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              We have worked closely with the three main IVF clinics here in Jacksonville for many years, offering
              integrative care alongside reproductive endocrinologists. This collaborative approach makes Health
              Pointe Jacksonville a clinic you can trust to support you through your IVF journey.
            </p>
            <Link
              href="/blog/tips-for-a-smooth-embryo-transfer-day-and-the-days-following/"
              className="text-teal font-semibold underline underline-offset-2 hover:text-white transition-colors"
            >
              Check out our top tips on how to have a smooth transfer day →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Conditions — full-width 3-card grid */}
      <section aria-labelledby="conditions-heading" className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="conditions-heading" className="section-heading text-center mb-12">
              Who We See &amp; Conditions Addressed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {conditionBoxes.map((box) => (
                <div key={box.heading} className="bg-white rounded-2xl p-7 border border-surface-muted shadow-sm">
                  <h3 className="font-heading font-bold text-teal-dark text-lg mb-5">{box.heading}</h3>
                  <ul className="space-y-3">
                    {box.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-ink-muted text-sm">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-dark shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* NAP block */}
      <section className="py-12 bg-surface border-t border-surface-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <address className="not-italic text-ink-muted text-sm space-y-1">
            <p className="font-semibold text-ink">Health Pointe Jacksonville</p>
            <p>3840 Belfort Rd STE 305, Jacksonville, FL 32216</p>
            <p>
              <a href="tel:9044480046" className="text-teal-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded-sm">
                (904) 448-0046
              </a>
            </p>
          </address>
        </div>
      </section>

      <BookingCTA
        heading="Questions before getting started? Get in touch."
        body="We&rsquo;re here to answer your questions and guide you toward the care that&rsquo;s right for you."
        ctaLabel="Book a Consultation"
      />
    </>
  );
}

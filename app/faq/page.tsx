import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";
import { faqSchema, breadcrumbSchema, localBusinessEntity } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about acupuncture, massage therapy, insurance, and what to expect at Health Pointe Jacksonville. Book your first visit today.",
  alternates: { canonical: "https://hpjax.com/faq/" },
  openGraph: {
    title: "FAQ | Health Pointe Jacksonville",
    description:
      "Answers to common questions about acupuncture, massage therapy, insurance, and what to expect at Health Pointe Jacksonville.",
    images: [
      {
        url: "https://hpjax.com/images/health-pointe-jacksonville-acupuncture-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "Health Pointe Jacksonville acupuncture and massage clinic",
      },
    ],
  },
};

const faqCategories = [
  {
    id: "getting-started",
    heading: "Getting Started",
    questions: [
      {
        q: "What should I expect at my first visit?",
        a: "Your first visit begins with a comprehensive intake consultation — usually 60–90 minutes — where we review your health history, current symptoms, and wellness goals. Dr. Julee or one of our practitioners will ask detailed questions, examine your tongue and pulse (key diagnostic tools in Traditional Chinese Medicine), and design an individualized treatment plan. Most patients receive their first acupuncture treatment during this initial session.",
      },
      {
        q: "Do I need a referral to make an appointment?",
        a: "No referral is needed. You can book directly online through our patient portal or call us at (904) 448-0046. If you're coming for a specialized service like fertility acupuncture or Manual Lymphatic Drainage (MLD), we recommend calling first so we can match you with the right practitioner.",
      },
      {
        q: "What should I wear to my appointment?",
        a: "Wear loose, comfortable clothing that can be easily rolled up to the elbows and knees. For some treatments, you may be provided a gown or draping. Avoid wearing perfume or strong fragrances, as some patients may be sensitive to scents.",
      },
      {
        q: "How many treatments will I need?",
        a: "The number of treatments varies depending on your condition, how long you've had it, and your overall health. Acute conditions may resolve in as few as 4–6 visits, while chronic or complex conditions typically require a longer course of care. At your first visit, your practitioner will give you a realistic treatment timeline and check in with you regularly to assess progress.",
      },
    ],
  },
  {
    id: "acupuncture",
    heading: "Acupuncture",
    questions: [
      {
        q: "Does acupuncture hurt?",
        a: "Acupuncture needles are hair-thin — far smaller than a hypodermic needle — and most patients feel little to no discomfort during insertion. You may notice sensations like warmth, a mild ache, or tingling, which are signs that the treatment is working. Many patients find sessions so relaxing they fall asleep on the table.",
      },
      {
        q: "Is acupuncture safe?",
        a: "Yes. Acupuncture is one of the safest medical procedures available when performed by a licensed practitioner. Health Pointe Jacksonville uses single-use, sterile, disposable needles — they are never reused. Dr. Julee Miller holds a Doctorate in Oriental Medicine (DOM) and all our acupuncturists are state-licensed in Florida.",
      },
      {
        q: "What conditions does acupuncture treat?",
        a: "Acupuncture is clinically recognized for treating a wide range of conditions including chronic pain, migraines, fertility challenges, hormonal imbalances (PMOS, endometriosis, menopause), pelvic floor dysfunction, neurological disorders, long COVID fatigue, anxiety, insomnia, sports injuries, and more. During your consultation we'll discuss whether acupuncture is appropriate for your specific situation.",
      },
      {
        q: "Can I get acupuncture while pregnant?",
        a: "Yes — with proper precautions. Prenatal acupuncture is safe and can relieve common pregnancy discomforts like nausea, back pain, sciatica, and fatigue. Dr. Julee Miller is specially trained in prenatal care. Certain points are avoided during pregnancy, which is why it is essential to always work with a licensed practitioner who is experienced in prenatal treatment.",
      },
    ],
  },
  {
    id: "massage",
    heading: "Massage Therapy",
    questions: [
      {
        q: "What types of massage do you offer?",
        a: "We offer Medical Massage, Deep Tissue, Sports Massage, Prenatal & Postpartum Massage, Fertility Massage, and Manual Lymphatic Drainage (MLD). Each session is customized to your body's needs. Our therapists hold advanced certifications and bring decades of hands-on experience to every treatment.",
      },
      {
        q: "What is Manual Lymphatic Drainage (MLD)?",
        a: "MLD is a gentle, scientifically-validated massage technique that supports the body's lymphatic system — your natural drainage network. Using the Vodder technique (the gold standard in lymphatic therapy), our certified therapists use light rhythmic strokes to reduce swelling, accelerate healing after surgery, and support immune function. It is also effective for managing lymphedema, fibromyalgia, migraines, TMJ, and post-breast-cancer recovery.",
      },
      {
        q: "Do you accept insurance for massage therapy?",
        a: "Massage therapy coverage varies by insurance plan. We recommend calling your insurance provider to verify your benefits before your visit. Our front desk team is happy to assist with insurance verification — call us at (904) 448-0046.",
      },
      {
        q: "How often should I get a massage?",
        a: "Frequency depends on your goals and condition. For chronic pain or active injury recovery, weekly sessions are often recommended initially. For general wellness and maintenance, once or twice a month is typical. Your therapist will discuss the optimal schedule for your needs during your first session.",
      },
    ],
  },
  {
    id: "insurance-billing",
    heading: "Insurance & Billing",
    questions: [
      {
        q: "Do you accept insurance?",
        a: "Yes. We accept many major insurance plans for acupuncture services. Coverage varies by carrier and plan, so we recommend verifying your acupuncture benefits before your first visit. You can use our online insurance verification tool or call us directly at (904) 448-0046 and our team will help you understand your coverage.",
      },
      {
        q: "What insurance plans do you work with?",
        a: "We work with a wide range of carriers including Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Humana, and others. Because acupuncture coverage has expanded significantly in recent years — especially for chronic pain — we encourage you to check your current plan even if you've been told in the past that acupuncture was not covered.",
      },
      {
        q: "Do you offer payment plans or package pricing?",
        a: "Yes. We offer treatment packages at a reduced rate for patients who pre-purchase a series of visits. This is a great option for patients pursuing fertility programs, chronic pain treatment, or other conditions that benefit from consistent, ongoing care. Ask our front desk team for current package options.",
      },
      {
        q: "Can I use my HSA or FSA for acupuncture?",
        a: "Yes! Acupuncture and many massage therapy services qualify as eligible medical expenses under Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA). We can provide the appropriate documentation you may need for reimbursement.",
      },
    ],
  },
  {
    id: "clinic",
    heading: "About Our Clinic",
    questions: [
      {
        q: "Where are you located?",
        a: "We are located at 3840 Belfort Rd STE 305, Jacksonville, FL 32216 — in the Southside area, conveniently close to St. Vincent's Southside Hospital. Free parking is available on site.",
      },
      {
        q: "What are your hours?",
        a: "Our clinic hours vary by practitioner and service. The most up-to-date availability is shown in our online booking system. You can also call us at (904) 448-0046 during business hours for scheduling assistance.",
      },
      {
        q: "Who are your practitioners?",
        a: "Our team is led by Dr. Julee Miller, AP, DOM — a board-certified Acupuncture Physician with a Doctorate in Oriental Medicine and ABORM certification in reproductive acupuncture. She is joined by a team of licensed acupuncturists and certified massage therapists, each with specialized training in their area of practice. Meet the full team on our Our Team page.",
      },
      {
        q: "Is Health Pointe Jacksonville a good fit for me if I've never tried acupuncture?",
        a: "Absolutely. Many of our patients come to us with no prior acupuncture experience. Our team takes time to explain what you can expect, answer all your questions, and ensure you feel comfortable at every step. We also offer free 15-minute phone consultations to help you decide if our services are right for your needs.",
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap((cat) =>
  cat.questions.map((faq) => ({ question: faq.q, answer: faq.a }))
);

const SITE_URL = "https://hpjax.com";
const PAGE_URL = `${SITE_URL}/faq/`;

export default function FAQPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        name: "Frequently Asked Questions | Health Pointe Jacksonville",
        description:
          "Answers to common questions about acupuncture, massage therapy, insurance, and what to expect at Health Pointe Jacksonville.",
        url: PAGE_URL,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq/" },
        ]),
      },
      faqSchema(allFaqs),
      { ...localBusinessEntity },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <header
        aria-labelledby="faq-page-heading"
        className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden"
      >
        {/* TODO: Replace with client-provided hero image */}
        <div className="absolute inset-0 bg-teal-dark" aria-hidden="true" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1
            id="faq-page-heading"
            className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-4"
          >
            Frequently Asked Questions
          </h1>
          <p className="text-white/90 text-lg leading-relaxed">
            Everything you need to know before your first visit — and beyond.
          </p>
        </div>
      </header>

      {/* ── Intro ─────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-intro-heading" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="faq-intro-heading" className="section-heading mb-4">
              We&apos;re Here to Help
            </h2>
            <p className="text-ink-muted leading-relaxed mb-6">
              Whether you&apos;re curious about acupuncture for the first time or a returning patient with a specific question, this page covers the most common topics we hear from our Jacksonville patients. Can&apos;t find what you&apos;re looking for?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9044480046"
                className="btn-primary"
              >
                Call (904) 448-0046
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 border-2 border-teal-dark text-teal-dark font-body font-bold text-base px-6 py-3 rounded-md hover:bg-teal-dark hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
              >
                Send Us a Message
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Jump Links ────────────────────────────────────────────────────────── */}
      <nav aria-label="FAQ categories" className="bg-surface border-y border-surface-muted py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap gap-3 justify-center">
            {faqCategories.map((cat) => (
              <li key={cat.id}>
                <a
                  href={`#${cat.id}`}
                  className="inline-block text-sm font-semibold text-teal-dark bg-white border border-teal-dark rounded-full px-4 py-1.5 hover:bg-teal-dark hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
                >
                  {cat.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── FAQ Sections ──────────────────────────────────────────────────────── */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {faqCategories.map((cat, ci) => (
            <section key={cat.id} id={cat.id} aria-labelledby={`cat-heading-${cat.id}`} className="scroll-mt-24">
              <ScrollReveal delay={ci * 0.05}>
                <h2
                  id={`cat-heading-${cat.id}`}
                  className="section-heading mb-8"
                >
                  {cat.heading}
                </h2>
                <dl className="space-y-5">
                  {cat.questions.map(({ q, a }) => (
                    <div
                      key={q}
                      className="bg-surface rounded-2xl px-7 py-6 border border-surface-muted"
                    >
                      <dt className="font-heading font-semibold text-ink text-lg mb-3">{q}</dt>
                      <dd className="text-ink-muted leading-relaxed">{a}</dd>
                    </div>
                  ))}
                </dl>
              </ScrollReveal>
            </section>
          ))}
        </div>
      </div>

      {/* ── Address ───────────────────────────────────────────────────────────── */}
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

      {/* ── BookingCTA ────────────────────────────────────────────────────────── */}
      <BookingCTA
        heading="Ready to take the first step?"
        body="Our Jacksonville team is here to answer your questions and guide you toward better health. Book your first visit today."
        ctaLabel="Book an Appointment"
      />
    </>
  );
}

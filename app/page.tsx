import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import BookingCTA from "@/components/BookingCTA";
import InsuranceBanner from "@/components/InsuranceBanner";
import ScrollReveal from "@/components/ScrollReveal";
import VideoFacade from "@/components/VideoFacade";
import ContactForm from "@/components/ContactForm";
import { homepageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Fertility & Chronic Pain Acupuncture in Jacksonville, FL | Health Pointe Jacksonville",
  description:
    "Struggling with fertility, chronic pain, or women's health issues? Jacksonville's ABORM-certified acupuncture clinic. Real treatment plans. Real results. Health Pointe Jacksonville.",
  alternates: { canonical: "https://hpjax.com" },
  openGraph: {
    title: "Fertility & Chronic Pain Acupuncture in Jacksonville, FL | Health Pointe Jacksonville",
    description:
      "Struggling with fertility, chronic pain, or women's health issues? Jacksonville's ABORM-certified acupuncture clinic. Real treatment plans. Real results. Health Pointe Jacksonville.",
    url: "https://hpjax.com",
    images: [{ url: "/images/hero-home.webp", width: 848, height: 565, alt: "Patient receiving facial acupuncture at Health Pointe Jacksonville" }],
  },
};

// ─── What We Treat data ───────────────────────────────────────────────────────

const treatments = [
  {
    label: "Fertility",
    desc: "Male & Female Infertility, IVF/IUI support, Preconception Planning, Unexplained Infertility, Premature Ovarian Failure, Miscarriage and Pregnancy Loss, Pregnancy Care, Postpartum Care",
    href: "/services/fertility-acupuncture-jacksonville-fl-aborm-certified-dr-julee-miller/",
    img: "/images/fertility-pregnancy-acupuncture-jacksonville-fl.png",
    alt: "Fertility acupuncture — IVF support and preconception care at Health Pointe Jacksonville, FL",
  },
  {
    label: "Women's Health",
    desc: "PMS, Amenorrhea, Dysmenorrhea, Menopause Syndrome, Irregular Menstruation, PCOS, Ovarian Cysts, Migraine Headaches, Pelvic Issues, Hot Flashes, Anxiety",
    href: "/womens-health/",
    img: "/images/acupuncture-back-needles-treatment-jacksonville-fl.jpg",
    alt: "Women's health acupuncture — PCOS, menopause, and hormonal balance at Health Pointe Jacksonville, FL",
  },
  {
    label: "Muskuloskeletal",
    desc: "Arthritis, Back Pain, Neck Pain, Shoulder Pain, Elbow Pain, Carpal Tunnel Syndrome, Knee Pain, Sciatica, Sports Injuries, Tendonitis, TMJ",
    href: "/chronic-pain/",
    img: "/images/sports-acupuncture-rehabilitation-jacksonville-fl.webp",
    alt: "Musculoskeletal acupuncture — back pain, sciatica, and sports injuries at Health Pointe Jacksonville, FL",
  },
  {
    label: "Neurological",
    desc: "Headaches, Migraines, Facial Palsy, Multiple Sclerosis, Stroke Recovery, Tinnitus, Trigeminal Neuralgia, Vertigo, and many others",
    href: "/neurological-disorders/",
    img: "/images/craniosacral-acupuncture-head-massage-jacksonville-fl.jpg",
    alt: "Neurological acupuncture — migraines, stroke recovery, and tinnitus at Health Pointe Jacksonville, FL",
  },
  {
    label: "Digestive",
    desc: "Abdominal Pain, Colitis, Constipation, Indigestion, Bloating, Small Intestine Bacterial Overgrowth, Food Allergies, Irritable Bowel Syndrome (IBS), Nausea, Ulcers",
    href: "/contact/",
    img: "/images/womens-health-fertility-wellness-jacksonville-fl.jpg",
    alt: "Digestive health acupuncture — IBS, colitis, and bloating treatment at Health Pointe Jacksonville, FL",
  },
  {
    label: "Cosmetic Beauty",
    desc: "Fine Lines, Wrinkles, Acne, Sallow Complexion, Uneven Skin Tone, Scars, Cosmetic/Facial Acupuncture",
    href: "/services/cosmetic-facial-acupuncture/",
    img: "/images/cosmetic-acupuncture-facial-glow-jacksonville-fl.png",
    alt: "Cosmetic acupuncture — fine lines, wrinkles, and facial rejuvenation at Health Pointe Jacksonville, FL",
  },
  {
    label: "Emotional Imbalance",
    desc: "Stress, Anxiety, Hormonal Imbalances (PMS, Irritability), Sleep Issues, Depression, PTSD",
    href: "/contact/",
    img: "/images/womens-wellness-self-care-jacksonville-fl.jpg",
    alt: "Emotional balance acupuncture — stress, anxiety, and sleep treatment at Health Pointe Jacksonville, FL",
  },
  {
    label: "Other Conditions",
    desc: "Allergies, Asthma, Common Cold, Influenza, Sinusitis, Chronic Fatigue, Quit Smoking, Fibromyalgia, Autoimmune Disorders, Weight Management, and more…",
    href: "/contact/",
    img: "/images/healthy-active-family-beach-jacksonville-fl.jpg",
    alt: "Other health conditions treated with acupuncture at Health Pointe Jacksonville, FL",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema()) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative min-h-[580px] md:min-h-[640px] flex items-center overflow-hidden bg-ink"
      >
        <Image
          src="/images/hero-home.webp"
          alt="Patient receiving facial acupuncture treatment at Health Pointe Jacksonville"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-white text-xs font-semibold tracking-widest uppercase mb-5">
              <span className="text-primary" aria-hidden="true">★</span>
              Jacksonville&apos;s Top ABORM Certified Holistic Fertility Specialist
            </p>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6"
            >
              Jacksonville&apos;s premier acupuncture clinic
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-8">
              <Link
                href="/about/"
                className="font-semibold text-white underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal rounded-sm"
              >
                Our Mission
              </Link>{" "}
              is to transform lives for good. Health Pointe Jacksonville&apos;s Acupuncture&nbsp;+&nbsp;Wellness
              Clinic specializes in treating Women&apos;s Health and Infertility, chronic pain, and other
              difficult&#8209;to&#8209;treat medical issues in Jacksonville,&nbsp;FL.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book/" className="btn-primary text-base px-8 py-4">
                Book Now
              </Link>
              <Link
                href="/about/"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-ink font-body font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials section ───────────────────────────────────────────────── */}
      <section aria-labelledby="credentials-heading" className="bg-white py-16 border-b border-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 id="credentials-heading" className="text-2xl md:text-3xl font-heading font-bold text-teal-dark mb-3">
              Health Pointe Jacksonville Serving Northeast Florida
            </h2>
            <p className="text-ink-muted text-base max-w-2xl mx-auto mb-10">
              Our team has advanced training and expertise in women&apos;s health, fertility, prenatal acupuncture, and complex chronic pain conditions.
            </p>
          </ScrollReveal>
          <div className="flex flex-nowrap items-center justify-center gap-x-10">
            {[
              { src: "/images/credential-logo-aborm.jpg", alt: "ABORM — American Board of Oriental Reproductive Medicine certified", width: 160, height: 56 },
              { src: "/images/credential-logo-nccaom.png", alt: "NCCAOM — National Certification Commission for Acupuncture and Oriental Medicine", width: 160, height: 56 },
              { src: "/images/credential-logo-asrm.png", alt: "ASRM — American Society for Reproductive Medicine", width: 180, height: 56 },
              { src: "/images/credential-logo-fsoma.png", alt: "FSOMA — Florida State Oriental Medical Association", width: 160, height: 56 },
              { src: "/images/credential-logo-expertise-best-acupuncturist-jacksonville.png", alt: "Expertise.com — Best Acupuncturists in Jacksonville 2022", width: 400, height: 400 },
            ].map(({ src, alt, width, height }, i) => (
              <ScrollReveal key={src} delay={i * 0.1} direction="up">
                <div className="flex-shrink-0">
                  <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="h-14 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fertility spotlight ───────────────────────────────────────────────── */}
      <section aria-labelledby="fertility-heading" className="py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
          <div className="bg-teal-dark flex items-center order-2 lg:order-1">
            <div className="px-8 lg:px-16 py-16 max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              <ScrollReveal>
                <p className="text-teal text-xs font-bold uppercase tracking-widest mb-3">Women&apos;s Health</p>
                <h2 id="fertility-heading" className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight mb-4">
                  Jacksonville&apos;s fertility programs
                </h2>
                <p className="text-white leading-relaxed mb-6">
                  Our programs combine acupuncture and Traditional Chinese medicine along with functional medicine to optimize your fertility journey. We provide natural approaches for endometriosis, &amp; PCOS. Whether you are trying to conceive naturally, or already undergoing ART (Artificial Reproductive Technology) we are here to help!
                </p>
                <Link href="/services/fertility-acupuncture-jacksonville-fl-aborm-certified-dr-julee-miller/" className="btn-primary">
                  Explore Fertility Programs
                </Link>
              </ScrollReveal>
            </div>
          </div>
          <div className="relative min-h-[320px] order-1 lg:order-2">
            <Image
              src="/images/fertility-pregnancy-acupuncture-jacksonville-fl.webp"
              alt="Pregnant woman — fertility acupuncture programs led by ABORM-certified Dr. Julee Miller in Jacksonville, FL"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── Women's Health spotlight ──────────────────────────────────────────── */}
      <section aria-labelledby="womens-heading" className="py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
          <div className="relative min-h-[320px]">
            <Image
              src="/images/pelvic-floor-acupuncture-womens-health-jacksonville-fl.webp"
              alt="Pelvic floor acupuncture and women's health treatment at Health Pointe Jacksonville, FL"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="bg-surface flex items-center">
            <div className="px-8 lg:px-16 py-16 max-w-lg mx-auto lg:mx-0">
              <ScrollReveal>
                <p className="text-teal-dark text-xs font-bold uppercase tracking-widest mb-3">Pelvic Health</p>
                <h2 id="womens-heading" className="text-3xl md:text-4xl font-heading font-bold text-ink leading-tight mb-4">
                  Women&apos;s health &amp; pelvic floor treatments
                </h2>
                <p className="text-ink-muted leading-relaxed mb-6">
                  Regain confidence and control and return to a activities you enjoy with pelvic floor acupuncture treatment. Treating pelvic pain, bladder issues, post partum dysfunction and post-surgery recovery with personalized acupuncture care. Treatments may include acupuncture, dry needling, trigger point release, and therapeutic exercises. Whether post-pregnancy or managing an injury, our services support your recovery and strength.
                </p>
                <Link href="/womens-health/" className="btn-primary">
                  Women&apos;s Health Services
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Treat ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="treat-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 id="treat-heading" className="section-heading">What we treat</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Our specialized treatments support fertility, women&apos;s health, neurological conditions, chronic pain conditions, emotional balance, and more. We provide personalized care to restore balance and improve overall well-being.
            </p>
          </ScrollReveal>
          <div role="list" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {treatments.map((t, i) => (
              <ScrollReveal key={t.href + t.label} delay={i * 0.05} className="h-full">
                <div role="listitem" className="h-full">
                  <Link
                    href={t.href}
                    className="group relative block rounded-xl overflow-hidden aspect-[3/4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
                  >
                    <Image
                      src={t.img}
                      alt={t.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {/* Always-visible bottom label */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-heading font-bold text-sm md:text-base leading-tight">
                        {t.label}
                      </p>
                      <p aria-hidden="true" className="text-white/80 text-xs leading-snug mt-1 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-300">
                        {t.desc}
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="bg-teal-dark text-white text-xs font-semibold px-2 py-1 rounded-full">
                        Learn More
                      </span>
                    </div>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insurance ─────────────────────────────────────────────────────────── */}
      <InsuranceBanner />

      {/* ── Video section ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="video-heading" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 id="video-heading" className="section-heading">See how we help Jacksonville heal</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Watch how Health Pointe Jacksonville&apos;s integrative approach transforms lives through acupuncture and wellness care.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <VideoFacade
              youtubeId="tPjTG1cPqTM"
              title="Health Pointe Jacksonville — Acupuncture & Wellness Clinic, Jacksonville FL"
              thumbnail="/images/team-health-pointe-jacksonville-acupuncture-clinic.webp"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Voted Jacksonville FL Top Acupuncture Clinic ─────────────────────── */}
      <section aria-labelledby="voted-heading" className="relative overflow-hidden min-h-[400px] flex items-center">
        <Image
          src="/images/pain-free-active-woman-acupuncture-jacksonville-fl.webp"
          alt="Active woman smiling and pain-free after acupuncture treatment at Health Pointe Jacksonville, FL"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <h2 id="voted-heading" className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Voted Jacksonville FL top acupuncture clinic
            </h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-8">
              Let us help you feel your best, naturally. Decrease chronic pain and strengthen your immune system with acupuncture so you get back to enjoying life&apos;s moments.
            </p>
            <Link href="/about/" className="btn-primary text-base px-8 py-4" aria-label="Learn more about Health Pointe Jacksonville">
              Learn More
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Massage spotlight ─────────────────────────────────────────────────── */}
      <section aria-labelledby="massage-heading" className="py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
          <div className="relative min-h-[280px]">
            <Image
              src="/images/massage-therapy-back-treatment-jacksonville-fl.jpg"
              alt="Woman enjoying massage therapy treatment at Health Pointe Jacksonville, FL"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="bg-surface flex items-center">
            <div className="px-8 lg:px-16 py-12 max-w-lg mx-auto lg:mx-0">
              <ScrollReveal>
                <p className="text-teal-dark text-xs font-bold uppercase tracking-widest mb-3">Therapeutic Services</p>
                <h2 id="massage-heading" className="text-3xl md:text-4xl font-heading font-bold text-ink leading-tight mb-4">
                  Massage therapy
                </h2>
                <p className="text-ink-muted leading-relaxed mb-6">
                  Massage is no longer just a luxury. It&apos;s a way to a healthier, happier life. Looking for more relaxation and less pain? What if you could also alleviate headaches, ease anxiety, and improve immune function all at the same time?
                </p>
                <Link href="/services/massage-therapy-jacksonville/" className="btn-primary" aria-label="Learn more about massage therapy at Health Pointe Jacksonville">
                  Learn More
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────────────── */}
      <section aria-labelledby="contact-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* NAP + directions — no iframe, no API cost, no CLS */}
            <ScrollReveal>
              <div>
                <p className="text-teal-dark text-xs font-bold uppercase tracking-widest mb-3">Get In Touch</p>
                <h2 id="contact-heading" className="text-3xl md:text-4xl font-heading font-bold text-ink mb-6">
                  Questions before getting started? Get in touch.
                </h2>
                <p className="text-ink-muted mb-8 leading-relaxed">
                  We&apos;re here to answer your questions and guide you toward the care that&apos;s right for you.
                </p>
                <div className="space-y-4 text-ink-muted mb-8">
                  <p className="flex gap-3 text-sm">
                    <span className="text-teal-dark mt-0.5 flex-shrink-0" aria-hidden="true">📍</span>
                    <span>
                      <strong className="text-ink block">Health Pointe Jacksonville</strong>
                      3840 Belfort Road #305<br />Jacksonville, FL 32216
                    </span>
                  </p>
                  <p className="flex gap-3 text-sm">
                    <span className="text-teal-dark mt-0.5 flex-shrink-0" aria-hidden="true">📞</span>
                    <a href="tel:9044480046" className="text-teal-dark font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded-sm">
                      (904) 448-0046
                    </a>
                  </p>
                  <p className="flex gap-3 text-sm">
                    <span className="text-teal-dark mt-0.5 flex-shrink-0" aria-hidden="true">✉</span>
                    <a href="mailto:hello@hpjax.com" className="text-teal-dark font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded-sm">
                      hello@hpjax.com
                    </a>
                  </p>
                  <p className="flex gap-3 text-sm">
                    <span className="text-teal-dark mt-0.5 flex-shrink-0" aria-hidden="true">🕐</span>
                    <span>
                      Mon 10am–6pm · Tue–Thu 9am–6pm · Fri 9am–2pm
                    </span>
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/place/Health+Pointe+Jacksonville+Acupuncture+%2B+Wellness+Clinic/@30.2593339,-81.5826583,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex"
                >
                  Get Directions
                </a>
              </div>
            </ScrollReveal>

            {/* Contact form */}
            <ScrollReveal delay={0.1}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────────── */}
      <TestimonialCarousel />

      {/* ── Blog preview ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="blog-heading" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex items-end justify-between mb-10">
            <div>
              <h2 id="blog-heading" className="section-heading mb-1">From the blog</h2>
              <p className="text-ink-muted text-sm">Acupuncture insights from Dr. Julee Miller &amp; the Health Pointe Jacksonville team</p>
            </div>
            <Link href="/blog/" className="text-teal-dark font-semibold text-sm hover:underline hidden sm:block flex-shrink-0">
              All Articles →
            </Link>
          </ScrollReveal>

          {/* Featured post — large */}
          <ScrollReveal className="mb-6">
            <Link
              href="/blog/"
              className="group relative block rounded-2xl overflow-hidden aspect-[16/7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
            >
              <Image
                src="/images/blog-featured-freedom-wellness-jacksonville-fl.webp"
                alt="Horse running free on beach — wellness and vitality blog post by Health Pointe Jacksonville"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <p className="text-teal text-xs font-bold uppercase tracking-widest mb-2">Latest Post</p>
                <h3 className="text-white font-heading font-bold text-xl md:text-3xl leading-tight max-w-2xl">
                  End-of-Year Reset: What We&apos;re Shedding, What We&apos;re Ready For, and How to Prepare Your Health
                </h3>
                <p className="text-white/70 text-sm mt-2 group-hover:text-white/90 transition-colors">
                  Read Article →
                </p>
              </div>
            </Link>
          </ScrollReveal>

          {/* Smaller post cards — will pull from WP API when connected */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Acupuncture for Fertility: What the Research Says", img: "/images/fertility-pregnancy-acupuncture-jacksonville-fl.png", alt: "Fertility acupuncture research and treatment at Health Pointe Jacksonville" },
              { title: "Grateful and Well: A Thanksgiving Wellness Reset", img: "/images/womens-wellness-self-care-jacksonville-fl.jpg", alt: "Woman practicing wellness and self-care — Health Pointe Jacksonville blog" },
              { title: "Active Recovery: How Acupuncture Helps Jacksonville Athletes", img: "/images/healthy-active-family-beach-jacksonville-fl.jpg", alt: "Healthy active family on Jacksonville beach — sports acupuncture and wellness" },
            ].map(({ title, img, alt }) => (
              <ScrollReveal key={title}>
                <Link
                  href="/blog/"
                  className="group block rounded-xl overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={img}
                      alt={alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="py-3">
                    <h3 className="text-ink font-heading font-semibold text-sm leading-snug group-hover:text-teal-dark transition-colors">
                      {title}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Book CTA ──────────────────────────────────────────────────────────── */}
      <BookingCTA
        heading="Questions before getting started? Get in touch."
        body="We're here to answer your questions and guide you toward the care that's right for you."
        ctaLabel="Schedule Your Appointment"
      />
    </>
  );
}

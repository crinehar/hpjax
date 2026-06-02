import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import LazyContactForm from "@/components/LazyContactForm";
import { localBusinessEntity, breadcrumbSchema } from "@/lib/schema";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://hpjax.com/contact/#webpage",
      name: "Contact Health Pointe Jacksonville | Jacksonville, FL",
      description:
        "Contact Health Pointe Jacksonville to book acupuncture or massage by appointment. 3840 Belfort Rd #305, Jacksonville, FL 32216. Call (904) 448-0046 today.",
      url: "https://hpjax.com/contact/",
      isPartOf: { "@id": "https://hpjax.com/#business" },
      breadcrumb: breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact/" },
      ]),
    },
    localBusinessEntity,
  ],
};

export const metadata: Metadata = {
  title: "Contact Health Pointe Jacksonville | Jacksonville, FL",
  description:
    "Contact Health Pointe Jacksonville to book acupuncture or massage by appointment. 3840 Belfort Rd #305, Jacksonville, FL 32216. Call (904) 448-0046 today.",
  alternates: { canonical: "https://hpjax.com/contact" },
  openGraph: {
    title: "Contact Health Pointe Jacksonville | Jacksonville, FL",
    description:
      "Contact Health Pointe Jacksonville to book acupuncture or massage by appointment. 3840 Belfort Rd #305, Jacksonville, FL 32216. Call (904) 448-0046 today.",
    images: [{ url: "https://hpjax.com/images/contact-health-pointe-jacksonville-acupuncture-massage.jpg", width: 829, height: 600, alt: "Health Pointe Jacksonville acupuncture and massage treatment room" }],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Preconnect to form domain so it loads faster when it enters view */}
      <link rel="preconnect" href="https://api.leadconnectorhq.com" />
      <link rel="dns-prefetch" href="https://link.msgsndr.com" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <header aria-labelledby="contact-heading" className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/contact-health-pointe-jacksonville-acupuncture-massage.jpg"
          alt="Health Pointe Jacksonville acupuncture and massage treatment room"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1
            id="contact-heading"
            className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-3"
          >
            Contact
          </h1>
          <p className="text-white text-base md:text-lg font-medium">
            Serving Acupuncture &amp; Massage Therapies in the greater Jacksonville, FL area for 17 years (and counting!)
          </p>
        </div>
      </header>

      {/* ── Intro ───────────────────────────────────────────────────────────── */}
      <section aria-labelledby="intro-heading" className="py-16 bg-white text-center border-b border-surface-muted">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="intro-heading" className="section-heading mb-4">
              Contact Us to Start Your Healing Journey
            </h2>
            <p className="text-ink-muted leading-relaxed">
              We are always thrilled to hear from you. Please feel free to call our office directly if you ever have any questions regarding your{" "}
              <Link
                href="/services/"
                className="text-teal-dark underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
              >
                treatment
              </Link>{" "}
              with us. Our amazing patient coordinators are very knowledgeable and always happy to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Main content ────────────────────────────────────────────────────── */}
      <section aria-label="Contact information and form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 xl:gap-20">

            {/* ── Left: info ──────────────────────────────────────────────── */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <dl className="space-y-6 text-ink-muted text-sm">
                  <div>
                    <dt className="font-semibold text-ink mb-1">Address</dt>
                    <dd>
                      <address className="not-italic leading-relaxed">
                        3840 Belfort Rd STE 305<br />
                        Jacksonville, FL 32216
                      </address>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink mb-1">Phone</dt>
                    <dd>
                      <a
                        href="tel:9044480046"
                        className="text-teal-dark hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
                      >
                        (904) 448-0046
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink mb-1">Hours</dt>
                    <dd className="leading-relaxed">
                      Monday: 10:00 am – 6:00 pm<br />
                      Tuesday – Thursday: 9:00 am – 6:00 pm<br />
                      Friday: 9:00 am – 2:00 pm
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink mb-1">Email</dt>
                    <dd>
                      <a
                        href="mailto:hello@hpjax.com"
                        className="text-teal-dark hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
                      >
                        hello@hpjax.com
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 flex flex-col gap-3">
                  <a href="https://healthpointejacksonville.acubliss.app/portal/booking/" target="_blank" rel="noopener noreferrer" aria-label="Book an Appointment (opens in new tab)" className="btn-primary text-center">
                    Book an Appointment
                  </a>
                  <a href="tel:9044480046" className="btn-secondary text-center">
                    (904) 448-0046
                  </a>
                </div>

              </ScrollReveal>
            </div>

            {/* ── Right: iframe form ──────────────────────────────────────── */}
            <div className="lg:col-span-2">
              <LazyContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Address block ───────────────────────────────────────────────────── */}
      <section aria-label="Clinic location" className="py-12 bg-white text-center border-t border-surface-muted">
        <address className="not-italic text-ink-muted text-sm leading-relaxed">
          <strong className="text-ink font-semibold">Health Pointe Jacksonville</strong><br />
          3840 Belfort Rd STE 305, Jacksonville, FL 32216<br />
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

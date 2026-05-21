import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Health Pointe Jacksonville at 904-448-0046 or visit us at 3840 Belfort Rd STE 305, Jacksonville FL 32216.",
  alternates: { canonical: "https://hpjax.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        heading="Get In Touch"
        subheading="Questions about our services, insurance, or scheduling? We'd love to hear from you."
        ctaLabel="Call Us Now"
        ctaHref="tel:9044480046"
      />

      <section aria-labelledby="contact-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <ScrollReveal>
              <h2 id="contact-heading" className="section-heading">Contact Information</h2>
              <dl className="space-y-6 text-ink-muted">
                <div>
                  <dt className="font-semibold text-ink mb-1">Address</dt>
                  <dd>
                    <address className="not-italic">
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
                      className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                    >
                      (904) 448-0046
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink mb-1">Hours</dt>
                  <dd>Monday – Friday: By appointment</dd>
                </div>
              </dl>

              {/* Map placeholder */}
              <div
                className="mt-8 h-64 bg-surface-muted rounded-xl flex items-center justify-center border border-surface-muted"
                aria-label="Map placeholder — Google Maps embed goes here"
              >
                <p className="text-ink-subtle text-sm">Map embed coming soon</p>
              </div>
            </ScrollReveal>

            {/* Contact form */}
            <ScrollReveal delay={0.1}>
              <h2 className="section-heading">Send Us a Message</h2>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

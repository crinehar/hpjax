import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import BookingCTA from "@/components/BookingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Health Pointe Jacksonville — our mission, values, and commitment to integrative acupuncture wellness care in Jacksonville, FL.",
  alternates: { canonical: "https://hpjax.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        heading="About Health Pointe Jacksonville"
        subheading="Rooted in tradition. Guided by science. Committed to your wellness."
        ctaLabel="Meet Our Team"
        ctaHref="/our-team"
      />

      <section aria-labelledby="mission-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="mission-heading" className="section-heading">Our Mission</h2>
            <p className="text-ink-muted leading-relaxed mb-6">
              At Health Pointe Jacksonville, we believe that optimal health is achieved when the body, mind, and spirit are in balance. Founded with a commitment to providing exceptional integrative care, our clinic has served the Jacksonville community with compassion and clinical excellence.
            </p>
            <p className="text-ink-muted leading-relaxed mb-6">
              Our licensed practitioners blend the time-tested wisdom of Traditional Chinese Medicine with the latest evidence-based research to create personalized treatment plans that address the root cause of your concerns — not just the symptoms.
            </p>
            <p className="text-ink-muted leading-relaxed">
              Whether you&apos;re seeking relief from chronic pain, support through your fertility journey, or simply looking to optimize your wellbeing, we&apos;re here to walk alongside you every step of the way.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}

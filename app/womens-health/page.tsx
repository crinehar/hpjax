import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import BookingCTA from "@/components/BookingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Women’s Health",
  description: "Specialized acupuncture and wellness care for women at every stage of life — from fertility to menopause at Health Pointe Jacksonville.",
  alternates: { canonical: "https://hpjax.com/womens-health" },
};

const services = [
  { title: "Fertility Support", description: "Integrative acupuncture for natural conception and IVF support.", href: "/services/fertility" },
  { title: "Pelvic Floor Therapy", description: "Non-invasive treatment for pelvic pain, incontinence, and prolapse.", href: "/services/pelvic-floor" },
  { title: "Menstrual Health", description: "Address irregular cycles, painful periods, endometriosis, and PCOS.", href: "/services/acupuncture" },
  { title: "Prenatal & Postpartum", description: "Safe, evidence-based care throughout pregnancy and recovery.", href: "/services/acupuncture" },
];

export default function WomensHealthPage() {
  return (
    <>
      <HeroSection
        heading="Women's Health at Every Stage"
        subheading="From your first period to menopause and beyond — we offer integrative, compassionate care tailored specifically for women's health."
        ctaLabel="Book a Consultation"
        ctaHref="/book"
      />

      <section aria-labelledby="womens-services-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 id="womens-services-heading" className="section-heading">Women&apos;s Health Services</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Our licensed practitioners specialize in women&apos;s health across all life stages.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.href + s.title} delay={i * 0.1}>
                <ServiceCard {...s} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA heading="Ready to Feel Your Best?" body="Schedule a women's health consultation with one of our specialists." />
    </>
  );
}

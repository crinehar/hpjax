import HeroSection from "@/components/HeroSection";
import BookingCTA from "@/components/BookingCTA";
import ScrollReveal from "@/components/ScrollReveal";

interface Condition {
  label: string;
}

interface ServicePageTemplateProps {
  title: string;
  tagline: string;
  description: string;
  conditions?: Condition[];
  whatToExpect?: string;
}

export default function ServicePageTemplate({
  title,
  tagline,
  description,
  conditions = [],
  whatToExpect,
}: ServicePageTemplateProps) {
  return (
    <>
      <HeroSection
        heading={title}
        subheading={tagline}
        ctaLabel="Book a Consultation"
        ctaHref="/book"
        secondaryCtaLabel="View All Services"
        secondaryCtaHref="/#services-heading"
      />

      <section aria-labelledby="service-description-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="service-description-heading" className="section-heading">{title}</h2>
            <p className="text-ink-muted leading-relaxed text-lg mb-8">{description}</p>
          </ScrollReveal>

          {conditions.length > 0 && (
            <ScrollReveal delay={0.1}>
              <h3 className="font-heading font-bold text-ink text-xl mb-4">Conditions We Treat</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" aria-label={`Conditions treated with ${title}`}>
                {conditions.map((c) => (
                  <li key={c.label} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="text-secondary mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                    {c.label}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          )}

          {whatToExpect && (
            <ScrollReveal delay={0.2} className="mt-10">
              <h3 className="font-heading font-bold text-ink text-xl mb-4">What to Expect</h3>
              <p className="text-ink-muted leading-relaxed">{whatToExpect}</p>
            </ScrollReveal>
          )}
        </div>
      </section>

      <BookingCTA />
    </>
  );
}

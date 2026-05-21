import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import BookingCTA from "@/components/BookingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what patients are saying about Health Pointe Jacksonville — real stories of healing and wellness.",
  alternates: { canonical: "https://hpjax.com/testimonials" },
};

const testimonials = [
  { name: "Sarah M.", service: "Chronic Pain", quote: "After years of chronic pain, I finally found lasting relief through acupuncture at Health Pointe. The team truly listens and cares." },
  { name: "James R.", service: "Sports", quote: "I was back on the field in record time after my sports injury. The treatment plan was thorough and effective." },
  { name: "Maria T.", service: "Fertility", quote: "The compassionate fertility support I received gave us hope and helped us start our family. We're forever grateful." },
  { name: "Linda K.", service: "Pelvic Floor", quote: "I wish I had found this clinic sooner. The pelvic floor therapy changed my daily quality of life completely." },
  { name: "David W.", service: "Neurological", quote: "The neurological rehab program helped my neuropathy symptoms dramatically. Highly recommend to anyone with nerve pain." },
  { name: "Angela B.", service: "Acupuncture", quote: "I come in for monthly wellness tune-ups and always leave feeling balanced and energized. Fantastic practitioners." },
];

export default function TestimonialsPage() {
  return (
    <>
      <HeroSection
        heading="Patient Stories"
        subheading="Real experiences from real patients. Healing is possible — and these stories prove it."
        ctaLabel="Start Your Journey"
        ctaHref="/book"
      />

      <section aria-labelledby="testimonials-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 id="testimonials-heading" className="section-heading">What Our Patients Say</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <article className="bg-surface rounded-xl border border-surface-muted p-6 h-full flex flex-col">
                  <div className="flex mb-3" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="flex-1">
                    <p className="text-ink-muted text-sm leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                    <footer>
                      <cite className="not-italic font-heading font-bold text-ink text-sm">{t.name}</cite>
                      <span className="block text-xs text-primary mt-0.5">{t.service} Patient</span>
                    </footer>
                  </blockquote>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}

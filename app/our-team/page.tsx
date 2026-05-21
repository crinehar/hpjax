import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import BookingCTA from "@/components/BookingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the licensed acupuncturists and wellness practitioners at Health Pointe Jacksonville.",
  alternates: { canonical: "https://hpjax.com/our-team" },
};

const teamMembers = [
  {
    name: "Placeholder Practitioner",
    title: "Licensed Acupuncturist, Dipl. Ac.",
    bio: "Board-certified by NCCAOM with specialized training in fertility and women's health acupuncture.",
  },
  {
    name: "Placeholder Practitioner",
    title: "Licensed Acupuncturist, FABORM",
    bio: "Fellow of the American Board of Oriental Reproductive Medicine, specializing in integrative fertility support.",
  },
];

export default function OurTeamPage() {
  return (
    <>
      <HeroSection
        heading="Meet Our Team"
        subheading="Board-certified practitioners dedicated to your health and healing."
        ctaLabel="Book with Our Team"
        ctaHref="/book"
      />

      <section aria-labelledby="team-heading" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 id="team-heading" className="section-heading">Our Practitioners</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Every member of our team is Florida-licensed, nationally board-certified, and passionate about integrative wellness.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <article className="bg-white rounded-xl border border-surface-muted overflow-hidden shadow-sm">
                  <div className="h-64 bg-surface-muted flex items-center justify-center" aria-label="Team member photo placeholder">
                    <svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-ink text-xl mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-semibold mb-3">{member.title}</p>
                    <p className="text-ink-muted text-sm leading-relaxed">{member.bio}</p>
                  </div>
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

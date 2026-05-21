import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Schedule your acupuncture or wellness appointment online with Health Pointe Jacksonville.",
  alternates: { canonical: "https://hpjax.com/book" },
};

export default function BookPage() {
  return (
    <section aria-labelledby="book-heading" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h1 id="book-heading" className="section-heading">Book Your Appointment</h1>
          <p className="section-subheading max-w-xl mx-auto">
            Schedule online in minutes. Select your practitioner, service, and preferred time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-ink-muted">
            <span>📍 3840 Belfort Rd STE 305, Jacksonville FL 32216</span>
            <span>📞 <a href="tel:9044480046" className="text-primary hover:underline">(904) 448-0046</a></span>
          </div>
        </ScrollReveal>

        <div className="w-full rounded-xl overflow-hidden border border-surface-muted shadow-sm" style={{ minHeight: "800px" }}>
          <iframe
            src="https://healthpointejacksonville.acubliss.app/portal/booking/"
            title="Book an appointment with Health Pointe Jacksonville"
            className="w-full"
            style={{ minHeight: "800px", border: "none" }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

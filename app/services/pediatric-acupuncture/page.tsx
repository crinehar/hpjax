import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Pediatric Acupuncture",
  description: "Safe, gentle acupuncture for children and adolescents at Health Pointe Jacksonville. Non-needle options available.",
  alternates: { canonical: "https://hpjax.com/services/pediatric" },
};

export default function PediatricPage() {
  return (
    <ServicePageTemplate
      title="Pediatric Acupuncture"
      tagline="Gentle, effective care for children of all ages."
      description="Pediatric acupuncture is a safe, gentle, and effective treatment for children. We use age-appropriate techniques including shonishin (non-insertive Japanese style), laser acupuncture, and pediatric tui na massage. Needles are used only when appropriate for the child's age and comfort."
      conditions={[
        { label: "Digestive issues (colic, reflux, constipation)" },
        { label: "Allergies and asthma" },
        { label: "ADHD and focus support" },
        { label: "Anxiety and emotional regulation" },
        { label: "Growing pains" },
        { label: "Recurrent ear infections" },
        { label: "Bedwetting (enuresis)" },
        { label: "Immune system support" },
      ]}
      whatToExpect="Pediatric sessions are tailored to the child's age, temperament, and condition. Sessions are typically shorter (20–30 min) and may involve parents in the room. We prioritize building trust and comfort with young patients. Non-needle techniques are available for children who prefer them."
    />
  );
}

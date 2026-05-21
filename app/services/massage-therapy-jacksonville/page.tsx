import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Massage Therapy",
  description: "Therapeutic massage including Chinese tui na, deep tissue, and Swedish massage at Health Pointe Jacksonville.",
  alternates: { canonical: "https://hpjax.com/services/massage" },
};

export default function MassagePage() {
  return (
    <ServicePageTemplate
      title="Massage Therapy"
      tagline="Restore, relax, and recover with therapeutic touch."
      description="Our massage therapy offerings combine traditional Chinese tui na techniques with Western therapeutic massage modalities. Whether you're seeking deep tissue work for chronic muscle tension or a relaxation session to decompress, our therapists tailor each session to your needs."
      conditions={[
        { label: "Muscle tension and tightness" },
        { label: "Stress and anxiety" },
        { label: "Sports recovery" },
        { label: "Postural imbalances" },
        { label: "Headaches and neck pain" },
        { label: "Lymphatic drainage" },
        { label: "Pre/postnatal massage" },
        { label: "General relaxation and wellness" },
      ]}
      whatToExpect="Sessions are available in 60 or 90-minute increments. Your therapist will consult with you beforehand to understand your goals and any areas of concern. Pressure and technique are adjusted throughout to ensure comfort. Massage is often combined with acupuncture for enhanced therapeutic effect."
    />
  );
}

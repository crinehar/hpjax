import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Ozone (O3) Therapy",
  description: "Medical ozone therapy at Health Pointe Jacksonville for immune support, pain, and anti-aging.",
  alternates: { canonical: "https://hpjax.com/services/o3-therapy" },
};

export default function O3TherapyPage() {
  return (
    <ServicePageTemplate
      title="Ozone (O3) Therapy"
      tagline="Harness the healing power of medical ozone."
      description="Medical ozone therapy uses a precisely concentrated form of oxygen (O3) to stimulate the immune system, fight pathogens, reduce inflammation, and promote tissue regeneration. It is used as an adjunct therapy for a range of chronic conditions and as an anti-aging intervention."
      conditions={[
        { label: "Chronic infections and immune dysfunction" },
        { label: "Lyme disease and co-infections" },
        { label: "Joint pain and osteoarthritis" },
        { label: "Chronic fatigue syndrome" },
        { label: "Oxidative stress and detoxification" },
        { label: "Dental and oral health support" },
        { label: "Wound healing" },
        { label: "Anti-aging and longevity" },
      ]}
      whatToExpect="Ozone therapy is administered in multiple forms depending on your condition and goals: ear insufflation, rectal insufflation, ozonated oil application, or prolozone joint injections. All procedures are performed in a clean clinical environment by trained practitioners."
    />
  );
}

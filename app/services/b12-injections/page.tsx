import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "B12 Injections",
  description: "Vitamin B12 injections for energy, mood, and neurological health at Health Pointe Jacksonville.",
  alternates: { canonical: "https://hpjax.com/services/b12" },
};

export default function B12Page() {
  return (
    <ServicePageTemplate
      title="B12 Injections"
      tagline="Energy, clarity, and vitality — delivered directly."
      description="Vitamin B12 (methylcobalamin) injections bypass the digestive system for superior absorption compared to oral supplements. B12 is essential for red blood cell production, neurological function, DNA synthesis, and energy metabolism. Many people are deficient without knowing it."
      conditions={[
        { label: "Chronic fatigue and low energy" },
        { label: "Brain fog and poor concentration" },
        { label: "Depression and mood changes" },
        { label: "Vegetarian / vegan diet (at-risk for deficiency)" },
        { label: "Neuropathy and tingling sensations" },
        { label: "Post-bariatric surgery" },
        { label: "Pernicious anemia" },
        { label: "General wellness and anti-aging" },
      ]}
      whatToExpect="B12 injections are quick, low-discomfort procedures taking just a few minutes. Methylcobalamin is the preferred bioactive form we use. A typical protocol is weekly injections for one month, then monthly maintenance. Many patients report noticeable energy improvements within 24–72 hours of their first injection."
    />
  );
}

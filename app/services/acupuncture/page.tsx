import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Acupuncture",
  description: "Evidence-based acupuncture for pain, stress, sleep, and overall wellness at Health Pointe Jacksonville.",
  alternates: { canonical: "https://hpjax.com/services/acupuncture" },
};

export default function AcupuncturePage() {
  return (
    <ServicePageTemplate
      title="Acupuncture"
      tagline="Ancient wisdom. Modern evidence. Real results."
      description="Acupuncture is one of the oldest and most researched forms of medicine in the world. By stimulating specific points on the body, we restore the flow of qi, reduce inflammation, regulate the nervous system, and activate the body's natural healing mechanisms."
      conditions={[
        { label: "Chronic and acute pain" },
        { label: "Stress and anxiety" },
        { label: "Sleep disorders" },
        { label: "Digestive issues" },
        { label: "Immune system support" },
        { label: "Hormonal balance" },
        { label: "Headaches and migraines" },
        { label: "General wellness maintenance" },
      ]}
      whatToExpect="Your first acupuncture session includes an intake, tongue and pulse diagnosis, and a personalized treatment. Ultra-thin, sterile needles are placed at precise points and retained for 20–30 minutes while you rest comfortably. Most patients feel deeply relaxed during and after treatment."
    />
  );
}

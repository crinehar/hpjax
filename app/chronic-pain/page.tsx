import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Chronic Pain Treatment",
  description: "Effective acupuncture for chronic pain conditions including fibromyalgia, arthritis, and neuropathy at Health Pointe Jacksonville.",
  alternates: { canonical: "https://hpjax.com/services/chronic-pain" },
};

export default function ChronicPainPage() {
  return (
    <ServicePageTemplate
      title="Chronic Pain Treatment"
      tagline="Find lasting relief without dependency."
      description="Chronic pain affects your quality of life, sleep, and mental health. Our acupuncture approach addresses the root cause of pain by reducing neuroinflammation, regulating pain signaling pathways, and promoting tissue healing — providing lasting relief rather than masking symptoms."
      conditions={[
        { label: "Fibromyalgia" },
        { label: "Arthritis (osteo and rheumatoid)" },
        { label: "Back pain (lumbar and cervical)" },
        { label: "Neuropathy and nerve pain" },
        { label: "Sciatica" },
        { label: "Migraines and tension headaches" },
        { label: "Temporomandibular joint (TMJ) pain" },
        { label: "Complex regional pain syndrome" },
      ]}
      whatToExpect="Chronic pain treatment is typically a course of 8–12 sessions, with many patients reporting significant improvement by session 4–6. We track your pain scores and functional outcomes at each visit and adjust your protocol accordingly. Electroacupuncture and cupping may be incorporated for enhanced results."
    />
  );
}

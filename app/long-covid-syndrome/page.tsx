import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Long COVID Treatment",
  description: "Acupuncture and integrative care for Long COVID symptoms at Health Pointe Jacksonville — fatigue, brain fog, and more.",
  alternates: { canonical: "https://hpjax.com/services/long-covid" },
};

export default function LongCovidPage() {
  return (
    <ServicePageTemplate
      title="Long COVID Recovery"
      tagline="Rebuilding health after COVID-19."
      description="Long COVID — also called post-acute sequelae of SARS-CoV-2 (PASC) — affects an estimated 10–30% of COVID-19 survivors with symptoms that persist for months. Emerging research supports acupuncture as a complementary therapy to reduce systemic inflammation, restore energy, and improve neurological symptoms."
      conditions={[
        { label: "Persistent fatigue and post-exertional malaise" },
        { label: "Brain fog and cognitive impairment" },
        { label: "Shortness of breath and chest tightness" },
        { label: "POTS and dysautonomia" },
        { label: "Sleep dysfunction" },
        { label: "Anxiety and depression" },
        { label: "Smell and taste disorders (anosmia/parosmia)" },
        { label: "Joint and muscle pain" },
      ]}
      whatToExpect="Long COVID treatment is individualized based on your dominant symptoms. Treatment may include acupuncture, electroacupuncture, moxibustion, and lifestyle recommendations. We pace sessions carefully — starting slowly and building as your energy tolerance increases — to avoid post-exertional worsening."
    />
  );
}

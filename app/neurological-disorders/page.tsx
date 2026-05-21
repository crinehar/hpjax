import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Neurological Conditions",
  description: "Acupuncture for neurological conditions including neuropathy, stroke recovery, MS, and Parkinson's at Health Pointe Jacksonville.",
  alternates: { canonical: "https://hpjax.com/services/neurological" },
};

export default function NeurologicalPage() {
  return (
    <ServicePageTemplate
      title="Neurological Conditions"
      tagline="Supporting brain and nerve health through integrative care."
      description="Neurological acupuncture draws on the body's capacity for neuroplasticity — the brain's ability to reorganize and heal. We use scalp acupuncture and body acupuncture techniques to support nerve regeneration, improve motor function, and address neurological symptoms."
      conditions={[
        { label: "Peripheral neuropathy" },
        { label: "Post-stroke rehabilitation" },
        { label: "Multiple sclerosis (MS) symptom management" },
        { label: "Parkinson's disease" },
        { label: "Bell's palsy" },
        { label: "Trigeminal neuralgia" },
        { label: "Post-concussion syndrome" },
        { label: "Restless leg syndrome" },
      ]}
      whatToExpect="Neurological cases receive a detailed neurological intake and specialized scalp acupuncture protocol in addition to body acupuncture. Sessions are typically 45–60 minutes. We work collaboratively with your neurologist or physiatrist and can provide treatment notes upon request."
    />
  );
}

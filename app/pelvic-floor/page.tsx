import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Pelvic Floor Therapy",
  description: "Non-invasive pelvic floor acupuncture and therapy at Health Pointe Jacksonville for pain, incontinence, and postpartum recovery.",
  alternates: { canonical: "https://hpjax.com/services/pelvic-floor" },
};

export default function PelvicFloorPage() {
  return (
    <ServicePageTemplate
      title="Pelvic Floor Therapy"
      tagline="Restore strength, comfort, and confidence."
      description="Pelvic floor dysfunction affects millions of people and is often undertreated. Our practitioners use acupuncture, electroacupuncture, and integrative techniques to address pelvic pain, weakness, and dysfunction without invasive procedures."
      conditions={[
        { label: "Pelvic pain and pressure" },
        { label: "Urinary incontinence" },
        { label: "Interstitial cystitis" },
        { label: "Postpartum recovery" },
        { label: "Painful intercourse (dyspareunia)" },
        { label: "Pelvic organ prolapse support" },
        { label: "Tailbone (coccyx) pain" },
        { label: "Post-surgical recovery" },
      ]}
      whatToExpect="Sessions begin with a thorough health history focused on pelvic and urological health. Treatment combines acupuncture points on the lower back, abdomen, and extremities to regulate pelvic nerve function and circulation. Most patients notice improvement within 4–6 sessions."
    />
  );
}

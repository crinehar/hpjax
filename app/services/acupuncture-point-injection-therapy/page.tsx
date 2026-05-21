import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Injection Therapy",
  description: "Biopuncture, trigger point injections, and prolotherapy at Health Pointe Jacksonville for pain and healing.",
  alternates: { canonical: "https://hpjax.com/services/injection-therapy" },
};

export default function InjectionTherapyPage() {
  return (
    <ServicePageTemplate
      title="Injection Therapy"
      tagline="Targeted healing at the source of your pain."
      description="Injection therapy — including biopuncture, trigger point injections, and homeopathic injections — delivers healing compounds directly to injured or painful tissues. These minimally invasive treatments reduce inflammation, break pain cycles, and accelerate tissue repair."
      conditions={[
        { label: "Trigger points and myofascial pain" },
        { label: "Tendinopathy and tendon injuries" },
        { label: "Ligament laxity" },
        { label: "Joint osteoarthritis" },
        { label: "Bursitis" },
        { label: "Scar tissue and adhesions" },
        { label: "Sports injuries" },
        { label: "Chronic back and neck pain" },
      ]}
      whatToExpect="After an orthopedic and functional assessment, injection sites are identified based on your pain pattern. Injections use very fine needles and biocompatible solutions. You may experience mild soreness at injection sites for 24–48 hours, followed by progressive improvement over the following week."
    />
  );
}

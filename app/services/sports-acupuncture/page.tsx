import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Sports Acupuncture",
  description: "Sports acupuncture for athletes in Jacksonville — faster recovery, injury prevention, and peak performance at Health Pointe Jacksonville.",
  alternates: { canonical: "https://hpjax.com/services/sports" },
};

export default function SportsPage() {
  return (
    <ServicePageTemplate
      title="Sports Acupuncture"
      tagline="Recover faster. Perform better. Train harder."
      description="Sports acupuncture combines traditional acupuncture with orthopedic assessment, dry needling, myofascial release, and cupping to address athletic injuries, optimize recovery, and support peak performance. We treat recreational athletes and professionals alike."
      conditions={[
        { label: "Rotator cuff and shoulder injuries" },
        { label: "Knee pain and IT band syndrome" },
        { label: "Plantar fasciitis" },
        { label: "Runner's knee and jumper's knee" },
        { label: "Tennis and golfer's elbow" },
        { label: "Muscle strains and sprains" },
        { label: "Post-surgical rehabilitation" },
        { label: "Performance optimization" },
      ]}
      whatToExpect="Sports acupuncture sessions include orthopedic assessment and may combine multiple techniques: acupuncture, electroacupuncture, cupping, and gua sha. Sessions are active — you may be asked to move through ranges of motion during treatment to achieve maximum therapeutic effect."
    />
  );
}

import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Fertility Acupuncture",
  description: "Support natural conception and IVF outcomes with acupuncture at Health Pointe Jacksonville. ABORM-certified fertility specialists.",
  alternates: { canonical: "https://hpjax.com/services/fertility" },
};

export default function FertilityPage() {
  return (
    <ServicePageTemplate
      title="Fertility Acupuncture"
      tagline="Integrative support for your path to parenthood."
      description="Our ABORM-certified practitioners specialize in reproductive acupuncture to enhance fertility naturally and alongside IVF or IUI protocols. We work closely with your reproductive endocrinologist to provide evidence-based, complementary care."
      conditions={[
        { label: "Unexplained infertility" },
        { label: "IVF and IUI support" },
        { label: "PCOS and hormonal imbalance" },
        { label: "Recurrent miscarriage" },
        { label: "Low ovarian reserve" },
        { label: "Endometriosis" },
        { label: "Male factor infertility" },
        { label: "Embryo transfer preparation" },
      ]}
      whatToExpect="Your first visit includes a comprehensive intake covering your cycle history, reproductive health, and overall wellness. Treatment plans typically involve weekly sessions timed to your cycle phase. We coordinate with your fertility clinic and adjust protocols based on your treatment milestones."
    />
  );
}

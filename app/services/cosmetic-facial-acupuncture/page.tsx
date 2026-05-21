import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Cosmetic Acupuncture",
  description: "Natural facial rejuvenation with cosmetic acupuncture at Health Pointe Jacksonville. A drug-free alternative to Botox.",
  alternates: { canonical: "https://hpjax.com/services/cosmetic" },
};

export default function CosmeticPage() {
  return (
    <ServicePageTemplate
      title="Cosmetic Acupuncture"
      tagline="Radiant skin from the inside out."
      description="Cosmetic acupuncture — also called facial rejuvenation acupuncture — is a natural, non-toxic alternative to Botox and fillers. By stimulating collagen production, improving circulation, and toning facial muscles, it reduces fine lines, lifts sagging skin, and restores a youthful glow — while also improving your overall health."
      conditions={[
        { label: "Fine lines and wrinkles" },
        { label: "Loss of skin tone and elasticity" },
        { label: "Under-eye puffiness and dark circles" },
        { label: "Jaw tension and TMJ" },
        { label: "Acne and rosacea" },
        { label: "Uneven skin tone" },
        { label: "Facial paralysis (Bell's palsy)" },
      ]}
      whatToExpect="A full cosmetic acupuncture session lasts 60–75 minutes and includes both body and facial needling. A course of 10–12 weekly treatments is recommended for optimal results, with monthly maintenance thereafter. Facial gua sha and LED light therapy may be incorporated."
    />
  );
}

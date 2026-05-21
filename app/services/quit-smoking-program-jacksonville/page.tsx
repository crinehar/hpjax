import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Quit Smoking with Acupuncture",
  description: "Acupuncture-based smoking cessation program at Health Pointe Jacksonville. Reduce cravings naturally.",
  alternates: { canonical: "https://hpjax.com/services/quit-smoking" },
};

export default function QuitSmokingPage() {
  return (
    <ServicePageTemplate
      title="Quit Smoking Program"
      tagline="Natural support to break free from nicotine — for good."
      description="Our acupuncture-based smoking cessation program uses the NADA (National Acupuncture Detoxification Association) auricular protocol combined with body acupuncture to reduce cravings, ease withdrawal symptoms, and support the behavioral and emotional aspects of quitting."
      conditions={[
        { label: "Nicotine cravings" },
        { label: "Withdrawal symptoms" },
        { label: "Stress and anxiety during cessation" },
        { label: "Weight management during quitting" },
        { label: "Sleep disruption from withdrawal" },
        { label: "Vaping and e-cigarette cessation" },
      ]}
      whatToExpect="The program typically involves 1–2 sessions per week for the first 4 weeks, then tapering. Ear seeds or auricular press needles may be sent home between sessions to help manage cravings between appointments. Success rates improve significantly when combined with a commitment to quit and peer support."
    />
  );
}

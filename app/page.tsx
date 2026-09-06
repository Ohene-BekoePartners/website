import type { Metadata } from "next";
import { absoluteUrl } from "@/utils/seo";
import { SITE_URL } from "@/utils/site";
import { HeroSection } from "@/components/screens/home/HeroSection";
import { AboutSection } from "@/components/screens/home/AboutSection";
import { PracticeAreasSection } from "@/components/screens/home/PracticeAreasSection";
import { WhyUsSection } from "@/components/screens/home/WhyUsSection";
import { InsightsSection } from "@/components/screens/home/InsightsSection";
import { ClientsSection } from "@/components/screens/home/ClientsSection";
import { ContactSection } from "@/components/screens/home/ContactSection";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
  openGraph: { url: absoluteUrl("/") },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PracticeAreasSection />
      <WhyUsSection />
      <InsightsSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}

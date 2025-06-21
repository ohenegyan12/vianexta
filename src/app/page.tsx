'use client';

import HeroSection from "@/components/HeroSection";
import GlobalSection from "@/components/GlobalSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import SupplyChainSection from "@/components/SupplyChainSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FormanSection from "@/components/FormanSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GlobalSection />
      <WhyChooseSection />
      <SupplyChainSection />
      <TestimonialsSection />
      <FormanSection />
      <FAQSection />
    </main>
  );
}

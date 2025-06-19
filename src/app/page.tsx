'use client';

import NewsletterBanner from "@/components/NewsletterBanner";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GlobalSection from "@/components/GlobalSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import SupplyChainSection from "@/components/SupplyChainSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FormanSection from "@/components/FormanSection";
import FAQSection from "@/components/FAQSection";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <NewsletterBanner />
      <Navigation />
      <HeroSection />
      <GlobalSection />
      <WhyChooseSection />
      <SupplyChainSection />
      <TestimonialsSection />
      <FormanSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

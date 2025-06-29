import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import GlobalSection from "@/components/GlobalSection";
import SupplyChainSection from "@/components/SupplyChainSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BrandsSection from "@/components/BrandsSection";
import FAQSection from "@/components/FAQSection";
import FormanSection from "@/components/FormanSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <GlobalSection />
        <WhyChooseSection />
        <SupplyChainSection />
        <TestimonialsSection />
        <BrandsSection />
        <FAQSection />
        <FormanSection />
      </main>
      <Footer />
    </>
  );
}

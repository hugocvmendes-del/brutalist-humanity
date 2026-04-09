import FixedNav from "@/components/FixedNav";
import DotNav from "@/components/DotNav";
import HeroSection from "@/components/HeroSection";
import RisksSection from "@/components/RisksSection";
import CorporateSection from "@/components/CorporateSection";
import SuppliersSection from "@/components/SuppliersSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => (
  <div
    id="main-scroll"
    className="h-screen overflow-y-auto scroll-smooth"
  >
    <FixedNav />
    <DotNav />
    <HeroSection />
    <RisksSection />
    <CorporateSection />
    <SuppliersSection />
    <AboutSection />
    <ServicesSection />
    <NewsletterSection />
    <ContactSection />
  </div>
);

export default Index;

import FixedNav from "@/components/FixedNav";
import DotNav from "@/components/DotNav";
import HeroSection from "@/components/HeroSection";
import RisksSection from "@/components/RisksSection";
import ScrollWordReveal from "@/components/ScrollWordReveal";
import CorporateSection from "@/components/CorporateSection";
import SuppliersSection from "@/components/SuppliersSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => (
  <div
    id="main-scroll"
    className="h-screen overflow-y-auto scroll-smooth humana-gradient"
  >
    <FixedNav />
    <DotNav />
    <HeroSection />
    <RisksSection />
    <ScrollWordReveal />
    <CorporateSection />
    <SuppliersSection />
    <ServicesSection />
    <NewsletterSection />
    <ContactSection />
  </div>
);

export default Index;


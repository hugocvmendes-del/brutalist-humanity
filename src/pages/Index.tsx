import FixedNav from "@/components/FixedNav";
import DotNav from "@/components/DotNav";
import HeroSection from "@/components/HeroSection";
import RisksSection from "@/components/RisksSection";
import ScrollWordReveal from "@/components/ScrollWordReveal";
import MaturityQuizSection from "@/components/MaturityQuizSection";
import FounderSection from "@/components/FounderSection";
import UnifiedServicesSection from "@/components/UnifiedServicesSection";
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
    <MaturityQuizSection />
    <FounderSection />
    <UnifiedServicesSection />
    <NewsletterSection />
    <ContactSection />
  </div>
);

export default Index;

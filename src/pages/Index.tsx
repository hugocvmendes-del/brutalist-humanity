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
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <div
    id="main-scroll"
    className="h-screen overflow-y-auto scroll-smooth"
  >
    <FixedNav />
    <DotNav />
    <HeroSection />
    <SectionDivider from="--background" to="--dark-surface" />
    <RisksSection />
    <SectionDivider from="--dark-surface" to="--secondary" />
    <CorporateSection />
    <SectionDivider from="--secondary" to="--teal" />
    <SuppliersSection />
    <SectionDivider from="--teal" to="--warm" />
    <AboutSection />
    <SectionDivider from="--warm" to="--warm-light" />
    <ServicesSection />
    <SectionDivider from="--warm-light" to="--background" />
    <NewsletterSection />
    <SectionDivider from="--background" to="--warm" />
    <ContactSection />
  </div>
);

export default Index;

import { motion } from "framer-motion";
import logoImg from "@/assets/logo-humana.png";

const HeroSection = () => (
  <section id="hero" className="snap-start h-screen flex flex-col items-center justify-center section-padding text-center text-foreground bg-background overflow-hidden relative z-10">
    {/* Giant logo filling the screen */}
    <div className="relative w-[80vw] mb-8">
      <motion.div
        className="absolute inset-0 z-10"
        style={{ background: "#1A0A00", transformOrigin: "right" }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 5, ease: [0.16, 0.77, 0.4, 0.98], delay: 0.4 }}
      />
      <img
        src={logoImg}
        alt="Humana"
        className="w-full h-auto brightness-0 invert"
      />
    </div>

    <motion.p
      className="mb-12 max-w-xl text-white/75 text-xl md:text-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.5 }}
    >
      Soluções em integridade
    </motion.p>
    <motion.a
      href="#contato"
      className="brutalist-btn"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 2.5 }}
    >
      Entre em contato
    </motion.a>
  </section>
);

export default HeroSection;

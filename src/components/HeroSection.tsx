import { motion } from "framer-motion";
import logoImg from "@/assets/logo-humana.png";

const HeroSection = () => (
  <section id="hero" className="snap-start h-screen flex flex-col items-center justify-center section-padding text-center text-foreground bg-background overflow-hidden relative z-10">
    {/* Logo - appears first, prominent */}
    <div className="relative w-[85vw] md:w-[75vw] lg:w-[70vw] mb-6">
      <motion.div
        className="absolute inset-0 z-10"
        style={{ background: "hsl(var(--background))", transformOrigin: "right" }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 5, ease: [0.16, 0.77, 0.4, 0.98], delay: 0.4 }}
      />
      <img
        src={logoImg}
        alt="Humana"
        className="w-full h-auto"
      />
    </div>

    {/* Signature line - below logo, refined minimal */}
    <motion.p
      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: "rgba(26, 10, 0, 0.45)" }}
      className="text-[13px] tracking-[0.32em] uppercase mt-5 text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 3.1 }}
    >
      Soluções em integridade
    </motion.p>

    {/* Subtle scroll cue */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 text-[10px] tracking-[0.3em] uppercase"
      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 2.4 }}
    >
      scroll
    </motion.div>
  </section>
);

export default HeroSection;

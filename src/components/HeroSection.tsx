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

    {/* Signature line - matches logo width (h → last a) */}
    <motion.p
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        color: "rgba(26, 10, 0, 0.45)",
        textAlignLast: "justify",
      }}
      className="uppercase mt-2 text-justify w-[85vw] md:w-[75vw] lg:w-[70vw] text-[clamp(0.95rem,2vw,1.6rem)]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 3.1 }}
    >
      Soluções em integridade
    </motion.p>
  </section>
);

export default HeroSection;

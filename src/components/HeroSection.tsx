import { motion } from "framer-motion";
import logoImg from "@/assets/logo-humana.png";

const HeroSection = () => (
  <section className="section-padding flex min-h-screen flex-col items-center justify-center text-center">
    <div className="mb-12 w-full max-w-3xl relative">
      <motion.div
        className="absolute inset-0 bg-background z-10 origin-left"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 5, ease: [0.16, 0.77, 0.4, 0.98], delay: 0.4 }}
        style={{ transformOrigin: "right" }}
      />
      <img
        src={logoImg}
        alt="Humana"
        width={400}
        height={120}
        className="w-full"
      />
    </div>
    <motion.h1
      className="mb-8 max-w-4xl text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-tighter"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.5 }}
    >
      O QUE NOS MOVE
      <br />
      <span className="text-mustard">SÃO AS PESSOAS</span>
    </motion.h1>
    <motion.p
      className="mb-12 max-w-xl text-muted-foreground text-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 2.0 }}
    >
      Soluções em direitos humanos e integridade
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

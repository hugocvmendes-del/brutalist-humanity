import { motion } from "framer-motion";
import logoImg from "@/assets/logo-humana.png";

const HeroSection = () => (
  <section className="section-padding flex min-h-screen flex-col items-center justify-center text-center">
    <motion.div
      className="mb-12 w-full max-w-3xl overflow-hidden"
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <img
        src={logoImg}
        alt="Humana"
        width={400}
        height={120}
        className="w-full"
      />
    </motion.div>
    <motion.h1
      className="mb-8 max-w-3xl text-3xl md:text-5xl lg:text-6xl leading-tight"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      O QUE NOS MOVE SÃO AS PESSOAS
    </motion.h1>
    <motion.p
      className="mb-12 max-w-xl text-muted-foreground text-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      Soluções em direitos humanos e integridade
    </motion.p>
    <motion.a
      href="#contato"
      className="brutalist-btn"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      Entre em contato
    </motion.a>
  </section>
);

export default HeroSection;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import hugoImg from "@/assets/hugo-mendes.jpg";
import victorianaImg from "@/assets/victoriana-gonzaga.jpg";

const partners = [
  {
    name: "Hugo Mendes",
    role: "Sócio-fundador",
    photo: hugoImg,
    bio: "Especialista em direitos humanos e compliance, com mais de 15 anos de experiência em consultoria corporativa. Atua na interseção entre ética empresarial e impacto social.",
  },
  {
    name: "Victoriana Gonzaga",
    role: "Sócia-fundadora",
    photo: victorianaImg,
    bio: "Advogada e consultora em integridade corporativa, com ampla atuação em programas de compliance e due diligence em direitos humanos. Acredita no poder das organizações como agentes de transformação.",
  },
];

const AboutSection = () => {
  const [current, setCurrent] = useState(0);
  const partner = partners[current];

  return (
    <section id="sobre" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="mb-16 text-2xl md:text-4xl">CONHEÇA OS HUMANOS</h2>
        </AnimatedSection>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Photo carousel */}
          <AnimatedSection>
            <div className="relative">
              <div className="brutalist-border overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={partner.photo}
                    alt={partner.name}
                    width={800}
                    height={1024}
                    className="aspect-[4/5] w-full object-cover grayscale"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
              </div>

              {/* Navigation dots */}
              <div className="mt-6 flex items-center gap-4">
                {partners.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-3 w-3 border-2 border-foreground transition-colors ${
                      i === current ? "bg-foreground" : "bg-transparent"
                    }`}
                  />
                ))}
                <span className="ml-auto text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {current + 1} / {partners.length}
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection delay={0.15}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {partner.role}
                </p>
                <h3 className="mb-6 text-2xl md:text-3xl">{partner.name.toUpperCase()}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {partner.bio}
                </p>
              </motion.div>
            </AnimatePresence>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

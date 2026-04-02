import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import duoImg from "@/assets/duo-humana.jpg";
import hugoImg from "@/assets/hugo-mendes.jpg";
import victorianaImg from "@/assets/victoriana-gonzaga.jpg";

type Slide =
  | { type: "intro"; photo: string }
  | { type: "partner"; name: string; role: string; photo: string; bio: string };

const slides: Slide[] = [
  {
    type: "intro",
    photo: duoImg,
  },
  {
    type: "partner",
    name: "Hugo Mendes",
    role: "Sócio-fundador",
    photo: hugoImg,
    bio: "Especialista em direitos humanos e compliance, com mais de 15 anos de experiência em consultoria corporativa. Atua na interseção entre ética empresarial e impacto social.",
    curiosity: "Passar um dia na praia com meus amigos.",
  },
  {
    type: "partner",
    name: "Victoriana Gonzaga",
    role: "Sócia-fundadora",
    photo: victorianaImg,
    bio: "Advogada e consultora em integridade corporativa, com ampla atuação em programas de compliance e due diligence em direitos humanos. Acredita no poder das organizações como agentes de transformação.",
    curiosity: "Prestigiar os espetáculos do Theatro Municipal de São Paulo.",
  },
];

const AboutSection = () => {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <section id="sobre" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="mb-16 text-2xl md:text-4xl">CONHEÇA OS HUMANOS</h2>
        </AnimatedSection>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Photo */}
          <AnimatedSection>
            <div className="relative">
              <div className="brutalist-border overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={slide.photo}
                    alt={slide.type === "intro" ? "Hugo e Victoriana" : slide.name}
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
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-3 w-3 border-2 border-foreground transition-colors ${
                      i === current ? "bg-foreground" : "bg-transparent"
                    }`}
                  />
                ))}
                <span className="ml-auto text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {current + 1} / {slides.length}
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.15}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {slide.type === "intro" ? (
                  <>
                    <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                      "A Humana nasceu de um propósito em comum: impulsionar negócios com base no respeito. Queremos ajudar empresas a fortalecerem sua cultura de integridade e, com isso, reter talentos, reduzir riscos e mudar o mundo."
                    </p>
                    <p className="mb-10 text-sm font-bold uppercase tracking-widest">
                      — Hugo & Victoriana
                    </p>
                    <button
                      onClick={() => setCurrent(1)}
                      className="brutalist-btn group flex items-center gap-3"
                    >
                      Conheça cada um de nós
                      <motion.span
                        animate={{ x: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </button>
                  </>
                ) : (
                  <>
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {slide.role}
                    </p>
                    <h3 className="mb-6 text-2xl md:text-3xl">{slide.name.toUpperCase()}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {slide.bio}
                    </p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

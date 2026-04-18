import { Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import hugoImg from "@/assets/hugo-mendes.jpg";

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="snap-start min-h-screen flex items-center section-padding bg-transparent overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Quote em destaque */}
        <AnimatedSection>
          <blockquote
            className="mx-auto mb-20 md:mb-28 max-w-5xl text-center font-serif italic leading-[1.15] tracking-tight text-danger-zone-heading"
            style={{
              fontFamily: "'Space Grotesk', serif",
              fontSize: "clamp(1.75rem, 4.2vw, 3.25rem)",
              fontWeight: 400,
            }}
          >
            A Humana nasceu de um propósito em comum: impulsionar negócios com base no respeito.
          </blockquote>
        </AnimatedSection>

        {/* Layout de duas colunas */}
        <div className="grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 lg:gap-20 md:items-stretch">
          {/* Coluna esquerda — Foto */}
          <AnimatedSection>
            <div className="h-full">
              <img
                src={hugoImg}
                alt="Hugo Mendes, Partner-Founder da Humana"
                width={800}
                height={1066}
                className="aspect-[3/4] w-full h-full object-cover grayscale"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          {/* Coluna direita — Bio */}
          <AnimatedSection delay={0.15}>
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <h2
                  className="text-danger-zone-heading leading-[0.95] tracking-tighter mb-4"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
                >
                  HUGO MENDES
                </h2>
                <p
                  className="text-xs md:text-sm font-light uppercase mb-10"
                  style={{
                    color: "#F5DCC8",
                    letterSpacing: "0.4em",
                  }}
                >
                  Partner-Founder
                </p>

                <p className="text-base md:text-lg leading-relaxed text-danger-zone-body max-w-xl">
                  Especialista em direitos humanos e compliance, com mais de 15 anos de experiência em consultoria corporativa. Atua na interseção entre ética empresarial e impacto social.
                </p>
              </div>

              <div className="mt-12 md:mt-16">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-danger-zone-body hover:text-danger-zone-heading transition-colors text-sm lowercase tracking-wide"
                >
                  <Linkedin size={16} strokeWidth={1.5} />
                  <span>linkedin</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

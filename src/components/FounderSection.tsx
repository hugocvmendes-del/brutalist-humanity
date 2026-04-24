import { useEffect, useRef, useState } from "react";
import hugoMendes from "@/assets/hugo-mendes.jpg";

const quote =
  "A MAIORIA DAS EMPRESAS SABE QUE INTEGRIDADE É FUNDAMENTAL, MAS POUCAS SABEM COMO CONSTRUÍ-LA DE VERDADE. A HUMANA NASCEU PARA ISSO.";

const aboutHumana =
  "A Humana nasceu com um propósito claro: levar a cultura de integridade para mais empresas e, com isso, potencializá-las e impulsionar seu crescimento sustentável, respeitando suas particularidades internas e de mercado. Atualmente, o investimento em integridade ainda é priorizado por um número limitado de organizações, seja porque não é compreendido como um pilar fundamental dos negócios, seja porque os riscos a ele atrelados são subestimados. A Humana nasceu para mudar esse cenário. Nossa missão é tornar acessível um programa de integridade de qualidade: construído a partir dos valores e da realidade de cada empresa, traduzido em políticas, procedimentos, canais e comunicações que sua comunidade compreenda e pratique.";

const aboutFounder =
  "Hugo Mendes é advogado com quase 20 anos de experiência em ambientes jurídicos corporativos de grandes empresas nacionais e multinacionais, em setores como engenharia, química e mídia. É graduado em Direito pela PUC Campinas, mestre em Direito Empresarial Internacional pela Central European University (Budapeste, Hungria) e em Direito Comercial pela PUC-SP, e MBA em ESG e Compliance pela USP. Ao longo de sua trajetória, conduziu projetos comerciais e de integridade de diferentes magnitudes. Acredita que um programa de integridade de sucesso não se constrói com modelos genéricos, mas sim a partir da escuta, da compreensão dos desafios corporativos e com o comprometimento real da organização, principalmente da alta liderança.";

const FounderSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scrollEl = document.getElementById("main-scroll");
    const target: HTMLElement | Window = scrollEl ?? window;

    const handler = () => {
      const el = sectionRef.current;
      if (!el) return;
      const viewportH = scrollEl ? scrollEl.clientHeight : window.innerHeight;
      const rect = el.getBoundingClientRect();
      const scrollRange = el.offsetHeight - viewportH;
      const traveled = -rect.top;
      const p = Math.min(Math.max(traveled / scrollRange, 0), 1);
      setProgress(p);
    };

    handler();
    target.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      target.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  // Bio rises during last portion of scroll (starts earlier for tighter feel)
  const bioP = Math.max(0, (progress - 0.6) / 0.7);
  const bioTranslateY = (1 - bioP) * 100; // 100vh -> 0

  // Quote fades out as bio rises
  const quoteOpacity = Math.max(0, 1 - Math.max(0, (progress - 0.35) / 0.25));

  const eyebrowStyle: React.CSSProperties = {
    color: "#8B3A00",
    letterSpacing: "0.25em",
    fontSize: "0.65rem",
    fontWeight: 500,
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
    fontWeight: 700,
    fontSize: "clamp(1.6rem, 2.2vw, 2rem)",
    color: "#2C1A0E",
    letterSpacing: "0.04em",
  };

  const ruleStyle: React.CSSProperties = {
    borderTop: "1px solid #C8853A",
    opacity: 0.4,
    width: "100%",
    margin: "8px 0 16px",
  };

  const bodyStyle: React.CSSProperties = {
    color: "#2C1A0E",
    fontWeight: 300,
    fontSize: "0.88rem",
    lineHeight: 1.65,
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{
        height: "160vh",
        backgroundColor: "transparent",
      }}
    >
      {/* PART 1 — Sticky quote over previous section's gradient */}
      <div
        className="sticky top-0 w-full flex justify-start items-center"
        style={{
          height: "100vh",
          paddingLeft: "6vw",
          paddingRight: "6vw",
          zIndex: 1,
          opacity: quoteOpacity,
          visibility: quoteOpacity <= 0 ? "hidden" : "visible",
          pointerEvents: quoteOpacity === 0 ? "none" : "auto",
          transition: "opacity 80ms linear",
        }}
      >
        <div
          style={{
            maxWidth: "75vw",
            textAlign: "left",
            position: "relative",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              position: "absolute",
              top: "-0.45em",
              left: "-0.15em",
              fontSize: "clamp(8rem, 14vw, 14rem)",
              lineHeight: 1,
              color: "#C8853A",
              fontWeight: 400,
              pointerEvents: "none",
              opacity: 0.85,
            }}
          >
            “
          </span>
          <p
            className="uppercase"
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              color: "#F0E6D8",
              textAlign: "left",
              position: "relative",
              zIndex: 1,
            }}
          >
            {quote}
          </p>

          <div
            className="mt-6 uppercase"
            style={{
              color: "#C8853A",
              letterSpacing: "0.25em",
              fontSize: "0.8rem",
              fontWeight: 600,
              textAlign: "left",
            }}
          >
            — HUGO VAZ MENDES · FUNDADOR
          </div>
        </div>
      </div>

      {/* PART 2 — Bio rises from below as a curtain */}
      <div
        className="w-full px-6 md:px-12 lg:px-20 xl:px-24"
        style={{
          position: "relative",
          marginTop: "-100vh",
          zIndex: 2,
          backgroundColor: "#F0E6D8",
          transform: `translateY(${bioTranslateY}vh)`,
          transition: "transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
          minHeight: "100vh",
          paddingTop: "clamp(6vh, 8vh, 10vh)",
          paddingBottom: "clamp(4vh, 6vh, 8vh)",
          marginBottom: "0",
          overflow: "hidden",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
          {/* Left column — photo */}
          <div className="flex flex-col justify-center h-full">
            <div
              className="w-full overflow-hidden"
              style={{
                aspectRatio: "3 / 4",
                borderRadius: 0,
              }}
            >
              <img
                src={hugoMendes}
                alt="Hugo Mendes, fundador da Humana"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Right column — two stacked text blocks */}
          <div className="flex flex-col" style={{ gap: "32px" }}>
            {/* Block 1 — Sobre a Humana */}
            <div className="flex flex-col">
              <div className="uppercase" style={eyebrowStyle}>
                SOBRE A HUMANA
              </div>
              <h3 className="uppercase mt-2" style={headingStyle}>
                A HUMANA
              </h3>
              <div style={ruleStyle} />
              <p style={bodyStyle}>{aboutHumana}</p>
            </div>

            {/* Block 2 — Sobre o Fundador */}
            <div className="flex flex-col">
              <div className="uppercase" style={eyebrowStyle}>
                SOBRE O FUNDADOR
              </div>
              <h3 className="uppercase mt-2" style={headingStyle}>
                HUGO MENDES
              </h3>
              <div style={ruleStyle} />
              <p style={bodyStyle}>{aboutFounder}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

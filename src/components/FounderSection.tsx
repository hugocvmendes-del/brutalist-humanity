import { useEffect, useRef, useState } from "react";

const quote =
  "A HUMANA SURGIU PARA APOIAR EMPRESAS A CRESCER E MUDAR, POSITIVAMENTE, O MUNDO. ACREDITO QUE AMBIENTES MOVIDOS PELO RESPEITO ÀS PESSOAS INSPIRAM CONFIANÇA, ESTIMULAM A CRIATIVIDADE E PROMOVEM O DESENVOLVIMENTO SUSTENTÁVEL.";

const bioText =
  "Sou natural de Recife/Pernambuco e, inspirado pela minha mãe professora e meu pai engenheiro, trilhei minha carreira no Direito, buscando aliar o ideal de justiça com o mundo inovador e dinâmico corporativo. Graduei em Direito pela Pontifícia Universidade Católica de Campinas e sou mestre em Direito Empresarial Internacional pela Central University de Budapeste (Hungria) e em Direito Comercial pela Pontifícia Universidade Católica de São Paulo. Com 20 anos de experiência em jurídicos corporativos, trabalhei em grandes empresas nacionais e multinacionais de diversos segmentos, incluindo energia, mídia e química. Sou movido por ambientes inovadores e, principalmente, pessoas. Apoiei a conclusão de projetos comerciais e de integridade de diversas magnitudes e acredito no poder da integridade como pilar fundamental para o sucesso de qualquer negócio.";

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
  const bioP = Math.max(0, (progress - 0.45) / 0.4);
  const bioTranslateY = (1 - Math.min(bioP, 1)) * 100; // 100vh -> 0

  // Quote fades out as bio rises
  const quoteOpacity = Math.max(0, 1 - Math.max(0, (progress - 0.55) / 0.15));

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{
        height: "200vh",
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
              lineHeight: 1.25,
              letterSpacing: "0.06em",
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
              fontSize: "0.7rem",
              fontWeight: 500,
              textAlign: "left",
            }}
          >
            — HUGO VAZ MENDES · FUNDADOR
          </div>
        </div>
      </div>

      {/* PART 2 — Bio rises from below as a curtain */}
      <div
        className="w-full px-6 md:px-12 lg:px-24 xl:px-32"
        style={{
          position: "relative",
          marginTop: "-100vh",
          zIndex: 2,
          backgroundColor: "#F0E6D8",
          transform: `translateY(${bioTranslateY}vh)`,
          transition: "transform 80ms linear",
          paddingTop: "clamp(10vh, 14vh, 18vh)",
          paddingBottom: "clamp(4vh, 6vh, 8vh)",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left column — photo */}
          <div className="flex flex-col gap-6">
            <div
              className="uppercase"
              style={{
                color: "#8B3A00",
                letterSpacing: "0.25em",
                fontSize: "0.65rem",
                fontWeight: 500,
              }}
            >
              FUNDADOR · HUMANA
            </div>

            <div
              className="w-full flex items-center justify-center"
              style={{
                backgroundColor: "#D4B89A",
                aspectRatio: "3 / 4",
                borderRadius: 0,
              }}
            >
              <span
                className="uppercase"
                style={{
                  color: "#8B6040",
                  letterSpacing: "0.2em",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                }}
              >
                [FOTO]
              </span>
            </div>

            <div
              className="uppercase"
              style={{
                color: "#8B6040",
                letterSpacing: "0.25em",
                fontSize: "0.6rem",
                fontWeight: 500,
              }}
            >
              SÃO PAULO · 2024
            </div>
          </div>

          {/* Right column — bio */}
          <div className="flex flex-col gap-6">
            <div
              className="uppercase"
              style={{
                color: "#8B3A00",
                letterSpacing: "0.25em",
                fontSize: "0.65rem",
                fontWeight: 500,
              }}
            >
              SOBRE
            </div>

            <p
              style={{
                color: "#2C1A0E",
                fontWeight: 300,
                fontSize: "0.95rem",
                lineHeight: 1.75,
              }}
            >
              {bioText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

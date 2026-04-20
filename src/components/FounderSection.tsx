import { useEffect, useRef, useState } from "react";

const quote =
  "A HUMANA SURGIU COMO FRUTO DO MEU DESEJO DE APOIAR EMPRESAS A CRESCEREM E MUDAREM, POSITIVAMENTE, O MUNDO. ACREDITO QUE AMBIENTES MOVIDOS PELO RESPEITO ÀS PESSOAS ESTIMULAM A CRIATIVIDADE, O BEM-ESTAR E UM DESENVOLVIMENTO SUSTENTÁVEL";

const bioText =
  "Sou natural de Recife/Pernambuco e, inspirado pela minha mãe professora e meu pai engenheiro, trilhei minha carreira no Direito, buscando aliar o ideal de justiça com o mundo inovador e dinâmico corporativo. Graduei em Direito pela Pontifícia Universidade Católica de Campinas e sou mestre em Direito Empresarial Internacional pela Central University de Budapeste (Hungria) e em Direito Comercial pela Pontifícia Universidade Católica de São Paulo. Com 20 anos de experiência em jurídicos corporativos, trabalhei em grandes empresas nacionais e multinacionais de diversos segmentos, incluindo energia, mídia e química. Sou movido por ambientes inovadores e, principalmente, pessoas. Apoiei a conclusão de projetos comerciais e de integridade de diversas magnitudes e acredito no poder da integridade como pilar fundamental para o sucesso de qualquer negócio.";

const FounderSection = () => {
  const words = quote.split(" ");
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const scrollEl = document.getElementById("main-scroll");
    if (!scrollEl || !containerRef.current) return;

    const handler = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = scrollEl.clientHeight;
      // progress: 0 when section bottom enters viewport bottom; 1 when section top reaches viewport top
      const total = rect.height + viewportH;
      const traveled = viewportH - rect.top;
      const progress = Math.max(0, Math.min(1, traveled / total));
      // map progress 0.2 - 0.8 to word reveals
      const start = 0.15;
      const end = 0.75;
      const p = Math.max(0, Math.min(1, (progress - start) / (end - start)));
      setActiveCount(Math.round(p * words.length));
    };

    handler();
    scrollEl.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      scrollEl.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [words.length]);

  return (
    <section className="relative w-full">
      {/* PART 1 — Quote */}
      <div
        ref={containerRef}
        className="w-full px-6 md:px-12 lg:px-24 xl:px-32"
        style={{
          backgroundColor: "#6B2D00",
          paddingTop: "clamp(12vh, 16vh, 20vh)",
          paddingBottom: "clamp(12vh, 16vh, 20vh)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p
            className="uppercase text-center"
            style={{
              fontFamily:
                "'Neue Haas Grotesk Display', 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            {words.map((w, i) => {
              const active = i < activeCount;
              return (
                <span
                  key={i}
                  style={{
                    color: active ? "#E8D0B0" : "#7A5535",
                    opacity: active ? 1 : 0.15,
                    transition: `color 600ms ease ${i * 80}ms, opacity 600ms ease ${i * 80}ms`,
                    display: "inline-block",
                    marginRight: "0.3em",
                  }}
                >
                  {w}
                </span>
              );
            })}
          </p>

          <div
            className="mt-12 flex justify-end uppercase"
            style={{
              color: "#C8853A",
              letterSpacing: "0.25em",
              fontSize: "0.65rem",
              fontWeight: 500,
            }}
          >
            — HUGO VAZ MENDES · FUNDADOR
          </div>
        </div>
      </div>

      {/* PART 2 — Bio */}
      <div
        className="w-full px-6 md:px-12 lg:px-24 xl:px-32"
        style={{
          backgroundColor: "#F0E6D8",
          paddingTop: "clamp(10vh, 14vh, 18vh)",
          paddingBottom: "clamp(10vh, 14vh, 18vh)",
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

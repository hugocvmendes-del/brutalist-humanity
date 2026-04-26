import { useEffect, useRef, useState, FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { useIsMobile } from "@/hooks/use-mobile";
import hugoMendes from "@/assets/hugo-mendes.jpg";

const services = [
  { slug: "programa-de-integridade",     title: "Programa de Integridade",       desc: "Governança e cultura de integridade." },
  { slug: "canal-de-etica",              title: "Canal de Ética",                desc: "Fluxos de investigação e correção." },
  { slug: "direitos-humanos",            title: "Direitos Humanos",              desc: "Mapeamento e avaliação de risco." },
  { slug: "protecao-de-dados",           title: "Proteção de Dados",             desc: "Mapeamento e revisão de atividades." },
  { slug: "treinamentos",                title: "Treinamentos",                  desc: "Capacitação para todos os níveis." },
  { slug: "governanca-de-ia",            title: "Gov. Inteligência Artificial",  desc: "Governança ética e responsável de IA." },
];

const quoteMain =
  "A MAIORIA DAS EMPRESAS SABE QUE A INTEGRIDADE IMPORTA, MAS POUCAS CONSEGUEM TRANSFORMÁ-LA EM CULTURA.";
const quoteHighlight = "É EXATAMENTE AÍ QUE A HUMANA ATUA.";

const aboutHumana =
  "A Humana nasceu com um propósito claro: levar a cultura de integridade para mais empresas e, com isso, potencializá-las e impulsionar seu crescimento sustentável, respeitando suas particularidades internas e de mercado. Atualmente, o investimento em integridade ainda é priorizado por um número limitado de organizações, seja porque não é compreendido como um pilar fundamental dos negócios, seja porque os riscos a ele atrelados são subestimados. A Humana vem para mudar esse cenário. Nossa missão é tornar acessível um programa de integridade de qualidade: construído a partir dos valores e da realidade de cada empresa, traduzido em políticas, procedimentos, canais e comunicações que sua comunidade compreenda e pratique.";

const aboutFounder =
  "Hugo Mendes é advogado com quase 20 anos de experiência em ambientes jurídicos corporativos de grandes empresas nacionais e multinacionais, em setores como engenharia, química e mídia. É graduado em Direito pela PUC Campinas, mestre em Direito Empresarial Internacional pela Central European University (Budapeste, Hungria) e em Direito Comercial pela PUC-SP, e MBA em ESG e Compliance pela USP. Ao longo de sua trajetória, conduziu projetos comerciais e de integridade de diferentes magnitudes. Acredita que um programa de integridade de sucesso não se constrói com modelos genéricos, mas sim a partir da escuta, da compreensão dos desafios corporativos e com o comprometimento real da organização, principalmente da alta liderança.";

const FounderSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [progress, setProgress] = useState(0);
  const [sent, setSent] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    (window as any).__preencherContato = (texto: string) => {
      setMensagem(texto);
    };
    return () => {
      delete (window as any).__preencherContato;
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  useEffect(() => {
    const scrollEl = document.getElementById("main-scroll");
    const target: HTMLElement | Window = scrollEl ?? window;

    const handler = () => {
      const el = sectionRef.current;
      if (!el) return;
      const viewportH = scrollEl ? scrollEl.clientHeight : window.innerHeight;
      const rect = el.getBoundingClientRect();
      // Animation happens within the first 200vh sticky spacer
      // Effective scroll range = spacerHeight - viewport = 200vh - 100vh = 100vh
      const animRange = viewportH; // 100vh in pixels
      const traveled = -rect.top;
      const p = Math.min(Math.max(traveled / animRange, 0), 1);
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

  // Bio rises during scroll within the sticky spacer
  // Mobile: rises earlier and faster to prevent scroll feeling stuck and text overlapping the photo
  const bioStart = isMobile ? 0.05 : 0.45;
  const bioRange = isMobile ? 0.35 : 0.45;
  const bioP = Math.max(0, (progress - bioStart) / bioRange);
  const bioTranslateY = (1 - bioP) * 100; // 100vh -> 0

  // Quote stays fully visible (no fade-out)
  const quoteOpacity = 1;

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
        backgroundColor: "transparent",
      }}
    >
      {/* PART 1 — Sticky quote phase (scroll spacer = 200vh, quote sticks for 100vh) */}
      <div className="relative w-full" style={{ height: "200vh" }}>
        <div
          className="sticky top-0 w-full flex justify-start items-center"
          style={{
            height: "100vh",
            paddingLeft: "6vw",
            paddingRight: "6vw",
            zIndex: 1,
            opacity: quoteOpacity,
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
                color: "#F0E6D8",
                fontWeight: 400,
                pointerEvents: "none",
                opacity: 0.9,
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
                color: "#2C1A0E",
                textAlign: "left",
                position: "relative",
                zIndex: 1,
              }}
            >
              {quoteMain}{" "}
              <span style={{ color: "#F0E6D8" }}>{quoteHighlight}</span>
            </p>

            <div
              className="mt-6 uppercase"
              style={{
                color: "#F0E6D8",
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
      </div>

      {/* PART 2 — Bio card rises from below as a curtain, then flows naturally */}
      <div
        id="sobre"
        className="w-full px-6 md:px-12 lg:px-20 xl:px-24"
        style={{
          position: "relative",
          marginTop: "-100vh",
          zIndex: 2,
          backgroundColor: "#F0E6D8",
          transform: `translateY(${bioTranslateY}vh)`,
          transition: "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
          paddingTop: "clamp(6vh, 8vh, 10vh)",
          paddingBottom: "0",
          marginBottom: "0",
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

        {/* SERVICES BLOCK */}
        <div
          id="servicos"
          className="relative overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #C87941 0%, #D89A6E 35%, #E8BE9C 65%, #FFFFFF 100%)",
            paddingTop: "clamp(6vh, 10vh, 14vh)",
            paddingLeft: "clamp(1.5rem, 6vw, 8rem)",
            paddingRight: "clamp(1.5rem, 6vw, 8rem)",
            paddingBottom: "0",
            marginTop: "clamp(6vh, 10vh, 14vh)",
          }}
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-light-zone-accent hidden md:block" />

          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.28em] mb-4" style={{ color: "#3D1C08" }}>
              O que fazemos
            </p>
            <h2
              className="font-bold uppercase tracking-tighter leading-[0.95] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#3D1C08" }}
            >
              NOSSOS SERVIÇOS <span style={{ color: "#6B3016" }}>FORTALECEM</span><br />E <span style={{ color: "#6B3016" }}>IMPULSIONAM</span> SEU NEGÓCIO.
            </h2>
            <p className="text-sm leading-relaxed mb-8 max-w-xl" style={{ color: "rgba(61,28,8,0.75)" }}>
              Serviços para empresas que querem crescer com segurança, fortalecendo sua reputação e reduzindo riscos.
            </p>
          </AnimatedSection>

          <div className="flex-1 flex flex-col justify-center border-t mt-8 relative z-10" style={{ borderColor: "rgba(61,28,8,0.2)" }}>
            {services.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.05}>
                <Link
                  to={`/servicos/${s.slug}`}
                  className="group flex items-center gap-6 py-2.5 border-b transition-all duration-300 hover:pl-2"
                  style={{ borderColor: "rgba(61,28,8,0.08)" }}
                >
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-bold uppercase tracking-tight leading-tight transition-colors duration-300 inline-block group-hover:[border-bottom:1px_solid_rgba(107,48,22,0.5)]"
                      style={{
                        fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                        color: "#3D1C08",
                      }}
                    >
                      <span>{s.title}</span>
                    </h3>
                  </div>
                  <p
                    className="hidden md:block text-sm leading-relaxed transition-opacity duration-300 opacity-0 group-hover:opacity-100 shrink-0 text-right"
                    style={{ color: "rgba(61,28,8,0.65)" }}
                  >
                    {s.desc}
                  </p>
                  <ArrowUpRight
                    className="h-6 w-6 shrink-0 transition-all duration-300 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ color: "#3D1C08" }}
                  />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* CONTACT BLOCK */}
        <div
          id="contato"
          style={{
            background: "#FFFFFF",
            paddingTop: "clamp(6vh, 10vh, 14vh)",
            paddingLeft: "clamp(1.5rem, 6vw, 8rem)",
            paddingRight: "clamp(1.5rem, 6vw, 8rem)",
            paddingBottom: "clamp(6vh, 10vh, 14vh)",
          }}
        >
          <div className="mx-auto max-w-2xl">
            <AnimatedSection>
              <h2
                className="mb-4 text-[clamp(2rem,5vw,3.5rem)] leading-[0.9] tracking-tighter"
                style={{ color: "#1A0A00" }}
              >
                FALE
                <br />
                <span style={{ color: "#6B3016" }}>CONOSCO</span>
              </h2>
              <p className="mb-12 text-lg" style={{ color: "#3D1C08" }}>
                Vamos conversar. Envie uma mensagem ou nos encontre nas redes.
              </p>
            </AnimatedSection>

            {sent ? (
              <AnimatedSection>
                <div
                  className="border-2 p-12 text-center bg-light-zone-card backdrop-blur-sm"
                  style={{ borderColor: "rgba(26, 10, 0, 0.3)" }}
                >
                  <p className="text-xl font-bold" style={{ color: "#1A0A00" }}>MENSAGEM ENVIADA ✓</p>
                  <p className="mt-2" style={{ color: "#3D1C08" }}>Entraremos em contato em breve.</p>
                </div>
              </AnimatedSection>
            ) : (
              <AnimatedSection delay={0.15}>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <input
                    type="text"
                    placeholder="Nome"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full border-b-2 border-[#1A0A00] bg-transparent py-3 text-[#1A0A00] placeholder:text-[#8B6040] focus:outline-none focus:border-[#6B3016]"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b-2 border-[#1A0A00] bg-transparent py-3 text-[#1A0A00] placeholder:text-[#8B6040] focus:outline-none focus:border-[#6B3016]"
                  />
                  <textarea
                    id="contact-message"
                    placeholder="Mensagem"
                    required
                    rows={4}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="w-full border-b-2 border-[#1A0A00] bg-transparent py-3 text-[#1A0A00] placeholder:text-[#8B6040] focus:outline-none focus:border-[#6B3016] resize-none"
                  />
                  <button type="submit" className="btn-on-light w-full">
                    Enviar
                  </button>
                </form>
              </AnimatedSection>
            )}

            <AnimatedSection delay={0.3}>
              <div
                className="mt-16 flex gap-8 text-sm font-bold uppercase tracking-widest"
                style={{ color: "#1A0A00" }}
              >
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-2 border-[#1A0A00] pb-1 transition-colors hover:text-[#6B3016] hover:border-[#6B3016]"
                >
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/humana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-2 border-[#1A0A00] pb-1 transition-colors hover:text-[#6B3016] hover:border-[#6B3016]"
                >
                  Instagram
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

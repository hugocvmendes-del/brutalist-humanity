
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";

const services = [
  { slug: "programa-de-integridade",     title: "Programa de Integridade",       desc: "Governança e cultura de integridade." },
  { slug: "canal-de-etica",              title: "Canal de Ética",                desc: "Fluxos de investigação e correção." },
  { slug: "direitos-humanos",            title: "Direitos Humanos",              desc: "Mapeamento e avaliação de risco." },
  { slug: "protecao-de-dados",           title: "Proteção de Dados",             desc: "Mapeamento e revisão de atividades." },
  { slug: "treinamentos",                title: "Treinamentos",                  desc: "Capacitação para todos os níveis." },
  { slug: "governanca-de-ia",            title: "Gov. Inteligência Artificial",  desc: "Governança ética e responsável de IA." },
];

const UnifiedServicesSection = () => {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #C87941 0%, #D89A6E 35%, #E8BE9C 65%, #FFFFFF 100%)",
        paddingTop: "clamp(6vh, 10vh, 14vh)",
        paddingLeft: "clamp(1.5rem, 6vw, 8rem)",
        paddingRight: "clamp(1.5rem, 6vw, 8rem)",
        paddingBottom: "0",
      }}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-light-zone-accent hidden md:block" />

      {/* Header */}
      <AnimatedSection>
        <p className="text-xs font-bold uppercase tracking-[0.28em] mb-4" style={{ color: "#3D1C08" }}>
          O que fazemos
        </p>
        <h2
          className="font-bold uppercase tracking-tighter leading-[0.95] mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#3D1C08" }}
        >
          NOSSOS SERVIÇOS <span style={{ color: "#6B3016" }}>FORTALECEM</span><br/>E <span style={{ color: "#6B3016" }}>IMPULSIONAM</span> SEU NEGÓCIO.
        </h2>
        <p className="text-sm leading-relaxed mb-8 max-w-xl" style={{ color: "rgba(61,28,8,0.75)" }}>
          Serviços para empresas que querem crescer com segurança, fortalecendo sua reputação e reduzindo riscos.
        </p>
      </AnimatedSection>

      {/* Services list */}
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

    </section>
  );
};

export default UnifiedServicesSection;

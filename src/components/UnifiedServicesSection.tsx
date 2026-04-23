
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
      className="relative section-padding overflow-hidden"
      style={{ paddingTop: "0" }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          color: "hsl(var(--foreground))",
        }}
      />

      {/* Left accent bar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-light-zone-accent hidden md:block" />

      {/* Header */}
      <AnimatedSection>
        <p className="text-xs font-bold uppercase tracking-[0.28em] mb-4" style={{ color: "#C9853A" }}>
          O que fazemos
        </p>
        <h2
          className="font-bold uppercase tracking-tighter leading-[0.95] mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#FFFFFF" }}
        >
          Integridade que fortalece<br/>e impulsiona seu negócio.
        </h2>
        <p className="text-sm leading-relaxed mb-8 max-w-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
          Serviços para empresas que querem crescer com segurança, fortalecendo sua reputação e reduzindo riscos.
        </p>
      </AnimatedSection>

      {/* Services list */}
      <div className="flex-1 flex flex-col justify-center border-t mt-20 relative z-10" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
        {services.map((s, i) => (
          <AnimatedSection key={s.slug} delay={i * 0.05}>
            <Link
              to={`/servicos/${s.slug}`}
              className="group flex items-center gap-6 py-5 border-b transition-all duration-300 hover:pl-2"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="flex-1 min-w-0">
                <h3
                  className="font-bold uppercase tracking-tight leading-tight transition-colors duration-300 inline-block group-hover:[border-bottom:1px_solid_rgba(201,133,58,0.5)]"
                  style={{
                    fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)",
                    color: "#FFFFFF",
                  }}
                >
                  <span>{s.title}</span>
                </h3>
                <p
                  className="text-xs mt-1 leading-relaxed transition-opacity duration-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-10 overflow-hidden"
                  style={{ color: "rgba(255,255,255,0.55)", transition: "all 0.3s ease" }}
                >
                  {s.desc}
                </p>
              </div>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 transition-all duration-300 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: "#FFFFFF" }}
              />
            </Link>
          </AnimatedSection>
        ))}
      </div>

    </section>
  );
};

export default UnifiedServicesSection;

import { useState } from "react";
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
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section
      id="servicos"
      className="relative section-padding overflow-hidden"
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
      <AnimatedSection className="max-w-5xl relative z-10">
        <p className="text-light-zone-accent text-xs tracking-[0.3em] uppercase mb-6">
          O que fazemos
        </p>
        <h2 className="text-light-zone-heading text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
          Integridade que fortalece e impulsiona seu negócio.
        </h2>
        <p className="text-light-zone-body text-base md:text-lg max-w-2xl leading-relaxed">
          Serviços para empresas que querem crescer com segurança, fortalecendo sua reputação e reduzindo riscos.
        </p>
      </AnimatedSection>

      {/* Services list */}
      <div className="mt-20 relative z-10 border-t border-light-zone">
        {services.map((s, i) => (
          <Link
            key={s.slug}
            to={`/servicos/${s.slug}`}
            onMouseEnter={() => setHov(i)}
            onMouseLeave={() => setHov(null)}
            className="group flex items-center justify-between gap-6 py-8 md:py-10 border-b border-light-zone transition-all duration-300"
            style={{
              paddingLeft: hov === i ? "1.5rem" : "0",
            }}
          >
            <div className="flex-1 min-w-0">
              <h3 className="text-light-zone-heading text-2xl md:text-4xl lg:text-5xl leading-tight transition-opacity">
                {s.title}
              </h3>
              <p className="text-light-zone-body text-sm md:text-base mt-2 max-w-xl">
                {s.desc}
              </p>
            </div>
            <ArrowUpRight
              className="text-light-zone-heading shrink-0 transition-transform duration-300 group-hover:rotate-45"
              size={36}
              strokeWidth={1.25}
            />
          </Link>
        ))}
      </div>

      {/* Footer CTAs */}
      <AnimatedSection className="mt-16 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="text-light-zone-body text-base md:text-lg">
          Conheça melhor nossos serviços →
        </p>
        <Link to="/servicos/programa-de-integridade" className="btn-on-light inline-block">
          Saiba como
        </Link>
      </AnimatedSection>
    </section>
  );
};

export default UnifiedServicesSection;


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
        <h2
          className="text-light-zone-heading leading-[1.05] mb-8"
          style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
        >
          Integridade que fortalece e impulsiona seu negócio.
        </h2>
        <p className="text-light-zone-body text-base md:text-lg max-w-2xl leading-relaxed">
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
                  className="font-bold uppercase tracking-tight leading-tight transition-colors duration-300"
                  style={{
                    fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  <span className="group-hover:text-white transition-colors duration-300">{s.title}</span>
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

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    slug: "direitos-humanos",
    title: "Direitos Humanos",
    desc: "Mapeamento e avaliação de risco.",
  },
  {
    slug: "programa-de-integridade",
    title: "Programa de Integridade",
    desc: "Implementação de governança e práticas que impulsionem a cultura de integridade na empresa.",
  },
  {
    slug: "protecao-de-dados",
    title: "Proteção de Dados Pessoais",
    desc: "Mapeamento e revisão de atividade de processamento de dados.",
  },
  {
    slug: "canal-de-etica",
    title: "Canal de Ética",
    desc: "Implementação de canais e fluxos de investigação para mapear e corrigir desvios.",
  },
  {
    slug: "treinamentos",
    title: "Treinamentos",
    desc: "Treinamentos de integridade para todos os níveis para garantir a compreensão de temas e políticas de integridade.",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="snap-start min-h-screen flex items-center section-padding bg-warm-light overflow-hidden">
    <div className="mx-auto max-w-6xl">
      <AnimatedSection>
        <h2 className="mb-16 text-[clamp(2rem,5vw,3.5rem)] leading-[0.9] tracking-tighter">
          O QUE <span className="text-mustard">FAZEMOS</span>
        </h2>
      </AnimatedSection>

      <div className="divide-y divide-foreground/20 border-t border-foreground/20">
        {services.map((s, i) => (
          <AnimatedSection key={s.slug} delay={i * 0.06}>
            <Link
              to={`/servicos/${s.slug}`}
              className="group flex items-center gap-6 py-8 md:py-10 transition-colors duration-300 hover:bg-warm/5"
            >

              {/* Title + Description */}
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight group-hover:text-mustard transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {s.desc}
                </p>
              </div>

              {/* Arrow */}
              <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8 shrink-0 text-foreground opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:text-mustard group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FixedNav from "@/components/FixedNav";
import AnimatedSection from "@/components/AnimatedSection";

const servicesData: Record<string, { title: string; desc: string; details: string[] }> = {
  "direitos-humanos": {
    title: "Direitos Humanos",
    desc: "Mapeamento e avaliação de risco.",
    details: [
      "Diagnóstico de riscos em direitos humanos na cadeia de valor",
      "Elaboração de políticas de direitos humanos",
      "Due diligence em direitos humanos conforme padrões internacionais",
      "Planos de ação e remediação",
    ],
  },
  "programa-de-integridade": {
    title: "Programa de Integridade",
    desc: "Implementação de governança e práticas que impulsionem a cultura de integridade na empresa.",
    details: [
      "Diagnóstico e avaliação de maturidade do programa",
      "Elaboração de código de conduta e políticas anticorrupção",
      "Estruturação de comitês de ética e compliance",
      "Monitoramento contínuo e indicadores de desempenho",
    ],
  },
  "protecao-de-dados": {
    title: "Proteção de Dados Pessoais",
    desc: "Mapeamento e revisão de atividade de processamento de dados.",
    details: [
      "Mapeamento de dados pessoais e fluxos de tratamento",
      "Adequação à LGPD e regulamentações internacionais",
      "Elaboração de relatórios de impacto à proteção de dados",
      "Treinamento e conscientização sobre privacidade",
    ],
  },
  "canal-de-etica": {
    title: "Canal de Ética",
    desc: "Implementação de canais e fluxos de investigação para mapear e corrigir desvios.",
    details: [
      "Implementação de canal de denúncias seguro e confidencial",
      "Estruturação de fluxos de investigação interna",
      "Protocolos de apuração e resposta a denúncias",
      "Relatórios periódicos e métricas de efetividade",
    ],
  },
  treinamentos: {
    title: "Treinamentos",
    desc: "Treinamentos de integridade para todos os níveis para garantir a compreensão de temas e políticas de integridade.",
    details: [
      "Programas de capacitação em compliance e ética",
      "Workshops para liderança e alta administração",
      "Treinamentos customizados por área de atuação",
      "E-learning e materiais de apoio contínuo",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Serviço não encontrado</h1>
          <Link to="/#servicos" className="brutalist-btn inline-block">
            Voltar
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <FixedNav />
      <section className="section-padding pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <Link
              to="/#servicos"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-mustard transition-colors mb-12"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar aos serviços
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] tracking-tighter mb-8">
              {service.title}
            </h1>
            <div className="h-1 w-24 bg-mustard mb-12" />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-16">
              {service.desc}
            </p>
          </AnimatedSection>

          <div className="space-y-0 divide-y divide-foreground/20 border-t border-foreground/20">
            {service.details.map((detail, i) => (
              <AnimatedSection key={i} delay={0.3 + i * 0.08}>
                <div className="py-6 md:py-8 flex items-start gap-6">
                  <span className="text-sm font-medium text-mustard tracking-widest mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg md:text-xl leading-relaxed">{detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6}>
            <div className="mt-16 pt-16 border-t border-foreground/20">
              <Link to="/#contato" className="brutalist-btn inline-block">
                Fale conosco
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;

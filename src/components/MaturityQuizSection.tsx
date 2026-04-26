import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Check } from "lucide-react";
import { useLang } from "@/context/LangContext";

type Question = {
  id: string;
  block: number;
  label: string;
  title: string;
  sub: string;
  options: string[];
  scores: number[];
};

const blocks = ["PERFIL", "GOVERNANÇA", "OPERAÇÕES", "RISCOS"];

const questions: Question[] = [
  {
    id: "P1",
    block: 0,
    label: "P1 · SETOR",
    title: "Qual é o setor da sua empresa?",
    sub: "Setores com maior exposição regulatória e riscos de compliance partem com pontuação ajustada.",
    options: [
      "Indústria & Manufatura",
      "Agronegócio",
      "Construção",
      "Varejo & Serviços",
      "Outro",
    ],
    scores: [-1, -1, -1, 0, 0],
  },
  {
    id: "P2",
    block: 0,
    label: "P2 · PORTE",
    title: "Quantos colaboradores tem sua empresa?",
    sub: "O porte define a complexidade do programa adequado.",
    options: ["Até 50", "51 a 250", "251 a 1.000", "Acima de 1.000"],
    scores: [0, 0, 0, 0],
  },
  {
    id: "P3",
    block: 0,
    label: "P3 · SETOR PÚBLICO",
    title: "Sua empresa contrata ou pretende contratar com o setor público?",
    sub: "Licitações, contratos com prefeituras, governos estaduais ou federais.",
    options: [
      "Sim, já temos contratos públicos ativos",
      "Estamos participando de licitações",
      "Pretendemos contratar futuramente",
      "Não, atuamos apenas no setor privado",
    ],
    scores: [3, 2, 1, 0],
  },
  {
    id: "P4",
    block: 1,
    label: "P4 · CÓDIGO DE CONDUTA",
    title: "Sua empresa possui um Código de Conduta e Ética?",
    sub: "Documento que define os valores, princípios e regras de comportamento esperados.",
    options: [
      "Sim, atualizado nos últimos 2 anos",
      "Sim, mas desatualizado ou pouco usado",
      "Em elaboração",
      "Não possui",
    ],
    scores: [3, 1, 0, -2],
  },
  {
    id: "P5",
    block: 1,
    label: "P5 · CONTRATOS",
    title: "A empresa utiliza contratos padronizados com clientes, fornecedores ou parceiros?",
    sub: "Incluindo cláusulas de compliance, ética e proteção de dados.",
    options: [
      "Sim, com cláusulas de compliance e LGPD",
      "Sim, mas sem cláusulas específicas",
      "Contratos informais ou caso a caso",
      "Não temos contratos padronizados",
    ],
    scores: [3, 0, -1, -2],
  },
  {
    id: "P6",
    block: 1,
    label: "P6 · RESPONSÁVEL",
    title: "Há um responsável formal por integridade e proteção de dados na empresa?",
    sub: "DPO, Compliance Officer ou profissional com essa atribuição definida.",
    options: [
      "Sim, função dedicada e exclusiva",
      "Sim, acumulado com outra função",
      "Estamos estruturando essa função",
      "Não há responsável definido",
    ],
    scores: [3, 1, 0, -2],
  },
  {
    id: "P7",
    block: 2,
    label: "P7 · CANAL DE ÉTICA",
    title: "Existe um canal de relatos (denúncias/ética) ativo?",
    sub: "Canal para receber denúncias anônimas de colaboradores, fornecedores ou terceiros.",
    options: [
      "Sim, com gestão interna",
      "Sim, via plataforma terceirizada",
      "Estamos implantando",
      "Não temos canal",
    ],
    scores: [3, 3, 0, -2],
  },
  {
    id: "P8",
    block: 2,
    label: "P8 · TREINAMENTOS",
    title: "Nos últimos 12 meses, a empresa realizou treinamentos sobre ética, compliance ou prevenção ao assédio?",
    sub: "Considera treinamentos presenciais, online ou comunicações formais.",
    options: [
      "Sim, sobre 2 ou mais temas",
      "Sim, sobre apenas 1 tema",
      "Estamos planejando para este ano",
      "Não realizamos treinamentos",
    ],
    scores: [3, 1, 0, -2],
  },
  {
    id: "P9",
    block: 2,
    label: "P9 · LGPD",
    title: "Vocês utilizam dados pessoais de clientes ou leads para ações de marketing?",
    sub: "CRM, e-mail marketing, anúncios segmentados, WhatsApp comercial etc.",
    options: [
      "Sim, com consentimento e política de privacidade",
      "Sim, mas sem processos formais de LGPD",
      "Usamos dados mas não sabemos o status",
      "Não utilizamos dados pessoais",
    ],
    scores: [3, -1, -1, 1],
  },
  {
    id: "P10",
    block: 3,
    label: "P10 · MAPEAMENTO DE RISCOS",
    title: "Sua empresa já realizou um mapeamento formal de riscos de integridade?",
    sub: "Fraude, corrupção, desvios éticos, riscos trabalhistas — com registro documentado.",
    options: [
      "Sim, revisado nos últimos 12 meses",
      "Sim, mas não atualizado recentemente",
      "Iniciamos o processo, ainda incompleto",
      "Não realizamos mapeamento",
    ],
    scores: [3, 1, 0, -2],
  },
  {
    id: "P11",
    block: 3,
    label: "P11 · CLIMA ORGANIZACIONAL",
    title: "Como avalia a ocorrência de assédio ou discriminação na sua empresa?",
    sub: "Considere relatos formais ou informais nos últimos 2 anos.",
    options: [
      "Não há registros ou relatos conhecidos",
      "Casos pontuais já foram tratados",
      "Há casos recorrentes ou não resolvidos",
      "Não tenho informação sobre isso",
    ],
    scores: [2, 0, -3, -1],
  },
];

type Level = "avancado" | "estruturado" | "inicial" | "urgente";

const levelContent: Record<Level, { badge: string; title: string; desc: string }> = {
  avancado: {
    badge: "PROGRAMA AVANÇADO",
    title: "SUA EMPRESA TEM UMA BASE SÓLIDA DE INTEGRIDADE",
    desc: "Vocês já contam com as estruturas essenciais de compliance. O próximo passo é evoluir para um programa certificável, com indicadores de maturidade e auditorias periódicas.",
  },
  estruturado: {
    badge: "PROGRAMA EM ESTRUTURAÇÃO",
    title: "HÁ BOAS INICIATIVAS, MAS AINDA HÁ LACUNAS RELEVANTES",
    desc: "A empresa tem alguns elementos no lugar, mas faltam processos sistemáticos e responsabilidades bem definidas. Intervenções específicas podem elevar significativamente o nível de proteção.",
  },
  inicial: {
    badge: "FASE INICIAL",
    title: "O PROGRAMA DE INTEGRIDADE AINDA ESTÁ ENGATINHANDO",
    desc: "Existem riscos sem cobertura adequada. É o momento ideal para estruturar as bases — antes que um incidente exija uma resposta reativa e mais custosa.",
  },
  urgente: {
    badge: "ATENÇÃO URGENTE",
    title: "RISCOS CRÍTICOS IDENTIFICADOS SEM COBERTURA",
    desc: "Há lacunas que representam exposição legal e reputacional imediata. Recomendamos uma conversa prioritária para mapear as ações de maior impacto no menor tempo.",
  },
};

const serviceRules: {
  qid: string;
  threshold: number;
  exact?: number[];
  name: string;
  desc: string;
}[] = [
  {
    qid: "P4",
    threshold: 1,
    name: "Código de Conduta e Ética",
    desc: "Elaboração ou revisão com linguagem acessível e alinhamento à cultura organizacional.",
  },
  {
    qid: "P5",
    threshold: 1,
    name: "Contratos com cláusulas de compliance",
    desc: "Padronização com cláusulas de ética, LGPD e direitos trabalhistas.",
  },
  {
    qid: "P7",
    threshold: 2,
    name: "Canal de Ética e Ouvidoria",
    desc: "Implantação de canal anônimo com triagem e gestão de relatos.",
  },
  {
    qid: "P6",
    threshold: 1,
    name: "DPO e Compliance Officer",
    desc: "Estruturação ou terceirização da função de responsável por integridade e dados.",
  },
  {
    qid: "P10",
    threshold: 1,
    name: "Mapeamento de riscos de integridade",
    desc: "Matriz de riscos cobrindo fraude, corrupção e desvios éticos.",
  },
  {
    qid: "P8",
    threshold: 1,
    name: "Treinamentos de ética e compliance",
    desc: "Programa de capacitação cobrindo múltiplos temas com registro de evidências.",
  },
  {
    qid: "P9",
    threshold: 0,
    exact: [1, 2],
    name: "Adequação à LGPD",
    desc: "Mapeamento de dados, bases legais, política de privacidade e nomeação de DPO.",
  },
  {
    qid: "P11",
    threshold: 1,
    name: "Prevenção ao assédio e discriminação",
    desc: "Políticas, treinamentos e mecanismos de gestão de conflitos.",
  },
];

// Color tokens (inline values to avoid CSS class resolution issues)
const C_HEADING = "#FFFFFF";
const C_BODY = "rgba(255,255,255,0.72)";
const C_ACCENT = "#C9853A";
const C_CARD_BG = "rgba(255,255,255,0.06)";
const C_BORDER = "rgba(255,255,255,0.15)";

const MaturityQuizSection = () => {
  const { t } = useLang();
  const [stage, setStage] = useState<"intro" | "quiz" | "result">("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [consent, setConsent] = useState(false);

  const total = questions.length;
  const current = questions[step];
  const selectedIdx = current ? answers[current.id] : undefined;
  const progressPct = ((step + (selectedIdx !== undefined ? 1 : 0)) / total) * 100;

  const score = useMemo(
    () =>
      questions
        .filter((q) => q.id !== "P2")
        .reduce((sum, q) => {
          const idx = answers[q.id];
          return idx !== undefined ? sum + q.scores[idx] : sum;
        }, 0),
    [answers],
  );

  const level: Level = useMemo(() => {
    if (score >= 10) return "avancado";
    if (score >= 4) return "estruturado";
    if (score >= 0) return "inicial";
    return "urgente";
  }, [score]);

  const recommendedServices = useMemo(() => {
    const list = serviceRules.filter((r) => {
      const idx = answers[r.qid];
      if (idx === undefined) return false;
      if (r.exact) return r.exact.includes(idx);
      return idx >= r.threshold;
    });
    return list.slice(0, 5);
  }, [answers]);

  const handleSelect = (idx: number) => {
    setAnswers((p) => ({ ...p, [current.id]: idx }));
  };

  const handleNext = () => {
    if (selectedIdx === undefined) return;
    if (step === total - 1) {
      setStage("result");
      return;
    }
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    if (step === 0) {
      setStage("intro");
      return;
    }
    setStep((s) => s - 1);
  };

  const handleStart = () => {
    setStage("quiz");
    setStep(0);
  };

  const scrollToContact = () => {
    const nivelLabel: Record<Level, string> = {
      avancado: "Programa Avançado",
      estruturado: "Programa em Estruturação",
      inicial: "Fase Inicial",
      urgente: "Atenção Urgente",
    };
    const setorOpts = [
      "Indústria & Manufatura",
      "Agronegócio",
      "Construção",
      "Varejo & Serviços",
      "Outro",
    ];
    const porteOpts = [
      "Até 50 colaboradores",
      "51 a 250 colaboradores",
      "251 a 1.000 colaboradores",
      "Acima de 1.000 colaboradores",
    ];
    const setor = answers["P1"] !== undefined ? setorOpts[answers["P1"]] : "";
    const porte = answers["P2"] !== undefined ? porteOpts[answers["P2"]] : "";
    const servicos = recommendedServices.map((s) => s.name).join(", ");

    const texto = [
      `Diagnóstico Humana — ${nivelLabel[level]}`,
      setor ? `Setor: ${setor}` : "",
      porte ? `Porte: ${porte}` : "",
      servicos ? `Serviços de interesse: ${servicos}` : "",
      "",
      "Olá! Acabei de completar o diagnóstico de maturidade em integridade no site da Humana e gostaria de conversar sobre os próximos passos.",
    ]
      .filter(Boolean)
      .join("\n");

    if (typeof (window as any).__preencherContato === "function") {
      (window as any).__preencherContato(texto);
    }

    const el = document.getElementById("contato");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="questionario" className="section-padding min-h-screen flex items-center">
      <div
        className="max-w-3xl mx-auto w-full"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "2px",
          padding: "clamp(2rem, 5vw, 4rem)",
          backdropFilter: "blur(2px)",
          backgroundColor: "rgba(0, 0, 0, 0.12)",
        }}
      >
        {stage === "intro" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <h2
              className="font-bold uppercase tracking-tight mb-6"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                lineHeight: 1.05,
                color: C_HEADING,
              }}
            >
              {t.quiz.introHeading}
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
              style={{ color: C_BODY }}
            >
              {t.quiz.introDescription}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {t.quiz.introTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    border: `1px solid ${C_BORDER}`,
                    color: C_BODY,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className="flex items-start gap-3 mb-10 px-4 py-3"
              style={{
                backgroundColor: C_CARD_BG,
                border: `1px solid ${C_BORDER}`,
              }}
            >
              <Lock className="h-4 w-4 mt-0.5 shrink-0" style={{ color: C_ACCENT }} />
              <p className="text-sm leading-relaxed" style={{ color: C_BODY }}>
                {t.quiz.introPrivacy}
              </p>
            </div>

            <button onClick={handleStart} className="btn-on-dark">
              {t.quiz.startBtn}
            </button>
          </motion.div>
        )}

        {stage === "quiz" && current && (
          <div>
            {/* Progress bar */}
            <div
              className="w-full mb-6"
              style={{ height: 3, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div
                style={{
                  height: "100%",
                  backgroundColor: C_ACCENT,
                  width: `${progressPct}%`,
                  transition: "width 0.3s ease",
                }}
              />
            </div>

            {/* Block indicators */}
            <div
              className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-[10px] uppercase tracking-[0.2em]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {t.quiz.blocks.map((b, i) => {
                const done = i < current.block;
                const active = i === current.block;
                return (
                  <span
                    key={b}
                    style={{
                      color: active ? C_ACCENT : "#FFFFFF",
                      opacity: active ? 1 : done ? 0.6 : 0.3,
                    }}
                  >
                    {done ? "✓ " : ""}
                    {b}
                  </span>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.22em] mb-3"
                  style={{ fontFamily: "'DM Mono', monospace", color: C_ACCENT }}
                >
                  {t.quiz.questions[step].label}
                </p>
                <h3
                  className="text-2xl md:text-3xl font-medium mb-3 leading-snug"
                  style={{ textTransform: "none", letterSpacing: "-0.01em", color: C_HEADING }}
                >
                  {t.quiz.questions[step].title}
                </h3>
                <p
                  className="text-sm md:text-base mb-8 max-w-2xl"
                  style={{ color: C_BODY }}
                >
                  {t.quiz.questions[step].sub}
                </p>

                <div className="flex flex-col gap-3 mb-10">
                  {t.quiz.questions[step].options.map((opt, i) => {
                    const isSel = selectedIdx === i;
                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelect(i)}
                        className="text-left px-5 py-4 transition-all duration-200"
                        style={{
                          backgroundColor: isSel
                            ? "rgba(201,133,58,0.2)"
                            : "transparent",
                          border: `1px solid ${
                            isSel ? "#C9853A" : "rgba(255,255,255,0.35)"
                          }`,
                          color: "#FFFFFF",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSel) {
                            e.currentTarget.style.backgroundColor =
                              "rgba(255,255,255,0.08)";
                            e.currentTarget.style.borderColor = "#FFFFFF";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSel) {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.borderColor =
                              "rgba(255,255,255,0.35)";
                          }
                        }}
                      >
                        <span className="text-base">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={handleBack}
                className="px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-all"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  border: "1px solid rgba(255,255,255,0.35)",
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  opacity: 0.6,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.opacity = "0.6";
                }}
              >
                {t.quiz.backBtn}
              </button>

              <span
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{ fontFamily: "'DM Mono', monospace", color: C_BODY }}
              >
                {step + 1} {t.quiz.stepOf} {total}
              </span>

              <button
                onClick={handleNext}
                disabled={selectedIdx === undefined}
                className="px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-all"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  border: "1px solid #FFFFFF",
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  opacity: selectedIdx === undefined ? 0.25 : 1,
                  pointerEvents: selectedIdx === undefined ? "none" : "auto",
                }}
                onMouseEnter={(e) => {
                  if (selectedIdx !== undefined) {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                  }
                }}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {step === total - 1 ? t.quiz.submitBtn : t.quiz.nextBtn}
              </button>
            </div>
          </div>
        )}

        {stage === "result" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <span
              className="inline-block px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] mb-6"
              style={{
                fontFamily: "'DM Mono', monospace",
                backgroundColor: C_CARD_BG,
                border: `1px solid ${C_BORDER}`,
                color: C_ACCENT,
              }}
            >
              {t.quiz.levels[level].badge}
            </span>

            <h2
              className="font-bold uppercase tracking-tight mb-5"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                lineHeight: 1.1,
                color: C_HEADING,
              }}
            >
              {t.quiz.levels[level].title}
            </h2>

            <p
              className="text-base leading-relaxed mb-10 max-w-2xl"
              style={{ color: C_BODY }}
            >
              {t.quiz.levels[level].desc}
            </p>

            {recommendedServices.length > 0 && (
              <div className="mb-10">
                <p
                  className="text-[10px] uppercase tracking-[0.22em] mb-4"
                  style={{ fontFamily: "'DM Mono', monospace", color: C_BODY }}
                >
                  {t.quiz.recommendedTitle}
                </p>
                <div style={{ borderTop: `1px solid ${C_BORDER}` }}>
                  {recommendedServices.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-start gap-4 py-4"
                      style={{ borderBottom: `1px solid ${C_BORDER}` }}
                    >
                      <span
                        className="mt-2 shrink-0"
                        style={{
                          width: 6,
                          height: 6,
                          backgroundColor: C_ACCENT,
                          display: "inline-block",
                        }}
                      />
                      <div>
                        <p
                          className="font-medium text-base mb-1"
                          style={{ color: C_HEADING }}
                        >
                          {s.name}
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: C_BODY }}
                        >
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Consent */}
            <label
              className="flex items-start gap-3 cursor-pointer mb-6"
              style={{
                padding: "14px 16px",
                backgroundColor: C_CARD_BG,
                border: `1px solid ${C_BORDER}`,
              }}
            >
              <span
                className="shrink-0 mt-0.5 flex items-center justify-center transition-all"
                style={{
                  width: 18,
                  height: 18,
                  backgroundColor: consent ? C_ACCENT : "transparent",
                  border: `1px solid ${consent ? C_ACCENT : C_BORDER}`,
                }}
              >
                {consent && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
              </span>
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="sr-only"
              />
              <span className="text-sm leading-relaxed" style={{ color: C_BODY }}>
                {t.quiz.consentText}
              </span>
            </label>

            <button onClick={scrollToContact} className="btn-on-dark mb-3">
              {t.quiz.ctaMessage}
            </button>

            <p
              className="uppercase tracking-[0.2em]"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem",
                opacity: 0.6,
                color: C_BODY,
              }}
            >
              {t.quiz.responseNote}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MaturityQuizSection;

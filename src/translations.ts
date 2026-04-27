export type Lang = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      sobre: "Sobre",
      servicos: "Serviços",
      questionario: "Questionário",
      contato: "Contato",
      lang: "EN",
    },
    hero: {
      tagline: "Soluções em integridade",
    },
    marquee: {
      text: "Integridade · Compliance · Ética · Governança",
    },
    risks: {
      heading1: "Os riscos existem.",
      heading2: "Não deixe que eles impactem",
      heading3: "negativamente seu negócio",
      cards: [
        {
          title: "Assédio no Trabalho",
          stat: "142.828",
          label: "novas ações de assédio moral em 2025",
          sub: "+22% em relação a 2024 · Fonte: TST/CSJT",
        },
        {
          title: "Trabalho Escravo",
          stat: "613",
          label: "empresas na Lista Suja do MTE (abril/2026)",
          sub: "+169 novos incluídos em 2024",
        },
        {
          title: "Violação de Dados",
          stat: "2%",
          label:
            "do faturamento — teto da multa a ser aplicada pela ANPD em infrações de dados pessoais",
          sub: "Fonte: Lei Geral de Proteção de Dados (LGPD)",
        },
      ],
    },
    scrollReveal: {
      words: [
        { text: "Sua" },
        { text: "empresa", breakAfter: true },
        { text: "está", accent: true, breakAfter: true },
        { text: "protegida?" },
      ],
    },
    quote: {
      main: "A MAIORIA DAS EMPRESAS SABE QUE A INTEGRIDADE IMPORTA, MAS POUCAS CONSEGUEM TRANSFORMÁ-LA EM CULTURA.",
      highlight: "É EXATAMENTE AÍ QUE A HUMANA ATUA.",
      attribution: "— HUGO VAZ MENDES · FUNDADOR",
    },
    bio: {
      aboutEyebrow: "SOBRE A HUMANA",
      aboutTitle: "A HUMANA",
      founderEyebrow: "SOBRE O FUNDADOR",
      founderTitle: "HUGO MENDES",
      aboutHumana:
        "A Humana nasceu com um propósito claro: levar a cultura de integridade para mais empresas e, com isso, potencializá-las e impulsionar seu crescimento sustentável, respeitando suas particularidades internas e de mercado. Atualmente, o investimento em integridade ainda é priorizado por um número limitado de organizações, seja porque não é compreendido como um pilar fundamental dos negócios, seja porque os riscos a ele atrelados são subestimados. A Humana vem para mudar esse cenário. Nossa missão é tornar acessível um programa de integridade de qualidade: construído a partir dos valores e da realidade de cada empresa, traduzido em políticas, procedimentos, canais e comunicações que sua comunidade compreenda e pratique.",
      aboutFounder:
        "Hugo Mendes é advogado com quase 20 anos de experiência em ambientes jurídicos corporativos de grandes empresas nacionais e multinacionais, em setores como engenharia, química e mídia. É graduado em Direito pela PUC Campinas, mestre em Direito Empresarial Internacional pela Central European University (Budapeste, Hungria) e em Direito Comercial pela PUC-SP, e MBA em ESG e Compliance pela USP. Ao longo de sua trajetória, conduziu projetos comerciais e de integridade de diferentes magnitudes. Acredita que um programa de integridade de sucesso não se constrói com modelos genéricos, mas sim a partir da escuta, da compreensão dos desafios corporativos e com o comprometimento real da organização, principalmente da alta liderança.",
    },
    services: {
      eyebrow: "O que fazemos",
      heading1: "NOSSOS SERVIÇOS",
      heading2: "FORTALECEM",
      heading3: "E",
      heading4: "IMPULSIONAM",
      heading5: "SEU NEGÓCIO.",
      description:
        "Serviços para empresas que querem crescer com segurança, fortalecendo sua reputação e reduzindo riscos.",
      items: [
        { title: "Programa de Integridade", desc: "Governança e cultura de integridade." },
        { title: "Canal de Ética", desc: "Fluxos de investigação e correção." },
        { title: "Direitos Humanos", desc: "Mapeamento e avaliação de risco." },
        { title: "Proteção de Dados", desc: "Mapeamento e revisão de atividades." },
        { title: "Treinamentos", desc: "Capacitação para todos os níveis." },
        { title: "Gov. Inteligência Artificial", desc: "Governança ética e responsável de IA." },
      ],
    },
    contact: {
      heading1: "FALE",
      heading2: "CONOSCO",
      subheading: "Vamos conversar. Envie uma mensagem ou nos encontre nas redes.",
      namePlaceholder: "Nome",
      emailPlaceholder: "E-mail",
      messagePlaceholder: "Mensagem",
      submit: "Enviar",
      successTitle: "MENSAGEM ENVIADA ✓",
      successSub: "Entraremos em contato em breve.",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
    },
    quiz: {
      blocks: ["PERFIL", "GOVERNANÇA", "OPERAÇÕES", "RISCOS"],
      introHeading: "Descubra o nível de maturidade em integridade da sua empresa",
      introDescription:
        "Responda 11 perguntas e receba um diagnóstico automático e personalizado, indicando os riscos mais relevantes e serviços mais adequados para o seu momento.",
      introTags: ["~ 3 MINUTOS", "11 PERGUNTAS", "DIAGNÓSTICO IMEDIATO"],
      introPrivacy:
        "Não se preocupe — seus dados serão compartilhados conosco apenas se você autorizar ao final do questionário. Nenhuma informação é enviada sem o seu consentimento.",
      startBtn: "INICIAR DIAGNÓSTICO →",
      backBtn: "← VOLTAR",
      nextBtn: "CONTINUAR →",
      submitBtn: "VER DIAGNÓSTICO →",
      stepOf: "DE",
      recommendedTitle: "SERVIÇOS RECOMENDADOS",
      consentText:
        "Autorizo o compartilhamento deste diagnóstico com a equipe da Humana para que possam entrar em contato com uma proposta personalizada.",
      ctaMessage: "FALAR COM UM ESPECIALISTA →",
      responseNote: "Resposta em até 1 dia útil · Sem compromisso",
      questions: [
        {
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
        },
        {
          label: "P2 · PORTE",
          title: "Quantos colaboradores tem sua empresa?",
          sub: "O porte define a complexidade do programa adequado.",
          options: ["Até 50", "51 a 250", "251 a 1.000", "Acima de 1.000"],
        },
        {
          label: "P3 · SETOR PÚBLICO",
          title: "Sua empresa contrata ou pretende contratar com o setor público?",
          sub: "Licitações, contratos com prefeituras, governos estaduais ou federais.",
          options: [
            "Sim, já temos contratos públicos ativos",
            "Estamos participando de licitações",
            "Pretendemos contratar futuramente",
            "Não, atuamos apenas no setor privado",
          ],
        },
        {
          label: "P4 · CÓDIGO DE CONDUTA",
          title: "Sua empresa possui um Código de Conduta e Ética?",
          sub: "Documento que define os valores, princípios e regras de comportamento esperados.",
          options: [
            "Sim, atualizado nos últimos 2 anos",
            "Sim, mas desatualizado ou pouco usado",
            "Em elaboração",
            "Não possui",
          ],
        },
        {
          label: "P5 · CONTRATOS",
          title:
            "A empresa utiliza contratos padronizados com clientes, fornecedores ou parceiros?",
          sub: "Incluindo cláusulas de compliance, ética e proteção de dados.",
          options: [
            "Sim, com cláusulas de compliance e LGPD",
            "Sim, mas sem cláusulas específicas",
            "Contratos informais ou caso a caso",
            "Não temos contratos padronizados",
          ],
        },
        {
          label: "P6 · RESPONSÁVEL",
          title: "Há um responsável formal por integridade e proteção de dados na empresa?",
          sub: "DPO, Compliance Officer ou profissional com essa atribuição definida.",
          options: [
            "Sim, função dedicada e exclusiva",
            "Sim, acumulado com outra função",
            "Estamos estruturando essa função",
            "Não há responsável definido",
          ],
        },
        {
          label: "P7 · CANAL DE ÉTICA",
          title: "Existe um canal de relatos (denúncias/ética) ativo?",
          sub: "Canal para receber denúncias anônimas de colaboradores, fornecedores ou terceiros.",
          options: [
            "Sim, com gestão interna",
            "Sim, via plataforma terceirizada",
            "Estamos implantando",
            "Não temos canal",
          ],
        },
        {
          label: "P8 · TREINAMENTOS",
          title:
            "Nos últimos 12 meses, a empresa realizou treinamentos sobre ética, compliance ou prevenção ao assédio?",
          sub: "Considera treinamentos presenciais, online ou comunicações formais.",
          options: [
            "Sim, incluindo de assédio",
            "Sim, mas não de assédio",
            "Estamos planejando para este ano",
            "Não realizamos treinamentos",
          ],
        },
        {
          label: "P9 · LGPD",
          title: "Vocês utilizam dados pessoais de clientes ou leads para ações de marketing?",
          sub: "CRM, e-mail marketing, anúncios segmentados, WhatsApp comercial etc.",
          options: [
            "Sim, com consentimento e política de privacidade",
            "Sim, mas sem processos formais de LGPD",
            "Usamos dados mas não sabemos o status",
            "Não utilizamos dados pessoais",
          ],
        },
        {
          label: "P10 · MAPEAMENTO DE RISCOS",
          title: "Sua empresa já realizou um mapeamento formal de riscos de integridade?",
          sub: "Fraude, corrupção, desvios éticos, riscos trabalhistas — com registro documentado.",
          options: [
            "Sim, revisado nos últimos 12 meses",
            "Sim, mas não atualizado recentemente",
            "Iniciamos o processo, ainda incompleto",
            "Não realizamos mapeamento",
          ],
        },
        {
          label: "P11 · CLIMA ORGANIZACIONAL",
          title: "Como avalia a ocorrência de assédio ou discriminação na sua empresa?",
          sub: "Considere relatos formais ou informais nos últimos 2 anos.",
          options: [
            "Não há registros ou relatos conhecidos",
            "Casos pontuais já foram tratados",
            "Há casos recorrentes ou não resolvidos",
            "Não tenho informação sobre isso",
          ],
        },
      ],
      levels: {
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
      },
    },
  },
  en: {
    nav: {
      sobre: "About",
      servicos: "Services",
      questionario: "Assessment",
      contato: "Contact",
      lang: "PT",
    },
    hero: {
      tagline: "Integrity solutions",
    },
    marquee: {
      text: "Integrity · Compliance · Ethics · Governance",
    },
    risks: {
      heading1: "The risks are real.",
      heading2: "Don't let them negatively",
      heading3: "impact your business",
      cards: [
        {
          title: "Workplace Harassment",
          stat: "142,828",
          label: "new moral harassment lawsuits in 2025",
          sub: "+22% compared to 2024 · Source: TST/CSJT",
        },
        {
          title: "Slave Labor",
          stat: "613",
          label: "companies on the MTE Dirty List (April/2026)",
          sub: "+169 newly added in 2024",
        },
        {
          title: "Data Breach",
          stat: "2%",
          label:
            "of revenue — cap on the fine the ANPD may apply for personal-data violations",
          sub: "Source: Brazilian General Data Protection Law (LGPD)",
        },
      ],
    },
    scrollReveal: {
      words: [
        { text: "Is" },
        { text: "your", breakAfter: true },
        { text: "company", accent: true, breakAfter: true },
        { text: "protected?" },
      ],
    },
    quote: {
      main: "MOST COMPANIES KNOW THAT INTEGRITY MATTERS, BUT FEW MANAGE TO TURN IT INTO CULTURE.",
      highlight: "THAT IS EXACTLY WHERE HUMANA COMES IN.",
      attribution: "— HUGO VAZ MENDES · FOUNDER",
    },
    bio: {
      aboutEyebrow: "ABOUT HUMANA",
      aboutTitle: "HUMANA",
      founderEyebrow: "ABOUT THE FOUNDER",
      founderTitle: "HUGO MENDES",
      aboutHumana:
        "Humana was born with a clear purpose: to bring an integrity culture to more companies and, in doing so, empower them and drive their sustainable growth, respecting their internal and market specifics. Today, investment in integrity is still prioritized by a limited number of organizations, either because it is not understood as a fundamental business pillar, or because the related risks are underestimated. Humana is here to change that. Our mission is to make a high-quality integrity program accessible: built from each company's values and reality, translated into policies, procedures, channels and communications that its community can understand and put into practice.",
      aboutFounder:
        "Hugo Mendes is a lawyer with nearly 20 years of experience in corporate legal environments at large national and multinational companies, in sectors such as engineering, chemicals and media. He holds a Law degree from PUC Campinas, a Master's in International Business Law from Central European University (Budapest, Hungary) and in Commercial Law from PUC-SP, as well as an MBA in ESG and Compliance from USP. Throughout his career, he has led commercial and integrity projects of varying scope. He believes that a successful integrity program is not built from generic templates, but from listening, understanding corporate challenges, and the genuine commitment of the organization — especially of senior leadership.",
    },
    services: {
      eyebrow: "What we do",
      heading1: "OUR SERVICES",
      heading2: "STRENGTHEN",
      heading3: "AND",
      heading4: "DRIVE",
      heading5: "YOUR BUSINESS.",
      description:
        "Services for companies that want to grow safely, strengthening their reputation and reducing risks.",
      items: [
        { title: "Integrity Program", desc: "Integrity governance and culture." },
        { title: "Ethics Hotline", desc: "Investigation and remediation flows." },
        { title: "Human Rights", desc: "Mapping and risk assessment." },
        { title: "Data Protection", desc: "Mapping and review of activities." },
        { title: "Training", desc: "Capacity building for all levels." },
        { title: "AI Governance", desc: "Ethical and responsible AI governance." },
      ],
    },
    contact: {
      heading1: "GET IN",
      heading2: "TOUCH",
      subheading: "Let's talk. Send us a message or find us on social media.",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      submit: "Send",
      successTitle: "MESSAGE SENT ✓",
      successSub: "We'll be in touch shortly.",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
    },
    quiz: {
      blocks: ["PROFILE", "GOVERNANCE", "OPERATIONS", "RISKS"],
      introHeading: "Discover your company's integrity maturity level",
      introDescription:
        "Answer 11 questions and receive an automated, personalized diagnosis showing the most relevant risks and the services best suited to your moment.",
      introTags: ["~ 3 MINUTES", "11 QUESTIONS", "INSTANT DIAGNOSIS"],
      introPrivacy:
        "Don't worry — your data will only be shared with us if you authorize it at the end of the questionnaire. No information is sent without your consent.",
      startBtn: "START DIAGNOSIS →",
      backBtn: "← BACK",
      nextBtn: "CONTINUE →",
      submitBtn: "SEE DIAGNOSIS →",
      stepOf: "OF",
      recommendedTitle: "RECOMMENDED SERVICES",
      consentText:
        "I authorize sharing this diagnosis with the Humana team so they can reach out with a tailored proposal.",
      ctaMessage: "TALK TO A SPECIALIST →",
      responseNote: "Reply within 1 business day · No commitment",
      questions: [
        {
          label: "Q1 · SECTOR",
          title: "What is your company's sector?",
          sub: "Sectors with greater regulatory exposure and compliance risks start with an adjusted score.",
          options: [
            "Industry & Manufacturing",
            "Agribusiness",
            "Construction",
            "Retail & Services",
            "Other",
          ],
        },
        {
          label: "Q2 · SIZE",
          title: "How many employees does your company have?",
          sub: "Size defines the complexity of the appropriate program.",
          options: ["Up to 50", "51 to 250", "251 to 1,000", "Over 1,000"],
        },
        {
          label: "Q3 · PUBLIC SECTOR",
          title: "Does your company contract, or plan to contract, with the public sector?",
          sub: "Public tenders, contracts with municipal, state or federal governments.",
          options: [
            "Yes, we already have active public contracts",
            "We are participating in public tenders",
            "We plan to contract in the future",
            "No, we operate only in the private sector",
          ],
        },
        {
          label: "Q4 · CODE OF CONDUCT",
          title: "Does your company have a Code of Conduct and Ethics?",
          sub: "A document defining the expected values, principles and rules of behavior.",
          options: [
            "Yes, updated within the last 2 years",
            "Yes, but outdated or rarely used",
            "Being drafted",
            "We do not have one",
          ],
        },
        {
          label: "Q5 · CONTRACTS",
          title:
            "Does the company use standardized contracts with clients, suppliers or partners?",
          sub: "Including compliance, ethics and data protection clauses.",
          options: [
            "Yes, with compliance and LGPD clauses",
            "Yes, but without specific clauses",
            "Informal or case-by-case contracts",
            "We have no standardized contracts",
          ],
        },
        {
          label: "Q6 · RESPONSIBLE PERSON",
          title: "Is there a formal person responsible for integrity and data protection?",
          sub: "DPO, Compliance Officer or a professional with that defined role.",
          options: [
            "Yes, dedicated and exclusive role",
            "Yes, combined with another role",
            "We are structuring this role",
            "No defined responsible person",
          ],
        },
        {
          label: "Q7 · ETHICS HOTLINE",
          title: "Is there an active reporting (whistleblowing/ethics) channel?",
          sub: "A channel to receive anonymous reports from employees, suppliers or third parties.",
          options: [
            "Yes, managed internally",
            "Yes, via a third-party platform",
            "We are implementing it",
            "We have no channel",
          ],
        },
        {
          label: "Q8 · TRAINING",
          title:
            "In the last 12 months, has the company conducted training on ethics, compliance or harassment prevention?",
          sub: "Includes in-person, online training or formal communications.",
          options: [
            "Yes, including harassment",
            "Yes, but not on harassment",
            "We are planning it for this year",
            "We have not run any training",
          ],
        },
        {
          label: "Q9 · LGPD",
          title: "Do you use personal data from customers or leads for marketing actions?",
          sub: "CRM, email marketing, targeted ads, business WhatsApp, etc.",
          options: [
            "Yes, with consent and a privacy policy",
            "Yes, but without formal LGPD processes",
            "We use data but don't know its status",
            "We do not use personal data",
          ],
        },
        {
          label: "Q10 · RISK MAPPING",
          title: "Has your company performed a formal integrity risk mapping?",
          sub: "Fraud, corruption, ethical deviations, labor risks — with documented records.",
          options: [
            "Yes, reviewed in the last 12 months",
            "Yes, but not recently updated",
            "We started the process, still incomplete",
            "We have not done any mapping",
          ],
        },
        {
          label: "Q11 · ORGANIZATIONAL CLIMATE",
          title: "How do you assess the occurrence of harassment or discrimination at your company?",
          sub: "Consider formal or informal reports in the last 2 years.",
          options: [
            "No known records or reports",
            "Isolated cases have already been handled",
            "There are recurring or unresolved cases",
            "I have no information on this",
          ],
        },
      ],
      levels: {
        avancado: {
          badge: "ADVANCED PROGRAM",
          title: "YOUR COMPANY HAS A SOLID INTEGRITY FOUNDATION",
          desc: "You already have the essential compliance structures in place. The next step is to evolve into a certifiable program with maturity indicators and periodic audits.",
        },
        estruturado: {
          badge: "PROGRAM IN DEVELOPMENT",
          title: "GOOD INITIATIVES EXIST, BUT THERE ARE STILL RELEVANT GAPS",
          desc: "The company has some elements in place, but lacks systematic processes and well-defined responsibilities. Targeted interventions can significantly raise the level of protection.",
        },
        inicial: {
          badge: "EARLY STAGE",
          title: "THE INTEGRITY PROGRAM IS STILL IN ITS EARLY STEPS",
          desc: "There are risks without proper coverage. This is the ideal moment to build the foundations — before an incident demands a reactive and more costly response.",
        },
        urgente: {
          badge: "URGENT ATTENTION",
          title: "CRITICAL RISKS IDENTIFIED WITHOUT COVERAGE",
          desc: "There are gaps representing immediate legal and reputational exposure. We recommend a priority conversation to map the highest-impact actions in the shortest time.",
        },
      },
    },
  },
} as const;

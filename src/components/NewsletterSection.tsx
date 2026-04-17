import AnimatedSection from "./AnimatedSection";
import { CalendarDays } from "lucide-react";

const posts = [
  {
    title: "Direitos Humanos e o ambiente corporativo: por onde começar?",
    excerpt:
      "Entenda como mapear riscos e criar uma cultura de respeito dentro da sua empresa.",
    date: "28 Mar 2026",
    author: "Equipe Humana",
    tag: "Direitos Humanos",
  },
  {
    title: "Canal de Ética: mais do que uma obrigação legal",
    excerpt:
      "Por que um canal de ética bem estruturado é a base de qualquer programa de integridade.",
    date: "15 Mar 2026",
    author: "Equipe Humana",
    tag: "Integridade",
  },
  {
    title: "LGPD na prática: 5 passos para adequar sua empresa",
    excerpt:
      "Um guia objetivo para iniciar o mapeamento de dados pessoais e reduzir riscos.",
    date: "02 Mar 2026",
    author: "Equipe Humana",
    tag: "Proteção de Dados",
  },
];

const NewsletterSection = () => (
  <section id="conteudo" className="snap-start min-h-screen flex items-center section-padding bg-transparent overflow-hidden">
    <div className="mx-auto max-w-6xl">
      <AnimatedSection>
        <h2 className="mb-4 text-[clamp(2rem,5vw,3.5rem)] leading-[0.9] tracking-tighter text-light-zone-heading">
          CONTEÚDO
          <br />
          <span className="text-light-zone-accent">HUMANA</span>
        </h2>
        <p className="mb-16 max-w-xl text-light-zone-body">
          Artigos, análises e reflexões do nosso time sobre direitos humanos,
          integridade e proteção de dados.
        </p>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post, i) => (
          <AnimatedSection key={post.title} delay={i * 0.12}>
            <article
              className="flex h-full flex-col border-2 bg-light-zone-card backdrop-blur-sm p-8 transition-all duration-300 hover:bg-[rgba(26,10,0,0.08)]"
              style={{ borderColor: "rgba(26, 10, 0, 0.15)" }}
            >
              <span
                className="mb-4 inline-block self-start border px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-light-zone-heading"
                style={{ borderColor: "rgba(26, 10, 0, 0.3)" }}
              >
                {post.tag}
              </span>

              <h3 className="mb-3 text-lg font-bold leading-snug text-light-zone-heading">
                {post.title}
              </h3>

              <p className="mb-6 flex-1 text-sm text-light-zone-body leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-auto flex items-center gap-2 text-xs text-light-zone-body">
                <CalendarDays className="h-3.5 w-3.5" />
                <span>{post.date}</span>
                <span className="mx-1">·</span>
                <span>{post.author}</span>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default NewsletterSection;

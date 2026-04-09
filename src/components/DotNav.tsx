import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Início" },
  { id: "riscos", label: "Riscos" },
  { id: "corporativo", label: "Corporativo" },
  { id: "fornecedores", label: "Fornecedores" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "conteudo", label: "Conteúdo" },
  { id: "contato", label: "Contato" },
];

const DotNav = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = document.getElementById("main-scroll");
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const viewH = container.clientHeight;
      const index = Math.round(scrollTop / viewH);
      setActive(Math.min(index, sections.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (index: number) => {
    const container = document.getElementById("main-scroll");
    if (!container) return;
    const target = container.children[index] as HTMLElement;
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-4 top-1/2 z-50 -translate-y-1/2 flex flex-col items-center gap-3 md:right-6">
      {sections.map((s, i) => (
        <button
          key={s.id}
          onClick={() => scrollTo(i)}
          className="group relative flex items-center"
          aria-label={s.label}
        >
          {/* Tooltip */}
          <span className="absolute right-6 whitespace-nowrap rounded bg-foreground px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-background opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
            {s.label}
          </span>
          <motion.span
            className="block rounded-full border border-foreground/30 transition-colors"
            animate={{
              width: active === i ? 12 : 8,
              height: active === i ? 12 : 8,
              backgroundColor: active === i ? "hsl(var(--foreground))" : "transparent",
              borderColor: active === i ? "hsl(var(--foreground))" : "hsl(var(--foreground) / 0.3)",
            }}
            transition={{ duration: 0.3 }}
          />
        </button>
      ))}
    </nav>
  );
};

export default DotNav;

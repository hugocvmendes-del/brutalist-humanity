import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo-humana.png";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const FixedNav = () => {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const container = document.getElementById("main-scroll");
    if (!container) return;
    const onScroll = () => {
      setVisible(container.scrollTop > window.innerHeight * 0.7);
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-x-0 top-0 z-40 border-b-2 border-foreground bg-background"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-12">
            <a href="#">
              <img src={logoImg} alt="Humana" className="h-8 w-auto" />
            </a>

            {/* Desktop */}
            <nav className="hidden gap-8 md:flex">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs font-bold uppercase tracking-widest transition-colors hover:text-muted-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xs font-bold uppercase tracking-widest md:hidden"
            >
              {menuOpen ? "✕" : "MENU"}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-t-2 border-foreground md:hidden"
              >
                <div className="flex flex-col gap-4 px-6 py-6">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm font-bold uppercase tracking-widest"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default FixedNav;

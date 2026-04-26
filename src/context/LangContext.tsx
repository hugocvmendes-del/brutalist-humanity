import { createContext, useContext, useState } from "react";
import { translations, Lang } from "../translations";

const LangContext = createContext<{
  lang: Lang;
  t: typeof translations.pt;
  toggle: () => void;
}>({ lang: "pt", t: translations.pt, toggle: () => {} });

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("pt");
  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

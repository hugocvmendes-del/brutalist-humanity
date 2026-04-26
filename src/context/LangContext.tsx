import { createContext, useContext, useState } from "react";
import { translations, Lang } from "../translations";

type Dict = typeof translations.pt;

const LangContext = createContext<{
  lang: Lang;
  t: Dict;
  toggle: () => void;
}>({ lang: "pt", t: translations.pt, toggle: () => {} });

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("pt");
  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));

  const value = {
    lang,
    t: translations[lang] as unknown as Dict,
    toggle,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);

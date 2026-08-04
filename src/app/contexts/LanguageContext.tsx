import { createContext, useContext, useState, type ReactNode } from 'react';
import translations, { type Lang, type Tr } from '../i18n/translations';

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: Tr;
}>({
  lang: 'pt',
  setLang: () => {},
  tr: translations['pt'],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try { return (localStorage.getItem('portfolio-lang') as Lang) || 'pt'; }
    catch { return 'pt'; }
  });

  const setLang = (l: Lang) => {
    try { localStorage.setItem('portfolio-lang', l); } catch {}
    setLangState(l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

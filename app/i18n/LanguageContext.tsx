"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, translations, locales } from "./translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
  isReady: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && locales.some((l) => l.code === savedLocale)) {
      setLocaleState(savedLocale);
    }
    setIsReady(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: string): string => {
    return translations[locale]?.[key] || translations.en[key] || key;
  };

  const currentLocale = locales.find((l) => l.code === locale);
  const dir = currentLocale?.dir || "ltr";

  // Update document direction
  useEffect(() => {
    if (isReady) {
      document.documentElement.dir = dir;
      document.documentElement.lang = locale;
    }
  }, [dir, locale, isReady]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, dir, isReady }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

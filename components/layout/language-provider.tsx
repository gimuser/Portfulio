"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import type { Language } from "@/types/content";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageChangeEvent = "portfolio-language-change";

function getServerLanguage(): Language {
  return "en";
}

function getClientLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  if (queryLanguage === "fr" || queryLanguage === "en") {
    return queryLanguage;
  }
  const stored = window.localStorage.getItem("portfolio-language");
  return stored === "fr" ? "fr" : "en";
}

function subscribeToLanguage(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(languageChangeEvent, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(languageChangeEvent, callback);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribeToLanguage, getClientLanguage, getServerLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.set("lang", nextLanguage);
      window.history.replaceState(null, "", url);
    }

    window.localStorage.setItem("portfolio-language", nextLanguage);
    window.dispatchEvent(new Event(languageChangeEvent));
  }, []);

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const themeChangeEvent = "portfolio-theme-change";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function getServerTheme(): Theme {
  return "dark";
}

function getClientTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem("portfolio-theme");
  if (stored === "dark" || stored === "light") {
    return stored;
  }

  return getSystemTheme();
}

function subscribeToTheme(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
  const handleSystemThemeChange = () => {
    if (!window.localStorage.getItem("portfolio-theme")) {
      callback();
    }
  };

  window.addEventListener("storage", callback);
  window.addEventListener(themeChangeEvent, callback);
  mediaQuery.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(themeChangeEvent, callback);
    mediaQuery.removeEventListener("change", handleSystemThemeChange);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getClientTheme, getServerTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const nextTheme = getClientTheme() === "dark" ? "light" : "dark";
    window.localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.dispatchEvent(new Event(themeChangeEvent));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}

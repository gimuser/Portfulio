"use client";

import Link from "next/link";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import en from "@/messages/en.json";
import fr from "@/messages/fr.json";
import { useLanguage } from "@/components/layout/language-provider";
import { useTheme } from "@/components/layout/theme-provider";

const messages = { en, fr };

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/projects", key: "projects" },
  { href: "/#career-vision", key: "careerVision" },
  { href: "/cv", key: "cv" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = messages[language];

  return (
    <header className="site-header">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            OA
          </span>
          <span>
            <strong>Oualid Ait Alla</strong>
            <small>Data Science & Security</small>
          </span>
        </Link>

        <button
          className="icon-button menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {t.nav[item.key]}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <div className="segmented" aria-label="Language selector">
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={language === "fr" ? "active" : ""}
              onClick={() => setLanguage("fr")}
            >
              FR
            </button>
          </div>
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link className="button button-small" href="/cv">
            <FileText size={16} />
            {t.nav.downloadCv}
          </Link>
        </div>
      </nav>
    </header>
  );
}

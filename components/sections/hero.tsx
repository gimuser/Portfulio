"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Download, Mail, Network } from "lucide-react";
import { AnimatedRoles } from "@/components/sections/animated-roles";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { useLanguage } from "@/components/layout/language-provider";
import { localize } from "@/utils/localize";

export function Hero() {
  const { language } = useLanguage();

  return (
    <section className="hero" id="content">
      <Image
        className="hero-image"
        src="/images/secure-ai-data-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Data Science • AI • Security</p>
          <h1>Building Intelligent, Data-Driven and Secure Digital Solutions</h1>
          <AnimatedRoles roles={profile.roles} />
          <p>{localize(profile.shortProfile, language)}</p>
          <div className="hero-actions">
            <Link className="button" href="/projects">
              {language === "en" ? "View projects" : "Voir les projets"}
              <ArrowRight size={18} />
            </Link>
            <Link className="button button-secondary" href="/cv">
              <Download size={18} />
              {language === "en" ? "Download CV" : "Telecharger CV"}
            </Link>
            <Link className="button button-ghost" href="/contact">
              <Mail size={18} />
              Contact
            </Link>
          </div>
          <div className="social-placeholders" aria-label="Social links">
            <span>
              <Network size={16} />
              {profile.links.linkedin.href}
            </span>
            <span>
              <Code2 size={16} />
              {profile.links.github.href}
            </span>
          </div>
        </div>
        <div className="hero-panel" aria-label="Verified profile highlights">
          <div>
            <span className="metric-value">{projects.length}</span>
            <span>Verified GitHub + CV projects</span>
          </div>
          <div>
            <span className="metric-value">2025</span>
            <span>Latest verified project year</span>
          </div>
          <div>
            <span className="metric-value">EN / FR</span>
            <span>Bilingual CV-ready content</span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { AnimatedRoles } from "@/components/sections/animated-roles";
import { SocialIcon } from "@/components/ui/social-icons";
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
              <FileText size={18} />
              {language === "en" ? "View CV" : "Voir CV"}
            </Link>
            <Link className="button button-ghost" href="/contact">
              <Mail size={18} />
              Contact
            </Link>
          </div>
          <div className="social-placeholders" aria-label="Social links">
            <a href={profile.links.linkedin.href} target="_blank" rel="noreferrer">
              <SocialIcon name="linkedin" />
              {profile.links.linkedin.label}
            </a>
            <a href={profile.links.github.href} target="_blank" rel="noreferrer">
              <SocialIcon name="github" />
              {profile.links.github.href.replace("https://", "")}
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Profile highlights">
          <div>
            <span className="metric-value">{projects.length}</span>
            <span>Portfolio projects</span>
          </div>
          <div>
            <span className="metric-value">EN / FR</span>
            <span>Bilingual profile content</span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Copy, Download, FileText, Mail, Printer } from "lucide-react";
import { useState } from "react";
import { AtsCvDocument } from "@/components/cv/ats-cv-document";
import { useLanguage } from "@/components/layout/language-provider";
import { SocialIcon } from "@/components/ui/social-icons";
import { certifications } from "@/data/certifications";
import { atsProfessionalSummary, cvLanguages } from "@/data/cv";
import { education, experience, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import type { Language, Project } from "@/types/content";
import { localize } from "@/utils/localize";

const selectedProjectSlugs = [
  "soar-rl-agent",
  "bachelor-ai-tutor",
  "islamic-ai-chat",
  "car-price-prediction-system",
];

const skillGroupPriority = [
  "Generative AI and RAG",
  "Machine Learning & AI",
  "Data Science & Analytics",
  "Programming",
  "Backend and APIs",
  "Data Management & Information Systems",
  "Cybersecurity",
];

const skillItemOverrides: Record<string, string[]> = {
  "Generative AI and RAG": ["Retrieval-Augmented Generation (RAG)", "Embeddings", "Vector search", "Ollama", "OpenAI API", "OpenRouter", "Document parsing"],
  "Machine Learning & AI": ["Machine learning fundamentals", "Artificial intelligence", "PyTorch", "Deep learning fundamentals", "Image classification"],
  "Data Science & Analytics": ["Data cleaning", "Exploratory data analysis", "Feature engineering", "Regression modeling", "Data visualization"],
  "Programming": ["Python", "SQL", "TypeScript", "JavaScript", "C"],
  "Backend and APIs": ["Node.js", "Express", "REST APIs", "Next.js API routes"],
  "Data Management & Information Systems": ["MongoDB", "Mongoose", "Prisma", "SQLite", "Database fundamentals"],
  "Cybersecurity": ["Information systems security", "Network security", "Cryptography", "Input validation", "Rate limiting"],
};

function getProjectSummary(project: Project, language: Language) {
  return localize(project.atsSummary ?? project.cvSummary ?? project.summary, language);
}

function formatLanguageLevel(language: Language, name: string, level: string) {
  return language === "fr" ? name + " : " + level : name + ": " + level;
}

export function CvDocument({ variant = "portfolio" }: { variant?: "portfolio" | "ats" }) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const isAts = variant === "ats";
  const activeCvName = isAts ? (language === "fr" ? "CV ATS" : "ATS CV") : "CV";
  const activeCvPath = isAts ? "/ats-cv" : "/cv";
  const cvShareUrl = profile.links.website.href.replace(/\/$/, "") + activeCvPath + "?lang=" + language;
  const shareSubject = profile.name + " " + activeCvName;
  const shareText = language === "en"
    ? "Here is " + profile.name + "'s " + activeCvName + ": " + cvShareUrl
    : "Voici le " + activeCvName + " de " + profile.name + " : " + cvShareUrl;
  const encodedShareUrl = encodeURIComponent(cvShareUrl);
  const encodedShareText = encodeURIComponent(shareText);
  const encodedShareSubject = encodeURIComponent(shareSubject);
  const copyCvLink = async () => {
    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(cvShareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const labels = language === "fr"
    ? {
        print: "Imprimer / Enregistrer en PDF",
        openOther: isAts ? "Voir le CV visuel" : "Voir le CV ATS",
        save: isAts ? "Enregistrer le CV ATS en PDF" : "Enregistrer le CV en PDF",
        contact: "Coordonnées",
        summary: "Profil professionnel",
        education: "Formation",
        skills: "Compétences techniques",
        projects: "Projets sélectionnés",
        professionalExperience: "Expérience professionnelle",
        extraProject: "Projet académique complémentaire",
        certifications: "Certifications et formations",
        languages: "Langues",
        technologies: "Technologies",
        projectLink: "Projet",
      }
    : {
        print: "Print / Save PDF",
        openOther: isAts ? "View visual CV" : "View ATS CV",
        save: isAts ? "Save ATS CV as PDF" : "Save CV as PDF",
        contact: "Contact Information",
        summary: "Professional Summary",
        education: "Education",
        skills: "Technical Skills",
        projects: "Selected Projects",
        professionalExperience: "Professional Experience",
        extraProject: "Additional Academic Project",
        certifications: "Certifications and Training",
        languages: "Languages",
        technologies: "Technologies",
        projectLink: "Project",
      };

  const technicalSkillGroups = skillGroups
    .filter((group) => Object.prototype.hasOwnProperty.call(skillItemOverrides, group.title.en))
    .map((group) => ({ ...group, items: skillItemOverrides[group.title.en] }))
    .sort((first, second) => skillGroupPriority.indexOf(first.title.en) - skillGroupPriority.indexOf(second.title.en));
  const selectedProjects = selectedProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));
  const visibleEducation = education.slice(0, 3);
  const professionalExperience = experience.filter((item) => item.title.en === "AI Engineering Intern");
  const visibleExperience = experience.filter((item) => item.title.en === "Cybersecurity learning project");
  const location = language === "fr" ? "Beni Mellal, Maroc" : profile.location;
  const contactRows = [
    [
      { key: "location", text: location, href: profile.locationMapHref },
      { key: "email", text: profile.email, href: "mailto:" + profile.email },
      { key: "phone", text: profile.phone, href: "tel:" + profile.phone.replace(/\s+/g, "") },
    ],
    [
      { key: "portfolio", text: profile.links.website.href.replace(/^https?:\/\//, ""), href: profile.links.website.href },
      { key: "linkedin", text: profile.links.linkedin.href.replace(/^https?:\/\//, ""), href: profile.links.linkedin.href },
      { key: "github", text: profile.links.github.href.replace(/^https?:\/\//, ""), href: profile.links.github.href },
    ],
  ];

  return (
    <div className="cv-page" id="content">
      <div className="cv-controls no-print">
        <button className="button" type="button" onClick={() => window.print()}>
          <Printer size={18} />
          {labels.print}
        </button>
        <Link className="button button-ghost" href={isAts ? "/cv?lang=" + language : "/ats-cv?lang=" + language}>
          <FileText size={18} />
          {labels.openOther}
        </Link>
      </div>

      {isAts ? (
        <AtsCvDocument />
      ) : (
        <article className="cv-sheet">
          <header className="cv-header">
            <Image
              className="cv-photo"
              src="/images/oualid-ait-alla.jpg"
              alt={profile.name + " portrait"}
              width={110}
              height={138}
              priority
            />
            <div className="cv-heading">
              <h1>{profile.cvName}</h1>
              <p className="cv-role">{localize(profile.displayRole, language)}</p>
              <address className="cv-contact">
                {contactRows.map((row, rowIndex) => (
                  <span className="cv-contact-row" key={rowIndex}>
                    {row.map((item) => (
                      <a key={item.key} href={item.href}>
                        {item.text}
                      </a>
                    ))}
                  </span>
                ))}
              </address>
            </div>
          </header>

          <section>
            <h2>{labels.summary}</h2>
            <p>{localize(atsProfessionalSummary, language)}</p>
          </section>

          <section>
            <h2>{labels.education}</h2>
            <div className="cv-list">
              {visibleEducation.map((item) => (
                <div className="cv-entry" key={item.year + "-" + item.title.en}>
                  <div className="cv-entry-heading">
                    <h3>{localize(item.title, language)}</h3>
                    <strong>{item.period ? localize(item.period, language) : item.year}</strong>
                  </div>
                  <p className="cv-muted">{localize(item.institution, language)}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>{labels.skills}</h2>
            <div className="cv-skill-grid">
              {technicalSkillGroups.map((group) => (
                <p key={group.title.en}>
                  <strong>{localize(group.title, language)}:</strong> {group.items.join(", ")}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2>{labels.professionalExperience}</h2>
            <div className="cv-list">
              {professionalExperience.map((item) => (
                <div className="cv-entry" key={item.year + "-" + item.title.en}>
                  <div className="cv-entry-heading">
                    <h3>{localize(item.title, language)}</h3>
                    <strong>{item.period ? localize(item.period, language) : item.year}</strong>
                  </div>
                  {item.organization ? <p className="cv-muted"><strong>{item.organization}</strong>{item.location ? " | " + localize(item.location, language) : ""}{item.duration ? " | " + localize(item.duration, language) : ""}</p> : null}
                  {item.bullets.slice(0, 1).map((bullet) => <p key={bullet.en}>{localize(bullet, language)}</p>)}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>{labels.projects}</h2>
            <div className="cv-list">
              {selectedProjects.map((project) => (
                <div className="cv-entry" key={project.slug}>
                  <div className="cv-entry-heading">
                    <h3>{project.title}</h3>
                    <strong>{project.year}</strong>
                  </div>
                  <p>{getProjectSummary(project, language)}</p>
                  <small><strong>{labels.technologies}:</strong> {project.technologies.join(", ")}</small>
                  {project.github.status === "available" && project.status.en.toLowerCase().includes("public") && !project.github.href.includes("[ADD") ? (
                    <p><small><strong>{labels.projectLink}:</strong> {project.github.href}</small></p>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          {visibleExperience.length > 0 ? (
            <section>
              <h2>{labels.extraProject}</h2>
              <div className="cv-list">
                {visibleExperience.map((item) => (
                  <div key={item.year + "-" + item.title.en} className="cv-entry">
                    <div className="cv-entry-heading">
                      <h3>{localize(item.title, language)}</h3>
                      <strong>{item.period ? localize(item.period, language) : item.year}</strong>
                    </div>
                    {item.location && item.duration ? (
                      <p className="cv-muted">{localize(item.location, language)} | {localize(item.duration, language)}</p>
                    ) : null}
                    <p>{localize(item.bullets[0], language)}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {certifications.length > 0 ? (
            <section>
              <h2>{labels.certifications}</h2>
              <div className="cv-list">
                {certifications.map((certification) => (
                  <div className="cv-entry" key={certification.name}>
                    <div className="cv-entry-heading">
                      <h3>{certification.name}</h3>
                      <strong>{certification.date}</strong>
                    </div>
                    <p>{certification.organization}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section>
            <h2>{labels.languages}</h2>
            <p>
              {cvLanguages
                .map((item) => formatLanguageLevel(language, localize(item.name, language), localize(item.level, language)))
                .join(" | ")}
            </p>
          </section>
        </article>
      )}

      <div className="cv-floating-actions no-print" aria-label={activeCvName + " actions"}>
        <button className="button button-secondary" type="button" onClick={() => window.print()}>
          <Download size={18} />
          <span>{labels.save}</span>
        </button>
        <div className="cv-share-links" aria-label={language === "en" ? "Share CV links" : "Liens de partage du CV"}>
          <button
            className="cv-share-action"
            type="button"
            onClick={copyCvLink}
            title={language === "en" ? "Copy CV link" : "Copier le lien du CV"}
            aria-label={language === "en" ? "Copy CV link" : "Copier le lien du CV"}
          >
            {copied ? <Check size={17} /> : <Copy size={17} />}
            <span>{copied ? (language === "en" ? "Copied" : "Copié") : language === "en" ? "Copy link" : "Copier"}</span>
          </button>
          <a
            className="cv-share-action"
            href={"https://wa.me/?text=" + encodedShareText}
            target="_blank"
            rel="noreferrer"
            title="Share CV on WhatsApp"
            aria-label="Share CV on WhatsApp"
          >
            <SocialIcon name="whatsapp" size={17} />
            <span>WhatsApp</span>
          </a>
          <a
            className="cv-share-action"
            href={"https://www.linkedin.com/sharing/share-offsite/?url=" + encodedShareUrl}
            target="_blank"
            rel="noreferrer"
            title="Share CV on LinkedIn"
            aria-label="Share CV on LinkedIn"
          >
            <SocialIcon name="linkedin" size={17} />
            <span>LinkedIn</span>
          </a>
          <a
            className="cv-share-action"
            href={"mailto:?subject=" + encodedShareSubject + "&body=" + encodedShareText}
            title="Share CV by email"
            aria-label="Share CV by email"
          >
            <Mail size={17} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}

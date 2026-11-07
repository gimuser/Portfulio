"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Copy, Download, FileText, Mail } from "lucide-react";
import { useState } from "react";
import { AtsCvDocument } from "@/components/cv/ats-cv-document";
import { useLanguage } from "@/components/layout/language-provider";
import { SocialIcon } from "@/components/ui/social-icons";
import { certifications } from "@/data/certifications";
import { atsProfessionalSummary, cvAcademicProject, cvEducation, cvLanguages, cvProfessionalExperience, cvProjects, cvSkills, type CvProject } from "@/data/cv";
import { profile } from "@/data/profile";
import type { Language } from "@/types/content";
import { localize } from "@/utils/localize";

function getProjectSummary(project: CvProject, language: Language) {
  return localize(project.summary, language);
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
        print: isAts ? "Imprimer / Enregistrer" : "Imprimer / Enregistrer",
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
        print: "Print / Save",
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

  const technicalSkillGroups = cvSkills;
  const selectedProjects = cvProjects;
  const visibleEducation = cvEducation;
  const professionalExperience = cvProfessionalExperience;
  const visibleExperience = [cvAcademicProject];
  const location = language === "fr" ? "Beni Mellal, Maroc" : profile.location;
  const contactRows = [
    [
      { key: "location", text: location, href: profile.locationMapHref },
      { key: "email", text: profile.email, href: "mailto:" + profile.email },
      { key: "phone", text: profile.phone, href: "tel:" + profile.phone.replace(/\s+/g, "") },
    ],
    [
      { key: "portfolio", text: language === "fr" ? "Portfolio" : "Portfolio", href: profile.links.website.href },
      { key: "linkedin", text: profile.links.linkedin.href.replace(/^https?:\/\//, ""), href: profile.links.linkedin.href },
      { key: "github", text: profile.links.github.href.replace(/^https?:\/\//, ""), href: profile.links.github.href },
    ],
  ];

  return (
    <div className="cv-page" id="content">
      <div className="cv-controls no-print">
        <button className="button" type="button" onClick={() => window.print()}>
          <Download size={18} />
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
                  <p>{localize(item.details, language)}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>{labels.skills}</h2>
            <div className="cv-skill-grid">
              {technicalSkillGroups.map((group) => (
                <p key={group.title.en}>
                  <strong>{localize(group.title, language)}:</strong> {localize(group.items, language)}
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
                  {item.bullets.map((bullet) => <p key={bullet.en}>{localize(bullet, language)}</p>)}
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
                    <h3>{localize(project.title, language)}</h3>
                    <strong>{project.year}</strong>
                  </div>
                  <p>{getProjectSummary(project, language)}</p>
                  <small><strong>{labels.technologies}:</strong> {project.technologies.join(", ")}</small>
                  {project.github ? (
                    <p><small><strong>{labels.projectLink}:</strong> {project.github}</small></p>
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

      <style jsx global>{`
        :root { --cv-space-unit: 0.25rem; }
        .cv-sheet, .ats-cv-page { font-family: Arial, Helvetica, sans-serif; }
        .cv-sheet section, .ats-cv-section { margin-block: calc(var(--cv-space-unit) * 1.5); }
        .cv-sheet h2, .ats-cv-section h2 { margin: 0 0 calc(var(--cv-space-unit) * 0.5); font-size: 0.82rem; line-height: 1.15; break-after: avoid; page-break-after: avoid; }
        .cv-entry, .ats-cv-entry { break-inside: avoid; page-break-inside: avoid; }
        .cv-list, .ats-cv-list { gap: var(--cv-space-unit); }
        @media print {
          @page { size: A4; margin: 5mm; }
          .cv-sheet { font-size: 7.5pt; line-height: 1.13; }
          .cv-sheet section { margin-block: var(--cv-space-unit); }
          .cv-sheet h2 { font-size: 8pt; margin-bottom: calc(var(--cv-space-unit) * 0.5); }
          .cv-entry { margin-bottom: calc(var(--cv-space-unit) * 0.5); }
          .cv-sheet p, .cv-sheet li, .cv-sheet small { line-height: 1.12; }
          .ats-cv-page { width: auto; min-height: 0; height: auto; display: block; font-size: 7.2pt !important; line-height: 1.08 !important; }
          .ats-cv-section, .ats-cv-compact-section { margin-top: calc(var(--cv-space-unit) * 0.5) !important; break-inside: auto; page-break-inside: auto; }
          .ats-cv-section h2 { font-size: 7.6pt !important; margin-bottom: calc(var(--cv-space-unit) * 0.25) !important; padding-bottom: calc(var(--cv-space-unit) * 0.125) !important; }
          .ats-cv-entry { margin-bottom: calc(var(--cv-space-unit) * 0.25); }
          .ats-cv-entry-heading h3, .ats-cv-entry-heading strong { font-size: 7.2pt !important; line-height: 1.08 !important; }
          .ats-cv-page p, .ats-cv-page li { margin-bottom: calc(var(--cv-space-unit) * 0.125) !important; line-height: 1.08 !important; }
          .ats-cv-page ul { margin: calc(var(--cv-space-unit) * 0.125) 0 calc(var(--cv-space-unit) * 0.25) !important; padding-left: 0.8rem !important; }
          .ats-cv-list, .ats-cv-skill-list { gap: calc(var(--cv-space-unit) * 0.25) !important; }
          .ats-cv-header { margin-bottom: calc(var(--cv-space-unit) * 0.5) !important; padding-bottom: calc(var(--cv-space-unit) * 0.5) !important; }
          .ats-cv-header h1 { font-size: 15pt !important; }
        }
      `}</style>
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

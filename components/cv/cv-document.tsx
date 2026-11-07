"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Copy, Download, FileText, Mail } from "lucide-react";
import { useState } from "react";
import { AtsCvDocument } from "@/components/cv/ats-cv-document";
import { useLanguage } from "@/components/layout/language-provider";
import { SocialIcon } from "@/components/ui/social-icons";
import { atsProfessionalSummary, cvAcademicProject, cvEducation, cvLanguages, cvProfessionalExperience, cvProjects, cvSkills, cvSubline } from "@/data/cv";
import { profile } from "@/data/profile";
import type { Language } from "@/types/content";
import { localize } from "@/utils/localize";

function languageLevel(language: Language, name: string, level: string) {
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
        print: "Imprimer / Enregistrer",
        openOther: isAts ? "Voir le CV visuel" : "Voir le CV ATS",
        save: isAts ? "Enregistrer le CV ATS en PDF" : "Enregistrer le CV en PDF",
        summary: "Profil professionnel",
        education: "Formation",
        skills: "Compétences techniques",
        projects: "Projets",
        professionalExperience: "Expérience professionnelle",
        extraProject: "Projet académique complémentaire",
        languages: "Langues",
        technologies: "Technologies",
        projectLink: "Projet",
      }
    : {
        print: "Print / Save",
        openOther: isAts ? "View visual CV" : "View ATS CV",
        save: isAts ? "Save ATS CV as PDF" : "Save CV as PDF",
        summary: "Professional Summary",
        education: "Education",
        skills: "Technical Skills",
        projects: "Projects",
        professionalExperience: "Professional Experience",
        extraProject: "Additional Academic Project",
        languages: "Languages",
        technologies: "Technologies",
        projectLink: "Project",
      };

  const location = language === "fr" ? "Béni Mellal, Maroc" : "Beni Mellal, Morocco";
  const contactRows = [
    [
      { key: "location", text: location, href: profile.locationMapHref },
      { key: "email", text: profile.email, href: "mailto:" + profile.email },
      { key: "phone", text: profile.phone, href: "tel:" + profile.phone.replace(/\s+/g, "") },
    ],
    [
      { key: "portfolio", text: profile.links.website.href, href: profile.links.website.href },
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
              alt={profile.cvName + " portrait"}
              width={110}
              height={138}
              priority
            />
            <div className="cv-heading">
              <h1>{profile.cvName}</h1>
              <p className="cv-role">{language === "fr" ? "Ingénieur IA / Machine Learning | Data Scientist" : "AI / Machine Learning Engineer | Data Scientist"}</p>
              <p className="cv-tagline">{localize(cvSubline, language)}</p>
              <address className="cv-contact">
                {contactRows.map((row, rowIndex) => (
                  <span className="cv-contact-row" key={rowIndex}>
                    {row.map((item) => (
                      <a key={item.key} href={item.href}>{item.text}</a>
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
              {cvEducation.map((item) => (
                <div className="cv-entry" key={item.year + "-" + item.title.en}>
                  <div className="cv-entry-heading cv-date-row">
                    <h3>{localize(item.title, language)}</h3>
                    <strong className="cv-date">{localize(item.period, language)}</strong>
                  </div>
                  <p className="cv-muted">{localize(item.institution, language)}</p>
                  <p className="cv-education-details">{localize(item.details, language)}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>{labels.skills}</h2>
            <div className="cv-skill-grid">
              {cvSkills.map((group) => (
                <p key={group.title.en}>
                  <strong>{language === "fr" ? group.title.fr + " : " : group.title.en + ": "}</strong>
                  {localize(group.items, language)}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2>{labels.professionalExperience}</h2>
            <div className="cv-list">
              {cvProfessionalExperience.map((item) => (
                <div className="cv-entry" key={item.year + "-" + item.title.en}>
                  <div className="cv-entry-heading cv-date-row">
                    <h3>{localize(item.title, language)}</h3>
                    <strong className="cv-date">{localize(item.period, language)}</strong>
                  </div>
                  <p className="cv-muted"><strong>{item.organization}</strong>{item.location ? " | " + localize(item.location, language) : ""}</p>
                  <ul>{item.bullets.map((bullet) => <li key={bullet.en}>{localize(bullet, language)}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>{labels.projects}</h2>
            <div className="cv-list">
              {cvProjects.map((project) => (
                <div className="cv-entry" key={project.slug}>
                  <div className="cv-entry-heading cv-date-row">
                    <h3>{localize(project.title, language)}</h3>
                    <strong className="cv-date">{project.year}</strong>
                  </div>
                  <p>{localize(project.summary, language)}</p>
                  <p><strong>{language === "fr" ? "Technologies : " : "Technologies: "}</strong>{project.technologies.join(", ")}</p>
                  {project.github ? <p><strong>{language === "fr" ? "Projet : " : "Project: "}</strong>{project.github}</p> : null}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>{labels.extraProject}</h2>
            <div className="cv-list">
              <div className="cv-entry cv-academic-line">
                <div className="cv-entry-heading cv-date-row">
                  <h3>{localize(cvAcademicProject.title, language)}</h3>
                  <strong className="cv-date">{localize(cvAcademicProject.period, language)}</strong>
                </div>
                <p className="cv-muted">{localize(cvAcademicProject.location ?? { en: "", fr: "" }, language)}</p>
                <p>{localize(cvAcademicProject.bullets[0], language)}</p>
              </div>
            </div>
          </section>

          <section>
            <h2>{labels.languages}</h2>
            <p>{cvLanguages.map((item) => languageLevel(language, localize(item.name, language), localize(item.level, language))).join(" | ")}</p>
          </section>
        </article>
      )}

      <style jsx global>{`
        .cv-sheet, .ats-cv-page {
          font-family: Arial, Helvetica, sans-serif;
          color: #000;
          background: #fff;
          box-shadow: none;
        }
        .cv-sheet section, .ats-cv-section { margin-block: 0.5pt; }
        .cv-sheet h2, .ats-cv-section h2 {
          margin: 0 0 2pt;
          line-height: 1.12;
          break-after: avoid;
          page-break-after: avoid;
        }
        .cv-entry, .ats-cv-entry { break-inside: avoid; page-break-inside: avoid; }
        .cv-list, .ats-cv-list { gap: 0.5pt; }
        @media print {
          @page { size: A4; margin: 12mm; }
          html, body { background: #fff !important; color: #000 !important; }
          .site-header, .footer, .cv-controls, .cv-floating-actions, .no-print { display: none !important; }
          .cv-page { width: auto; margin: 0; padding: 0; }
          .cv-sheet, .ats-cv-page {
            width: auto !important;
            min-height: 0 !important;
            height: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            border: 0 !important;
            border-radius: 0 !important;
            background: #fff !important;
            color: #000 !important;
            box-shadow: none !important;
            font-size: 9.5pt !important;
            line-height: 1.25 !important;
          }
          .cv-sheet section, .ats-cv-section { margin-block: 0.5pt !important; }
          .cv-sheet h2, .ats-cv-section h2 {
            margin: 0 0 0.5pt !important;
            font-size: 9.5pt !important;
            line-height: 1.1 !important;
            break-after: avoid !important;
            page-break-after: avoid !important;
          }
          .cv-sheet h1, .ats-cv-header h1 { font-size: 15pt !important; line-height: 1.05 !important; margin: 0 0 0.5pt !important; }
          .cv-sheet .cv-role, .ats-cv-role { font-size: 9.5pt !important; margin: 0 0 1pt !important; line-height: 1.12 !important; }
          .cv-tagline, .ats-cv-tagline { font-size: 8pt !important; margin: 0 0 2pt !important; line-height: 1.12 !important; }
          .cv-header { display: flex; align-items: center; gap: 7pt; margin: 0 0 4pt !important; padding: 0 !important; max-height: 36mm; }
          .cv-photo { width: 26mm !important; height: 32mm !important; max-width: 26mm !important; max-height: 32mm !important; object-fit: cover !important; flex: 0 0 26mm; }
          .cv-heading { min-width: 0; flex: 1 1 auto; }
          .cv-contact, .ats-cv-contact-block { display: grid; gap: 1pt; margin: 2pt 0 0 !important; font-size: 7.2pt !important; line-height: 1.15 !important; font-style: normal; }
          .cv-contact-row { display: flex; flex-wrap: wrap; gap: 0 6pt; }
          .cv-sheet p, .cv-sheet li, .cv-sheet small, .ats-cv-page p, .ats-cv-page li {
            margin: 0 0 0.5pt !important;
            font-size: 9.5pt !important;
            line-height: 1.25 !important;
            color: #000 !important;
          }
          .cv-sheet ul, .ats-cv-page ul { margin: 0.5pt 0 0.5pt !important; padding-left: 12pt !important; }
          .cv-sheet a, .ats-cv-page a { color: #000 !important; text-decoration: none !important; }
          .cv-sheet *, .ats-cv-page * { box-shadow: none !important; text-shadow: none !important; }
          .cv-date-row, .ats-cv-entry-heading { display: flex !important; justify-content: space-between !important; align-items: baseline !important; gap: 6pt !important; width: 100% !important; }
          .cv-date-row h3, .ats-cv-entry-heading h3 { flex: 1 1 auto !important; min-width: 0 !important; margin: 0 !important; font-size: 9.5pt !important; line-height: 1.2 !important; }
          .cv-date-row .cv-date, .ats-cv-entry-heading .cv-date { flex: 0 0 auto !important; margin: 0 0 0 auto !important; white-space: nowrap !important; text-align: right !important; font-size: 8.2pt !important; font-weight: 400 !important; line-height: 1.2 !important; }
          .cv-education-details, .ats-cv-education-details { white-space: pre-line !important; }
          .cv-list, .ats-cv-list, .cv-skill-grid, .ats-cv-skill-list { display: grid; gap: 0.5pt !important; }
          .cv-entry, .ats-cv-entry { margin-bottom: 1pt !important; break-inside: avoid !important; page-break-inside: avoid !important; }
          .cv-sheet section > p, .ats-cv-section > p { padding-right: 0; }
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

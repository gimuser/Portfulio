"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Copy, Download, FileText, Mail } from "lucide-react";
import { useState } from "react";
import { AtsCvDocument } from "@/components/cv/ats-cv-document";
import { useLanguage } from "@/components/layout/language-provider";
import { SocialIcon } from "@/components/ui/social-icons";
import { certifications } from "@/data/certifications";
import { cvProfessionalSummary, cvEducation, cvLanguages, cvProfessionalExperience, cvProjects, cvSkills, type CvProject } from "@/data/cv";
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
        certifications: "Certifications and Training",
        languages: "Languages",
        technologies: "Technologies",
        projectLink: "Project",
      };

  const technicalSkillGroups = cvSkills;
  const selectedProjects = cvProjects;
  const visibleEducation = cvEducation;
  const professionalExperience = cvProfessionalExperience;
  const location = language === "fr" ? "Beni Mellal, Maroc" : profile.location;
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
    <div className="cv-page" id="content" data-cv-variant={isAts ? "ats" : "portfolio"}>
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
              width={320}
              height={400}
              quality={100}
              sizes="160px"
              priority
            />
            <div className="cv-heading">
              <h1>{profile.cvName}</h1>
              <p className="cv-role">{language === "fr" ? "Ingénieur IA | Ingénieur Machine Learning | Data Scientist" : "AI Engineer | Machine Learning Engineer | Data Scientist"}</p>
              <p className="cv-tagline">{language === "fr" ? "À la recherche d’un stage | Ingénierie IA, Data Science & Cybersécurité" : "Seeking an Internship | AI Engineering, Data Science & Cybersecurity"}</p>
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

          <section className="cv-section-summary">
            <h2>{labels.summary}</h2>
            <p>{localize(cvProfessionalSummary, language)}</p>
          </section>

          <section className="cv-section-skills">
            <h2>{labels.skills}</h2>
            <div className="cv-skill-grid">
              {technicalSkillGroups.map((group) => (
                <p key={group.title.en}>
                  <strong>{localize(group.title, language)}:</strong> {localize(group.items, language)}
                </p>
              ))}
            </div>
          </section>

          <section className="cv-section-experience">
            <h2>{labels.professionalExperience}</h2>
            <div className="cv-list">
              {professionalExperience.map((item) => (
                <div className="cv-entry" key={item.year + "-" + item.title.en}>
                  <div className="cv-entry-heading cv-date-row">
                    <h3>{localize(item.title, language)}</h3>
                    <strong>{item.period ? localize(item.period, language) : item.year}</strong>
                  </div>
                  {item.organization ? <p className="cv-muted"><strong>{item.organization}</strong>{item.location ? " | " + localize(item.location, language) : ""}</p> : null}
                  {item.bullets.map((bullet) => <p key={bullet.en}>{localize(bullet, language)}</p>)}
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section-projects">
            <h2>{labels.projects}</h2>
            <div className="cv-list">
              {selectedProjects.map((project) => (
                <div className="cv-entry" key={project.slug}>
                  <div className="cv-entry-heading cv-date-row">
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

          <section className="cv-section-education">
            <h2>{labels.education}</h2>
            <div className="cv-list">
              {visibleEducation.map((item) => (
                <div className="cv-entry" key={item.year + "-" + item.title.en}>
                  <div className="cv-entry-heading cv-date-row">
                    <h3>{localize(item.title, language)}</h3>
                    <strong>{item.period ? localize(item.period, language) : item.year}</strong>
                  </div>
                  <p className="cv-muted">{localize(item.institution, language)}</p>
                  <p className="cv-education-details">{localize(item.details, language)}</p>
                </div>
              ))}
            </div>
          </section>

          {certifications.length > 0 ? (
            <section className="cv-section-certifications">
              <h2>{labels.certifications}</h2>
              <div className="cv-list">
                {certifications.map((certification) => (
                  <div className="cv-entry" key={certification.name}>
                    <div className="cv-entry-heading cv-date-row">
                      <h3>{certification.name}</h3>
                      <strong>{certification.date}</strong>
                    </div>
                    <p>{certification.organization}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section className="cv-section-languages">
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
        :root { --cv-space-unit: 4px; }
        .cv-sheet, .ats-cv-page {
          font-family: Arial, Helvetica, sans-serif;
          color: #000;
          background: #fff;
          box-shadow: none;
        }
        .cv-sheet section, .ats-cv-section { margin-block: 7pt; }
        .cv-sheet h2, .ats-cv-section h2 {
          margin: 0 0 3pt;
          line-height: 1.15;
          break-after: avoid;
          page-break-after: avoid;
        }
        .cv-entry, .ats-cv-entry { break-inside: avoid; page-break-inside: avoid; }
        .cv-list, .ats-cv-list { gap: 4pt; }
        @media print {
          @page { size: A4; margin: 7mm; }
          html, body { background: #fff !important; color: #000 !important; }
          .cv-page { background: #fff !important; color: #000 !important; }
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
            font-size: 9pt !important;
            line-height: 1.1 !important;
          }
          .cv-sheet section, .ats-cv-section { margin-block: 2.5pt !important; }
          .cv-sheet h2, .ats-cv-section h2 {
            margin: 0 0 2pt !important;
            font-size: 9.4pt !important;
            line-height: 1.08 !important;
            break-after: avoid !important;
            page-break-after: avoid !important;
          }
          .cv-entry, .ats-cv-entry {
            margin-bottom: 1pt !important;
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
          .cv-sheet p, .cv-sheet li, .cv-sheet small,
          .ats-cv-page p, .ats-cv-page li {
            margin-top: 0 !important;
            margin-bottom: 2pt !important;
            font-size: 9pt !important;
            line-height: 1.1 !important;
            color: #000 !important;
          }
          .cv-sheet a, .ats-cv-page a { color: #000 !important; text-decoration: none !important; }
          .cv-sheet *, .ats-cv-page * { box-shadow: none !important; text-shadow: none !important; }
          .cv-controls, .cv-floating-actions, .no-print { display: none !important; }
          .cv-photo { max-height: 20mm !important; width: auto !important; object-fit: cover !important; }
          .cv-header { margin-bottom: 5pt !important; padding: 0 !important; gap: 8pt !important; }
          .ats-cv-section, .ats-cv-compact-section {
            margin-top: 7pt !important;
            break-inside: auto !important;
            page-break-inside: auto !important;
          }
          .ats-cv-entry-heading h3, .ats-cv-entry-heading strong {
            font-size: 9.5pt !important;
            line-height: 1.2 !important;
          }
          .ats-cv-page ul {
            margin: 2pt 0 3pt !important;
            padding-left: 12pt !important;
          }
          .ats-cv-list, .ats-cv-skill-list { gap: 4pt !important; }
          .ats-cv-header { margin-bottom: 5pt !important; padding: 0 0 3pt !important; }
          .ats-cv-header h1 { font-size: 14pt !important; }
          .cv-header { gap: 6pt !important; }
          .cv-sheet h1 { font-size: 14pt !important; line-height: 1.05 !important; margin: 0 0 2pt !important; }
          .cv-sheet .cv-role { font-size: 9pt !important; margin-bottom: 1pt !important; }
          .cv-contact, .ats-cv-contact-block { font-size: 7.2pt !important; line-height: 1.1 !important; }
          .cv-sheet .cv-contact-row { gap: 5pt !important; }
          .cv-sheet .cv-entry-heading, .ats-cv-entry-heading { display: flex !important; justify-content: space-between !important; align-items: baseline !important; gap: 8pt !important; width: 100% !important; }
          .cv-sheet .cv-entry-heading h3, .ats-cv-entry-heading h3 { margin: 0 !important; font-size: 9pt !important; line-height: 1.08 !important; }
          .cv-sheet .cv-entry-heading strong, .ats-cv-entry-heading strong { margin-left: auto !important; white-space: nowrap !important; text-align: right !important; font-size: 9pt !important; line-height: 1.08 !important; }
          .cv-education-details, .ats-cv-education-details { white-space: pre-line !important; }
          .cv-sheet .cv-academic-line { margin-bottom: 0 !important; }
          .cv-sheet .cv-academic-line p { margin: 0 !important; }
          .cv-sheet .cv-skill-grid, .ats-cv-skill-list { gap: 1pt !important; }
          .cv-sheet .cv-skill-grid p, .ats-cv-skill-list p { margin-bottom: 1pt !important; }
          .cv-sheet .cv-header { margin-bottom: 3pt !important; }
          .cv-sheet .cv-photo { max-width: 18mm !important; }
          .ats-cv-section { margin-block: 2.5pt !important; }
          .ats-cv-entry-heading strong { flex-shrink: 0 !important; }
          .ats-cv-page .ats-cv-contact-block p { margin-bottom: 1pt !important; }
          .ats-cv-page ul { margin: 0.5pt 0 1pt !important; padding-left: 9pt !important; }
          .ats-cv-page li { margin-bottom: 0 !important; }
        }

        /* Portfolio CV only: larger portrait and a compact, one-page A4 print layout. */
        .cv-page[data-cv-variant="portfolio"] .cv-photo {
          display: block !important;
          width: 160px !important;
          height: 200px !important;
          max-width: none !important;
          max-height: none !important;
          aspect-ratio: 4 / 5;
          object-fit: cover !important;
          object-position: center;
        }
        body:has(.cv-page[data-cv-variant="portfolio"]) .footer {
          display: none !important;
        }
        @media print {
          @page { size: A4 portrait; margin: 5mm; }
          body:has(.cv-page[data-cv-variant="portfolio"]) .site-header,
          body:has(.cv-page[data-cv-variant="portfolio"]) .footer {
            display: none !important;
          }
          body:has(.cv-page[data-cv-variant="portfolio"]) main {
            margin: 0 !important;
            padding: 0 !important;
          }
          .cv-page[data-cv-variant="portfolio"] {
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .cv-page[data-cv-variant="portfolio"] > .cv-sheet {
            display: grid !important;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
            grid-template-areas:
              "header header"
              "summary summary"
              "skills experience"
              "projects education"
              "certifications languages" !important;
            align-content: start !important;
            align-items: start !important;
            gap: 2.2mm 5mm !important;
            width: 100% !important;
            min-height: 0 !important;
            height: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            border: 0 !important;
            box-shadow: none !important;
            font-size: 9pt !important;
            line-height: 1.12 !important;
            break-inside: auto !important;
            page-break-inside: auto !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-header {
            grid-area: header;
            display: flex !important;
            align-items: center !important;
            gap: 5mm !important;
            margin: 0 0 1mm !important;
            padding: 0 !important;
            break-inside: avoid !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-photo {
            width: 30mm !important;
            height: 37.5mm !important;
            max-width: 30mm !important;
            max-height: 37.5mm !important;
            aspect-ratio: 4 / 5 !important;
            object-fit: cover !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-heading {
            min-width: 0 !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-section-summary { grid-area: summary; }
          .cv-page[data-cv-variant="portfolio"] .cv-section-skills { grid-area: skills; }
          .cv-page[data-cv-variant="portfolio"] .cv-section-experience { grid-area: experience; }
          .cv-page[data-cv-variant="portfolio"] .cv-section-projects { grid-area: projects; }
          .cv-page[data-cv-variant="portfolio"] .cv-section-education { grid-area: education; }
          .cv-page[data-cv-variant="portfolio"] .cv-section-certifications { grid-area: certifications; }
          .cv-page[data-cv-variant="portfolio"] .cv-section-languages { grid-area: languages; }
          .cv-page[data-cv-variant="portfolio"] > .cv-sheet > section {
            min-width: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            break-inside: auto !important;
            page-break-inside: auto !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-sheet h1 {
            font-size: 15pt !important;
            line-height: 1.05 !important;
            margin: 0 0 1.5pt !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-role {
            font-size: 9.5pt !important;
            margin: 0 0 1pt !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-tagline,
          .cv-page[data-cv-variant="portfolio"] .cv-contact,
          .cv-page[data-cv-variant="portfolio"] .cv-contact a {
            font-size: 9pt !important;
            line-height: 1.1 !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-contact-row {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 1mm 3mm !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-sheet h2 {
            font-size: 9.5pt !important;
            line-height: 1.1 !important;
            margin: 0 0 1.2pt !important;
            padding: 0 0 0.5pt !important;
            break-after: avoid !important;
            page-break-after: avoid !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-sheet h3,
          .cv-page[data-cv-variant="portfolio"] .cv-sheet .cv-entry-heading strong {
            font-size: 9pt !important;
            line-height: 1.1 !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-sheet p,
          .cv-page[data-cv-variant="portfolio"] .cv-sheet small,
          .cv-page[data-cv-variant="portfolio"] .cv-sheet li {
            font-size: 9pt !important;
            line-height: 1.12 !important;
            margin-top: 0 !important;
            margin-bottom: 1pt !important;
            color: #000 !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-entry {
            margin: 0 0 1.3mm !important;
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-list,
          .cv-page[data-cv-variant="portfolio"] .cv-skill-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 0 !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-entry-heading {
            display: flex !important;
            justify-content: space-between !important;
            align-items: baseline !important;
            gap: 2mm !important;
          }
          .cv-page[data-cv-variant="portfolio"] .cv-entry-heading strong {
            flex: 0 0 auto !important;
            white-space: nowrap !important;
          }
          .cv-page[data-cv-variant="portfolio"] a {
            color: #000 !important;
            text-decoration: none !important;
          }
          .cv-page[data-cv-variant="portfolio"] * {
            box-shadow: none !important;
            text-shadow: none !important;
          }
          .cv-page[data-cv-variant="portfolio"] .no-print,
          .cv-page[data-cv-variant="portfolio"] .cv-controls,
          .cv-page[data-cv-variant="portfolio"] .cv-floating-actions {
            display: none !important;
          }
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

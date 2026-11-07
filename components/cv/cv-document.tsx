"use client";

import Link from "next/link";
import { Check, Copy, Download, FileText, Mail } from "lucide-react";
import { useState } from "react";
import { CvContent } from "@/components/cv/cv-content";
import { useLanguage } from "@/components/layout/language-provider";
import { profile } from "@/data/profile";

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
      }
    : {
        print: "Print / Save",
        openOther: isAts ? "View visual CV" : "View ATS CV",
        save: isAts ? "Save ATS CV as PDF" : "Save CV as PDF",
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

      <CvContent showPhoto={!isAts} />

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

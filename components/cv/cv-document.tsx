"use client";

import Link from "next/link";
import { Check, Copy, Download, FileText, Mail } from "lucide-react";
import { useState } from "react";
import { AtsCvDocument } from "@/components/cv/ats-cv-document";
import { CvContent } from "@/components/cv/cv-content";
import { useLanguage } from "@/components/layout/language-provider";
import { SocialIcon } from "@/components/ui/social-icons";
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

      {isAts ? <AtsCvDocument /> : <CvContent showPhoto />}


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

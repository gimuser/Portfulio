"use client";

import Link from "next/link";
import { Check, Copy, Download, Mail, Printer } from "lucide-react";
import { useState } from "react";
import { AtsCvDocument } from "@/components/cv/ats-cv-document";
import { useLanguage } from "@/components/layout/language-provider";
import { SocialIcon } from "@/components/ui/social-icons";
import { profile } from "@/data/profile";

type CvDocumentProps = {
  variant?: "portfolio" | "ats";
};

export function CvDocument({ variant = "portfolio" }: CvDocumentProps) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const isAts = variant === "ats";
  const activeCvName = "ATS CV";
  const activeCvPath = isAts ? "/ats-cv" : "/cv";
  const pdfLanguageCode = language === "fr" ? "FR" : "EN";
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

  return (
    <div className="cv-page" id="content">
      <div className="cv-controls no-print">
        <button className="button" type="button" onClick={() => window.print()}>
          <Printer size={18} />
          {language === "en" ? "Print / Save PDF" : "Imprimer / Enregistrer en PDF"}
        </button>
      </div>

      <AtsCvDocument />

      <div className="cv-floating-actions no-print" aria-label={activeCvName + " actions"}>
        <button
          className="button button-secondary"
          type="button"
          onClick={() => window.print()}
          aria-label={language === "en" ? "Save current ATS CV as PDF" : "Enregistrer le CV ATS actuel en PDF"}
        >
          <Download size={18} />
          <span>{language === "en" ? "Save ATS CV as PDF" : "Enregistrer le CV ATS en PDF"}</span>
        </button>
        <div className="cv-share-links" aria-label={language === "en" ? "Share ATS CV links" : "Partager le CV ATS"}>
          <button
            className="cv-share-action"
            type="button"
            onClick={copyCvLink}
            title={language === "en" ? "Copy ATS CV link" : "Copier le lien du CV ATS"}
            aria-label={language === "en" ? "Copy ATS CV link" : "Copier le lien du CV ATS"}
          >
            {copied ? <Check size={17} /> : <Copy size={17} />}
            <span>{copied ? (language === "en" ? "Copied" : "Copié") : language === "en" ? "Copy link" : "Copier"}</span>
          </button>
          <a
            className="cv-share-action"
            href={"https://wa.me/?text=" + encodedShareText}
            target="_blank"
            rel="noreferrer"
            title="Share ATS CV on WhatsApp"
            aria-label="Share ATS CV on WhatsApp"
          >
            <SocialIcon name="whatsapp" size={17} />
            <span>WhatsApp</span>
          </a>
          <a
            className="cv-share-action"
            href={"https://www.linkedin.com/sharing/share-offsite/?url=" + encodedShareUrl}
            target="_blank"
            rel="noreferrer"
            title="Share ATS CV on LinkedIn"
            aria-label="Share ATS CV on LinkedIn"
          >
            <SocialIcon name="linkedin" size={17} />
            <span>LinkedIn</span>
          </a>
          <a
            className="cv-share-action"
            href={"mailto:?subject=" + encodedShareSubject + "&body=" + encodedShareText}
            title="Share ATS CV by email"
            aria-label="Share ATS CV by email"
          >
            <Mail size={17} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}

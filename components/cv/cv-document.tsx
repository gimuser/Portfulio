"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Copy, Download, FileText, Globe2, Mail, MapPin, Printer } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/layout/language-provider";
import { SocialIcon } from "@/components/ui/social-icons";
import { certifications } from "@/data/certifications";
import { cvLanguages } from "@/data/cv";
import { education, experience, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { localize } from "@/utils/localize";

export function CvDocument() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const printPage = () => window.print();
  const cleanUrl = (href: string) => href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  const isPlaceholder = (value: string) => value.includes("[ADD") || value.includes("[AJOUTER");
  const cvShareUrl = `${profile.links.website.href.replace(/\/$/, "")}/cv?lang=${language}`;
  const shareSubject = `${profile.name} CV`;
  const shareText =
    language === "en"
      ? `Here is ${profile.name}'s CV: ${cvShareUrl}`
      : `Voici le CV de ${profile.name} : ${cvShareUrl}`;
  const encodedShareUrl = encodeURIComponent(cvShareUrl);
  const encodedShareText = encodeURIComponent(shareText);
  const encodedShareSubject = encodeURIComponent(shareSubject);
  const copyCvLink = async () => {
    if (!navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(cvShareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  const languageLevels = cvLanguages.map((item) =>
    language === "en"
      ? `${localize(item.name, language)}: ${localize(item.level, language)}`
      : `${localize(item.name, language)} : ${localize(item.level, language)}`,
  );
  const cvSkillGroups = skillGroups.filter(
    (group) => group.title.en !== "Professional Skills" && group.title.en !== "Languages",
  );
  const selectedProjects = projects.slice(0, 4);

  return (
    <div className="cv-page" id="content">
      <div className="cv-controls no-print">
        <button className="button" type="button" onClick={printPage}>
          <Printer size={18} />
          {language === "en" ? "Print / Save PDF" : "Imprimer / PDF"}
        </button>
        <Link className="button button-ghost" href="/ats-cv" aria-label="Open Oualid Ait Alla ATS-friendly CV">
          <FileText size={18} />
          My ATS CV
        </Link>
      </div>

      <article className="cv-sheet">
        <header className="cv-header">
          <Image
            className="cv-photo"
            src="/images/oualid-ait-alla.jpg"
            alt={`${profile.name} portrait`}
            width={110}
            height={138}
            priority
          />
          <div className="cv-heading">
            <h1>{profile.cvName}</h1>
            <address className="cv-contact">
              <span className="cv-contact-row">
                <a href={profile.locationMapHref}>
                  <MapPin className="cv-contact-icon" size={10} strokeWidth={2.2} />
                  {profile.location}
                </a>
                <a href={`mailto:${profile.email}`}>
                  <Mail className="cv-contact-icon" size={10} strokeWidth={2.2} />
                  {profile.email}
                </a>
                <a href={profile.links.website.href}>
                  <Globe2 className="cv-contact-icon" size={10} strokeWidth={2.2} />
                  {cleanUrl(profile.links.website.href)}
                </a>
              </span>
              <span className="cv-contact-row">
                <a href={profile.links.linkedin.href}>
                  <SocialIcon name="linkedin" size={10} />
                  {cleanUrl(profile.links.linkedin.href)}
                </a>
                <a href={profile.links.github.href}>
                  <SocialIcon name="github" size={10} />
                  {cleanUrl(profile.links.github.href)}
                </a>
              </span>
            </address>
          </div>
        </header>

        <section>
          <h2>{language === "en" ? "Profile" : "Profil"}</h2>
          <p>{localize(profile.shortProfile, language)}</p>
          <p>{localize(profile.value, language)}</p>
          <p className="cv-meta-line">
            <strong>{language === "en" ? "Nationality" : "Nationalité"}:</strong>{" "}
            {localize(profile.nationality, language)} | <strong>{language === "en" ? "Mobility" : "Mobilité"}:</strong>{" "}
            {localize(profile.mobility, language)}
          </p>
        </section>

        <section>
          <h2>{language === "en" ? "Education" : "Formation"}</h2>
          <div className="cv-list">
            {education.map((item) => {
              const institution = localize(item.institution, language);

              return (
                <div className="cv-entry" key={`${item.year}-${item.title.en}`}>
                  <div className="cv-entry-heading">
                    <h3>{localize(item.title, language)}</h3>
                    <strong>{item.year}</strong>
                  </div>
                  {!isPlaceholder(institution) ? <p className="cv-muted">{institution}</p> : null}
                  <small>{localize(item.details, language)}</small>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2>{language === "en" ? "Technical Skills" : "Compétences techniques"}</h2>
          <div className="cv-skill-grid">
            {cvSkillGroups.map((group) => (
              <p key={group.title.en}>
                <strong>{localize(group.title, language)}:</strong> {group.items.join(", ")}
              </p>
            ))}
          </div>
        </section>

        <section>
          <h2>{language === "en" ? "Selected Projects" : "Projets sélectionnés"}</h2>
          <div className="cv-list">
            {selectedProjects.map((project) => (
              <div className="cv-entry" key={project.slug}>
                <div className="cv-entry-heading">
                  <h3>{project.title}</h3>
                  <strong>{project.year}</strong>
                </div>
                <p>{localize(project.cvSummary ?? project.summary, language)}</p>
                <small>{project.technologies.join(", ")}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-two">
          <div>
            <h2>{language === "en" ? "Project Experience" : "Expérience projets"}</h2>
            {experience.map((item) => (
              <div key={`${item.year}-${item.title.en}`} className="cv-mini">
                <div className="cv-entry-heading">
                  <strong>{localize(item.title, language)}</strong>
                  <strong>{item.period ? localize(item.period, language) : item.year}</strong>
                </div>
                {item.location && item.duration ? (
                  <p className="cv-muted">
                    {localize(item.location, language)} | {localize(item.duration, language)}
                  </p>
                ) : null}
                <small>{localize(item.context, language)}</small>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet.en}>{localize(bullet, language)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h2>{language === "en" ? "Languages" : "Langues"}</h2>
            {languageLevels.map((item) => (
              <p key={item}>{item}</p>
            ))}
            {certifications.length > 0 ? <h2>{language === "en" ? "Certifications" : "Certifications"}</h2> : null}
            {certifications.map((certification) => (
              <p key={certification.name}>
                <strong>{certification.name}</strong>, {certification.organization}
              </p>
            ))}
            <h2>{language === "en" ? "Interests" : "Centres d'intérêt"}</h2>
            {profile.interests.map((interest) => (
              <p key={interest.en}>{localize(interest, language)}</p>
            ))}
          </div>
        </section>
      </article>

      <div className="cv-floating-actions no-print" aria-label={language === "en" ? "CV actions" : "Actions CV"}>
        <button className="button button-secondary" type="button" onClick={printPage}>
          <Download size={18} />
          <span>{language === "en" ? "Download CV PDF" : "Télécharger le CV PDF"}</span>
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
            href={`https://wa.me/?text=${encodedShareText}`}
            target="_blank"
            rel="noreferrer"
            title={language === "en" ? "Share CV on WhatsApp" : "Partager le CV sur WhatsApp"}
            aria-label={language === "en" ? "Share CV on WhatsApp" : "Partager le CV sur WhatsApp"}
          >
            <SocialIcon name="whatsapp" size={17} />
            <span>WhatsApp</span>
          </a>
          <a
            className="cv-share-action"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`}
            target="_blank"
            rel="noreferrer"
            title={language === "en" ? "Share CV on LinkedIn" : "Partager le CV sur LinkedIn"}
            aria-label={language === "en" ? "Share CV on LinkedIn" : "Partager le CV sur LinkedIn"}
          >
            <SocialIcon name="linkedin" size={17} />
            <span>LinkedIn</span>
          </a>
          <a
            className="cv-share-action"
            href={`mailto:?subject=${encodedShareSubject}&body=${encodedShareText}`}
            title={language === "en" ? "Share CV by email" : "Partager le CV par email"}
            aria-label={language === "en" ? "Share CV by email" : "Partager le CV par email"}
          >
            <Mail size={17} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}

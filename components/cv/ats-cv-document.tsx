"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { certifications } from "@/data/certifications";
import { atsProfessionalSummary, cvAcademicProject, cvEducation, cvLanguages, cvProfessionalExperience, cvProjects, cvSkills, type CvProject } from "@/data/cv";
import { profile } from "@/data/profile";
import type { Language } from "@/types/content";
import { localize } from "@/utils/localize";

const atsLabels = {
  en: {
    contact: {
      email: "Email",
      phone: "Phone",
      portfolio: "Portfolio",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    sections: {
      contact: "Contact Information",
      summary: "Professional Summary",
      education: "Education",
      skills: "Technical Skills",
      projects: "Selected Projects",
      professionalExperience: "Professional Experience",
      academicProject: "Additional Academic Project",
      certifications: "Certifications and Training",
      languages: "Languages",
    },
    technologies: "Technologies",
    projectLink: "Project",
  },
  fr: {
    contact: {
      email: "Email",
      phone: "Téléphone",
      portfolio: "Portfolio",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    sections: {
      contact: "Coordonnées",
      summary: "Profil professionnel",
      education: "Formation",
      skills: "Compétences techniques",
      projects: "Projets sélectionnés",
      professionalExperience: "Expérience professionnelle",
      academicProject: "Projet académique complémentaire",
      certifications: "Certifications et formations",
      languages: "Langues",
    },
    technologies: "Technologies",
    projectLink: "Projet",
  },
} as const;

function getAtsProjectSummary(project: CvProject, language: Language) {
  return localize(project.summary, language);
}

function formatLanguageLevel(language: Language, name: string, level: string) {
  return language === "fr" ? name + " : " + level : name + ": " + level;
}

export function AtsCvDocument() {
  const { language } = useLanguage();
  const labels = atsLabels[language];
  const technicalSkillGroups = cvSkills;
  const selectedProjects = cvProjects;
  const visibleEducation = cvEducation;
  const professionalExperience = cvProfessionalExperience;
  const visibleExperience = [cvAcademicProject];
  const showCertifications = certifications.length > 0;
  const location = language === "fr" ? "Beni Mellal, Maroc" : profile.location;
  const contactRows = [
    [
      { key: "location", text: location, href: profile.locationMapHref },
      { key: "email", text: labels.contact.email + ": " + profile.email, href: "mailto:" + profile.email },
      { key: "phone", text: labels.contact.phone + ": " + profile.phone, href: "tel:" + profile.phone.replace(/\s+/g, "") },
    ],
    [{ key: "portfolio", text: labels.contact.portfolio + ": " + (language === "fr" ? "Portfolio" : "Website"), href: profile.links.website.href }],
    [
      { key: "linkedin", text: profile.links.linkedin.href, href: profile.links.linkedin.href },
      { key: "github", text: profile.links.github.href, href: profile.links.github.href },
    ],
  ];

  return (
    <article className="ats-cv-page" data-language={language} aria-label={profile.name + " ATS CV"}>
      <header className="ats-cv-header">
        <h1>{profile.name}</h1>
        <p className="ats-cv-title">{localize(profile.displayRole, language)}</p>
      </header>

      <section className="ats-cv-section">
        <h2>{labels.sections.contact ?? (language === "fr" ? "Coordonnées" : "Contact Information")}</h2>
        <div className="ats-cv-contact-block">
          {contactRows.map((row, rowIndex) => (
            <p key={rowIndex}>
              {row.map((item, itemIndex) => (
                <span key={item.key}>
                  {itemIndex > 0 ? " | " : ""}<a href={item.href}>{item.text}</a>
                </span>
              ))}
            </p>
          ))}
        </div>
      </section>

      <section className="ats-cv-section">
        <h2>{labels.sections.summary}</h2>
        <p>{localize(atsProfessionalSummary, language)}</p>
      </section>

      <section className="ats-cv-section">
        <h2>{labels.sections.education}</h2>
        <div className="ats-cv-list">
          {visibleEducation.map((item) => (
            <div className="ats-cv-entry" key={item.year + "-" + item.title.en}>
              <div className="ats-cv-entry-heading">
                <h3>{localize(item.title, language)}</h3>
                <strong>{item.period ? localize(item.period, language) : item.year}</strong>
              </div>
              <p>{localize(item.institution, language)}</p>
              <p>{localize(item.details, language)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ats-cv-section">
        <h2>{labels.sections.skills}</h2>
        <div className="ats-cv-skill-list">
          {technicalSkillGroups.map((group) => (
            <p key={group.title.en}>
              <strong>{localize(group.title, language)}:</strong> {localize(group.items, language)}
            </p>
          ))}
        </div>
      </section>

      <section className="ats-cv-section">
        <h2>{labels.sections.professionalExperience}</h2>
        <div className="ats-cv-list">
          {professionalExperience.map((item) => (
            <div className="ats-cv-entry" key={item.year + "-" + item.title.en}>
              <div className="ats-cv-entry-heading">
                <h3>{localize(item.title, language)}</h3>
                <strong>{item.period ? localize(item.period, language) : item.year}</strong>
              </div>
              {item.organization ? <p><strong>{item.organization}</strong>{item.location ? " | " + localize(item.location, language) : ""}{item.duration ? " | " + localize(item.duration, language) : ""}</p> : null}
              <ul>
                {item.bullets.map((bullet) => <li key={bullet.en}>{localize(bullet, language)}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="ats-cv-section">
        <h2>{labels.sections.projects}</h2>
        <div className="ats-cv-list">
          {selectedProjects.map((project) => (
            <div className="ats-cv-entry" key={project.slug}>
              <div className="ats-cv-entry-heading">
                <h3>{localize(project.title, language)}</h3>
                <strong>{project.year}</strong>
              </div>
              <p>{getAtsProjectSummary(project, language)}</p>
              <p><strong>{labels.technologies}:</strong> {project.technologies.join(", ")}</p>
              {project.github ? (
                <p><strong>{labels.projectLink}:</strong> {project.github}</p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="ats-cv-section">
        <h2>{labels.sections.academicProject}</h2>
        <div className="ats-cv-list">
          {visibleExperience.map((item) => (
            <div className="ats-cv-entry" key={item.year + "-" + item.title.en}>
              <div className="ats-cv-entry-heading">
                <h3>{localize(item.title, language)}</h3>
                <strong>{item.period ? localize(item.period, language) : item.year}</strong>
              </div>
              {item.location && item.duration ? (
                <p>{localize(item.location, language)} | {localize(item.duration, language)}</p>
              ) : null}
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet.en}>{localize(bullet, language)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {showCertifications ? (
        <section className="ats-cv-section">
          <h2>{labels.sections.certifications}</h2>
          <div className="ats-cv-list">
            {certifications.map((certification) => (
              <div className="ats-cv-entry" key={certification.name}>
                <div className="ats-cv-entry-heading">
                  <h3>{certification.name}</h3>
                  <strong>{certification.date}</strong>
                </div>
                <p>{certification.organization}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="ats-cv-section ats-cv-compact-section">
        <h2>{labels.sections.languages}</h2>
        <p>
          {cvLanguages
            .map((item) => formatLanguageLevel(language, localize(item.name, language), localize(item.level, language)))
            .join(" | ")}
        </p>
      </section>
    </article>
  );
}

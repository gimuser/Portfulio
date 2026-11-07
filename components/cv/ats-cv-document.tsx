"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { certifications } from "@/data/certifications";
import { atsProfessionalSummary, cvAcademicProject, cvEducation, cvLanguages, cvProfessionalExperience, cvProjects, cvSkills, type CvProject } from "@/data/cv";
import { profile } from "@/data/profile";
import type { Language } from "@/types/content";
import { localize } from "@/utils/localize";

const labels = {
  en: {
    contact: "Contact Information", summary: "Professional Summary", education: "Education",
    skills: "Technical Skills", projects: "Selected Projects", experience: "Professional Experience",
    academic: "Additional Academic Project", certifications: "Certifications and Training",
    languages: "Languages", technologies: "Technologies", project: "Project",
    role: "AI / Machine Learning Engineer | Data Scientist",
  },
  fr: {
    contact: "Coordonnées", summary: "Profil professionnel", education: "Formation",
    skills: "Compétences techniques", projects: "Projets sélectionnés", experience: "Expérience professionnelle",
    academic: "Projet académique complémentaire", certifications: "Certifications et formations",
    languages: "Langues", technologies: "Technologies", project: "Projet",
    role: "Ingénieur IA / Machine Learning | Data Scientist",
  },
} as const;

function projectSummary(project: CvProject, language: Language) {
  return localize(project.summary, language);
}

function languageLevel(language: Language, name: string, level: string) {
  return language === "fr" ? name + " : " + level : name + ": " + level;
}

function EntryHeading({ title, date }: { title: string; date: string }) {
  return (
    <div className="cv-date-row">
      <h3>{title}</h3>
      <strong className="cv-date">{date}</strong>
    </div>
  );
}

export function AtsCvDocument() {
  const { language } = useLanguage();
  const t = labels[language];
  const location = language === "fr" ? "Beni Mellal, Maroc" : profile.location;
  const portfolioUrl = profile.links.website.href.replace(/\/$/, "");
  const contactLines = [
    [location, profile.email, profile.phone],
    [portfolioUrl],
    [profile.links.linkedin.href, profile.links.github.href],
  ];

  return (
    <article className="ats-cv-page" data-language={language} aria-label={profile.name + " ATS CV"}>
      <header className="ats-cv-header">
        <h1>{profile.cvName}</h1>
        <p className="ats-cv-role">{t.role}</p>
        <p className="ats-cv-tagline">{localize(profile.displayRole, language)}</p>
      </header>

      <section className="ats-cv-section">
        <h2>{t.contact}</h2>
        <div className="ats-cv-contact-block">
          {contactLines.map((line, index) => (
            <p key={index}>{line.map((value, valueIndex) => (
              <span key={value}>{valueIndex > 0 ? " | " : ""}{value}</span>
            ))}</p>
          ))}
        </div>
      </section>

      <section className="ats-cv-section">
        <h2>{t.summary}</h2>
        <p>{localize(atsProfessionalSummary, language)}</p>
      </section>

      <section className="ats-cv-section">
        <h2>{t.education}</h2>
        <div className="ats-cv-list">
          {cvEducation.map((item) => (
            <div className="ats-cv-entry" key={item.year + "-" + item.title.en}>
              <EntryHeading title={localize(item.title, language)} date={localize(item.period, language)} />
              <p>{localize(item.institution, language)}</p>
              <p>{localize(item.details, language)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ats-cv-section">
        <h2>{t.skills}</h2>
        <div className="ats-cv-skill-list">
          {cvSkills.map((group) => (
            <p key={group.title.en}><strong>{localize(group.title, language)}:</strong> {localize(group.items, language)}</p>
          ))}
        </div>
      </section>

      <section className="ats-cv-section">
        <h2>{t.experience}</h2>
        <div className="ats-cv-list">
          {cvProfessionalExperience.map((item) => (
            <div className="ats-cv-entry" key={item.year + "-" + item.title.en}>
              <EntryHeading title={localize(item.title, language)} date={localize(item.period, language)} />
              {item.organization ? <p><strong>{item.organization}</strong>{item.location ? " | " + localize(item.location, language) : ""}</p> : null}
              <ul>{item.bullets.map((bullet) => <li key={bullet.en}>{localize(bullet, language)}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="ats-cv-section">
        <h2>{t.projects}</h2>
        <div className="ats-cv-list">
          {cvProjects.map((project) => (
            <div className="ats-cv-entry" key={project.slug}>
              <EntryHeading title={localize(project.title, language)} date={project.year} />
              <p>{projectSummary(project, language)}</p>
              <p><strong>{t.technologies}:</strong> {project.technologies.join(", ")}</p>
              {project.github ? <p><strong>{t.project}:</strong> {project.github}</p> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="ats-cv-section">
        <h2>{t.academic}</h2>
        <div className="ats-cv-list">
          <div className="ats-cv-entry">
            <EntryHeading title={localize(cvAcademicProject.title, language)} date={localize(cvAcademicProject.period, language)} />
            <p>{localize(cvAcademicProject.location ?? { en: "", fr: "" }, language)}</p>
            <p>{localize(cvAcademicProject.bullets[0], language)}</p>
          </div>
        </div>
      </section>

      {certifications.length > 0 ? (
        <section className="ats-cv-section">
          <h2>{t.certifications}</h2>
          <div className="ats-cv-list">
            {certifications.map((item) => (
              <div className="ats-cv-entry" key={item.name}>
                <EntryHeading title={item.name} date={item.date} />
                <p>{item.organization}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="ats-cv-section ats-cv-compact-section">
        <h2>{t.languages}</h2>
        <p>{cvLanguages.map((item) => languageLevel(language, localize(item.name, language), localize(item.level, language))).join(" | ")}</p>
      </section>
    </article>
  );
}

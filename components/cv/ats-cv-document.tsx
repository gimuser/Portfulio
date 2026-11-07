"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { atsProfessionalSummary, cvAcademicProject, cvEducation, cvLanguages, cvProfessionalExperience, cvProjects, cvSkills, cvSubline, type CvProject } from "@/data/cv";
import { profile } from "@/data/profile";
import type { Language } from "@/types/content";
import { localize } from "@/utils/localize";

const labels = {
  en: {
    summary: "Professional Summary",
    education: "Education",
    skills: "Technical Skills",
    projects: "Projects",
    experience: "Professional Experience",
    academic: "Additional Academic Project",
    languages: "Languages",
    technologies: "Technologies",
    project: "Project",
    role: "AI / Machine Learning Engineer | Data Scientist",
  },
  fr: {
    summary: "Profil professionnel",
    education: "Formation",
    skills: "Compétences techniques",
    projects: "Projets",
    experience: "Expérience professionnelle",
    academic: "Projet académique complémentaire",
    languages: "Langues",
    technologies: "Technologies",
    project: "Projet",
    role: "Ingénieur IA / Machine Learning | Data Scientist",
  },
} as const;

function languageLevel(language: Language, name: string, level: string) {
  return language === "fr" ? name + " : " + level : name + ": " + level;
}

function EntryHeading({ title, date }: { title: string; date: string }) {
  return (
    <div className="cv-date-row ats-cv-entry-heading">
      <h3>{title}</h3>
      <strong className="cv-date">{date}</strong>
    </div>
  );
}

export function AtsCvDocument() {
  const { language } = useLanguage();
  const t = labels[language];
  const location = language === "fr" ? "Béni Mellal, Maroc" : "Beni Mellal, Morocco";
  const portfolioUrl = profile.links.website.href.replace(/\/$/, "");
  const linkedin = profile.links.linkedin.href.replace(/^https?:\/\//, "");
  const github = profile.links.github.href.replace(/^https?:\/\//, "");
  const contactLine1 = [location, profile.email, profile.phone].join(" | ");
  const contactLine2 = [portfolioUrl, linkedin, github].join(" | ");

  return (
    <article className="ats-cv-page" data-language={language} aria-label={profile.cvName + " ATS CV"}>
      <header className="ats-cv-header">
        <h1>{profile.cvName}</h1>
        <p className="ats-cv-role">{t.role}</p>
        <p className="ats-cv-tagline">{localize(cvSubline, language)}</p>
        <div className="ats-cv-contact-block">
          <p>{contactLine1}</p>
          <p>{contactLine2}</p>
        </div>
      </header>

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
              <p className="ats-cv-education-details">{localize(item.details, language)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ats-cv-section">
        <h2>{t.skills}</h2>
        <div className="ats-cv-skill-list">
          {cvSkills.map((group) => (
            <p key={group.title.en}>
              <strong>{language === "fr" ? group.title.fr + " : " : group.title.en + ": "}</strong>
              {localize(group.items, language)}
            </p>
          ))}
        </div>
      </section>

      <section className="ats-cv-section">
        <h2>{t.experience}</h2>
        <div className="ats-cv-list">
          {cvProfessionalExperience.map((item) => (
            <div className="ats-cv-entry" key={item.year + "-" + item.title.en}>
              <EntryHeading title={localize(item.title, language)} date={localize(item.period, language)} />
              <p><strong>{item.organization}</strong>{item.location ? " | " + localize(item.location, language) : ""}</p>
              <ul>{item.bullets.map((bullet) => <li key={bullet.en}>{localize(bullet, language)}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="ats-cv-section">
        <h2>{t.projects}</h2>
        <div className="ats-cv-list">
          {cvProjects.map((project: CvProject) => (
            <div className="ats-cv-entry" key={project.slug}>
              <EntryHeading title={localize(project.title, language)} date={project.year} />
              <p>{localize(project.summary, language)}</p>
              <p><strong>{language === "fr" ? "Technologies : " : "Technologies: "}</strong>{project.technologies.join(", ")}</p>
              {project.github ? <p><strong>{language === "fr" ? "Projet : " : "Project: "}</strong>{project.github}</p> : null}
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

      <section className="ats-cv-section ats-cv-compact-section">
        <h2>{t.languages}</h2>
        <p>{cvLanguages.map((item) => languageLevel(language, localize(item.name, language), localize(item.level, language))).join(" | ")}</p>
      </section>
    </article>
  );
}

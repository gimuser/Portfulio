"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { certifications } from "@/data/certifications";
import { atsProfessionalSummary, cvLanguages } from "@/data/cv";
import { education, experience, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import type { Language, Project } from "@/types/content";
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

const selectedProjectSlugs = [
  "soar-rl-agent",
  "bachelor-ai-tutor",
  "islamic-ai-chat",
  "car-price-prediction-system",
];

const atsSkillGroupPriority = [
  "Generative AI and RAG",
  "Machine Learning & AI",
  "Data Science & Analytics",
  "Programming",
  "Backend and APIs",
  "Data Management & Information Systems",
  "Cybersecurity",
];

const atsSkillItemOverrides: Record<string, string[]> = {
  "Generative AI and RAG": ["Retrieval-Augmented Generation (RAG)","Embeddings","Vector search","LLM integration","Prompt engineering","Ollama","OpenAI API","OpenRouter","Document processing","Structured output validation","Constrained generation","Model quantization","Document parsing"],
  "Machine Learning & AI": ["Machine learning","Artificial intelligence","PyTorch","Deep learning","Model evaluation","Image classification"],
  "Data Science & Analytics": ["Data cleaning","Exploratory data analysis","Feature engineering","Regression modeling","Data visualization","Scientific research","Scientific paper reading"],
  "Programming": ["Python","SQL","TypeScript","JavaScript","C"],
  "Backend and APIs": ["Node.js","Express","REST APIs","Next.js API routes"],
  "Data Management & Information Systems": ["MongoDB","Mongoose","Prisma","SQLite","Database fundamentals","JSON schema validation"],
  "Cybersecurity": ["Information systems security","Network security","Cryptography","Input validation","Rate limiting"],
};

function getAtsProjectSummary(project: Project, language: Language) {
  return localize(project.atsSummary ?? project.cvSummary ?? project.summary, language);
}

function formatLanguageLevel(language: Language, name: string, level: string) {
  return language === "fr" ? name + " : " + level : name + ": " + level;
}

export function AtsCvDocument() {
  const { language } = useLanguage();
  const labels = atsLabels[language];
  const technicalSkillGroups = skillGroups
    .filter((group) => Object.prototype.hasOwnProperty.call(atsSkillItemOverrides, group.title.en))
    .map((group) => ({ ...group, items: atsSkillItemOverrides[group.title.en] }))
    .sort((first, second) => atsSkillGroupPriority.indexOf(first.title.en) - atsSkillGroupPriority.indexOf(second.title.en));
  const selectedProjects = selectedProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));
  const visibleEducation = education.slice(0, 3);
  const professionalExperience = experience.filter((item) => item.title.en === "AI Engineering Intern");
  const visibleExperience = experience.filter((item) => item.title.en === "Cybersecurity learning project");
  const showCertifications = certifications.length > 0;
  const location = language === "fr" ? "Beni Mellal, Maroc" : profile.location;
  const contactRows = [
    [
      { key: "location", text: location, href: profile.locationMapHref },
      { key: "email", text: labels.contact.email + ": " + profile.email, href: "mailto:" + profile.email },
      { key: "phone", text: labels.contact.phone + ": " + profile.phone, href: "tel:" + profile.phone.replace(/\s+/g, "") },
    ],
    [{ key: "portfolio", text: profile.links.website.href, href: profile.links.website.href }],
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
            </div>
          ))}
        </div>
      </section>

      <section className="ats-cv-section">
        <h2>{labels.sections.skills}</h2>
        <div className="ats-cv-skill-list">
          {technicalSkillGroups.map((group) => (
            <p key={group.title.en}>
              <strong>{localize(group.title, language)}:</strong> {group.items.join(", ")}
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
                {item.bullets.slice(0, 1).map((bullet) => <li key={bullet.en}>{localize(bullet, language)}</li>)}
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
                <h3>{project.title}</h3>
                <strong>{project.year}</strong>
              </div>
              <p>{getAtsProjectSummary(project, language)}</p>
              <p><strong>{labels.technologies}:</strong> {project.technologies.join(", ")}</p>
              {project.github.status === "available" && project.status.en.toLowerCase().includes("public") && !project.github.href.includes("[ADD") ? (
                <p><strong>{labels.projectLink}:</strong> {project.github.href}</p>
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
                {item.bullets.slice(0, 1).map((bullet) => (
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

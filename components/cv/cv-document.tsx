"use client";

import { Download, Printer } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
import { certifications } from "@/data/certifications";
import { education, experience, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { localize } from "@/utils/localize";

export function CvDocument() {
  const { language } = useLanguage();
  const printPage = () => window.print();

  return (
    <div className="cv-page" id="content">
      <div className="cv-controls no-print">
        <button className="button" type="button" onClick={printPage}>
          <Printer size={18} />
          {language === "en" ? "Print / Save PDF" : "Imprimer / PDF"}
        </button>
        <a className="button button-secondary" href="/cv/oualid-ait-alla-modern-cv.pdf" download>
          <Download size={18} />
          {language === "en" ? "Download modern PDF" : "Telecharger le PDF moderne"}
        </a>
        <a className="button button-ghost" href="/cv/oualid-ait-alla-original-cv.pdf" download>
          {language === "en" ? "Original CV" : "Ancien CV"}
        </a>
      </div>

      <article className="cv-sheet">
        <header className="cv-header">
          <div>
            <h1>{profile.name}</h1>
            <p>{localize(profile.displayRole, language)}</p>
          </div>
          <address>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.location}</span>
            <span>{language === "en" ? "LinkedIn: [ADD LINKEDIN URL]" : "LinkedIn : [AJOUTER URL LINKEDIN]"}</span>
            <span>GitHub: {profile.links.github.href}</span>
          </address>
        </header>

        <section>
          <h2>{language === "en" ? "Profile" : "Profil"}</h2>
          <p>{localize(profile.shortProfile, language)}</p>
          <p>{localize(profile.value, language)}</p>
        </section>

        <section>
          <h2>{language === "en" ? "Education" : "Formation"}</h2>
          <div className="cv-list">
            {education.map((item) => (
              <div className="cv-row" key={`${item.year}-${item.title.en}`}>
                <strong>{item.year}</strong>
                <div>
                  <h3>{localize(item.title, language)}</h3>
                  <p>{localize(item.institution, language)}</p>
                  <small>{localize(item.details, language)}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>{language === "en" ? "Technical Skills" : "Competences techniques"}</h2>
          <div className="cv-skill-grid">
            {skillGroups
              .filter((group) => group.title.en !== "Professional Skills" && group.title.en !== "Languages")
              .map((group) => (
                <p key={group.title.en}>
                  <strong>{localize(group.title, language)}:</strong> {group.items.join(", ")}
                </p>
              ))}
          </div>
        </section>

        <section>
          <h2>{language === "en" ? "Projects" : "Projets"}</h2>
          <div className="cv-list">
            {projects.map((project) => (
              <div className="cv-row" key={project.slug}>
                <strong>{project.year}</strong>
                <div>
                  <h3>{project.title}</h3>
                  <p>{localize(project.summary, language)}</p>
                  <small>{project.technologies.join(", ")}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-two">
          <div>
            <h2>{language === "en" ? "Project Experience" : "Experience projets"}</h2>
            {experience.map((item) => (
              <div key={`${item.year}-${item.title.en}`} className="cv-mini">
                <strong>
                  {item.year} - {localize(item.title, language)}
                </strong>
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
            <p>Arabic: Native</p>
            <p>English: Intermediate</p>
            <p>French: Intermediate</p>
            <p>Spanish: Beginner</p>
            <h2>{language === "en" ? "Certifications" : "Certifications"}</h2>
            {certifications.length === 0 ? (
              <p>{language === "en" ? "[ADD CERTIFICATIONS]" : "[AJOUTER CERTIFICATIONS]"}</p>
            ) : null}
          </div>
        </section>
      </article>
    </div>
  );
}

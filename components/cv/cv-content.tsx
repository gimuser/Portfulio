"use client";

import Image from "next/image";
import { useLanguage } from "@/components/layout/language-provider";
import { cvEducation, cvLanguages, cvProfessionalExperience, cvProjects, cvSkills, cvSoftSkills, cvProfessionalSummary } from "@/data/cv";
import { profile } from "@/data/profile";
import { localize } from "@/utils/localize";

const labels = {
  en: {
    summary: "Professional Summary",
    education: "Education",
    skills: "Technical Skills",
    experience: "Professional Experience",
    projects: "Projects",
    softSkills: "Soft Skills",
    languages: "Languages",
    technologies: "Technologies",
    role: "AI / Machine Learning Engineer | Data Scientist",
    seeking: "Seeking an internship: AI Engineering • Machine Learning • Data Science • AI for Cybersecurity",
  },
  fr: {
    summary: "Profil professionnel",
    education: "Formation",
    skills: "Compétences techniques",
    experience: "Expérience professionnelle",
    projects: "Projets",
    softSkills: "Compétences personnelles",
    languages: "Langues",
    technologies: "Technologies",
    role: "Ingénieur IA / Machine Learning | Data Scientist",
    seeking: "À la recherche d'un stage : Ingénierie IA • Machine Learning • Data Science • IA pour la cybersécurité",
  },
} as const;

export function CvContent({ showPhoto = false }: { showPhoto?: boolean }) {
  const { language } = useLanguage();
  const t = labels[language];
  const contact = language === "fr"
    ? ["Béni Mellal, Maroc", profile.email, profile.phone]
    : ["Beni Mellal, Morocco", profile.email, profile.phone];
  const links = [
    { text: "https://oualid-ait-alla.vercel.app", href: profile.links.website.href },
    { text: "www.linkedin.com/in/aitalla-oualid-9797132bb/", href: profile.links.linkedin.href },
    { text: "github.com/gimuser", href: profile.links.github.href },
  ];

  return (
    <article className={showPhoto ? "cv-simple cv-simple-photo" : "cv-simple cv-simple-ats"} data-language={language}>
      <header className="cv-simple-header">
        {showPhoto ? (
          <Image
            className="cv-simple-photo-image"
            src="/images/oualid-ait-alla.jpg"
            alt="AIT ALLA Oualid"
            width={132}
            height={170}
            priority
          />
        ) : null}
        <div className="cv-simple-heading">
          <h1>AIT ALLA Oualid</h1>
          <p className="cv-simple-role">{t.role}</p>
          <p className="cv-simple-seeking">{t.seeking}</p>
          <p className="cv-simple-contact">{contact.join(" | ")}</p>
          <p className="cv-simple-links">
            {links.map((link, index) => (
              <span key={link.text}>{index > 0 ? " | " : ""}<a href={link.href}>{link.text}</a></span>
            ))}
          </p>
        </div>
      </header>

      <section className="cv-simple-section">
        <h2>{t.summary}</h2>
        <p className="cv-simple-summary">{localize(cvProfessionalSummary, language)}</p>
      </section>

      <section className="cv-simple-section">
        <h2>{t.education}</h2>
        <div className="cv-simple-list">
          {cvEducation.map((item) => (
            <div className="cv-simple-entry" key={item.year}>
              <div className="cv-simple-entry-heading">
                <h3>{localize(item.title, language)}</h3>
                <strong>{localize(item.period, language)}</strong>
              </div>
              <p>{localize(item.institution, language)}</p>
              {item.details[language] ? <p>{localize(item.details, language)}</p> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="cv-simple-section">
        <h2>{t.skills}</h2>
        <div className="cv-simple-skills">
          {cvSkills.map((skill) => (
            <p key={skill.title.en}><strong>{localize(skill.title, language)}:</strong> {localize(skill.items, language)}</p>
          ))}
        </div>
      </section>

      <section className="cv-simple-section">
        <h2>{t.experience}</h2>
        <div className="cv-simple-list">
          {cvProfessionalExperience.map((item) => (
            <div className="cv-simple-entry" key={item.year}>
              <div className="cv-simple-entry-heading">
                <h3>{localize(item.title, language)}</h3>
                <strong>{localize(item.period, language)}</strong>
              </div>
              <p className="cv-simple-organization">{item.organization} | {localize(item.location, language)}</p>
              <ul>{item.bullets.map((bullet) => <li key={bullet.en}>{localize(bullet, language)}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cv-simple-section">
        <h2>{t.projects}</h2>
        <div className="cv-simple-list">
          {cvProjects.map((project) => (
            <div className="cv-simple-entry" key={project.slug}>
              <div className="cv-simple-entry-heading">
                <h3>{localize(project.title, language)}</h3>
                <strong>{project.year}</strong>
              </div>
              <p>{localize(project.summary, language)}</p>
              <p className="cv-simple-technologies"><strong>{t.technologies}:</strong> {project.technologies.join(", ")}{project.github ? " | " + project.github : ""}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cv-simple-section">
        <h2>{t.softSkills}</h2>
        <p>{localize(cvSoftSkills, language)}</p>
      </section>

      <section className="cv-simple-section">
        <h2>{t.languages}</h2>
        <p>{cvLanguages.map((item) => localize(item.name, language) + (language === "fr" ? " : " : ": ") + localize(item.level, language)).join(" | ")}</p>
      </section>

      <style jsx global>{`
        .cv-simple {
          box-sizing: border-box;
          width: 100%;
          margin: 0 auto;
          padding: 0;
          color: #000;
          background: #fff;
          font-family: Arial, "Liberation Sans", sans-serif;
          font-size: 9.5pt;
          line-height: 1.3;
        }
        .cv-simple * { box-sizing: border-box; }
        .cv-simple-header {
          display: flex;
          align-items: center;
          gap: 6mm;
          min-height: 45mm;
          margin: 0 0 3mm;
          break-inside: avoid;
        }
        .cv-simple-photo-image {
          display: block;
          flex: 0 0 35mm;
          width: 35mm;
          height: 45mm;
          object-fit: cover;
          object-position: center;
        }
        .cv-simple-heading { min-width: 0; flex: 1; }
        .cv-simple h1 { margin: 0 0 1mm; font-size: 19pt; line-height: 1.05; font-weight: 700; }
        .cv-simple-role { margin: 0 0 1mm; font-size: 11pt; font-weight: 700; }
        .cv-simple-seeking { margin: 0 0 1mm; font-size: 9pt; }
        .cv-simple-contact, .cv-simple-links { margin: 0 0 .5mm; font-size: 9pt; }
        .cv-simple a { color: #000; text-decoration: none; }
        .cv-simple-section { margin: 2.6mm 0 0; break-inside: auto; }
        .cv-simple-summary { font-family: "Arial Narrow", "Liberation Sans Narrow", Arial, sans-serif; font-size: 9pt; line-height: 1.25; }
        .cv-simple-section h2 {
          margin: 0 0 1mm;
          padding: 0 0 .6mm;
          border-bottom: .25mm solid #333;
          font-size: 10pt;
          line-height: 1.15;
          font-weight: 700;
          break-after: avoid;
          page-break-after: avoid;
        }
        .cv-simple p { margin: 0 0 .65mm; }
        .cv-simple-list { display: grid; gap: 1.2mm; }
        .cv-simple-entry { break-inside: avoid; page-break-inside: avoid; }
        .cv-simple-entry > ul { padding-right: 32mm; }
        .cv-simple-entry-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 4mm; }
        .cv-simple-entry-heading h3 { min-width: 0; margin: 0; font-size: 9.5pt; line-height: 1.2; font-weight: 700; }
        .cv-simple-entry-heading strong { flex: 0 0 auto; white-space: nowrap; text-align: right; font-size: 9pt; font-weight: 400; }
        .cv-simple-organization { margin: 0; }
        .cv-simple-skills p { white-space: nowrap; font-family: "Arial Narrow", "Liberation Sans Narrow", Arial, sans-serif; font-size: 9pt; letter-spacing: -.08pt; margin: 0 0 .45mm; }
        .cv-simple ul { margin: .3mm 0 0; padding-left: 4.5mm; }
        .cv-simple li { margin: 0 0 .35mm; padding: 0; white-space: nowrap; }
        .cv-simple-entry > p:not(.cv-simple-technologies) { white-space: nowrap; font-family: "Arial Narrow", "Liberation Sans Narrow", Arial, sans-serif; font-size: 9pt; }
        .cv-simple li { font-family: "Arial Narrow", "Liberation Sans Narrow", Arial, sans-serif; font-size: 9pt; }
        .cv-simple-technologies { white-space: nowrap; font-size: 8.8pt; padding-right: 0 !important; }
        .cv-simple-ats .cv-simple-header { min-height: 0; }
        @media print {
          @page { size: A4; margin: 14mm; }
          html, body { margin: 0 !important; padding: 0 !important; background: #fff !important; color: #000 !important; }
          .site-header, .footer, .no-print, .cv-controls, .cv-floating-actions { display: none !important; }
          .cv-page { margin: 0 !important; padding: 0 !important; }
          .cv-simple { width: 100%; font-size: 9.5pt; line-height: 1.3; color: #000 !important; background: #fff !important; }
          .cv-simple-photo-image { width: 35mm !important; height: 45mm !important; max-width: 35mm !important; max-height: 45mm !important; object-fit: cover !important; }
          .cv-simple-section { margin-top: 2.3mm; }
          .cv-simple-section h2 { break-after: avoid; page-break-after: avoid; }
          .cv-simple-entry { break-inside: avoid; page-break-inside: avoid; }
          .cv-simple a { color: #000 !important; text-decoration: none !important; }
        }
      `}</style>
    </article>
  );
}

"use client";

import Image from "next/image";
import { Download, Globe2, Mail, MapPin, Printer } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
import { SocialIcon } from "@/components/ui/social-icons";
import { certifications } from "@/data/certifications";
import { education, experience, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { localize } from "@/utils/localize";

export function CvDocument() {
  const { language } = useLanguage();
  const printPage = () => window.print();
  const cleanUrl = (href: string) => href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  const isPlaceholder = (value: string) => value.includes("[ADD") || value.includes("[AJOUTER");
  const languageLevels =
    language === "en"
      ? ["Arabic: Native", "English: Intermediate", "French: Intermediate", "Spanish: Beginner"]
      : ["Arabe : langue maternelle", "Anglais : intermédiaire", "Français : intermédiaire", "Espagnol : débutant"];
  const cvSkillGroups = skillGroups.filter(
    (group) => group.title.en !== "Professional Skills" && group.title.en !== "Languages",
  );
  const selectedProjects = projects.slice(0, 3);

  return (
    <div className="cv-page" id="content">
      <div className="cv-controls no-print">
        <button className="button" type="button" onClick={printPage}>
          <Printer size={18} />
          {language === "en" ? "Print / Save PDF" : "Imprimer / PDF"}
        </button>
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

      <div className="cv-floating-download no-print">
        <button className="button button-secondary" type="button" onClick={printPage}>
          <Download size={18} />
          <span>{language === "en" ? "Download CV PDF" : "Télécharger le CV PDF"}</span>
        </button>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, FileWarning, MapPin } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities, researchInterests } from "@/data/research";
import { certifications } from "@/data/certifications";
import { education, experience, profile } from "@/data/profile";
import { missingProjectMaterials, projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { useLanguage } from "@/components/layout/language-provider";
import { localize } from "@/utils/localize";

export function HomeSections() {
  const { language } = useLanguage();
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="section">
        <div className="container two-column">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title={language === "en" ? "A practical AI and security learner" : "Un profil pratique IA et securite"}
              description={localize(profile.value, language)}
            />
            <p className="body-large">
              {language === "en"
                ? "I am building a profile at the intersection of data science, machine learning, Python development, and secure intelligent systems. My current goal is to turn academic foundations into strong portfolio projects for internships, research work, and junior opportunities."
                : "Je construis un profil a l'intersection de la data science, du machine learning, du developpement Python et des systemes intelligents securises. Mon objectif actuel est de transformer les bases academiques en projets solides pour stages, recherche et opportunites junior."}
            </p>
          </Reveal>
          <Reveal className="info-panel" delay={0.1}>
            <p className="eyebrow">Current profile</p>
            <h3>{localize(profile.displayRole, language)}</h3>
            <p>{localize(profile.institution, language)}</p>
            <span>
              <MapPin size={16} />
              {profile.location}
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Projects"
            title={language === "en" ? "Featured project work" : "Projets selectionnes"}
            description={
              language === "en"
                ? "A concise selection of AI, data science, full-stack, and security projects."
                : "Une selection concise de projets IA, data science, full-stack et securite."
            }
          />
          <div className="project-grid">
            {featured.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <ProjectCard project={project} language={language} />
              </Reveal>
            ))}
          </div>
          <Link className="button button-inline" href="/projects">
            {language === "en" ? "Explore all projects" : "Explorer tous les projets"}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Skills"
            title={language === "en" ? "Technical skills" : "Competences techniques"}
            description={
              language === "en"
                ? "Core tools and capabilities used across projects, coursework, and learning work."
                : "Outils et capacites utilises dans les projets, les cours et l'apprentissage."
            }
          />
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <Reveal key={group.title.en} className="skill-card">
                <h3>{localize(group.title, language)}</h3>
                <div className="badge-row">
                  {group.items.map((item) => (
                    <span key={item} className="badge">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container timeline-layout">
          <div>
            <SectionHeading
              eyebrow="Education"
              title={language === "en" ? "Academic timeline" : "Parcours academique"}
              description={
                language === "en"
                  ? "The timeline keeps academic dates clear and flags missing institution details."
                  : "La chronologie garde les dates academiques claires et signale les etablissements manquants."
              }
            />
          </div>
          <div className="timeline">
            {education.map((item) => (
              <article key={`${item.year}-${item.title.en}`} className="timeline-item">
                <span>{item.year}</span>
                <div>
                  <h3>{localize(item.title, language)}</h3>
                  <p>{localize(item.institution, language)}</p>
                  <small>{localize(item.details, language)}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grids">
          <div>
            <SectionHeading
              eyebrow="Experience"
              title={language === "en" ? "Project-based experience" : "Experience basee sur projets"}
            />
            <div className="stack">
              {experience.map((item) => (
                <article className="compact-card" key={`${item.year}-${item.title.en}`}>
                  <p className="eyebrow">{item.year}</p>
                  <h3>{localize(item.title, language)}</h3>
                  <p>{localize(item.context, language)}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet.en}>{localize(bullet, language)}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Research"
              title={language === "en" ? "Research interests" : "Interets de recherche"}
            />
            <div className="constellation">
              {researchInterests.map((interest) => (
                <span key={interest}>{interest}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split-grids">
          <div>
            <SectionHeading
              eyebrow="Capabilities"
              title={language === "en" ? "Ways I can contribute" : "Contributions possibles"}
              description={
                language === "en"
                  ? "Presented as capabilities and learning direction, not as an agency service record."
                  : "Presente comme capacites et directions d'apprentissage, pas comme experience d'agence."
              }
            />
            <div className="check-grid">
              {capabilities.map((capability) => (
                <span key={capability}>
                  <CheckCircle2 size={16} />
                  {capability}
                </span>
              ))}
            </div>
          </div>
          <div className="warning-panel" id="missing-links">
            <FileWarning size={24} />
            <h3>{language === "en" ? "Materials to add next" : "Elements a ajouter"}</h3>
            <p>
              {language === "en"
                ? "These items can be added when their repositories, notebooks, reports, screenshots, or metrics are ready."
                : "Ces elements peuvent etre ajoutes quand leurs depots, notebooks, rapports, captures ou metriques sont prets."}
            </p>
            <ul>
              {missingProjectMaterials.map((item) => (
                <li key={item}>{item}</li>
              ))}
              {certifications.length === 0 ? <li>Certificates and credential URLs</li> : null}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

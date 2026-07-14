"use client";

import Link from "next/link";
import { ArrowRight, FileText, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { CareerRoadmap } from "@/components/career/career-roadmap";
import { CareerTimeline } from "@/components/career/career-timeline";
import { useLanguage } from "@/components/layout/language-provider";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icons";
import {
  careerCallToAction,
  careerIntro,
  careerLabels,
  careerTimeline,
  impactAreas,
  skillsRoadmap,
  targetIdentity,
} from "@/data/career-vision";
import { profile } from "@/data/profile";
import { localize } from "@/utils/localize";

export function CareerVisionSection() {
  const { language } = useLanguage();

  return (
    <section className="section career-section" id="career-vision" aria-labelledby="career-vision-title">
      <div className="container career-shell">
        <div className="career-heading-grid">
          <Reveal>
            <p className="eyebrow">{localize(careerIntro.eyebrow, language)}</p>
            <h2 id="career-vision-title">{localize(careerIntro.title, language)}</h2>
            <p className="career-subtitle">{localize(careerIntro.subtitle, language)}</p>
            <p className="body-large">{localize(careerIntro.introduction, language)}</p>
          </Reveal>

          <Reveal className="career-target-card" delay={0.08}>
            <span className="career-icon-box" role="img" aria-label={localize(careerLabels.targetIconAria, language)}>
              <Sparkles aria-hidden="true" size={21} strokeWidth={2.1} />
            </span>
            <p className="eyebrow">{localize(targetIdentity.title, language)}</p>
            <h3>{localize(targetIdentity.description, language)}</h3>
            <div>
              <strong>{localize(targetIdentity.directionTitle, language)}</strong>
              <p>{localize(targetIdentity.direction, language)}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <CareerTimeline items={careerTimeline} language={language} />
        </Reveal>

        <div className="career-lower-grid">
          <Reveal className="career-panel" delay={0.08}>
            <div className="career-panel-heading">
              <span
                className="career-icon-box"
                role="img"
                aria-label={localize(careerLabels.skillsRoadmapIconAria, language)}
              >
                <ArrowRight aria-hidden="true" size={20} strokeWidth={2.1} />
              </span>
              <div>
                <p className="eyebrow">{localize(careerLabels.skillsRoadmapTitle, language)}</p>
                <h3>{localize(careerLabels.connectedGrowthLevels, language)}</h3>
              </div>
            </div>
            <CareerRoadmap levels={skillsRoadmap} language={language} />
          </Reveal>

          <Reveal className="career-panel" delay={0.14}>
            <div className="career-panel-heading">
              <span
                className="career-icon-box"
                role="img"
                aria-label={localize(careerLabels.impactAreasIconAria, language)}
              >
                <ShieldCheck aria-hidden="true" size={20} strokeWidth={2.1} />
              </span>
              <div>
                <p className="eyebrow">{localize(careerLabels.fieldsTitle, language)}</p>
                <h3>{localize(careerLabels.impactAreasTitle, language)}</h3>
              </div>
            </div>
            <div className="career-impact-grid">
              {impactAreas.map((area) => (
                <span key={area.en}>{localize(area, language)}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="career-cta" delay={0.1}>
          <div>
            <p className="eyebrow">{localize(careerCallToAction.title, language)}</p>
            <h3>{localize(careerCallToAction.description, language)}</h3>
          </div>
          <div className="career-cta-actions" aria-label={localize(careerLabels.ctaActionsAria, language)}>
            <Link className="button" href="/projects">
              {localize(careerLabels.viewProjects, language)}
              <ArrowRight size={18} />
            </Link>
            <Link className="button button-secondary" href={`/cv?lang=${language}`}>
              <FileText size={18} />
              {localize(careerLabels.downloadCv, language)}
            </Link>
            <Link className="button button-ghost" href="/contact">
              <Mail size={18} />
              {localize(careerLabels.contactMe, language)}
            </Link>
            <a className="button button-ghost" href={profile.links.github.href} target="_blank" rel="noreferrer">
              <SocialIcon name="github" size={18} />
              {localize(careerLabels.visitGithub, language)}
            </a>
            <a className="button button-ghost" href={profile.links.linkedin.href} target="_blank" rel="noreferrer">
              <SocialIcon name="linkedin" size={18} />
              {localize(careerLabels.connectLinkedin, language)}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

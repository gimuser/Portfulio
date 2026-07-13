"use client";

import Link from "next/link";
import { ArrowRight, FileText, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { CareerRoadmap } from "@/components/career/career-roadmap";
import { CareerTimeline } from "@/components/career/career-timeline";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icons";
import {
  careerCallToAction,
  careerIntro,
  careerTimeline,
  impactAreas,
  skillsRoadmap,
  targetIdentity,
} from "@/data/career-vision";
import { profile } from "@/data/profile";

export function CareerVisionSection() {
  return (
    <section className="section career-section" id="career-vision" aria-labelledby="career-vision-title">
      <div className="container career-shell">
        <div className="career-heading-grid">
          <Reveal>
            <p className="eyebrow">{careerIntro.eyebrow}</p>
            <h2 id="career-vision-title">{careerIntro.title}</h2>
            <p className="career-subtitle">{careerIntro.subtitle}</p>
            <p className="body-large">{careerIntro.introduction}</p>
          </Reveal>

          <Reveal className="career-target-card" delay={0.08}>
            <span className="career-icon-box" role="img" aria-label="Target career identity icon">
              <Sparkles aria-hidden="true" size={21} strokeWidth={2.1} />
            </span>
            <p className="eyebrow">{targetIdentity.title}</p>
            <h3>{targetIdentity.description}</h3>
            <div>
              <strong>{targetIdentity.directionTitle}</strong>
              <p>{targetIdentity.direction}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <CareerTimeline items={careerTimeline} />
        </Reveal>

        <div className="career-lower-grid">
          <Reveal className="career-panel" delay={0.08}>
            <div className="career-panel-heading">
              <span className="career-icon-box" role="img" aria-label="Skills roadmap icon">
                <ArrowRight aria-hidden="true" size={20} strokeWidth={2.1} />
              </span>
              <div>
                <p className="eyebrow">Skills Roadmap</p>
                <h3>Connected growth levels</h3>
              </div>
            </div>
            <CareerRoadmap levels={skillsRoadmap} />
          </Reveal>

          <Reveal className="career-panel" delay={0.14}>
            <div className="career-panel-heading">
              <span className="career-icon-box" role="img" aria-label="Impact areas icon">
                <ShieldCheck aria-hidden="true" size={20} strokeWidth={2.1} />
              </span>
              <div>
                <p className="eyebrow">Fields I Want to Work In</p>
                <h3>Impact areas</h3>
              </div>
            </div>
            <div className="career-impact-grid">
              {impactAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="career-cta" delay={0.1}>
          <div>
            <p className="eyebrow">{careerCallToAction.title}</p>
            <h3>{careerCallToAction.description}</h3>
          </div>
          <div className="career-cta-actions" aria-label="Career vision actions">
            <Link className="button" href="/projects">
              View My Projects
              <ArrowRight size={18} />
            </Link>
            <Link className="button button-secondary" href="/cv">
              <FileText size={18} />
              Download My CV
            </Link>
            <Link className="button button-ghost" href="/contact">
              <Mail size={18} />
              Contact Me
            </Link>
            <a className="button button-ghost" href={profile.links.github.href} target="_blank" rel="noreferrer">
              <SocialIcon name="github" size={18} />
              Visit My GitHub
            </a>
            <a className="button button-ghost" href={profile.links.linkedin.href} target="_blank" rel="noreferrer">
              <SocialIcon name="linkedin" size={18} />
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

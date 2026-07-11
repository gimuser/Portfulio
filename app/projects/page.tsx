import type { Metadata } from "next";
import { ProjectFilters } from "@/components/projects/project-filters";
import { SectionHeading } from "@/components/ui/section-heading";
import { missingProjectEvidence } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Verified project case studies for data science, machine learning, cybersecurity, and web development.",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell" id="content">
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Projects"
            title="Verified portfolio case studies"
            description="Filtered project cards and detailed pages based only on material found in the CV."
          />
          <ProjectFilters />
        </div>
      </section>
      <section className="section section-alt">
        <div className="container narrow">
          <SectionHeading
            eyebrow="Evidence"
            title="Requested projects that need source files"
            description="These can become featured case studies as soon as their repositories, notebooks, reports, screenshots, or metrics are added."
          />
          <ul className="evidence-list">
            {missingProjectEvidence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

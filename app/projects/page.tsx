import type { Metadata } from "next";
import { ProjectFilters } from "@/components/projects/project-filters";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project case studies for data science, machine learning, cybersecurity, and web development.",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell" id="content">
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Projects"
            title="Portfolio case studies"
            description="Project cards and detailed pages for AI, data science, cybersecurity, and web development work."
          />
          <ProjectFilters />
        </div>
      </section>
    </div>
  );
}

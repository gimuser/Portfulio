import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectVisual } from "@/components/projects/project-visual";
import type { Language, Project } from "@/types/content";
import { localize } from "@/utils/localize";

export function ProjectCard({ project, language }: { project: Project; language: Language }) {
  return (
    <article className="project-card">
      <ProjectVisual project={project} />
      <div className="project-card-body">
        <div className="card-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{localize(project.summary, language)}</p>
        <div className="badge-row">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>
        <Link className="text-link" href={`/projects/${project.slug}`}>
          {language === "en" ? "View case study" : "Voir l'etude de cas"}
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

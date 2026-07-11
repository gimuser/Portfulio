"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/project-card";
import { projectCategories, projects } from "@/data/projects";
import { useLanguage } from "@/components/layout/language-provider";
import type { ProjectCategory } from "@/types/content";

export function ProjectFilters() {
  const { language } = useLanguage();
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active],
  );

  return (
    <div className="project-filter-shell">
      <div className="filter-bar" aria-label="Project filters">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={active === category ? "active" : ""}
            onClick={() => setActive(category)}
          >
            {category === "All" && language === "fr" ? "Tous" : category}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} language={language} />
        ))}
      </div>
    </div>
  );
}

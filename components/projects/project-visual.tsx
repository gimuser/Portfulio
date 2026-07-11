import type { Project } from "@/types/content";

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual tone-${project.visualTone}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-node node-a" />
      <div className="visual-node node-b" />
      <div className="visual-node node-c" />
      <div className="visual-line line-a" />
      <div className="visual-line line-b" />
      <div className="visual-chart">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

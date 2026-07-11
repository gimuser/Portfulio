import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/projects/project-visual";
import { LinkStatus } from "@/components/ui/link-status";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary.en,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page-shell" id="content">
      <section className="section project-detail-hero">
        <div className="container two-column">
          <div>
            <p className="eyebrow">
              {project.category} • {project.year}
            </p>
            <h1>{project.title}</h1>
            <p className="body-large">{project.summary.en}</p>
            <div className="badge-row">
              {project.technologies.map((tech) => (
                <span className="badge" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="hero-actions">
              <LinkStatus link={project.github} />
              <LinkStatus link={project.demo} />
            </div>
          </div>
          <ProjectVisual project={project} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container case-grid">
          <CaseBlock title="Problem" body={project.problem.en} />
          <CaseBlock title="My Role" body={project.role.en} />
          <CaseBlock title="Dataset / Source" body={project.dataset.en} />
          <CaseBlock title="AI / ML Approach" body={project.approach.en} />
          <CaseList title="Objectives" items={project.objectives.map((item) => item.en)} />
          <CaseList title="Main Features" items={project.features.map((item) => item.en)} />
          <CaseList title="Workflow" items={project.workflow.map((item) => item.en)} />
          <CaseBlock title="Results" body={project.results.en} />
          <CaseList title="Challenges" items={project.challenges.map((item) => item.en)} />
          <CaseList title="Solutions Implemented" items={project.solutions.map((item) => item.en)} />
          <CaseList title="Lessons Learned" items={project.lessons.map((item) => item.en)} />
          <CaseBlock title="Evidence Note" body={project.evidence.en} />
        </div>
      </section>
    </div>
  );
}

function CaseBlock({ title, body }: { title: string; body: string }) {
  return (
    <article className="compact-card">
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

function CaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="compact-card">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

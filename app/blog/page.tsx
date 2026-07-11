import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Insights",
  description: "Prepared blog topics for data science, machine learning, generative AI, RAG, and cybersecurity.",
};

const samplePosts = [
  {
    title: "How I would document a machine-learning project for recruiters",
    category: "Sample content",
    description:
      "A future article idea based on the car price prediction project: dataset context, preprocessing, metrics, limitations, and GitHub structure.",
  },
  {
    title: "Responsible ways to present cybersecurity learning projects",
    category: "Sample content",
    description:
      "A draft topic about showing defensive thinking, ethics, mitigation, and lab boundaries without publishing harmful operational steps.",
  },
  {
    title: "What to add before publishing a RAG case study",
    category: "Sample content",
    description:
      "A checklist for future RAG work: documents, chunking strategy, embeddings, vector store, evaluation, screenshots, and limitations.",
  },
];

export default function BlogPage() {
  return (
    <div className="page-shell" id="content">
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Insights"
            title="Prepared article ideas"
            description="Sample content only. Replace these drafts when real articles or project notes are ready."
          />
          <div className="project-grid">
            {samplePosts.map((post) => (
              <article className="compact-card" key={post.title}>
                <p className="eyebrow">{post.category}</p>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

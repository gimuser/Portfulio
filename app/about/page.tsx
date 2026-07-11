import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { education, profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "About Oualid Ait Alla, master's student in Data Science and Information Systems Security.",
};

export default function AboutPage() {
  return (
    <div className="page-shell" id="content">
      <section className="section">
        <div className="container narrow">
          <SectionHeading eyebrow="About" title="Oualid Ait Alla" description={profile.shortProfile.en} />
          <p className="body-large">
            I am studying at Sultan Moulay Slimane University in Morocco and building a practical portfolio at
            the intersection of data science, machine learning, artificial intelligence, Python development, data
            visualization thinking, and information systems security.
          </p>
          <p>
            My work is currently project-based and academic. The strongest verified items in this workspace are
            machine-learning, image-classification, cybersecurity, and web information-system projects from the
            previous CV. I am available for internships, research projects, collaboration, and suitable junior
            opportunities where I can keep learning while contributing carefully.
          </p>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Education" title="Verified academic record" />
          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-item" key={`${item.year}-${item.title.en}`}>
                <span>{item.year}</span>
                <div>
                  <h3>{item.title.en}</h3>
                  <p>{item.institution.en}</p>
                  <small>{item.details.en}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

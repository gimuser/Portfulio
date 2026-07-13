import { CareerIcon } from "@/components/career/career-icon";
import type { CareerTimelineItem } from "@/data/career-vision";

export function CareerTimeline({ items }: { items: CareerTimelineItem[] }) {
  return (
    <ol className="career-timeline" aria-label="Career timeline from 2026 to 2031">
      {items.map((item) => (
        <li className="career-timeline-item" key={item.period}>
          <article className="career-card">
            <div className="career-card-top">
              <span className="career-period">{item.period}</span>
              <span className="career-icon-box" role="img" aria-label={`${item.title} icon`}>
                <CareerIcon name={item.icon} />
              </span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="career-card-section">
              <strong>Objectives</strong>
              <ul>
                {item.objectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
            </div>
            {item.targetRoles ? (
              <div className="career-card-section">
                <strong>Target Roles</strong>
                <div className="career-chip-row">
                  {item.targetRoles.map((role) => (
                    <span key={role}>{role}</span>
                  ))}
                </div>
              </div>
            ) : null}
            {item.coreSkills ? (
              <div className="career-card-section">
                <strong>Core Skills</strong>
                <div className="career-chip-row">
                  {item.coreSkills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        </li>
      ))}
    </ol>
  );
}

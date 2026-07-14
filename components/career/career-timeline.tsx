import { CareerIcon } from "@/components/career/career-icon";
import { careerLabels, type CareerTimelineItem } from "@/data/career-vision";
import type { Language } from "@/types/content";
import { localize } from "@/utils/localize";

export function CareerTimeline({ items, language }: { items: CareerTimelineItem[]; language: Language }) {
  return (
    <ol className="career-timeline" aria-label={localize(careerLabels.timelineAria, language)}>
      {items.map((item) => (
        <li className="career-timeline-item" key={item.period}>
          <article className="career-card">
            <div className="career-card-top">
              <span className="career-period">{item.period}</span>
              <span
                className="career-icon-box"
                role="img"
                aria-label={`${localize(item.title, language)} ${localize(careerLabels.milestoneIcon, language)}`}
              >
                <CareerIcon name={item.icon} />
              </span>
            </div>
            <h3>{localize(item.title, language)}</h3>
            <p>{localize(item.description, language)}</p>
            <div className="career-card-section">
              <strong>{localize(careerLabels.objectiveTitle, language)}</strong>
              <ul>
                {item.objectives.map((objective) => (
                  <li key={objective.en}>{localize(objective, language)}</li>
                ))}
              </ul>
            </div>
            {item.targetRoles ? (
              <div className="career-card-section">
                <strong>{localize(careerLabels.targetRolesTitle, language)}</strong>
                <div className="career-chip-row">
                  {item.targetRoles.map((role) => (
                    <span key={role.en}>{localize(role, language)}</span>
                  ))}
                </div>
              </div>
            ) : null}
            {item.coreSkills ? (
              <div className="career-card-section">
                <strong>{localize(careerLabels.coreSkillsTitle, language)}</strong>
                <div className="career-chip-row">
                  {item.coreSkills.map((skill) => (
                    <span key={skill.en}>{localize(skill, language)}</span>
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

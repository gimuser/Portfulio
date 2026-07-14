import { CareerIcon } from "@/components/career/career-icon";
import { careerLabels, type CareerRoadmapLevel } from "@/data/career-vision";
import type { Language } from "@/types/content";
import { localize } from "@/utils/localize";

export function CareerRoadmap({ levels, language }: { levels: CareerRoadmapLevel[]; language: Language }) {
  return (
    <ol className="career-roadmap" aria-label={localize(careerLabels.connectedGrowthLevels, language)}>
      {levels.map((level) => (
        <li className="career-roadmap-item" key={level.title.en}>
          <div
            className="career-roadmap-node"
            role="img"
            aria-label={`${localize(level.title, language)} ${localize(careerLabels.milestoneIcon, language)}`}
          >
            <CareerIcon name={level.icon} />
          </div>
          <div>
            <h3>{localize(level.title, language)}</h3>
            <div className="career-chip-row">
              {level.skills.map((skill) => (
                <span key={skill.en}>{localize(skill, language)}</span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

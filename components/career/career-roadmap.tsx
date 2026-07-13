import { CareerIcon } from "@/components/career/career-icon";
import type { CareerRoadmapLevel } from "@/data/career-vision";

export function CareerRoadmap({ levels }: { levels: CareerRoadmapLevel[] }) {
  return (
    <ol className="career-roadmap" aria-label="Skills roadmap levels">
      {levels.map((level) => (
        <li className="career-roadmap-item" key={level.title}>
          <div className="career-roadmap-node" role="img" aria-label={`${level.title} milestone icon`}>
            <CareerIcon name={level.icon} />
          </div>
          <div>
            <h3>{level.title}</h3>
            <div className="career-chip-row">
              {level.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

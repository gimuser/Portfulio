import {
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Network,
  Rocket,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";
import type { CareerIconName } from "@/data/career-vision";

const iconMap = {
  agent: Bot,
  automation: Zap,
  briefcase: BriefcaseBusiness,
  chart: ChartNoAxesCombined,
  cloud: Cloud,
  code: Code2,
  database: Database,
  education: GraduationCap,
  growth: GitBranch,
  network: Network,
  rocket: Rocket,
  shield: ShieldCheck,
  target: Target,
} satisfies Record<CareerIconName, ComponentType<{ size?: number; strokeWidth?: number }>>;

export function CareerIcon({ name, size = 20 }: { name: CareerIconName; size?: number }) {
  const Icon = iconMap[name];

  return <Icon aria-hidden="true" size={size} strokeWidth={2.1} />;
}

export type Language = "en" | "fr";

export type LocalizedText = {
  en: string;
  fr: string;
};

export type LinkStatus = "available" | "missing";

export type ProfileLink = {
  label: string;
  href: string;
  status: LinkStatus;
};

export type SkillGroup = {
  title: LocalizedText;
  items: string[];
  evidence: LocalizedText;
};

export type EducationItem = {
  year: string;
  period?: LocalizedText;
  title: LocalizedText;
  institution: LocalizedText;
  details: LocalizedText;
  source: "CV" | "User-provided profile" | "Placeholder";
};

export type ExperienceItem = {
  year: string;
  period?: LocalizedText;
  duration?: LocalizedText;
  location?: LocalizedText;
  title: LocalizedText;
  context: LocalizedText;
  bullets: LocalizedText[];
};

export type ProjectCategory =
  | "RAG"
  | "Generative AI"
  | "Full Stack"
  | "Data Science"
  | "Machine Learning"
  | "Cybersecurity"
  | "Web Development";

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: ProjectCategory;
  status: LocalizedText;
  summary: LocalizedText;
  cvSummary?: LocalizedText;
  atsSummary?: LocalizedText;
  problem: LocalizedText;
  objectives: LocalizedText[];
  role: LocalizedText;
  technologies: string[];
  dataset: LocalizedText;
  workflow: LocalizedText[];
  features: LocalizedText[];
  approach: LocalizedText;
  results: LocalizedText;
  challenges: LocalizedText[];
  solutions: LocalizedText[];
  lessons: LocalizedText[];
  github: ProfileLink;
  demo: ProfileLink;
  evidence: LocalizedText;
  visualTone: "blue" | "green" | "violet" | "amber";
};

export type Certification = {
  name: string;
  organization: string;
  date: string;
  credentialUrl: string;
  skills: string[];
};

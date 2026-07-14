import type { LocalizedText } from "@/types/content";

export type CareerIconName =
  | "agent"
  | "automation"
  | "briefcase"
  | "chart"
  | "cloud"
  | "code"
  | "database"
  | "education"
  | "growth"
  | "network"
  | "rocket"
  | "shield"
  | "target";

export type CareerTimelineItem = {
  period: string;
  title: LocalizedText;
  icon: CareerIconName;
  description: LocalizedText;
  objectives: LocalizedText[];
  coreSkills?: LocalizedText[];
  targetRoles?: LocalizedText[];
};

export type CareerRoadmapLevel = {
  title: LocalizedText;
  icon: CareerIconName;
  skills: LocalizedText[];
};

export const careerIntro = {
  eyebrow: {
    en: "Career Vision: 2026-2031",
    fr: "Vision de carrière : 2026-2031",
  },
  title: {
    en: "My Career Vision",
    fr: "Ma vision de carrière",
  },
  subtitle: {
    en: "My professional roadmap from Master's student to AI/ML Engineer by 2031.",
    fr: "Ma feuille de route professionnelle, d'étudiant en master à ingénieur IA/ML d'ici 2031.",
  },
  introduction: {
    en: "I aim to transform my academic knowledge and personal projects into real professional experience in Artificial Intelligence, Data Science, Software Engineering, and Cybersecurity.",
    fr: "Je veux transformer mes connaissances académiques et mes projets personnels en expérience professionnelle concrète en intelligence artificielle, data science, génie logiciel et cybersécurité.",
  },
};

export const careerTimeline: CareerTimelineItem[] = [
  {
    period: "2026-2027",
    title: {
      en: "Build Strong Foundations",
      fr: "Construire des bases solides",
    },
    icon: "education",
    description: {
      en: "My first objective is to move from academic and personal projects to real professional environments where I can learn, contribute, and improve my engineering skills.",
      fr: "Mon premier objectif est de passer des projets académiques et personnels à des environnements professionnels réels où je peux apprendre, contribuer et améliorer mes compétences d'ingénierie.",
    },
    objectives: [
      {
        en: "Complete my Master's coursework successfully.",
        fr: "Réussir mon parcours de master.",
      },
      {
        en: "Secure an internship in AI, Data Science, Generative AI, Data Engineering, or Cybersecurity.",
        fr: "Obtenir un stage en IA, data science, IA générative, data engineering ou cybersécurité.",
      },
      {
        en: "Improve my professional experience through real projects.",
        fr: "Renforcer mon expérience professionnelle à travers des projets réels.",
      },
      {
        en: "Strengthen my portfolio and GitHub profile.",
        fr: "Améliorer mon portfolio et mon profil GitHub.",
      },
      {
        en: "Improve my communication in English and French.",
        fr: "Améliorer ma communication en anglais et en français.",
      },
    ],
    coreSkills: [
      { en: "Python", fr: "Python" },
      { en: "SQL", fr: "SQL" },
      { en: "Git", fr: "Git" },
      { en: "Machine Learning", fr: "Machine learning" },
      { en: "Data Analysis", fr: "Analyse de données" },
      { en: "Power BI", fr: "Power BI" },
      { en: "APIs", fr: "APIs" },
      { en: "FastAPI", fr: "FastAPI" },
      { en: "Docker", fr: "Docker" },
      { en: "Cybersecurity Fundamentals", fr: "Fondamentaux de cybersécurité" },
    ],
  },
  {
    period: "2027-2028",
    title: {
      en: "Start My Professional Career",
      fr: "Démarrer ma carrière professionnelle",
    },
    icon: "briefcase",
    description: {
      en: "At this stage, I want to obtain my first full-time professional role and contribute to real-world AI and data products.",
      fr: "À cette étape, je souhaite obtenir mon premier poste professionnel à temps plein et contribuer à des produits IA et data réels.",
    },
    objectives: [
      {
        en: "Join a professional AI, data, or software engineering team.",
        fr: "Rejoindre une équipe professionnelle en IA, data ou génie logiciel.",
      },
      {
        en: "Contribute to production projects.",
        fr: "Contribuer à des projets en production.",
      },
      {
        en: "Build and deploy complete AI applications.",
        fr: "Développer et déployer des applications IA complètes.",
      },
      {
        en: "Gain experience with databases, cloud platforms, testing, and CI/CD.",
        fr: "Acquérir de l'expérience avec les bases de données, le cloud, les tests et le CI/CD.",
      },
      {
        en: "Learn how professional teams design and maintain software.",
        fr: "Comprendre comment les équipes professionnelles conçoivent et maintiennent les logiciels.",
      },
    ],
    targetRoles: [
      { en: "Junior AI/ML Engineer", fr: "Ingénieur IA/ML junior" },
      { en: "Generative AI Developer", fr: "Développeur IA générative" },
      { en: "Junior Data Scientist", fr: "Data Scientist junior" },
      { en: "Python Backend Developer", fr: "Développeur backend Python" },
      { en: "AI Automation Engineer", fr: "Ingénieur en automatisation IA" },
      { en: "Junior Data Engineer", fr: "Data Engineer junior" },
      { en: "Cybersecurity Data Analyst", fr: "Analyste data en cybersécurité" },
    ],
  },
  {
    period: "2028-2029",
    title: {
      en: "Become an Independent AI Engineer",
      fr: "Devenir un ingénieur IA autonome",
    },
    icon: "rocket",
    description: {
      en: "My goal is to become capable of designing, developing, deploying, and maintaining reliable AI applications from end to end.",
      fr: "Mon objectif est de devenir capable de concevoir, développer, déployer et maintenir des applications IA fiables de bout en bout.",
    },
    objectives: [
      {
        en: "Design complete AI solutions with less supervision.",
        fr: "Concevoir des solutions IA complètes avec moins de supervision.",
      },
      {
        en: "Build RAG systems, AI agents, predictive models, and automation tools.",
        fr: "Créer des systèmes RAG, agents IA, modèles prédictifs et outils d'automatisation.",
      },
      {
        en: "Deploy AI services using cloud platforms and containers.",
        fr: "Déployer des services IA avec des plateformes cloud et des conteneurs.",
      },
      {
        en: "Improve system monitoring, testing, security, and performance.",
        fr: "Améliorer le monitoring, les tests, la sécurité et la performance des systèmes.",
      },
      {
        en: "Contribute to technical decisions and architecture discussions.",
        fr: "Participer aux décisions techniques et aux discussions d'architecture.",
      },
    ],
    coreSkills: [
      { en: "LLMs", fr: "LLMs" },
      { en: "RAG", fr: "RAG" },
      { en: "Vector databases", fr: "Bases de données vectorielles" },
      { en: "LangChain or LangGraph", fr: "LangChain ou LangGraph" },
      { en: "FastAPI", fr: "FastAPI" },
      { en: "Docker", fr: "Docker" },
      { en: "Cloud services", fr: "Services cloud" },
      { en: "CI/CD", fr: "CI/CD" },
      { en: "MLOps", fr: "MLOps" },
      { en: "Monitoring", fr: "Monitoring" },
      { en: "Software testing", fr: "Tests logiciels" },
    ],
  },
  {
    period: "2029-2031",
    title: {
      en: "Advance to AI/ML Engineer",
      fr: "Évoluer vers ingénieur IA/ML",
    },
    icon: "target",
    description: {
      en: "By 2031, I aim to be an experienced AI/ML Engineer capable of building secure, scalable, and production-ready intelligent systems.",
      fr: "D'ici 2031, je vise un profil d'ingénieur IA/ML expérimenté, capable de construire des systèmes intelligents sécurisés, scalables et prêts pour la production.",
    },
    objectives: [
      {
        en: "Lead small technical features or AI projects.",
        fr: "Piloter de petites fonctionnalités techniques ou des projets IA.",
      },
      {
        en: "Design scalable and secure AI systems.",
        fr: "Concevoir des systèmes IA scalables et sécurisés.",
      },
      {
        en: "Mentor interns or junior developers.",
        fr: "Accompagner des stagiaires ou développeurs juniors.",
      },
      {
        en: "Work with production data and real business requirements.",
        fr: "Travailler avec des données de production et de vrais besoins métier.",
      },
      {
        en: "Develop a clear specialization in Generative AI, RAG, AI automation, or AI security.",
        fr: "Développer une spécialisation claire en IA générative, RAG, automatisation IA ou sécurité IA.",
      },
      {
        en: "Prepare for future senior engineering or architecture responsibilities.",
        fr: "Me préparer à de futures responsabilités senior en ingénierie ou architecture.",
      },
    ],
    targetRoles: [
      { en: "AI/ML Engineer", fr: "Ingénieur IA/ML" },
      { en: "Generative AI Engineer", fr: "Ingénieur IA générative" },
      { en: "Applied AI Engineer", fr: "Ingénieur IA appliquée" },
      { en: "MLOps Engineer", fr: "Ingénieur MLOps" },
      { en: "AI Solutions Engineer", fr: "Ingénieur solutions IA" },
      { en: "AI and Cybersecurity Engineer", fr: "Ingénieur IA et cybersécurité" },
    ],
  },
];

export const targetIdentity = {
  title: {
    en: "Target by 2031",
    fr: "Cible pour 2031",
  },
  description: {
    en: "AI/ML Engineer specializing in Generative AI, RAG systems, intelligent automation, and secure AI applications.",
    fr: "Ingénieur IA/ML spécialisé en IA générative, systèmes RAG, automatisation intelligente et applications IA sécurisées.",
  },
  directionTitle: {
    en: "Long-Term Direction",
    fr: "Orientation à long terme",
  },
  direction: {
    en: "Progress toward AI Solutions Architecture, technical leadership, and entrepreneurship after gaining strong professional experience.",
    fr: "Évoluer vers l'architecture de solutions IA, le leadership technique et l'entrepreneuriat après avoir acquis une solide expérience professionnelle.",
  },
};

export const skillsRoadmap: CareerRoadmapLevel[] = [
  {
    title: { en: "Foundation", fr: "Bases" },
    icon: "database",
    skills: [
      { en: "Python", fr: "Python" },
      { en: "SQL", fr: "SQL" },
      { en: "Git", fr: "Git" },
      { en: "Data Analysis", fr: "Analyse de données" },
      { en: "Machine Learning", fr: "Machine learning" },
    ],
  },
  {
    title: { en: "Application Development", fr: "Développement d'applications" },
    icon: "code",
    skills: [
      { en: "FastAPI", fr: "FastAPI" },
      { en: "APIs", fr: "APIs" },
      { en: "Databases", fr: "Bases de données" },
      { en: "Authentication", fr: "Authentification" },
      { en: "Testing", fr: "Tests" },
      { en: "Docker", fr: "Docker" },
    ],
  },
  {
    title: { en: "AI Engineering", fr: "Ingénierie IA" },
    icon: "agent",
    skills: [
      { en: "LLMs", fr: "LLMs" },
      { en: "RAG", fr: "RAG" },
      { en: "AI agents", fr: "Agents IA" },
      { en: "Vector databases", fr: "Bases vectorielles" },
      { en: "Cloud deployment", fr: "Déploiement cloud" },
      { en: "MLOps", fr: "MLOps" },
    ],
  },
  {
    title: { en: "Professional Growth", fr: "Progression professionnelle" },
    icon: "growth",
    skills: [
      { en: "System design", fr: "Conception système" },
      { en: "AI security", fr: "Sécurité IA" },
      { en: "Teamwork", fr: "Travail en équipe" },
      { en: "Communication", fr: "Communication" },
      { en: "Mentoring", fr: "Mentorat" },
      { en: "Technical leadership", fr: "Leadership technique" },
    ],
  },
];

export const impactAreas: LocalizedText[] = [
  { en: "Generative AI", fr: "IA générative" },
  { en: "AI Agents and Automation", fr: "Agents IA et automatisation" },
  { en: "Secure AI Systems", fr: "Systèmes IA sécurisés" },
  { en: "Data Science", fr: "Data science" },
  { en: "Cybersecurity", fr: "Cybersécurité" },
  { en: "Education Technology", fr: "Technologies éducatives" },
  { en: "Business Intelligence", fr: "Business intelligence" },
  {
    en: "Multilingual AI for Arabic, French, and English users",
    fr: "IA multilingue pour utilisateurs arabophones, francophones et anglophones",
  },
];

export const careerCallToAction = {
  title: {
    en: "Open to Opportunities",
    fr: "Ouvert aux opportunités",
  },
  description: {
    en: "I am currently looking for internships, junior positions, research opportunities, and collaborations in Artificial Intelligence, Data Science, Generative AI, Software Engineering, and Cybersecurity.",
    fr: "Je recherche actuellement des stages, des postes junior, des opportunités de recherche et des collaborations en intelligence artificielle, data science, IA générative, génie logiciel et cybersécurité.",
  },
};

export const careerLabels = {
  timelineAria: {
    en: "Career timeline from 2026 to 2031",
    fr: "Chronologie de carrière de 2026 à 2031",
  },
  targetIconAria: {
    en: "Target career identity icon",
    fr: "Icône de l'objectif professionnel",
  },
  skillsRoadmapIconAria: {
    en: "Skills roadmap icon",
    fr: "Icône de la feuille de route des compétences",
  },
  impactAreasIconAria: {
    en: "Impact areas icon",
    fr: "Icône des domaines d'impact",
  },
  milestoneIcon: {
    en: "milestone icon",
    fr: "icône d'étape",
  },
  objectiveTitle: {
    en: "Objectives",
    fr: "Objectifs",
  },
  targetRolesTitle: {
    en: "Target Roles",
    fr: "Rôles visés",
  },
  coreSkillsTitle: {
    en: "Core Skills",
    fr: "Compétences clés",
  },
  skillsRoadmapTitle: {
    en: "Skills Roadmap",
    fr: "Feuille de route des compétences",
  },
  connectedGrowthLevels: {
    en: "Connected growth levels",
    fr: "Niveaux de progression connectés",
  },
  fieldsTitle: {
    en: "Fields I Want to Work In",
    fr: "Domaines dans lesquels je veux travailler",
  },
  impactAreasTitle: {
    en: "Impact areas",
    fr: "Domaines d'impact",
  },
  ctaActionsAria: {
    en: "Career vision actions",
    fr: "Actions de la vision de carrière",
  },
  viewProjects: {
    en: "View My Projects",
    fr: "Voir mes projets",
  },
  downloadCv: {
    en: "Download My CV",
    fr: "Télécharger mon CV",
  },
  contactMe: {
    en: "Contact Me",
    fr: "Me contacter",
  },
  visitGithub: {
    en: "Visit My GitHub",
    fr: "Voir mon GitHub",
  },
  connectLinkedin: {
    en: "Connect on LinkedIn",
    fr: "Me contacter sur LinkedIn",
  },
};

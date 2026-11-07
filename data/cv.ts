import type { LocalizedText } from "@/types/content";

export type CvEducation = {
  year: string;
  period: LocalizedText;
  title: LocalizedText;
  institution: LocalizedText;
  details: LocalizedText;
};

export type CvSkillGroup = {
  title: LocalizedText;
  items: LocalizedText;
};

export type CvExperience = {
  year: string;
  period: LocalizedText;
  title: LocalizedText;
  organization?: string;
  location?: LocalizedText;
  duration?: LocalizedText;
  bullets: LocalizedText[];
};

export type CvProject = {
  slug: string;
  title: LocalizedText;
  year: string;
  summary: LocalizedText;
  technologies: string[];
  github?: string;
};

const masterInstitution: LocalizedText = {
  en: "Sultan Moulay Slimane University, Polydisciplinary Faculty of Beni Mellal",
  fr: "Université Sultan Moulay Slimane, Faculté Polydisciplinaire de Béni Mellal",
};

const deugInstitution = masterInstitution;

export const cvEducation: CvEducation[] = [
  {
    year: "2027",
    period: { en: "Sep 2025 – Jul 2027 (expected)", fr: "Sept. 2025 – juil. 2027 (prévu)" },
    title: {
      en: "Master’s Degree in Data Science and Information Systems Security (in progress)",
      fr: "Master en Data Science et Sécurité des Systèmes d’Information (en cours)",
    },
    institution: masterInstitution,
    details: {
      en: "Year 1 average 14.54/20 (Semester 1: 15.66/20). Grades: Advanced ML 17.35/20; UML & Design Patterns 18/20; IoT Communication Technologies 16.65/20; Advanced Python 16.01/20; NoSQL 15.62/20. Coursework: Deep Learning, Reinforcement Learning, Advanced Data Analysis, Web Application Security.",
      fr: "Moyenne de 1re année : 14,54/20 (S1 : 15,66/20). Notes : ML avancé 17,35/20 ; UML & Design Patterns 18/20 ; Technologies de communication IoT 16,65/20 ; Python avancé 16,01/20 ; NoSQL 15,62/20. Cours : Deep Learning, Reinforcement Learning, analyse avancée des données, sécurité des applications web.",
    },
  },
  {
    year: "2025",
    period: { en: "2022 – 2025", fr: "2022 – 2025" },
    title: {
      en: "Bachelor’s Degree in Data Science and Information Systems Security",
      fr: "Licence en Data Science et Sécurité des Systèmes d’Information",
    },
    institution: masterInstitution,
    details: {
      en: "Coursework: Cryptography, Networks and Security, Machine Learning.",
      fr: "Cours : cryptographie, réseaux et sécurité, machine learning.",
    },
  },
  {
    year: "2024",
    period: { en: "2022 – 2024", fr: "2022 – 2024" },
    title: {
      en: "DEUG in Mathematics and Computer Science",
      fr: "DEUG en Mathématiques et Informatique",
    },
    institution: deugInstitution,
    details: {
      en: "Programming I 16.5/20, Operating Systems I 15.5/20.",
      fr: "Programmation I 16,5/20, Systèmes d’exploitation I 15,5/20.",
    },
  },
];

export const cvSkills: CvSkillGroup[] = [
  {
    title: { en: "AI and Machine Learning", fr: "IA et Machine Learning" },
    items: {
      en: "TensorFlow, PyTorch, reinforcement learning",
      fr: "TensorFlow, PyTorch, apprentissage par renforcement",
    },
  },
  {
    title: { en: "Generative AI and Document Processing", fr: "IA générative et traitement documentaire" },
    items: {
      en: "RAG, LLM, OCR, vector indexing, document parsing, structured-output validation, constrained generation, quantization",
      fr: "RAG, LLM, OCR, indexation vectorielle, analyse documentaire, validation des sorties structurées, génération contrainte, quantification",
    },
  },
  {
    title: { en: "Software Engineering", fr: "Génie logiciel" },
    items: {
      en: "Python, TypeScript, FastAPI, React, Docker",
      fr: "Python, TypeScript, FastAPI, React, Docker",
    },
  },
  {
    title: { en: "Data and Databases", fr: "Données et bases de données" },
    items: {
      en: "SQL/NoSQL, MongoDB, SPSS, Power BI",
      fr: "SQL/NoSQL, MongoDB, SPSS, Power BI",
    },
  },
  {
    title: { en: "Cybersecurity", fr: "Cybersécurité" },
    items: {
      en: "Cryptography, network security, firewalls, IDS/IPS, Burp Suite, Kali Linux, Metasploit",
      fr: "Cryptographie, sécurité réseau, pare-feu, IDS/IPS, Burp Suite, Kali Linux, Metasploit",
    },
  },
];

export const cvProfessionalExperience: CvExperience[] = [
  {
    year: "2026",
    period: { en: "14 August 2026 – 14 October 2026", fr: "14 août 2026 – 14 octobre 2026" },
    title: { en: "AI Engineering Intern", fr: "Stagiaire ingénieur en intelligence artificielle" },
    organization: "SPORTScore SAS",
    location: { en: "Paris, France", fr: "Paris, France" },
    duration: { en: "2 months", fr: "2 mois" },
    bullets: [
      {
        en: "Built a document-retrieval workflow combining OCR, parsing and indexing.",
        fr: "Création d’un workflow de recherche documentaire combinant OCR, parsing et indexation.",
      },
      {
        en: "Validated structured outputs with JSON schema and constrained generation.",
        fr: "Validation des sorties structurées avec JSON schema et génération contrainte.",
      },
      {
        en: "Applied quantization for efficient LLM inference.",
        fr: "Application de la quantification pour une inférence LLM efficace.",
      },
      {
        en: "Tested pipeline outputs and independently evaluated results within the AI team.",
        fr: "Test et évaluation autonome des résultats du pipeline au sein de l’équipe IA.",
      },
    ],
  },
];

export const cvAcademicProject: CvExperience = {
  year: "2024",
  period: { en: "March 2024 – May 2024", fr: "Mars 2024 – mai 2024" },
  title: { en: "Android Device Security Testing", fr: "Tests de sécurité d’un appareil Android" },
  location: { en: "Beni Mellal, Morocco", fr: "Béni Mellal, Maroc" },
  duration: { en: "3 months", fr: "3 mois" },
  bullets: [
    {
      en: "Tested Android device security with Kali Linux and Metasploit in an ethical lab; documented defensive findings.",
      fr: "Tests de sécurité Android avec Kali Linux et Metasploit en laboratoire éthique ; documentation des constats défensifs.",
    },
  ],
};

export const cvProjects: CvProject[] = [
  {
    slug: "soar-rl-agent",
    title: { en: "SOAR RL Agent", fr: "Agent RL pour SOAR" },
    year: "2026",
    summary: {
      en: "Collaborative RL agent for security-alert triage and human-in-the-loop SOC workflows.",
      fr: "Agent RL collaboratif pour le triage des alertes et les workflows SOC avec intervention humaine.",
    },
    technologies: ["Python", "FastAPI", "RL", "SOAR", "Docker"],
  },
  {
    slug: "bachelor-ai-tutor",
    title: { en: "BachelorAI Tutor", fr: "BachelorAI Tutor" },
    year: "2026",
    summary: {
      en: "RAG tutor that retrieves course material by semester and module and generates source-grounded answers.",
      fr: "Tuteur RAG qui retrouve les cours par semestre et module et génère des réponses fondées sur les sources.",
    },
    technologies: ["Python", "LLM", "RAG", "Ollama", "React", "MongoDB"],
  },
  {
    slug: "islamic-ai-chat",
    title: { en: "Islamic AI Chat", fr: "Islamic AI Chat" },
    year: "2026",
    summary: {
      en: "Full-stack AI chat with authentication, conversation history, configurable providers and prompt-injection checks.",
      fr: "Chat IA full-stack avec authentification, historique, fournisseurs configurables et contrôles d’injection de prompt.",
    },
    technologies: ["TypeScript", "React", "Node.js", "MongoDB", "OpenAI", "OpenRouter", "Ollama", "JWT"],
  },
  {
    slug: "car-price-prediction-system",
    title: { en: "Car Price Prediction System", fr: "Système de prédiction des prix des voitures" },
    year: "2025",
    summary: {
      en: "Python regression workflow for car-price estimation, from data cleaning and feature engineering to evaluation.",
      fr: "Workflow de régression Python pour estimer les prix, du nettoyage des données au feature engineering et à l’évaluation.",
    },
    technologies: ["Python", "Pandas", "Regression"],
  },
];

export const cvLanguages: { name: LocalizedText; level: LocalizedText }[] = [
  { name: { en: "Arabic", fr: "Arabe" }, level: { en: "Native", fr: "langue maternelle" } },
  { name: { en: "English", fr: "Anglais" }, level: { en: "Intermediate", fr: "intermédiaire" } },
  { name: { en: "French", fr: "Français" }, level: { en: "B2", fr: "B2" } },
  { name: { en: "Spanish", fr: "Espagnol" }, level: { en: "Beginner", fr: "débutant" } },
];

export const atsProfessionalSummary: LocalizedText = {
  en: "Master’s student in Data Science and Information Systems Security, focused on AI engineering, machine learning, generative AI and cybersecurity. Project experience in LLM/RAG and document-processing workflows.",
  fr: "Étudiant en Master Data Science et Sécurité des Systèmes d’Information, spécialisé en ingénierie IA, machine learning, IA générative et cybersécurité. Expérience de projets en LLM/RAG et traitement documentaire.",
};

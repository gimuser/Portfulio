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
    period: { en: "Sep 2025 – Jul 2027 (expected)", fr: "Sept. 2025 – Juil. 2027 (prévu)" },
    title: {
      en: "Master’s Degree in Data Science and Information Systems Security (in progress)",
      fr: "Master en Data Science et Sécurité des Systèmes d’Information (en cours)",
    },
    institution: masterInstitution,
    details: {
      en: "Year 1 average: 14.54/20 (Semester 1: 15.66/20).\nGrades: Advanced ML 17.35/20; UML & Design Patterns 18/20; IoT Communication Technologies 16.65/20; Advanced Python 16.01/20; NoSQL 15.62/20.\nCoursework: Deep Learning, Reinforcement Learning, Advanced Data Analysis, Web Application Security.",
      fr: "Moyenne de 1re année : 14,54/20 (S1 : 15,66/20).\nNotes : ML avancé 17,35/20 ; UML & Design Patterns 18/20 ; Technologies de communication IoT 16,65/20 ; Python avancé 16,01/20 ; NoSQL 15,62/20.\nCours : Deep Learning, Reinforcement Learning, analyse avancée des données, sécurité des applications web.",
    },
  },
  {
    year: "2025",
    period: { en: "2025", fr: "2025" },
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
    period: { en: "2024", fr: "2024" },
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
      en: "Machine learning, deep learning, neural networks, model evaluation, feature engineering, optimization, exploratory data analysis (EDA), TensorFlow, PyTorch, reinforcement learning (DQN, DDQN)",
      fr: "Machine learning, deep learning, réseaux de neurones, évaluation de modèles, feature engineering, optimisation, analyse exploratoire (EDA), TensorFlow, PyTorch, apprentissage par renforcement (DQN, DDQN)",
    },
  },
  {
    title: { en: "Generative AI and Document Processing", fr: "IA générative et traitement documentaire" },
    items: {
      en: "Prompt engineering, embeddings, LLM integration, RAG, Ollama, OpenAI API, OCR, vector indexing, document parsing, JSON Schema, structured-output validation, quantization",
      fr: "Prompt engineering, embeddings, intégration de LLM, RAG, Ollama, API OpenAI, OCR, indexation vectorielle, analyse documentaire, JSON Schema, validation des sorties structurées, quantification",
    },
  },
  {
    title: { en: "Software Engineering", fr: "Génie logiciel" },
    items: {
      en: "Python, TypeScript, Node.js, Express, FastAPI, React, Prisma, JWT, C, Docker, Docker Compose",
      fr: "Python, TypeScript, Node.js, Express, FastAPI, React, Prisma, JWT, C, Docker, Docker Compose",
    },
  },
  {
    title: { en: "Data and Databases", fr: "Données et bases de données" },
    items: {
      en: "SQL/NoSQL, MongoDB, Pandas, data visualization, Power BI, SPSS, Excel",
      fr: "SQL/NoSQL, MongoDB, Pandas, visualisation de données, Power BI, SPSS, Excel",
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
    period: { en: "Aug 2026 – Oct 2026", fr: "Août 2026 – Oct. 2026" },
    title: { en: "AI Engineering Intern", fr: "Stagiaire ingénieur en intelligence artificielle" },
    organization: "SPORTScore SAS",
    location: { en: "Paris, France", fr: "Paris, France" },
    
    bullets: [
      {
        en: "Contributed to a document-retrieval workflow combining OCR, parsing and vector indexing.",
        fr: "Contribution à un workflow de recherche documentaire combinant OCR, parsing et indexation vectorielle.",
      },
      {
        en: "Implemented structured-output validation using JSON Schema and constrained generation.",
        fr: "Mise en œuvre de la validation des sorties structurées avec JSON Schema et génération contrainte.",
      },
      {
        en: "Applied model quantization to improve LLM inference efficiency.",
        fr: "Application de la quantification des modèles pour améliorer l’efficacité de l’inférence LLM.",
      },
      {
        en: "Evaluated pipeline outputs and documented results with the AI team.",
        fr: "Évaluation des sorties du pipeline et documentation des résultats avec l’équipe IA.",
      },
    ],
  },
];

export const cvAcademicProject: CvExperience = {
  year: "2024",
  period: { en: "Mar 2024 – May 2024", fr: "Mars 2024 – Mai 2024" },
  title: { en: "Android Device Security Testing", fr: "Tests de sécurité d’un appareil Android" },
  location: { en: "Beni Mellal, Morocco", fr: "Béni Mellal, Maroc" },
  
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
      en: "Collaborative reinforcement-learning project for security-alert triage in a simulated SOC: FastAPI backend, RL environment, reward system, DQN and DDQN agents, automated tests.",
      fr: "Projet collaboratif d’apprentissage par renforcement pour le triage des alertes dans un SOC simulé : backend FastAPI, environnement RL, système de récompenses, agents DQN et DDQN, tests automatisés.",
    },
    technologies: ["Python", "FastAPI", "Reinforcement Learning", "DQN", "DDQN", "SOAR", "Docker Compose"],
    github: "https://github.com/gimuser/RL_Agent",
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
    github: "https://github.com/gimuser/repos-islamic_ai_chat",
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
  { name: { en: "English", fr: "Anglais" }, level: { en: "B2", fr: "B2" } },
  { name: { en: "French", fr: "Français" }, level: { en: "B2", fr: "B2" } },
  { name: { en: "Spanish", fr: "Espagnol" }, level: { en: "Beginner", fr: "Débutant" } },
];

export const atsProfessionalSummary: LocalizedText = {
  en: "AI Engineering Intern at SPORTScore SAS with experience in machine learning, generative AI and document-processing workflows. Seeking an internship in AI/ML, data science, software engineering or AI for cybersecurity.",
  fr: "Stagiaire en ingénierie IA chez SPORTScore SAS, avec une expérience en machine learning, IA générative et traitement documentaire. Recherche un stage en IA/ML, data science, génie logiciel ou IA appliquée à la cybersécurité.",
};

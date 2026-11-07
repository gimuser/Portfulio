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

const university: LocalizedText = {
  en: "Sultan Moulay Slimane University, Polydisciplinary Faculty of Beni Mellal",
  fr: "Université Sultan Moulay Slimane, Faculté Polydisciplinaire de Béni Mellal",
};

export const cvSubline: LocalizedText = {
  en: "Seeking an internship: AI Engineering • Machine Learning • Data Science • AI for Cybersecurity",
  fr: "À la recherche d'un stage : Ingénierie IA • Machine Learning • Data Science • IA pour la cybersécurité",
};

export const atsProfessionalSummary: LocalizedText = {
  en: "Master's student in Data Science and Information Systems Security. Completed a two-month AI engineering internship at SPORTScore SAS (Aug–Oct 2026), working on document processing with LLMs. Looking for an internship in AI/ML, data science, software engineering or AI for cybersecurity.",
  fr: "Étudiant en Master Data Science et Sécurité des Systèmes d'Information. A effectué un stage de deux mois en ingénierie IA chez SPORTScore SAS (août–oct. 2026), sur le traitement de documents avec des LLM. Recherche un stage en IA/ML, data science, génie logiciel ou IA pour la cybersécurité.",
};

export const cvEducation: CvEducation[] = [
  {
    year: "2027",
    period: { en: "Sep 2025 – Jul 2027 (expected)", fr: "sept. 2025 – juil. 2027 (prévu)" },
    title: {
      en: "Master's in Data Science and Information Systems Security (Excellence track)",
      fr: "Master Data Science et Sécurité des Systèmes d'Information (parcours d'excellence)",
    },
    institution: university,
    details: {
      en: "Year 1 average: 14.54/20. Grades: Advanced Machine Learning 17.35, UML & Design Patterns 18, IoT Communication Technologies 16.65, Advanced Python 16.01, NoSQL Databases 15.62 (out of 20).\nCoursework: Deep Learning, Reinforcement Learning, Advanced Data Analysis, Web Application Security.",
      fr: "Moyenne de 1re année : 14,54/20. Notes : Machine Learning avancé 17,35 ; UML & Design Patterns 18 ; Technologies de communication IoT 16,65 ; Python avancé 16,01 ; Bases de données NoSQL 15,62 (sur 20).\nCours : Deep Learning, Apprentissage par renforcement, Analyse de données avancée, Sécurité des applications web.",
    },
  },
  {
    year: "2025",
    period: { en: "2025", fr: "2025" },
    title: {
      en: "Bachelor's in Data Science and Information Systems Security",
      fr: "Licence Data Science et Sécurité des Systèmes d'Information",
    },
    institution: university,
    details: {
      en: "Coursework: Cryptography, Networks and Security, Machine Learning.",
      fr: "Cours : Cryptographie, Réseaux et sécurité, Machine Learning.",
    },
  },
  {
    year: "2024",
    period: { en: "2024", fr: "2024" },
    title: {
      en: "DEUG in Mathematics and Computer Science",
      fr: "DEUG Mathématiques et Informatique",
    },
    institution: university,
    details: {
      en: "Programming I 16.5/20, Operating Systems I 15.5/20.",
      fr: "Programmation I 16,5/20, Systèmes d'exploitation I 15,5/20.",
    },
  },
];

export const cvSkills: CvSkillGroup[] = [
  {
    title: { en: "Generative AI and LLM", fr: "IA générative et LLM" },
    items: {
      en: "RAG, LLM integration, prompt engineering, embeddings, vector indexing, OCR, document parsing, structured-output validation (JSON Schema), constrained generation, quantization, Ollama, OpenAI API",
      fr: "RAG, intégration de LLM, prompt engineering, embeddings, indexation vectorielle, OCR, analyse de documents, validation des sorties structurées (JSON Schema), génération contrainte, quantification, Ollama, API OpenAI",
    },
  },
  {
    title: { en: "Machine Learning and Deep Learning", fr: "Machine Learning et Deep Learning" },
    items: {
      en: "machine learning, deep learning, neural networks, reinforcement learning (DQN, DDQN), optimization, model evaluation, feature engineering, TensorFlow, PyTorch",
      fr: "machine learning, deep learning, réseaux de neurones, apprentissage par renforcement (DQN, DDQN), optimisation, évaluation de modèles, feature engineering, TensorFlow, PyTorch",
    },
  },
  {
    title: { en: "Data Science and BI", fr: "Data Science et BI" },
    items: {
      en: "Pandas, EDA, data visualization, Power BI, SPSS",
      fr: "Pandas, EDA, visualisation de données, Power BI, SPSS",
    },
  },
  {
    title: { en: "Databases", fr: "Bases de données" },
    items: {
      en: "SQL, NoSQL, MongoDB, Mongoose",
      fr: "SQL, NoSQL, MongoDB, Mongoose, SQLite, Prisma",
    },
  },
  {
    title: { en: "Software Engineering", fr: "Génie logiciel" },
    items: {
      en: "Python, TypeScript, JavaScript, C, FastAPI, Node.js, Express, React, Docker",
      fr: "Python, TypeScript, JavaScript, C, FastAPI, Node.js, Express, React, Docker",
    },
  },
  {
    title: { en: "Cybersecurity", fr: "Cybersécurité" },
    items: {
      en: "cryptography, network security, web application security, firewalls, IDS/IPS, Burp Suite, Kali Linux, Metasploit, attack techniques (lab), JWT, input validation, rate limiting",
      fr: "cryptographie, sécurité réseau, sécurité des applications web, pare-feu, IDS/IPS, Burp Suite, Kali Linux, Metasploit, techniques d'attaque (laboratoire), JWT, validation des entrées, limitation de débit",
    },
  },
];

export const cvProfessionalExperience: CvExperience[] = [
  {
    year: "2026",
    period: { en: "Aug 2026 – Oct 2026", fr: "août 2026 – oct. 2026" },
    title: { en: "AI Engineering Intern", fr: "Stagiaire ingénieur en intelligence artificielle" },
    organization: "SPORTScore SAS",
    location: { en: "Paris, France", fr: "Paris, France" },
    bullets: [
      {
        en: "Contributed to a document-processing workflow using OCR, parsing and indexing with LLMs.",
        fr: "Contribution à un workflow de traitement de documents utilisant l'OCR, l'analyse et l'indexation avec des LLM.",
      },
      {
        en: "Implemented structured-output validation (JSON Schema) and constrained generation.",
        fr: "Mise en place de la validation des sorties structurées (JSON Schema) et de la génération contrainte.",
      },
      {
        en: "Applied model quantization to run language models efficiently.",
        fr: "Application de la quantification pour exécuter efficacement des modèles de langage.",
      },
      {
        en: "Tested and evaluated the pipeline outputs.",
        fr: "Test et évaluation des sorties du pipeline.",
      },
    ],
  },
];

export const cvAcademicProject: CvExperience = {
  year: "2024",
  period: { en: "Mar 2024 – May 2024", fr: "mars 2024 – mai 2024" },
  title: { en: "Android Security Testing", fr: "Tests de sécurité Android" },
  location: { en: "Beni Mellal, Morocco", fr: "Béni Mellal, Maroc" },
  bullets: [
    {
      en: "Tested Android security with Kali Linux and Metasploit in a lab, and documented ways to fix the issues.",
      fr: "Tests de sécurité Android avec Kali Linux et Metasploit en laboratoire, et documentation de pistes pour corriger les failles.",
    },
  ],
};

export const cvProjects: CvProject[] = [
  {
    slug: "soar-rl-agent",
    title: { en: "SOAR RL Agent", fr: "SOAR RL Agent" },
    year: "2026",
    summary: {
      en: "Team project: a reinforcement-learning agent (DQN, DDQN) that triages security alerts in a simulated SOC, with a FastAPI backend, RL environment, reward system and automated tests.",
      fr: "Projet d'équipe : agent d'apprentissage par renforcement (DQN, DDQN) qui trie les alertes de sécurité dans un SOC simulé, avec backend FastAPI, environnement RL, système de récompenses et tests automatisés.",
    },
    technologies: ["Python", "FastAPI", "Reinforcement Learning", "DQN", "DDQN", "SOAR", "Docker Compose"],
    github: "https://github.com/gimuser/RL_Agent",
  },
  {
    slug: "bachelor-ai-tutor",
    title: { en: "BachelorAI Tutor", fr: "BachelorAI Tutor" },
    year: "2026",
    summary: {
      en: "RAG assistant that finds course material by semester and module and answers with sources.",
      fr: "Assistant RAG qui retrouve les cours par semestre et module et répond en citant ses sources.",
    },
    technologies: ["Python", "TypeScript", "React", "Node.js", "Express", "MongoDB", "Mongoose", "Ollama", "RAG", "Embeddings", "Docker"],
  },
  {
    slug: "islamic-ai-chat",
    title: { en: "Islamic AI Chat", fr: "Islamic AI Chat" },
    year: "2026",
    summary: {
      en: "Full-stack AI chat app with login, conversation history, switchable AI providers and prompt-injection checks.",
      fr: "Application de chat IA full-stack avec connexion, historique des conversations, fournisseurs d'IA interchangeables et contrôles contre l'injection de prompt.",
    },
    technologies: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "OpenAI", "OpenRouter", "Ollama", "JWT"],
    github: "https://github.com/gimuser/repos-islamic_ai_chat",
  },
  {
    slug: "car-price-prediction-system",
    title: { en: "Car Price Prediction System", fr: "Système de prédiction des prix des voitures" },
    year: "2025",
    summary: {
      en: "Python regression model that estimates car prices: data cleaning, exploratory analysis, feature engineering and evaluation.",
      fr: "Modèle de régression Python qui estime les prix : nettoyage des données, analyse exploratoire, feature engineering et évaluation.",
    },
    technologies: ["Python", "Pandas", "Regression"],
  },
];

export const cvLanguages: { name: LocalizedText; level: LocalizedText }[] = [
  { name: { en: "Arabic", fr: "Arabe" }, level: { en: "native", fr: "langue maternelle" } },
  { name: { en: "English", fr: "Anglais" }, level: { en: "B2", fr: "B2" } },
  { name: { en: "French", fr: "Français" }, level: { en: "B2", fr: "B2" } },
  { name: { en: "Spanish", fr: "Espagnol" }, level: { en: "beginner", fr: "débutant" } },
];

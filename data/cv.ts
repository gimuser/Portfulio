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
      en: "Master’s Year 1 average: 14.54/20. Semester 1 average: 15.66/20. Verified course grades: Advanced Machine Learning 17.35/20; UML & Design Patterns 18/20; IoT Communication Technologies 16.65/20; Advanced Python 16.01/20; NoSQL 15.62/20.",
      fr: "Moyenne de la première année du Master : 14,54/20. Moyenne du semestre 1 : 15,66/20. Notes vérifiées : Machine Learning avancé 17,35/20 ; UML et Design Patterns 18/20 ; Technologies de communication IoT 16,65/20 ; Python avancé 16,01/20 ; NoSQL 15,62/20.",
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
      en: "Coursework in data science, artificial intelligence, databases, network security, cryptography, machine learning, Python, SQL and C.",
      fr: "Formation en data science, intelligence artificielle, bases de données, sécurité réseau, cryptographie, machine learning, Python, SQL et C.",
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
      en: "Verified course grades: Programming I 16.5/20; Operating Systems I 15.5/20.",
      fr: "Notes vérifiées : Programmation I 16,5/20 ; Systèmes d’exploitation I 15,5/20.",
    },
  },
];

export const cvSkills: CvSkillGroup[] = [
  {
    title: { en: "AI, Machine Learning and Deep Learning", fr: "IA, Machine Learning et Deep Learning" },
    items: {
      en: "Machine Learning, Deep Learning, TensorFlow, PyTorch, scikit-learn, model evaluation",
      fr: "Machine Learning, Deep Learning, TensorFlow, PyTorch, scikit-learn, évaluation de modèles",
    },
  },
  {
    title: { en: "Generative AI and Document Intelligence", fr: "IA générative et intelligence documentaire" },
    items: {
      en: "LLM integration, RAG, prompt engineering, embeddings, vector indexing, OCR, document processing, structured-output validation, model quantization",
      fr: "Intégration de LLM, RAG, ingénierie de prompts, embeddings, indexation vectorielle, OCR, traitement documentaire, validation de sorties structurées, quantification de modèles",
    },
  },
  {
    title: { en: "Data Science and Analytics", fr: "Data Science et analyse de données" },
    items: {
      en: "Python, SQL, data cleaning, exploratory data analysis, feature engineering, regression, SPSS, Power BI, Excel",
      fr: "Python, SQL, nettoyage des données, analyse exploratoire, feature engineering, régression, SPSS, Power BI, Excel",
    },
  },
  {
    title: { en: "Programming and Software", fr: "Programmation et développement logiciel" },
    items: {
      en: "Python, SQL, C, PHP, JavaScript, TypeScript, REST APIs, Git, Docker",
      fr: "Python, SQL, C, PHP, JavaScript, TypeScript, API REST, Git, Docker",
    },
  },
  {
    title: { en: "Cybersecurity", fr: "Cybersécurité" },
    items: {
      en: "Network security, firewalls, IDS/IPS, Burp Suite, Kali Linux, Metasploit, attack techniques and mitigation in controlled lab environments, secure input validation",
      fr: "Sécurité réseau, pare-feu, IDS/IPS, Burp Suite, Kali Linux, Metasploit, techniques d’attaque et mesures de mitigation en environnement de laboratoire contrôlé, validation sécurisée des entrées",
    },
  },
  {
    title: { en: "Databases and Information Systems", fr: "Bases de données et systèmes d’information" },
    items: {
      en: "SQL and NoSQL databases, MongoDB, SQLite, database design, UML, information systems",
      fr: "Bases de données SQL et NoSQL, MongoDB, SQLite, conception de bases de données, UML, systèmes d’information",
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
        en: "Contributed to an LLM-based document-processing workflow combining OCR, document parsing and indexing for retrieval.",
        fr: "Contribution à un workflow de traitement documentaire basé sur les LLM, combinant l’OCR, l’analyse des documents et leur indexation pour la recherche.",
      },
      {
        en: "Implemented structured-output validation (JSON schema) and constrained generation to make LLM outputs reliable and machine-readable.",
        fr: "Mise en place de la validation des sorties structurées (schéma JSON) et de la génération contrainte afin de rendre les sorties des LLM fiables et exploitables par machine.",
      },
      {
        en: "Applied model quantization to run language models efficiently.",
        fr: "Application de la quantification de modèles pour exécuter efficacement des modèles de langage.",
      },
      {
        en: "Tested and evaluated pipeline outputs and worked autonomously on concrete AI problems in a professional team environment.",
        fr: "Test et évaluation des sorties du pipeline, avec un travail autonome sur des problématiques concrètes d’IA au sein d’une équipe professionnelle.",
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
      en: "Studied Android device security and attack vectors in a controlled, ethical lab environment using Kali Linux and Metasploit, then documented defensive observations and mitigation approaches.",
      fr: "Étude de la sécurité d’un appareil Android et de vecteurs d’attaque dans un environnement de laboratoire contrôlé et éthique avec Kali Linux et Metasploit, suivie de la documentation des observations défensives et des mesures de mitigation.",
    },
  ],
};

export const cvProjects: CvProject[] = [
  {
    slug: "soar-rl-agent",
    title: { en: "SOAR RL Agent", fr: "Agent RL pour SOAR" },
    year: "2026",
    summary: {
      en: "Collaborative reinforcement-learning project for security-alert triage and human-in-the-loop SOC operations, combining an RL environment, reward system, data pipeline, API and monitoring interface.",
      fr: "Projet collaboratif d’apprentissage par renforcement pour le triage des alertes de sécurité et les opérations SOC avec intervention humaine, associant environnement RL, système de récompense, pipeline de données, API et interface de supervision.",
    },
    technologies: ["Python", "FastAPI", "Reinforcement Learning", "SOAR", "Docker"],
    github: "https://github.com/gimuser/RL_Agent",
  },
  {
    slug: "bachelor-ai-tutor",
    title: { en: "BachelorAI Tutor", fr: "BachelorAI Tutor" },
    year: "2026",
    summary: {
      en: "Developed a full-stack educational RAG assistant that retrieves relevant course content by semester and module and generates source-grounded answers using local LLM inference, embeddings and a vector store.",
      fr: "Développement d’un assistant éducatif RAG full-stack qui retrouve les contenus de cours pertinents par semestre et module et génère des réponses fondées sur les sources à l’aide d’inférence LLM locale, d’embeddings et d’un vector store.",
    },
    technologies: ["Python", "LLM", "RAG", "Ollama", "Embeddings", "Vector Store", "React", "Express", "MongoDB"],
  },
  {
    slug: "islamic-ai-chat",
    title: { en: "Islamic AI Chat", fr: "Islamic AI Chat" },
    year: "2026",
    summary: {
      en: "Built a full-stack AI chat application with authentication, stored conversation history, configurable AI providers, and prompt-injection checks for a sensitive question-and-answering context.",
      fr: "Développement d’une application full-stack de chat IA avec authentification, historique des conversations, fournisseurs IA configurables et contrôles contre les injections de prompt pour un contexte de questions-réponses sensible.",
    },
    technologies: ["TypeScript", "React", "Vite", "Node.js", "Express", "MongoDB", "OpenAI", "OpenRouter", "Ollama", "JWT"],
  },
  {
    slug: "car-price-prediction-system",
    title: { en: "Car Price Prediction System", fr: "Système de prédiction des prix des voitures" },
    year: "2025",
    summary: {
      en: "Built a Python machine-learning regression workflow for car-price estimation, covering data cleaning, exploratory analysis, feature engineering and model evaluation.",
      fr: "Développement d’un workflow de régression en machine learning avec Python pour estimer les prix des voitures, couvrant le nettoyage des données, l’analyse exploratoire, le feature engineering et l’évaluation des modèles.",
    },
    technologies: ["Python", "Pandas", "Data Cleaning", "EDA", "Feature Engineering", "Regression"],
  },
];

export const cvLanguages: { name: LocalizedText; level: LocalizedText }[] = [
  { name: { en: "Arabic", fr: "Arabe" }, level: { en: "Native", fr: "langue maternelle" } },
  { name: { en: "English", fr: "Anglais" }, level: { en: "Intermediate", fr: "intermédiaire" } },
  { name: { en: "French", fr: "Français" }, level: { en: "B2", fr: "B2" } },
  { name: { en: "Spanish", fr: "Espagnol" }, level: { en: "Beginner", fr: "débutant" } },
];

export const atsProfessionalSummary: LocalizedText = {
  en: "Master’s student in Data Science and Information Systems Security at Sultan Moulay Slimane University, with professional internship experience in AI engineering at SPORTScore SAS. Focused on AI engineering, machine learning, generative AI and cybersecurity, with project experience in LLM integration, retrieval-augmented generation, document processing, OCR, vector indexing, prompt engineering, model quantization and structured-output validation.",
  fr: "Étudiant en Master Data Science et Sécurité des Systèmes d’Information à l’Université Sultan Moulay Slimane, avec une expérience de stage en ingénierie IA chez SPORTScore SAS. Orienté vers l’ingénierie IA, le machine learning, l’IA générative et la cybersécurité, avec une expérience de projet en intégration de LLM, génération augmentée par récupération (RAG), traitement documentaire, OCR, indexation vectorielle, ingénierie de prompts, quantification de modèles et validation de sorties structurées.",
};

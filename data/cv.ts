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
      en: "Courses & Grades: UML & Design Patterns (18/20) · Advanced Machine Learning (17.35/20) · IoT Communication Technologies (16.65/20) · Advanced Python (16.01/20) · NoSQL Databases (15.62/20).",
      fr: "Matières & notes : UML & Design Patterns (18/20) · Machine Learning avancé (17,35/20) · Technologies de communication IoT (16,65/20) · Python avancé (16,01/20) · Bases de données NoSQL (15,62/20).",
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
      en: "Relevant Coursework: Machine Learning · Feature Engineering · IoT · Information Systems Auditing · Cybersecurity · Python for Data Science.",
      fr: "Matières principales : Machine Learning · Feature Engineering · IoT · Audit des systèmes d’information · Cybersécurité · Python pour la Data Science.",
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
      en: "Relevant Coursework: Programming · Algorithms · Data Structures · Probability & Statistics · Operating Systems.",
      fr: "Matières principales : Programmation · Algorithmique · Structures de données · Probabilités & Statistiques · Systèmes d’exploitation.",
    },
  },
];

export const cvSkills: CvSkillGroup[] = [
  {
    title: { en: "Generative AI", fr: "IA générative" },
    items: {
      en: "LLMs, RAG, prompt engineering, embeddings, OCR, document processing, JSON Schema, model quantization",
      fr: "LLM, RAG, prompt engineering, embeddings, OCR, traitement documentaire, JSON Schema, quantification de modèles",
    },
  },
  {
    title: { en: "Machine Learning", fr: "Machine Learning" },
    items: {
      en: "Machine Learning, Deep Learning, Reinforcement Learning (DQN, DDQN), feature engineering, model evaluation, TensorFlow, PyTorch, Scikit-learn",
      fr: "Machine Learning, Deep Learning, apprentissage par renforcement (DQN, DDQN), feature engineering, évaluation de modèles, TensorFlow, PyTorch, Scikit-learn",
    },
  },
  {
    title: { en: "Data Science", fr: "Data Science" },
    items: {
      en: "Python, Pandas, NumPy, data analysis, regression, Power BI, SPSS",
      fr: "Python, Pandas, NumPy, analyse de données, régression, Power BI, SPSS",
    },
  },
  {
    title: { en: "Databases", fr: "Bases de données" },
    items: {
      en: "SQL, NoSQL, MongoDB",
      fr: "SQL, NoSQL, MongoDB",
    },
  },
  {
    title: { en: "Cybersecurity", fr: "Cybersécurité" },
    items: {
      en: "Network security, web application security, cryptography, IDS/IPS, Burp Suite, Kali Linux, Metasploit",
      fr: "Sécurité réseau, sécurité des applications web, cryptographie, IDS/IPS, Burp Suite, Kali Linux, Metasploit",
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
      en: "RAG-based educational assistant providing answers grounded in academic course materials.",
      fr: "Assistant pédagogique basé sur RAG, fournissant des réponses fondées sur les supports de cours.",
    },
    technologies: ["Python", "MongoDB", "Ollama", "RAG"],
  },
  {
    slug: "islamic-ai-chat",
    title: { en: "Islamic AI Chat", fr: "Islamic AI Chat" },
    year: "2026",
    summary: {
      en: "AI chat application providing answers grounded in trusted Islamic references, with authentication and prompt-injection checks.",
      fr: "Application de chat IA fournissant des réponses fondées sur des références islamiques fiables, avec authentification et protection contre l’injection de prompt.",
    },
    technologies: ["MongoDB", "LLMs", "JWT"],
    github: "https://github.com/gimuser/repos-islamic_ai_chat",
  },
  {
    slug: "car-price-prediction-system",
    title: { en: "Car Price Prediction System", fr: "Système de prédiction des prix des voitures" },
    year: "2025",
    summary: {
      en: "Machine-learning project for car price estimation using data analysis and regression.",
      fr: "Projet de Machine Learning pour l’estimation des prix automobiles à partir de l’analyse des données et de la régression.",
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

export const cvSoftSkills: LocalizedText = {
  en: "Analytical Thinking · Problem-Solving · Autonomy & Initiative · Rigor & Attention to Detail · Professionalism · Commitment & Diligence",
  fr: "Esprit d’analyse · Résolution de problèmes · Autonomie et esprit d’initiative · Rigueur et attention aux détails · Professionnalisme · Engagement et assiduité",
};

export const atsProfessionalSummary: LocalizedText = {
  en: "Master's student in the final year of Data Science and Information Systems Security at Sultan Moulay Slimane University. Completed a two-month AI Engineering internship at SPORTScore SAS, working on LLM-based document processing, structured-output validation and model quantization. Practical experience in machine learning, generative AI, RAG and reinforcement learning. Seeking an internship in AI engineering, data science or cybersecurity.",
  fr: "Étudiant en dernière année de Master Data Science et Sécurité des Systèmes d’Information à l’Université Sultan Moulay Slimane. A effectué un stage de deux mois en ingénierie IA chez SPORTScore SAS, portant sur le traitement de documents avec des LLM, la validation des sorties structurées et la quantification de modèles. Expérience pratique en Machine Learning, IA générative, RAG et apprentissage par renforcement. À la recherche d’un stage en ingénierie IA, Data Science ou cybersécurité.",
};

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
  organization: string;
  location: LocalizedText;
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
  en: "Sultan Moulay Slimane University, Beni Mellal",
  fr: "Université Sultan Moulay Slimane, Béni Mellal",
};

export const cvEducation: CvEducation[] = [
  {
    year: "2027",
    period: { en: "Sep 2025 – Jul 2027 (expected)", fr: "sept. 2025 – juil. 2027 (prévu)" },
    title: {
      en: "Master's in Data Science and Information Systems Security",
      fr: "Master Data Science et Sécurité des Systèmes d'Information",
    },
    institution: university,
    details: {
      en: "Year 1 average 14.54/20 | Advanced ML 17.35 | UML & Design Patterns 18 | IoT Communication 16.65 | Advanced Python 16.01",
      fr: "Moyenne de 1re année 14,54/20 | ML avancé 17,35 | UML & Design Patterns 18 | Communication IoT 16,65 | Python avancé 16,01",
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
    details: { en: "", fr: "" },
  },
  {
    year: "2024",
    period: { en: "2024", fr: "2024" },
    title: {
      en: "DEUG in Mathematics and Computer Science",
      fr: "DEUG Mathématiques et Informatique",
    },
    institution: university,
    details: { en: "", fr: "" },
  },
];

export const cvSkills: CvSkillGroup[] = [
  {
    title: { en: "Generative AI", fr: "IA générative" },
    items: {
      en: "RAG, LLM integration, prompt engineering, embeddings, vector indexing, OCR, document parsing, Ollama",
      fr: "RAG, intégration de LLM, prompt engineering, embeddings, indexation vectorielle, OCR, analyse de documents, Ollama",
    },
  },
  {
    title: { en: "Machine Learning", fr: "Machine Learning" },
    items: {
      en: "machine learning, deep learning, reinforcement learning (DQN, DDQN), TensorFlow, PyTorch, model evaluation",
      fr: "machine learning, deep learning, apprentissage par renforcement (DQN, DDQN), TensorFlow, PyTorch, évaluation de modèles",
    },
  },
  {
    title: { en: "Data", fr: "Données" },
    items: { en: "Pandas, SQL, NoSQL, MongoDB, Power BI", fr: "Pandas, SQL, NoSQL, MongoDB, Power BI" },
  },
  {
    title: { en: "Software", fr: "Génie logiciel" },
    items: { en: "Python, TypeScript, FastAPI, Docker", fr: "Python, TypeScript, FastAPI, Docker" },
  },
  {
    title: { en: "Cybersecurity", fr: "Cybersécurité" },
    items: {
      en: "cryptography, network security, web application security, firewalls, IDS/IPS, Burp Suite, Kali Linux, Metasploit",
      fr: "cryptographie, sécurité réseau, sécurité des applications web, pare-feu, IDS/IPS, Burp Suite, Kali Linux, Metasploit",
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
        en: "Contributed to an LLM document-processing workflow: OCR, parsing and indexing.",
        fr: "Contribution à un workflow de traitement de documents avec LLM : OCR, analyse et indexation.",
      },
      {
        en: "Implemented structured-output validation (JSON Schema) and constrained generation.",
        fr: "Mise en place de la validation des sorties structurées (JSON Schema) et de la génération contrainte.",
      },
      {
        en: "Applied model quantization; tested and evaluated pipeline outputs.",
        fr: "Application de la quantification ; test et évaluation des sorties du pipeline.",
      },
    ],
  },
];

export const cvProjects: CvProject[] = [
  {
    slug: "soar-rl-agent",
    title: { en: "SOAR RL Agent", fr: "SOAR RL Agent" },
    year: "2026",
    summary: {
      en: "Team reinforcement-learning agent (DQN, DDQN) that triages security alerts in a simulated SOC.",
      fr: "Agent d'apprentissage par renforcement en équipe (DQN, DDQN) qui trie les alertes de sécurité dans un SOC simulé.",
    },
    technologies: ["Python", "FastAPI", "DQN", "DDQN", "Docker"],
    github: "github.com/gimuser/RL_Agent",
  },
  {
    slug: "bachelor-ai-tutor",
    title: { en: "BachelorAI Tutor", fr: "BachelorAI Tutor" },
    year: "2026",
    summary: {
      en: "RAG assistant that finds course material by semester and module and answers with sources.",
      fr: "Assistant RAG qui retrouve les supports de cours par semestre et module et répond avec des sources.",
    },
    technologies: ["Python", "MongoDB", "Ollama", "Embeddings"],
  },
  {
    slug: "islamic-ai-chat",
    title: { en: "Islamic AI Chat", fr: "Islamic AI Chat" },
    year: "2026",
    summary: {
      en: "Full-stack AI chat with login, history, switchable AI providers and prompt-injection checks.",
      fr: "Chat IA full-stack avec connexion, historique, fournisseurs IA interchangeables et vérifications contre l'injection de prompt.",
    },
    technologies: ["MongoDB", "OpenAI", "Ollama", "JWT"],
    github: "github.com/gimuser/repos-islamic_ai_chat",
  },
  {
    slug: "car-price-prediction-system",
    title: { en: "Car Price Prediction System", fr: "Système de prédiction des prix des voitures" },
    year: "2025",
    summary: {
      en: "Python regression model that estimates car prices, from data cleaning to evaluation.",
      fr: "Modèle de régression Python qui estime les prix des voitures, du nettoyage des données à l'évaluation.",
    },
    technologies: ["Python", "Pandas", "Regression"],
  },
];

export const cvSoftSkills: LocalizedText = {
  en: "Analytical skills • Initiative • Rigor • Professionalism • Autonomy",
  fr: "Capacité d'analyse • Esprit d'initiative • Rigueur • Professionnalisme • Autonomie",
};

export const cvLanguages: { name: LocalizedText; level: LocalizedText }[] = [
  { name: { en: "Arabic", fr: "Arabe" }, level: { en: "native", fr: "langue maternelle" } },
  { name: { en: "English", fr: "Anglais" }, level: { en: "B2", fr: "B2" } },
  { name: { en: "French", fr: "Français" }, level: { en: "B2", fr: "B2" } },
  { name: { en: "Spanish", fr: "Espagnol" }, level: { en: "beginner", fr: "débutant" } },
];

export const cvProfessionalSummary: LocalizedText = {
  en: "Master's student in Data Science and Information Systems Security. Completed a two-month AI engineering internship at SPORTScore SAS (Aug–Oct 2026) on document processing with LLMs. Seeking an internship in AI/ML, data science, software engineering or AI for cybersecurity.",
  fr: "Étudiant en Master Data Science et Sécurité des Systèmes d'Information. A effectué un stage de deux mois en ingénierie IA chez SPORTScore SAS (août–oct. 2026) sur le traitement de documents avec des LLM. Recherche un stage en IA/ML, data science, génie logiciel ou IA pour la cybersécurité.",
};

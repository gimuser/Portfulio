import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Programming", fr: "Programmation" },
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C", "PHP", "HTML5"],
    evidence: {
      en: "Python, SQL, C, and HTML5 are listed in CV coursework; PHP is verified by the hotel management project; TypeScript and JavaScript are verified by GitHub repositories.",
      fr: "Python, SQL, C et HTML5 sont mentionnes dans les cours du CV; PHP est confirme par le projet de gestion d'hotel; TypeScript et JavaScript sont confirmes par les depots GitHub.",
    },
  },
  {
    title: { en: "Frontend", fr: "Frontend" },
    items: ["React", "Vite", "Next.js", "Tailwind CSS", "Responsive UI", "Dark/light themes"],
    evidence: {
      en: "Verified through the GitHub repositories BachelorAI Tutor, Islamic AI Chat, and Maison Global Store.",
      fr: "Confirme par les depots GitHub BachelorAI Tutor, Islamic AI Chat et Maison Global Store.",
    },
  },
  {
    title: { en: "Backend and APIs", fr: "Backend et APIs" },
    items: ["Node.js", "Express", "Next.js API routes", "REST APIs", "JWT auth", "HTTP-only cookies"],
    evidence: {
      en: "Verified through full-stack GitHub projects with Express backends and Next.js API routes.",
      fr: "Confirme par les projets full-stack GitHub avec backends Express et routes API Next.js.",
    },
  },
  {
    title: { en: "Data Science", fr: "Data science" },
    items: ["Data cleaning", "Feature engineering", "Exploratory data analysis", "Regression modeling"],
    evidence: {
      en: "Verified through the car price prediction project.",
      fr: "Confirme par le projet de prediction des prix de voitures.",
    },
  },
  {
    title: { en: "Machine Learning & AI", fr: "Machine learning et IA" },
    items: ["Machine learning fundamentals", "Artificial intelligence", "PyTorch", "Deep learning basics", "Image classification"],
    evidence: {
      en: "AI and ML fundamentals are listed in the CV; PyTorch is verified by the image classification project.",
      fr: "Les bases de l'IA et du ML figurent dans le CV; PyTorch est confirme par le projet de classification d'images.",
    },
  },
  {
    title: { en: "Generative AI and RAG", fr: "IA generative et RAG" },
    items: ["RAG", "Embeddings", "Vector search", "Ollama", "OpenAI", "OpenRouter", "Prompt guards", "Document parsing"],
    evidence: {
      en: "Verified through BachelorAI Tutor and Islamic AI Chat repositories.",
      fr: "Confirme par les depots BachelorAI Tutor et Islamic AI Chat.",
    },
  },
  {
    title: { en: "Mathematics for ML", fr: "Mathematiques pour le ML" },
    items: ["Linear algebra", "Calculus", "Probability", "Statistics", "Discrete mathematics"],
    evidence: {
      en: "Verified through DEUG coursework listed in the CV.",
      fr: "Confirme par les cours de DEUG mentionnes dans le CV.",
    },
  },
  {
    title: { en: "Cybersecurity", fr: "Cybersecurity" },
    items: ["Information systems security", "Network security", "Cryptography", "Kali Linux", "Metasploit", "Helmet", "CORS", "Rate limiting", "Zod validation"],
    evidence: {
      en: "Verified through CV coursework, the Android security testing project, and GitHub apps using validation, rate limiting, and security middleware.",
      fr: "Confirme par les cours du CV, le projet de test de securite Android et les applications GitHub utilisant validation, rate limiting et middleware de securite.",
    },
  },
  {
    title: { en: "Databases & Information Systems", fr: "Bases de donnees et systemes d'information" },
    items: ["MongoDB", "Mongoose", "Prisma", "SQLite", "Database fundamentals", "Information systems", "Big data fundamentals"],
    evidence: {
      en: "Verified through CV skill categories, the hotel management system, and GitHub projects using MongoDB/Mongoose and Prisma/SQLite.",
      fr: "Confirme par les categories de competences du CV, le systeme de gestion d'hotel et les projets GitHub utilisant MongoDB/Mongoose et Prisma/SQLite.",
    },
  },
  {
    title: { en: "Professional Skills", fr: "Competences professionnelles" },
    items: ["Analytical thinking", "Problem solving", "Attention to detail", "Continuous learning", "Team collaboration", "Technical communication"],
    evidence: {
      en: "Soft skills listed directly in the old CV.",
      fr: "Competences comportementales mentionnees directement dans l'ancien CV.",
    },
  },
  {
    title: { en: "Languages", fr: "Langues" },
    items: ["Arabic: Native", "English: Intermediate", "French: Intermediate", "Spanish: Beginner"],
    evidence: {
      en: "Language levels are taken from the old CV.",
      fr: "Les niveaux de langue proviennent de l'ancien CV.",
    },
  },
];

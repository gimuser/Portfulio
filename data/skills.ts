import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Programming", fr: "Programmation" },
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C", "PHP", "HTML5"],
    evidence: {
      en: "Python, SQL, C, and HTML5 come from coursework; PHP appears in the hotel management project; TypeScript and JavaScript appear in GitHub repositories.",
      fr: "Python, SQL, C et HTML5 viennent des cours; PHP apparait dans le projet de gestion d'hotel; TypeScript et JavaScript apparaissent dans les depots GitHub.",
    },
  },
  {
    title: { en: "Frontend", fr: "Frontend" },
    items: ["React", "Vite", "Next.js", "Tailwind CSS", "Responsive UI", "Dark/light themes"],
    evidence: {
      en: "Used in the GitHub repositories BachelorAI Tutor, Islamic AI Chat, and Maison Global Store.",
      fr: "Utilise dans les depots GitHub BachelorAI Tutor, Islamic AI Chat et Maison Global Store.",
    },
  },
  {
    title: { en: "Backend and APIs", fr: "Backend et APIs" },
    items: ["Node.js", "Express", "Next.js API routes", "REST APIs", "JWT auth", "HTTP-only cookies"],
    evidence: {
      en: "Used in full-stack GitHub projects with Express backends and Next.js API routes.",
      fr: "Utilise dans les projets full-stack GitHub avec backends Express et routes API Next.js.",
    },
  },
  {
    title: { en: "Data Science", fr: "Data science" },
    items: ["Data cleaning", "Feature engineering", "Exploratory data analysis", "Regression modeling"],
    evidence: {
      en: "Used in the car price prediction project.",
      fr: "Utilise dans le projet de prediction des prix de voitures.",
    },
  },
  {
    title: { en: "Machine Learning & AI", fr: "Machine learning et IA" },
    items: ["Machine learning fundamentals", "Artificial intelligence", "PyTorch", "Deep learning basics", "Image classification"],
    evidence: {
      en: "AI and ML fundamentals come from coursework; PyTorch appears in the image classification project.",
      fr: "Les bases de l'IA et du ML viennent des cours; PyTorch apparait dans le projet de classification d'images.",
    },
  },
  {
    title: { en: "Generative AI and RAG", fr: "IA generative et RAG" },
    items: ["RAG", "Embeddings", "Vector search", "Ollama", "OpenAI", "OpenRouter", "Prompt guards", "Document parsing"],
    evidence: {
      en: "Used in BachelorAI Tutor and Islamic AI Chat repositories.",
      fr: "Utilise dans les depots BachelorAI Tutor et Islamic AI Chat.",
    },
  },
  {
    title: { en: "Mathematics for ML", fr: "Mathematiques pour le ML" },
    items: ["Linear algebra", "Calculus", "Probability", "Statistics", "Discrete mathematics"],
    evidence: {
      en: "Covered through DEUG coursework.",
      fr: "Couvert dans les cours de DEUG.",
    },
  },
  {
    title: { en: "Cybersecurity", fr: "Cybersecurity" },
    items: ["Information systems security", "Network security", "Cryptography", "Kali Linux", "Metasploit", "Helmet", "CORS", "Rate limiting", "Zod validation"],
    evidence: {
      en: "Covered through coursework, the Android security testing project, and GitHub apps using validation, rate limiting, and security middleware.",
      fr: "Couvert par les cours, le projet de test de securite Android et les applications GitHub utilisant validation, rate limiting et middleware de securite.",
    },
  },
  {
    title: { en: "Databases & Information Systems", fr: "Bases de donnees et systemes d'information" },
    items: ["MongoDB", "Mongoose", "Prisma", "SQLite", "Database fundamentals", "Information systems", "Big data fundamentals"],
    evidence: {
      en: "Used across coursework, the hotel management system, and GitHub projects using MongoDB/Mongoose and Prisma/SQLite.",
      fr: "Utilise dans les cours, le systeme de gestion d'hotel et les projets GitHub utilisant MongoDB/Mongoose et Prisma/SQLite.",
    },
  },
  {
    title: { en: "Professional Skills", fr: "Competences professionnelles" },
    items: ["Analytical thinking", "Problem solving", "Attention to detail", "Continuous learning", "Team collaboration", "Technical communication"],
    evidence: {
      en: "Professional strengths to show through project work and collaboration.",
      fr: "Qualites professionnelles a montrer dans les projets et la collaboration.",
    },
  },
  {
    title: { en: "Languages", fr: "Langues" },
    items: ["Arabic: Native", "English: Intermediate", "French: Intermediate", "Spanish: Beginner"],
    evidence: {
      en: "Language levels for the public profile.",
      fr: "Niveaux de langue pour le profil public.",
    },
  },
];

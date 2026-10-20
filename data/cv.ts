import type { LocalizedText } from "@/types/content";

export const cvLanguages: { name: LocalizedText; level: LocalizedText }[] = [
  {
    name: { en: "Arabic", fr: "Arabe" },
    level: { en: "Native", fr: "langue maternelle" },
  },
  {
    name: { en: "English", fr: "Anglais" },
    level: { en: "Intermediate", fr: "intermédiaire" },
  },
  {
    name: { en: "French", fr: "Français" },
    level: { en: "Intermediate", fr: "intermédiaire" },
  },
  {
    name: { en: "Spanish", fr: "Espagnol" },
    level: { en: "Beginner", fr: "débutant" },
  },
];

export const atsProfessionalSummary: LocalizedText = {
  en: "AI-focused Master’s student in Data Science and Information Systems Security, with project experience in machine learning, generative AI, retrieval-augmented generation (RAG), and secure application development. Built a document-grounded educational AI assistant and contributed to a collaborative reinforcement-learning project for security alert triage. Seeking an internship in AI Engineering, Machine Learning, or Data Science to apply my skills to practical projects and continue developing my expertise.",
  fr: "Étudiant en master Data Science et Sécurité des Systèmes d’Information, orienté IA, avec une expérience de projet en machine learning, IA générative, génération augmentée par récupération (RAG) et développement d’applications sécurisées. J’ai développé un assistant éducatif fondé sur les supports de cours et contribué à un projet collaboratif d’apprentissage par renforcement pour le triage des alertes de sécurité. Je recherche un stage en ingénierie IA, machine learning ou data science afin d’appliquer mes compétences à des projets concrets et de continuer à développer mon expertise.",
};

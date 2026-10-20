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
  en: "AI-focused Master’s student in Data Science and Information Systems Security with professional internship experience as an AI Engineering Intern at SPORTScore SAS. Project experience includes machine learning, generative AI, retrieval-augmented generation (RAG), and secure application development, including a document-grounded educational AI assistant and a collaborative reinforcement-learning project for security alert triage.",
  fr: "Étudiant en master Data Science et Sécurité des Systèmes d’Information, avec une expérience professionnelle en tant que stagiaire ingénieur en intelligence artificielle chez SPORTScore SAS. Expérience de projet en machine learning, IA générative, RAG et développement d’applications sécurisées, notamment un assistant éducatif fondé sur les supports de cours et un projet collaboratif d’apprentissage par renforcement pour le triage des alertes de sécurité.",
};

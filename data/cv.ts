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
  en: "Master's student in Data Science and Information Systems Security with practical project experience in AI, machine learning, generative AI, RAG, data science, backend/API development, and cybersecurity. Built document-grounded assistants, AI chat applications with safeguards, full-stack solutions, regression and image-classification workflows, and secure system learning labs. Seeking an AI, data science, or machine learning internship to contribute to data-driven products, intelligent automation, and secure software systems.",
  fr: "Étudiant en master Data Science et Sécurité des Systèmes d'Information, avec une expérience pratique sur des projets en IA, machine learning, IA générative, RAG, data science, développement backend/API et cybersécurité. Réalisation d'assistants fondés sur des documents, d'applications de chat IA avec garde-fous, de solutions full-stack, de workflows de régression et de classification d'images, ainsi que de laboratoires d'apprentissage sur les systèmes sécurisés. Recherche un stage en IA, data science ou machine learning pour contribuer à des produits pilotés par les données, à l'automatisation intelligente et à des systèmes logiciels sécurisés.",
};

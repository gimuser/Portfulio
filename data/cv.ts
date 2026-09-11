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
  en: "Master's student in Data Science and Information Systems Security with practical project experience in Artificial Intelligence, Machine Learning, Generative AI, RAG, Data Science, Python, backend/API development, and cybersecurity. Built document-grounded assistants, AI chat applications with safeguards, full-stack solutions, regression and image-classification workflows, and secure systems learning labs. Seeking an AI, Data Science, or Machine Learning internship to contribute to data-driven products, intelligent automation, and secure software systems.",
  fr: "Étudiant en master Data Science et Sécurité des Systèmes d'Information, avec une expérience pratique sur des projets en Intelligence Artificielle, Machine Learning, IA générative, RAG, Data Science, Python, développement backend/API et cybersécurité. Réalisation d'assistants fondés sur des documents, d'applications de chat IA avec garde-fous, de solutions full-stack, de workflows de régression et de classification d'images, ainsi que de laboratoires d'apprentissage sur les systèmes sécurisés. Recherche un stage en IA, Data Science ou Machine Learning pour contribuer à des produits pilotés par les données, à l'automatisation intelligente et à des systèmes logiciels sécurisés.",
};

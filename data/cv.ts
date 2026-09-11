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
  fr: "Étudiant en master Data Science et Sécurité des Systèmes d'Information, avec une expérience pratique en Intelligence Artificielle, Machine Learning, IA générative, RAG, systèmes de recommandation pilotés par IA, Data Science, Python, développement backend/API et cybersécurité. J'ai conçu des assistants documentaires, des applications de chat IA avec garde-fous, des solutions full-stack, des workflows de régression et de classification d'images, ainsi que des laboratoires sécurisés sur les systèmes d'information. Recherche un stage en IA, Data Science, Machine Learning ou systèmes intelligents pour contribuer à des produits axés sur les données, à l'automatisation intelligente et à des logiciels sécurisés.",
};

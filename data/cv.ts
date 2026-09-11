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
  en: "Master's student in Data Science and Information Systems Security with hands-on academic and personal projects in AI, machine learning, generative AI, RAG, data analytics, data management, APIs, and secure intelligent systems. Built document-grounded assistants, an AI chat application with safeguards, full-stack applications, regression and image-classification workflows, and cybersecurity learning labs. Seeking an internship to contribute to data-driven products, automation, and secure software systems.",
  fr: "Étudiant en master Data Science et Sécurité des Systèmes d'Information, avec des projets académiques et personnels en IA, machine learning, IA générative, RAG, analyse et gestion de données, API et systèmes intelligents sécurisés. Réalisation d'assistants fondés sur des documents, d'une application de chat IA avec garde-fous, d'applications full-stack, de workflows de régression et de classification d'images, ainsi que de labs d'apprentissage en cybersécurité. Recherche d'un stage pour contribuer à des produits pilotés par les données, à l'automatisation et à des systèmes logiciels sécurisés.",
};

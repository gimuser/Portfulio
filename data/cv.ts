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
  en: "Master's student in Data Science and Information Systems Security with practical project experience in artificial intelligence, machine learning, generative AI, data analytics, and secure intelligent systems. Built academic and personal projects covering RAG assistants, protected AI chat, full-stack web applications, regression modeling, image classification, and cybersecurity labs. Seeking an internship opportunity to contribute to data-driven and secure software projects while continuing to grow through applied engineering work.",
  fr: "Étudiant en master Data Science et Sécurité des Systèmes d'Information avec une expérience pratique de projets en intelligence artificielle, machine learning, IA générative, analyse de données et systèmes intelligents sécurisés. A réalisé des projets académiques et personnels autour d'assistants RAG, de chat IA protégé, d'applications web full-stack, de modèles de régression, de classification d'images et de labs cybersécurité. Recherche un stage pour contribuer à des projets logiciels data-driven et sécurisés tout en continuant à progresser par la pratique.",
};

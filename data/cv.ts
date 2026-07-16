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
  en: "Master's student in Data Science and Information Systems Security with practical projects in AI, machine learning, generative AI, data analytics, and secure intelligent systems. Built RAG assistants, protected AI chat, full-stack web apps, regression models, image classification workflows, and cybersecurity learning labs while seeking an internship.",
  fr: "Étudiant en master Data Science et Sécurité des Systèmes d'Information avec des projets pratiques en IA, machine learning, IA générative, analyse de données et systèmes intelligents sécurisés. A réalisé des assistants RAG, un chat IA protégé, des applications web full-stack, des modèles de régression, de la classification d'images et des labs cybersécurité dans le cadre d'une recherche de stage.",
};

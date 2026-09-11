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
  en: "Master's student in Data Science and Information Systems Security with hands-on experience in Artificial Intelligence (AI), Machine Learning (ML), Generative Artificial Intelligence (GenAI), Retrieval-Augmented Generation (RAG), data analytics, APIs, and secure application development. Developed AI assistants, document-grounded RAG applications, reinforcement learning systems, and full-stack applications. Seeking an internship in Artificial Intelligence, Data Science, Machine Learning, or Generative AI.",
  fr: "Étudiant en master Data Science et Sécurité des Systèmes d'Information avec une expérience pratique en intelligence artificielle (IA), apprentissage automatique (Machine Learning, ML), intelligence artificielle générative (Generative AI, GenAI), génération augmentée par récupération (Retrieval-Augmented Generation, RAG), analyse de données, API et développement d'applications sécurisées. J'ai développé des assistants IA, des applications RAG fondées sur des documents, des systèmes d'apprentissage par renforcement et des applications full-stack. Recherche un stage en intelligence artificielle, data science, machine learning ou IA générative.",
};

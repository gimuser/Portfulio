import type { LocalizedText } from "@/types/content";

export const cvLanguages: { name: LocalizedText; level: LocalizedText }[] = [
  {
    name: { en: "Arabic", fr: "Arabe" },
    level: { en: "Native", fr: "langue maternelle" },
  },
  {
    name: { en: "English", fr: "Anglais" },
    level: { en: "B2", fr: "B2" },
  },
  {
    name: { en: "French", fr: "Français" },
    level: { en: "B2", fr: "B2" },
  },
  {
    name: { en: "Spanish", fr: "Espagnol" },
    level: { en: "Beginner", fr: "débutant" },
  },
];

export const atsProfessionalSummary: LocalizedText = {
  en: "Master’s student in Data Science and Information Systems Security at Sultan Moulay Slimane University, with professional internship experience in AI engineering at SPORTScore SAS. Focused on AI engineering, machine learning, generative AI, and secure intelligent systems, with practical work across LLM integration, RAG, prompt engineering, document processing, model quantization, structured-output validation, and scientific research.",
  fr: "Étudiant en Master Data Science et Sécurité des Systèmes d’Information à l’Université Sultan Moulay Slimane, avec une expérience professionnelle en ingénierie IA chez SPORTScore SAS. Orienté vers l’ingénierie IA, le machine learning, l’IA générative et les systèmes intelligents sécurisés, avec des compétences pratiques en intégration de LLM, RAG, ingénierie de prompts, traitement documentaire, quantification de modèles, validation de sorties structurées et recherche scientifique.",
};

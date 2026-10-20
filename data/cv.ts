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
  en: "Master’s student in Data Science and Information Systems Security with internship experience as an AI Engineering Intern at SPORTScore SAS, seeking internships in AI Engineering, Data Science, Generative AI, or intelligent document processing. Skills include machine learning, RAG, LLM integration, prompt engineering, model quantization, document parsing, structured-output validation, scientific research, and scientific paper review, alongside secure application development.",
  fr: "Étudiant en master Data Science et Sécurité des Systèmes d’Information, ayant une expérience de stage en ingénierie IA chez SPORTScore SAS et à la recherche de stages en ingénierie IA, Data Science, IA générative ou traitement intelligent de documents. Compétences en machine learning, RAG, intégration de LLM, ingénierie de prompts, quantification de modèles, analyse de documents, validation de sorties structurées, recherche scientifique et lecture d’articles scientifiques, ainsi qu’en développement d’applications sécurisées.",
};

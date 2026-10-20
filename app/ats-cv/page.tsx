import type { Metadata } from "next";
import { CvDocument } from "@/components/cv/cv-document";
import { LanguageProvider } from "@/components/layout/language-provider";
import { profile } from "@/data/profile";
import type { Language } from "@/types/content";

export const dynamic = "force-dynamic";

type AtsCvPageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

function getInitialLanguage(lang: string | string[] | undefined): Language {
  const value = Array.isArray(lang) ? lang[0] : lang;
  return value === "fr" ? "fr" : "en";
}

export async function generateMetadata({ searchParams }: AtsCvPageProps): Promise<Metadata> {
  const { lang } = await searchParams;
  const language = getInitialLanguage(lang);

  return {
    title: `ATS CV | ${profile.name}`,
    description:
      language === "fr"
        ? "CV ATS d'Oualid Ait Alla, étudiant en master Data Science et Sécurité des Systèmes d'Information, orienté ingénierie IA et machine learning."
        : "ATS-friendly CV of Oualid Ait Alla, a Master's student targeting AI and machine learning engineering internships.",
    openGraph: {
      locale: language === "fr" ? "fr_FR" : "en_US",
      title: language === "fr" ? `CV ATS | ${profile.name}` : `ATS CV | ${profile.name}`,
      description:
        language === "fr"
          ? "CV ATS d'Oualid Ait Alla adapté au filtrage en français."
          : "ATS-friendly CV of Oualid Ait Alla.",
    },
  };
}

export default async function AtsCvPage({ searchParams }: AtsCvPageProps) {
  const { lang } = await searchParams;
  const initialLanguage = getInitialLanguage(lang);

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <CvDocument variant="ats" />
    </LanguageProvider>
  );
}

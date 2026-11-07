import type { Metadata } from "next";
import { CvDocument } from "@/components/cv/cv-document";
import { LanguageProvider } from "@/components/layout/language-provider";
import type { Language } from "@/types/content";

export const dynamic = "force-dynamic";

type CvPageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

function getInitialLanguage(lang: string | string[] | undefined): Language {
  const value = Array.isArray(lang) ? lang[0] : lang;
  return value === "fr" ? "fr" : "en";
}

export async function generateMetadata({ searchParams }: CvPageProps): Promise<Metadata> {
  const { lang } = await searchParams;
  const language = getInitialLanguage(lang);

  return {
    title: language === "fr" ? "CV | AIT ALLA Oualid" : "CV | AIT ALLA Oualid",
    description:
      language === "fr"
        ? "CV d’AIT ALLA Oualid en ingénierie IA, data science et cybersécurité."
        : "AI Engineering and Data Science CV of AIT ALLA Oualid.",
    openGraph: {
      locale: language === "fr" ? "fr_FR" : "en_US",
      title: language === "fr" ? "CV de AIT ALLA Oualid" : "AIT ALLA Oualid CV",
      description:
        language === "fr"
          ? "CV en ingénierie IA, IA générative et cybersécurité."
          : "AI Engineering, Generative AI and Cybersecurity CV.",
    },
  };
}

export default async function CvPage({ searchParams }: CvPageProps) {
  const { lang } = await searchParams;
  const initialLanguage = getInitialLanguage(lang);

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <CvDocument />
    </LanguageProvider>
  );
}

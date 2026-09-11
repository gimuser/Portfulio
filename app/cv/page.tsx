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
    title: language === "fr" ? "CV | Oualid Ait Alla" : "CV | Oualid Ait Alla",
    description:
      language === "fr"
        ? "CV moderne et imprimable d'Oualid Ait Alla en français."
        : "Modern print-friendly CV for Oualid Ait Alla in English and French.",
    openGraph: {
      locale: language === "fr" ? "fr_FR" : "en_US",
      title: language === "fr" ? "CV de Oualid Ait Alla" : "Oualid Ait Alla CV",
      description:
        language === "fr"
          ? "CV moderne et imprimable d'Oualid Ait Alla."
          : "Modern print-friendly CV for Oualid Ait Alla.",
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

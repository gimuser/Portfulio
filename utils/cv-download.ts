import type { Language } from "@/types/content";

type CvVariant = "portfolio" | "ats";

export function getCvDownloadPath(language: Language, variant: CvVariant = "portfolio") {
  const kind = variant === "ats" ? "ATS_CV" : "CV";
  const languageCode = language.toUpperCase();

  return `/downloads/Oualid_Ait_Alla_${kind}_${languageCode}.pdf`;
}

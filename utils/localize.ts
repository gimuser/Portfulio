import type { Language, LocalizedText } from "@/types/content";

export function localize(value: LocalizedText, language: Language) {
  return value[language] ?? value.en;
}

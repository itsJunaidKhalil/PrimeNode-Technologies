export const LOCALES = ["en", "zh", "sr", "de", "it", "ar"] as const;
export type Locale = (typeof LOCALES)[number];
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  sr: "Srpski",
  de: "Deutsch",
  it: "Italiano",
  ar: "العربية",
};

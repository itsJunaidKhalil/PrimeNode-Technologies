"use client";

import { useI18n } from "./I18nProvider";
import type { Locale } from "@/lib/i18n/types";
import { LOCALES, LOCALE_NAMES } from "@/lib/i18n/types";
import { clsx } from "clsx";

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <label className={clsx("inline-flex items-center gap-2", className)}>
      <span className="sr-only">{t("lang.label")}</span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className="text-xs sm:text-sm font-medium text-slate-600 bg-white/90 border border-brand-blue/20 rounded-lg px-2 py-1.5 cursor-pointer hover:border-brand-blue/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
        aria-label={t("lang.label")}
      >
        {LOCALES.map((code) => (
          <option key={code} value={code}>
            {LOCALE_NAMES[code]}
          </option>
        ))}
      </select>
    </label>
  );
}

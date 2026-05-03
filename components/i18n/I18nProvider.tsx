"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "@/lib/i18n/types";
import { LOCALES } from "@/lib/i18n/types";
import { getMessage } from "@/lib/i18n/messages";
import type { MessageKey } from "@/lib/i18n/messages";

const STORAGE_KEY = "primenode-locale";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw && LOCALES.includes(raw as Locale)) return raw as Locale;
  return "en";
}

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: MessageKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setLocaleState(readStoredLocale());
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "zh" ? "zh-CN" : next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale, mounted]);

  const t = useCallback(
    (key: MessageKey) => getMessage(locale, key),
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}

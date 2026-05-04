"use client";

import type { ReactNode } from "react";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { MessageKey } from "@/lib/i18n/messages";

export interface PageHeroProps {
  eyebrow?: string;
  eyebrowKey?: MessageKey;
  title: ReactNode;
  description?: string;
  descriptionKey?: MessageKey;
  action?: ReactNode;
}

export default function PageHero({
  eyebrow,
  eyebrowKey,
  title,
  description,
  descriptionKey,
  action,
}: PageHeroProps) {
  const { t } = useI18n();
  const eyebrowText = eyebrowKey ? t(eyebrowKey) : eyebrow ?? "";
  const descriptionText = descriptionKey ? t(descriptionKey) : description ?? "";

  return (
    <section className="relative bg-white pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-brand-blue/10">
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full border-[24px] border-brand-blue/10 max-md:opacity-50 max-md:scale-[0.85] max-md:-left-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-7rem] top-20 h-80 w-80 rounded-[3rem] border-[18px] border-brand-navy/10 rotate-12 max-md:opacity-50 max-md:scale-90 max-md:right-[-5rem]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[42%] bottom-[-6rem] h-56 w-56 rounded-full border-[14px] border-brand-blue/10 max-md:hidden"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          <span className="inline-flex text-sm font-semibold tracking-widest uppercase text-brand-blue mb-3 bg-white/80 border border-brand-blue/20 rounded-full px-4 py-1.5 mx-auto lg:mx-0">
            {eyebrowText}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy tracking-tight mb-5 sm:mb-6 text-balance">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 text-balance">
            {descriptionText}
          </p>
          {action ? (
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start items-stretch sm:items-center max-w-md mx-auto lg:max-w-none lg:mx-0 w-full sm:w-auto">
              {action}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

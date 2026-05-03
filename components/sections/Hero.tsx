"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";

const badgeIcons = [Shield, Zap, Globe] as const;
const badgeKeys = ["badge.eu", "badge.fast", "badge.nationwide"] as const;

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-0 md:min-h-[calc(100vh-1px)] flex items-center bg-white overflow-hidden border-b border-brand-blue/10">
      {/* Decorative shapes — lighter on mobile */}
      <div
        className="pointer-events-none absolute -left-16 top-16 h-48 w-48 sm:-left-24 sm:top-24 sm:h-72 sm:w-72 rounded-full border-[18px] sm:border-[24px] border-brand-blue/10 max-md:opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-16 h-56 w-56 sm:right-[-7rem] sm:top-20 sm:h-80 sm:w-80 rounded-[2rem] sm:rounded-[3rem] border-[14px] sm:border-[18px] border-brand-navy/10 rotate-12 max-md:opacity-35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/3 bottom-[-4rem] h-40 w-40 sm:left-[42%] sm:bottom-[-6rem] sm:h-56 sm:w-56 rounded-full border-[12px] sm:border-[14px] border-brand-blue/10 max-md:hidden"
        aria-hidden
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[15%] top-[20%] h-12 w-12 sm:h-16 sm:w-16 rounded-xl border-2 border-brand-blue/25 bg-white max-md:opacity-60"
        aria-hidden
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[8%] bottom-[15%] h-9 w-9 sm:h-10 sm:w-10 rounded-full border-2 border-brand-navy/25 bg-white max-md:hidden"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-24 items-center">
          <div className="relative z-10 lg:pr-6">
            <div>
              <span className="inline-flex items-center gap-2 bg-white border border-brand-blue/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium mb-5 sm:mb-6 text-brand-navy shadow-sm max-w-full">
                <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse shrink-0" />
                <span className="text-left leading-snug">{t("hero.badge")}</span>
              </span>
            </div>

            <h1 className="text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold tracking-tight">
              <span className="block text-brand-navy lg:whitespace-nowrap">
                {t("hero.line1Before")}
                <span className="text-brand-blue">{t("hero.line1Accent")}</span>
              </span>
              {(t("hero.line2Accent") || t("hero.line2After")) && (
                <span className="block text-brand-navy mt-1 md:mt-2 lg:whitespace-nowrap">
                  <span className="text-brand-blue">{t("hero.line2Accent")}</span>
                  {t("hero.line2After")}
                </span>
              )}
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {t("hero.subtitle")}
            </p>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto justify-center">
                {t("hero.ctaPrimary")} <ArrowRight size={18} />
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center border-brand-navy/25 text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy"
              >
                {t("hero.ctaSecondary")}
              </Button>
            </div>

            <div className="mt-10 sm:mt-12 flex flex-wrap gap-2 sm:gap-3">
              {badgeKeys.map((key, i) => {
                const Icon = badgeIcons[i];
                return (
                  <div
                    key={key}
                    className="flex items-center gap-2 bg-white border border-brand-blue/20 rounded-full px-3 py-2 sm:px-4 shadow-sm max-w-full"
                  >
                    <Icon size={14} className="text-brand-blue shrink-0" />
                    <span className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">
                      {t(key)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:block relative z-10 lg:pl-4">
            <div className="relative">
              <div className="bg-white rounded-3xl border border-brand-blue/20 p-8 shadow-[0_24px_80px_rgba(11,82,236,0.12)]">
                <p className="text-slate-500 text-sm font-medium tracking-wide uppercase mb-4">
                  {t("hero.coreOps")}
                </p>
                <div className="space-y-3">
                  {[
                    {
                      title: "On-Site IT Support",
                      desc: "Field engineers across China",
                      color: "bg-brand-blue",
                    },
                    {
                      title: "Staging & Validation",
                      desc: "Pre-deployment QA & testing",
                      color: "bg-emerald-500",
                    },
                    {
                      title: "Data Center Services",
                      desc: "Rack, stack & cabling",
                      color: "bg-purple-500",
                    },
                    {
                      title: "Local Coordination",
                      desc: "EU timezone aligned support",
                      color: "bg-orange-500",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 bg-brand-slate/70 rounded-xl p-4 border border-brand-blue/10"
                    >
                      <div className={`w-2.5 h-2.5 rounded-full ${item.color} shrink-0`} />
                      <div>
                        <p className="text-brand-navy font-medium text-sm">{item.title}</p>
                        <p className="text-slate-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-5 -right-5 bg-brand-blue rounded-xl p-4 shadow-lg shadow-brand-blue/30">
                <p className="text-white/90 text-xs font-medium">Coverage</p>
                <p className="text-white text-2xl font-bold mt-0.5">4+</p>
                <p className="text-white/80 text-xs">Major Cities</p>
              </div>

              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 border border-brand-blue/20 shadow-md">
                <p className="text-slate-500 text-xs font-medium">Quality</p>
                <p className="text-brand-navy text-2xl font-bold mt-0.5">100%</p>
                <p className="text-slate-400 text-xs">Pre-validated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

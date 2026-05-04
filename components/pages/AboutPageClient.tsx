"use client";

import { Target, Eye, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";
import PageHero from "@/components/layout/PageHero";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { MessageKey } from "@/lib/i18n/messages";

const phaseNums = [1, 2, 3, 4] as const;
const activeByPhase: Record<number, boolean> = { 1: true, 2: true, 3: false, 4: false };

const valueIdx = [0, 1, 2, 3] as const;

const cities: { cityKey: MessageKey; roleKey: MessageKey; primary: boolean }[] = [
  { cityKey: "page.about.city.sz", roleKey: "page.about.cityRole.hq", primary: true },
  { cityKey: "page.about.city.sh", roleKey: "page.about.cityRole.active", primary: false },
  { cityKey: "page.about.city.bj", roleKey: "page.about.cityRole.active", primary: false },
  { cityKey: "page.about.city.gz", roleKey: "page.about.cityRole.active", primary: false },
];

export default function AboutPageClient() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrowKey="page.about.eyebrow"
        title={
          <>
            {t("page.about.titleBefore")}
            <span className="text-brand-blue">{t("page.about.titleAccent")}</span>
          </>
        }
        descriptionKey="page.about.desc"
        action={
          <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto justify-center">
            {t("page.about.cta")} <ArrowRight size={18} />
          </Button>
        }
      />

      <SectionWrapper background="white">
        <div className="grid md:grid-cols-2 gap-8 mb-16 text-center md:text-left">
          <div className="bg-white/85 backdrop-blur rounded-2xl p-8 border border-brand-blue/20 shadow-sm">
            <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mb-5 mx-auto md:mx-0">
              <Eye size={22} className="text-white" />
            </div>
            <h2 className="text-brand-navy text-2xl font-bold mb-3">{t("page.about.visionTitle")}</h2>
            <p className="text-slate-600 leading-relaxed">{t("page.about.visionBody")}</p>
          </div>

          <div className="bg-brand-navy rounded-2xl p-8 shadow-[0_18px_38px_rgba(11,82,236,0.35)]">
            <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mb-5 mx-auto md:mx-0">
              <Target size={22} className="text-white" />
            </div>
            <h2 className="text-white text-2xl font-bold mb-3">{t("page.about.missionTitle")}</h2>
            <p className="text-slate-300 leading-relaxed">{t("page.about.missionBody")}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <SectionHeading
              eyebrow={t("page.about.whoEyebrow")}
              title={t("page.about.whoTitle")}
              align="left"
            />
            <div className="space-y-4 text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>{t("page.about.whoP1")}</p>
              <p>{t("page.about.whoP2")}</p>
              <p>{t("page.about.whoP3")}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {valueIdx.map((i) => (
              <div
                key={i}
                className="bg-white/85 backdrop-blur rounded-xl p-5 border border-brand-blue/15 shadow-sm text-left"
              >
                <CheckCircle size={20} className="text-brand-blue mb-3" />
                <h3 className="text-brand-navy font-semibold mb-2">
                  {t(`page.about.v${i}.title` as MessageKey)}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {t(`page.about.v${i}.desc` as MessageKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <SectionHeading
          eyebrow={t("page.about.strategyEyebrow")}
          title={t("page.about.strategyTitle")}
          subtitle={t("page.about.strategySub")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phaseNums.map((n, index) => {
            const active = activeByPhase[n] ?? false;
            const titleKey = `page.about.ph${n}.title` as MessageKey;
            const descKey = `page.about.ph${n}.desc` as MessageKey;
            return (
              <div
                key={n}
                className={`relative rounded-xl p-6 border-2 ${
                  active
                    ? "bg-white border-brand-blue shadow-[0_16px_34px_rgba(11,82,236,0.2)]"
                    : "bg-white border-slate-200 opacity-80"
                }`}
              >
                {active && (
                  <span className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {t("page.about.active")}
                  </span>
                )}
                <div className="w-10 h-10 bg-brand-blue-light rounded-lg flex items-center justify-center mb-4">
                  <span className="text-brand-blue text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-brand-blue text-xs font-semibold tracking-wide uppercase mb-1">
                  {t("page.about.phaseLabel")} {n}
                </p>
                <h3 className="text-brand-navy font-semibold mb-2">{t(titleKey)}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t(descKey)}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <SectionHeading
          eyebrow={t("page.about.coverageEyebrow")}
          title={t("page.about.coverageTitle")}
          subtitle={t("page.about.coverageSub")}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cities.map((loc) => (
            <div
              key={loc.cityKey}
              className={`text-center rounded-xl p-6 border-2 ${
                loc.primary
                  ? "bg-brand-navy border-brand-navy text-white"
                  : "bg-white border-slate-200"
              }`}
            >
              <MapPin
                size={24}
                className={`mx-auto mb-3 ${loc.primary ? "text-brand-blue" : "text-brand-blue"}`}
              />
              <h3 className={`font-bold text-lg ${loc.primary ? "text-white" : "text-brand-navy"}`}>
                {t(loc.cityKey)}
              </h3>
              <p className={`text-sm mt-1 ${loc.primary ? "text-slate-300" : "text-slate-500"}`}>
                {t(loc.roleKey)}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">{t("page.about.coverageFoot")}</p>
      </SectionWrapper>

      <CTABanner
        titleKey="cta.about.title"
        subtitleKey="cta.about.subtitle"
        primaryLabelKey="cta.about.primary"
        primaryHref="/contact"
        secondaryLabelKey="cta.about.secondary"
        secondaryHref="/services"
      />
    </>
  );
}

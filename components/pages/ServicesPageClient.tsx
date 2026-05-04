"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import { services } from "@/lib/services";
import { svcKey } from "@/lib/i18n/service-keys";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { MessageKey } from "@/lib/i18n/messages";

const marketIdx = [0, 1, 2, 3] as const;

export default function ServicesPageClient() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrowKey="page.services.eyebrow"
        title={
          <>
            <span className="text-brand-blue">{t("page.services.titleAccent")}</span>
            {t("page.services.titleRest")}
          </>
        }
        descriptionKey="page.services.desc"
        action={
          <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto justify-center">
            {t("page.services.cta")} <ArrowRight size={18} />
          </Button>
        }
      />

      <SectionWrapper background="white">
        <SectionHeading
          eyebrow={t("page.services.activeEyebrow")}
          title={t("page.services.activeTitle")}
          subtitle={t("page.services.activeSub")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const p = service.i18nPrefix;
            return (
              <article
                key={service.slug}
                className="bg-white rounded-2xl border border-brand-blue/15 p-6 hover:border-brand-blue/40 hover:shadow-[0_14px_32px_rgba(11,82,236,0.14)] transition-all"
              >
                <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-brand-blue" />
                </div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-2">
                  {t("page.services.servicePrefix")} {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="text-xl font-bold text-brand-navy mb-2">{t(svcKey(p, "title"))}</h2>
                <p className="text-sm text-brand-blue font-semibold mb-3">{t(svcKey(p, "tagline"))}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{t(svcKey(p, "short"))}</p>
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((_, fi) => (
                    <p key={fi} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-brand-blue mt-0.5 shrink-0" />
                      {t(svcKey(p, `f${fi}`))}
                    </p>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button href={`/services/${service.slug}`} variant="outline" size="sm" className="w-full">
                    {t("page.services.viewDetails")}
                  </Button>
                  <Button href="/contact" variant="primary" size="sm" className="w-full">
                    {t("page.services.getQuote")}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-blue/15 bg-brand-blue-light/40 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <p className="text-sm text-slate-600 leading-relaxed text-center lg:text-left lg:max-w-2xl lg:flex-1">
              {t("page.services.helpP")}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-end gap-3 sm:gap-4 shrink-0">
              <Button href="/contact" variant="primary" size="md" className="w-full sm:w-auto justify-center">
                {t("page.services.helpCta")} <ArrowRight size={16} />
              </Button>
              <Link
                href="/about"
                className="inline-flex items-center justify-center sm:justify-start text-sm font-semibold text-brand-blue hover:text-brand-blue-hover py-2"
              >
                {t("page.services.helpLink")}
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <SectionHeading
          eyebrow={t("page.services.marketsEyebrow")}
          title={t("page.services.marketsTitle")}
          subtitle={t("page.services.marketsSub")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketIdx.map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-blue/30 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-brand-blue-light rounded-lg flex items-center justify-center mb-4">
                <CheckCircle size={18} className="text-brand-blue" />
              </div>
              <h3 className="text-brand-navy font-semibold mb-2">
                {t(`page.services.m${i}.title` as MessageKey)}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t(`page.services.m${i}.desc` as MessageKey)}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner
        titleKey="cta.services.title"
        subtitleKey="cta.services.subtitle"
        primaryLabelKey="cta.services.primary"
        primaryHref="/contact"
        secondaryLabelKey="cta.services.secondary"
        secondaryHref="/about"
      />
    </>
  );
}

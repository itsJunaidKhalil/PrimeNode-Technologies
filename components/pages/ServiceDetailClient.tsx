"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import { services } from "@/lib/services";
import { svcKey } from "@/lib/i18n/service-keys";
import { useI18n } from "@/components/i18n/I18nProvider";

interface ServiceDetailClientProps {
  slug: string;
}

export default function ServiceDetailClient({ slug }: ServiceDetailClientProps) {
  const { t } = useI18n();
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  const Icon = service.icon;
  const p = service.i18nPrefix;
  const title = t(svcKey(p, "title"));
  const scopeTitle = t("svcDetail.scopeTitle").replace("{name}", title);

  return (
    <>
      <PageHero
        eyebrowKey="svcDetail.eyebrow"
        title={<span className="text-brand-blue">{title}</span>}
        descriptionKey={svcKey(p, "tagline")}
        action={
          <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto justify-center">
            {t("svcDetail.discuss")} <ArrowRight size={18} />
          </Button>
        }
      />

      <SectionWrapper background="white">
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 items-start text-center lg:text-left">
          <div>
            <SectionHeading title={t("svcDetail.overview")} align="left" />
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t(svcKey(p, "long"))}
            </p>
          </div>
          <div className="bg-brand-blue-light/45 border border-brand-blue/20 rounded-2xl p-6 text-left">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 border border-brand-blue/20">
              <Icon size={22} className="text-brand-blue" />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{t("svcDetail.sidebar")}</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="light">
        <SectionHeading
          eyebrow={t("svcDetail.scopeEyebrow")}
          title={scopeTitle}
          subtitle={t("svcDetail.scopeSub")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.features.map((_, fi) => (
            <div key={fi} className="bg-white rounded-xl border border-brand-blue/15 p-4 flex gap-3 text-left">
              <CheckCircle size={16} className="text-brand-blue mt-0.5 shrink-0" />
              <p className="text-sm text-slate-600">{t(svcKey(p, `f${fi}`))}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner
        title={`${t("svcDetail.ctaTitlePrefix")}${title}${t("svcDetail.ctaTitleSuffix")}`}
        subtitleKey="svcDetail.ctaSub"
        primaryLabelKey="svcDetail.quote"
        primaryHref="/contact"
        secondaryLabelKey="svcDetail.viewAll"
        secondaryHref="/services"
      />
    </>
  );
}

"use client";

import { MapPin, Mail, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import PageHero from "@/components/layout/PageHero";
import { useI18n } from "@/components/i18n/I18nProvider";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactPageClient() {
  const { t } = useI18n();

  const contactBlocks = [
    {
      icon: MapPin,
      labelKey: "page.contact.labelOffice" as const,
      value: t("footer.address"),
      href: undefined as string | undefined,
    },
    {
      icon: Mail,
      labelKey: "page.contact.labelEmail" as const,
      value: "info@primenodetech.com",
      href: "mailto:info@primenodetech.com",
    },
    {
      icon: Phone,
      labelKey: "page.contact.labelPhone" as const,
      value: "+971 50 919 9087",
      href: "tel:+971509199087",
    },
    {
      icon: Clock,
      labelKey: "page.contact.labelResponse" as const,
      value: t("page.contact.responseValue"),
      href: undefined as string | undefined,
    },
  ] as const;

  return (
    <>
      <PageHero
        eyebrowKey="page.contact.eyebrow"
        title={
          <>
            {t("page.contact.titleBefore")}
            <span className="text-brand-blue">{t("page.contact.titleAccent")}</span>
          </>
        }
        descriptionKey="page.contact.desc"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 bg-white/70 backdrop-blur rounded-2xl border border-brand-blue/15 p-6 text-center lg:text-left">
              <h2 className="text-2xl font-bold text-brand-navy mb-2">{t("page.contact.asideTitle")}</h2>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                {t("page.contact.asideIntro")}
              </p>

              <div className="space-y-5 mb-8">
                {contactBlocks.map(({ icon: Icon, labelKey, value, href }) => (
                  <div key={labelKey} className="flex items-start gap-4 justify-center lg:justify-start">
                    <div className="w-10 h-10 bg-brand-blue-light rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-brand-blue" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">
                        {t(labelKey)}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-brand-navy font-medium hover:text-brand-blue transition-colors whitespace-pre-line"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-brand-navy font-medium whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-brand-blue/10 pt-6">
                <p className="text-slate-400 text-sm mb-3">{t("page.contact.connect")}</p>
                <a
                  href="https://www.linkedin.com/company/primenodetech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#0077B5] text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#006097] transition-colors shadow-[0_4px_12px_rgba(0,119,181,0.35)]"
                >
                  <LinkedinIcon size={16} />
                  {t("page.contact.linkedin")}
                </a>
              </div>

              <div className="mt-6 bg-brand-blue-light/80 border border-brand-blue/20 rounded-xl p-4 text-left">
                <p className="text-brand-navy text-sm font-semibold mb-1">{t("page.contact.euTitle")}</p>
                <p className="text-slate-600 text-sm">{t("page.contact.euBody")}</p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

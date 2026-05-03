"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const footerLinks = {
  company: [
    { labelKey: "nav.about" as const, href: "/about" },
    { labelKey: "nav.services" as const, href: "/services" },
    { labelKey: "nav.contact" as const, href: "/contact" },
  ],
  services: [
    { label: "On-site IT Support", href: "/services/on-site-it-support" },
    { label: "Data Center Services", href: "/services/data-center-services" },
    { label: "Staging Services", href: "/services/staging-services" },
    { label: "Pre-Deployment Validation", href: "/services/pre-deployment-validation" },
    { label: "Deployment Assurance", href: "/services/deployment-assurance" },
    { label: "Local Coordination", href: "/services/local-coordination" },
  ],
};

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-brand-navy relative overflow-hidden border-t border-brand-blue/10">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 sm:pt-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-1 text-center sm:text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/logos/logo-primary.png"
                alt="PrimeNode Technologies"
                width={340}
                height={102}
                className="h-14 sm:h-16 w-auto mx-auto sm:mx-0 mb-5"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-sm mx-auto sm:mx-0">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/company/primenodetech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-blue-light hover:bg-brand-blue text-brand-blue hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://primenodetech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-blue-light hover:bg-brand-blue text-brand-blue hover:text-white flex items-center justify-center transition-colors"
                aria-label="Website"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-4">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 hover:text-brand-blue text-sm transition-colors inline-block py-1"
                >
                  {t("nav.home")}
                </Link>
              </li>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-brand-blue text-sm transition-colors inline-block py-1"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2.5 sm:columns-1">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-brand-blue text-sm transition-colors inline-block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4 max-w-xs mx-auto sm:mx-0">
              <li className="flex items-start gap-3 justify-center sm:justify-start text-left">
                <MapPin size={16} className="text-brand-blue mt-0.5 shrink-0" />
                <span className="text-slate-600 text-sm whitespace-pre-line">
                  {t("footer.address")}
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Mail size={16} className="text-brand-blue shrink-0" />
                <a
                  href="mailto:info@primenodetech.com"
                  className="text-slate-600 hover:text-brand-blue text-sm transition-colors break-all"
                >
                  info@primenodetech.com
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Phone size={16} className="text-brand-blue shrink-0" />
                <a
                  href="tel:+971509199087"
                  className="text-slate-600 hover:text-brand-blue text-sm transition-colors"
                >
                  +971 50 919 9087
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-blue/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {t("footer.legal").replace("{year}", String(year))}
          </p>
          <p className="text-slate-400 text-xs sm:text-sm">{t("footer.wfoe")}</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { ChevronDown, Menu, X } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";
import type { MessageKey } from "@/lib/i18n/messages";

const serviceLinks: { href: string; labelKey: MessageKey }[] = [
  { href: "/services/on-site-it-support", labelKey: "nav.svc.onsite" },
  { href: "/services/data-center-services", labelKey: "nav.svc.datacenter" },
  { href: "/services/staging-services", labelKey: "nav.svc.staging" },
  { href: "/services/pre-deployment-validation", labelKey: "nav.svc.validation" },
  { href: "/services/deployment-assurance", labelKey: "nav.svc.assurance" },
  { href: "/services/local-coordination", labelKey: "nav.svc.coordination" },
];

export default function Navbar() {
  const { t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "brand-glass border-b",
        isScrolled ? "border-brand-blue/15 shadow-[0_8px_22px_rgba(15,23,42,0.09)]" : "border-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 min-h-[4.25rem] sm:min-h-[4.75rem] py-2">
          <Link href="/" className="flex items-center shrink-0 min-w-0">
            <Image
              src="/logos/logo-primary.png"
              alt="PrimeNode Technologies"
              width={340}
              height={102}
              className="h-[3.35rem] sm:h-14 md:h-16 lg:h-[4.25rem] w-auto max-w-[min(72vw,300px)] sm:max-w-none object-contain object-left"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/"
              className="font-medium text-slate-700 hover:text-brand-blue transition-colors duration-200 text-sm tracking-wide relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all hover:after:w-full"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className="font-medium text-slate-700 hover:text-brand-blue transition-colors duration-200 text-sm tracking-wide relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all hover:after:w-full"
            >
              {t("nav.about")}
            </Link>
            <div className="relative group">
              <Link
                href="/services"
                className="font-medium text-slate-700 hover:text-brand-blue transition-colors duration-200 text-sm tracking-wide inline-flex items-center gap-1"
              >
                {t("nav.services")} <ChevronDown size={14} className="mt-0.5" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-72 bg-white border border-brand-blue/15 rounded-xl shadow-lg p-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2.5 text-sm text-slate-700 rounded-lg hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
                    >
                      {t(link.labelKey)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="font-medium text-slate-700 hover:text-brand-blue transition-colors duration-200 text-sm tracking-wide relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all hover:after:w-full"
            >
              {t("nav.contact")}
            </Link>
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="bg-brand-blue text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 shadow-[0_4px_12px_rgba(11,82,236,0.35)] hover:bg-brand-blue-hover"
            >
              {t("nav.getQuote")}
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2 shrink-0">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:bg-brand-blue-light transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMobileOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-brand-blue/10 py-4 px-2 shadow-lg rounded-b-2xl">
            <Link
              href="/"
              onClick={() => setIsMobileOpen(false)}
              className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-brand-blue-light hover:text-brand-blue transition-colors min-h-[44px] flex items-center"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileOpen(false)}
              className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-brand-blue-light hover:text-brand-blue transition-colors min-h-[44px] flex items-center"
            >
              {t("nav.about")}
            </Link>
            <button
              onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-brand-blue-light hover:text-brand-blue transition-colors min-h-[44px]"
            >
              {t("nav.services")}{" "}
              <ChevronDown size={16} className={clsx("transition-transform shrink-0", isMobileServicesOpen && "rotate-180")} />
            </button>
            {isMobileServicesOpen && (
              <div className="px-2 pb-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-600 rounded-lg hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-brand-blue-light hover:text-brand-blue transition-colors min-h-[44px] flex items-center"
            >
              {t("nav.contact")}
            </Link>
            <div className="mt-3 px-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="block text-center bg-brand-blue text-white px-5 py-3.5 rounded-lg font-semibold hover:bg-brand-blue-hover transition-colors min-h-[48px] flex items-center justify-center"
              >
                {t("nav.getQuote")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

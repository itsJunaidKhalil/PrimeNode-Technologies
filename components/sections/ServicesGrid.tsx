"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Wrench,
  Server,
  PackageCheck,
  ShieldCheck,
  CheckSquare,
  Users,
  ArrowRight,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { useI18n } from "@/components/i18n/I18nProvider";
import { services } from "@/lib/services";
import { svcKey } from "@/lib/i18n/service-keys";

const icons = [Wrench, Server, PackageCheck, ShieldCheck, CheckSquare, Users] as const;

export default function ServicesGrid() {
  const { t } = useI18n();

  return (
    <SectionWrapper background="light" id="services">
      <SectionHeading
        eyebrow={t("svcGrid.eyebrow")}
        title={t("svcGrid.title")}
        subtitle={t("svcGrid.subtitle")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => {
          const Icon = icons[index] ?? Wrench;
          const p = service.i18nPrefix;
          return (
            <motion.div
              key={service.slug}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block bg-white/90 backdrop-blur rounded-2xl border border-brand-blue/15 p-6 md:p-8 hover:shadow-[0_20px_48px_rgba(11,82,236,0.2)] hover:border-brand-blue/35 hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">
                  {t(svcKey(p, "title"))}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {t(svcKey(p, "short"))}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
                  {t("svcGrid.learnMore")} <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-[0_12px_30px_rgba(11,82,236,0.35)] hover:bg-brand-blue-hover hover:-translate-y-0.5"
        >
          {t("svcGrid.viewAll")} <ArrowRight size={18} />
        </Link>
      </div>
    </SectionWrapper>
  );
}

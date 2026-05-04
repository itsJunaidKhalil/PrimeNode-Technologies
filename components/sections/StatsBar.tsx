"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { MessageKey } from "@/lib/i18n/messages";

const statKeys: { value: MessageKey; label: MessageKey; sub: MessageKey }[] = [
  { value: "stats.0.value", label: "stats.0.label", sub: "stats.0.sub" },
  { value: "stats.1.value", label: "stats.1.label", sub: "stats.1.sub" },
  { value: "stats.2.value", label: "stats.2.label", sub: "stats.2.sub" },
  { value: "stats.3.value", label: "stats.3.label", sub: "stats.3.sub" },
];

export default function StatsBar() {
  const { t } = useI18n();

  return (
    <section className="bg-white/70 backdrop-blur py-12 border-b border-brand-blue/10 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 brand-grid-pattern opacity-20" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y-2 md:divide-y-0 md:divide-x divide-brand-blue/10">
          {statKeys.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center px-4 pt-8 md:pt-0"
            >
              <p className="text-4xl font-bold text-brand-blue tracking-tight">{t(stat.value)}</p>
              <p className="text-sm font-semibold text-brand-blue mt-1">{t(stat.label)}</p>
              <p className="text-xs text-slate-400 mt-1">{t(stat.sub)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { MessageKey } from "@/lib/i18n/messages";

const stepKeys: { num: MessageKey; title: MessageKey; desc: MessageKey }[] = [
  { num: "how.s0.num", title: "how.s0.title", desc: "how.s0.desc" },
  { num: "how.s1.num", title: "how.s1.title", desc: "how.s1.desc" },
  { num: "how.s2.num", title: "how.s2.title", desc: "how.s2.desc" },
];

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <SectionWrapper background="blue-light" id="how-it-works">
      <SectionHeading
        eyebrow={t("how.eyebrow")}
        title={t("how.title")}
        subtitle={t("how.subtitle")}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-brand-blue/30" />

        {stepKeys.map((step, index) => (
          <motion.div
            key={step.num}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="relative text-center"
          >
            <div className="w-20 h-20 bg-white rounded-2xl border border-brand-blue/20 flex items-center justify-center mx-auto mb-6 shadow-[0_10px_28px_rgba(11,82,236,0.18)]">
              <span className="text-2xl font-bold text-brand-blue">{t(step.num)}</span>
            </div>
            <h3 className="text-brand-navy font-semibold text-lg mb-3">{t(step.title)}</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">{t(step.desc)}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

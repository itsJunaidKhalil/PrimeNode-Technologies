"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Clock, Shield } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { MessageKey } from "@/lib/i18n/messages";

const reasonIcons = [Shield, CheckCircle, Clock, TrendingUp] as const;
const reasonKeys: { title: MessageKey; desc: MessageKey }[] = [
  { title: "why.r0.title", desc: "why.r0.desc" },
  { title: "why.r1.title", desc: "why.r1.desc" },
  { title: "why.r2.title", desc: "why.r2.desc" },
  { title: "why.r3.title", desc: "why.r3.desc" },
];

const highlightKeys = ["why.hl0", "why.hl1", "why.hl2", "why.hl3", "why.hl4", "why.hl5"] as const;

export default function WhyChooseUs() {
  const { t } = useI18n();

  return (
    <SectionWrapper background="white" id="why-us">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <SectionHeading
            eyebrow={t("why.eyebrow")}
            title={t("why.title")}
            subtitle={t("why.subtitle")}
            align="left"
          />

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 max-w-2xl mx-auto lg:mx-0">
            {highlightKeys.map((key) => (
              <li key={key} className="flex items-center gap-3 text-sm text-slate-600 text-left">
                <CheckCircle size={16} className="text-brand-blue shrink-0" />
                {t(key)}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasonKeys.map((reason, index) => {
            const Icon = reasonIcons[index];
            return (
              <motion.div
                key={reason.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/85 backdrop-blur rounded-2xl p-5 border border-brand-blue/15 shadow-sm"
              >
                <div className="w-10 h-10 bg-brand-blue-light rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-blue" />
                </div>
                <h3 className="text-brand-navy font-semibold text-sm mb-2">{t(reason.title)}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{t(reason.desc)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

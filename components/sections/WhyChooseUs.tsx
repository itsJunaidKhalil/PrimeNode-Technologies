"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Clock, Shield } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Shield,
    title: "EU Experience + China Presence",
    description:
      "Unique bridge between European operational standards and on-the-ground Chinese execution. We understand both worlds deeply.",
  },
  {
    icon: CheckCircle,
    title: "High-Quality Staging & Validation",
    description:
      "Every device goes through our rigorous pre-deployment QA — power testing, fiber OTDR, firmware validation — before it ever reaches site.",
  },
  {
    icon: Clock,
    title: "Fast Response, EU Time-Zone Aligned",
    description:
      "Real-time communication with European clients during EU business hours. No more waking up to overnight surprises.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Execution Model",
    description:
      "From single-engineer dispatch to nationwide multi-city deployments. We scale with your project — no bloated overheads.",
  },
];

const highlights = [
  "WFOE legally registered in Shenzhen",
  "Nationwide coverage across 4+ major cities",
  "Founder-led quality assurance",
  "Aligned with EU time zones",
  "Transparent project reporting",
  "Cost-efficient vs. overseas deployments",
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper background="white" id="why-us">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Why PrimeNode"
            title="The China Execution Partner Built for Global Standards"
            subtitle="We don't just have a presence in China — we operate with the discipline and standards your global clients expect."
            align="left"
          />

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle size={16} className="text-brand-blue shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
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
                <h3 className="text-brand-navy font-semibold text-sm mb-2">{reason.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

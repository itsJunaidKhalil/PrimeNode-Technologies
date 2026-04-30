"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Cities Covered", sub: "Shenzhen · Shanghai · Beijing · Guangzhou" },
  { value: "100%", label: "Pre-Validated", sub: "Every deployment QA-checked" },
  { value: "EU TZ", label: "Support Aligned", sub: "Real-time coordination" },
  { value: "WFOE", label: "Legally Registered", sub: "Fully compliant China entity" },
];

export default function StatsBar() {
  return (
    <section className="bg-white/70 backdrop-blur py-12 border-b border-brand-blue/10 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 brand-grid-pattern opacity-20" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y-2 md:divide-y-0 md:divide-x divide-brand-blue/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center px-4 pt-8 md:pt-0"
            >
              <p className="text-4xl font-bold text-brand-blue tracking-tight">{stat.value}</p>
              <p className="text-sm font-semibold text-brand-blue mt-1">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-1">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

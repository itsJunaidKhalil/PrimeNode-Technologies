"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Submit Your Project Brief",
    description:
      "Tell us about your project requirements, location, timeline, and scope. We'll respond with a detailed proposal within 24 hours.",
  },
  {
    number: "02",
    title: "We Plan & Stage",
    description:
      "Our team receives your equipment, runs full pre-deployment validation, configures devices, and prepares everything for site installation.",
  },
  {
    number: "03",
    title: "We Execute On-Site",
    description:
      "Our field engineers deploy on location, follow your SOPs, and deliver real-time status updates — keeping you fully in control.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper background="blue-light" id="how-it-works">
      <SectionHeading
        eyebrow="The Process"
        title="Simple. Reliable. Repeatable."
        subtitle="We've built a process that takes complexity off your plate and puts quality delivery on the table every time."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-brand-blue/30" />

        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="relative text-center"
          >
            <div className="w-20 h-20 bg-white rounded-2xl border border-brand-blue/20 flex items-center justify-center mx-auto mb-6 shadow-[0_10px_28px_rgba(11,82,236,0.18)]">
              <span className="text-2xl font-bold text-brand-blue">{step.number}</span>
            </div>
            <h3 className="text-brand-navy font-semibold text-lg mb-3">{step.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

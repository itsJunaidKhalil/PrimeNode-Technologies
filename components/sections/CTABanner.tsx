"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Mail } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title = "Ready to Execute Your China IT Project?",
  subtitle = "Partner with PrimeNode and get EU-grade quality with China-speed execution. Let's discuss your project today.",
  primaryLabel = "Get a Free Quote",
  primaryHref = "/contact",
  secondaryLabel = "View Our Services",
  secondaryHref = "/services",
}: CTABannerProps) {
  return (
    <section className="bg-brand-navy py-20 relative overflow-hidden">
      <div className="absolute inset-0 brand-grid-pattern opacity-20" aria-hidden />
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-blue/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-brand-blue-mid text-sm font-semibold tracking-widest uppercase mb-4">
            <Mail size={14} />
            Start a Conversation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button href={primaryHref} variant="primary" size="lg">
              {primaryLabel} <ArrowRight size={18} />
            </Button>
            <Button
              href={secondaryHref}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-brand-navy"
            >
              {secondaryLabel}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

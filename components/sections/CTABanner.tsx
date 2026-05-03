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
    <section className="bg-brand-navy py-16 sm:py-20 relative overflow-hidden">
      {/* Soft glows — tuned for navy */}
      <div className="absolute top-0 right-0 w-[min(90vw,400px)] h-[min(90vw,400px)] bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-[min(80vw,300px)] h-[min(80vw,300px)] bg-brand-blue/15 rounded-full blur-[80px] pointer-events-none" aria-hidden />

      {/* Geometric shapes — readable on dark blue */}
      <div
        className="pointer-events-none absolute top-8 left-[8%] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-white/15 rotate-12"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-10 right-[12%] w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-brand-blue/40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-[6%] w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-white/10 opacity-80 max-lg:hidden"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-16 left-[18%] w-20 h-20 rounded-xl border border-brand-blue/35 rotate-[-8deg] max-md:opacity-60"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full text-white/[0.07]"
        aria-hidden
        preserveAspectRatio="none"
      >
        <line x1="0" y1="35%" x2="100%" y2="35%" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="0" y1="65%" x2="100%" y2="65%" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-[1]">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-brand-blue-mid text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
            <Mail size={14} className="shrink-0" />
            Start a Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 px-1">
            {title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto px-1">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Button href={primaryHref} variant="primary" size="lg" className="w-full sm:w-auto justify-center">
              {primaryLabel} <ArrowRight size={18} />
            </Button>
            <Button
              href={secondaryHref}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto justify-center border-white/30 text-white hover:bg-white hover:text-brand-navy"
            >
              {secondaryLabel}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

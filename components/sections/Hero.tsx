"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

const badges = [
  { icon: Shield, label: "EU-Grade Standards" },
  { icon: Zap, label: "Fast Turnaround" },
  { icon: Globe, label: "China Nationwide" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-1px)] flex items-center bg-white overflow-hidden border-b border-brand-blue/10">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full border-[24px] border-brand-blue/10" aria-hidden />
      <div className="pointer-events-none absolute right-[-7rem] top-20 h-80 w-80 rounded-[3rem] border-[18px] border-brand-navy/10 rotate-12" aria-hidden />
      <div className="pointer-events-none absolute left-[42%] bottom-[-6rem] h-56 w-56 rounded-full border-[14px] border-brand-blue/10" aria-hidden />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[20%] top-[23%] h-16 w-16 rounded-xl border-2 border-brand-blue/25 bg-white"
        aria-hidden
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[12%] bottom-[18%] h-10 w-10 rounded-full border-2 border-brand-navy/25 bg-white"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-24 items-center">
          {/* Left — copy */}
          <div className="relative z-10 lg:pr-6">
            <div>
              <span className="inline-flex items-center gap-2 bg-white border border-brand-blue/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6 text-brand-navy shadow-sm">
                <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
                WFOE Registered · Shenzhen, China
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold tracking-tight leading-[1.06]">
              <span className="block text-brand-navy lg:whitespace-nowrap">
                Your Trusted <span className="text-brand-blue">China IT</span>
              </span>
              <span className="block text-brand-navy mt-1 md:mt-2 lg:whitespace-nowrap">
                <span className="text-brand-blue">Execution</span> Partner
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              We enable global MSPs, system integrators, and IT companies to operate efficiently in China — with local execution built on international standards.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Start Your Project <ArrowRight size={18} />
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-brand-navy/25 text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy"
              >
                Explore Services
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white border border-brand-blue/20 rounded-full px-4 py-2 shadow-sm"
                >
                  <Icon size={14} className="text-brand-blue shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — operations card (light, flat) */}
          <div className="hidden lg:block relative z-10 lg:pl-4">
            <div className="relative">
              <div className="bg-white rounded-3xl border border-brand-blue/20 p-8 shadow-[0_24px_80px_rgba(11,82,236,0.12)]">
                <p className="text-slate-500 text-sm font-medium tracking-wide uppercase mb-4">
                  Core Operations
                </p>
                <div className="space-y-3">
                  {[
                    {
                      title: "On-Site IT Support",
                      desc: "Field engineers across China",
                      color: "bg-brand-blue",
                    },
                    {
                      title: "Staging & Validation",
                      desc: "Pre-deployment QA & testing",
                      color: "bg-emerald-500",
                    },
                    {
                      title: "Data Center Services",
                      desc: "Rack, stack & cabling",
                      color: "bg-purple-500",
                    },
                    {
                      title: "Local Coordination",
                      desc: "EU timezone aligned support",
                      color: "bg-orange-500",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                    className="flex items-center gap-4 bg-brand-slate/70 rounded-xl p-4 border border-brand-blue/10"
                    >
                      <div className={`w-2.5 h-2.5 rounded-full ${item.color} shrink-0`} />
                      <div>
                        <p className="text-brand-navy font-medium text-sm">{item.title}</p>
                        <p className="text-slate-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-5 -right-5 bg-brand-blue rounded-xl p-4 shadow-lg shadow-brand-blue/30">
                <p className="text-white/90 text-xs font-medium">Coverage</p>
                <p className="text-white text-2xl font-bold mt-0.5">4+</p>
                <p className="text-white/80 text-xs">Major Cities</p>
              </div>

              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 border border-brand-blue/20 shadow-md">
                <p className="text-slate-500 text-xs font-medium">Quality</p>
                <p className="text-brand-navy text-2xl font-bold mt-0.5">100%</p>
                <p className="text-slate-400 text-xs">Pre-validated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

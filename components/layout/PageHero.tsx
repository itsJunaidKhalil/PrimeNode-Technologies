import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  action?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  action,
}: PageHeroProps) {
  return (
    <section className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-brand-blue/10">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full border-[24px] border-brand-blue/10" aria-hidden />
      <div className="pointer-events-none absolute right-[-7rem] top-20 h-80 w-80 rounded-[3rem] border-[18px] border-brand-navy/10 rotate-12" aria-hidden />
      <div className="pointer-events-none absolute left-[42%] bottom-[-6rem] h-56 w-56 rounded-full border-[14px] border-brand-blue/10" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-blue mb-3 bg-white/80 border border-brand-blue/20 rounded-full px-4 py-1.5">
            {eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-navy tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            {description}
          </p>
          {action}
        </div>
      </div>
    </section>
  );
}

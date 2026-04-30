import { clsx } from "clsx";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "blue-light" | "navy" | "gradient";
}

const backgroundClasses = {
  white: "bg-white/80 backdrop-blur-[1px]",
  light: "bg-white/65 backdrop-blur-[1px]",
  "blue-light": "bg-brand-blue-light/70",
  navy: "bg-brand-navy",
  gradient: "section-gradient",
};

export default function SectionWrapper({
  children,
  className,
  id,
  background = "white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={clsx(
        "py-20 md:py-28 relative overflow-hidden",
        backgroundClasses[background],
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 brand-grid-pattern opacity-25" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

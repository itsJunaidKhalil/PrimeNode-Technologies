import { clsx } from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "inline-block text-sm font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full border",
            light ? "text-brand-blue-mid" : "text-brand-blue"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-3xl md:text-4xl font-bold tracking-tight",
          light ? "text-white" : "text-brand-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-lg max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-slate-300" : "text-slate-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

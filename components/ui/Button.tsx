import { clsx } from "clsx";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-[0_4px_12px_rgba(11,82,236,0.35)]",
  secondary:
    "bg-brand-navy text-white hover:bg-brand-navy-light shadow-[0_4px_12px_rgba(18,35,89,0.28)]",
  outline:
    "border border-brand-blue/35 text-brand-blue hover:bg-brand-blue hover:text-white",
  ghost:
    "text-brand-blue hover:bg-brand-blue-light",
  white:
    "bg-white text-brand-navy hover:bg-slate-100 shadow-[0_4px_12px_rgba(2,8,23,0.14)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}

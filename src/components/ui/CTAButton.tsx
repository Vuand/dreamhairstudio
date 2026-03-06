"use client";

import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "gold";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-dark shadow-lg hover:shadow-xl",
  secondary:
    "bg-dark-surface text-cream hover:opacity-90 shadow-lg hover:shadow-xl",
  outline:
    "border-2 border-card-border text-brand-dark hover:bg-brand-dark hover:text-cream",
  gold: "bg-brand-gold text-white hover:bg-brand-gold-light hover:text-brand-dark shadow-lg",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 whitespace-nowrap";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

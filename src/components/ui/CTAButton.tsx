"use client";

import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "outline-light" | "gold";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-dark focus-visible:ring-brand-red shadow-lg hover:shadow-xl",
  secondary:
    "bg-dark-surface text-cream hover:opacity-90 focus-visible:ring-brand-gold shadow-lg hover:shadow-xl",
  outline:
    "border-2 border-card-border text-brand-dark hover:bg-brand-dark hover:text-white focus-visible:ring-brand-dark",
  "outline-light":
    "border-2 border-white/25 text-white hover:bg-white hover:text-brand-dark focus-visible:ring-white",
  gold: "bg-brand-gold text-white hover:bg-brand-gold-light hover:text-brand-dark focus-visible:ring-brand-gold shadow-lg",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-7 py-3.5 rounded-full font-sans font-semibold text-base tracking-wide transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

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

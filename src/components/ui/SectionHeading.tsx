interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  overline?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  overline,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {overline && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
          <div className={`h-px w-8 ${light ? "bg-brand-gold/40" : "bg-brand-gold"}`} />
          <span
            className={`text-xs tracking-[0.25em] uppercase font-sans font-medium ${
              light ? "text-brand-gold/70" : "text-brand-gold"
            }`}
          >
            {overline}
          </span>
          <div className={`h-px w-8 ${light ? "bg-brand-gold/40" : "bg-brand-gold"}`} />
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg max-w-2xl ${centered ? "mx-auto" : ""} leading-relaxed ${
            light ? "text-gray-400" : "text-warm-gray"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

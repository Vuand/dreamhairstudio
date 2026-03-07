interface ChevronDividerProps {
  className?: string;
}

export default function ChevronDivider({ className = "" }: ChevronDividerProps) {
  return (
    <div className={`flex items-center justify-center py-2 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/20" />
        <svg
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          className="text-brand-gold/25"
        >
          <path
            d="M4 2L12 10L20 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/20" />
      </div>
    </div>
  );
}

interface ImagePlaceholderProps {
  initials?: string;
  label?: string;
  className?: string;
  icon?: "scissors" | "camera" | "user";
}

export default function ImagePlaceholder({
  initials,
  label = "Photo Coming Soon",
  className = "",
  icon = "user",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(135deg, #ede9e4 0%, #e0d6cc 30%, #d4a574 100%)",
      }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1a1a1a 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative chevron watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
        <svg width="120" height="80" viewBox="0 0 120 80">
          <path d="M20 10L60 50L100 10" stroke="#1a1a1a" strokeWidth="1" fill="none" />
          <path d="M20 30L60 70L100 30" stroke="#1a1a1a" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {initials ? (
          <span className="text-5xl font-serif font-bold text-white/70 drop-shadow-sm">
            {initials}
          </span>
        ) : (
          <svg
            className="w-12 h-12 text-white/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {icon === "scissors" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L7.05 21.192m0-14.142l7.071 7.071m0 0l2.829-2.829M14.121 14.121L19.07 19.07m-9.9-4.95a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243zm8.486 8.486a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243z" />
            )}
            {icon === "camera" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
            )}
            {icon === "user" && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            )}
          </svg>
        )}
        <span className="mt-3 text-[10px] text-white/50 font-sans tracking-wider uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}

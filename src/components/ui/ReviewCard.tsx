import type { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-card rounded-2xl p-7 md:p-8 shadow-sm border border-card-border/50 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
      {/* Decorative quote mark */}
      <span className="absolute top-4 right-6 text-7xl font-serif text-brand-gold/10 leading-none select-none">
        &ldquo;
      </span>

      <div className="relative">
        <div className="flex text-brand-gold mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <blockquote className="text-warm-gray leading-relaxed font-sans text-[15px]">
          &ldquo;{review.text}&rdquo;
        </blockquote>

        <div className="mt-5 flex items-center gap-3">
          {/* Avatar circle with initial */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 flex items-center justify-center">
            <span className="font-serif font-bold text-brand-gold text-sm">
              {review.author[0]}
            </span>
          </div>
          <div>
            <p className="font-sans font-semibold text-brand-dark text-sm">
              {review.author}
            </p>
            <div className="flex items-center gap-2">
              {review.verified && (
                <span className="text-[10px] text-brand-gold font-sans font-medium tracking-wider uppercase">
                  Verified
                </span>
              )}
              <span className="text-[10px] text-warm-gray-light font-sans">
                {new Date(review.date).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { StaffMember } from "@/types";
import ImagePlaceholder from "./ImagePlaceholder";
import Button from "./CTAButton";

interface StaffCardProps {
  staff: StaffMember;
}

export default function StaffCard({ staff }: StaffCardProps) {
  const initials = staff.name
    .replace(/["]/g, "")
    .split(" ")
    .map((n) => n[0])
    .join("");

  const firstName = staff.name.split(" ")[0].replace(/["]/g, "");

  return (
    <div className="group h-full flex flex-col bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-card-border/40 hover:border-brand-gold/20">
      <div className="aspect-[3/4] w-full relative overflow-hidden">
        <ImagePlaceholder
          initials={initials}
          label="Photo Coming Soon"
          className="w-full h-full group-hover:scale-105 transition-transform duration-700"
        />
        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
      </div>
      <div className="p-6 -mt-4 relative flex flex-col flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-serif font-bold text-brand-dark">
              {staff.name}
            </h3>
            <p className="text-brand-gold font-sans text-xs font-semibold mt-0.5 tracking-wider uppercase">
              {staff.role}
            </p>
          </div>
        </div>

        {staff.rating && (
          <div className="flex items-center gap-1.5 mt-3">
            <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-warm-gray font-sans">
              {staff.rating} ({staff.reviewCount})
            </span>
          </div>
        )}

        <p className="text-warm-gray text-sm mt-3 leading-relaxed font-sans">
          {staff.bio}
        </p>

        <div className="mt-auto pt-5">
          <Button
            href={staff.bookingUrl}
            variant="primary"
            external
            className="w-full text-center text-xs py-2.5"
          >
            Book with {firstName}
          </Button>
        </div>
      </div>
    </div>
  );
}

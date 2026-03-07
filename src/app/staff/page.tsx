import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import StaffCard from "@/components/ui/StaffCard";
import Button from "@/components/ui/CTAButton";
import { STAFF, BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the talented barbers and stylists at Dream Hair Studio in Corvallis, OR. Book with Roland, Dalia, Juan 'Chapis', or Benjamin today.",
  openGraph: {
    title: "Meet the Team | Dream Hair Studio Corvallis",
    description:
      "Meet our talented barbers and stylists. Book your appointment with your preferred stylist today.",
  },
};

export default function StaffPage() {
  return (
    <section className="py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            overline="The Dream Team"
            title="Meet Your Stylists"
            subtitle="Talented barbers and stylists dedicated to making you look and feel your best"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAFF.map((member, i) => (
            <AnimatedSection key={member.slug} delay={i * 0.1}>
              <StaffCard staff={member} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-20 relative overflow-hidden bg-card rounded-2xl p-10 md:p-14 text-center border border-card-border/50 shadow-sm">
            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-gold/5 rounded-full -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-red/3 rounded-full translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">
                Not Sure Who to Book With?
              </h3>
              <p className="text-warm-gray font-sans max-w-lg mx-auto mb-8 text-base leading-relaxed">
                No worries! Book a general appointment and we&apos;ll match you
                with the perfect stylist or barber for your needs. You can also
                select your preferred team member during booking.
              </p>
              <Button href={BOOKING_URL} variant="primary" external className="px-10">
                Book an Appointment
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

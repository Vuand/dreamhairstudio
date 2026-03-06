import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import VagaroWidget from "@/components/embeds/VagaroWidget";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your appointment at Dream Hair Studio in Corvallis, OR. Easy online booking for haircuts, styling, color, and barbering services.",
  openGraph: {
    title: "Book an Appointment | Dream Hair Studio Corvallis",
    description: "Easy online booking for haircuts, styling, color, and barbering services.",
  },
};

export default function BookingPage() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            overline="Reserve Your Spot"
            title="Book an Appointment"
            subtitle="Select your service, choose your stylist, and pick a time that works for you"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <VagaroWidget />
        </AnimatedSection>
      </div>
    </section>
  );
}

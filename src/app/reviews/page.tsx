import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ui/ReviewCard";
import Button from "@/components/ui/Button";
import { REVIEWS, BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what our clients say about Dream Hair Studio in Corvallis, OR. 5.0 rating — see verified reviews from happy customers.",
  openGraph: {
    title: "Reviews | Dream Hair Studio Corvallis",
    description: "5.0 rating — read verified reviews from our happy clients.",
  },
};

export default function ReviewsPage() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            overline="Testimonials"
            title="Client Reviews"
            subtitle="Hear from the people who matter most — our clients"
          />
        </AnimatedSection>

        {/* Rating Summary — editorial style */}
        <AnimatedSection direction="scale">
          <div className="bg-card rounded-2xl p-10 md:p-14 text-center mb-14 shadow-sm border border-card-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="text-7xl md:text-8xl font-serif font-bold text-brand-dark italic leading-none">
                5.0
              </div>
              <div className="flex justify-center text-brand-gold mt-4 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-warm-gray font-sans text-sm tracking-wider uppercase">
                Perfect rating from verified customers
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Review Cards */}
        <div className="space-y-6">
          {REVIEWS.map((review, i) => (
            <AnimatedSection key={review.author} delay={i * 0.15} direction={i % 2 === 0 ? "right" : "left"}>
              <ReviewCard review={review} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-3">
              Ready for Your Own Great Experience?
            </h3>
            <p className="text-warm-gray font-sans mb-6">
              Join our growing list of happy clients.
            </p>
            <Button href={BOOKING_URL} variant="primary" external className="px-10">
              Book Your Appointment
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

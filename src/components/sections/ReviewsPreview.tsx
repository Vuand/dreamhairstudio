"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ui/ReviewCard";
import Button from "@/components/ui/Button";
import { REVIEWS } from "@/lib/constants";

export default function ReviewsPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            overline="Testimonials"
            title="What Our Clients Say"
            subtitle="Real reviews from real customers"
          />
        </AnimatedSection>

        {/* 5.0 badge — large, editorial style */}
        <AnimatedSection direction="scale">
          <div className="text-center mb-14">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex flex-col items-center bg-card rounded-2xl px-10 py-6 shadow-sm border border-card-border/50"
            >
              <span className="text-5xl font-serif font-bold text-brand-dark italic">5.0</span>
              <div className="flex text-brand-gold mt-2 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-warm-gray font-sans text-xs tracking-wider uppercase">
                Perfect Rating
              </span>
            </motion.div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review, i) => (
            <AnimatedSection key={review.author} delay={i * 0.15} direction={i === 0 ? "right" : "left"}>
              <ReviewCard review={review} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center mt-12">
            <Button href="/reviews" variant="outline">
              Read All Reviews
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

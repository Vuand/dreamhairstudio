"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/CTAButton";
import { SERVICES, FEATURED_SERVICES, BOOKING_URL } from "@/lib/constants";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function FeaturedServices() {
  const featured = SERVICES.flatMap((cat) =>
    cat.services.filter((s) => FEATURED_SERVICES.includes(s.name))
  );

  return (
    <section className="py-14 px-4 sm:px-6 relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-brand-dark) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection>
          <SectionHeading
            overline="What We Offer"
            title="Our Services"
            subtitle="From classic cuts to bold color transformations"
          />
        </AnimatedSection>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {featured.map((service) => (
            <motion.div
              key={service.name}
              variants={card}
              className="group bg-card rounded-2xl p-6 border border-card-border/60 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-gold to-brand-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <h4 className="font-sans font-medium text-brand-dark text-base leading-snug">
                {service.name}
              </h4>
              <p className="text-brand-red font-serif font-bold text-3xl mt-2 italic">
                {service.price}
              </p>
              {service.description && (
                <p className="text-warm-gray-light text-sm mt-2 font-sans">
                  {service.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection>
          <div className="text-center mt-12">
            <Button href="/services" variant="secondary">
              View All Services & Pricing
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

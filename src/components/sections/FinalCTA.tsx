"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/CTAButton";
import { BOOKING_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/haircutpic2.jpeg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark-surface/85" />
        <div className="absolute inset-0 noise-bg" />
      </div>

      {/* Decorative chevron pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.04 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <svg width="600" height="400" viewBox="0 0 600 400" className="text-brand-gold">
            <path d="M100 50L300 250L500 50" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M100 100L300 300L500 100" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M100 150L300 350L500 150" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-brand-gold/40" />
          <span className="text-brand-gold/60 font-sans text-xs tracking-[0.3em] uppercase">
            Your Next Chapter
          </span>
          <div className="h-px w-12 bg-brand-gold/40" />
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1]">
          Ready for Your
          <br />
          <span className="italic text-brand-gold">New Look?</span>
        </h2>
        <p className="mt-6 text-gray-400 font-sans text-xl max-w-md mx-auto leading-relaxed">
          Book your appointment today and let our talented team bring your dream style to life.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={BOOKING_URL} variant="primary" external className="px-10 py-4 text-base">
            Book Your Appointment
          </Button>
          <Button href="/contact" variant="outline" className="px-8 py-4 text-base border-white/20 text-white hover:bg-white hover:text-brand-dark">
            Contact Us
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

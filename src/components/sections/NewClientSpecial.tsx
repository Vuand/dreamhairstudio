"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/CTAButton";
import { BOOKING_URL } from "@/lib/constants";

export default function NewClientSpecial() {
  return (
    <section className="py-6 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-2xl bg-dark-surface noise-bg">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-red/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="inline-block bg-brand-red/90 text-white text-[10px] font-sans font-bold px-3 py-1 rounded-full uppercase tracking-[0.15em]">
                  New Client Special
                </span>
                <div className="h-px w-8 bg-brand-gold/30 hidden md:block" />
              </div>
              <h3 className="text-white font-serif text-3xl md:text-4xl font-bold">
                First Haircut &mdash; <span className="text-brand-gold italic">$32</span>
              </h3>
              <p className="text-gray-500 font-sans text-base mt-2 max-w-md">
                Welcome to the family. Try us out with a special rate on your first visit.
              </p>
            </div>
            <Button href={BOOKING_URL} variant="gold" external className="flex-shrink-0 px-8">
              Claim Your Offer
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/CTAButton";
import { FloatingPaths } from "@/components/ui/background-paths";
import { BOOKING_URL } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark-surface overflow-hidden noise-bg">
      {/* Background images — overlapping editorial grid */}
      <div className="absolute inset-0">
        {/* Main large image */}
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/haircutpic1.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Gradient overlays — cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-surface via-dark-surface/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-dark-surface/40" />

        {/* Animated SVG background paths */}
        <div className="absolute inset-0 opacity-20">
          <FloatingPaths position={1} className="w-full h-full text-brand-gold" />
          <FloatingPaths position={-1} className="w-full h-full text-brand-gold" />
        </div>

        {/* Decorative floating chevrons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="absolute top-1/4 right-[10%] hidden lg:block"
        >
          <svg width="200" height="200" viewBox="0 0 200 200" className="text-brand-gold">
            <path d="M40 20L100 80L160 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M40 60L100 120L160 60" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M40 100L100 160L160 100" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </motion.div>

        {/* Gold accent line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="absolute right-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent origin-top hidden lg:block"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Text — occupies 7 columns, offset for asymmetry */}
          <div className="lg:col-span-7 lg:col-start-1">
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-brand-gold" />
              <span className="text-brand-gold font-sans text-xs tracking-[0.3em] uppercase font-medium">
                Corvallis, Oregon
              </span>
            </motion.div>

            {/* Headline — dramatic scale */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-bold text-white leading-[0.95] tracking-tight"
            >
              Where Every
              <br />
              Look Becomes
              <br />
              <span className="italic text-brand-gold">a Dream</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 text-lg md:text-xl text-gray-400 font-sans max-w-lg leading-relaxed"
            >
              Expert haircuts, styling & color for everyone.
              Walk-ins welcome, appointments preferred.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <Button href={BOOKING_URL} variant="primary" external className="px-10 py-4 text-base">
                Book Your Appointment
              </Button>
              <Button href="/services" variant="outline" className="px-8 py-4 text-base border-white/20 text-white hover:bg-white hover:text-brand-dark">
                View Services & Pricing
              </Button>
            </motion.div>
          </div>

          {/* Floating image card — editorial overlap, right side */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 1 }}
            transition={{ delay: 1.0, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block lg:col-span-4 lg:col-start-9"
          >
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/haircutpic3.jpeg"
                  alt="Professional styling at Dream Hair Studio"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute -bottom-4 -left-6 bg-white rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="flex text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-sans text-sm font-bold text-brand-dark">5.0</span>
                </div>
                <p className="text-xs text-warm-gray font-sans mt-1">Perfect Rating</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 font-sans tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-brand-gold/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

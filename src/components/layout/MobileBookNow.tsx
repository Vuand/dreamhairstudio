"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BOOKING_URL } from "@/lib/constants";

export default function MobileBookNow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          <div className="bg-dark-surface border-t border-white/10 px-4 py-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-brand-red text-white py-3.5 rounded-full font-sans font-bold text-sm tracking-wide hover:bg-brand-red-dark transition-colors shadow-lg shadow-brand-red/20"
            >
              Book Your Appointment
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

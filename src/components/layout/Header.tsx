"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { BOOKING_URL } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/staff", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-header-scrolled backdrop-blur-md shadow-2xl"
          : "bg-header-bg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-white/10 group-hover:ring-brand-gold/30 transition-all duration-300">
              <Image
                src="/images/DreamStudioLogo.jpg"
                alt="Dream Hair Studio"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-white text-base font-bold tracking-tight">
                Dream
              </span>
              <span className="font-serif text-brand-gold text-base font-bold tracking-tight ml-1">
                Hair Studio
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white font-sans text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden lg:block">
              <Button href={BOOKING_URL} variant="primary" external>
                Book Now
              </Button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <span className={`block absolute h-0.5 w-5 bg-white transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-1.5"}`} />
              <span className={`block absolute h-0.5 w-5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block absolute h-0.5 w-5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-1.5"}`} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 bg-header-bg/98 backdrop-blur-lg z-40"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col items-center justify-center h-full gap-6 -mt-16"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-white font-serif text-2xl font-semibold tracking-tight transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + navLinks.length * 0.05 }}
                className="mt-4"
              >
                <Button href={BOOKING_URL} variant="primary" external className="px-10 py-4 text-base">
                  Book Now
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

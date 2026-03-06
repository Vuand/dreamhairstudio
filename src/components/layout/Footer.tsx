import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO, BUSINESS_HOURS, BOOKING_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark-surface text-gray-400 relative overflow-hidden noise-bg">
      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/images/DreamStudioLogo.jpg"
                  alt="Dream Hair Studio"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <span className="font-serif text-white text-base font-bold">Dream</span>
                <span className="font-serif text-brand-gold text-base font-bold ml-1">Hair Studio</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed font-sans text-gray-500 max-w-xs">
              Professional hair studio and barbershop in Corvallis, OR.
              Expert cuts, styling, and color for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-xs text-brand-gold tracking-[0.2em] uppercase font-semibold mb-5">
              Explore
            </h3>
            <ul className="space-y-2.5 font-sans text-sm">
              {[
                { href: "/services", label: "Services & Pricing" },
                { href: "/staff", label: "Meet the Team" },
                { href: "/gallery", label: "Gallery" },
                { href: "/reviews", label: "Reviews" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-sans text-xs text-brand-gold tracking-[0.2em] uppercase font-semibold mb-5">
              Hours
            </h3>
            <ul className="space-y-2 font-sans text-sm">
              {BUSINESS_HOURS.map((h) => (
                <li key={h.day} className="flex justify-between text-gray-500">
                  <span>{h.day}</span>
                  <span className={h.isOpen ? "text-gray-300" : ""}>
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs text-brand-gold tracking-[0.2em] uppercase font-semibold mb-5">
              Visit Us
            </h3>
            <div className="space-y-3 font-sans text-sm text-gray-500">
              <p>{BUSINESS_INFO.address.full}</p>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="block hover:text-white transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-gold hover:text-brand-gold-light transition-colors text-xs tracking-wider uppercase font-medium mt-1"
              >
                Get Directions
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-red text-white px-5 py-2.5 rounded-full text-sm font-sans font-semibold hover:bg-brand-red-dark transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/5 text-center text-xs text-gray-600 font-sans">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import GoogleMap from "@/components/embeds/GoogleMap";
import Button from "@/components/ui/CTAButton";
import {
  BUSINESS_INFO,
  BUSINESS_HOURS,
  AMENITIES,
  PAYMENT_METHODS,
  LANGUAGES,
  BOOKING_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Find Dream Hair Studio at 800 NW Starker Ave Suite 23, Corvallis, OR 97330. Walk-ins welcome. Call (541) 230-9242 or book online.",
  openGraph: {
    title: "Contact & Location | Dream Hair Studio Corvallis",
    description:
      "Visit us at 800 NW Starker Ave Suite 23, Corvallis, OR. Walk-ins welcome.",
  },
};

export default function ContactPage() {
  return (
    <section className="py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            overline="Find Us"
            title="Contact & Location"
            subtitle="We'd love to see you! Stop by or get in touch"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Map — wider */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <GoogleMap className="h-80 lg:h-full min-h-[450px] shadow-lg" />
          </AnimatedSection>

          {/* Info cards — stacked */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatedSection delay={0.1} direction="left">
              <div className="bg-card rounded-2xl p-6 border border-card-border/50 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-5 bg-brand-gold rounded-full" />
                  <h3 className="font-serif text-lg font-bold text-brand-dark">Address</h3>
                </div>
                <p className="font-sans text-warm-gray text-sm ml-3">
                  {BUSINESS_INFO.address.full}
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-red text-xs font-sans font-semibold mt-2 ml-3 hover:underline tracking-wider uppercase"
                >
                  Get Directions
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} direction="left">
              <div className="bg-card rounded-2xl p-6 border border-card-border/50 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-5 bg-brand-gold rounded-full" />
                  <h3 className="font-serif text-lg font-bold text-brand-dark">Phone</h3>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="font-sans text-warm-gray hover:text-brand-dark transition-colors ml-3 text-lg"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="bg-card rounded-2xl p-6 border border-card-border/50 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-5 bg-brand-gold rounded-full" />
                  <h3 className="font-serif text-lg font-bold text-brand-dark">Hours</h3>
                </div>
                <ul className="space-y-1 font-sans text-sm ml-3">
                  {BUSINESS_HOURS.map((h) => (
                    <li key={h.day} className="flex justify-between">
                      <span className="text-warm-gray">{h.day}</span>
                      <span className={h.isOpen ? "text-brand-dark font-medium" : "text-warm-gray-light"}>
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25} direction="left">
              <div className="bg-card rounded-2xl p-6 border border-card-border/50 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-5 bg-brand-gold rounded-full" />
                  <h3 className="font-serif text-lg font-bold text-brand-dark">Details</h3>
                </div>
                <div className="space-y-2 font-sans text-sm ml-3">
                  <div>
                    <span className="text-warm-gray-light text-[10px] uppercase tracking-wider font-medium">Amenities</span>
                    <p className="text-warm-gray">{AMENITIES.map((a) => a.label).join(" · ")}</p>
                  </div>
                  <div>
                    <span className="text-warm-gray-light text-[10px] uppercase tracking-wider font-medium">Payment</span>
                    <p className="text-warm-gray">{PAYMENT_METHODS.join(", ")}</p>
                  </div>
                  <div>
                    <span className="text-warm-gray-light text-[10px] uppercase tracking-wider font-medium">Languages</span>
                    <p className="text-warm-gray">{LANGUAGES.join(", ")}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Consultation CTA */}
        <AnimatedSection>
          <div className="mt-20 bg-dark-surface rounded-2xl p-10 md:p-14 text-center relative overflow-hidden noise-bg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-brand-gold/30" />
                <span className="text-brand-gold/60 font-sans text-[10px] tracking-[0.3em] uppercase font-medium">
                  We&apos;re Here to Help
                </span>
                <div className="h-px w-8 bg-brand-gold/30" />
              </div>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-3">
                Questions About <span className="italic text-brand-gold">Services?</span>
              </h3>
              <p className="text-gray-500 font-sans max-w-lg mx-auto mb-8 text-[15px]">
                Not sure which service is right for you? Book a free consultation
                and we&apos;ll help you find the perfect look.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href={BOOKING_URL} variant="primary" external>
                  Book a Free Consultation
                </Button>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-2 text-gray-400 font-sans font-medium hover:text-white transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Or Call Us
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import GoogleMap from "@/components/embeds/GoogleMap";
import { BUSINESS_INFO, BUSINESS_HOURS } from "@/lib/constants";

export default function VisitUsPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream-dark/40 via-cream to-cream-dark/20" />

      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection>
          <SectionHeading
            overline="Location"
            title="Visit Us"
            subtitle="Conveniently located in Corvallis with free parking"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <AnimatedSection direction="right" className="lg:col-span-3">
            <GoogleMap className="h-80 lg:h-full min-h-[420px] shadow-lg" />
          </AnimatedSection>

          <AnimatedSection delay={0.15} direction="left" className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-card-border/50 h-full">
              <div className="space-y-7">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-5 bg-brand-gold rounded-full" />
                    <h3 className="font-serif text-lg font-bold text-brand-dark">
                      Address
                    </h3>
                  </div>
                  <p className="font-sans text-warm-gray ml-3">
                    {BUSINESS_INFO.address.full}
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand-red text-sm font-sans font-medium mt-2 ml-3 hover:underline"
                  >
                    Get Directions
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-5 bg-brand-gold rounded-full" />
                    <h3 className="font-serif text-lg font-bold text-brand-dark">
                      Phone
                    </h3>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="font-sans text-warm-gray hover:text-brand-dark transition-colors ml-3"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-5 bg-brand-gold rounded-full" />
                    <h3 className="font-serif text-lg font-bold text-brand-dark">
                      Hours
                    </h3>
                  </div>
                  <ul className="space-y-1 font-sans text-sm ml-3">
                    {BUSINESS_HOURS.map((h) => (
                      <li key={h.day} className="flex justify-between">
                        <span className="text-warm-gray">{h.day}</span>
                        <span
                          className={
                            h.isOpen
                              ? "text-brand-dark font-medium"
                              : "text-warm-gray-light"
                          }
                        >
                          {h.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

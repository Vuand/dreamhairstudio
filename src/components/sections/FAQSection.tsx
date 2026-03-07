"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Button from "@/components/ui/CTAButton";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQSection() {
  return (
    <section className="py-14 px-4 sm:px-6 relative">
      {/* Subtle diagonal background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-brand-gold/[0.02] rounded-full" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-brand-red/[0.01] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        <AnimatedSection>
          <SectionHeading
            overline="FAQ"
            title="Common Questions"
            subtitle="Everything you need to know before your visit"
          />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <FAQAccordion items={FAQ_ITEMS} />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="text-center mt-10">
            <p className="text-warm-gray font-sans text-sm mb-4">
              Have another question? We&apos;re happy to help.
            </p>
            <Button href="/contact" variant="outline">
              Get in Touch
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

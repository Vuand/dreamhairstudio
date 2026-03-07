import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Button from "@/components/ui/CTAButton";
import ChevronDivider from "@/components/ui/ChevronDivider";
import { SERVICES, FAQ_ITEMS, BOOKING_URL } from "@/lib/constants";
import { getFAQJsonLd } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "View our full menu of barbering, hairstyling, and color services with pricing. Men's haircuts from $35, women's cuts from $45, balayage from $150. Book today!",
  openGraph: {
    title: "Services & Pricing | Dream Hair Studio Corvallis",
    description:
      "Full menu of barbering, hairstyling, and color services. Affordable pricing for the whole family.",
  },
};

const categoryIcons: Record<string, string> = {
  Barbering: "01",
  Hairstyles: "02",
  Color: "03",
};

export default function ServicesPage() {
  const faqJsonLd = getFAQJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              overline="Menu"
              title="Services & Pricing"
              subtitle="Quality services at fair prices for the whole family"
            />
          </AnimatedSection>

          {/* New Client Special */}
          <AnimatedSection>
            <div className="mb-10 relative overflow-hidden rounded-2xl bg-dark-surface noise-bg">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="inline-block bg-brand-red/90 text-white text-[10px] font-sans font-bold px-3 py-1 rounded-full uppercase tracking-[0.15em] mb-2">
                    Special Offer
                  </span>
                  <h3 className="text-white font-serif text-2xl font-bold">
                    New Client Haircut &mdash; <span className="text-brand-gold italic">$32</span>
                  </h3>
                </div>
                <Button href={BOOKING_URL} variant="primary" external className="flex-shrink-0">
                  Book Now
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Service Categories */}
          <div className="space-y-10">
            {SERVICES.map((category, i) => (
              <AnimatedSection key={category.slug} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-7 md:p-9 shadow-sm border border-card-border/50 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-4xl font-serif font-bold text-brand-gold/15 leading-none">
                      {categoryIcons[category.name]}
                    </span>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-brand-dark">
                        {category.name}
                      </h3>
                      <p className="text-warm-gray font-sans text-sm mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="h-px w-full bg-card-border mb-2" />
                  <div>
                    {category.services.map((service) => (
                      <ServiceCard key={service.name} service={service} />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-10 text-center">
              <p className="text-warm-gray font-sans text-sm mb-5">
                Prices may vary based on hair length and complexity. Consultation
                recommended for color services.
              </p>
              <Button href={BOOKING_URL} variant="primary" external className="px-10">
                Book Your Appointment
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ChevronDivider />

      {/* FAQ Section */}
      <section className="py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-dark/30 via-cream to-cream-dark/20" />
        <div className="max-w-3xl mx-auto relative">
          <AnimatedSection>
            <SectionHeading
              overline="FAQ"
              title="Common Questions"
              subtitle="Everything you need to know about our services"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FAQAccordion items={FAQ_ITEMS} />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

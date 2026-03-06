import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dream Hair Studio — a welcoming, inclusive hair studio and barbershop in Corvallis, OR serving the community with expert cuts, styling, and color.",
  openGraph: {
    title: "About Dream Hair Studio | Corvallis Hair Salon & Barbershop",
    description:
      "Learn about Dream Hair Studio — a welcoming, inclusive hair studio and barbershop in Corvallis, OR.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <SectionHeading
              overline="Our Story"
              title="About Dream Hair Studio"
              subtitle="Where every client is family and every look is a dream come true"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Story — asymmetric layout */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <AnimatedSection direction="right" className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/haircutpic2.jpeg"
                    alt="Dream Hair Studio"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                {/* Decorative offset frame */}
                <div className="absolute -z-10 top-4 -right-4 w-full h-full rounded-2xl border border-brand-gold/20 hidden lg:block" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15} direction="left" className="lg:col-span-7">
              <div className="space-y-6 lg:pl-4">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark leading-tight">
                  A Space Where
                  <br />
                  <span className="italic text-brand-gold">Everyone Belongs</span>
                </h3>
                <div className="h-px w-16 bg-brand-gold/30" />
                <p className="text-warm-gray font-sans leading-relaxed text-[15px]">
                  Dream Hair Studio was founded with a simple mission: to create
                  a space where everyone feels welcome, valued, and leaves
                  looking their absolute best. Located in the heart of
                  Corvallis, Oregon, we combine the best of barbering tradition
                  with modern styling expertise.
                </p>
                <p className="text-warm-gray font-sans leading-relaxed text-[15px]">
                  Our team of talented barbers and stylists brings diverse skills
                  and backgrounds together under one roof. Whether you need a
                  classic fade, a bold color transformation, or a fresh new
                  style, we have the expertise to make it happen.
                </p>
                <p className="text-warm-gray font-sans leading-relaxed text-[15px]">
                  We proudly serve the Corvallis community with bilingual
                  service in English and Spanish, ensuring every client can
                  communicate their vision clearly and comfortably.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-dark/40 via-cream to-cream-dark/20" />
        <div className="max-w-6xl mx-auto relative">
          <AnimatedSection>
            <SectionHeading
              overline="What Drives Us"
              title="Our Values"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Inclusivity",
                text: "Everyone is welcome here. We celebrate diversity and serve clients of all ages, backgrounds, and styles. Our studio is a safe, LGBTQIA+ friendly space.",
              },
              {
                title: "Craftsmanship",
                text: "We take pride in our work. Every cut, color, and style is delivered with precision, care, and attention to detail. Your satisfaction is our standard.",
              },
              {
                title: "Community",
                text: "We're more than a hair studio — we're part of the Corvallis community. We build lasting relationships with our clients and treat everyone like family.",
              },
            ].map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 border border-card-border/50 hover:border-brand-gold/20 hover:shadow-lg transition-all duration-500 h-full">
                  <div className="w-10 h-1 bg-brand-gold rounded-full mb-5" />
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-warm-gray font-sans text-sm leading-relaxed">
                    {value.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[
              "/images/haircutpic1.jpeg",
              "/images/haircutpic2.jpeg",
              "/images/haircutpic3.jpeg",
            ].map((src, i) => (
              <AnimatedSection key={src} delay={i * 0.1} direction="scale">
                <div className="relative aspect-square rounded-xl overflow-hidden group">
                  <Image
                    src={src}
                    alt={`Dream Hair Studio work sample ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 33vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 bg-dark-surface relative overflow-hidden noise-bg">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
            <path d="M0 100 L200 0 L400 100 L200 200 Z" fill="currentColor" className="text-brand-gold" />
          </svg>
        </div>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              Come Experience the <span className="italic text-brand-gold">Dream</span>
            </h2>
            <p className="mt-5 text-gray-500 font-sans text-lg">
              Book your appointment today or stop by for a walk-in.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={BOOKING_URL} variant="primary" external className="px-10">
                Book Now
              </Button>
              <Button href="/staff" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-brand-dark">
                Meet the Team
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}

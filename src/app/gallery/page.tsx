import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our gallery of haircuts, styles, and color transformations at Dream Hair Studio in Corvallis, OR.",
  openGraph: {
    title: "Gallery | Dream Hair Studio Corvallis",
    description: "See our work — haircuts, styles, and color transformations.",
  },
};

const galleryImages = [
  { src: "/images/haircutpic1.jpeg", alt: "Fresh fade haircut", span: "col-span-2 row-span-2" },
  { src: "/images/haircutpic2.jpeg", alt: "Clean barbering style", span: "" },
  { src: "/images/haircutpic3.jpeg", alt: "Professional hair styling", span: "" },
];

export default function GalleryPage() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            overline="Portfolio"
            title="Our Work"
            subtitle="Browse some of our favorite looks and transformations"
          />
        </AnimatedSection>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((img, i) => (
            <AnimatedSection
              key={img.src}
              delay={i * 0.1}
              direction="scale"
              className={i === 0 ? "col-span-2 row-span-2" : ""}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes={i === 0 ? "50vw" : "25vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-sans text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Placeholders */}
          {[1, 2, 3].map((n) => (
            <AnimatedSection key={`placeholder-${n}`} delay={0.3 + n * 0.05} direction="scale">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <ImagePlaceholder
                  icon="camera"
                  label="Coming Soon"
                  className="w-full h-full"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-20 text-center">
            <div className="inline-block bg-card rounded-2xl p-10 border border-card-border/50 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-3">
                Love What You See?
              </h3>
              <p className="text-warm-gray font-sans mb-6 max-w-md">
                Book your appointment and let our team create your perfect look.
                Bring reference photos — we love working with inspiration!
              </p>
              <Button href={BOOKING_URL} variant="primary" external>
                Book Your Appointment
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

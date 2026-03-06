"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/CTAButton";

const galleryImages = [
  { src: "/images/haircutpic1.jpeg", alt: "Professional haircut style 1" },
  { src: "/images/haircutpic2.jpeg", alt: "Professional haircut style 2" },
  { src: "/images/haircutpic3.jpeg", alt: "Professional haircut style 3" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function GalleryPreview() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            overline="Portfolio"
            title="Our Work"
            subtitle="See the quality and artistry our team delivers every day"
          />
        </AnimatedSection>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              variants={item}
              className={`relative rounded-2xl overflow-hidden group ${
                i === 1 ? "sm:-mt-8" : ""
              }`}
            >
              <div className="aspect-[3/4]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-sans text-sm font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection>
          <div className="text-center mt-12">
            <Button href="/gallery" variant="outline">
              View Full Gallery
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

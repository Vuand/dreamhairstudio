"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import StaffCard from "@/components/ui/StaffCard";
import Button from "@/components/ui/Button";
import { STAFF } from "@/lib/constants";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function MeetTheTeam() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background — warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-dark/40 via-cream to-cream-dark/20" />

      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection>
          <SectionHeading
            overline="The Dream Team"
            title="Meet Your Stylists"
            subtitle="Talented barbers and stylists dedicated to making you look your best"
          />
        </AnimatedSection>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STAFF.map((member) => (
            <motion.div key={member.slug} variants={card}>
              <StaffCard staff={member} />
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection>
          <div className="text-center mt-12">
            <Button href="/staff" variant="outline">
              Learn More About Our Team
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

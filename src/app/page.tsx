import HeroSection from "@/components/sections/HeroSection";
import NewClientSpecial from "@/components/sections/NewClientSpecial";
import TrustBar from "@/components/ui/TrustBar";
import FeaturedServices from "@/components/sections/FeaturedServices";
import MeetTheTeam from "@/components/sections/MeetTheTeam";
import GalleryPreview from "@/components/sections/GalleryPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsPreview from "@/components/sections/ReviewsPreview";
import FAQSection from "@/components/sections/FAQSection";
import VisitUsPreview from "@/components/sections/VisitUsPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import ChevronDivider from "@/components/ui/ChevronDivider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
        <TrustBar />
      </div>
      <NewClientSpecial />
      <FeaturedServices />
      <ChevronDivider />
      <MeetTheTeam />
      <GalleryPreview />
      <ChevronDivider />
      <WhyChooseUs />
      <ReviewsPreview />
      <ChevronDivider />
      <FAQSection />
      <VisitUsPreview />
      <FinalCTA />
    </>
  );
}

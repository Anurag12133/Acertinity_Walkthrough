import { ChooseSection } from "./components/ChooseSection";
import FeaturedCourses from "./components/FeaturesCourses";
import MovingCards from "./components/GridCards";
import HeroSection from "./components/HeroSection";
import InstructorCard from "./components/Instructors";
import UpcomingWebinars from "./components/UpcomingWebinars";
export default function Home() {
  return (
    <main className="min-h-scree bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <ChooseSection />
      <MovingCards />
      <UpcomingWebinars />
      <InstructorCard />
    </main>
  );
}

// app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import CallToAction from "@/components/home/CallToAction";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <main className="w-full">
        <AboutSection />
        <FeaturedProjectsSection />
        <CallToAction />
      </main>
    </div>
  );
}
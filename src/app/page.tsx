import { BottomFeatureStrip } from "@/components/BottomFeatureStrip";
import { FeaturedEvents } from "@/components/FeaturedEvents";
import { HeroSection } from "@/components/HeroSection";
import { HighlightCards } from "@/components/HighlightCards";
import { LatestUpdates } from "@/components/LatestUpdates";
import { MainPageCards } from "@/components/MainPageCards";

export default function OverviewPage() {
  return (
    <main>
      <HeroSection />
      <HighlightCards />
      <MainPageCards />

      <section className="mx-auto mt-8 grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[1fr_0.94fr]">
        <FeaturedEvents />
        <LatestUpdates />
      </section>

      <BottomFeatureStrip />
    </main>
  );
}

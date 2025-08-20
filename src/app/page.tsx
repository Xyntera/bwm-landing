import { HeroSection } from '@/components/sections/HeroSection';
import { BuilderStoriesSection } from '@/components/sections/BuilderStoriesSection';
import { ProgramJourneySection } from '@/components/sections/ProgramJourneySection';
import { WeeklyExperienceSection } from '@/components/sections/WeeklyExperienceSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BuilderStoriesSection />
      <ProgramJourneySection />
      <WeeklyExperienceSection />
    </main>
  );
}

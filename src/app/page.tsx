import { HeroSection } from '@/components/sections/HeroSection';
import { BuilderStoriesSection } from '@/components/sections/BuilderStoriesSection';
import { ProgramJourneySection } from '@/components/sections/ProgramJourneySection';
import { WeeklyExperienceSection } from '@/components/sections/WeeklyExperienceSection';
import { ParentTestimonialsSection } from '@/components/sections/ParentTestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { JoinContactSection } from '@/components/sections/JoinContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BuilderStoriesSection />
      <ProgramJourneySection />
      <WeeklyExperienceSection />
      <ParentTestimonialsSection />
      <FAQSection />
      <JoinContactSection />
    </main>
  );
}

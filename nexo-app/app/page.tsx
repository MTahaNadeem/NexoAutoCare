import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { StatsSection } from '@/components/sections/StatsSection';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'NexoAutoCare — Premium Auto Detailing in Faisalabad',
  description:
    "Faisalabad's premier auto detailing studio. Paint correction, ceramic coating, interior revival — done right, by appointment only.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <GalleryPreview />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}

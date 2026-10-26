import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { StatsSection } from '@/components/sections/StatsSection';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'NexoAutoCare — Premium Mobile Auto Detailing in Faisalabad',
  description:
    "Faisalabad's premier mobile auto detailing service. We bring the full setup to your doorstep — paint correction, ceramic coating, interior revival, by appointment only.",
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

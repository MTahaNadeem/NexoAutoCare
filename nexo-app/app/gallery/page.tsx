import type { Metadata } from 'next';
import { GalleryClient } from '@/components/sections/GalleryClient';
import { SectionHeader } from '@/components/ui/SectionReveal';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Before & after gallery of NexoAutoCare detailing work in Faisalabad — paint correction, ceramic coating, interior detailing results.',
};

export default function GalleryPage() {
  return (
    <>
      <section className="pt-36 pb-12 px-5 md:px-8 max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Before & After"
          title="The Work Speaks."
          subtitle="Click any photo to view the before & after comparison."
        />
      </section>

      <section className="pb-28 px-5 md:px-8 max-w-7xl mx-auto" aria-label="Photo gallery">
        <GalleryClient />
      </section>

      <FinalCTA />
    </>
  );
}

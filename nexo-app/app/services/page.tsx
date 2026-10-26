import type { Metadata } from 'next';
import { SERVICES } from '@/lib/constants';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { SectionHeader, StaggerGrid } from '@/components/ui/SectionReveal';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Full range of premium auto detailing services in Faisalabad — paint correction, ceramic coating, interior detailing, engine bay cleaning, and more.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-20 px-5 md:px-8 max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Premium Services"
          title="Every Service. Done Right."
          subtitle="We don't offer packages designed to upsell — we offer services designed to deliver exactly what your car needs."
          centered={false}
        />
      </section>

      {/* Services */}
      <section className="pb-28 px-5 md:px-8 max-w-7xl mx-auto" aria-label="All services">
        <StaggerGrid className="flex flex-col gap-8" staggerDelay={0.15}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} compact={false} />
          ))}
        </StaggerGrid>
      </section>

      <FinalCTA />
    </>
  );
}

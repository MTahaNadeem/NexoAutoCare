'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { SectionHeader, StaggerGrid } from '@/components/ui/SectionReveal';
import { fadeUp } from '@/lib/animations';

export function ServicesPreview() {
  return (
    <section className="py-28 bg-[#0d0d0d] border-t border-white/6" aria-label="Services preview">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="The Full Spectrum"
          subtitle="Every service performed with the same uncompromising standard — professional grade, every time."
        />

        <StaggerGrid
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.1}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} compact />
          ))}
        </StaggerGrid>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 font-medium tracking-wide transition-colors duration-200"
          >
            View all services in detail <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

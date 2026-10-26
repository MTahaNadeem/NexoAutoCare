import type { Metadata } from 'next';
import { SectionHeader, SectionReveal } from '@/components/ui/SectionReveal';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { TrustPoints } from '@/components/sections/TrustPoints';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About NexoAutoCare — premium auto detailing studio in Faisalabad. Our story, our standard, and why we do things differently.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-36 pb-24 px-5 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.08)_0%,transparent_65%)] pointer-events-none"
          aria-hidden="true"
        />
        <SectionHeader
          eyebrow="Our Story"
          title="Precision is a Practice."
          subtitle="NexoAutoCare was built on one conviction: that how a car is treated says something about the person who drives it — and about the people who work on it."
          centered={false}
        />
      </section>

      {/* Brand story */}
      <section className="pb-24 px-5 md:px-8 max-w-4xl mx-auto">
        <SectionReveal>
          <div className="space-y-5 text-gray-400 text-[0.95rem] leading-[1.85]">
            <p>
              We started NexoAutoCare because we were tired of seeing cars returned from
              &ldquo;detail shops&rdquo; with water spots still on the glass and compound residue
              still in the trim gaps. That isn&apos;t detailing — that&apos;s a wash with a markup.
            </p>
            <p>
              Every vehicle that comes through our bay gets a proper inspection first. We identify
              the paint condition, the specific defects, the interior material types — and we
              build a plan before we start. Not a menu, a plan.
            </p>
            <p>
              We operate appointment-only for one simple reason: rushed work is bad work. When
              you book with us, that day belongs to your car.
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Why choose us */}
      <section className="py-24 px-5 md:px-8 max-w-7xl mx-auto" aria-label="Why NexoAutoCare">
        <SectionHeader
          eyebrow="The Standard We Hold"
          title="Why NexoAutoCare"
        />
        <TrustPoints />
      </section>

      <FinalCTA />
    </>
  );
}

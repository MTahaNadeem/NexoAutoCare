'use client';

import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { SectionHeader, StaggerGrid } from '@/components/ui/SectionReveal';
import { fadeUp } from '@/lib/animations';
import { motion } from 'framer-motion';

export function TestimonialsSection() {
  return (
    <section className="py-18 md:py-22 bg-[#0a0a0a]" aria-label="Testimonials">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="Client Reviews"
          title="The Proof"
          subtitle="From the people who trusted us with their vehicles."
        />

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.13}>
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.3)' }}
              className="flex flex-col gap-4 p-6 md:p-7 bg-[#111] border border-white/8 rounded-xl transition-colors duration-300"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-blue-400 fill-blue-400" />
                ))}
              </div>
              <blockquote className="text-sm text-gray-400 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="pt-3 border-t border-white/6">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-gray-600 mt-0.5">{t.vehicle}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

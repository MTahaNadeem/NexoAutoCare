'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '@/lib/constants';
import { SectionHeader, StaggerGrid } from '@/components/ui/SectionReveal';
import { fadeUp } from '@/lib/animations';
import { motion } from 'framer-motion';

export function GalleryPreview() {
  const preview = GALLERY_ITEMS.slice(0, 3);

  return (
    <section className="py-16 md:py-20 bg-[#0d0d0d] border-t border-white/6" aria-label="Gallery preview">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="Before & After"
          title="The Evidence"
          subtitle="Results speak louder than promises."
        />

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.15}>
          {preview.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-xl border border-white/8"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.after}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-blue-400/70 capitalize mt-0.5">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGrid>

        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 font-medium tracking-wide transition-colors duration-200"
          >
            View full gallery <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowLeftRight } from 'lucide-react';
import { GALLERY_ITEMS } from '@/lib/constants';
import type { GalleryCategory, GalleryItem } from '@/types';
import { SectionHeader, StaggerGrid } from '@/components/ui/SectionReveal';
import { fadeUp } from '@/lib/animations';

const CATEGORIES: { label: string; value: GalleryCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Paint', value: 'paint' },
  { label: 'Interior', value: 'interior' },
  { label: 'Exterior', value: 'exterior' },
  { label: 'Engine', value: 'engine' },
];

interface LightboxProps {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ item, onClose, onPrev, onNext }: LightboxProps) {
  const [showAfter, setShowAfter] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="relative max-w-4xl w-full bg-[#111] border border-white/10 rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative aspect-video">
          <Image
            src={showAfter ? item.after : item.before}
            alt={item.alt}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Before/After toggle */}
          <button
            onClick={() => setShowAfter(!showAfter)}
            className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-white/15 rounded-full text-xs font-semibold text-white tracking-wide"
          >
            <ArrowLeftRight size={12} />
            {showAfter ? 'After' : 'Before'}
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:text-blue-400 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Info */}
        <div className="flex items-center justify-between p-5">
          <div>
            <p className="font-semibold text-white text-sm">{item.title}</p>
            <p className="text-xs text-blue-400/70 capitalize mt-0.5">{item.category}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onPrev}
              aria-label="Previous item"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/40 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={onNext}
              aria-label="Next item"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/40 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const nextItem = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 ${
              activeCategory === cat.value
                ? 'bg-blue-500 text-white shadow-[0_0_14px_rgba(59,130,246,0.4)]'
                : 'bg-white/5 text-gray-400 border border-white/10 hover:border-blue-500/30 hover:text-blue-400'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <StaggerGrid
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.1}
          >
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-xl border border-white/8 cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.after}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/40 rounded-full text-xs font-semibold text-blue-300 tracking-wide">
                      <ArrowLeftRight size={12} /> View Before &amp; After
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-blue-400/70 capitalize mt-0.5">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            item={filtered[lightboxIndex]}
            onClose={closeLightbox}
            onPrev={prevItem}
            onNext={nextItem}
          />
        )}
      </AnimatePresence>
    </>
  );
}

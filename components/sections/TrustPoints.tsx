'use client';

import { motion } from 'framer-motion';
import { StaggerGrid } from '@/components/ui/SectionReveal';
import { fadeUp } from '@/lib/animations';

const TRUST_POINTS = [
  {
    num: '01',
    title: 'Professional-grade products only',
    desc: "No consumer shortcuts. We use industry-leading compounds, ceramic coatings, and detailing tools — the same ones the pros in Dubai and Karachi use.",
  },
  {
    num: '02',
    title: 'Certified detailing technicians',
    desc: 'Skilled hands guided by repeatable process. Every step is deliberate — not rushed, not improvised.',
  },
  {
    num: '03',
    title: 'We come to you — 100% mobile',
    desc: 'No traffic or waiting rooms. Our fully equipped mobile unit brings professional water, power, and detailing gear directly to your home or office.',
  },
  {
    num: '04',
    title: 'Full accountability at every step',
    desc: "You'll know exactly what we did, and why. Transparency isn't a bonus — it's built in.",
  },
];

export function TrustPoints() {
  return (
    <StaggerGrid
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
      staggerDelay={0.13}
    >
      {TRUST_POINTS.map((point) => (
        <motion.div
          key={point.num}
          variants={fadeUp}
          className="group flex gap-5 p-7 bg-[#111] border border-white/8 rounded-xl hover:border-blue-500/25 transition-all duration-300 hover:-translate-y-1"
        >
          <span className="font-display text-3xl text-blue-400/40 leading-none shrink-0 w-9">
            {point.num}
          </span>
          <div>
            <p className="text-sm font-semibold text-white mb-2">{point.title}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{point.desc}</p>
          </div>
        </motion.div>
      ))}
    </StaggerGrid>
  );
}

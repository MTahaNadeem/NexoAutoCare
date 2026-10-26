'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { STATS } from '@/lib/constants';
import { SectionReveal } from '@/components/ui/SectionReveal';

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState('0');

  const isNumeric = /^\d+/.test(target);
  const numericPart = parseInt(target.replace(/\D/g, ''), 10);
  const rest = target.replace(/^\d+/, '');

  useEffect(() => {
    if (!isInView || !isNumeric) {
      setDisplay(target);
      return;
    }
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(numericPart / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, numericPart);
      setDisplay(`${start}${rest}`);
      if (start >= numericPart) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericPart, rest, isNumeric, target]);

  return <span ref={ref}>{display}</span>;
}

export function StatsSection() {
  return (
    <section className="py-10 md:py-12 border-y border-white/6 bg-[#0a0a0a]" aria-label="Stats">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-4xl md:text-5xl tracking-wide text-white mb-2">
                <AnimatedCounter target={stat.value} />
              </p>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-500">
                {stat.label}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

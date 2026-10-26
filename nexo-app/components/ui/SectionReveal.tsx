'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Variants } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function SectionReveal({
  children,
  className = '',
  variants = fadeUp,
  delay = 0,
  once = true,
  amount = 0.15,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const adjustedVariants: Variants = delay
    ? {
        hidden: variants.hidden ?? {},
        visible: {
          ...(typeof variants.visible === 'object' && !('opacity' in (variants.visible as Record<string, unknown>))
            ? variants.visible
            : (variants.visible as object)),
          transition: {
            ...(typeof variants.visible === 'object'
              ? (variants.visible as { transition?: object }).transition
              : {}),
            delay,
          },
        },
      }
    : variants;

  return (
    <motion.div
      ref={ref}
      variants={adjustedVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  amount?: number;
}

export function StaggerGrid({ children, className = '', staggerDelay = 0.12, amount = 0.1 }: StaggerGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: 0.05 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <span
      className={`inline-block text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-blue-400 mb-4 px-3 py-1.5 border border-blue-500/30 rounded-full bg-blue-500/6 ${className}`}
    >
      {children}
    </span>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ eyebrow, title, subtitle, centered = true, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && <SectionReveal><Eyebrow>{eyebrow}</Eyebrow></SectionReveal>}
      <SectionReveal delay={0.08}>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-white leading-none">
          {title}
        </h2>
      </SectionReveal>
      {subtitle && (
        <SectionReveal delay={0.18}>
          <p className="mt-5 text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </SectionReveal>
      )}
    </div>
  );
}

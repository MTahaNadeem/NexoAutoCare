'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, ChevronDown, MessageCircle } from 'lucide-react';
import { PHONE, PHONE_CLEAN, WHATSAPP_BASE, CITY } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-dvh flex flex-col items-center justify-center text-center px-5 pt-20 pb-16 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[54%] w-[min(900px,120vw)] h-[min(600px,80vw)] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.13)_0%,rgba(59,130,246,0.04)_45%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[linear-gradient(135deg,rgba(59,130,246,0.055)_0%,transparent_55%)] blur-[60px] -rotate-12" />
        <div className="absolute w-[380px] h-[380px] top-[10%] -right-20 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.07)_0%,transparent_65%)] animate-[float_8s_ease-in-out_infinite_alternate]" />
        <div className="absolute w-[260px] h-[260px] bottom-[15%] -left-10 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_65%)] animate-[float_11s_ease-in-out_2s_infinite_alternate]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp}>
          <span className="inline-block text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-blue-400 mb-6 px-3 py-1.5 border border-blue-500/30 rounded-full bg-blue-500/6">
            {CITY}&apos;s Premier Detailing Studio
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-[clamp(3rem,10vw,7rem)] leading-[0.93] tracking-[0.01em] text-white mb-6"
        >
          Your Car Deserves<br />
          A Second{' '}
          <span className="text-blue-400">First Impression</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-[clamp(0.9rem,2.2vw,1.1rem)] font-light text-gray-500 tracking-wide max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Precision detailing for those who understand the difference.
          <br className="hidden sm:block" />
          Appointment-only. No shortcuts. No compromises.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3">
          <motion.a
            href={`tel:${PHONE_CLEAN}`}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-blue-500 text-white text-sm font-semibold tracking-widest uppercase rounded-md shadow-[0_0_24px_rgba(59,130,246,0.4)] hover:shadow-[0_0_42px_rgba(59,130,246,0.65)] transition-shadow duration-200"
          >
            <Phone size={15} />
            Call Now — {PHONE}
          </motion.a>
          <motion.a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-transparent text-gray-400 text-sm font-medium tracking-wide rounded-md border border-white/10 hover:border-blue-500/40 hover:text-blue-400 transition-all duration-200"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        aria-hidden="true"
      >
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-gray-600">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-blue-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

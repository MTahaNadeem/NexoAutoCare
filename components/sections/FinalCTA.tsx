'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { PHONE, PHONE_CLEAN, WHATSAPP_BASE } from '@/lib/constants';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { motion } from 'framer-motion';

export function FinalCTA() {
  return (
    <section className="relative py-18 md:py-22 overflow-hidden bg-[#0a0a0a] border-t border-white/6" aria-label="Final call to action">
      {/* Top line glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(700px,100%)] h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"
        aria-hidden="true"
      />
      {/* Radial glow */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.1)_0%,transparent_65%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
        <SectionReveal>
          <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.0] tracking-wide text-white mb-4">
            Ready for the detail<br />your car deserves?
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <p className="text-sm text-gray-500 mb-8 md:mb-10 tracking-wide">
            Book your appointment — spots are limited by design.
          </p>
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={`tel:${PHONE_CLEAN}`}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-9 py-4 bg-blue-500 text-white text-sm font-semibold tracking-widest uppercase rounded-md shadow-[0_0_28px_rgba(59,130,246,0.45)] hover:shadow-[0_0_48px_rgba(59,130,246,0.7)] transition-shadow duration-200"
            >
              <Phone size={16} />
              Call Now — {PHONE}
            </motion.a>
            <motion.a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#25d366]/10 text-[#25d366] text-sm font-semibold tracking-widest uppercase rounded-md border border-[#25d366]/30 hover:bg-[#25d366]/20 hover:shadow-[0_0_24px_rgba(37,211,102,0.25)] transition-all duration-200"
            >
              <MessageCircle size={16} />
              WhatsApp
            </motion.a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

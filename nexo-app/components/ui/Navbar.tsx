'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { NAV_LINKS, PHONE, PHONE_CLEAN } from '@/lib/constants';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/8 shadow-[0_2px_32px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-xl tracking-[0.2em] text-white hover:text-blue-400 transition-colors duration-200 shrink-0">
            NEXO<span className="text-blue-400">AUTO</span>CARE
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.filter(l => l.label !== 'Book Now').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-blue-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${PHONE_CLEAN}`}
              className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <Phone size={13} />
              {PHONE}
            </a>
            <Link
              href="/booking"
              className="ml-2 px-5 py-2.5 bg-blue-500 text-white text-xs font-semibold tracking-widest uppercase rounded-md shadow-[0_0_18px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.55)] hover:-translate-y-px transition-all duration-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile: phone + burger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={`tel:${PHONE_CLEAN}`}
              aria-label="Call NexoAutoCare"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#0d0d0d] border-l border-white/8 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/8">
                <span className="font-display text-lg tracking-[0.18em] text-white">
                  NEXO<span className="text-blue-400">AUTO</span>CARE
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-1 p-6 flex-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-lg text-sm font-medium tracking-wider transition-colors duration-200 ${
                      pathname === link.href
                        ? 'bg-blue-500/15 text-blue-400'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="p-6 border-t border-white/8">
                <a
                  href={`tel:${PHONE_CLEAN}`}
                  className="flex items-center gap-3 text-sm font-semibold text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Phone size={16} />
                  {PHONE}
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

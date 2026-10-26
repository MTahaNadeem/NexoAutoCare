import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';
import { PHONE, PHONE_CLEAN, WHATSAPP_BASE, CITY, BRAND, NAV_LINKS } from '@/lib/constants';

function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function WhatsAppOutlineIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.78-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.14-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.59-.48-.51-.67-.52H8.5c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34z" />
      <path d="M12 2a10 10 0 0 0-8.66 15l-1.34 5 5.13-1.35A10 10 0 1 0 12 2z" />
    </svg>
  );
}

export function Footer() {
  const year = 2025;

  return (
    <footer className="bg-[#080808] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-2xl tracking-[0.2em] text-white block mb-4">
              NEXO<span className="text-blue-400">AUTO</span>CARE
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Premium mobile auto detailing in Faisalabad. We come to you. Appointment-only. No shortcuts.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">Navigate</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${PHONE_CLEAN}`}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>
                  Serving all of Faisalabad &amp; nearby areas<br />
                  <span className="text-gray-600 text-xs">Mobile Service — We Come To You</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <Clock size={14} className="mt-0.5 shrink-0" />
                <span>
                  Mon – Sat: 9AM – 7PM<br />
                  By Appointment Only
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="py-6 border-t border-white/6 flex items-center justify-center gap-7">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NexoAutoCare on Instagram"
            className="text-gray-500/70 hover:text-blue-400 hover:scale-110 transition-all duration-200"
          >
            <InstagramIcon className="w-[22px] h-[22px]" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NexoAutoCare on Facebook"
            className="text-gray-500/70 hover:text-blue-400 hover:scale-110 transition-all duration-200"
          >
            <FacebookIcon className="w-[22px] h-[22px]" />
          </a>
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NexoAutoCare on WhatsApp"
            className="text-gray-500/70 hover:text-blue-400 hover:scale-110 transition-all duration-200"
          >
            <WhatsAppOutlineIcon className="w-[22px] h-[22px]" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-xs text-gray-600 tracking-wide">
            © {year} {BRAND}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 tracking-wide">
            Premium Mobile Auto Detailing · {CITY}
          </p>
        </div>

        {/* Credit line */}
        <div className="pt-4 text-center">
          <p className="text-[11px] text-gray-600 tracking-wider">
            Designed &amp; Built by{' '}
            <a
              href="https://fourfrontlab.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
            >
              FourFrontLab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

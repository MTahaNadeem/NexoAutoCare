import Link from 'next/link';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { PHONE, PHONE_CLEAN, WHATSAPP_BASE, CITY, BRAND, NAV_LINKS } from '@/lib/constants';

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
              Premium auto detailing in Faisalabad. Appointment-only. No shortcuts.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NexoAutoCare on Instagram"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NexoAutoCare on Facebook"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NexoAutoCare on WhatsApp"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#25d366] hover:border-[#25d366]/40 transition-colors"
              >
                <MessageCircle size={15} />
              </a>
            </div>
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
                {CITY}
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

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-700 tracking-wide">
            © {year} {BRAND}. All rights reserved.
          </p>
          <p className="text-xs text-gray-800 tracking-wide">
            Premium Auto Detailing · {CITY}
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from 'next';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { SectionHeader, SectionReveal } from '@/components/ui/SectionReveal';
import { PHONE, PHONE_CLEAN, WHATSAPP_BASE, CITY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description:
    'Book your mobile auto detailing appointment with NexoAutoCare in Faisalabad. We come directly to your doorstep — reserve via WhatsApp.',
};

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.894 0-3.177-1.238-6.164-3.486-8.412z" />
    </svg>
  );
}

export default function BookingPage() {
  const cleanDigits = PHONE_CLEAN.replace(/[^0-9]/g, '');
  const defaultBookingMessage = "Hi, I'd like to book a mobile detailing appointment with NexoAutoCare.";
  const whatsappBookingUrl = `https://wa.me/${cleanDigits}?text=${encodeURIComponent(defaultBookingMessage)}`;

  return (
    <>
      <section className="pt-36 pb-16 px-5 md:px-8 max-w-4xl mx-auto text-center">
        <SectionHeader
          eyebrow="Book an Appointment"
          title="Reserve Your Slot."
          subtitle="We bring our fully equipped mobile detailing unit directly to your home or office. Spots are limited by design."
          centered={true}
        />

        {/* Large Centered CTA Button */}
        <SectionReveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3.5 px-10 py-5 bg-blue-500 hover:bg-blue-600 text-white text-base md:text-lg font-semibold tracking-widest uppercase rounded-lg shadow-[0_0_32px_rgba(59,130,246,0.45)] hover:shadow-[0_0_55px_rgba(59,130,246,0.8)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              <WhatsAppIcon className="w-6 h-6 fill-current" />
              <span>Book via WhatsApp</span>
            </a>
            <p className="mt-4 text-xs text-gray-500 tracking-wide">
              Direct connection to our mobile detailing team · Fast response
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* Info Cards Section */}
      <section className="pb-28 px-5 md:px-8 max-w-4xl mx-auto" aria-label="Direct contact and booking details">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Directly Card */}
          <SectionReveal delay={0.2}>
            <div className="h-full p-6 md:p-8 bg-[#111] border border-white/8 rounded-xl space-y-5">
              <h3 className="font-display text-xl tracking-wide text-white">Service &amp; Contact</h3>

              <a
                href={`tel:${PHONE_CLEAN}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <Phone size={14} />
                </span>
                {PHONE}
              </a>

              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#25d366] transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-[#25d366]/10 border border-[#25d366]/20 flex items-center justify-center text-[#25d366] group-hover:bg-[#25d366]/20 transition-colors">
                  <MessageCircle size={14} />
                </span>
                Chat on WhatsApp
              </a>

              <div className="flex items-start gap-3 text-sm text-gray-500">
                <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} />
                </span>
                <span>
                  Serving all of Faisalabad &amp; nearby areas<br />
                  <span className="text-blue-400/80 text-xs font-medium">100% Mobile Service — We Come To You</span>
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-500">
                <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={14} />
                </span>
                <span>
                  Monday – Saturday<br />
                  9:00 AM – 7:00 PM<br />
                  <span className="text-gray-600">By Appointment Only</span>
                </span>
              </div>
            </div>
          </SectionReveal>

          {/* What to Expect Card */}
          <SectionReveal delay={0.25}>
            <div className="h-full p-6 md:p-8 bg-[#111] border border-white/8 rounded-xl">
              <h3 className="font-display text-xl tracking-wide text-white mb-5">
                What to Expect
              </h3>
              <ul className="space-y-4">
                {[
                  'We confirm your appointment and location within 2 hours',
                  'We arrive at your doorstep on schedule with our full mobile setup',
                  'Self-contained setup — we bring our own power, water, and pro products',
                  'Final inspection done with you at your premises before completion',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 mt-2 shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

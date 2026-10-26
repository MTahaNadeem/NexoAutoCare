import type { Metadata } from 'next';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { BookingForm } from '@/components/sections/BookingForm';
import { SectionHeader, SectionReveal } from '@/components/ui/SectionReveal';
import { PHONE, PHONE_CLEAN, WHATSAPP_BASE, CITY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description:
    'Book your auto detailing appointment with NexoAutoCare in Faisalabad. Appointment-only — no walk-ins. Fill out the form to reserve your slot.',
};

export default function BookingPage() {
  return (
    <>
      <section className="pt-36 pb-8 px-5 md:px-8 max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Book an Appointment"
          title="Reserve Your Slot."
          subtitle="We take on a limited number of bookings per week to ensure every vehicle gets the time it deserves."
          centered={false}
        />
      </section>

      <section className="pb-28 px-5 md:px-8 max-w-7xl mx-auto" aria-label="Booking form">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-3">
            <BookingForm />
          </div>

          {/* Sidebar info */}
          <aside className="lg:col-span-2 space-y-8">
            <SectionReveal>
              <div className="p-6 bg-[#111] border border-white/8 rounded-xl space-y-5">
                <h3 className="font-display text-xl tracking-wide text-white">Contact Directly</h3>

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
                  {CITY}
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

            <SectionReveal delay={0.1}>
              <div className="p-6 bg-[#111] border border-white/8 rounded-xl">
                <h3 className="font-display text-xl tracking-wide text-white mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    'We confirm your appointment within 2 hours',
                    'Bring your vehicle at the agreed time — we start on schedule',
                    'Estimated duration communicated in advance',
                    'Final inspection done with you before handover',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50 mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </aside>
        </div>
      </section>
    </>
  );
}

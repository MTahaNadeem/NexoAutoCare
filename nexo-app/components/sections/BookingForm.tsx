'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { SERVICES, PHONE, PHONE_CLEAN, WHATSAPP_BASE } from '@/lib/constants';
import type { BookingFormData } from '@/types';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { fadeUp } from '@/lib/animations';

const initialForm: BookingFormData = {
  name: '',
  phone: '',
  service: '',
  date: '',
  notes: '',
};

export function BookingForm() {
  const [form, setForm] = useState<BookingFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [minDate, setMinDate] = useState<string>('');

  useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0]);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      `*New Booking Request — NexoAutoCare*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Service:* ${form.service || 'Not specified'}`,
      `*Preferred Date:* ${form.date || 'Flexible'}`,
      form.notes ? `*Notes:* ${form.notes}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const url = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const inputClasses =
    'w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200';

  const labelClasses = 'block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2';

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-5 py-24 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
          <CheckCircle size={28} className="text-blue-400" />
        </div>
        <div>
          <h3 className="font-display text-3xl tracking-wide text-white mb-2">Request Sent</h3>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            Your booking request has been sent to WhatsApp. We&apos;ll confirm your appointment
            shortly.
          </p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs text-gray-600 hover:text-blue-400 transition-colors tracking-wide underline underline-offset-4"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      className="space-y-6"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div variants={fadeUp}>
          <label htmlFor="booking-name" className={labelClasses}>
            Full Name <span className="text-blue-400">*</span>
          </label>
          <input
            id="booking-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className={inputClasses}
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <label htmlFor="booking-phone" className={labelClasses}>
            Phone Number <span className="text-blue-400">*</span>
          </label>
          <input
            id="booking-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+92 3XX XXXXXXX"
            required
            className={inputClasses}
          />
        </motion.div>
      </div>

      <motion.div variants={fadeUp}>
        <label htmlFor="booking-service" className={labelClasses}>
          Service
        </label>
        <select
          id="booking-service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`${inputClasses} appearance-none cursor-pointer`}
        >
          <option value="">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div variants={fadeUp}>
        <label htmlFor="booking-date" className={labelClasses}>
          Preferred Date
        </label>
        <input
          id="booking-date"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          min={minDate || undefined}
          className={`${inputClasses} [color-scheme:dark]`}
        />
      </motion.div>

      <motion.div variants={fadeUp}>
        <label htmlFor="booking-notes" className={labelClasses}>
          Additional Notes
        </label>
        <textarea
          id="booking-notes"
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Anything we should know about your vehicle..."
          rows={4}
          className={`${inputClasses} resize-none`}
        />
      </motion.div>

      <motion.div variants={fadeUp}>
        <button
          type="submit"
          disabled={!form.name || !form.phone}
          className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-500 text-white text-sm font-semibold tracking-widest uppercase rounded-lg shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          <Send size={15} />
          Send via WhatsApp
        </button>
        <p className="mt-3 text-center text-xs text-gray-600">
          This will open WhatsApp with your details pre-filled.
        </p>
      </motion.div>
    </motion.form>
  );
}

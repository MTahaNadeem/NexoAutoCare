'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/types';
import { fadeUp } from '@/lib/animations';
import { Sparkles, Shield, Sofa, Droplets, Wrench, Wind } from 'lucide-react';

const ICONS: Record<string, React.ReactNode> = {
  sparkles: <Sparkles size={22} />,
  shield: <Shield size={22} />,
  sofa: <Sofa size={22} />,
  droplets: <Droplets size={22} />,
  wrench: <Wrench size={22} />,
  wind: <Wind size={22} />,
};

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const icon = ICONS[service.icon] ?? <Sparkles size={22} />;

  if (compact) {
    return (
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.4)' }}
        className="group flex flex-col gap-4 p-6 bg-[#111] border border-white/8 rounded-xl transition-colors duration-300 cursor-pointer"
      >
        <Link href={`/services#${service.id}`} className="block h-full">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-blue-400/60 group-hover:text-blue-400 transition-colors duration-300">
              {icon}
            </span>
            <h3 className="font-display text-xl tracking-wide text-white leading-none">
              {service.title}
            </h3>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{service.tagline}</p>
          {service.priceFrom && (
            <p className="mt-3 text-xs text-blue-400/70 font-medium tracking-wide">
              From {service.priceFrom}
            </p>
          )}
          <span className="mt-4 inline-flex items-center gap-1 text-xs text-gray-600 group-hover:text-blue-400 transition-colors duration-300">
            Learn more <ArrowRight size={12} />
          </span>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      id={service.id}
      variants={fadeUp}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#111] border border-white/8 rounded-2xl overflow-hidden"
    >
      {service.image && (
        <div className="relative h-56 lg:h-full min-h-[220px] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111]/80 lg:block hidden" />
        </div>
      )}
      <div className="p-8 lg:p-10 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-blue-400">{icon}</span>
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-400/60">
            {service.priceFrom ? `From ${service.priceFrom}` : 'Premium Service'}
          </span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl tracking-wide text-white mb-3 leading-none">
          {service.title}
        </h3>
        <p className="text-sm text-blue-300/60 font-medium mb-4 italic">{service.tagline}</p>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

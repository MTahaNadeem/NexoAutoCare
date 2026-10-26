'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { PHONE, PHONE_CLEAN, WHATSAPP_BASE } from '@/lib/constants';
import { MessageCircle } from 'lucide-react';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  tel?: boolean;
  whatsapp?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  prefillMessage?: string;
}

export function CTAButton({
  variant = 'primary',
  size = 'md',
  href,
  tel,
  whatsapp,
  children,
  className = '',
  onClick,
  prefillMessage,
}: CTAButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-xs gap-1.5',
    md: 'px-7 py-3.5 text-sm gap-2',
    lg: 'px-9 py-4 text-base gap-2.5',
  };

  const baseClasses = `inline-flex items-center justify-center font-semibold tracking-widest uppercase rounded-md transition-all duration-200 ${sizeClasses[size]} ${className}`;

  const variantClasses = {
    primary:
      'bg-blue-500 text-white shadow-[0_0_24px_rgba(59,130,246,0.4)] hover:shadow-[0_0_42px_rgba(59,130,246,0.65)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-transparent text-gray-400 border border-white/10 hover:border-blue-500/50 hover:text-blue-400',
    whatsapp:
      'bg-[#25d366]/10 text-[#25d366] border border-[#25d366]/30 hover:bg-[#25d366]/20 hover:shadow-[0_0_24px_rgba(37,211,102,0.25)] hover:-translate-y-0.5',
    ghost: 'bg-transparent text-gray-400 hover:text-blue-400',
  };

  const resolvedHref = tel
    ? `tel:${PHONE_CLEAN}`
    : whatsapp
    ? `${WHATSAPP_BASE}${prefillMessage ? `?text=${encodeURIComponent(prefillMessage)}` : ''}`
    : href ?? '#';

  const isExternal = whatsapp || (href?.startsWith('http') ?? false);

  const motionProps = {
    whileHover: { scale: variant === 'primary' ? 1.02 : 1.01 },
    whileTap: { scale: 0.97 },
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]}`;

  if (onClick) {
    return (
      <motion.button {...motionProps} onClick={onClick} className={combinedClasses}>
        {children}
      </motion.button>
    );
  }

  if (isExternal) {
    return (
      <motion.a
        {...motionProps}
        href={resolvedHref}
        target={whatsapp ? '_blank' : undefined}
        rel={whatsapp ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps} className="inline-block">
      <Link href={resolvedHref} className={combinedClasses}>
        {children}
      </Link>
    </motion.div>
  );
}

export function CallButton({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  return (
    <CTAButton tel variant="primary" size={size} className={className}>
      <Phone size={size === 'lg' ? 18 : 15} />
      Call Now — {PHONE}
    </CTAButton>
  );
}

export function WhatsAppButton({ size = 'md', message = '', className = '' }: { size?: 'sm' | 'md' | 'lg'; message?: string; className?: string }) {
  return (
    <CTAButton whatsapp variant="whatsapp" size={size} prefillMessage={message} className={className}>
      <MessageCircle size={size === 'lg' ? 18 : 15} />
      WhatsApp
    </CTAButton>
  );
}

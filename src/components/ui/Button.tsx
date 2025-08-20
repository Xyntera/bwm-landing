'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const variants = {
  primary: 'bg-bright-blue hover:bg-bright-blue/90 text-white border-bright-blue',
  accent: 'bg-electric-yellow hover:bg-electric-yellow/90 text-deep-charcoal border-electric-yellow',
  secondary: 'bg-transparent hover:bg-soft-turquoise/10 text-soft-turquoise border-soft-turquoise',
  ghost: 'bg-transparent hover:bg-deep-charcoal/5 text-deep-charcoal border-transparent',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
        'border-2 focus:outline-none focus:ring-2 focus:ring-bright-blue/50 focus:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
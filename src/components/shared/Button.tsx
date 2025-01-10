'use client';

import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  children: React.ReactNode;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  variant = 'primary', 
  icon: Icon, 
  children, 
  className = '',
  href,
  size = 'md',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all rounded-lg';
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg'
  };

  const variants = {
    primary: 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-sm hover:shadow active:shadow-inner',
    secondary: 'bg-white text-emerald-600 border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50'
  };

  const classes = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {Icon && <Icon className="w-5 h-5" />}
      </Link>
    );
  }

  return (
    <button 
      className={classes}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
}
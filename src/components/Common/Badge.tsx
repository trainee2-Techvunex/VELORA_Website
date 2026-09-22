import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'discount';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  size = 'sm',
  className = '',
}) => {
  const variants = {
    primary: 'bg-[#E11D48] text-white',
    secondary: 'bg-[#FFF0F3] text-[#9F1239] border border-[#FDE2E8]',
    gold: 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-xs',
    outline: 'border border-[#E5D5D8] text-slate-700 bg-white',
    discount: 'bg-[#22C55E] text-white font-bold',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider font-semibold',
    md: 'text-xs px-2.5 py-1 font-semibold tracking-wide',
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-sm uppercase tracking-wider ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
    </span>
  );
};

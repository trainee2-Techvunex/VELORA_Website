import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  className?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  reviewCount,
  size = 'sm',
  showCount = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <div className="inline-flex items-center gap-1 bg-[#FFF0F3] text-[#9F1239] px-2 py-0.5 rounded-full text-xs font-semibold tracking-tight border border-[#FDE2E8]">
        <span>{rating.toFixed(1)}</span>
        <Star className={`${iconSizes[size]} fill-[#E11D48] text-[#E11D48]`} />
        {reviewCount !== undefined && showCount && (
          <span className="text-slate-400 font-normal pl-0.5 border-l border-[#FDE2E8] ml-0.5">
            {reviewCount}
          </span>
        )}
      </div>
    </div>
  );
};

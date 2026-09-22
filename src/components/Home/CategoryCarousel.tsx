import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { HOME_CATEGORY_CAROUSEL } from '../../data/categories';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { SafeImage } from '../Common/SafeImage';

export const CategoryCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-white border-b border-[#F0E9E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9F1239] block mb-1">
              Curated Discoveries
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Shop by Category
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-[#F0E9E6] hover:border-[#9F1239] bg-white hover:bg-[#FFF0F3] text-slate-600 hover:text-[#9F1239] flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Previous categories"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-[#F0E9E6] hover:border-[#9F1239] bg-white hover:bg-[#FFF0F3] text-slate-600 hover:text-[#9F1239] flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Next categories"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories Row */}
        <div
          ref={scrollRef}
          className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar pb-2 px-1 scroll-smooth snap-x"
        >
          {HOME_CATEGORY_CAROUSEL.map((cat, idx) => (
            <Link
              key={idx}
              to={cat.link}
              className="group flex flex-col items-center shrink-0 w-20 sm:w-28 text-center snap-start"
            >
              <div className="relative w-18 h-18 sm:w-24 sm:h-24 rounded-full p-1 border-2 border-transparent group-hover:border-[#E11D48] transition-all duration-300 shadow-2xs group-hover:shadow-md bg-[#FFF5F7]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <SafeImage
                    src={cat.image}
                    alt={cat.name}
                    fallbackCategory={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {cat.badge && (
                  <span className="absolute -bottom-1 inset-x-0 mx-auto w-max max-w-[95%] bg-[#E11D48] text-white text-[7.5px] sm:text-[8px] font-bold px-1.5 py-0.2 rounded-full uppercase truncate shadow-xs">
                    {cat.badge}
                  </span>
                )}
              </div>
              <span className="mt-2 text-[11px] sm:text-xs font-semibold text-slate-800 group-hover:text-[#9F1239] transition-colors leading-tight line-clamp-2 h-7 sm:h-auto flex items-center justify-center">
                {cat.name}
              </span>
            </Link>
          ))}
          {/* End padding pill for mobile */}
          <div className="w-2 shrink-0 sm:hidden" />
        </div>
      </div>
    </section>
  );
};

import React, { useRef } from 'react';
import { CUSTOMER_REVIEWS } from '../../data/reviews';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9F1239] block mb-1">
              Real Stories & Verified Love
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              What Our Patrons Say
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-[#F0E9E6] hover:border-[#9F1239] bg-white hover:bg-[#FFF0F3] text-slate-700 hover:text-[#9F1239] flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-[#F0E9E6] hover:border-[#9F1239] bg-white hover:bg-[#FFF0F3] text-slate-700 hover:text-[#9F1239] flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-4 scroll-smooth"
        >
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="w-[300px] sm:w-[360px] p-6 rounded-3xl bg-[#FAF9F8] border border-[#F0E9E6] shrink-0 flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-3">
                {/* Rating + Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E11D48] text-[#E11D48]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#FBA6BC] opacity-50" />
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-1 h-5">
                  "{rev.title}"
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed italic line-clamp-3 h-14">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0E9E6] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-900">{rev.userName}</span>
                    {rev.verified && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded-xs">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>
                  {rev.location && (
                    <p className="text-[10px] text-slate-400 mt-0.5">{rev.location}</p>
                  )}
                </div>

                <span className="text-[10px] text-slate-400 font-mono">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

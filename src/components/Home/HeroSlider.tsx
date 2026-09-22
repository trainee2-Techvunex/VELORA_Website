import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { SafeImage } from '../Common/SafeImage';
import { HERO_BANNERS } from '../../data/banners';

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const banner = HERO_BANNERS[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_BANNERS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_BANNERS.length);
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-[#FFF5F7] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={banner.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`w-full h-full bg-gradient-to-r ${banner.bgGradient} flex items-center py-6 sm:py-10 lg:py-12`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
              {/* Left Text Content */}
              <div className="lg:col-span-6 space-y-2.5 sm:space-y-4 text-left z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#FDE2E8] shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#9F1239] uppercase">
                    {banner.tag} • {banner.badge}
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="font-serif text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.2] tracking-tight">
                  {banner.title}{' '}
                  <span className="text-[#9F1239] italic font-serif block sm:inline">
                    {banner.highlight}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm lg:text-base text-slate-600 max-w-lg font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {banner.subtitle}
                </p>

                {/* CTA Button */}
                <div className="pt-1 sm:pt-2 flex items-center gap-2.5 sm:gap-4 flex-wrap">
                  <Link
                    to={banner.ctaLink}
                    className="px-5 sm:px-7 py-2.5 sm:py-3.5 bg-[#9F1239] hover:bg-[#801836] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 group active:scale-98"
                  >
                    <span>{banner.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/collection/all"
                    className="px-3.5 py-2.5 text-xs sm:text-sm font-bold tracking-wider text-slate-800 hover:text-[#9F1239] uppercase transition-colors"
                  >
                    View All Products
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end mt-1 sm:mt-2 lg:mt-0">
                <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg aspect-[4/3.2] sm:aspect-[4/3.5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white/80">
                  <SafeImage
                    src={banner.image}
                    alt={banner.title}
                    fallbackCategory="fragrance"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Glass floating card */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 p-2 sm:p-3.5 bg-white/95 backdrop-blur-xs rounded-xl sm:rounded-2xl flex items-center justify-between shadow-lg border border-white/60">
                    <div>
                      <p className="text-[8.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#9F1239]">
                        100% Authentic Luxury
                      </p>
                      <p className="text-[10px] sm:text-xs font-semibold text-slate-800">
                        Crafted in Grasse & Mysore
                      </p>
                    </div>
                    <span className="text-[9px] sm:text-xs font-bold text-[#E11D48] bg-[#FFF0F3] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#FDE2E8]">
                      Free Shipping ₹499+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows (Desktop Only to avoid mobile clutter) */}
      <div className="hidden lg:flex absolute inset-y-0 left-4 lg:left-6 items-center z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-[#9F1239] border border-[#F0E9E6] shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="hidden lg:flex absolute inset-y-0 right-4 lg:right-6 items-center z-20 pointer-events-none">
        <button
          onClick={nextSlide}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-[#9F1239] border border-[#F0E9E6] shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Dots Indicator */}
      <div className="absolute bottom-3 sm:bottom-4 inset-x-0 flex justify-center items-center gap-2 z-20">
        {HERO_BANNERS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? 'w-7 bg-[#9F1239]'
                : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

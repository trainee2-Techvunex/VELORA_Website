import React from 'react';
import { Link } from 'react-router-dom';
import { SHOP_BY_CONCERN } from '../../data/concerns';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SafeImage } from '../Common/SafeImage';

export const ShopByConcern: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9F1239] block mb-1">
              Targeted Skincare Solutions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Shop by Concern
            </h2>
          </div>
          <Link
            to="/collection/skincare"
            className="text-xs font-bold uppercase tracking-wider text-[#9F1239] hover:text-[#801836] flex items-center gap-1.5"
          >
            <span>All Skincare</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
          {SHOP_BY_CONCERN.map((concern, idx) => (
            <Link
              key={idx}
              to={concern.link}
              className="group flex flex-col items-center justify-between text-center bg-[#FAF9F8] hover:bg-[#FFF5F7] border border-[#F0E9E6] hover:border-[#FBA6BC] rounded-2xl p-3 sm:p-4 transition-all duration-300 shadow-2xs hover:shadow-lg h-full"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden bg-white shadow-2xs p-1 mb-2.5 sm:mb-3 shrink-0">
                <SafeImage
                  src={concern.image}
                  alt={concern.title}
                  fallbackCategory="skincare"
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#9F1239] transition-colors leading-tight">
                  {concern.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 line-clamp-1">
                  {concern.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

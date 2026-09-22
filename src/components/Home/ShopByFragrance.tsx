import React from 'react';
import { Link } from 'react-router-dom';
import { SHOP_BY_FRAGRANCE_FAMILY } from '../../data/concerns';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SafeImage } from '../Common/SafeImage';

export const ShopByFragrance: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF7F6] border-y border-[#F0E9E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9F1239] block mb-1">
              The French Olfactory Bar
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Shop by Fragrance Family
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Find notes that match your persona — from blooming Grasse roses to aged Mysore Sandalwood.
            </p>
          </div>
          <Link
            to="/collection/fragrances"
            className="text-xs font-bold uppercase tracking-wider text-[#9F1239] hover:text-[#801836] flex items-center gap-1.5 shrink-0"
          >
            <span>Explore All Parfums</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
          {SHOP_BY_FRAGRANCE_FAMILY.map((fam, idx) => (
            <Link
              key={idx}
              to={fam.link}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#F0E9E6] hover:border-[#FBA6BC] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="aspect-[4/3.2] overflow-hidden bg-[#FFF5F7] shrink-0">
                <SafeImage
                  src={fam.image}
                  alt={fam.name}
                  fallbackCategory="fragrance"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
              </div>
              <div className="p-3 sm:p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#9F1239] transition-colors leading-tight line-clamp-1 h-5">
                    {fam.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 line-clamp-2 h-7 sm:h-8">
                    {fam.notes}
                  </p>
                </div>
                <div className="mt-2.5 sm:mt-3 flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#9F1239]">
                  <span>Discover</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

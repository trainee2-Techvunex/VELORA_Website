import React from 'react';
import { Link } from 'react-router-dom';
import { SHOP_BY_BOND } from '../../data/concerns';
import { Heart, ArrowRight } from 'lucide-react';
import { SafeImage } from '../Common/SafeImage';

export const ShopByBond: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9F1239] block">
            Meaningful Bonds
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Shop by Recipient & Relation
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Find the perfect bespoke formulation or artisanal fragrance for the most special people in your life.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {SHOP_BY_BOND.map((bond, idx) => (
            <Link
              key={idx}
              to={bond.link}
              className="group relative rounded-2xl overflow-hidden border border-[#F0E9E6] hover:border-[#FBA6BC] shadow-2xs hover:shadow-lg transition-all duration-300 bg-[#FAF9F8]"
            >
              <div className="aspect-square overflow-hidden">
                <SafeImage
                  src={bond.image}
                  alt={bond.title}
                  fallbackCategory="gifting"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
              </div>
              <div className="p-3 text-center bg-white">
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#9F1239] transition-colors leading-tight">
                  {bond.title}
                </h3>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {bond.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

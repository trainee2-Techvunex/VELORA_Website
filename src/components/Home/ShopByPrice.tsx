import React from 'react';
import { Link } from 'react-router-dom';
import { SHOP_BY_PRICE_TIERS } from '../../data/concerns';
import { ArrowRight, Tag } from 'lucide-react';

export const ShopByPrice: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#FFF5F7] border-y border-[#FDE2E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#E11D48] bg-white px-2.5 py-1 rounded-full border border-[#FDE2E8] uppercase tracking-wider">
            <Tag className="w-3 h-3" />
            <span>BUDGET CURATIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Shop by Price
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Luxury formulated for every pocket and occasion.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {SHOP_BY_PRICE_TIERS.map((tier, idx) => (
            <Link
              key={idx}
              to={tier.link}
              className={`group p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${tier.color} border border-white/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full`}
            >
              <div>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#9F1239] uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded-full border border-white inline-block">
                  {tier.tag}
                </span>
                <h3 className="font-sans text-base sm:text-2xl font-bold text-slate-900 mt-2.5 sm:mt-4 group-hover:text-[#9F1239] transition-colors tracking-tight">
                  {tier.label}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 line-clamp-2">
                  {tier.description}
                </p>
              </div>

              <div className="mt-4 sm:mt-6 flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#9F1239]">
                <span>Explore</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white group-hover:bg-[#9F1239] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

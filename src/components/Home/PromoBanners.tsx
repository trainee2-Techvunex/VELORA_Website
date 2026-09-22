import React from 'react';
import { Link } from 'react-router-dom';
import { EDITORIAL_BANNERS } from '../../data/banners';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SafeImage } from '../Common/SafeImage';

export const PromoBanners: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDITORIAL_BANNERS.map((banner, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden border border-[#F0E9E6] shadow-sm hover:shadow-xl transition-all duration-500 bg-[#FFF5F7]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
                {/* Left Text */}
                <div className="sm:col-span-7 p-6 sm:p-8 space-y-3 z-10">
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#E11D48] bg-white px-2.5 py-1 rounded-full border border-[#FDE2E8] uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>CURATED EDIT</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    {banner.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {banner.subtitle}
                  </p>

                  <p className="text-xs font-bold text-[#9F1239]">
                    {banner.offer}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={banner.link}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9F1239] hover:bg-[#801836] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs transition-all active:scale-95"
                    >
                      <span>{banner.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Image */}
                <div className="sm:col-span-5 aspect-[4/3] sm:aspect-square overflow-hidden">
                  <SafeImage
                    src={banner.image}
                    alt={banner.title}
                    fallbackCategory="skincare"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { MegaMenuData } from '../../data/categories';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SafeImage } from '../Common/SafeImage';

interface MegaMenuProps {
  data: MegaMenuData;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ data, onClose }) => {
  return (
    <div className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-md shadow-2xl border-t border-b border-[#F0E9E6] z-40 animate-fade-in py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-start">
        {/* Columns */}
        <div className={`grid ${data.promoCard ? 'col-span-8 grid-cols-3' : 'col-span-12 grid-cols-4'} gap-6`}>
          {data.columns.map((col, colIdx) => (
            <div key={colIdx} className="space-y-3">
              <h4 className="text-xs font-bold text-[#9F1239] uppercase tracking-wider pb-1.5 border-b border-[#FDE2E8]">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      to={item.link}
                      onClick={onClose}
                      className="group flex items-center justify-between text-xs text-slate-600 hover:text-[#9F1239] font-medium transition-colors py-0.5"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                      {item.badge && (
                        <span className="bg-[#FFF0F3] text-[#9F1239] border border-[#FDE2E8] text-[10px] font-bold px-1.5 py-0.2 rounded-xs uppercase">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Promo Card if exists */}
        {data.promoCard && (
          <div className="col-span-4 pl-4 border-l border-[#F0E9E6]">
            <Link
              to={data.promoCard.link}
              onClick={onClose}
              className="group block relative rounded-2xl overflow-hidden shadow-md border border-[#F0E9E6] bg-[#FFF5F7]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <SafeImage
                  src={data.promoCard.image}
                  alt={data.promoCard.title}
                  fallbackCategory="perfume"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#E11D48] tracking-widest uppercase mb-1">
                  <Sparkles className="w-3 h-3" />
                  {data.promoCard.tag}
                </span>
                <h5 className="font-serif text-base font-bold text-slate-900 group-hover:text-[#9F1239] transition-colors">
                  {data.promoCard.title}
                </h5>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                  {data.promoCard.subtitle}
                </p>
                <div className="mt-2.5 flex items-center gap-1 text-xs font-bold text-[#9F1239]">
                  <span>Discover Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

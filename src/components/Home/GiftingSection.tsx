import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { SafeImage } from '../Common/SafeImage';

const GIFT_CATEGORIES = [
  {
    title: 'Birthday Celebration Gifts',
    subtitle: 'From ₹1,499 • Scented & Glow Sets',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80',
    link: '/collection/gifting',
    badge: 'TOP CHOICE',
  },
  {
    title: 'Gifts for Her',
    subtitle: 'French Rose EDP, Lip Glazes & Cloud Creams',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80',
    link: '/collection/all?recipient=Gifts for Her',
    badge: 'MOST LOVED',
  },
  {
    title: 'Gifts for Him',
    subtitle: 'Smoked Bourbon Colognes & Grooming Kits',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80',
    link: '/collection/men',
  },
  {
    title: 'Anniversary & Couple Sets',
    subtitle: 'His & Hers 100ml Parfums Duo',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80',
    link: '/product/anniversary-couple-scent-duo',
    badge: 'LUXURY VAULT',
  },
  {
    title: 'Self-Care Sunday Hampers',
    subtitle: 'Whipped Body Butters, Salts & Mists',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80',
    link: '/collection/bodycare',
  },
  {
    title: 'Pocket Luxury Under ₹999',
    subtitle: 'Travel Discovery Sprays & Lip Oils',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
    link: '/collection/all?maxPrice=999',
    badge: 'SAVE 30%',
  },
];

export const GiftingSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#FFF5F7] border-y border-[#FDE2E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#FDE2E8] text-[#9F1239] text-xs font-bold uppercase tracking-widest">
            <Gift className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>The Gift Store</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Gifting Made Effortless & Beautiful
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Every gift box comes nestled in our signature blush keepsake box with satin ribbons and a complimentary wax-sealed message card.
          </p>
        </div>

        {/* Gifting Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GIFT_CATEGORIES.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#F0E9E6] hover:border-[#FBA6BC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF7F7]">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fallbackCategory="gifting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-[#9F1239] text-white text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#9F1239] transition-colors leading-snug line-clamp-1 h-6">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1 h-4">{item.subtitle}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#FFF0F3] group-hover:bg-[#9F1239] text-[#9F1239] group-hover:text-white flex items-center justify-center transition-colors shrink-0 ml-2">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

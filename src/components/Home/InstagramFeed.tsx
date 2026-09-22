import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Sparkles } from 'lucide-react';
import { SafeImage } from '../Common/SafeImage';

const INSTA_POSTS = [
  {
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80',
    productName: 'Velvet Damask Rose EDP',
    link: '/product/velvet-rose-eau-de-parfum',
    likes: '1.4k',
  },
  {
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80',
    productName: '24K Gold Glow Serum',
    link: '/product/24k-gold-glow-radiance-serum',
    likes: '2.8k',
  },
  {
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80',
    productName: 'Dewy Sunscreen SPF 50',
    link: '/product/dewy-glow-sunscreen-spf50-pa',
    likes: '3.1k',
  },
  {
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80',
    productName: 'Mysore Sandalwood & Oud',
    link: '/product/mysore-sandalwood-royal-oud',
    likes: '980',
  },
  {
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=80',
    productName: 'Peptide Glazed Lip Oil',
    link: '/product/peptide-glazed-lip-oil-rose-tint',
    likes: '4.2k',
  },
  {
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=500&q=80',
    productName: 'Royal 24K Gift Set',
    link: '/product/royal-glow-ritual-gift-box',
    likes: '1.9k',
  },
];

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#9F1239]">
            <Sparkles className="w-4 h-4 text-[#E11D48]" />
            <span>@velorabeauty • The Social Vanity</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Follow The Glow
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Tag #VeloraGlow on Instagram to be featured on our vanity lookbook.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTA_POSTS.map((post, idx) => (
            <Link
              key={idx}
              to={post.link}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-2xs border border-[#F0E9E6] block"
            >
              <SafeImage
                src={post.image}
                alt={post.productName}
                fallbackCategory="perfume"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#9F1239]/75 backdrop-blur-2xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-white">
                <div className="flex justify-end">
                  <span className="flex items-center gap-1 text-[10px] font-bold">
                    <Heart className="w-3 h-3 fill-white" />
                    {post.likes}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight line-clamp-2">
                    {post.productName}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold mt-1 bg-white text-[#9F1239] px-2 py-0.5 rounded-full">
                    <ShoppingBag className="w-2.5 h-2.5" />
                    <span>Shop Look</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

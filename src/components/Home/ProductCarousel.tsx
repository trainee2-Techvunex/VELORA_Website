import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { ProductCard } from '../Product/ProductCard';
import { QuickViewModal } from '../Common/QuickViewModal';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  tag?: string;
  products: Product[];
  tabs?: string[];
  viewAllLink?: string;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  subtitle,
  tag,
  products,
  tabs,
  viewAllLink = '/collection/all',
}) => {
  const [activeTab, setActiveTab] = useState<string>(tabs && tabs.length > 0 ? tabs[0] : 'All');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    activeTab === 'All' || !tabs
      ? products
      : products.filter((p) =>
          p.subcategory.toLowerCase().includes(activeTab.toLowerCase()) ||
          p.category.toLowerCase().includes(activeTab.toLowerCase()) ||
          (p.badge && p.badge.toLowerCase().includes(activeTab.toLowerCase()))
        );

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-[#FAF9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            {tag && (
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9F1239] block mb-1">
                {tag}
              </span>
            )}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl font-normal">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to={viewAllLink}
              className="text-xs font-bold uppercase tracking-wider text-[#9F1239] hover:text-[#801836] flex items-center gap-1.5 transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-full border border-[#F0E9E6] hover:border-[#9F1239] bg-white hover:bg-[#FFF0F3] text-slate-700 hover:text-[#9F1239] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-full border border-[#F0E9E6] hover:border-[#9F1239] bg-white hover:bg-[#FFF0F3] text-slate-700 hover:text-[#9F1239] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Next products"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs if provided */}
        {tabs && tabs.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                  activeTab === tab
                    ? 'bg-[#9F1239] text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-[#F0E9E6]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* 4-Product Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-6 overflow-x-auto no-scrollbar pb-4 px-1 scroll-smooth snap-x"
        >
          {filteredProducts.slice(0, 10).map((product) => (
            <div
              key={product.id}
              className="w-[230px] sm:w-[270px] lg:w-[290px] shrink-0 snap-start flex flex-col"
            >
              <ProductCard
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            </div>
          ))}
          {/* End spacing pill on mobile */}
          <div className="w-2 shrink-0 sm:hidden" />
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
};

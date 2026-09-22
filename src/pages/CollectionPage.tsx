import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Product, FilterState } from '../types';
import { ProductCard } from '../components/Product/ProductCard';
import { ProductFilters } from '../components/Product/ProductFilters';
import { SortDropdown } from '../components/Product/SortDropdown';
import { MobileFilterDrawer } from '../components/Product/MobileFilterDrawer';
import { QuickViewModal } from '../components/Common/QuickViewModal';
import { Breadcrumbs } from '../components/Common/Breadcrumbs';
import { SlidersHorizontal, ShoppingBag } from 'lucide-react';

const CATEGORY_METADATA: Record<string, { title: string; subtitle: string; bannerBg: string }> = {
  all: {
    title: 'All Products & Collections',
    subtitle: 'Explore our complete library of fine French fragrances, 24K gold serums, and whipped body soufflés.',
    bannerBg: 'from-[#FFF0F4] to-[#FFE4EC]',
  },
  skincare: {
    title: 'Botanical Skincare Rituals',
    subtitle: 'Targeted serums, cloud creams, invisible SPF 50 sunscreens, and glazed lip treatments.',
    bannerBg: 'from-[#FFF8F0] to-[#FDEEE3]',
  },
  fragrances: {
    title: 'Fine Parfums & Body Mists',
    subtitle: 'Artisanal Eau de Parfums distilled in Grasse with Damask Rose, Mysore Sandalwood & Oud.',
    bannerBg: 'from-[#FFF0F4] to-[#FCE7F0]',
  },
  bodycare: {
    title: 'Whipped Body Care & Shower',
    subtitle: 'Silk shower gels, 48-hour whipped body butters, and exfoliating AHA smoothing lotions.',
    bannerBg: 'from-[#FDF2F4] to-[#F5DDE6]',
  },
  haircare: {
    title: 'Scalp & Hair Density Rituals',
    subtitle: 'Rosemary & 3% Redensyl density serums, Ayurvedic Bhringraj oils, and argan hair masks.',
    bannerBg: 'from-[#EBF7EE] to-[#E2F2E6]',
  },
  men: {
    title: 'Men’s Fine Grooming & Colognes',
    subtitle: 'Smoked Bourbon & Tobacco EDP, Cedarwood beard growth elixirs, and detoxifying charcoal washes.',
    bannerBg: 'from-[#F4F3F0] to-[#ECEAE4]',
  },
  gifting: {
    title: 'The Luxury Gift Store',
    subtitle: 'Curated skincare sets, his & hers fragrance boxes, and keepsake coffrets with complimentary ribbons.',
    bannerBg: 'from-[#FFF0F4] to-[#FFE4EC]',
  },
};

export const CollectionPage: React.FC = () => {
  const { category = 'all' } = useParams<{ category: string }>();
  const [searchParams] = useSearchParams();

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Initial Filter State
  const initialFilters: FilterState = {
    categories: category && category !== 'all' ? [category] : [],
    subcategories: searchParams.get('sub') ? [searchParams.get('sub')!] : [],
    concerns: searchParams.get('concern') ? [searchParams.get('concern')!] : [],
    fragranceFamilies: searchParams.get('fragrance') ? [searchParams.get('fragrance')!] : [],
    skinTypes: searchParams.get('skinType') ? [searchParams.get('skinType')!] : [],
    priceRange: [
      Number(searchParams.get('minPrice')) || 0,
      Number(searchParams.get('maxPrice')) || 5000,
    ],
    minRating: 0,
    inStockOnly: false,
    discountOnly: false,
    badge: searchParams.get('badge') || undefined,
    sortBy: 'featured',
  };

  const [filters, setFilters] = useState<FilterState>(initialFilters);

  // Sync category route param changes
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      categories: category && category !== 'all' ? [category] : [],
      subcategories: searchParams.get('sub') ? [searchParams.get('sub')!] : [],
      concerns: searchParams.get('concern') ? [searchParams.get('concern')!] : [],
      fragranceFamilies: searchParams.get('fragrance') ? [searchParams.get('fragrance')!] : [],
      skinTypes: searchParams.get('skinType') ? [searchParams.get('skinType')!] : [],
      badge: searchParams.get('badge') || undefined,
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category, searchParams]);

  const searchQuery = searchParams.get('search') || '';
  const recipientQuery = searchParams.get('recipient') || '';

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // 1. Category filter
      if (category !== 'all' && p.category.toLowerCase() !== category.toLowerCase()) {
        return false;
      }

      // 2. Intelligent Multi-token Search query filter
      if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        const terms = q.split(/\s+/).filter(Boolean);
        const searchableText = [
          p.name,
          p.category,
          p.subcategory,
          p.description,
          p.shortDescription,
          p.concern || '',
          p.fragranceFamily || '',
          p.collection || '',
          ...(p.ingredients || []),
          ...(p.benefits || []),
        ].join(' ').toLowerCase();

        // Must match all tokens
        const matchesAll = terms.every((term) => searchableText.includes(term));
        if (!matchesAll) return false;
      }

      // 3. Recipient filter
      if (
        recipientQuery &&
        (!p.recipient || !p.recipient.some((r) => r.toLowerCase().includes(recipientQuery.toLowerCase())))
      ) {
        return false;
      }

      // 4. Subcategory filter (resilient matching)
      if (
        filters.subcategories.length > 0 &&
        !filters.subcategories.some(
          (sub) =>
            p.subcategory.toLowerCase().includes(sub.toLowerCase()) ||
            sub.toLowerCase().includes(p.subcategory.toLowerCase()) ||
            p.name.toLowerCase().includes(sub.toLowerCase())
        )
      ) {
        return false;
      }

      // 5. Concern filter (resilient matching)
      if (
        filters.concerns.length > 0 &&
        !filters.concerns.some(
          (c) =>
            (p.concern && (p.concern.toLowerCase().includes(c.toLowerCase()) || c.toLowerCase().includes(p.concern.toLowerCase()))) ||
            p.description.toLowerCase().includes(c.toLowerCase()) ||
            p.name.toLowerCase().includes(c.toLowerCase()) ||
            (p.subtitle && p.subtitle.toLowerCase().includes(c.toLowerCase()))
        )
      ) {
        return false;
      }

      // 6. Fragrance family filter (resilient matching)
      if (
        filters.fragranceFamilies.length > 0 &&
        !filters.fragranceFamilies.some(
          (f) =>
            (p.fragranceFamily && (p.fragranceFamily.toLowerCase().includes(f.toLowerCase()) || f.toLowerCase().includes(p.fragranceFamily.toLowerCase()))) ||
            p.description.toLowerCase().includes(f.toLowerCase()) ||
            p.name.toLowerCase().includes(f.toLowerCase()) ||
            (p.subtitle && p.subtitle.toLowerCase().includes(f.toLowerCase()))
        )
      ) {
        return false;
      }

      // 7. Skin type filter
      if (
        filters.skinTypes.length > 0 &&
        (!p.skinType ||
          (p.skinType !== 'All Skin Types' && !filters.skinTypes.some((st) => p.skinType?.toLowerCase().includes(st.toLowerCase()))))
      ) {
        return false;
      }

      // 8. Price range
      if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1]) {
        return false;
      }

      // 9. Rating
      if (filters.minRating > 0 && p.rating < filters.minRating) {
        return false;
      }

      // 10. Badge filter
      if (filters.badge && p.badge !== filters.badge) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-low') return a.price - b.price;
      if (filters.sortBy === 'price-high') return b.price - a.price;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      if (filters.sortBy === 'bestsellers') return (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0);
      if (filters.sortBy === 'newest') return (b.newLaunch ? 1 : 0) - (a.newLaunch ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [category, filters, searchQuery, recipientQuery]);

  const meta = CATEGORY_METADATA[category] || CATEGORY_METADATA.all;

  const handleResetFilters = () => {
    setFilters({
      categories: category && category !== 'all' ? [category] : [],
      subcategories: [],
      concerns: [],
      fragranceFamilies: [],
      skinTypes: [],
      priceRange: [0, 5000],
      minRating: 0,
      inStockOnly: false,
      discountOnly: false,
      sortBy: 'featured',
    });
  };

  return (
    <div className="bg-[#FAF9F8] min-h-screen">
      {/* 1. Header Banner */}
      <div className={`bg-gradient-to-r ${meta.bannerBg} py-8 sm:py-12 border-b border-[#F0E9E6]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-3">
          <Breadcrumbs
            items={[
              { label: 'Collections', link: '/collection/all' },
              { label: meta.title },
            ]}
          />

          <div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {searchQuery ? `Search results for "${searchQuery}"` : meta.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-normal">
              {meta.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Main Content & Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#F0E9E6]">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-[#F0E9E6] rounded-xl text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#9F1239]" />
            <span>Filters</span>
          </button>

          <span className="text-xs text-slate-500 font-medium">
            Showing <strong>{filteredProducts.length}</strong> luxurious creations
          </span>

          {/* Sort Dropdown */}
          <SortDropdown
            sortBy={filters.sortBy}
            onSortChange={(val) => setFilters({ ...filters, sortBy: val })}
          />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-3 bg-white rounded-2xl p-6 border border-[#F0E9E6] shadow-2xs sticky top-24">
            <ProductFilters
              filters={filters}
              onFilterChange={setFilters}
              onReset={handleResetFilters}
              totalCount={filteredProducts.length}
            />
          </div>

          {/* Product Cards Grid */}
          <div className="lg:col-span-9">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center bg-white rounded-3xl border border-[#F0E9E6] p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FFF0F3] border border-[#FDE2E8] flex items-center justify-center text-[#9F1239] mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  No products matched your filters
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try clearing some filters or exploring our bestsellers to discover our full range.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 bg-[#9F1239] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs hover:bg-[#801836]"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        filters={filters}
        onFilterChange={setFilters}
        onReset={handleResetFilters}
        totalCount={filteredProducts.length}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};

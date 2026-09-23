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
  const parseFiltersFromURL = (): FilterState => ({
    categories: category && category !== 'all' ? [category] : [],
    subcategories: searchParams.get('sub') ? [searchParams.get('sub')!] : [],
    concerns: searchParams.get('concern') ? [searchParams.get('concern')!] : [],
    fragranceFamilies: searchParams.get('fragrance') ? [searchParams.get('fragrance')!] : [],
    skinTypes: searchParams.get('skinType') ? [searchParams.get('skinType')!] : [],
    priceRange: [
      searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : 0,
      searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : 99999,
    ],

    minRating: searchParams.get('rating') ? Number(searchParams.get('rating')) : 0,
    inStockOnly: false,
    discountOnly: searchParams.get('discount') === 'true',
    badge: searchParams.get('badge') || undefined,
    sortBy: (searchParams.get('sortBy') as FilterState['sortBy']) || 'featured',
  });


  const [filters, setFilters] = useState<FilterState>(parseFiltersFromURL);

  // Sync category route param and search param changes
  useEffect(() => {
    setFilters(parseFiltersFromURL());
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
      if (filters.badge) {
        const b = filters.badge.toUpperCase();
        if (b.includes('BESTSELLER')) {
          if (!p.bestSeller && p.badge !== 'BESTSELLER') return false;
        } else if (b.includes('NEW')) {
          if (!p.newLaunch && p.badge !== 'NEW LAUNCH') return false;
        } else if (p.badge !== filters.badge) {
          return false;
        }
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
      priceRange: [0, 99999],
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
      <div className="max-w-7xl mx-auto px-3 sm:px-8 py-6 sm:py-8">
        {/* Top Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#F0E9E6]">
          <div className="flex items-center gap-3">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-3.5 py-2 bg-white border border-[#F0E9E6] hover:border-[#9F1239] rounded-xl text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs transition-colors shrink-0"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#9F1239]" />
              <span>Filters</span>
            </button>

            <span className="text-xs text-slate-500 font-medium">
              Showing <strong className="text-slate-800">{filteredProducts.length}</strong> creations
            </span>
          </div>

          {/* Sort Dropdown */}
          <div className="ml-auto">
            <SortDropdown
              sortBy={filters.sortBy}
              onSortChange={(val) => setFilters({ ...filters, sortBy: val })}
            />
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
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
              <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <div className="py-8 text-center bg-[#FFF8FA] rounded-2xl border border-[#FDE2E8] p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#FDE2E8] flex items-center justify-center text-[#9F1239] mx-auto shadow-2xs">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    No exact match for selected filters
                  </h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Showing our most loved luxury formulations below. You can also reset filters to view all products.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="px-5 py-2 bg-[#9F1239] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs hover:bg-[#801836] transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>

                <div>
                  <div className="mb-4">
                    <h4 className="font-serif text-base font-bold text-slate-900">
                      Recommended Luxury Bestsellers
                    </h4>
                    <p className="text-xs text-slate-500">Popular items you might love</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6">
                    {PRODUCTS.filter(p => p.bestSeller || p.badge === 'BESTSELLER').slice(0, 6).map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onQuickView={(p) => setQuickViewProduct(p)}
                      />
                    ))}
                  </div>
                </div>
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

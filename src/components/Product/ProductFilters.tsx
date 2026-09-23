import React from 'react';
import { FilterState, Concern, FragranceFamily, SkinType } from '../../types';
import { RotateCcw, Check, Sparkles } from 'lucide-react';

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
  totalCount: number;
}

const CONCERNS: Concern[] = [
  'Acne & Blemishes',
  'Hydration & Dryness',
  'Glass Skin Glow',
  'Pigmentation & Dark Spots',
  'Sun Protection',
  'Anti-Ageing & Fine Lines',
  'Hair Fall & Density',
  'Dullness & Texture',
];

const FRAGRANCE_FAMILIES: FragranceFamily[] = [
  'Floral & Rose',
  'Woody & Amber',
  'Fresh & Aquatic',
  'Citrus & Zest',
  'Gourmand & Vanilla',
  'Oriental & Oud',
];

const SKIN_TYPES: SkinType[] = [
  'All Skin Types',
  'Dry',
  'Oily',
  'Combination',
  'Sensitive',
  'Normal',
];

const PRICE_TIERS: { label: string; range: [number, number] }[] = [
  { label: 'All Prices', range: [0, 99999] },
  { label: 'Under ₹499', range: [0, 499] },
  { label: '₹500 – ₹999', range: [500, 999] },
  { label: '₹1,000 – ₹1,999', range: [1000, 1999] },
  { label: 'Above ₹2,000', range: [2000, 99999] },
];

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFilterChange,
  onReset,
  totalCount,
}) => {
  const toggleItem = (list: string[], item: string): string[] => {
    return list.includes(item) ? list.filter((i) => i !== item) : [...list, item];
  };

  const hasActiveFilters =
    filters.concerns.length > 0 ||
    filters.fragranceFamilies.length > 0 ||
    filters.skinTypes.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 99999 ||
    filters.minRating > 0 ||
    filters.discountOnly;


  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#F0E9E6]">
        <div>
          <h3 className="font-serif text-lg font-bold text-slate-900">Filters</h3>
          <p className="text-[11px] text-slate-400">{totalCount} products found</p>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-xs text-[#9F1239] font-bold hover:underline flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset All</span>
          </button>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Price Range
        </h4>
        <div className="space-y-1.5">
          {PRICE_TIERS.map((tier, idx) => {
            const isSelected =
              filters.priceRange[0] === tier.range[0] &&
              filters.priceRange[1] === tier.range[1];
            return (
              <label
                key={idx}
                className="flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <input
                  type="radio"
                  name="price_tier"
                  checked={isSelected}
                  onChange={() =>
                    onFilterChange({ ...filters, priceRange: tier.range })
                  }
                  className="accent-[#9F1239]"
                />
                <span>{tier.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Concern Filter */}
      <div className="space-y-2 pt-3 border-t border-[#F0E9E6]">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Skin & Hair Concern
        </h4>
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          {CONCERNS.map((c) => {
            const isChecked = filters.concerns.includes(c);
            return (
              <label
                key={c}
                className="flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() =>
                    onFilterChange({
                      ...filters,
                      concerns: toggleItem(filters.concerns, c),
                    })
                  }
                  className="rounded-xs accent-[#9F1239]"
                />
                <span>{c}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Fragrance Family Filter */}
      <div className="space-y-2 pt-3 border-t border-[#F0E9E6]">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Fragrance Notes
        </h4>
        <div className="space-y-1.5">
          {FRAGRANCE_FAMILIES.map((fam) => {
            const isChecked = filters.fragranceFamilies.includes(fam);
            return (
              <label
                key={fam}
                className="flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() =>
                    onFilterChange({
                      ...filters,
                      fragranceFamilies: toggleItem(filters.fragranceFamilies, fam),
                    })
                  }
                  className="rounded-xs accent-[#9F1239]"
                />
                <span>{fam}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Skin Type Filter */}
      <div className="space-y-2 pt-3 border-t border-[#F0E9E6]">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Skin Type
        </h4>
        <div className="space-y-1.5">
          {SKIN_TYPES.map((type) => {
            const isChecked = filters.skinTypes.includes(type);
            return (
              <label
                key={type}
                className="flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() =>
                    onFilterChange({
                      ...filters,
                      skinTypes: toggleItem(filters.skinTypes, type),
                    })
                  }
                  className="rounded-xs accent-[#9F1239]"
                />
                <span>{type}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="space-y-2 pt-3 border-t border-[#F0E9E6]">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Rating
        </h4>
        <div className="space-y-1.5">
          {[4.8, 4.5, 4.0].map((rate) => (
            <label
              key={rate}
              className="flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              <input
                type="radio"
                name="rating_filter"
                checked={filters.minRating === rate}
                onChange={() =>
                  onFilterChange({
                    ...filters,
                    minRating: filters.minRating === rate ? 0 : rate,
                  })
                }
                className="accent-[#9F1239]"
              />
              <span>{rate} Stars & above</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { FilterState } from '../../types';
import { ArrowUpDown } from 'lucide-react';

interface SortDropdownProps {
  sortBy: FilterState['sortBy'];
  onSortChange: (value: FilterState['sortBy']) => void;
}

const SORT_OPTIONS: { label: string; value: FilterState['sortBy'] }[] = [
  { label: 'Featured & Curated', value: 'featured' },
  { label: 'Best Selling', value: 'bestsellers' },
  { label: 'Newest Arrivals', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-low' },
  { label: 'Price: High to Low', value: 'price-high' },
  { label: 'Highest Rated', value: 'rating' },
];

export const SortDropdown: React.FC<SortDropdownProps> = ({ sortBy, onSortChange }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold text-slate-500 hidden sm:inline">Sort by:</span>
      <div className="relative">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as FilterState['sortBy'])}
          aria-label="Sort products by"
          className="appearance-none bg-white border border-[#F0E9E6] hover:border-slate-300 rounded-xl pl-3 pr-8 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#9F1239] cursor-pointer shadow-2xs"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
};

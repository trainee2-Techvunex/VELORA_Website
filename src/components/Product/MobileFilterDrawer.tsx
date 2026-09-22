import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, SlidersHorizontal, Check } from 'lucide-react';
import { FilterState } from '../../types';
import { ProductFilters } from './ProductFilters';

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
  totalCount: number;
}

export const MobileFilterDrawer: React.FC<MobileFilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onReset,
  totalCount,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-full max-h-[85vh] bg-white rounded-t-3xl shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#F0E9E6] bg-[#FFF9FA]">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#9F1239]" />
                <h3 className="font-serif text-base font-bold text-slate-900">
                  Filter Products
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-800 rounded-full"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body Filters */}
            <div className="flex-1 overflow-y-auto p-4">
              <ProductFilters
                filters={filters}
                onFilterChange={onFilterChange}
                onReset={onReset}
                totalCount={totalCount}
              />
            </div>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-[#F0E9E6] bg-slate-50 flex gap-2">
              <button
                onClick={onReset}
                className="flex-1 py-3 bg-white border border-[#F0E9E6] text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl"
              >
                Reset All
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 bg-[#9F1239] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md"
              >
                Apply ({totalCount})
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

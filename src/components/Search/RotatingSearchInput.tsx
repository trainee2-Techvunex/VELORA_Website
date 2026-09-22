import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, TrendingUp, Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';
import { SafeImage } from '../Common/SafeImage';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { getLocalStorage, setLocalStorage } from '../../utils/storage';
import { useCart } from '../../context/CartContext';

const PLACEHOLDERS = [
  'Search "Damask Rose Perfume"',
  'Search "24K Gold Face Serum"',
  'Search "Invisible Sunscreen SPF 50"',
  'Search "Madagascar Vanilla Butter"',
  'Search "Luxury Gift Hampers"',
  'Search "Rosemary Hair Density Oil"',
  'Search "Peptide Glazed Lip Oil"',
];

const TRENDING_KEYWORDS = [
  'Rose Perfume',
  'Vitamin C Serum',
  'Dewy Sunscreen',
  'Lip Butter',
  'Bourbon Cologne',
  'Gift Sets',
  'Hair Oil',
  'Body Soufflé',
];

export const RotatingSearchInput: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>(() =>
    getLocalStorage('velora_recent_searches', ['Rose Perfume', 'Glow Serum', 'Sunscreen'])
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Rotate placeholders every 2.8 seconds
  useEffect(() => {
    if (isFocused || query) return;
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isFocused, query]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const saveRecentSearch = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    const updated = [clean, ...recentSearches.filter((s) => s.toLowerCase() !== clean.toLowerCase())].slice(0, 6);
    setRecentSearches(updated);
    setLocalStorage('velora_recent_searches', updated);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    saveRecentSearch(query);
    setIsFocused(false);
    navigate(`/collection/all?search=${encodeURIComponent(query.trim())}`);
  };

  const handleSelectKeyword = (kw: string) => {
    setQuery(kw);
    saveRecentSearch(kw);
    setIsFocused(false);
    navigate(`/collection/all?search=${encodeURIComponent(kw)}`);
  };

  // Live filtered matching products (up to 5)
  const filteredProducts: Product[] = query.trim()
    ? PRODUCTS.filter((p) => {
        const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
        const text = [
          p.name,
          p.category,
          p.subcategory,
          p.description,
          p.concern || '',
          p.fragranceFamily || '',
        ].join(' ').toLowerCase();
        return terms.every((t) => text.includes(t));
      }).slice(0, 5)
    : [];

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Input Bar */}
      <form onSubmit={handleSearchSubmit} className="relative w-full">
        <div className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder={PLACEHOLDERS[placeholderIndex]}
            className="w-full pl-10 pr-9 py-2.5 bg-[#FAF7F7] hover:bg-[#F6EFF1] focus:bg-white border border-[#EFE5E7] focus:border-[#E11D48] rounded-full text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FDE2E8] transition-all duration-200"
          />
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />

          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </form>

      {/* DROPDOWN OVERLAY */}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-[#F0E9E6] overflow-hidden z-50 p-4 max-h-[480px] overflow-y-auto"
          >
            {/* If Query is empty, show Recent Searches & Trending Searches */}
            {!query.trim() ? (
              <div className="space-y-4">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Recent Searches</span>
                      </div>
                      <button
                        onClick={() => {
                          setRecentSearches([]);
                          setLocalStorage('velora_recent_searches', []);
                        }}
                        className="text-[11px] text-slate-400 hover:text-rose-600 font-normal lowercase tracking-normal"
                      >
                        clear
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {recentSearches.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelectKeyword(item)}
                          className="px-3 py-1 bg-slate-50 hover:bg-[#FFF0F3] hover:text-[#9F1239] border border-slate-100 hover:border-[#FDE2E8] rounded-full text-xs text-slate-600 transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trending Searches */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    <TrendingUp className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Trending Now</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {TRENDING_KEYWORDS.map((kw, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectKeyword(kw)}
                        className="px-3 py-1.5 bg-[#FFF5F7] hover:bg-[#FFEAEF] text-[#9F1239] border border-[#FDE2E8] rounded-full text-xs font-medium transition-colors flex items-center gap-1"
                      >
                        <Sparkles className="w-3 h-3 text-[#E11D48]" />
                        <span>{kw}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Categories Shortcut */}
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Suggested Categories
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <Link
                      to="/collection/fragrances"
                      onClick={() => setIsFocused(false)}
                      className="p-2 bg-slate-50 hover:bg-[#FFF0F3] rounded-lg text-slate-700 hover:text-[#9F1239] font-medium flex items-center justify-between"
                    >
                      <span>Fine Fragrances</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                    <Link
                      to="/collection/skincare"
                      onClick={() => setIsFocused(false)}
                      className="p-2 bg-slate-50 hover:bg-[#FFF0F3] rounded-lg text-slate-700 hover:text-[#9F1239] font-medium flex items-center justify-between"
                    >
                      <span>Active Skincare</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              /* Live Results for Query */
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-semibold text-slate-500">
                    Results for "{query}"
                  </span>
                  <button
                    onClick={handleSearchSubmit}
                    className="text-xs font-semibold text-[#9F1239] hover:underline flex items-center gap-1"
                  >
                    <span>View all matching products</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="divide-y divide-slate-100">
                    {filteredProducts.map((prod) => (
                      <div
                        key={prod.id}
                        className="py-2.5 flex items-center gap-3 hover:bg-[#FFF9FA] rounded-xl px-2 transition-colors group"
                      >
                        <Link
                          to={`/product/${prod.slug}`}
                          onClick={() => {
                            saveRecentSearch(prod.name);
                            setIsFocused(false);
                          }}
                          className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 shrink-0"
                        >
                          <SafeImage
                            src={prod.images[0]}
                            alt={prod.name}
                            fallbackCategory={prod.subcategory || prod.category}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </Link>
                        <div className="flex-1 min-w-0">
                          <Link
                            to={`/product/${prod.slug}`}
                            onClick={() => {
                              saveRecentSearch(prod.name);
                              setIsFocused(false);
                            }}
                            className="block"
                          >
                            <p className="text-xs font-semibold text-slate-800 truncate group-hover:text-[#9F1239] transition-colors">
                              {prod.name}
                            </p>
                            <p className="text-[11px] text-slate-400">
                              {prod.size} • {prod.subcategory}
                            </p>
                          </Link>
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="text-xs font-bold text-slate-900">
                              {formatPrice(prod.price)}
                            </span>
                            {prod.mrp > prod.price && (
                              <span className="text-[10px] text-slate-400 line-through">
                                {formatPrice(prod.mrp)}
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            addToCart(prod);
                            setIsFocused(false);
                          }}
                          className="p-2 text-slate-400 hover:text-[#9F1239] hover:bg-[#FFF0F3] rounded-lg transition-colors"
                          title="Add to Cart"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-6 text-center text-slate-500 space-y-1">
                    <p className="text-xs font-medium">No direct matches for "{query}"</p>
                    <p className="text-[11px] text-slate-400">
                      Try searching for "rose", "serum", "oud", or "sunscreen"
                    </p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, TrendingUp, Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';
import { SafeImage } from '../Common/SafeImage';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { getLocalStorage, setLocalStorage } from '../../utils/storage';
import { useCart } from '../../context/CartContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>(() =>
    getLocalStorage('velora_recent_searches', ['Rose Perfume', 'Glow Serum', 'Sunscreen'])
  );

  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    onClose();
    navigate(`/collection/all?search=${encodeURIComponent(query.trim())}`);
  };

  const handleSelectKeyword = (kw: string) => {
    saveRecentSearch(kw);
    onClose();
    navigate(`/collection/all?search=${encodeURIComponent(kw)}`);
  };

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
      }).slice(0, 8)
    : [];

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex flex-col bg-white">
          {/* Header search bar */}
          <div className="flex items-center gap-3 p-4 border-b border-[#F0E9E6] bg-[#FFF9FA]">
            <form onSubmit={handleSearchSubmit} className="relative flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search perfumes, serums, gifts..."
                className="w-full pl-10 pr-9 py-2.5 bg-white border border-[#F0E9E6] rounded-full text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#E11D48]"
                autoFocus
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </form>
            <button
              onClick={onClose}
              className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              Cancel
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5">
            {!query.trim() ? (
              <>
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
                        className="text-[11px] text-slate-400 lowercase"
                      >
                        clear
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {recentSearches.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelectKeyword(item)}
                          className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-700"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trending */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    <TrendingUp className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Trending Now</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {TRENDING_KEYWORDS.map((kw, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectKeyword(kw)}
                        className="px-3 py-1.5 bg-[#FFF5F7] text-[#9F1239] border border-[#FDE2E8] rounded-full text-xs font-medium"
                      >
                        {kw}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Categories */}
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Explore Categories
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: 'Fragrances', link: '/collection/fragrances' },
                      { name: 'Serums & Toners', link: '/collection/skincare?sub=Serum' },
                      { name: 'Sunscreens SPF 50', link: '/collection/skincare?sub=Sunscreen' },
                      { name: 'Luxury Gift Sets', link: '/collection/gifting' },
                    ].map((cat, idx) => (
                      <Link
                        key={idx}
                        to={cat.link}
                        onClick={onClose}
                        className="p-3 bg-slate-50 rounded-xl text-xs font-semibold text-slate-800 flex items-center justify-between"
                      >
                        <span>{cat.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    Results ({filteredProducts.length})
                  </span>
                  <button
                    onClick={handleSearchSubmit}
                    className="text-xs font-semibold text-[#9F1239]"
                  >
                    View all
                  </button>
                </div>

                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-xl"
                  >
                    <Link
                      to={`/product/${prod.slug}`}
                      onClick={() => {
                        saveRecentSearch(prod.name);
                        onClose();
                      }}
                      className="w-14 h-14 rounded-lg overflow-hidden bg-white shrink-0 border border-[#F0E9E6]"
                    >
                      <SafeImage
                        src={prod.images[0]}
                        alt={prod.name}
                        fallbackCategory={prod.subcategory || prod.category}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${prod.slug}`}
                        onClick={() => {
                          saveRecentSearch(prod.name);
                          onClose();
                        }}
                      >
                        <p className="text-xs font-semibold text-slate-800 truncate">{prod.name}</p>
                        <p className="text-[11px] text-slate-400">{prod.size} • {prod.subcategory}</p>
                      </Link>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-xs font-bold text-slate-900">{formatPrice(prod.price)}</span>
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
                        onClose();
                      }}
                      className="p-2 text-[#9F1239] bg-white rounded-lg border border-[#FDE2E8]"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

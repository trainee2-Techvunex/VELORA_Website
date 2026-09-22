import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from './Modal';
import { Product } from '../../types';
import { RatingStars } from './RatingStars';
import { Badge } from './Badge';
import { SafeImage } from './SafeImage';
import { formatPrice } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Heart, ShoppingBag, ArrowRight, ShieldCheck, Sparkles, Check } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) return null;

  const activeVariant = product.variants[selectedVariantIdx] || {
    id: `${product.id}-default`,
    size: product.size,
    price: product.price,
    mrp: product.mrp,
    inStock: true,
  };

  const isLiked = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, activeVariant, quantity);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Quick Preview" maxWidth="4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Gallery */}
        <div className="space-y-3">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF7F7] border border-[#F0E9E6]">
            <SafeImage
              src={product.images[selectedImage] || product.images[0]}
              alt={product.name}
              fallbackCategory={product.subcategory || product.category}
              className="w-full h-full object-cover object-center"
            />
            {product.badge && (
              <div className="absolute top-3 left-3 z-10">
                <Badge label={product.badge} variant="primary" />
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                    selectedImage === idx ? 'border-[#E11D48] scale-105' : 'border-[#F0E9E6] opacity-70'
                  }`}
                >
                  <SafeImage
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fallbackCategory={product.subcategory || product.category}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-xs font-semibold text-[#9F1239] uppercase tracking-wider">
                {product.subcategory}
              </span>
              <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
            </div>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {product.name}
            </h2>
            {product.subtitle && (
              <p className="text-xs text-slate-500 mt-1">{product.subtitle}</p>
            )}
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-3 p-3 bg-[#FFF5F7] rounded-xl border border-[#FDE2E8]">
            <span className="text-2xl font-bold text-slate-900">
              {formatPrice(activeVariant.price)}
            </span>
            {activeVariant.mrp > activeVariant.price && (
              <span className="text-sm text-slate-400 line-through">
                {formatPrice(activeVariant.mrp)}
              </span>
            )}
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">
              Save {formatPrice(activeVariant.mrp - activeVariant.price)} ({product.discount}%)
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {product.shortDescription}
          </p>

          {/* Variants */}
          {product.variants.length > 1 && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Select Size / Volume
              </label>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, idx) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariantIdx(idx)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                      selectedVariantIdx === idx
                        ? 'border-[#9F1239] bg-[#FFF0F3] text-[#9F1239]'
                        : 'border-[#F0E9E6] text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {v.size} – {formatPrice(v.price)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 py-3 bg-[#9F1239] hover:bg-[#801836] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={() => toggleWishlist(product)}
              className={`p-3 rounded-xl border transition-all ${
                isLiked
                  ? 'border-[#E11D48] bg-[#FFF0F3] text-[#E11D48]'
                  : 'border-[#F0E9E6] text-slate-600 hover:border-slate-300'
              }`}
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-[#E11D48]' : ''}`} />
            </button>
          </div>

          <div className="pt-2">
            <Link
              to={`/product/${product.slug}`}
              onClick={onClose}
              className="text-xs font-semibold text-[#9F1239] hover:underline flex items-center gap-1"
            >
              <span>View Full Product Details & Customer Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

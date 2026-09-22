import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../../types';
import { RatingStars } from '../Common/RatingStars';
import { Badge } from '../Common/Badge';
import { SafeImage } from '../Common/SafeImage';
import { formatPrice } from '../../utils/formatters';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const isLiked = isInWishlist(product.id);
  const primaryImage = product.images?.[0];
  const secondaryImage = product.images?.[1];

  return (
    <div
      className={`group relative flex flex-col h-full bg-white rounded-2xl border border-[#F0E9E6] hover:border-[#FBA6BC] shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-[#FAF7F7] flex items-center justify-center shrink-0">
        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-slate-400 hover:text-[#E11D48] transition-transform active:scale-90"
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <motion.div whileTap={{ scale: 0.8 }}>
            <Heart
              className={`w-4 h-4 transition-colors ${
                isLiked ? 'fill-[#E11D48] text-[#E11D48]' : 'text-slate-500'
              }`}
            />
          </motion.div>
        </button>

        {/* Badges on Image */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
          {product.badge && (
            <Badge
              label={product.badge}
              variant={
                product.badge === 'BESTSELLER'
                  ? 'primary'
                  : product.badge === 'AWARD WINNER'
                  ? 'gold'
                  : 'secondary'
              }
            />
          )}
          {product.discount > 0 && !product.badge && (
            <span className="bg-[#22C55E] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
              {product.discount}% OFF
            </span>
          )}
        </div>

        {/* Safe Product Images with Protected Hover Transition */}
        <Link to={`/product/${product.slug}`} className="w-full h-full block relative">
          <SafeImage
            src={primaryImage}
            secondarySrc={secondaryImage}
            isHovered={isHovered}
            fallbackCategory={product.subcategory || product.category}
            alt={product.name}
            loading="lazy"
          />
        </Link>

        {/* Quick View Button on Desktop Hover */}
        {onQuickView && (
          <div className="absolute bottom-3 inset-x-3 hidden sm:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              className="w-full py-2 bg-white/95 hover:bg-white text-slate-800 text-xs font-semibold rounded-xl shadow-lg border border-[#F0E9E6] flex items-center justify-center gap-1.5 transition-all hover:text-[#9F1239]"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick Preview</span>
            </button>
          </div>
        )}
      </div>

      {/* CONTENT DETAILS */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between bg-white">
        <div className="space-y-1">
          {/* Rating Pill */}
          <div className="h-5 flex items-center mb-1">
            <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
          </div>

          {/* Title - Fixed height so 1-line and 2-line titles reserve identical space */}
          <Link to={`/product/${product.slug}`} className="block group/title">
            <h3 className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug line-clamp-2 h-9 sm:h-10 group-hover/title:text-[#9F1239] transition-colors">
              {product.name}
            </h3>
          </Link>

          {/* Subtitle / Size */}
          <p className="text-[11px] text-slate-400 line-clamp-1 h-4">
            {product.size} • {product.subcategory}
          </p>
        </div>

        {/* Bottom Section: Price & Add to Cart (Strictly Aligned) */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-2.5">
          <div className="flex items-baseline gap-2 flex-wrap h-6">
            <span className="text-sm sm:text-base font-bold text-slate-900">
              {formatPrice(product.price)}
            </span>
            {product.mrp > product.price && (
              <span className="text-xs text-slate-400 line-through">
                {formatPrice(product.mrp)}
              </span>
            )}
            {product.discount > 0 && (
              <span className="text-xs font-semibold text-emerald-600">
                ({product.discount}% OFF)
              </span>
            )}
          </div>

          {/* Add to Cart CTA */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full py-2 sm:py-2.5 bg-[#FFF0F3] hover:bg-[#9F1239] text-[#9F1239] hover:text-white border border-[#FBA6BC] hover:border-[#9F1239] rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-2xs hover:shadow-md flex items-center justify-center gap-1.5 active:scale-98"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Product, ProductVariant } from '../types';
import { formatPrice } from '../utils/formatters';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { usePincode } from '../context/PincodeContext';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';
import { useToast } from '../context/ToastContext';
import { SafeImage } from '../components/Common/SafeImage';
import { RatingStars } from '../components/Common/RatingStars';
import { Badge } from '../components/Common/Badge';
import { Breadcrumbs } from '../components/Common/Breadcrumbs';
import { ProductCarousel } from '../components/Home/ProductCarousel';
import { Modal } from '../components/Common/Modal';
import {
  Heart,
  ShoppingBag,
  Zap,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Truck,
  RotateCcw,
  Gift,
  Plus,
  Minus,
  Star,
  Check,
  Tag,
  Share2,
} from 'lucide-react';
import { motion } from 'framer-motion';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('desc');
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);

  // Review Form State
  const [reviewName, setReviewName] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewComment, setReviewComment] = useState('');

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { pincode, city, state, estimatedDelivery, openPincodeModal } = usePincode();
  const { recentlyViewed, addRecentlyViewed } = useRecentlyViewed();
  const { showToast } = useToast();

  const reviewsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (product) {
      addRecentlyViewed(product);
      setActiveImageIndex(0);
      setSelectedVariantIdx(0);
      setQuantity(1);
    }
  }, [slug]);

  const activeVariant: ProductVariant = product.variants[selectedVariantIdx] || {
    id: `${product.id}-default`,
    size: product.size,
    price: product.price,
    mrp: product.mrp,
    inStock: true,
  };

  const isLiked = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, activeVariant, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, activeVariant, quantity);
    navigate('/checkout');
  };

  const toggleAccordion = (id: string) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  const scrollToReviews = () => {
    reviewsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewComment.trim()) {
      showToast('Please fill in your name and review', 'error');
      return;
    }
    setIsWriteReviewOpen(false);
    showToast('Thank you! Your verified review will appear shortly.', 'success', 'Review Submitted');
    setReviewName('');
    setReviewTitle('');
    setReviewComment('');
  };

  // Frequently Bought Together Bundle Pair
  const bundleProduct =
    PRODUCTS.find((p) => p.id !== product.id && p.category === product.category) ||
    PRODUCTS[1];

  const bundleTotalPrice = activeVariant.price + bundleProduct.price;
  const bundleTotalMrp = activeVariant.mrp + bundleProduct.mrp;
  const bundleSavings = bundleTotalMrp - bundleTotalPrice;

  const handleAddBundle = () => {
    addToCart(product, activeVariant, 1);
    addToCart(bundleProduct, bundleProduct.variants[0], 1);
    showToast('2-Product Luxury Bundle added to your cart!', 'success');
  };

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.concern === product.concern)
  );

  return (
    <div className="bg-[#FAF9F8] min-h-screen pb-20">
      {/* 1. Breadcrumbs Strip */}
      <div className="bg-white border-b border-[#F0E9E6] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <Breadcrumbs
            items={[
              { label: product.category.toUpperCase(), link: `/collection/${product.category}` },
              { label: product.subcategory },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      {/* 2. Main PDP Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Product Gallery */}
          <div className="lg:col-span-6 sticky top-24 space-y-4">
            <div className="flex flex-col-reverse sm:flex-row gap-4 items-start">
              {/* Thumbnails list */}
              {product.images.length > 1 && (
                <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-y-auto no-scrollbar max-h-[520px] shrink-0">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-18 sm:w-20 sm:h-22 rounded-xl overflow-hidden border-2 bg-white transition-all shrink-0 ${
                        activeImageIndex === idx
                          ? 'border-[#9F1239] ring-2 ring-[#FDE2E8]'
                          : 'border-[#F0E9E6] opacity-70 hover:opacity-100'
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

              {/* Main Image with Zoom container */}
              <div className="relative aspect-[4/4.5] flex-1 rounded-3xl overflow-hidden bg-white border border-[#F0E9E6] shadow-xs group">
                <SafeImage
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  fallbackCategory={product.subcategory || product.category}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 cursor-zoom-in"
                />

                {/* Badges on main image */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                  {product.badge && (
                    <Badge
                      label={product.badge}
                      variant="primary"
                      size="md"
                    />
                  )}
                  {product.discount > 0 && (
                    <span className="bg-[#22C55E] text-white text-[11px] font-bold px-2 py-0.5 rounded-sm">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>

                {/* Floating Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-slate-400 hover:text-[#E11D48] transition-all active:scale-90"
                  aria-label="Wishlist"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      isLiked ? 'fill-[#E11D48] text-[#E11D48]' : 'text-slate-600'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Mobile Thumbnails Dots Indicator */}
            <div className="flex sm:hidden justify-center gap-1.5 pt-2">
              {product.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    activeImageIndex === idx ? 'w-6 bg-[#9F1239]' : 'w-1.5 bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Product Information & Purchase Flow */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header / Titles */}
            <div className="space-y-2 border-b border-[#F0E9E6] pb-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#9F1239] uppercase tracking-widest">
                  {product.subcategory} {product.collection ? `• ${product.collection}` : ''}
                </span>

                <button
                  onClick={scrollToReviews}
                  className="hover:opacity-80 transition-opacity"
                >
                  <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
                </button>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h1>

              {product.subtitle && (
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {product.subtitle}
                </p>
              )}
            </div>

            {/* Price Box */}
            <div className="p-4 bg-[#FFF5F7] rounded-2xl border border-[#FDE2E8] space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="font-sans text-3xl font-bold text-slate-900 tracking-tight">
                  {formatPrice(activeVariant.price)}
                </span>
                {activeVariant.mrp > activeVariant.price && (
                  <span className="text-sm text-slate-400 line-through">
                    {formatPrice(activeVariant.mrp)}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    Save {formatPrice(activeVariant.mrp - activeVariant.price)} ({product.discount}%)
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500">
                Inclusive of all taxes • <strong>Free express delivery</strong> on orders ₹499+
              </p>
            </div>

            {/* Variants / Size Selector */}
            {product.variants.length > 1 && (
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Select Size / Volume
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.variants.map((v, idx) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariantIdx(idx)}
                      className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                        selectedVariantIdx === idx
                          ? 'border-[#9F1239] bg-[#FFF0F3] text-[#9F1239] shadow-xs ring-1 ring-[#9F1239]'
                          : 'border-[#F0E9E6] text-slate-700 hover:border-slate-300 bg-white'
                      }`}
                    >
                      {v.size} – {formatPrice(v.price)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Action CTAs */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Stepper */}
                <div className="flex items-center border border-[#F0E9E6] rounded-xl bg-white p-1">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="p-2 text-slate-500 hover:text-slate-900"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-bold text-slate-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="p-2 text-slate-500 hover:text-slate-900"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* ADD TO CART */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 bg-[#FFF0F3] hover:bg-[#9F1239] text-[#9F1239] hover:text-white border border-[#FBA6BC] hover:border-[#9F1239] rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs flex items-center justify-center gap-2 active:scale-98"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>

              {/* BUY NOW (Direct Checkout) */}
              <button
                onClick={handleBuyNow}
                className="w-full py-4 bg-[#9F1239] hover:bg-[#801836] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98"
              >
                <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>Buy Now • Instant Checkout</span>
              </button>
            </div>

            {/* Delivery Pincode Checker */}
            <div className="p-4 bg-white rounded-2xl border border-[#F0E9E6] space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                  <Truck className="w-4 h-4 text-[#9F1239]" />
                  <span>Delivery Estimates</span>
                </div>
                <button
                  onClick={openPincodeModal}
                  className="text-xs font-bold text-[#9F1239] hover:underline"
                >
                  Change Pincode
                </button>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl text-xs">
                <span className="text-slate-600">
                  Delivering to: <strong className="text-slate-800">{city} ({pincode})</strong>
                </span>
                <span className="font-bold text-emerald-700">
                  By {estimatedDelivery}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                • 100% genuine formulation sealed at our climate-controlled beauty labs.
              </p>
            </div>

            {/* Available Coupon Offers Card */}
            <div className="p-4 bg-[#FFF9FA] rounded-2xl border border-[#FDE2E8] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#9F1239] uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5 text-[#E11D48]" />
                <span>Special Bank & Coupon Offers</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>Use code <strong>WELCOME10</strong> for 10% off on your first order.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>Use code <strong>BEAUTY15</strong> for 15% off on orders above ₹999.</span>
                </li>
              </ul>
            </div>

            {/* Key Benefits Bullets */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Why You'll Love It:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {product.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9F1239] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordion Modules */}
            <div className="border-t border-[#F0E9E6] divide-y divide-[#F0E9E6] pt-2">
              {/* Description */}
              <div>
                <button
                  onClick={() => toggleAccordion('desc')}
                  className="w-full py-3.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-[#9F1239]"
                >
                  <span>Product Story & Details</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeAccordion === 'desc' ? 'rotate-180 text-[#9F1239]' : 'text-slate-400'
                    }`}
                  />
                </button>
                {activeAccordion === 'desc' && (
                  <div className="pb-4 text-xs text-slate-600 leading-relaxed space-y-2">
                    <p>{product.description}</p>
                    {product.fragranceFamily && (
                      <p>
                        <strong>Fragrance Family:</strong> {product.fragranceFamily}
                      </p>
                    )}
                    {product.skinType && (
                      <p>
                        <strong>Suitable For:</strong> {product.skinType}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Ingredients */}
              <div>
                <button
                  onClick={() => toggleAccordion('ing')}
                  className="w-full py-3.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-[#9F1239]"
                >
                  <span>Full Key Ingredients</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeAccordion === 'ing' ? 'rotate-180 text-[#9F1239]' : 'text-slate-400'
                    }`}
                  />
                </button>
                {activeAccordion === 'ing' && (
                  <div className="pb-4 text-xs text-slate-600 leading-relaxed">
                    <div className="flex flex-wrap gap-1.5">
                      {product.ingredients.map((ing, idx) => (
                        <span
                          key={idx}
                          className="bg-white border border-[#F0E9E6] px-2.5 py-1 rounded-lg text-[11px] font-medium text-slate-700"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* How to Use */}
              <div>
                <button
                  onClick={() => toggleAccordion('use')}
                  className="w-full py-3.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-[#9F1239]"
                >
                  <span>How to Apply & Ritual</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeAccordion === 'use' ? 'rotate-180 text-[#9F1239]' : 'text-slate-400'
                    }`}
                  />
                </button>
                {activeAccordion === 'use' && (
                  <div className="pb-4 text-xs text-slate-600 leading-relaxed">
                    <p>{product.howToUse}</p>
                  </div>
                )}
              </div>

              {/* Shipping & Authenticity */}
              <div>
                <button
                  onClick={() => toggleAccordion('ship')}
                  className="w-full py-3.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-[#9F1239]"
                >
                  <span>Shipping, Easy Returns & Authenticity</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeAccordion === 'ship' ? 'rotate-180 text-[#9F1239]' : 'text-slate-400'
                    }`}
                  />
                </button>
                {activeAccordion === 'ship' && (
                  <div className="pb-4 text-xs text-slate-600 leading-relaxed space-y-2">
                    <p>• <strong>Free Shipping:</strong> Dispatched within 24 hours from New Delhi / Mumbai hubs.</p>
                    <p>• <strong>15-Day Replacements:</strong> If damaged in transit or defective, we offer free doorstep pick-up & replacement.</p>
                    <p>• <strong>100% Genuine:</strong> All VÉLORA products are certified vegan, cruelty-free, and IFRA compliant.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Frequently Bought Together Module */}
        <div className="my-14 p-6 sm:p-8 bg-white rounded-3xl border border-[#F0E9E6] shadow-xs">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Frequently Bought Together
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Pair these complementary formulas together for enhanced glow & luxury ritual.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              {/* Item 1 */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden border border-[#F0E9E6]">
                  <SafeImage
                    src={product.images[0]}
                    alt={product.name}
                    fallbackCategory={product.subcategory || product.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 max-w-[140px] truncate">{product.name}</p>
                  <p className="text-xs font-bold text-[#9F1239] mt-0.5">{formatPrice(activeVariant.price)}</p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-[#FFF0F3] text-[#9F1239] flex items-center justify-center font-bold text-sm">
                +
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden border border-[#F0E9E6]">
                  <SafeImage
                    src={bundleProduct.images[0]}
                    alt={bundleProduct.name}
                    fallbackCategory={bundleProduct.subcategory || bundleProduct.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 max-w-[140px] truncate">{bundleProduct.name}</p>
                  <p className="text-xs font-bold text-[#9F1239] mt-0.5">{formatPrice(bundleProduct.price)}</p>
                </div>
              </div>
            </div>

            {/* Bundle Total & CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
              <div>
                <p className="text-xs text-slate-500">Combo Price for Both:</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-sans text-2xl font-bold text-slate-900 tracking-tight">
                    {formatPrice(bundleTotalPrice)}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    {formatPrice(bundleTotalMrp)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleAddBundle}
                className="px-6 py-3 bg-[#9F1239] hover:bg-[#801836] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95"
              >
                Add Both to Cart
              </button>
            </div>
          </div>
        </div>

        {/* 4. Verified Customer Reviews & Ratings Section */}
        <div ref={reviewsSectionRef} className="my-14 bg-white rounded-3xl border border-[#F0E9E6] p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#F0E9E6]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9F1239]">
                Patron Feedback
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Customer Ratings & Reviews
              </h3>
            </div>

            <button
              onClick={() => setIsWriteReviewOpen(true)}
              className="px-6 py-3 bg-white border border-[#9F1239] text-[#9F1239] hover:bg-[#FFF5F7] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors self-start md:self-auto"
            >
              Write a Review
            </button>
          </div>

          {/* Breakdown Scoreboard */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 items-center">
            <div className="md:col-span-4 text-center md:text-left space-y-2">
              <div className="flex items-baseline gap-2 justify-center md:justify-start">
                <span className="font-serif text-5xl font-bold text-slate-900">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-slate-400 text-lg">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#E11D48] text-[#E11D48]" />
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Based on {product.reviewCount} verified purchases
              </p>
            </div>

            <div className="md:col-span-8 space-y-2">
              {[
                { stars: 5, pct: 88 },
                { stars: 4, pct: 10 },
                { stars: 3, pct: 2 },
                { stars: 2, pct: 0 },
                { stars: 1, pct: 0 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-12 text-slate-600 font-medium">{row.stars} Stars</span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#9F1239] rounded-full"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-slate-400 font-mono text-[11px]">{row.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. "You May Also Like" Related Products Carousel */}
        {relatedProducts.length > 0 && (
          <ProductCarousel
            tag="PERFECT COMPANIONS"
            title="You May Also Like"
            subtitle="Handpicked luxury formulas crafted to complement this item."
            products={relatedProducts}
            viewAllLink={`/collection/${product.category}`}
          />
        )}

        {/* 6. "Recently Viewed" Products Carousel */}
        {recentlyViewed.length > 1 && (
          <ProductCarousel
            tag="YOUR BROWSING HISTORY"
            title="Recently Viewed Creations"
            products={recentlyViewed.filter((p) => p.id !== product.id)}
          />
        )}
      </div>

      {/* Write a Review Modal */}
      <Modal
        isOpen={isWriteReviewOpen}
        onClose={() => setIsWriteReviewOpen(false)}
        title={`Review: ${product.name}`}
      >
        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Rating
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setReviewRating(star)}
                  className="p-1 text-slate-300 hover:text-[#E11D48]"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= reviewRating
                        ? 'fill-[#E11D48] text-[#E11D48]'
                        : 'text-slate-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              value={reviewName}
              onChange={(e) => setReviewName(e.target.value)}
              placeholder="e.g. Ananya Deshmukh"
              required
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#F0E9E6] rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#9F1239] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Review Title
            </label>
            <input
              type="text"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
              placeholder="e.g. Unbelievable natural glow & aroma!"
              required
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#F0E9E6] rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#9F1239] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Your Detailed Experience
            </label>
            <textarea
              rows={4}
              value={reviewComment}
              onChange={(e) => setReviewComment(e.target.value)}
              placeholder="Describe scent longevity, texture, results on your skin..."
              required
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#F0E9E6] rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#9F1239] focus:bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#9F1239] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:bg-[#801836]"
          >
            Submit Verified Review
          </button>
        </form>
      </Modal>

      {/* 7. Sticky Add to Cart Bar for Mobile Viewports */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/98 backdrop-blur-md border-t border-[#F0E9E6] p-3 z-30 shadow-2xl flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold text-slate-900 leading-tight">
            {formatPrice(activeVariant.price)}
          </p>
          <span className="text-[10px] text-slate-400 line-clamp-1">{activeVariant.size}</span>
        </div>
        <div className="flex gap-2 flex-1 max-w-xs">
          <button
            onClick={handleAddToCart}
            className="flex-1 py-2.5 bg-[#FFF0F3] text-[#9F1239] border border-[#FBA6BC] rounded-xl text-xs font-bold uppercase tracking-wider"
          >
            Add to Bag
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 py-2.5 bg-[#9F1239] text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

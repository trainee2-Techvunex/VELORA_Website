import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShoppingBag,
  Trash2,
  Heart,
  Plus,
  Minus,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Tag,
  Check,
} from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { SafeImage } from '../Common/SafeImage';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatters';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    moveToWishlist,
    subtotal,
    mrpTotal,
    discount,
    couponDiscount,
    shipping,
    total,
    totalSavings,
    itemCount,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const navigate = useNavigate();

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    if (res.success) {
      setCouponError('');
      setCouponInput('');
    } else {
      setCouponError(res.message);
    }
  };

  const progressPercentage = Math.min(
    100,
    Math.round((subtotal / freeShippingThreshold) * 100)
  );

  return createPortal(
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-[1]"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-[2] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#F0E9E6] bg-[#FFF9FA]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#9F1239]" />
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Your Shopping Bag
                </h3>
                <span className="text-xs bg-[#FFF0F3] text-[#9F1239] px-2 py-0.5 rounded-full font-bold border border-[#FDE2E8]">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-1.5 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Meter */}
            <div className="p-3.5 bg-[#FFF5F7] border-b border-[#FDE2E8]">
              <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                <span className="text-slate-700">
                  {amountNeededForFreeShipping > 0 ? (
                    <>
                      Add <strong className="text-[#9F1239]">{formatPrice(amountNeededForFreeShipping)}</strong> more for <strong>FREE Delivery</strong>
                    </>
                  ) : (
                    <span className="text-emerald-700 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <strong>Unlocked FREE Express Delivery!</strong>
                    </span>
                  )}
                </span>
                <span className="text-slate-400 font-mono text-[11px]">{progressPercentage}%</span>
              </div>
              <div className="w-full h-2 bg-pink-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FBA6BC] to-[#9F1239] rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Content List */}
            {cartItems.length > 0 ? (
              <div className="flex-1 overflow-y-auto p-4 space-y-4 divide-y divide-slate-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex gap-3.5 items-start">
                    {/* Thumbnail */}
                    <Link
                      to={`/product/${item.product.slug}`}
                      onClick={closeCart}
                      className="w-20 h-24 rounded-xl overflow-hidden bg-[#FAF7F7] border border-[#F0E9E6] shrink-0"
                    >
                      <SafeImage
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fallbackCategory={item.product.subcategory || item.product.category}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <Link
                          to={`/product/${item.product.slug}`}
                          onClick={closeCart}
                          className="font-semibold text-xs text-slate-800 hover:text-[#9F1239] line-clamp-2 leading-tight"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-300 hover:text-rose-600 p-1"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Size: {item.selectedVariant.size}
                      </p>

                      {/* Price row */}
                      <div className="flex items-baseline gap-2 mt-1.5">
                        <span className="text-xs font-bold text-slate-900">
                          {formatPrice(item.selectedVariant.price * item.quantity)}
                        </span>
                        {item.selectedVariant.mrp > item.selectedVariant.price && (
                          <span className="text-[10px] text-slate-400 line-through">
                            {formatPrice(item.selectedVariant.mrp * item.quantity)}
                          </span>
                        )}
                      </div>

                      {/* Stepper + Wishlist */}
                      <div className="flex items-center justify-between mt-2.5">
                        <div className="flex items-center border border-[#F0E9E6] rounded-lg bg-slate-50">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-slate-500 hover:text-slate-900"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-slate-500 hover:text-slate-900"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => moveToWishlist(item.id)}
                          className="text-[11px] font-medium text-slate-500 hover:text-[#9F1239] flex items-center gap-1"
                        >
                          <Heart className="w-3 h-3" />
                          <span>Move to Wishlist</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#FFF0F3] border border-[#FDE2E8] flex items-center justify-center text-[#9F1239]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-slate-800">Your bag is empty</h4>
                <p className="text-xs text-slate-500 max-w-xs">
                  Discover our award-winning French damask rose parfums, 24K gold glow serums and velvet cloud creams.
                </p>
                <Link
                  to="/collection/all"
                  onClick={closeCart}
                  className="mt-2 px-6 py-2.5 bg-[#9F1239] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:bg-[#801836] transition-colors"
                >
                  Explore Bestsellers
                </Link>
              </div>
            )}

            {/* Footer Summary & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-4 border-t border-[#F0E9E6] bg-slate-50 space-y-3">
                {/* Coupon Box */}
                {!appliedCoupon ? (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => {
                          setCouponInput(e.target.value.toUpperCase());
                          setCouponError('');
                        }}
                        placeholder="Coupon (e.g. BEAUTY15)"
                        className="w-full pl-8 pr-3 py-2 bg-white border border-[#F0E9E6] rounded-lg text-xs font-medium text-slate-800 uppercase focus:outline-none focus:border-[#E11D48]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#9F1239] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#801836]"
                    >
                      Apply
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>{appliedCoupon.code} applied (-{formatPrice(couponDiscount)})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-rose-600 font-bold hover:underline text-[11px]"
                    >
                      Remove
                    </button>
                  </div>
                )}
                {couponError && <p className="text-[11px] text-rose-500 font-medium">{couponError}</p>}

                {/* Bill Breakdown */}
                <div className="space-y-1.5 text-xs pt-2 border-t border-slate-200">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-medium">
                      <span>Bag Discount</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}
                  {couponDiscount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-medium">
                      <span>Coupon Discount</span>
                      <span>-{formatPrice(couponDiscount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <strong className="text-emerald-600 uppercase">FREE</strong>
                      ) : (
                        formatPrice(shipping)
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                    <span>Total Amount</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Savings Banner */}
                {totalSavings > 0 && (
                  <div className="text-center py-1.5 bg-[#FFF0F3] rounded-lg text-[11px] font-bold text-[#9F1239] border border-[#FDE2E8]">
                    🎉 You are saving {formatPrice(totalSavings)} on this order!
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => {
                      closeCart();
                      navigate('/cart');
                    }}
                    className="py-3 bg-white border border-[#9F1239] text-[#9F1239] hover:bg-[#FFF5F7] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                  >
                    View Bag
                  </button>

                  <button
                    onClick={() => {
                      closeCart();
                      navigate('/checkout');
                    }}
                    className="py-3 bg-[#9F1239] hover:bg-[#801836] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>Checkout</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Trust Footer */}
                <div className="pt-2 flex items-center justify-center gap-4 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>100% Safe Payments</span>
                  </span>
                  <span>•</span>
                  <span>Easy 15-Day Replacements</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

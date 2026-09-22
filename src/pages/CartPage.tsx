import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';
import { SafeImage } from '../components/Common/SafeImage';
import { Breadcrumbs } from '../components/Common/Breadcrumbs';
import { ProductCarousel } from '../components/Home/ProductCarousel';
import { PRODUCTS, COUPONS } from '../data/products';
import {
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
  Percent,
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cartItems,
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

  const handleApply = (codeToApply?: string) => {
    const code = codeToApply || couponInput;
    if (!code.trim()) return;
    const res = applyCoupon(code);
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

  const bestsellers = PRODUCTS.filter((p) => p.bestSeller).slice(0, 6);

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#FAF9F8] min-h-[70vh] py-16 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4 space-y-4">
          <div className="w-20 h-20 rounded-full bg-[#FFF0F3] border border-[#FDE2E8] flex items-center justify-center text-[#9F1239] mx-auto shadow-sm">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900">Your bag is empty</h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Looks like you haven't added anything to your cart yet. Explore our bestselling French roses, 24K gold serums, and luxury gift hampers.
          </p>
          <div className="pt-2">
            <Link
              to="/collection/all"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#9F1239] hover:bg-[#801836] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F8] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs
          items={[{ label: 'Home', link: '/' }, { label: 'Shopping Bag' }]}
          className="mb-6"
        />

        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F0E9E6]">
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">
            Shopping Bag ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </h1>
          <Link
            to="/collection/all"
            className="text-xs font-bold text-[#9F1239] hover:underline flex items-center gap-1"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Free Shipping Meter */}
        <div className="mb-8 p-4 bg-[#FFF5F7] rounded-2xl border border-[#FDE2E8]">
          <div className="flex items-center justify-between text-xs font-semibold mb-2">
            <span className="text-slate-700">
              {amountNeededForFreeShipping > 0 ? (
                <>
                  Add <strong className="text-[#9F1239]">{formatPrice(amountNeededForFreeShipping)}</strong> more to unlock <strong>FREE Express Delivery</strong>
                </>
              ) : (
                <span className="text-emerald-700 flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  <strong>Congratulations! You've unlocked FREE Delivery across India.</strong>
                </span>
              )}
            </span>
            <span className="text-slate-500 font-mono">{progressPercentage}%</span>
          </div>
          <div className="w-full h-2.5 bg-pink-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#FBA6BC] to-[#9F1239] rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Cart Items List */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-[#F0E9E6] shadow-xs divide-y divide-slate-100">
            {cartItems.map((item) => (
              <div key={item.id} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  to={`/product/${item.product.slug}`}
                  className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden bg-[#FAF7F7] border border-[#F0E9E6] shrink-0"
                >
                  <SafeImage
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fallbackCategory={item.product.subcategory || item.product.category}
                    className="w-full h-full object-cover"
                  />
                </Link>

                <div className="flex-1 min-w-0 space-y-2 w-full">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link
                        to={`/product/${item.product.slug}`}
                        className="font-serif text-base sm:text-lg font-bold text-slate-900 hover:text-[#9F1239] leading-tight block"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Size: {item.selectedVariant.size} • {item.product.subcategory}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-base font-bold text-slate-900">
                        {formatPrice(item.selectedVariant.price * item.quantity)}
                      </p>
                      {item.selectedVariant.mrp > item.selectedVariant.price && (
                        <p className="text-xs text-slate-400 line-through">
                          {formatPrice(item.selectedVariant.mrp * item.quantity)}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions & Quantity Stepper */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex items-center border border-[#F0E9E6] rounded-xl bg-slate-50 p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 text-slate-500 hover:text-slate-900"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold text-slate-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 text-slate-500 hover:text-slate-900"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold">
                      <button
                        onClick={() => moveToWishlist(item.id)}
                        className="text-slate-600 hover:text-[#9F1239] flex items-center gap-1"
                      >
                        <Heart className="w-3.5 h-3.5" />
                        <span>Save to Wishlist</span>
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-rose-600 flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Order Summary & Coupons */}
          <div className="lg:col-span-4 space-y-6">
            {/* Coupon Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#F0E9E6] shadow-xs space-y-4">
              <h3 className="font-serif text-lg font-bold text-slate-900 flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#9F1239]" />
                <span>Apply Coupons</span>
              </h3>

              {!appliedCoupon ? (
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => {
                        setCouponInput(e.target.value.toUpperCase());
                        setCouponError('');
                      }}
                      placeholder="Enter Coupon Code"
                      className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-[#F0E9E6] rounded-xl text-xs font-medium uppercase text-slate-800 focus:outline-none focus:border-[#9F1239] focus:bg-white"
                    />
                    <button
                      onClick={() => handleApply()}
                      className="px-5 py-2.5 bg-[#9F1239] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#801836]"
                    >
                      Apply
                    </button>
                  </div>
                  {couponError && <p className="text-xs text-rose-500 font-medium">{couponError}</p>}

                  {/* Available Coupons list */}
                  <div className="space-y-2 pt-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Available Coupons
                    </p>
                    {COUPONS.map((c) => (
                      <div
                        key={c.code}
                        className="p-3 bg-[#FFF9FA] border border-[#FDE2E8] rounded-xl flex items-center justify-between gap-2 text-xs"
                      >
                        <div>
                          <p className="font-bold text-[#9F1239]">{c.code}</p>
                          <p className="text-[11px] text-slate-500">{c.description}</p>
                        </div>
                        <button
                          onClick={() => handleApply(c.code)}
                          className="px-3 py-1 bg-white border border-[#9F1239] text-[#9F1239] font-bold text-[11px] rounded-lg hover:bg-[#9F1239] hover:text-white transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Coupon <strong>{appliedCoupon.code}</strong> applied</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-rose-600 font-bold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {/* Price Summary */}
            <div className="bg-white rounded-3xl p-6 border border-[#F0E9E6] shadow-xs space-y-4">
              <h3 className="font-serif text-lg font-bold text-slate-900">
                Order Summary
              </h3>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Total MRP</span>
                  <span>{formatPrice(mrpTotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Retail Savings</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Coupon Savings</span>
                    <span>-{formatPrice(couponDiscount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600">
                  <span>Standard Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <strong className="text-emerald-600 uppercase">FREE</strong>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-slate-900 pt-3 border-t border-slate-100">
                  <span>Grand Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              {totalSavings > 0 && (
                <div className="p-2.5 bg-[#FFF0F3] rounded-xl text-center text-xs font-bold text-[#9F1239] border border-[#FDE2E8]">
                  🎉 You are saving {formatPrice(totalSavings)} on this order!
                </div>
              )}

              <button
                onClick={() => navigate('/checkout')}
                className="w-full py-4 bg-[#9F1239] hover:bg-[#801836] text-white text-xs font-bold uppercase tracking-widest rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Safe & Secure 256-Bit SSL Checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mt-16">
          <ProductCarousel
            tag="ADD TO YOUR RITUAL"
            title="Customers Also Added"
            products={bestsellers}
          />
        </div>
      </div>
    </div>
  );
};

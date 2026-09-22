import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../utils/formatters';
import { SafeImage } from '../components/Common/SafeImage';
import { Address, OrderItem } from '../types';
import {
  ShieldCheck,
  MapPin,
  CreditCard,
  Truck,
  CheckCircle2,
  Plus,
  ArrowRight,
  Sparkles,
  QrCode,
  Lock,
  Wallet,
  Building2,
  Banknote,
  ChevronLeft,
} from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { cartItems, subtotal, discount, couponDiscount, shipping, total, appliedCoupon, clearCart } = useCart();
  const { user, addresses, addAddress, placeOrder } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  // Active step
  const [selectedAddressId, setSelectedAddressId] = useState<string>(
    addresses.length > 0 ? (addresses.find((a) => a.isDefault)?.id || addresses[0].id) : ''
  );

  const [isAddingNewAddress, setIsAddingNewAddress] = useState(addresses.length === 0);
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'Net Banking' | 'Wallet' | 'Cash on Delivery'>('UPI');
  const [upiId, setUpiId] = useState('');
  const [deliverySpeed, setDeliverySpeed] = useState<'standard' | 'express'>('standard');
  const [isProcessing, setIsProcessing] = useState(false);

  // New Address Form State
  const [newFullName, setNewFullName] = useState(user?.name || '');
  const [newPhone, setNewPhone] = useState(user?.phone || '');
  const [newPincode, setNewPincode] = useState('110001');
  const [newAddressLine, setNewAddressLine] = useState('');
  const [newLocality, setNewLocality] = useState('');
  const [newCity, setNewCity] = useState('New Delhi');
  const [newState, setNewState] = useState('Delhi');
  const [newType, setNewType] = useState<'home' | 'work' | 'other'>('home');

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleSaveNewAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFullName || !newPhone || !newAddressLine || !newPincode) {
      showToast('Please fill all required address fields', 'error');
      return;
    }

    const saved = addAddress({
      fullName: newFullName,
      phone: newPhone,
      pincode: newPincode,
      addressLine: newAddressLine,
      locality: newLocality || newCity,
      city: newCity,
      state: newState,
      type: newType,
      isDefault: true,
    });

    setSelectedAddressId(saved.id);
    setIsAddingNewAddress(false);
  };

  const selectedAddress =
    addresses.find((a) => a.id === selectedAddressId) || addresses[0];

  const handlePlaceOrder = () => {
    if (!selectedAddress && isAddingNewAddress) {
      showToast('Please save your delivery address first', 'error');
      return;
    }

    if (!selectedAddress) {
      showToast('Please select a shipping address', 'error');
      return;
    }

    setIsProcessing(true);

    const orderItems: OrderItem[] = cartItems.map((item) => ({
      productId: item.product.id,
      name: item.product.name,
      image: item.product.images[0],
      variantSize: item.selectedVariant.size,
      price: item.selectedVariant.price,
      quantity: item.quantity,
    }));

    setTimeout(() => {
      const createdOrder = placeOrder({
        items: orderItems,
        subtotal,
        discount,
        shipping: deliverySpeed === 'express' ? shipping + 99 : shipping,
        total: deliverySpeed === 'express' ? total + 99 : total,
        couponCode: appliedCoupon?.code,
        shippingAddress: selectedAddress,
        paymentMethod,
      });

      clearCart();
      setIsProcessing(false);
      navigate(`/order-confirmation/${createdOrder.id}`);
    }, 1200);
  };

  return (
    <div className="bg-[#FAF9F8] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F0E9E6]">
          <div className="flex items-center gap-3">
            <Link
              to="/cart"
              className="p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-white border border-[#F0E9E6]"
            >
              <ChevronLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Secure Checkout
              </h1>
              <p className="text-xs text-slate-500">256-Bit SSL Encrypted Transaction</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Guaranteed Safe Checkout</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Checkout Steps */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step 1: Delivery Address */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E9E6] shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#9F1239] text-white flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Delivery Address
                  </h3>
                </div>

                {!isAddingNewAddress && addresses.length > 0 && (
                  <button
                    onClick={() => setIsAddingNewAddress(true)}
                    className="text-xs font-bold text-[#9F1239] hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add New Address</span>
                  </button>
                )}
              </div>

              {/* Saved Addresses List */}
              {!isAddingNewAddress && addresses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {addresses.map((addr) => {
                    const isSelected = selectedAddressId === addr.id;
                    return (
                      <div
                        key={addr.id}
                        onClick={() => setSelectedAddressId(addr.id)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#9F1239] bg-[#FFF5F7]'
                            : 'border-[#F0E9E6] hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900">
                              {addr.fullName}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-white border border-[#F0E9E6] px-2 py-0.5 rounded-md text-slate-600">
                              {addr.type}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {addr.addressLine}, {addr.locality}, {addr.city}, {addr.state} –{' '}
                            <strong>{addr.pincode}</strong>
                          </p>
                          <p className="text-xs text-slate-500 font-medium">
                            Phone: {addr.phone}
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#9F1239]">
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                isSelected ? 'border-[#9F1239] bg-[#9F1239]' : 'border-slate-300'
                              }`}
                            >
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                            <span>{isSelected ? 'Delivering Here' : 'Select'}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* New Address Form */
                <form onSubmit={handleSaveNewAddress} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={newFullName}
                        onChange={(e) => setNewFullName(e.target.value)}
                        placeholder="Ananya Deshmukh"
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#F0E9E6] rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#9F1239] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        10-Digit Mobile Number *
                      </label>
                      <input
                        type="text"
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                        placeholder="9876543210"
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#F0E9E6] rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#9F1239] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        value={newPincode}
                        onChange={(e) => setNewPincode(e.target.value.replace(/\D/g, ''))}
                        placeholder="110001"
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#F0E9E6] rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#9F1239] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        value={newCity}
                        onChange={(e) => setNewCity(e.target.value)}
                        placeholder="New Delhi"
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#F0E9E6] rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#9F1239] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        value={newState}
                        onChange={(e) => setNewState(e.target.value)}
                        placeholder="Delhi"
                        required
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#F0E9E6] rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#9F1239] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Flat / House No. / Building / Street Address *
                    </label>
                    <input
                      type="text"
                      value={newAddressLine}
                      onChange={(e) => setNewAddressLine(e.target.value)}
                      placeholder="Flat 402, Royale Crest Apartments, Barakhamba Road"
                      required
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#F0E9E6] rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-[#9F1239] focus:bg-white"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-2">
                      {(['home', 'work', 'other'] as const).map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setNewType(t)}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-bold uppercase tracking-wider capitalize ${
                            newType === t
                              ? 'border-[#9F1239] bg-[#FFF0F3] text-[#9F1239]'
                              : 'border-[#F0E9E6] text-slate-600'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {addresses.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setIsAddingNewAddress(false)}
                          className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
                        >
                          Cancel
                        </button>
                      )}
                      <button
                        type="submit"
                        className="px-5 py-2 bg-[#9F1239] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#801836]"
                      >
                        Save Address
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Step 2: Delivery Speed */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E9E6] shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
                <div className="w-7 h-7 rounded-full bg-[#9F1239] text-white flex items-center justify-center font-bold text-xs">
                  2
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Delivery Method
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div
                  onClick={() => setDeliverySpeed('standard')}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 ${
                    deliverySpeed === 'standard'
                      ? 'border-[#9F1239] bg-[#FFF5F7]'
                      : 'border-[#F0E9E6] hover:border-slate-300 bg-white'
                  }`}
                >
                  <Truck className="w-5 h-5 text-[#9F1239] shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">Standard Delivery</span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded-xs">
                        FREE
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Estimated in 2-3 business days
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => setDeliverySpeed('express')}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 ${
                    deliverySpeed === 'express'
                      ? 'border-[#9F1239] bg-[#FFF5F7]'
                      : 'border-[#F0E9E6] hover:border-slate-300 bg-white'
                  }`}
                >
                  <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">Express Priority Dispatch</span>
                      <span className="text-[10px] font-bold text-slate-800 bg-slate-100 px-1.5 py-0.2 rounded-xs">
                        +₹99
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Guaranteed 24hr priority dispatch
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E9E6] shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
                <div className="w-7 h-7 rounded-full bg-[#9F1239] text-white flex items-center justify-center font-bold text-xs">
                  3
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Payment Method
                </h3>
              </div>

              {/* Payment Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {[
                  { id: 'UPI', label: 'UPI / QR', icon: QrCode },
                  { id: 'Card', label: 'Cards', icon: CreditCard },
                  { id: 'Net Banking', label: 'Netbanking', icon: Building2 },
                  { id: 'Wallet', label: 'Wallets', icon: Wallet },
                  { id: 'Cash on Delivery', label: 'COD', icon: Banknote },
                ].map((m) => {
                  const Icon = m.icon;
                  const isSelected = paymentMethod === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id as any)}
                      className={`p-3 rounded-xl border-2 text-center transition-all flex flex-col items-center gap-1.5 ${
                        isSelected
                          ? 'border-[#9F1239] bg-[#FFF5F7] text-[#9F1239]'
                          : 'border-[#F0E9E6] text-slate-700 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-bold">{m.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Payment Method Details Sub-panel */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-[#F0E9E6] space-y-3">
                {paymentMethod === 'UPI' && (
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-800">
                      Pay instantly via Google Pay, PhonePe, Paytm or any UPI App
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@upi (e.g. mobile@okhdfcbank)"
                        className="flex-1 px-3.5 py-2.5 bg-white border border-[#F0E9E6] rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#9F1239]"
                      />
                      <span className="px-4 py-2 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl flex items-center">
                        Instant 0% Fee
                      </span>
                    </div>
                  </div>
                )}

                {paymentMethod === 'Card' && (
                  <div className="space-y-2.5 text-xs text-slate-600">
                    <p className="font-bold text-slate-800">
                      Pay using Credit or Debit Card (Visa, Mastercard, RuPay, Amex)
                    </p>
                    <input
                      type="text"
                      placeholder="Card Number (Demo only: 4532 •••• •••• ••••)"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#F0E9E6] rounded-xl text-xs"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="px-3.5 py-2.5 bg-white border border-[#F0E9E6] rounded-xl text-xs"
                      />
                      <input
                        type="password"
                        maxLength={3}
                        placeholder="CVV"
                        className="px-3.5 py-2.5 bg-white border border-[#F0E9E6] rounded-xl text-xs"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'Net Banking' && (
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-800">Popular Banks:</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak'].map((b) => (
                        <span key={b} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg font-medium text-slate-700">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {paymentMethod === 'Cash on Delivery' && (
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-800">Cash on Delivery (COD)</p>
                    <p className="text-xs text-slate-500">
                      Pay in cash or scan the delivery executive’s QR code upon delivery at your doorstep.
                    </p>
                  </div>
                )}

                {paymentMethod === 'Wallet' && (
                  <p className="text-xs text-slate-600">
                    Amazon Pay, Paytm Wallet, Mobikwik supported.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Order Summary Column */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E9E6] shadow-xs space-y-6 sticky top-24">
            <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
              Order Summary ({cartItems.length} items)
            </h3>

            {/* Mini Items Preview */}
            <div className="space-y-3 max-h-56 overflow-y-auto pr-1 divide-y divide-slate-100">
              {cartItems.map((item) => (
                <div key={item.id} className="pt-2 first:pt-0 flex items-center gap-3 text-xs">
                  <div className="w-12 h-14 rounded-lg overflow-hidden shrink-0 border border-[#F0E9E6]">
                    <SafeImage
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fallbackCategory={item.product.subcategory || item.product.category}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-800 truncate">{item.product.name}</p>
                    <p className="text-[11px] text-slate-400">Qty: {item.quantity} • {item.selectedVariant.size}</p>
                  </div>
                  <span className="font-bold text-slate-900">
                    {formatPrice(item.selectedVariant.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Bill Breakdown */}
            <div className="space-y-2 text-xs pt-3 border-t border-slate-100">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Product Discount</span>
                  <span>-{formatPrice(discount)}</span>
                </div>
              )}
              {couponDiscount > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Coupon ({appliedCoupon?.code})</span>
                  <span>-{formatPrice(couponDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-600">
                <span>Shipping Fee</span>
                <span>
                  {deliverySpeed === 'express' ? (
                    '₹99 (Express)'
                  ) : shipping === 0 ? (
                    <strong className="text-emerald-600">FREE</strong>
                  ) : (
                    formatPrice(shipping)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-slate-900 pt-3 border-t border-slate-100">
                <span>Total Payable</span>
                <span>
                  {formatPrice(deliverySpeed === 'express' ? total + 99 : total)}
                </span>
              </div>
            </div>

            {/* PLACE ORDER BUTTON */}
            <button
              onClick={handlePlaceOrder}
              disabled={isProcessing}
              className="w-full py-4 bg-[#9F1239] hover:bg-[#801836] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-widest rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>{isProcessing ? 'Confirming Order...' : `Place Order • ${formatPrice(deliverySpeed === 'express' ? total + 99 : total)}`}</span>
            </button>

            <div className="text-center space-y-1 text-[11px] text-slate-400 pt-1">
              <p>By placing this order, you agree to VÉLORA’s Terms & Privacy Policy.</p>
              <p className="text-emerald-700 font-medium flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Complimentary Luxury Gift Samples Included</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

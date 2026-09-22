import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/Product/ProductCard';
import { Breadcrumbs } from '../components/Common/Breadcrumbs';
import { formatPrice } from '../utils/formatters';
import { SafeImage } from '../components/Common/SafeImage';
import {
  User as UserIcon,
  Package,
  MapPinned,
  Heart,
  LogOut,
  Plus,
  Trash2,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Truck,
  Sparkles,
} from 'lucide-react';

export const AccountPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = (searchParams.get('tab') as 'profile' | 'orders' | 'addresses' | 'wishlist') || 'profile';
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'addresses' | 'wishlist'>(initialTab);

  const {
    user,
    isLoggedIn,
    openAuthModal,
    logout,
    addresses,
    deleteAddress,
    setDefaultAddress,
    orders,
  } = useAuth();

  const { wishlist } = useWishlist();

  useEffect(() => {
    const tab = searchParams.get('tab') as any;
    if (tab && ['profile', 'orders', 'addresses', 'wishlist'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (tab: 'profile' | 'orders' | 'addresses' | 'wishlist') => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  if (!isLoggedIn || !user) {
    return (
      <div className="bg-[#FAF9F8] min-h-[70vh] py-16 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4 space-y-4">
          <div className="w-20 h-20 rounded-full bg-[#FFF0F3] border border-[#FDE2E8] flex items-center justify-center text-[#9F1239] mx-auto shadow-sm">
            <UserIcon className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900">Sign in to your account</h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Track your orders, manage saved delivery addresses, and view your exclusive member rewards.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openAuthModal('login')}
              className="px-8 py-3.5 bg-[#9F1239] hover:bg-[#801836] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95"
            >
              Log In / Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F8] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <Breadcrumbs
          items={[{ label: 'Home', link: '/' }, { label: 'My Account' }]}
        />

        {/* User Greeting Hero */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E9E6] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#FFF0F3] border-2 border-[#FDE2E8] text-[#9F1239] font-serif text-2xl font-bold flex items-center justify-center shadow-xs">
              {user.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                  Welcome, {user.name}
                </h1>
                <span className="bg-[#FFF0F3] text-[#9F1239] border border-[#FDE2E8] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  VIP Club Tier
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {user.email} • {user.phone}
              </p>
            </div>
          </div>

          <button
            onClick={logout}
            className="px-4 py-2 bg-slate-50 hover:bg-rose-50 border border-[#F0E9E6] text-rose-600 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5 self-start sm:self-auto"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        </div>

        {/* Account Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-3 sm:p-4 border border-[#F0E9E6] shadow-xs flex lg:flex-col overflow-x-auto no-scrollbar gap-2 sticky top-24">
            {[
              { id: 'profile', label: 'Personal Information', icon: UserIcon },
              { id: 'orders', label: `My Orders (${orders.length})`, icon: Package },
              { id: 'addresses', label: `Saved Addresses (${addresses.length})`, icon: MapPinned },
              { id: 'wishlist', label: `My Wishlist (${wishlist.length})`, icon: Heart },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as any)}
                  className={`flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl text-xs font-bold tracking-wide transition-all shrink-0 lg:w-full ${
                    isActive
                      ? 'bg-[#9F1239] text-white shadow-md'
                      : 'text-slate-700 hover:bg-[#FFF5F7] hover:text-[#9F1239] bg-slate-50 lg:bg-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panel */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E9E6] shadow-xs">
            {/* Tab 1: Profile */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-[#F0E9E6] space-y-1">
                    <p className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                      Full Name
                    </p>
                    <p className="text-sm font-bold text-slate-800">{user.name}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-[#F0E9E6] space-y-1">
                    <p className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                      Registered Phone
                    </p>
                    <p className="text-sm font-bold text-slate-800">{user.phone}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-[#F0E9E6] space-y-1">
                    <p className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                      Email Address
                    </p>
                    <p className="text-sm font-bold text-slate-800">{user.email}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF5F7] border border-[#FDE2E8] space-y-1">
                    <p className="text-[#9F1239] font-semibold uppercase tracking-wider text-[10px]">
                      VÉLORA Loyalty Points
                    </p>
                    <p className="text-sm font-bold text-[#9F1239]">450 Points (Worth ₹450)</p>
                  </div>
                </div>

                <div className="p-4 bg-[#FFF9FA] rounded-2xl border border-[#FDE2E8] text-xs text-slate-600 space-y-2">
                  <p className="font-bold text-[#9F1239]">VIP Member Benefits Active:</p>
                  <ul className="space-y-1 text-[11px] list-disc pl-4 text-slate-600">
                    <li>Free Express priority dispatch on all future orders</li>
                    <li>Complimentary miniature parfum sample with every shipment</li>
                    <li>Special birthday gift coffret during your birthday month</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 2: Orders */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  My Orders ({orders.length})
                </h3>

                {orders.length > 0 ? (
                  <div className="space-y-6">
                    {orders.map((ord) => (
                      <div
                        key={ord.id}
                        className="rounded-2xl border border-[#F0E9E6] p-5 space-y-4 bg-[#FAF9F8]"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#F0E9E6] text-xs">
                          <div>
                            <p className="font-bold text-slate-900 font-mono">
                              Order #{ord.orderNumber}
                            </p>
                            <p className="text-slate-400 text-[11px]">Placed on {ord.date}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full text-xs font-bold">
                              {ord.status}
                            </span>
                            <span className="font-bold text-slate-900">{formatPrice(ord.total)}</span>
                          </div>
                        </div>

                        {/* Items */}
                        <div className="space-y-2">
                          {ord.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-xs bg-white p-2.5 rounded-xl border border-[#F0E9E6]">
                              <div className="w-12 h-14 rounded-lg overflow-hidden shrink-0 border border-[#F0E9E6]">
                                <SafeImage
                                  src={item.image}
                                  alt={item.name}
                                  fallbackCategory="skincare"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-bold text-slate-800 truncate">{item.name}</p>
                                <p className="text-slate-400 text-[11px]">Size: {item.variantSize} • Qty: {item.quantity}</p>
                              </div>
                              <span className="font-bold text-slate-900">
                                {formatPrice(item.price * item.quantity)}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-xs pt-1">
                          <span className="text-slate-500">
                            Delivering to: <strong>{ord.shippingAddress.city}</strong>
                          </span>
                          <Link
                            to={`/order-confirmation/${ord.id}`}
                            className="text-[#9F1239] font-bold hover:underline"
                          >
                            View Order Tracking & Invoice →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-slate-500">
                    <p className="text-sm">You have not placed any orders yet.</p>
                  </div>
                )}
              </div>
            )}

            {/* Tab 3: Addresses */}
            {activeTab === 'addresses' && (
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Saved Delivery Addresses ({addresses.length})
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {addresses.map((addr) => (
                    <div
                      key={addr.id}
                      className="p-5 rounded-2xl border border-[#F0E9E6] bg-[#FAF9F8] flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900">{addr.fullName}</span>
                          <span className="text-[10px] font-bold uppercase bg-white border border-[#F0E9E6] px-2 py-0.5 rounded-md text-slate-600">
                            {addr.type}
                          </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {addr.addressLine}, {addr.locality}, {addr.city}, {addr.state} –{' '}
                          <strong>{addr.pincode}</strong>
                        </p>
                        <p className="text-slate-500 font-medium">Phone: {addr.phone}</p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
                        {addr.isDefault ? (
                          <span className="text-emerald-600 font-bold flex items-center gap-1 text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Default Address</span>
                          </span>
                        ) : (
                          <button
                            onClick={() => setDefaultAddress(addr.id)}
                            className="text-slate-500 hover:text-[#9F1239] text-[11px] font-medium"
                          >
                            Set as Default
                          </button>
                        )}

                        <button
                          onClick={() => deleteAddress(addr.id)}
                          className="text-slate-400 hover:text-rose-600 p-1"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4: Wishlist */}
            {activeTab === 'wishlist' && (
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  My Wishlist ({wishlist.length})
                </h3>

                {wishlist.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {wishlist.map((prod) => (
                      <ProductCard key={prod.id} product={prod} />
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-slate-500">
                    <p className="text-sm">Your wishlist is currently empty.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

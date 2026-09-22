import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TopPromoStrip } from './TopPromoStrip';
import { CategoryNav } from './CategoryNav';
import { RotatingSearchInput } from '../Search/RotatingSearchInput';
import { SearchModal } from '../Search/SearchModal';
import { MobileDrawer } from './MobileDrawer';
import { PincodeModal } from '../Common/PincodeModal';
import { AuthModal } from '../Common/AuthModal';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { usePincode } from '../../context/PincodeContext';
import {
  Menu,
  Search,
  MapPin,
  Store,
  User as UserIcon,
  Heart,
  ShoppingBag,
  LogOut,
  Package,
  MapPinned,
  ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MainHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const { user, isLoggedIn, openAuthModal, logout } = useAuth();
  const { itemCount, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const { city, pincode, openPincodeModal } = usePincode();

  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-shadow shadow-xs">
      {/* 1. Promotional Announcement Strip */}
      <TopPromoStrip />

      {/* 2. Main Header Core */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-6">
        {/* Left: Mobile Menu Button & Logo */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden w-9 h-9 flex items-center justify-center text-slate-700 hover:text-[#9F1239] rounded-full hover:bg-[#FFF5F7] transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link to="/" className="group flex flex-col items-start leading-none shrink-0">
            <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#9F1239] group-hover:text-[#B71943] transition-colors">
              VÉLORA
            </span>
            <span className="text-[7.5px] sm:text-[9px] text-slate-400 font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase mt-0.5">
              PARFUMS & BOTANICALS
            </span>
          </Link>
        </div>

        {/* Location Selector (Desktop) */}
        <button
          onClick={openPincodeModal}
          className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF5F7] hover:bg-[#FFEAEF] border border-[#FDE2E8] text-xs transition-colors group text-left shrink-0"
        >
          <MapPin className="w-4 h-4 text-[#9F1239] shrink-0 group-hover:animate-bounce" />
          <div>
            <p className="text-[10px] text-slate-400 font-medium leading-none">Deliver to</p>
            <p className="text-xs font-bold text-slate-800 leading-tight">
              {city} <span className="text-[#9F1239]">({pincode})</span>
            </p>
          </div>
        </button>

        {/* Center: Search Bar (Tablet & Desktop) */}
        <div className="hidden md:block flex-1 max-w-md lg:max-w-xl mx-2">
          <RotatingSearchInput />
        </div>

        {/* Right Utility Icons */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Mobile Search Trigger */}
          <button
            onClick={() => setIsMobileSearchOpen(true)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-slate-700 hover:text-[#9F1239] rounded-full hover:bg-[#FFF5F7] transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Store Locator */}
          <Link
            to="/stores"
            className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#9F1239] px-3 py-1.5 rounded-full hover:bg-[#FFF5F7] transition-colors"
          >
            <Store className="w-4 h-4 text-[#9F1239]" />
            <span>Stores</span>
          </Link>

          {/* User Account / Profile */}
          <div className="relative">
            {isLoggedIn && user ? (
              <div
                className="relative"
                onMouseEnter={() => setIsUserDropdownOpen(true)}
                onMouseLeave={() => setIsUserDropdownOpen(false)}
              >
                <button
                  onClick={() => navigate('/account')}
                  className="flex items-center gap-1.5 p-1 text-xs font-semibold text-slate-700 hover:text-[#9F1239] transition-colors rounded-full hover:bg-[#FFF5F7]"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FFF0F3] border border-[#FDE2E8] text-[#9F1239] font-bold flex items-center justify-center text-xs">
                    {user.name.charAt(0)}
                  </div>
                  <span className="hidden xl:inline max-w-[70px] truncate">{user.name}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden xl:inline" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isUserDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-xl border border-[#F0E9E6] py-2 z-50 divide-y divide-slate-100"
                    >
                      <div className="px-4 py-2">
                        <p className="text-xs font-bold text-slate-800 truncate">{user.name}</p>
                        <p className="text-[10px] text-slate-400 truncate">{user.email || user.phone}</p>
                      </div>

                      <div className="py-1">
                        <Link
                          to="/account"
                          onClick={() => setIsUserDropdownOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs text-slate-700 hover:bg-[#FFF5F7] hover:text-[#9F1239]"
                        >
                          <UserIcon className="w-3.5 h-3.5 text-slate-400" />
                          <span>My Profile</span>
                        </Link>
                        <Link
                          to="/account?tab=orders"
                          onClick={() => setIsUserDropdownOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs text-slate-700 hover:bg-[#FFF5F7] hover:text-[#9F1239]"
                        >
                          <Package className="w-3.5 h-3.5 text-slate-400" />
                          <span>My Orders</span>
                        </Link>
                        <Link
                          to="/account?tab=addresses"
                          onClick={() => setIsUserDropdownOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs text-slate-700 hover:bg-[#FFF5F7] hover:text-[#9F1239]"
                        >
                          <MapPinned className="w-3.5 h-3.5 text-slate-400" />
                          <span>Saved Addresses</span>
                        </Link>
                      </div>

                      <div className="py-1">
                        <button
                          onClick={() => {
                            logout();
                            setIsUserDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-4 py-2 text-xs text-rose-600 hover:bg-rose-50"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Log Out</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={() => openAuthModal('login')}
                className="w-9 h-9 flex items-center justify-center text-slate-700 hover:text-[#9F1239] rounded-full hover:bg-[#FFF5F7] transition-colors"
                aria-label="Account login"
              >
                <UserIcon className="w-5 h-5 text-slate-700" />
              </button>
            )}
          </div>

          {/* Wishlist Icon */}
          <Link
            to="/wishlist"
            className="w-9 h-9 flex items-center justify-center text-slate-700 hover:text-[#9F1239] rounded-full hover:bg-[#FFF5F7] transition-colors relative"
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute 0.5 top-0.5 right-0.5 bg-[#E11D48] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-scale">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart Icon & Drawer Trigger */}
          <button
            onClick={openCart}
            className="w-9 h-9 flex items-center justify-center text-slate-700 hover:text-[#9F1239] rounded-full hover:bg-[#FFF5F7] transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute 0.5 top-0.5 right-0.5 bg-[#9F1239] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-scale">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Location Quick Bar */}
      <div className="xl:hidden flex items-center justify-between px-4 py-1.5 bg-[#FAF7F6] border-t border-[#F0E9E6] text-xs">
        <button
          onClick={openPincodeModal}
          className="flex items-center gap-1.5 text-slate-700 hover:text-[#9F1239] transition-colors text-left"
        >
          <MapPin className="w-3.5 h-3.5 text-[#9F1239] shrink-0" />
          <span className="text-[11px] text-slate-500">Deliver to:</span>
          <span className="text-[11px] font-bold text-slate-800">
            {city} ({pincode})
          </span>
        </button>
        <button
          onClick={openPincodeModal}
          className="text-[10px] font-bold text-[#9F1239] uppercase tracking-wider hover:underline"
        >
          Change
        </button>
      </div>

      {/* 3. Category Navigation Bar (Desktop) */}
      <CategoryNav />

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Search Modal */}
      <SearchModal
        isOpen={isMobileSearchOpen}
        onClose={() => setIsMobileSearchOpen(false)}
      />

      {/* Pincode Location Modal */}
      <PincodeModal />

      {/* Auth Modal */}
      <AuthModal />
    </header>
  );
};

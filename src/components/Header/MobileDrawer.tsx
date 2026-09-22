import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronDown,
  ChevronRight,
  User,
  MapPin,
  Sparkles,
  Gift,
  Phone,
  Heart,
  ShoppingBag,
  Store,
} from 'lucide-react';
import { MAIN_NAV_ITEMS } from '../../data/categories';
import { useAuth } from '../../context/AuthContext';
import { usePincode } from '../../context/PincodeContext';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const [expandedNavId, setExpandedNavId] = useState<string | null>(null);
  const { user, isLoggedIn, openAuthModal, logout } = useAuth();
  const { city, pincode, openPincodeModal } = usePincode();

  const toggleCategory = (id: string) => {
    setExpandedNavId((prev) => (prev === id ? null : id));
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[1]"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col z-[2] overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 border-b border-[#F0E9E6] bg-[#FFF5F7]">
              <div>
                <span className="font-serif text-xl font-bold tracking-widest text-[#9F1239]">
                  VÉLORA
                </span>
                <p className="text-[9px] text-slate-400 uppercase tracking-widest">
                  LUXE BOTANICALS
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-800 rounded-full hover:bg-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Location Strip */}
            <button
              onClick={() => {
                onClose();
                openPincodeModal();
              }}
              className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-[#F0E9E6] text-left text-xs"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#9F1239]" />
                <span className="text-slate-600">
                  Deliver to: <strong className="text-slate-800">{city} ({pincode})</strong>
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#9F1239]">Change</span>
            </button>

            {/* Navigation List */}
            <div className="flex-1 overflow-y-auto py-2 divide-y divide-slate-100">
              {MAIN_NAV_ITEMS.map((nav) => {
                const isExpanded = expandedNavId === nav.id;
                const hasChildren = nav.megaMenu && nav.megaMenu.columns.length > 0;

                return (
                  <div key={nav.id} className="py-1">
                    <div className="flex items-center justify-between px-4 py-2">
                      <Link
                        to={nav.link}
                        onClick={onClose}
                        className="text-xs font-bold text-slate-800 uppercase tracking-wider hover:text-[#9F1239]"
                      >
                        {nav.label}
                      </Link>

                      {hasChildren && (
                        <button
                          onClick={() => toggleCategory(nav.id)}
                          className="p-1.5 text-slate-400 hover:text-slate-800"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              isExpanded ? 'rotate-180 text-[#9F1239]' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Accordion Sub-items */}
                    <AnimatePresence>
                      {isExpanded && nav.megaMenu && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-[#FFF9FA] px-6 py-2 space-y-3 overflow-hidden border-t border-[#FDE2E8]"
                        >
                          {nav.megaMenu.columns.map((col, cIdx) => (
                            <div key={cIdx} className="space-y-1.5">
                              <p className="text-[11px] font-bold text-[#9F1239] uppercase tracking-wider">
                                {col.title}
                              </p>
                              <ul className="space-y-1 pl-2 border-l border-[#FDE2E8]">
                                {col.items.map((item, iIdx) => (
                                  <li key={iIdx}>
                                    <Link
                                      to={item.link}
                                      onClick={onClose}
                                      className="text-xs text-slate-600 hover:text-[#9F1239] block py-0.5"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions / Account */}
            <div className="p-4 border-t border-[#F0E9E6] bg-slate-50 space-y-2">
              {isLoggedIn && user ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#9F1239] text-white flex items-center justify-center font-bold text-xs">
                      {user.name.charAt(0)}
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-slate-800">{user.name}</p>
                      <p className="text-[11px] text-slate-400">{user.phone || user.email}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Link
                      to="/account"
                      onClick={onClose}
                      className="py-2 text-center bg-white border border-[#F0E9E6] rounded-lg text-xs font-semibold text-slate-700 hover:text-[#9F1239]"
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        onClose();
                      }}
                      className="py-2 text-center bg-white border border-[#F0E9E6] rounded-lg text-xs font-semibold text-rose-600"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => {
                    onClose();
                    openAuthModal('login');
                  }}
                  className="w-full py-2.5 bg-[#9F1239] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4" />
                  <span>Log In / Sign Up</span>
                </button>
              )}

              <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                <Link
                  to="/stores"
                  onClick={onClose}
                  className="flex items-center gap-1.5 hover:text-slate-800"
                >
                  <Store className="w-4 h-4 text-[#9F1239]" />
                  <span>Store Locator</span>
                </Link>
                <Link
                  to="/wishlist"
                  onClick={onClose}
                  className="flex items-center gap-1.5 hover:text-slate-800"
                >
                  <Heart className="w-4 h-4 text-[#9F1239]" />
                  <span>Wishlist</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

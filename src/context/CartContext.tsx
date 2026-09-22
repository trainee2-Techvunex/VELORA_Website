import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Product, ProductVariant, CartItem, Coupon } from '../types';
import { COUPONS } from '../data/products';
import { getLocalStorage, setLocalStorage } from '../utils/storage';
import { useToast } from './ToastContext';
import { useWishlist } from './WishlistContext';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  subtotal: number;
  mrpTotal: number;
  discount: number;
  couponDiscount: number;
  shipping: number;
  total: number;
  totalSavings: number;
  itemCount: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  moveToWishlist: (itemId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 499;
const SHIPPING_FEE = 70;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => getLocalStorage('velora_cart', []));
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(() => getLocalStorage('velora_coupon', null));

  const { showToast } = useToast();
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    setLocalStorage('velora_cart', cartItems);
  }, [cartItems]);

  useEffect(() => {
    setLocalStorage('velora_coupon', appliedCoupon);
  }, [appliedCoupon]);

  const addToCart = (product: Product, variant?: ProductVariant, quantity: number = 1) => {
    const selectedVariant = variant || product.variants[0] || {
      id: `${product.id}-default`,
      size: product.size,
      price: product.price,
      mrp: product.mrp,
      inStock: true,
    };

    const cartItemId = `${product.id}-${selectedVariant.id}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        {
          id: cartItemId,
          product,
          selectedVariant,
          quantity,
        },
        ...prev,
      ];
    });

    setIsCartOpen(true);
    showToast(`Added ${quantity}x "${product.name}" to your cart`, 'success', 'Added to Cart');
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
  };

  const moveToWishlist = (itemId: string) => {
    const item = cartItems.find((i) => i.id === itemId);
    if (item) {
      addToWishlist(item.product);
      removeFromCart(itemId);
    }
  };

  // Calculations
  const { subtotal, mrpTotal } = useMemo(() => {
    let sub = 0;
    let mrp = 0;
    cartItems.forEach((item) => {
      sub += item.selectedVariant.price * item.quantity;
      mrp += item.selectedVariant.mrp * item.quantity;
    });
    return { subtotal: sub, mrpTotal: mrp };
  }, [cartItems]);

  const itemCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const couponDiscount = useMemo(() => {
    if (!appliedCoupon) return 0;
    if (subtotal < appliedCoupon.minOrderValue) return 0;
    const calc = Math.round((subtotal * appliedCoupon.discountPercentage) / 100);
    return appliedCoupon.maxDiscount ? Math.min(calc, appliedCoupon.maxDiscount) : calc;
  }, [appliedCoupon, subtotal]);

  // Auto-remove coupon if subtotal falls below requirement
  useEffect(() => {
    if (appliedCoupon && subtotal < appliedCoupon.minOrderValue) {
      setAppliedCoupon(null);
      showToast(`Coupon ${appliedCoupon.code} removed as minimum order value not met`, 'info');
    }
  }, [appliedCoupon, subtotal, showToast]);

  const applyCoupon = (code: string) => {
    const formatted = code.trim().toUpperCase();
    const found = COUPONS.find((c) => c.code === formatted);

    if (!found) {
      return { success: false, message: 'Invalid coupon code. Try WELCOME10 or BEAUTY15' };
    }

    if (subtotal < found.minOrderValue) {
      return {
        success: false,
        message: `Add ₹${found.minOrderValue - subtotal} more to use coupon ${found.code}`,
      };
    }

    setAppliedCoupon(found);
    return { success: true, message: `Coupon ${found.code} applied successfully!` };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed', 'info');
  };

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FEE;
  const total = Math.max(0, subtotal - couponDiscount + shipping);
  const discount = Math.max(0, mrpTotal - subtotal);
  const totalSavings = discount + couponDiscount + (subtotal >= FREE_SHIPPING_THRESHOLD && subtotal > 0 ? SHIPPING_FEE : 0);
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        subtotal,
        mrpTotal,
        discount,
        couponDiscount,
        shipping,
        total,
        totalSavings,
        itemCount,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountNeededForFreeShipping,
        moveToWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

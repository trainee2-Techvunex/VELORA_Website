import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Address, Order, OrderItem } from '../types';
import { getLocalStorage, setLocalStorage } from '../utils/storage';
import { generateOrderId, getEstimatedDeliveryDate } from '../utils/formatters';
import { useToast } from './ToastContext';

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isAuthModalOpen: boolean;
  authModalMode: 'login' | 'signup' | 'otp';
  tempAuthData: { phoneOrEmail: string; name: string };
  openAuthModal: (mode?: 'login' | 'signup') => void;
  closeAuthModal: () => void;
  setAuthModalMode: (mode: 'login' | 'signup' | 'otp') => void;
  requestOtp: (phoneOrEmail: string, name?: string) => boolean;
  verifyOtp: (otp: string) => boolean;
  logout: () => void;
  addresses: Address[];
  addAddress: (address: Omit<Address, 'id'>) => Address;
  updateAddress: (address: Address) => void;
  deleteAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;
  orders: Order[];
  placeOrder: (orderData: {
    items: OrderItem[];
    subtotal: number;
    discount: number;
    shipping: number;
    total: number;
    couponCode?: string;
    shippingAddress: Address;
    paymentMethod: 'UPI' | 'Card' | 'Net Banking' | 'Wallet' | 'Cash on Delivery';
  }) => Order;
}

const DEFAULT_ADDRESSES: Address[] = [
  {
    id: 'addr-1',
    fullName: 'Ananya Deshmukh',
    phone: '+91 98765 43210',
    pincode: '110001',
    addressLine: 'Flat 402, Royale Crest Apartments, Barakhamba Road',
    locality: 'Connaught Place',
    city: 'New Delhi',
    state: 'Delhi',
    isDefault: true,
    type: 'home',
  },
  {
    id: 'addr-2',
    fullName: 'Ananya Deshmukh (Work)',
    phone: '+91 98765 43210',
    pincode: '110020',
    addressLine: 'Tower B, 7th Floor, DLF Cyber City',
    locality: 'Okhla Phase III',
    city: 'New Delhi',
    state: 'Delhi',
    isDefault: false,
    type: 'work',
  },
];

const DEFAULT_ORDERS: Order[] = [
  {
    id: 'ord-101',
    orderNumber: 'VEL-849201-9231',
    date: '12 Sep 2026',
    items: [
      {
        productId: 'velora-frag-01',
        name: 'Velvet Damask Rose Eau de Parfum',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=300&q=80',
        variantSize: '100ml',
        price: 1899,
        quantity: 1,
      },
      {
        productId: 'velora-skin-01',
        name: '24K Gold & 15% Vitamin C Glow Elixir',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80',
        variantSize: '30ml',
        price: 899,
        quantity: 1,
      },
    ],
    subtotal: 2798,
    discount: 400,
    shipping: 0,
    total: 2398,
    couponCode: 'BEAUTY15',
    shippingAddress: DEFAULT_ADDRESSES[0],
    paymentMethod: 'UPI',
    status: 'Delivered',
    estimatedDelivery: '15 Sep 2026',
  },
];

const DEFAULT_USER: User = {
  id: 'user-001',
  name: 'Ananya Deshmukh',
  email: 'ananya.deshmukh@example.com',
  phone: '9876543210',
  isLoggedIn: true,
  addresses: DEFAULT_ADDRESSES,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => getLocalStorage('velora_user', DEFAULT_USER));
  const [addresses, setAddresses] = useState<Address[]>(() => getLocalStorage('velora_addresses', DEFAULT_ADDRESSES));
  const [orders, setOrders] = useState<Order[]>(() => getLocalStorage('velora_orders', DEFAULT_ORDERS));

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup' | 'otp'>('login');
  const [tempAuthData, setTempAuthData] = useState<{ phoneOrEmail: string; name: string }>({
    phoneOrEmail: '',
    name: '',
  });

  const { showToast } = useToast();

  useEffect(() => {
    setLocalStorage('velora_user', user);
  }, [user]);

  useEffect(() => {
    setLocalStorage('velora_addresses', addresses);
  }, [addresses]);

  useEffect(() => {
    setLocalStorage('velora_orders', orders);
  }, [orders]);

  const openAuthModal = (mode: 'login' | 'signup' = 'login') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setAuthModalMode('login');
  };

  const requestOtp = (phoneOrEmail: string, name: string = 'Beauty Lover') => {
    if (!phoneOrEmail.trim()) {
      showToast('Please enter your Mobile Number or Email', 'error');
      return false;
    }
    setTempAuthData({ phoneOrEmail, name });
    setAuthModalMode('otp');
    showToast('OTP sent! Use 1234 to verify instantly.', 'info', 'OTP Sent');
    return true;
  };

  const verifyOtp = (otp: string) => {
    if (otp === '1234' || otp.length === 4) {
      const newUser: User = {
        id: `user-${Date.now().toString().slice(-4)}`,
        name: tempAuthData.name || (tempAuthData.phoneOrEmail.includes('@') ? tempAuthData.phoneOrEmail.split('@')[0] : 'Velora Member'),
        email: tempAuthData.phoneOrEmail.includes('@') ? tempAuthData.phoneOrEmail : `${tempAuthData.phoneOrEmail}@velorabeauty.com`,
        phone: !tempAuthData.phoneOrEmail.includes('@') ? tempAuthData.phoneOrEmail : '9876543210',
        isLoggedIn: true,
        addresses: addresses,
      };

      setUser(newUser);
      setIsAuthModalOpen(false);
      showToast(`Welcome back, ${newUser.name}!`, 'success', 'Login Successful');
      return true;
    } else {
      showToast('Invalid OTP. Use 1234 for instant verification.', 'error');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    showToast('Logged out successfully', 'info');
  };

  const addAddress = (newAddr: Omit<Address, 'id'>): Address => {
    const id = `addr-${Date.now().toString().slice(-6)}`;
    const fullAddress: Address = {
      ...newAddr,
      id,
      isDefault: addresses.length === 0 ? true : Boolean(newAddr.isDefault),
    };

    setAddresses((prev) => {
      const updated = newAddr.isDefault ? prev.map((a) => ({ ...a, isDefault: false })) : [...prev];
      return [fullAddress, ...updated];
    });

    showToast('Delivery address saved', 'success');
    return fullAddress;
  };

  const updateAddress = (updated: Address) => {
    setAddresses((prev) =>
      prev.map((a) => {
        if (a.id === updated.id) return updated;
        if (updated.isDefault) return { ...a, isDefault: false };
        return a;
      })
    );
    showToast('Address updated', 'success');
  };

  const deleteAddress = (id: string) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
    showToast('Address removed', 'info');
  };

  const setDefaultAddress = (id: string) => {
    setAddresses((prev) => prev.map((a) => ({ ...a, isDefault: a.id === id })));
    showToast('Default address updated', 'success');
  };

  const placeOrder = (orderData: {
    items: OrderItem[];
    subtotal: number;
    discount: number;
    shipping: number;
    total: number;
    couponCode?: string;
    shippingAddress: Address;
    paymentMethod: 'UPI' | 'Card' | 'Net Banking' | 'Wallet' | 'Cash on Delivery';
  }): Order => {
    const newOrder: Order = {
      id: `ord-${Date.now().toString().slice(-6)}`,
      orderNumber: generateOrderId(),
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      items: orderData.items,
      subtotal: orderData.subtotal,
      discount: orderData.discount,
      shipping: orderData.shipping,
      total: orderData.total,
      couponCode: orderData.couponCode,
      shippingAddress: orderData.shippingAddress,
      paymentMethod: orderData.paymentMethod,
      status: 'Order Confirmed',
      estimatedDelivery: getEstimatedDeliveryDate(3),
    };

    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: Boolean(user?.isLoggedIn),
        isAuthModalOpen,
        authModalMode,
        tempAuthData,
        openAuthModal,
        closeAuthModal,
        setAuthModalMode,
        requestOtp,
        verifyOtp,
        logout,
        addresses,
        addAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress,
        orders,
        placeOrder,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

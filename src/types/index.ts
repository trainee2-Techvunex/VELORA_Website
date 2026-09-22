export type CategoryType = 
  | 'skincare'
  | 'fragrances'
  | 'bodycare'
  | 'haircare'
  | 'men'
  | 'gifting'
  | 'collections';

export type SkinType = 'All Skin Types' | 'Dry' | 'Oily' | 'Combination' | 'Sensitive' | 'Normal';

export type Concern = 
  | 'Acne & Blemishes'
  | 'Hydration & Dryness'
  | 'Glass Skin Glow'
  | 'Pigmentation & Dark Spots'
  | 'Sun Protection'
  | 'Anti-Ageing & Fine Lines'
  | 'Hair Fall & Density'
  | 'Dullness & Texture';

export type FragranceFamily = 
  | 'Floral & Rose'
  | 'Woody & Amber'
  | 'Fresh & Aquatic'
  | 'Citrus & Zest'
  | 'Oriental & Oud'
  | 'Gourmand & Vanilla';

export type RecipientBond = 
  | 'Gifts for Her'
  | 'Gifts for Him'
  | 'For Mom'
  | 'For Dad'
  | 'For Sister'
  | 'For Best Friend'
  | 'For Couple'
  | 'Self Care';

export interface ProductVariant {
  id: string;
  size: string; // e.g., "50ml", "100ml", "30g"
  price: number;
  mrp: number;
  inStock: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  category: CategoryType;
  subcategory: string;
  price: number;
  mrp: number;
  discount: number;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  shortDescription: string;
  ingredients: string[];
  benefits: string[];
  howToUse: string;
  skinType?: SkinType;
  fragranceFamily?: FragranceFamily;
  concern?: Concern;
  recipient?: RecipientBond[];
  size: string;
  variants: ProductVariant[];
  stock: number;
  badge?: 'BESTSELLER' | 'NEW LAUNCH' | 'TRENDING' | 'AWARD WINNER' | 'LIMITED EDITION' | 'SAVE 30%';
  featured?: boolean;
  bestSeller?: boolean;
  newLaunch?: boolean;
  collection?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedVariant: ProductVariant;
  quantity: number;
}

export interface Coupon {
  code: string;
  discountPercentage: number;
  maxDiscount?: number;
  minOrderValue: number;
  description: string;
}

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  pincode: string;
  addressLine: string;
  locality: string;
  city: string;
  state: string;
  isDefault?: boolean;
  type: 'home' | 'work' | 'other';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  isLoggedIn: boolean;
  addresses: Address[];
}

export interface OrderItem {
  productId: string;
  name: string;
  image: string;
  variantSize: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  couponCode?: string;
  shippingAddress: Address;
  paymentMethod: 'UPI' | 'Card' | 'Net Banking' | 'Wallet' | 'Cash on Delivery';
  status: 'Order Confirmed' | 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered';
  estimatedDelivery: string;
}

export interface ReviewItem {
  id: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  productName?: string;
  productImage?: string;
  location?: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  timing: string;
  phone: string;
  landmark: string;
  isFlagship?: boolean;
}

export interface FilterState {
  categories: string[];
  subcategories: string[];
  concerns: string[];
  fragranceFamilies: string[];
  skinTypes: string[];
  priceRange: [number, number];
  minRating: number;
  inStockOnly: boolean;
  discountOnly: boolean;
  badge?: string;
  sortBy: 'featured' | 'bestsellers' | 'newest' | 'price-low' | 'price-high' | 'rating';
}

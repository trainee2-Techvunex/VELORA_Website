import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import { getLocalStorage, setLocalStorage } from '../utils/storage';

interface RecentlyViewedContextType {
  recentlyViewed: Product[];
  addRecentlyViewed: (product: Product) => void;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextType | undefined>(undefined);

export const RecentlyViewedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>(() =>
    getLocalStorage('velora_recently_viewed', [])
  );

  useEffect(() => {
    setLocalStorage('velora_recently_viewed', recentlyViewed);
  }, [recentlyViewed]);

  const addRecentlyViewed = (product: Product) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((p) => p.id !== product.id);
      return [product, ...filtered].slice(0, 10);
    });
  };

  return (
    <RecentlyViewedContext.Provider value={{ recentlyViewed, addRecentlyViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};

export const useRecentlyViewed = () => {
  const context = useContext(RecentlyViewedContext);
  if (!context) {
    throw new Error('useRecentlyViewed must be used within a RecentlyViewedProvider');
  }
  return context;
};

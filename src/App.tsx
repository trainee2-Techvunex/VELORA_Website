import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { PincodeProvider } from './context/PincodeContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext';
import { MainHeader } from './components/Header/MainHeader';
import { Footer } from './components/Footer/Footer';
import { CartDrawer } from './components/Cart/CartDrawer';
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { WishlistPage } from './pages/WishlistPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { AccountPage } from './pages/AccountPage';
import { StoreLocatorPage } from './pages/StoreLocatorPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastProvider>
        <PincodeProvider>
          <WishlistProvider>
            <CartProvider>
              <AuthProvider>
                <RecentlyViewedProvider>
                  <ScrollToTop />
                  <div className="flex flex-col min-h-screen">
                    <MainHeader />
                    <main className="flex-1">
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/collection/:category" element={<CollectionPage />} />
                        <Route path="/product/:slug" element={<ProductDetailPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/wishlist" element={<WishlistPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage />} />
                        <Route path="/account" element={<AccountPage />} />
                        <Route path="/stores" element={<StoreLocatorPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                      </Routes>
                    </main>
                    <Footer />
                    <CartDrawer />
                  </div>
                </RecentlyViewedProvider>
              </AuthProvider>
            </CartProvider>
          </WishlistProvider>
        </PincodeProvider>
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;

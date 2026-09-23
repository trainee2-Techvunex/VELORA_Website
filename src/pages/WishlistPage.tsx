import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/Product/ProductCard';
import { Breadcrumbs } from '../components/Common/Breadcrumbs';
import { ProductCarousel } from '../components/Home/ProductCarousel';
import { PRODUCTS } from '../data/products';
import { Heart, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlist, clearWishlist, wishlistCount } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveAllToCart = () => {
    wishlist.forEach((product) => {
      addToCart(product);
    });
    clearWishlist();
  };

  const trendingProducts = PRODUCTS.filter((p) => p.featured).slice(0, 6);

  if (wishlist.length === 0) {
    return (
      <div className="bg-[#FAF9F8] min-h-[70vh] py-16 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4 space-y-4">
          <div className="w-20 h-20 rounded-full bg-[#FFF0F3] border border-[#FDE2E8] flex items-center justify-center text-[#9F1239] mx-auto shadow-sm">
            <Heart className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900">Your wishlist is empty</h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Save items you love by tapping the heart icon on any product. Revisit them anytime to purchase or gift.
          </p>
          <div className="pt-2">
            <Link
              to="/collection/all"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#9F1239] hover:bg-[#801836] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95"
            >
              <span>Explore Bestsellers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F8] min-h-screen py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-8">
        <Breadcrumbs
          items={[{ label: 'Home', link: '/' }, { label: 'My Wishlist' }]}
          className="mb-6"
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#F0E9E6]">
          <div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">
              My Wishlist ({wishlistCount} {wishlistCount === 1 ? 'item' : 'items'})
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Your saved favourites and luxury wishlist.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleMoveAllToCart}
              className="px-5 py-2.5 bg-[#9F1239] hover:bg-[#801836] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs transition-colors flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Move All to Bag</span>
            </button>

            <button
              onClick={clearWishlist}
              className="p-2.5 text-slate-400 hover:text-rose-600 border border-[#F0E9E6] rounded-xl hover:bg-white transition-colors"
              title="Clear Wishlist"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Wishlist Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Recommended Carousel */}
        <div className="mt-16">
          <ProductCarousel
            tag="MORE RECOMMENDATIONS"
            title="Trending in Fine Fragrances & Skincare"
            products={trendingProducts}
          />
        </div>
      </div>
    </div>
  );
};

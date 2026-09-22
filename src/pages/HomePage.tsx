import React from 'react';
import { HeroSlider } from '../components/Home/HeroSlider';
import { CategoryCarousel } from '../components/Home/CategoryCarousel';
import { ProductCarousel } from '../components/Home/ProductCarousel';
import { PromoBanners } from '../components/Home/PromoBanners';
import { GiftingSection } from '../components/Home/GiftingSection';
import { ShopByConcern } from '../components/Home/ShopByConcern';
import { ShopByFragrance } from '../components/Home/ShopByFragrance';
import { ShopByBond } from '../components/Home/ShopByBond';
import { ShopByPrice } from '../components/Home/ShopByPrice';
import { ReviewsSection } from '../components/Home/ReviewsSection';
import { InstagramFeed } from '../components/Home/InstagramFeed';
import { TrustBenefits } from '../components/Home/TrustBenefits';
import { Newsletter } from '../components/Home/Newsletter';
import { PRODUCTS } from '../data/products';

export const HomePage: React.FC = () => {
  const bestsellers = PRODUCTS.filter((p) => p.bestSeller || p.badge === 'BESTSELLER');
  const newLaunches = PRODUCTS.filter((p) => p.newLaunch || p.badge === 'NEW LAUNCH' || p.badge === 'TRENDING');

  return (
    <div className="space-y-0">
      {/* 1. Hero Campaign Slider */}
      <HeroSlider />

      {/* 2. Main Category Row */}
      <CategoryCarousel />

      {/* 3. Bestsellers Product Carousel (4-card layout) */}
      <ProductCarousel
        tag="ICONIC FORMULATIONS"
        title="Bestselling Beauty & Parfums"
        subtitle="Our most loved, globally acclaimed formulations loved by over 200,000+ patrons."
        products={bestsellers}
        tabs={['All', 'Serum', 'Perfume', 'Moisturiser', 'Sunscreen']}
        viewAllLink="/collection/all?badge=BESTSELLER"
      />

      {/* 4. Promotional Split Banners */}
      <PromoBanners />

      {/* 5. Gifting Made Easy */}
      <GiftingSection />

      {/* 6. Shop by Concern */}
      <ShopByConcern />

      {/* 7. Shop by Fragrance Family */}
      <ShopByFragrance />

      {/* 8. Shop by Recipient / Bond */}
      <ShopByBond />

      {/* 9. New Beauty Drops Carousel */}
      <ProductCarousel
        tag="JUST LANDED"
        title="New Launches & Trending"
        subtitle="Explore our latest botanical innovations, seasonal extraits, and glazed lip treatments."
        products={newLaunches}
        tabs={['All', 'Perfume', 'Lip Care', 'Face Mask', 'Hair Care']}
        viewAllLink="/collection/all?badge=NEW LAUNCH"
      />

      {/* 10. Shop by Price Tiers */}
      <ShopByPrice />

      {/* 11. Verified Customer Reviews */}
      <ReviewsSection />

      {/* 12. Instagram Beauty Feed */}
      <InstagramFeed />

      {/* 13. Trust & Authenticity Benefits */}
      <TrustBenefits />

      {/* 14. Newsletter Signup */}
      <Newsletter />
    </div>
  );
};

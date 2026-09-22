import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Gift, MapPin, Phone, ShieldCheck, ChevronRight } from 'lucide-react';

const MESSAGES = [
  '✨ FREE Express Delivery on all orders above ₹499',
  '🌸 Flat 15% OFF on your first purchase | Use code: WELCOME10',
  '🎁 Free Luxury Parfums Discovery Vial with every order',
  '🌿 100% Certified Clean Botanicals & Grasse Formulations',
];

export const TopPromoStrip: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#9F1239] text-white text-[11px] sm:text-xs font-medium tracking-wide py-1.5 px-3 sm:px-6 lg:px-8 border-b border-[#801836]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left perks (desktop) */}
        <div className="hidden lg:flex items-center gap-4 text-[#FED0DC] shrink-0">
          <Link to="/stores" className="hover:text-white flex items-center gap-1 transition-colors">
            <MapPin className="w-3 h-3" />
            <span>Find a Store (6 Cities)</span>
          </Link>
          <span className="text-[#B71943]">•</span>
          <span className="flex items-center gap-1 text-[#FED0DC]">
            <ShieldCheck className="w-3 h-3" />
            <span>100% Authentic & Dermat-Tested</span>
          </span>
        </div>

        {/* Center Animated Message */}
        <div className="flex-1 text-center font-medium overflow-hidden h-5 flex items-center justify-center">
          <p key={index} className="animate-fade-in transition-all duration-300 line-clamp-1">
            {MESSAGES[index]}
          </p>
        </div>

        {/* Right Perks */}
        <div className="hidden sm:flex items-center gap-4 text-[#FED0DC]">
          <Link to="/collection/gifting" className="hover:text-white flex items-center gap-1 transition-colors">
            <Gift className="w-3 h-3" />
            <span>The Gift Store</span>
          </Link>
          <span className="text-[#B71943]">•</span>
          <Link to="/about" className="hover:text-white flex items-center gap-1 transition-colors">
            <span>Our Story</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

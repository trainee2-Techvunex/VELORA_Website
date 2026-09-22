import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1818] text-[#F3E5D8] pt-14 pb-10 border-t border-[#332E2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-[#2C2727]">
          {/* Col 1: Brand & Contact */}
          <div className="space-y-4 lg:col-span-2">
            <div>
              <span className="font-serif text-3xl font-bold tracking-[0.2em] text-[#FED0DC]">
                VÉLORA
              </span>
              <p className="text-[10px] text-slate-400 uppercase tracking-[0.25em] mt-0.5">
                LUXE BOTANICALS & FINE PARFUMS
              </p>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Crafted in collaboration with artisanal master perfumers in Grasse and botanical biochemists in India. Clean, cruelty-free, and high-performance beauty rituals.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FBA6BC]" />
                <span>Customer Care: +91 80 4710 8899 (Mon–Sat, 9AM–7PM)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FBA6BC]" />
                <span>Concierge: care@velorabeauty.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FBA6BC]" />
                <Link to="/stores" className="hover:text-white underline">
                  Experience in 6 Luxury Mall Boutiques
                </Link>
              </div>
            </div>

            {/* Social SVGs */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#2C2727] hover:bg-[#9F1239] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#2C2727] hover:bg-[#9F1239] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.889C10.611 0 9 1.556 9 4.667V8z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#2C2727] hover:bg-[#9F1239] text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Shop Online */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider pb-1 border-b border-[#332E2E]">
              Shop Online
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/collection/fragrances" className="hover:text-white transition-colors">
                  Fine Fragrances & Parfums
                </Link>
              </li>
              <li>
                <Link to="/collection/skincare?sub=Serum" className="hover:text-white transition-colors">
                  24K Gold & Vitamin C Serums
                </Link>
              </li>
              <li>
                <Link to="/collection/skincare?sub=Sunscreen" className="hover:text-white transition-colors">
                  Dewy Invisible Sunscreens
                </Link>
              </li>
              <li>
                <Link to="/collection/skincare?sub=Moisturiser" className="hover:text-white transition-colors">
                  Rose Cloud Moisturisers
                </Link>
              </li>
              <li>
                <Link to="/collection/skincare?sub=Lip Care" className="hover:text-white transition-colors">
                  Glazed Peptide Lip Care
                </Link>
              </li>
              <li>
                <Link to="/collection/bodycare" className="hover:text-white transition-colors">
                  Whipped Body Soufflés
                </Link>
              </li>
              <li>
                <Link to="/collection/gifting" className="hover:text-white transition-colors">
                  The Luxury Gift Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider pb-1 border-b border-[#332E2E]">
              Customer Service
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/account?tab=orders" className="hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/stores" className="hover:text-white transition-colors">
                  Find Nearest Boutique
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Shipping & Express Delivery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  15-Day Easy Replacements
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Authenticity & Certifications
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-white transition-colors">
                  My Account & Loyalty Points
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: About VÉLORA */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider pb-1 border-b border-[#332E2E]">
              About VÉLORA
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Our Founding Story
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Clean Formulation Philosophy
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Sustainability & Recycled Glass
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Corporate & Wedding Gifting
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Careers & Partnerships
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip: Payment Badges & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="text-[11px] font-semibold text-slate-400">100% SECURE CHECKOUT:</span>
            <span className="bg-[#2C2727] text-slate-300 px-2 py-0.5 rounded-sm text-[10px] font-mono">UPI</span>
            <span className="bg-[#2C2727] text-slate-300 px-2 py-0.5 rounded-sm text-[10px] font-mono">VISA</span>
            <span className="bg-[#2C2727] text-slate-300 px-2 py-0.5 rounded-sm text-[10px] font-mono">MASTERCARD</span>
            <span className="bg-[#2C2727] text-slate-300 px-2 py-0.5 rounded-sm text-[10px] font-mono">RUPAY</span>
            <span className="bg-[#2C2727] text-slate-300 px-2 py-0.5 rounded-sm text-[10px] font-mono">NETBANKING</span>
            <span className="bg-[#2C2727] text-slate-300 px-2 py-0.5 rounded-sm text-[10px] font-mono">COD</span>
          </div>

          <p className="text-[11px] text-center sm:text-right">
            © {new Date().getFullYear()} VÉLORA BEAUTY PVT. LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

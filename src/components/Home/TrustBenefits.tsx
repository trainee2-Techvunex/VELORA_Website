import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Sparkles, HeartHandshake, Award } from 'lucide-react';

const BENEFITS = [
  {
    icon: Truck,
    title: 'Free Express Shipping',
    description: 'On all orders above ₹499 across India',
  },
  {
    icon: RotateCcw,
    title: '15-Day Easy Replacements',
    description: 'No questions asked doorstep support',
  },
  {
    icon: Sparkles,
    title: '100% Clean & Vegan',
    description: 'Cruelty-free & IFRA safe fragrance standards',
  },
  {
    icon: Award,
    title: 'Dermatologically Tested',
    description: 'Safe for sensitive & reactive skin types',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & COD Available',
    description: 'UPI, Cards, Netbanking & Cash on Delivery',
  },
];

export const TrustBenefits: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 bg-white border-t border-[#F0E9E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
          {BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            const isLastOnMobile = idx === BENEFITS.length - 1;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl bg-[#FFF5F7] border border-[#FDE2E8] ${
                  isLastOnMobile ? 'col-span-2 sm:col-span-1 max-w-xs mx-auto w-full' : ''
                }`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#9F1239] flex items-center justify-center mb-2.5 sm:mb-3 shadow-2xs shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 leading-snug">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

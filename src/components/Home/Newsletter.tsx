import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setSubscribed(true);
    showToast('You are subscribed! Check your inbox for your 15% OFF coupon.', 'success', 'Welcome to VÉLORA Club');
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-[#FFF0F4] via-[#FFE4EC] to-[#FCE7F0] border-y border-[#FDE2E8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#9F1239] text-[11px] font-bold uppercase tracking-widest border border-[#FDE2E8] shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
          <span>The VÉLORA Club</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          Join Our Inner Circle & Save 15%
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
          Be the first to experience rare seasonal parfum drops, private archival sales, skincare masterclasses, and receive a special birthday gift hamper.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 p-4 bg-white rounded-2xl border border-[#FDE2E8] text-emerald-800 font-semibold text-xs shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Thank you for joining! Use code <strong>WELCOME10</strong> at checkout for 10% off.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 pt-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-3 bg-white rounded-xl sm:rounded-full border border-[#F0E9E6] text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#E11D48] shadow-2xs"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#9F1239] hover:bg-[#801836] text-white text-xs font-bold uppercase tracking-wider rounded-xl sm:rounded-full shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

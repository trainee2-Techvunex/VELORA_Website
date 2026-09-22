import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#FAF9F8] min-h-[70vh] py-16 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4 space-y-4">
        <span className="font-serif text-7xl font-bold text-[#9F1239]">404</span>
        <h2 className="font-serif text-3xl font-bold text-slate-900">Page Not Found</h2>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          The page you are looking for might have been moved or is currently unavailable. Let's return to discovering our luxury collection.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#9F1239] hover:bg-[#801836] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

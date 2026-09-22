import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs text-slate-500 ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5">
        <li className="flex items-center">
          <Link to="/" className="hover:text-[#E11D48] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5 text-slate-400" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
              {item.link && !isLast ? (
                <Link to={item.link} className="hover:text-[#E11D48] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-slate-800 line-clamp-1 max-w-[200px] sm:max-w-xs">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

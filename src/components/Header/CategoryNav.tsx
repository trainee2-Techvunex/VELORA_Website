import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MAIN_NAV_ITEMS, NavItem } from '../../data/categories';
import { MegaMenu } from './MegaMenu';
import { ChevronDown, Sparkles } from 'lucide-react';

export const CategoryNav: React.FC = () => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const activeItem = MAIN_NAV_ITEMS.find((item) => item.id === activeMenuId);

  return (
    <nav
      className="relative hidden lg:block bg-white border-b border-[#F0E9E6] select-none"
      onMouseLeave={() => setActiveMenuId(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <ul className="flex items-center justify-between gap-1 py-0">
          {MAIN_NAV_ITEMS.map((item) => {
            const hasMega = Boolean(item.hasMegaMenu && item.megaMenu);
            const isHovered = activeMenuId === item.id;

            return (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => hasMega && setActiveMenuId(item.id)}
              >
                <Link
                  to={item.link}
                  className={`flex items-center gap-1 py-3 px-2.5 text-[11px] font-bold tracking-wider uppercase transition-colors relative ${
                    isHovered
                      ? 'text-[#9F1239]'
                      : 'text-slate-700 hover:text-[#9F1239]'
                  }`}
                >
                  <span>{item.label}</span>
                  {hasMega && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        isHovered ? 'rotate-180 text-[#9F1239]' : 'text-slate-400'
                      }`}
                    />
                  )}

                  {item.badge && (
                    <span className="ml-1 bg-[#FFF0F3] text-[#9F1239] text-[9px] font-extrabold px-1.5 py-0.2 rounded-xs border border-[#FDE2E8]">
                      {item.badge}
                    </span>
                  )}

                  {/* Active Indicator Bar */}
                  {isHovered && (
                    <span className="absolute bottom-0 inset-x-2.5 h-0.5 bg-[#9F1239]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Render Active Mega Menu */}
      {activeItem && activeItem.megaMenu && (
        <MegaMenu
          data={activeItem.megaMenu}
          onClose={() => setActiveMenuId(null)}
        />
      )}
    </nav>
  );
};

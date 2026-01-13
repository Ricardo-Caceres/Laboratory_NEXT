/**
 * Mobile Navigation Component
 * Handles mobile menu with collapsible categories
 */

'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import type { NavigationCategory, NavigationItem } from '@/lib/types/navigation';

interface MobileNavProps {
  navigation: NavigationCategory;
  openDropdown: string | null;
  toggleDropdown: (category: string) => void;
  isActive: (href: string) => boolean;
  onLinkClick: () => void;
}

export const MobileNav = ({
  navigation,
  openDropdown,
  toggleDropdown,
  isActive,
  onLinkClick
}: MobileNavProps) => {
  return (
    <div className="lg:hidden border-t border-slate-700">
      <div className="space-y-1 px-2 pb-3 pt-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
        {Object.entries(navigation).map(([category, items]) => (
          <div key={category} className="space-y-1">
            <button
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-white hover:bg-slate-800"
              onClick={() => toggleDropdown(category)}
              aria-expanded={openDropdown === category}
            >
              <span>{category}</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openDropdown === category ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {openDropdown === category && (
              <div className="space-y-1 pl-4">
                {items.map((item: NavigationItem) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-cyan-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                    onClick={onLinkClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

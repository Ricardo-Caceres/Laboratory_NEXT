/**
 * Desktop Navigation Component
 * Handles desktop dropdown navigation
 */

'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import type { NavigationCategory, NavigationItem } from '@/lib/types/navigation';

interface DesktopNavProps {
  navigation: NavigationCategory;
  openDropdown: string | null;
  setOpenDropdown: (category: string | null) => void;
  isActive: (href: string) => boolean;
}

export const DesktopNav = ({ 
  navigation, 
  openDropdown, 
  setOpenDropdown,
  isActive 
}: DesktopNavProps) => {
  return (
    <div className="hidden lg:flex lg:items-center lg:space-x-1">
      {Object.entries(navigation).map(([category, items]) => (
        <div key={category} className="relative group">
          <button
            className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-[var(--foreground)] opacity-80 hover:opacity-100 hover:bg-[var(--border)] rounded-md transition-all"
            onMouseEnter={() => setOpenDropdown(category)}
            aria-haspopup="true"
            aria-expanded={openDropdown === category}
          >
            <span>{category}</span>
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </button>
          
          {openDropdown === category && (
            <div
              className="absolute left-0 mt-0 w-64 rounded-md shadow-lg bg-[var(--panel)] border border-[var(--border)] max-h-96 overflow-y-auto"
              onMouseLeave={() => setOpenDropdown(null)}
              role="menu"
            >
              <div className="py-1">
                {items.map((item: NavigationItem) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isActive(item.href)
                        ? 'bg-[var(--primary)] text-white'
                        : 'text-[var(--foreground)] opacity-80 hover:opacity-100 hover:bg-[var(--border)]'
                    }`}
                    onClick={() => setOpenDropdown(null)}
                    role="menuitem"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

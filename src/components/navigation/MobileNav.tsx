/**
 * Mobile Navigation Component
 * Modern mobile menu with search and collapsible categories
 */

'use client';

import Link from 'next/link';
import { ChevronDown, Search, X } from 'lucide-react';
import type { NavigationCategory, NavigationItem } from '@/lib/types/navigation';

interface MobileNavProps {
  navigation: NavigationCategory;
  openDropdown: string | null;
  toggleDropdown: (category: string) => void;
  isActive: (href: string) => boolean;
  onLinkClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const MobileNav = ({
  navigation,
  openDropdown,
  toggleDropdown,
  isActive,
  onLinkClick,
  searchQuery,
  onSearchChange
}: MobileNavProps) => {
  return (
    <div className="lg:hidden border-t border-[var(--border)] bg-[var(--panel)]">
      {/* Mobile Search */}
      <div className="px-4 pt-4 pb-2">
        <div className="relative">
          <Search 
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--foreground)] opacity-50" 
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Buscar módulos..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 text-sm bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent placeholder:text-[var(--foreground)] placeholder:opacity-50"
            aria-label="Search modules"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--foreground)] opacity-50 hover:opacity-100"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-1 px-2 pb-4 pt-2 max-h-[calc(100vh-10rem)] overflow-y-auto">
        {Object.keys(navigation).length === 0 && searchQuery && (
          <div className="text-center py-8 text-sm text-[var(--foreground)] opacity-60">
            No se encontraron resultados para "{searchQuery}"
          </div>
        )}
        
        {Object.entries(navigation).map(([category, items]) => (
          <div key={category} className="space-y-1">
            <button
              className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--border)] transition-colors"
              onClick={() => toggleDropdown(category)}
              aria-expanded={openDropdown === category}
            >
              <span>{category}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-[var(--border)] px-2 py-0.5 rounded-full opacity-60">
                  {items.length}
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDropdown === category ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </div>
            </button>
            
            {openDropdown === category && (
              <div className="space-y-0.5 pl-3 pr-2 py-1 animate-in slide-in-from-top-2 duration-200">
                {items.map((item: NavigationItem) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-[var(--primary)] text-white'
                        : 'text-[var(--foreground)] opacity-80 hover:opacity-100 hover:bg-[var(--border)]'
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

/**
 * Desktop Navigation Component
 * Modern horizontal scrollable navigation with mega menu
 */

'use client';

import Link from 'next/link';
import { ChevronDown, Grid3x3 } from 'lucide-react';
import type { NavigationCategory, NavigationItem } from '@/lib/types/navigation';
import { useEffect, useRef, useState } from 'react';

interface DesktopNavProps {
  navigation: NavigationCategory;
  categoryGroups: Record<string, string[]>;
  openDropdown: string | null;
  setOpenDropdown: (category: string | null) => void;
  isActive: (href: string) => boolean;
  hasSearchQuery: boolean;
}

export const DesktopNav = ({ 
  navigation, 
  categoryGroups,
  openDropdown, 
  setOpenDropdown,
  isActive,
  hasSearchQuery
}: DesktopNavProps) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Get top categories (most important ones)
  const topCategories = [
    'React Hooks',
    'Patterns', 
    'Architectures',
    'JavaScript',
    'TypeScript',
    'State Management',
  ];
  
  const displayCategories = showAllCategories 
    ? Object.keys(navigation)
    : Object.keys(navigation).filter(cat => topCategories.includes(cat));

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdown, setOpenDropdown]);

  return (
    <div className="hidden lg:flex lg:items-center lg:gap-2 lg:flex-1 lg:justify-end">
      {/* Scrollable categories */}
      <div 
        ref={scrollRef}
        className="flex items-center gap-1 overflow-x-auto scrollbar-hide max-w-2xl"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {displayCategories.map((category) => {
          const items = navigation[category];
          if (!items || items.length === 0) return null;
          
          return (
            <div key={category} className="relative flex-shrink-0">
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[var(--foreground)] opacity-80 hover:opacity-100 hover:bg-[var(--border)] rounded-lg transition-all whitespace-nowrap"
                onMouseEnter={() => setOpenDropdown(category)}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown(openDropdown === category ? null : category);
                }}
                aria-haspopup="true"
                aria-expanded={openDropdown === category}
              >
                <span>{category}</span>
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              
              {openDropdown === category && (
                <div
                  className="absolute left-0 mt-1 w-72 rounded-lg shadow-xl bg-[var(--panel)] border border-[var(--border)] max-h-[32rem] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseLeave={() => setOpenDropdown(null)}
                  onClick={(e) => e.stopPropagation()}
                  role="menu"
                >
                  <div className="p-2">
                    <div className="px-3 py-2 text-xs font-semibold text-[var(--foreground)] opacity-60 uppercase tracking-wider">
                      {category}
                    </div>
                    <div className="space-y-0.5">
                      {items.map((item: NavigationItem) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                            isActive(item.href)
                              ? 'bg-[var(--primary)] text-white font-medium'
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
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* All Categories Button */}
      {!hasSearchQuery && Object.keys(navigation).length > topCategories.length && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowAllCategories(!showAllCategories);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[var(--foreground)] opacity-80 hover:opacity-100 hover:bg-[var(--border)] rounded-lg transition-all whitespace-nowrap border border-[var(--border)] flex-shrink-0"
          aria-label={showAllCategories ? 'Show less categories' : 'Show all categories'}
        >
          <Grid3x3 className="h-3.5 w-3.5" />
          <span>{showAllCategories ? 'Menos' : 'Todas'}</span>
        </button>
      )}
    </div>
  );
};

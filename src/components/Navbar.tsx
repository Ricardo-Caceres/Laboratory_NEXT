/**
 * Main Navigation Bar Component
 * Modern responsive navigation with search and smart categorization
 * 
 * Features:
 * - Horizontal scrollable categories on desktop
 * - Integrated search functionality
 * - Categorized mega menu
 * - Mobile-first responsive design
 */

'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useState, useMemo } from 'react';
import { NAVIGATION_DATA, CATEGORY_GROUPS } from '@/lib/constants/navigation';
import { useNavigation } from '@/lib/hooks/useNavigation';
import { NavLogo } from './navigation/NavLogo';
import { DesktopNav } from './navigation/DesktopNav';
import { MobileNav } from './navigation/MobileNav';
import { MobileMenuButton } from './navigation/MobileMenuButton';
import { SearchBar } from './navigation/SearchBar';
import { ThemeToggle } from './navigation/ThemeToggle';

/**
 * Navbar Container Component
 * Manages navigation state and delegates rendering to child components
 */
export default function Navbar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const {
    mobileMenuOpen,
    openDropdown,
    toggleMobileMenu,
    closeMobileMenu,
    setOpenDropdown,
    toggleDropdown,
  } = useNavigation();

  const isActive = useCallback((href: string): boolean => {
    return pathname === href;
  }, [pathname]);

  // Filter navigation items based on search
  const filteredNavigation = useMemo(() => {
    if (!searchQuery.trim()) return NAVIGATION_DATA;
    
    const query = searchQuery.toLowerCase();
    const filtered: typeof NAVIGATION_DATA = {};
    
    Object.entries(NAVIGATION_DATA).forEach(([category, items]) => {
      const matchingItems = items.filter(item => 
        item.name.toLowerCase().includes(query) ||
        category.toLowerCase().includes(query)
      );
      
      if (matchingItems.length > 0) {
        filtered[category] = matchingItems;
      }
    });
    
    return filtered;
  }, [searchQuery]);

  return (
    <nav 
      className="bg-[var(--panel)] border-b border-[var(--border)] sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-opacity-95"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <NavLogo />
          
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
          />
          
          <DesktopNav
            navigation={filteredNavigation}
            categoryGroups={CATEGORY_GROUPS}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            isActive={isActive}
            hasSearchQuery={!!searchQuery}
          />

          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            <MobileMenuButton
              isOpen={mobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <MobileNav
          navigation={filteredNavigation}
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
          isActive={isActive}
          onLinkClick={closeMobileMenu}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      )}
    </nav>
  );
}

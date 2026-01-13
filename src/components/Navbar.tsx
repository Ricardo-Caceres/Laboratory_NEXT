/**
 * Main Navigation Bar Component
 * Container component that manages navigation state and renders desktop/mobile views
 * 
 * Refactored to follow SOLID principles:
 * - Single Responsibility: Only manages state and composition
 * - Dependency Inversion: Depends on abstractions (types, hooks)
 * - Open/Closed: Extensible via child components
 */

'use client';

import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { NAVIGATION_DATA } from '@/lib/constants/navigation';
import { useNavigation } from '@/lib/hooks/useNavigation';
import { NavLogo } from './navigation/NavLogo';
import { DesktopNav } from './navigation/DesktopNav';
import { MobileNav } from './navigation/MobileNav';
import { MobileMenuButton } from './navigation/MobileMenuButton';

/**
 * Navbar Container Component
 * Manages navigation state and delegates rendering to child components
 */
export default function Navbar() {
  const pathname = usePathname();
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

  return (
    <nav 
      className="bg-[var(--panel)] border-b border-[var(--border)] sticky top-0 z-50 shadow-md"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <NavLogo />
          
          <DesktopNav
            navigation={NAVIGATION_DATA}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            isActive={isActive}
          />

          <MobileMenuButton
            isOpen={mobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      {mobileMenuOpen && (
        <MobileNav
          navigation={NAVIGATION_DATA}
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
          isActive={isActive}
          onLinkClick={closeMobileMenu}
        />
      )}
    </nav>
  );
}

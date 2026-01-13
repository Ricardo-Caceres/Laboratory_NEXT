/**
 * Custom hook for navigation state management
 * Handles dropdown and mobile menu state
 * 
 * @returns Navigation state and control functions
 */

import { useState, useCallback } from 'react';

interface UseNavigationReturn {
  mobileMenuOpen: boolean;
  openDropdown: string | null;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  setOpenDropdown: (category: string | null) => void;
  toggleDropdown: (category: string) => void;
}

export const useNavigation = (): UseNavigationReturn => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleDropdown = useCallback((category: string) => {
    setOpenDropdown(prev => prev === category ? null : category);
  }, []);

  return {
    mobileMenuOpen,
    openDropdown,
    toggleMobileMenu,
    closeMobileMenu,
    setOpenDropdown,
    toggleDropdown,
  };
};

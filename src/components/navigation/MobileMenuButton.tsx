/**
 * Mobile Menu Toggle Button Component
 * Toggles the mobile navigation menu
 */

'use client';

import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2 text-[var(--foreground)] opacity-70 hover:opacity-100 hover:bg-[var(--border)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--primary)]"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <X className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </div>
  );
};

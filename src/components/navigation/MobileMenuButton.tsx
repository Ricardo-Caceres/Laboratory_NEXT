/**
 * Mobile Menu Toggle Button Component
 * Modern hamburger menu with smooth animation
 */

'use client';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="relative inline-flex items-center justify-center rounded-lg p-2 text-[var(--foreground)] opacity-70 hover:opacity-100 hover:bg-[var(--border)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--primary)] transition-colors"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
          <span 
            className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </button>
    </div>
  );
};

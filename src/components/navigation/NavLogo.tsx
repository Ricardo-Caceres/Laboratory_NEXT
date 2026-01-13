/**
 * Navigation Logo Component
 * Displays the site logo/brand
 */

'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';

export const NavLogo = () => {
  return (
    <div className="flex items-center">
      <Link 
        href="/" 
        className="flex items-center space-x-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
        aria-label="Go to home page"
      >
        <Home className="h-6 w-6" aria-hidden="true" />
        <span className="text-xl font-bold hidden sm:inline">DevKit Laboratory</span>
        <span className="text-xl font-bold sm:hidden">DevKit</span>
      </Link>
    </div>
  );
};

/**
 * Navigation Logo Component
 * Responsive logo with modern gradient design
 */

'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export const NavLogo = () => {
  return (
    <Link 
      href="/" 
      className="flex items-center gap-2 text-[var(--foreground)] hover:opacity-80 transition-opacity group flex-shrink-0"
      aria-label="Go to home page"
    >
      <div className="relative">
        <Sparkles className="h-7 w-7 text-[var(--primary)] group-hover:scale-110 transition-transform" aria-hidden="true" />
        <div className="absolute inset-0 bg-[var(--primary)] opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-none hidden sm:block">DevKit Lab</span>
        <span className="text-lg font-bold leading-none sm:hidden">DK</span>
        <span className="text-xs text-[var(--foreground)] opacity-50 hidden md:block">Learning Platform</span>
      </div>
    </Link>
  );
};

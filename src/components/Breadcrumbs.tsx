/**
 * Breadcrumbs Navigation Component
 * Displays hierarchical navigation path based on current URL
 * 
 * Refactored to follow SOLID principles:
 * - Single Responsibility: Only renders breadcrumbs
 * - Dependency Inversion: Depends on constants and utilities
 * - Open/Closed: Extensible via segment map
 * 
 * @example
 * URL: /hooks/useState
 * Breadcrumbs: Home > React Hooks > useState
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { SEGMENT_NAMES } from '@/lib/constants/breadcrumbs';
import { formatSegment } from '@/lib/utils/formatSegment';
import type { Breadcrumb } from '@/lib/types/breadcrumb';

/**
 * Generate breadcrumb items from pathname
 */
const useBreadcrumbs = (pathname: string): Breadcrumb[] => {
  return useMemo(() => {
    const segments = pathname.split('/').filter(Boolean);
    
    return segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      const label = formatSegment(segment, SEGMENT_NAMES);
      
      return { href, label, segment };
    });
  }, [pathname]);
};

/**
 * Breadcrumbs Component
 * Shows navigation path with links to parent pages
 */
export default function Breadcrumbs() {
  const pathname = usePathname();
  const breadcrumbs = useBreadcrumbs(pathname);
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null;
  }

  return (
    <nav 
      className="bg-[var(--panel)] border-b border-[var(--border)] px-4 sm:px-6 lg:px-8 py-3" 
      aria-label="Breadcrumb"
    >
      <div className="mx-auto max-w-7xl">
        <ol className="flex items-center gap-2 text-sm overflow-x-auto scrollbar-hide">
          <li className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="text-[var(--foreground)] opacity-70 hover:opacity-100 transition-opacity flex items-center gap-1.5 group px-2 py-1 rounded hover:bg-[var(--border)]"
              aria-label="Go to home"
            >
              <Home 
                className="h-4 w-4 group-hover:scale-110 transition-transform" 
                aria-hidden="true"
              />
              <span className="hidden sm:inline font-medium">Home</span>
            </Link>
          </li>
          
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li key={breadcrumb.href} className="flex items-center flex-shrink-0">
                <ChevronRight className="h-3.5 w-3.5 opacity-40" aria-hidden="true" />
                {isLast ? (
                  <span 
                    className="text-[var(--primary)] font-semibold px-2 py-1"
                    aria-current="page"
                  >
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.href}
                    className="text-[var(--foreground)] opacity-70 hover:opacity-100 transition-opacity px-2 py-1 rounded hover:bg-[var(--border)] font-medium"
                  >
                    {breadcrumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

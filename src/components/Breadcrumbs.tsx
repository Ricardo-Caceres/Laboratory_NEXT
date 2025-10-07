'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === '/') {
    return null;
  }

  const segments = pathname.split('/').filter(Boolean);
  
  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return { href, label };
  });

  return (
    <nav className="bg-slate-800 border-b border-slate-700 px-4 sm:px-6 lg:px-8 py-3">
      <div className="mx-auto max-w-7xl">
        <ol className="flex items-center space-x-2 text-sm overflow-x-auto">
          <li className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="text-slate-400 hover:text-white transition-colors flex items-center"
            >
              <Home className="h-4 w-4" />
              <span className="ml-1 hidden sm:inline">Home</span>
            </Link>
          </li>
          
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li key={breadcrumb.href} className="flex items-center flex-shrink-0">
                <ChevronRight className="h-4 w-4 text-slate-600 mx-1 flex-shrink-0" />
                {isLast ? (
                  <span className="text-cyan-400 font-medium truncate max-w-[200px] sm:max-w-none">
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.href}
                    className="text-slate-400 hover:text-white transition-colors truncate max-w-[150px] sm:max-w-none"
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

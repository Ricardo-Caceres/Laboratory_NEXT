'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

// Map of path segments to friendly names
const segmentNames: Record<string, string> = {
  'hooks': 'React Hooks',
  'patterns': 'Design Patterns',
  'architectures': 'Architectures',
  'state-management': 'State Management',
  'react-apis': 'React APIs',
  'nextjs-apis': 'Next.js APIs',
  'guides': 'Guides',
  // Hooks
  'useState': 'useState',
  'useEffect': 'useEffect',
  'useContext': 'useContext',
  'useReducer': 'useReducer',
  'useCallback': 'useCallback',
  'useMemo': 'useMemo',
  'useRef': 'useRef',
  'useLayoutEffect': 'useLayoutEffect',
  'useImperativeHandle': 'useImperativeHandle',
  'useDebugValue': 'useDebugValue',
  'useDeferredValue': 'useDeferredValue',
  'useTransition': 'useTransition',
  'useId': 'useId',
  'useSyncExternalStore': 'useSyncExternalStore',
  'useInsertionEffect': 'useInsertionEffect',
  'use': 'use',
  // Patterns
  'compound-components': 'Compound Components',
  'higher-order-component': 'Higher-Order Component',
  'render-props': 'Render Props',
  'container-presentational': 'Container/Presentational',
  'provider-pattern': 'Provider Pattern',
  'custom-hooks': 'Custom Hooks',
  'controlled-uncontrolled': 'Controlled vs Uncontrolled',
  'state-reducer': 'State Reducer',
  'props-getter': 'Props Getter',
  'conditional-rendering': 'Conditional Rendering',
  'layout-pattern': 'Layout Pattern',
  'observer-pattern': 'Observer Pattern',
  'module-pattern': 'Module Pattern',
  'singleton-pattern': 'Singleton Pattern',
  'proxy-pattern': 'Proxy Pattern',
  'factory-pattern': 'Factory Pattern',
  'adapter-pattern': 'Adapter Pattern',
  'decorator-pattern': 'Decorator Pattern',
  'strategy-pattern': 'Strategy Pattern',
  'command-pattern': 'Command Pattern',
  'facade-pattern': 'Facade Pattern',
  // Architectures
  'atomic-design': 'Atomic Design',
  'feature-sliced-design': 'Feature-Sliced Design',
  'clean-architecture': 'Clean Architecture',
  'hexagonal-architecture': 'Hexagonal Architecture',
  'layered-architecture': 'Layered Architecture',
  'microservices-architecture': 'Microservices Architecture',
  'mvc-architecture': 'MVC Architecture',
  // State Management
  'redux-toolkit': 'Redux Toolkit',
  'zustand': 'Zustand',
  // React APIs
  'createElement': 'React.createElement',
  'Children': 'React.Children',
  'Fragment': 'React.Fragment',
  'memo': 'React.memo',
  'lazy-suspense': 'React.lazy & Suspense',
  'StrictMode': 'React.StrictMode',
  'createRef': 'React.createRef',
  'forwardRef': 'React.forwardRef',
  'cloneElement': 'React.cloneElement',
  'isValidElement': 'React.isValidElement',
  'Component': 'React.Component',
  'PureComponent': 'React.PureComponent',
  'Profiler': 'React.Profiler',
  'startTransition': 'React.startTransition',
  'createPortal': 'React.createPortal',
  'createContext': 'React.createContext',
  // Next.js APIs
  'link': 'next/link',
  'router': 'next/router',
  'image': 'next/image',
  'script': 'next/script',
  'head': 'next/head',
  'dynamic': 'next/dynamic',
  'navigation': 'next/navigation',
  'headers': 'next/headers',
  'server': 'next/server',
  'font': 'next/font',
  'config': 'next/config',
  // Common paths
  'about': 'About',
  'contact': 'Contact',
  'dashboard': 'Dashboard',
  'settings': 'Settings',
  'products': 'Products',
};

function formatSegment(segment: string): string {
  // Check if we have a custom name for this segment
  if (segmentNames[segment]) {
    return segmentNames[segment];
  }
  
  // Handle dynamic routes [id], [slug], etc.
  if (segment.startsWith('[') && segment.endsWith(']')) {
    const param = segment.slice(1, -1);
    return `${param.charAt(0).toUpperCase()}${param.slice(1)}`;
  }
  
  // Handle numeric IDs
  if (/^\d+$/.test(segment)) {
    return `ID: ${segment}`;
  }
  
  // Default formatting: split by dash and capitalize
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null;
  }

  const segments = pathname.split('/').filter(Boolean);
  
  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = formatSegment(segment);
    
    return { href, label, segment };
  });

  return (
    <nav className="bg-slate-800 border-b border-slate-700 px-4 sm:px-6 lg:px-8 py-3" aria-label="Breadcrumb">
      <div className="mx-auto max-w-7xl">
        <ol className="flex items-center gap-2 text-sm overflow-x-auto scrollbar-hide">
          <li className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group px-2 py-1 rounded hover:bg-slate-700"
              aria-label="Go to home"
            >
              <Home className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-medium">Home</span>
            </Link>
          </li>
          
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li key={breadcrumb.href} className="flex items-center flex-shrink-0">
                <ChevronRight className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
                {isLast ? (
                  <span 
                    className="text-cyan-400 font-semibold px-2 py-1"
                    aria-current="page"
                  >
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.href}
                    className="text-slate-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-slate-700 font-medium"
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

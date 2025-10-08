'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Home, ChevronDown } from 'lucide-react';

const navigation = {
  'React Hooks': [
    { name: 'useState', href: '/hooks/useState' },
    { name: 'useEffect', href: '/hooks/useEffect' },
    { name: 'useContext', href: '/hooks/useContext' },
    { name: 'useReducer', href: '/hooks/useReducer' },
    { name: 'useCallback', href: '/hooks/useCallback' },
    { name: 'useMemo', href: '/hooks/useMemo' },
    { name: 'useRef', href: '/hooks/useRef' },
    { name: 'useLayoutEffect', href: '/hooks/useLayoutEffect' },
    { name: 'useImperativeHandle', href: '/hooks/useImperativeHandle' },
    { name: 'useDebugValue', href: '/hooks/useDebugValue' },
    { name: 'useDeferredValue', href: '/hooks/useDeferredValue' },
    { name: 'useTransition', href: '/hooks/useTransition' },
    { name: 'useId', href: '/hooks/useId' },
    { name: 'useSyncExternalStore', href: '/hooks/useSyncExternalStore' },
    { name: 'useInsertionEffect', href: '/hooks/useInsertionEffect' },
    { name: 'use', href: '/hooks/use' },
  ],
  'Patterns': [
    { name: 'Compound Components', href: '/patterns/compound-components' },
    { name: 'Higher-Order Component', href: '/patterns/higher-order-component' },
    { name: 'Render Props', href: '/patterns/render-props' },
    { name: 'Container/Presentational', href: '/patterns/container-presentational' },
    { name: 'Provider Pattern', href: '/patterns/provider-pattern' },
    { name: 'Custom Hooks', href: '/patterns/custom-hooks' },
    { name: 'Controlled vs Uncontrolled', href: '/patterns/controlled-uncontrolled' },
    { name: 'State Reducer', href: '/patterns/state-reducer' },
    { name: 'Props Getter', href: '/patterns/props-getter' },
    { name: 'Conditional Rendering', href: '/patterns/conditional-rendering' },
    { name: 'Layout Pattern', href: '/patterns/layout-pattern' },
    { name: 'Observer Pattern', href: '/patterns/observer-pattern' },
    { name: 'Module Pattern', href: '/patterns/module-pattern' },
    { name: 'Singleton Pattern', href: '/patterns/singleton-pattern' },
    { name: 'Proxy Pattern', href: '/patterns/proxy-pattern' },
    { name: 'Factory Pattern', href: '/patterns/factory-pattern' },
    { name: 'Adapter Pattern', href: '/patterns/adapter-pattern' },
    { name: 'Decorator Pattern', href: '/patterns/decorator-pattern' },
    { name: 'Strategy Pattern', href: '/patterns/strategy-pattern' },
    { name: 'Command Pattern', href: '/patterns/command-pattern' },
    { name: 'Facade Pattern', href: '/patterns/facade-pattern' },
  ],
  'Architectures': [
    { name: 'Atomic Design', href: '/architectures/atomic-design' },
    { name: 'Feature-Sliced Design', href: '/architectures/feature-sliced-design' },
    { name: 'Micro Frontends', href: '/architectures/micro-frontends' },
    { name: 'Clean Architecture', href: '/architectures/clean-architecture' },
    { name: 'Hexagonal Architecture', href: '/architectures/hexagonal-architecture' },
    { name: 'Layered Architecture', href: '/architectures/layered-architecture' },
    { name: 'Microservices Architecture', href: '/architectures/microservices-architecture' },
    { name: 'MVC Architecture', href: '/architectures/mvc-architecture' },
  ],
  'State Management': [
    { name: 'Redux Toolkit', href: '/state-management/redux-toolkit' },
    { name: 'Zustand', href: '/state-management/zustand' },
  ],
  'React APIs': [
    { name: 'React.createElement', href: '/react-apis/createElement' },
    { name: 'React.Children', href: '/react-apis/Children' },
    { name: 'React.Fragment', href: '/react-apis/Fragment' },
    { name: 'React.memo', href: '/react-apis/memo' },
    { name: 'React.lazy & Suspense', href: '/react-apis/lazy-suspense' },
    { name: 'React.StrictMode', href: '/react-apis/StrictMode' },
    { name: 'React.createRef', href: '/react-apis/createRef' },
    { name: 'React.forwardRef', href: '/react-apis/forwardRef' },
    { name: 'React.cloneElement', href: '/react-apis/cloneElement' },
    { name: 'React.isValidElement', href: '/react-apis/isValidElement' },
    { name: 'React.Component', href: '/react-apis/Component' },
    { name: 'React.PureComponent', href: '/react-apis/PureComponent' },
    { name: 'React.Profiler', href: '/react-apis/Profiler' },
    { name: 'React.startTransition', href: '/react-apis/startTransition' },
    { name: 'React.createPortal', href: '/react-apis/createPortal' },
    { name: 'React.createContext', href: '/react-apis/createContext' },
  ],
  'Next.js APIs': [
    { name: 'next/link', href: '/nextjs-apis/link' },
    { name: 'next/router', href: '/nextjs-apis/router' },
    { name: 'next/image', href: '/nextjs-apis/image' },
    { name: 'next/script', href: '/nextjs-apis/script' },
    { name: 'next/head', href: '/nextjs-apis/head' },
    { name: 'next/dynamic', href: '/nextjs-apis/dynamic' },
    { name: 'next/navigation', href: '/nextjs-apis/navigation' },
    { name: 'next/headers', href: '/nextjs-apis/headers' },
    { name: 'next/server', href: '/nextjs-apis/server' },
    { name: 'next/font', href: '/nextjs-apis/font' },
    { name: 'next/config', href: '/nextjs-apis/config' },
  ],
  'Guides': [
    { name: 'Redux Toolkit', href: '/guides/state-management/redux-toolkit' },
    { name: 'Zustand', href: '/guides/state-management/zustand' },
  ],
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (category: string) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors">
              <Home className="h-6 w-6" />
              <span className="text-xl font-bold hidden sm:inline">DevKit Laboratory</span>
              <span className="text-xl font-bold sm:hidden">DevKit</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {Object.entries(navigation).map(([category, items]) => (
              <div key={category} className="relative group">
                <button
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-all"
                  onMouseEnter={() => setOpenDropdown(category)}
                >
                  <span>{category}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {openDropdown === category && (
                  <div
                    className="absolute left-0 mt-0 w-64 rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5 max-h-96 overflow-y-auto"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="py-1">
                      {items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(item.href)
                              ? 'bg-cyan-600 text-white'
                              : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                          }`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-700">
          <div className="space-y-1 px-2 pb-3 pt-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {Object.entries(navigation).map(([category, items]) => (
              <div key={category} className="space-y-1">
                <button
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-white hover:bg-slate-800"
                  onClick={() => toggleDropdown(category)}
                >
                  <span>{category}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      openDropdown === category ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openDropdown === category && (
                  <div className="space-y-1 pl-4">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? 'bg-cyan-600 text-white'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

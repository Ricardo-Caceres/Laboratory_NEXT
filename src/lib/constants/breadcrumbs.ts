/**
 * Breadcrumb segment name mappings
 * Maps URL segments to user-friendly display names
 * 
 * @module constants/breadcrumbs
 */

import type { SegmentNameMap } from '../types/breadcrumb';

export const SEGMENT_NAMES: SegmentNameMap = {
  // Main sections
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
  'micro-frontends': 'Micro Frontends',
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

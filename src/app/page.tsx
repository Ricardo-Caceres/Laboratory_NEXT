import Link from "next/link";

const sections = {
  'React Hooks': {
    description: 'Comprehensive guides for all React Hooks with live examples',
    items: [
      { name: 'useState', href: '/hooks/useState', desc: 'State management in functional components' },
      { name: 'useEffect', href: '/hooks/useEffect', desc: 'Side effects and lifecycle' },
      { name: 'useContext', href: '/hooks/useContext', desc: 'Consume context values' },
      { name: 'useReducer', href: '/hooks/useReducer', desc: 'Complex state logic' },
      { name: 'useCallback', href: '/hooks/useCallback', desc: 'Memoize functions' },
      { name: 'useMemo', href: '/hooks/useMemo', desc: 'Memoize values' },
      { name: 'useRef', href: '/hooks/useRef', desc: 'Access DOM and persist values' },
      { name: 'useLayoutEffect', href: '/hooks/useLayoutEffect', desc: 'Synchronous effects' },
      { name: 'useImperativeHandle', href: '/hooks/useImperativeHandle', desc: 'Customize ref exposure' },
      { name: 'useDebugValue', href: '/hooks/useDebugValue', desc: 'Debug custom hooks' },
      { name: 'useDeferredValue', href: '/hooks/useDeferredValue', desc: 'Defer non-urgent updates' },
      { name: 'useTransition', href: '/hooks/useTransition', desc: 'Mark updates as transitions' },
      { name: 'useId', href: '/hooks/useId', desc: 'Generate unique IDs' },
      { name: 'useSyncExternalStore', href: '/hooks/useSyncExternalStore', desc: 'Subscribe to external stores' },
      { name: 'useInsertionEffect', href: '/hooks/useInsertionEffect', desc: 'Insert CSS-in-JS' },
      { name: 'use', href: '/hooks/use', desc: 'Unwrap Promises & Context (React 19)' },
    ],
  },
  'Design Patterns': {
    description: 'Common React design patterns and best practices',
    items: [
      { name: 'Compound Components', href: '/patterns/compound-components', desc: 'Flexible component composition' },
      { name: 'Higher-Order Component', href: '/patterns/higher-order-component', desc: 'Component enhancement' },
      { name: 'Render Props', href: '/patterns/render-props', desc: 'Share code via render prop' },
      { name: 'Container/Presentational', href: '/patterns/container-presentational', desc: 'Separate logic from UI' },
      { name: 'Custom Hooks', href: '/patterns/custom-hooks', desc: 'Reusable stateful logic' },
      { name: 'Provider Pattern', href: '/patterns/provider-pattern', desc: 'Share data across components' },
      { name: 'State Reducer', href: '/patterns/state-reducer', desc: 'Inversion of control for state' },
      { name: 'Props Getter', href: '/patterns/props-getter', desc: 'Encapsulate prop logic' },
      { name: 'Controlled/Uncontrolled', href: '/patterns/controlled-uncontrolled', desc: 'Component control patterns' },
      { name: 'Conditional Rendering', href: '/patterns/conditional-rendering', desc: 'Display logic patterns' },
      { name: 'Layout Pattern', href: '/patterns/layout-pattern', desc: 'Reusable layout components' },
      { name: 'Singleton Pattern', href: '/patterns/singleton-pattern', desc: 'Single instance management' },
      { name: 'Factory Pattern', href: '/patterns/factory-pattern', desc: 'Object creation abstraction' },
      { name: 'Observer Pattern', href: '/patterns/observer-pattern', desc: 'Event notification system' },
      { name: 'Module Pattern', href: '/patterns/module-pattern', desc: 'Encapsulation & organization' },
      { name: 'Proxy Pattern', href: '/patterns/proxy-pattern', desc: 'Control object access' },
      { name: 'Decorator Pattern', href: '/patterns/decorator-pattern', desc: 'Extend functionality' },
      { name: 'Facade Pattern', href: '/patterns/facade-pattern', desc: 'Simplified interface' },
      { name: 'Adapter Pattern', href: '/patterns/adapter-pattern', desc: 'Interface compatibility' },
      { name: 'Command Pattern', href: '/patterns/command-pattern', desc: 'Encapsulate actions' },
      { name: 'Strategy Pattern', href: '/patterns/strategy-pattern', desc: 'Interchangeable algorithms' },
    ],
  },
  'Architectures': {
    description: 'Modern frontend architecture patterns',
    items: [
      { name: 'Atomic Design', href: '/architectures/atomic-design', desc: 'Component hierarchy system' },
      { name: 'Feature-Sliced Design', href: '/architectures/feature-sliced-design', desc: 'Architecture by features' },
      { name: 'Micro Frontends', href: '/architectures/micro-frontends', desc: 'Independently deployable apps' },
      { name: 'Clean Architecture', href: '/architectures/clean-architecture', desc: 'Dependency rule architecture' },
      { name: 'Hexagonal Architecture', href: '/architectures/hexagonal-architecture', desc: 'Ports & adapters pattern' },
      { name: 'Layered Architecture', href: '/architectures/layered-architecture', desc: 'Separation by layers' },
      { name: 'MVC Architecture', href: '/architectures/mvc-architecture', desc: 'Model-View-Controller' },
      { name: 'Microservices Architecture', href: '/architectures/microservices-architecture', desc: 'Distributed services' },
    ],
  },
  'State Management': {
    description: 'State management solutions and examples',
    items: [
      { name: 'Redux Toolkit', href: '/state-management/redux-toolkit', desc: 'Modern Redux with toolkit' },
      { name: 'Zustand', href: '/state-management/zustand', desc: 'Simple and scalable state' },
    ],
  },
  'React APIs': {
    description: 'Core React API references with examples',
    items: [
      { name: 'React.createElement', href: '/react-apis/createElement', desc: 'Create React elements' },
      { name: 'React.Children', href: '/react-apis/Children', desc: 'Manipulate children' },
      { name: 'React.Fragment', href: '/react-apis/Fragment', desc: 'Group elements without DOM' },
      { name: 'React.memo', href: '/react-apis/memo', desc: 'Memoize components' },
      { name: 'React.lazy & Suspense', href: '/react-apis/lazy-suspense', desc: 'Code splitting' },
      { name: 'React.StrictMode', href: '/react-apis/StrictMode', desc: 'Development checks' },
      { name: 'React.createRef', href: '/react-apis/createRef', desc: 'Create refs' },
      { name: 'React.forwardRef', href: '/react-apis/forwardRef', desc: 'Forward refs to children' },
      { name: 'React.cloneElement', href: '/react-apis/cloneElement', desc: 'Clone and modify elements' },
      { name: 'React.isValidElement', href: '/react-apis/isValidElement', desc: 'Validate React elements' },
      { name: 'React.Component', href: '/react-apis/Component', desc: 'Class component base' },
      { name: 'React.PureComponent', href: '/react-apis/PureComponent', desc: 'Optimized class component' },
      { name: 'React.Profiler', href: '/react-apis/Profiler', desc: 'Performance profiling' },
      { name: 'React.startTransition', href: '/react-apis/startTransition', desc: 'Non-blocking transitions' },
      { name: 'React.createPortal', href: '/react-apis/createPortal', desc: 'Render outside hierarchy' },
      { name: 'React.createContext', href: '/react-apis/createContext', desc: 'Create context objects' },
    ],
  },
  'Next.js APIs': {
    description: 'Next.js specific APIs and features',
    items: [
      { name: 'next/link', href: '/nextjs-apis/link', desc: 'Client-side navigation' },
      { name: 'next/router', href: '/nextjs-apis/router', desc: 'Routing utilities' },
      { name: 'next/image', href: '/nextjs-apis/image', desc: 'Optimized images' },
      { name: 'next/script', href: '/nextjs-apis/script', desc: 'Script optimization' },
      { name: 'next/head', href: '/nextjs-apis/head', desc: 'Modify head' },
      { name: 'next/dynamic', href: '/nextjs-apis/dynamic', desc: 'Dynamic imports' },
      { name: 'next/navigation', href: '/nextjs-apis/navigation', desc: 'App router navigation' },
      { name: 'next/headers', href: '/nextjs-apis/headers', desc: 'Read HTTP headers' },
      { name: 'next/server', href: '/nextjs-apis/server', desc: 'Server utilities' },
      { name: 'next/font', href: '/nextjs-apis/font', desc: 'Font optimization' },
      { name: 'next/config', href: '/nextjs-apis/config', desc: 'Runtime configuration' },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            DevKit Laboratory
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive examples and guides for React Hooks, Design Patterns, Architectures, and Next.js APIs
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800">
              React 19
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Next.js 15
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              TypeScript
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Tailwind CSS 4
            </span>
          </div>
        </div>

        {/* Sections */}
        {Object.entries(sections).map(([sectionName, section]) => (
          <div key={sectionName} className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{sectionName}</h2>
              <p className="text-slate-600">{section.description}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200 hover:border-cyan-500"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors mb-1 text-sm sm:text-base">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-2">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="mt-16 text-center text-slate-600 text-sm border-t border-slate-200 pt-8">
          <p>Built with React 19, Next.js 15, and Tailwind CSS 4</p>
          <p className="mt-2">All examples include live demos and source code</p>
        </div>
      </div>
    </div>
  );
}

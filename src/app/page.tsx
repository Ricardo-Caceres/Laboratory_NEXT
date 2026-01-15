import Link from "next/link";

const sections = {
  'React Hooks': {
    description: '🪝 Guías completas de todos los React Hooks con ejemplos en vivo y patrones reutilizables',
    items: [
      { name: '📚 Complete Hook Guide', href: '/hooks/react-hooks', desc: 'All React Hooks + Custom Patterns' },
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
    description: '🎨 Patrones de diseño esenciales de React y mejores prácticas para código escalable',
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
    description: '🏗️ Arquitecturas modernas de frontend para aplicaciones empresariales robustas',
    items: [
      { name: 'Atomic Design', href: '/architectures/atomic-design', desc: 'Component hierarchy system' },
      { name: 'Feature-Sliced Design', href: '/architectures/feature-sliced-design', desc: 'Architecture by features' },
      { name: 'Micro Frontends', href: '/architectures/micro-frontends', desc: 'Independently deployable apps' },
      { name: 'Monorepo', href: '/architectures/monorepo', desc: 'Single repository for multiple projects' },
      { name: 'Clean Architecture', href: '/architectures/clean-architecture', desc: 'Dependency rule architecture' },
      { name: 'Hexagonal Architecture', href: '/architectures/hexagonal-architecture', desc: 'Ports & adapters pattern' },
      { name: 'Layered Architecture', href: '/architectures/layered-architecture', desc: 'Separation by layers' },
      { name: 'MVC Architecture', href: '/architectures/mvc-architecture', desc: 'Model-View-Controller' },
      { name: 'Microservices Architecture', href: '/architectures/microservices-architecture', desc: 'Distributed services' },
    ],
  },
  'State Management': {
    description: '📦 Soluciones profesionales de gestión de estado con Redux Toolkit y Zustand',
    items: [
      { name: 'Redux Toolkit', href: '/state-management/redux-toolkit', desc: 'Modern Redux with toolkit' },
      { name: 'Zustand', href: '/state-management/zustand', desc: 'Simple and scalable state' },
    ],
  },
  'React APIs': {
    description: '⚛️ Referencias completas de APIs core de React con ejemplos prácticos',
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
    description: '▲ APIs específicas de Next.js para aplicaciones full-stack optimizadas',
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
  'Advanced JavaScript': {
    description: '⚡ Features avanzadas de JavaScript que te diferencian como desarrollador elite',
    items: [
      { name: '⭐ Elite JS Features', href: '/javascript/advanced-features', desc: 'Advanced features rarely taught in courses' },
    ],
  },
  'Testing': {
    description: '🧪 Frameworks y metodologías de testing para aplicaciones robustas y confiables',
    items: [
      { name: 'Jest', href: '/testing/jest', desc: 'Zero-config testing framework' },
      { name: 'Mocha', href: '/testing/mocha', desc: 'Flexible testing framework' },
      { name: 'Cypress', href: '/testing/cypress', desc: 'E2E testing framework' },
      { name: 'Karma', href: '/testing/karma', desc: 'Test runner for browsers' },
      { name: 'TDD', href: '/testing/tdd', desc: 'Test-Driven Development' },
      { name: 'Unit Tests', href: '/testing/unit', desc: 'Unit testing practices' },
      { name: 'Integration Tests', href: '/testing/integration', desc: 'Integration testing' },
      { name: 'E2E Tests', href: '/testing/e2e', desc: 'End-to-end testing' },
    ],
  },
  'UI Libraries': {
    description: '✨ Bibliotecas modernas de UI y animación para experiencias visuales impactantes',
    items: [
      { name: 'Three.js', href: '/ui-libraries/three', desc: '3D graphics with WebGL' },
      { name: 'Animation Libraries', href: '/ui-libraries/animate', desc: 'Framer Motion, GSAP, Anime.js' },
      { name: 'Pixel & Canvas', href: '/ui-libraries/pixel', desc: 'Canvas API & pixel manipulation' },
      { name: 'AG Grid', href: '/ui-libraries/ag-grid', desc: 'Enterprise data grid' },
      { name: 'Storybook', href: '/ui-libraries/storybook', desc: 'Component development environment' },
    ],
  },
  'GraphQL & Real-Time': {
    description: '🔄 GraphQL, WebSockets y comunicación en tiempo real para apps interactivas',
    items: [
      { name: 'GraphQL Basics', href: '/graphql/basics', desc: 'GraphQL fundamentals' },
      { name: 'Apollo Client', href: '/graphql/apollo-client', desc: 'GraphQL client for React' },
      { name: 'WebSockets', href: '/real-time/websockets', desc: 'Real-time bidirectional communication' },
      { name: 'RxJS', href: '/real-time/rxjs', desc: 'Reactive programming with Observables' },
      { name: 'Event-Driven UI', href: '/real-time/event-driven', desc: 'Event-driven architectures' },
      { name: 'Real-Time UI', href: '/real-time/ui-communication', desc: 'Live UI updates' },
    ],
  },
  'Build Tools & Performance': {
    description: '⚙️ Herramientas de build y técnicas de optimización para máximo rendimiento',
    items: [
      { name: 'Webpack', href: '/build-tools/webpack', desc: 'Module bundler configuration' },
      { name: 'Turbopack', href: '/build-tools/turbopack', desc: 'Next-gen bundler by Vercel' },
      { name: 'Performance', href: '/build-tools/performance', desc: 'Optimization techniques' },
      { name: 'SPA', href: '/build-tools/spa', desc: 'Single Page Applications' },
    ],
  },
  'Data Structures & Algorithms': {
    description: '📊 Fundamentos de ciencias de la computación esenciales para interviews técnicas',
    items: [
      { name: 'Basic Data Structures', href: '/data-structures/basic', desc: 'Arrays, Objects, Sets, Maps' },
      { name: 'Advanced Data Structures', href: '/data-structures/advanced', desc: 'Trees, Graphs, Heaps' },
      { name: 'Basic Algorithms', href: '/algorithms/basic', desc: 'Sorting, searching' },
      { name: 'Advanced Algorithms', href: '/algorithms/advanced', desc: 'Dynamic programming, graphs' },
      { name: 'Big O Notation', href: '/algorithms/big-o', desc: 'Algorithm complexity analysis' },
    ],
  },
  'DevOps & Cloud': {
    description: '☁️ CI/CD, plataformas cloud e infraestructura como código para deploys modernos',
    items: [
      { name: 'CI/CD Pipelines', href: '/cicd/pipelines', desc: 'Continuous integration & deployment' },
      { name: 'Docker', href: '/devops/docker', desc: 'Containerization' },
      { name: 'Prometheus', href: '/devops/prometheus', desc: 'Monitoring & alerting' },
      { name: 'AWS', href: '/cloud/aws', desc: 'Amazon Web Services' },
      { name: 'Azure', href: '/cloud/azure', desc: 'Microsoft Azure' },
      { name: 'Cloud Architectures', href: '/cloud/architectures', desc: 'Cloud design patterns' },
    ],
  },
  'API Protocols': {
    description: '🌐 Protocolos modernos de comunicación API para sistemas distribuidos',
    items: [
      { name: 'Webhooks', href: '/apis/webhooks', desc: 'Event-driven HTTP callbacks' },
      { name: 'SOAP', href: '/apis/soap', desc: 'XML-based messaging protocol' },
      { name: 'gRPC', href: '/apis/grpc', desc: 'High-performance RPC framework' },
    ],
  },
  'Mobile Development': {
    description: '📱 Desarrollo móvil cross-platform con tecnologías web modernas',
    items: [
      { name: 'Capacitor.js', href: '/mobile/capacitor', desc: 'Native mobile with web tech' },
      { name: 'Cordova.js', href: '/mobile/cordova', desc: 'Hybrid mobile apps' },
      { name: 'PWA', href: '/pwa', desc: 'Progressive Web Apps' },
    ],
  },
  'Authentication & Validation': {
    description: '🔐 Seguridad y validación de datos con las mejores prácticas de la industria',
    items: [
      { name: 'JWT Authentication', href: '/auth/jwt', desc: 'JSON Web Tokens' },
      { name: 'Zod Validation', href: '/validation/zod', desc: 'TypeScript-first schema validation' },
    ],
  },
  'Data Fetching': {
    description: '🔄 Bibliotecas modernas de data fetching con caching inteligente y sincronización',
    items: [
      { name: 'TanStack Query', href: '/data-fetching/tanstack-query', desc: 'Powerful async state management' },
    ],
  },
  'Methodologies': {
    description: '📋 Metodologías ágiles y frameworks de desarrollo para equipos de alto rendimiento',
    items: [
      { name: 'Scrum', href: '/methodologies/scrum', desc: 'Agile project management' },
    ],
  },
  'Developer Tools': {
    description: '🛠️ Herramientas esenciales de desarrollo y monitoreo para productividad máxima',
    items: [
      { name: 'Turborepo', href: '/tools/turborepo', desc: 'High-performance monorepo build system' },
      { name: 'DataDog', href: '/tools/datadog', desc: 'Monitoring & observability platform' },
    ],
  },
  'Security & Best Practices': {
    description: '🛡️ Fundamentos de seguridad y habilidades profesionales para líderes técnicos',
    items: [
      { name: '🔒 Frontend Security', href: '/security', desc: 'Essential security practices' },
      { name: '🎯 Tech Lead Skills', href: '/soft-skills', desc: 'Leadership & soft skills for Tech Leads' },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-4">
            DevKit Laboratory
          </h1>
          <p className="text-lg sm:text-xl text-[var(--foreground)] opacity-80 max-w-3xl mx-auto leading-relaxed">
            Guías completas y ejemplos en vivo de React Hooks, Patrones de Diseño, Arquitecturas 
            y APIs de Next.js. Todo lo que necesitas para dominar el desarrollo frontend moderno.
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
            <div className="mb-6 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">{sectionName}</h2>
              <p className="text-[var(--foreground)] opacity-80 text-base leading-relaxed max-w-4xl">{section.description}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-5 bg-[var(--panel)] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-[var(--border)] hover:border-[var(--primary)] hover:scale-[1.02]"
                >
                  <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors mb-2 text-sm sm:text-base">
                    {item.name}
                  </h3>
                  <p className="text-[var(--foreground)] opacity-75 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="mt-16 text-center text-[var(--foreground)] opacity-75 text-sm border-t border-[var(--border)] pt-8">
          <p className="font-medium">Built with React 19, Next.js 15, and Tailwind CSS 4</p>
          <p className="mt-2">✨ Todos los ejemplos incluyen demos en vivo y código fuente documentado</p>
        </div>
      </div>
    </div>
  );
}

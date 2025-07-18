import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div>
          <h1 className="text-2xl font-bold mb-4">DevKit Examples</h1>
          <h2 className="text-xl font-semibold mb-2">Hooks</h2>
          <ul className="list-disc list-inside">
            <li><Link href="/hooks/useState">useState</Link></li>
            <li><Link href="/hooks/useEffect">useEffect</Link></li>
            <li><Link href="/hooks/useContext">useContext</Link></li>
            <li><Link href="/hooks/useReducer">useReducer</Link></li>
            <li><Link href="/hooks/useCallback">useCallback</Link></li>
            <li><Link href="/hooks/useMemo">useMemo</Link></li>
            <li><Link href="/hooks/useRef">useRef</Link></li>
            <li><Link href="/hooks/useLayoutEffect">useLayoutEffect</Link></li>
            <li><Link href="/hooks/useImperativeHandle">useImperativeHandle</Link></li>
            <li><Link href="/hooks/useDebugValue">useDebugValue</Link></li>
            <li><Link href="/hooks/useDeferredValue">useDeferredValue</Link></li>
            <li><Link href="/hooks/useTransition">useTransition</Link></li>
            <li><Link href="/hooks/useId">useId</Link></li>
            <li><Link href="/hooks/useSyncExternalStore">useSyncExternalStore</Link></li>
            <li><Link href="/hooks/useInsertionEffect">useInsertionEffect</Link></li>
            <li><Link href="/hooks/use">use</Link></li>
          </ul>
          <h2 className="text-xl font-semibold mt-4 mb-2">Patterns</h2>
          <ul className="list-disc list-inside">
            <li><Link href="/patterns/compound-components">Compound Components</Link></li>
            <li><Link href="/patterns/higher-order-component">Higher-Order Component</Link></li>
            <li><Link href="/patterns/render-props">Render Props</Link></li>
          </ul>
          <h2 className="text-xl font-semibold mt-4 mb-2">Architectures</h2>
          <ul className="list-disc list-inside">
            <li><Link href="/architectures/atomic-design">Atomic Design</Link></li>
            <li><Link href="/architectures/feature-sliced-design">Feature-Sliced Design</Link></li>
          </ul>
          <h2 className="text-xl font-semibold mt-4 mb-2">React APIs</h2>
          <ul className="list-disc list-inside">
            <li><Link href="/react-apis/createElement">React.createElement</Link></li>
            <li><Link href="/react-apis/Children">React.Children</Link></li>
            <li><Link href="/react-apis/Fragment">React.Fragment</Link></li>
            <li><Link href="/react-apis/memo">React.memo</Link></li>
            <li><Link href="/react-apis/lazy-suspense">React.lazy & Suspense</Link></li>
            <li><Link href="/react-apis/StrictMode">React.StrictMode</Link></li>
            <li><Link href="/react-apis/createRef">React.createRef</Link></li>
            <li><Link href="/react-apis/forwardRef">React.forwardRef</Link></li>
            <li><Link href="/react-apis/cloneElement">React.cloneElement</Link></li>
            <li><Link href="/react-apis/isValidElement">React.isValidElement</Link></li>
            <li><Link href="/react-apis/Component">React.Component</Link></li>
            <li><Link href="/react-apis/PureComponent">React.PureComponent</Link></li>
            <li><Link href="/react-apis/Profiler">React.Profiler</Link></li>
            <li><Link href="/react-apis/startTransition">React.startTransition</Link></li>
            <li><Link href="/react-apis/createPortal">React.createPortal</Link></li>
            <li><Link href="/react-apis/createContext">React.createContext</Link></li>
          </ul>
          <h2 className="text-xl font-semibold mt-4 mb-2">Next.js APIs</h2>
          <ul className="list-disc list-inside">
            <li><Link href="/nextjs-apis/link">next/link</Link></li>
            <li><Link href="/nextjs-apis/router">next/router</Link></li>
            <li><Link href="/nextjs-apis/image">next/image</Link></li>
            <li><Link href="/nextjs-apis/script">next/script</Link></li>
            <li><Link href="/nextjs-apis/head">next/head</Link></li>
            <li><Link href="/nextjs-apis/dynamic">next/dynamic</Link></li>
            <li><Link href="/nextjs-apis/navigation">next/navigation</Link></li>
            <li><Link href="/nextjs-apis/headers">next/headers</Link></li>
            <li><Link href="/nextjs-apis/server">next/server</Link></li>
            <li><Link href="/nextjs-apis/font">next/font</Link></li>
            <li><Link href="/nextjs-apis/document">next/document (Pages Router)</Link></li>
            <li><Link href="/nextjs-apis/app">next/app (Pages Router)</Link></li>
            <li><Link href="/nextjs-apis/config">next/config</Link></li>
            </ul>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
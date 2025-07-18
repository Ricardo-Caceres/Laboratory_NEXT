# Next.js DevKit

Welcome to the Next.js DevKit! This guide is designed to provide a comprehensive overview of best practices, patterns, and examples for developing with Next.js.

## Table of Contents

1.  **[Cheatsheets](#cheatsheets)**
    -   [JavaScript Cheatsheet](cheatsheets/javascript.md)
    -   [TypeScript Cheatsheet](cheatsheets/typescript.md)
    -   [JavaScript Data Structures and Methods](cheatsheets/js-data-structures.md)

2.  **[React Hooks Examples](#react-hooks-examples)**
    -   [`useState`](examples/hooks/useState.md)
    -   [`useEffect`](examples/hooks/useEffect.md)
    -   [`useContext`](examples/hooks/useContext.md)
    -   [`useReducer`](examples/hooks/useReducer.md)
    -   [`useCallback`](examples/hooks/useCallback.md)
    -   [`useMemo`](examples/hooks/useMemo.md)
    -   [`useRef`](examples/hooks/useRef.md)
    -   [`useLayoutEffect`](examples/hooks/useLayoutEffect.md)
    -   [`useImperativeHandle`](examples/hooks/useImperativeHandle.md)
    -   [`useDebugValue`](examples/hooks/useDebugValue.md)
    -   [`useDeferredValue`](examples/hooks/useDeferredValue.md)
    -   [`useTransition`](examples/hooks/useTransition.md)
    -   [`useId`](examples/hooks/useId.md)
    -   [`useSyncExternalStore`](examples/hooks/useSyncExternalStore.md)
    -   [`useInsertionEffect`](examples/hooks/useInsertionEffect.md)
    -   [`use`](examples/hooks/use.md)

3.  **[Design Patterns](#design-patterns)**
    -   [Compound Components](examples/patterns/compound-components.md)
    -   [Higher-Order Component (HOC)](examples/patterns/higher-order-component.md)
    -   [Render Props](examples/patterns/render-props.md)

4.  **[Architectural Patterns](#architectural-patterns)**
    -   [Atomic Design](examples/architectures/atomic-design.md)
    -   [Feature-Sliced Design (FSD)](examples/architectures/feature-sliced-design.md)

5.  **[React APIs](#react-apis)**
    -   [`React.createElement`](examples/react-apis/createElement.md)
    -   [`React.Children`](examples/react-apis/Children.md)
    -   [`React.Fragment`](examples/react-apis/Fragment.md)
    -   [`React.memo`](examples/react-apis/memo.md)
    -   [`React.lazy` and `Suspense`](examples/react-apis/lazy-suspense.md)
    -   [`React.StrictMode`](examples/react-apis/StrictMode.md)
    -   [`React.createRef`](examples/react-apis/createRef.md)
    -   [`React.forwardRef`](examples/react-apis/forwardRef.md)
    -   [`React.cloneElement`](examples/react-apis/cloneElement.md)
    -   [`React.isValidElement`](examples/react-apis/isValidElement.md)
    -   [`React.Component`](examples/react-apis/Component.md)
    -   [`React.PureComponent`](examples/react-apis/PureComponent.md)
    -   [`React.Profiler`](examples/react-apis/Profiler.md)
    -   [`React.startTransition`](examples/react-apis/startTransition.md)
    -   [`React.createPortal`](examples/react-apis/createPortal.md)
    -   [`React.createContext`](examples/react-apis/createContext.md)
6.  **[Next.js APIs](#nextjs-apis)**
    -   [`next/link`](examples/nextjs-apis/link.md)
    -   [`next/router`](examples/nextjs-apis/router.md)
    -   [`next/image`](examples/nextjs-apis/image.md)
    -   [`next/script`](examples/nextjs-apis/script.md)
    -   [`next/head`](examples/nextjs-apis/head.md)
    -   [`next/dynamic`](examples/nextjs-apis/dynamic.md)
    -   [`next/navigation`](examples/nextjs-apis/navigation.md)
    -   [`next/headers`](examples/nextjs-apis/headers.md)
    -   [`next/server`](examples/nextjs-apis/server.md)
    -   [`next/font`](examples/nextjs-apis/font.md)
    -   [`next/document`](examples/nextjs-apis/document.md)
    -   [`next/app`](examples/nextjs-apis/app.md)
    -   [`next/config`](examples/nextjs-apis/config.md)

---

## Cheatsheets

Quick references for JavaScript and TypeScript syntax and features.

-   **[JavaScript Cheatsheet](cheatsheets/javascript.md):** Covers variables, data types, operators, control flow, functions, arrays, objects, ES6+ features, and asynchronous JavaScript.
-   **[TypeScript Cheatsheet](cheatsheets/typescript.md):** Includes basic types, interfaces, type aliases, functions, generics, enums, and utility types.

## React Hooks Examples

Practical examples of the most common React hooks.

-   **[`useState`](examples/hooks/useState.md):** For managing simple component state.
-   **[`useEffect`](examples/hooks/useEffect.md):** For handling side effects like data fetching.
-   **[`useContext`](examples/hooks/useContext.md):** For sharing state across the component tree.
-   **[`useReducer`](examples/hooks/useReducer.md):** For managing complex state logic.
-   **[`useCallback`](examples/hooks/useCallback.md):** For memoizing callback functions.
-   **[`useMemo`](examples/hooks/useMemo.md):** For memoizing expensive calculations.
-   **[`useRef`](examples/hooks/useRef.md):** For accessing DOM elements and storing mutable values.

## Design Patterns

Proven solutions to common problems in component design.

-   **[Compound Components](examples/patterns/compound-components.md):** Create expressive and flexible components.
-   **[Higher-Order Component (HOC)](examples/patterns/higher-order-component.md):** Reuse component logic.
-   **[Render Props](examples/patterns/render-props.md):** Share code with a function prop.

## Architectural Patterns

Methodologies for structuring your Next.js application.

-   **[Atomic Design](examples/architectures/atomic-design.md):** A methodology for creating design systems with a clear hierarchy.
-   **[Feature-Sliced Design (FSD)](examples/architectures/feature-sliced-design.md):** A scalable architecture for large frontend projects.

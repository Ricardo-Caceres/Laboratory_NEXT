
# `next/app` (Pages Router)

`next/app` refers to the `pages/_app.js` or `pages/_app.tsx` file in the Pages Router. This file is the top-level component that wraps all your pages. It allows you to control the page initialization, persist layout between page changes, inject global CSS, and keep state when navigating between pages.

### When to use it
-   To initialize pages with common layouts or data.
-   To inject global CSS that applies to all pages.
-   To maintain state across page navigations.
-   To add global providers (e.g., for authentication, theme, data fetching).

### Syntax

```tsx
// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Global CSS

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

### Key Properties of `AppProps`
-   `Component`: The active `page` component.
-   `pageProps`: An object with the initial props that were preloaded for your page by one of Next.js's data fetching methods (`getStaticProps`, `getServerSideProps`, `getInitialProps`).

### Example

This example shows a custom `_app.tsx` that applies global styles and a simple layout.

```tsx
// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Import global styles

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1>My App Header</h1>
      </header>
      <Component {...pageProps} />
      <footer style={{ borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '20px' }}>
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
}
```

### Note on App Router

In the App Router, `_app.js` is replaced by the root `layout.tsx` file. The `layout.tsx` file serves a similar purpose, allowing you to define a shared UI for a segment and its children, load data, and manage global styles and providers.

### Key Points
-   `_app.js` is a core file in the Pages Router for global application setup.
-   It's executed on both the server and the client.
-   Avoid fetching data in `_app.js` unless it's truly global and required for every page.


# `next/link`

`next/link` is a React component that enables client-side navigation between pages in a Next.js application. It pre-fetches linked pages in the background, making navigation feel instant.

### When to use it
-   For all internal navigation within your Next.js application.
-   To improve user experience by providing fast, client-side transitions.

### Syntax

```tsx
import Link from 'next/link';

<Link href="/about">
  About Us
</Link>

// With children as a React component (Next.js 13+)
<Link href="/dashboard">
  <button>Go to Dashboard</button>
</Link>
```

### Props
-   `href` (required): The path or URL to navigate to. Can be a string or an object.
-   `as` (optional): An optional decorator for the path that will be shown in the browser URL bar. Useful for dynamic routes.
-   `passHref` (optional): Forces `Link` to send the `href` prop to its child. Useful if the child is a custom component that wraps an `<a>` tag.
-   `prefetch` (optional): Boolean. If `true`, the page is prefetched in the background. Defaults to `true` for static routes.
-   `replace` (optional): Boolean. If `true`, replaces the current history state instead of adding a new URL to the history stack.
-   `scroll` (optional): Boolean. If `false`, the page will not scroll to the top on navigation.
-   `shallow` (optional): Boolean. If `true`, updates the current URL without running `getStaticProps`, `getServerSideProps` or `getInitialProps`.
-   `locale` (optional): String. The locale to use for the link.
-   `legacyBehavior` (optional): Boolean. If `true`, enables the legacy behavior where `Link` always renders an `<a>` tag and requires `passHref`.

### Example

This example demonstrates basic usage of `next/link` for navigation.

```tsx
'use client';

import Link from 'next/link';

export default function NavigationExample() {
  return (
    <div>
      <h1>Next.js Link Example</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/nextjs-apis/link/about">
              About (Prefetched)
            </Link>
          </li>
          <li>
            <Link href="/nextjs-apis/link/contact" prefetch={false}>
              Contact (No Prefetch)
            </Link>
          </li>
          <li>
            <Link href="/nextjs-apis/link/dashboard">
              <button style={{ padding: '10px 15px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Go to Dashboard
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
```

### Key Points
-   Always use `next/link` for client-side navigation within your Next.js application.
-   For external links, use a regular `<a>` tag.
-   In Next.js 13+ App Router, `Link` no longer requires an `<a>` tag as a direct child unless you need to add specific `<a>` tag attributes not supported by `Link` directly.


# `next/router` (Pages Router)

The `next/router` module provides access to the Next.js router, allowing you to programmatically navigate between pages, access route parameters, and listen to route changes. While the App Router (`next/navigation`) is the recommended approach for new applications, `next/router` is still relevant for Pages Router applications and understanding its concepts can be helpful.

### When to use it
-   In Pages Router applications for programmatic navigation (`router.push`, `router.replace`).
-   To access query parameters (`router.query`).
-   To listen to route change events.

### `useRouter` Hook (Pages Router)

In functional components within the Pages Router, you use the `useRouter` hook to get access to the router object.

### Example

This example demonstrates basic programmatic navigation and accessing query parameters using `useRouter` in a Pages Router context.

**1. `pages/index.tsx` (or `src/pages/index.tsx`)**

```tsx
// pages/index.tsx
'use client';

import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push('/nextjs-apis/router/about');
  };

  const navigateToProduct = () => {
    router.push({
      pathname: '/nextjs-apis/router/product',
      query: { id: '123', name: 'Example Product' },
    });
  };

  return (
    <div>
      <h1>Home Page (next/router example)</h1>
      <button onClick={navigateToAbout}>
        Go to About Page
      </button>
      <br />
      <button onClick={navigateToProduct}>
        Go to Product Page (with query params)
      </button>
    </div>
  );
}
```

**2. `pages/nextjs-apis/router/about.tsx`**

```tsx
// pages/nextjs-apis/router/about.tsx
'use client';

import { useRouter } from 'next/router';

export default function AboutPage() {
  const router = useRouter();

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
```

**3. `pages/nextjs-apis/router/product.tsx`**

```tsx
// pages/nextjs-apis/router/product.tsx
'use client';

import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { id, name } = router.query;

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
      <p>Product Name: {name}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
```

### Key Properties of `router` object
-   `router.pathname`: Current path without query string.
-   `router.asPath`: Current path including query string.
-   `router.query`: An object containing query string parameters.
-   `router.isReady`: Boolean, `true` when the router fields are updated client-side.

### Key Methods of `router` object
-   `router.push(url, as, options)`: Navigates to a new URL.
-   `router.replace(url, as, options)`: Replaces the current URL in the history stack.
-   `router.reload()`: Reloads the current page.
-   `router.back()`: Navigates back in history.
-   `router.events`: An event emitter for listening to route changes.

### Note on App Router
For the App Router, the equivalent functionalities are provided by hooks from `next/navigation`:
-   `useRouter` (from `next/navigation`): For programmatic navigation.
-   `usePathname`: To get the current pathname.
-   `useSearchParams`: To access URL query parameters.
-   `useParams`: To access dynamic route parameters.


# `next/navigation` (App Router Hooks)

The `next/navigation` module provides a set of hooks for interacting with the Next.js App Router. These hooks replace the functionality previously found in `next/router` for the Pages Router, offering a more React-idiomatic way to handle navigation, search parameters, and dynamic route segments.

### When to use it
-   In App Router components (Client Components) to programmatically navigate.
-   To read the current URL's pathname, search parameters, or dynamic route parameters.
-   To refresh data or trigger a soft navigation.

### Key Hooks

-   `useRouter()`: Returns a router object that allows you to programmatically navigate.
-   `usePathname()`: Returns the current URL's pathname.
-   `useSearchParams()`: Returns a read-only URLSearchParams object for the current URL's query string.
-   `useParams()`: Returns an object containing the current route's dynamic parameters.
-   `useSelectedLayoutSegment()`: Returns the active segment for the current level of the tree.
-   `useSelectedLayoutSegments()`: Returns all active segments for the current level of the tree.
-   `useServerInsertedHTML()`: Allows you to insert HTML into the head or body of the server-rendered page.

### Example

This example demonstrates the usage of `useRouter`, `usePathname`, `useSearchParams`, and `useParams`.

**1. Main Navigation (`page.tsx`)**

```tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NavigationHooksExample() {
  const router = useRouter();

  return (
    <div>
      <h1>Next.js Navigation Hooks Example</h1>
      <nav>
        <ul>
          <li>
            <Link href="/nextjs-apis/navigation/dashboard">
              Go to Dashboard
            </Link>
          </li>
          <li>
            <Link href="/nextjs-apis/navigation/products/123?category=electronics">
              Go to Product 123 (Electronics)
            </Link>
          </li>
          <li>
            <button onClick={() => router.push('/nextjs-apis/navigation/settings')}>
              Go to Settings (Programmatic)
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
```

**2. Dashboard Page (`dashboard/page.tsx`)**

```tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function DashboardPage() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Current Pathname: {pathname}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
```

**3. Product Detail Page (`products/[id]/page.tsx`)**

```tsx
'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const productId = params.id; // From dynamic route segment [id]
  const category = searchParams.get('category'); // From query parameter

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {productId}</p>
      <p>Category: {category}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
```

### Key Points
-   These hooks are designed for Client Components. For Server Components, you can directly access `params` and `searchParams` from the `props` of `page.tsx` or `layout.tsx`.
-   `useRouter` from `next/navigation` is different from `useRouter` from `next/router`.
-   They provide a powerful and flexible way to manage routing and URL state in the App Router.

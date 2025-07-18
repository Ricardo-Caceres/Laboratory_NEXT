
# `next/headers`

`next/headers` provides functions to read HTTP request headers and set response headers in Server Components and Route Handlers. This is crucial for server-side logic that depends on incoming request details or needs to modify outgoing responses.

### When to use it
-   In Server Components or Route Handlers to access request headers (e.g., `User-Agent`, `Cookie`, `Authorization`).
-   To set response headers (e.g., `Set-Cookie`, `Cache-Control`, `Location` for redirects).
-   For authentication, A/B testing, or content negotiation on the server.

### Key Functions

-   `headers()`: Returns a read-only instance of the `Headers` Web API interface, containing the request headers.
-   `cookies()`: Returns a read-only instance of the `Cookies` Web API interface, allowing you to read request cookies and set response cookies.

### Example

This example demonstrates how to read request headers and cookies in a Server Component and set a cookie in a Route Handler.

**1. Server Component (`page.tsx`)**

```tsx
// src/app/nextjs-apis/headers/page.tsx
import { headers, cookies } from 'next/headers';

export default function HeadersExample() {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');

  const cookieStore = cookies();
  const theme = cookieStore.get('theme');

  return (
    <div>
      <h1>Next.js Headers & Cookies Example</h1>
      <h2>Request Headers (Server Component)</h2>
      <p>User-Agent: {userAgent}</p>
      <p>Theme Cookie: {theme?.value || 'Not set'}</p>
      <p>Check your browser's developer tools (Network tab) for request and response headers.</p>
      <p>To set a cookie, visit <a href="/api/set-cookie">/api/set-cookie</a></p>
    </div>
  );
}
```

**2. Route Handler (`api/set-cookie/route.ts`)**

```tsx
// src/app/api/set-cookie/route.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  cookies().set('theme', 'dark', { path: '/', maxAge: 60 * 60 * 24 * 7 }); // Set for 7 days
  return NextResponse.json({ message: 'Cookie set!' });
}

export async function DELETE() {
  cookies().delete('theme');
  return NextResponse.json({ message: 'Cookie deleted!' });
}
```

### Key Points
-   `headers()` and `cookies()` are dynamic functions, meaning they opt the component into dynamic rendering.
-   They can only be used in Server Components or Route Handlers, not Client Components.
-   For setting cookies, use `cookies().set()` in a Server Action or Route Handler.

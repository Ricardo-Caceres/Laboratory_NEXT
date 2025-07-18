
# `next/server`

`next/server` provides utilities for working with Next.js Route Handlers and Middleware. It offers a set of Web-standard APIs (like `Request`, `Response`, `NextResponse`) and Next.js-specific extensions to handle server-side logic.

### When to use it
-   To create API endpoints (Route Handlers) that respond to HTTP requests.
-   To implement Middleware for intercepting requests before they are processed by pages or API routes.
-   For server-side logic that needs access to request/response objects, cookies, headers, etc.

### Key Exports

-   `NextRequest`: An extended `Request` object with Next.js-specific properties (e.g., `nextUrl`).
-   `NextResponse`: An extended `Response` object with Next.js-specific methods (e.g., `redirect`, `rewrite`).
-   `NextURL`: A parsed URL object.

### Example

This example demonstrates a simple Route Handler and a Middleware that intercepts requests.

**1. Route Handler (`api/hello/route.ts`)**

```tsx
// src/app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'World';
  return NextResponse.json({ message: `Hello, ${name}!` });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ received: data, status: 'success' });
}
```

**2. Middleware (`middleware.ts`)**

```tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Example: Add a custom header to all responses
  response.headers.set('x-custom-header', 'Hello from Middleware');

  // Example: Redirect if a specific path is accessed
  if (request.nextUrl.pathname.startsWith('/nextjs-apis/server/private')) {
    // You could add authentication logic here
    // return NextResponse.redirect(new URL('/login', request.url));
  }

  return response;
}

// Configure which paths the middleware applies to
export const config = {
  matcher: [
    '/nextjs-apis/server/:path*',
    '/api/:path*',
  ],
};
```

**3. Example Page (`page.tsx`)**

```tsx
'use client';

import { useEffect, useState } from 'react';

export default function ServerApiExample() {
  const [message, setMessage] = useState('Loading...');
  const [postResponse, setPostResponse] = useState('---');

  useEffect(() => {
    // Fetch from Route Handler
    fetch('/api/hello?name=Next.js')
      .then(res => res.json())
      .then(data => setMessage(data.message));

    // Post to Route Handler
    fetch('/api/hello', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item: 'example' }),
    })
      .then(res => res.json())
      .then(data => setPostResponse(JSON.stringify(data)));
  }, []);

  return (
    <div>
      <h1>Next.js Server API Example</h1>
      <h2>Route Handler (`/api/hello`)</h2>
      <p>GET Response: {message}</p>
      <p>POST Response: {postResponse}</p>
      <h2>Middleware Example</h2>
      <p>Check your browser's network tab for `x-custom-header` on this page's response.</p>
      <p>Accessing <a href="/nextjs-apis/server/private">/nextjs-apis/server/private</a> (if middleware is uncommented) would redirect.</p>
    </div>
  );
}
```

### Key Points
-   Route Handlers are the equivalent of API Routes in the App Router.
-   Middleware runs before a request is completed, allowing you to modify the request or response.
-   `next/server` provides a powerful set of tools for building server-side logic in Next.js.

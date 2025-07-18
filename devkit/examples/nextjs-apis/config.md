
# `next/config`

`next/config` allows you to expose configuration values from `next.config.js` to both the server-side and client-side of your Next.js application. This is useful for sharing environment variables or other build-time configurations.

### When to use it
-   To share public environment variables that are set in `next.config.js`.
-   To expose other build-time configurations (e.g., API base URLs, feature flags) to your client-side code.

### Syntax

**1. Define `publicRuntimeConfig` and `serverRuntimeConfig` in `next.config.js`**

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'super-secret-key',
    dbUrl: process.env.DB_URL,
  },
};

module.exports = nextConfig;
```

**2. Access in your application**

```typescript
import getConfig from 'next/config';

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

// Access public config (available on client and server)
console.log(publicRuntimeConfig.apiBaseUrl);

// Access server config (only available on server)
console.log(serverRuntimeConfig?.mySecret); // Use optional chaining for client-side safety
```

### Example

This example demonstrates how to access `publicRuntimeConfig` in a client component.

**1. `next.config.js`**

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    appName: 'My Awesome App',
    version: '1.0.0',
    // Example of an environment variable exposed publicly
    publicApiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com/public',
  },
  serverRuntimeConfig: {
    // This will not be available on the client-side
    privateApiKey: process.env.PRIVATE_API_KEY,
  },
};

module.exports = nextConfig;
```

**2. Component (`page.tsx`)**

```tsx
'use client';

import getConfig from 'next/config';

export default function ConfigExample() {
  const { publicRuntimeConfig } = getConfig();

  return (
    <div>
      <h1>Next.js `next/config` Example</h1>
      <p>App Name: {publicRuntimeConfig.appName}</p>
      <p>Version: {publicRuntimeConfig.version}</p>
      <p>Public API URL: {publicRuntimeConfig.publicApiUrl}</p>
      <p>Check the console for `serverRuntimeConfig` (will be undefined on client).</p>
    </div>
  );
}
```

### Key Points
-   `publicRuntimeConfig` is exposed to the browser, so do not put sensitive information here.
-   `serverRuntimeConfig` is only available on the server-side.
-   For environment variables, prefer `process.env.NEXT_PUBLIC_VAR_NAME` for public variables and `process.env.VAR_NAME` for private server-only variables. `next/config` is useful when you need to derive or transform these variables in `next.config.js` before exposing them.

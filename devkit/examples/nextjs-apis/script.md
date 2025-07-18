
# `next/script`

`next/script` is a React component for optimizing the loading of third-party scripts in your Next.js application. It provides strategies to load scripts efficiently, improving performance and user experience.

### When to use it
-   For integrating third-party scripts (e.g., analytics, ads, chat widgets, payment gateways).
-   To control when and how external scripts are loaded to prevent them from blocking the main thread or delaying page rendering.

### Syntax

```tsx
import Script from 'next/script';

<Script
  src="https://example.com/script.js"
  strategy="lazyOnload" // or "beforeInteractive", "afterInteractive", "worker"
  onLoad={() => console.log('Script loaded!')}
  // ... other props
/>
```

### Props
-   `src` (required): The URL of the external script.
-   `strategy` (required): Defines the loading strategy for the script:
    -   `'beforeInteractive'`: Loads before any Next.js hydration. Useful for scripts that need to run before the page becomes interactive (e.g., consent management).
    -   `'afterInteractive'` (default): Loads after the page becomes interactive. Most common strategy for analytics, tag managers.
    -   `'lazyOnload'`: Loads during browser idle time. Useful for low-priority scripts that don't need to be interactive immediately (e.g., chat support).
    -   `'worker'`: (Experimental) Loads the script in a Web Worker. Useful for large, CPU-intensive scripts that shouldn't block the main thread.
-   `onLoad` (optional): Callback function that fires after the script has finished loading.
-   `onError` (optional): Callback function that fires if the script fails to load.
-   `id` (optional): A unique ID for the script element.
-   `dangerouslySetInnerHTML` (optional): For inline scripts.

### Example

This example demonstrates different loading strategies for `next/script`.

```tsx
'use client';

import Script from 'next/script';
import { useState } from 'react';

export default function ScriptExample() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  return (
    <div>
      <h1>Next.js Script Optimization</h1>

      <h2>Analytics Script (afterInteractive)</h2>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" // Replace with actual ID
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Google Analytics script loaded!');
          // Initialize GA here
        }}
      />

      <h2>Chat Widget Script (lazyOnload)</h2>
      <Script
        src="https://cdn.example.com/chat-widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Chat widget script loaded!');
          setScriptLoaded(true);
        }}
      />
      {scriptLoaded && <p>Chat widget is now available!</p>}

      <h2>Inline Script (beforeInteractive)</h2>
      <Script
        id="inline-script-example"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            console.log('Inline script ran before interactive!');
            window.myGlobalVar = 'Hello from inline script';
          `,
        }}
      />

      <p>Check the network tab and console to observe script loading behavior.</p>
    </div>
  );
}
```

### Key Points
-   Choose the appropriate `strategy` based on the script's priority and impact on user experience.
-   `afterInteractive` is suitable for most third-party scripts.
-   `beforeInteractive` is for critical scripts that must run before hydration.
-   `lazyOnload` is for non-critical scripts that can load later.
-   `next/script` helps prevent render-blocking issues and improves Core Web Vitals.


# `next/document` (Pages Router)

`next/document` is a special file in the Pages Router (`pages/_document.js` or `pages/_document.tsx`) that allows you to augment your application's `<html>` and `<body>` tags. This is useful for injecting custom `meta` tags, `link` tags, or scripts that need to be present on every page and cannot be handled by `next/head`.

### When to use it
-   To add `lang` attribute to the `<html>` tag.
-   To inject custom scripts or stylesheets that apply globally to all pages.
-   To add server-side rendered content outside of the main React tree.
-   **Important:** This file is only rendered on the server, and event handlers like `onClick` will not work here.

### Syntax

```tsx
// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Custom meta tags, link tags, etc. that apply globally */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body>
        <Main /> {/* Renders the main Next.js application */}
        <NextScript /> {/* Renders Next.js scripts for hydration and client-side navigation */}
      </body>
    </Html>
  );
}
```

### Key Components
-   `Html`: The root `<html>` tag. You can add attributes like `lang` here.
-   `Head`: The `<head>` tag. This is different from `next/head` and is only rendered once on the server. Use it for global `<head>` elements.
-   `Main`: Where the main application content is rendered.
-   `NextScript`: Where Next.js injects its scripts for client-side hydration and other functionalities.

### Example

This example shows a custom `_document.tsx` that adds a `lang` attribute to the `<html>` tag and a preconnect link for Google Fonts.

```tsx
// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add a preconnect link for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* You can also add other global meta tags here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

### Note on App Router

In the App Router, `_document.js` is replaced by the root `layout.tsx` file. The `<html>` and `<body>` tags are defined directly in `app/layout.tsx`, and metadata is handled by the file-based metadata API.

### Key Points
-   `_document.js` is a server-side only file and is not re-rendered on client-side navigations.
-   It's used for global HTML structure and meta-information that applies to all pages.
-   Avoid placing application logic or client-side JavaScript directly in `_document.js`.

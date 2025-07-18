
# `next/font`

`next/font` is a built-in module in Next.js that automatically optimizes fonts, including custom fonts, and removes external network requests for improved performance and privacy. It ensures fonts are loaded efficiently, preventing layout shifts (CLS) and FOUC (Flash of Unstyled Content).

### When to use it
-   For all fonts used in your Next.js application, especially Google Fonts or local fonts.
-   To automatically optimize font loading and ensure consistent rendering.

### Key Features
-   **Automatic Self-Hosting:** Google Fonts are automatically self-hosted, eliminating an extra network request.
-   **Automatic `font-display: optional`:** Improves performance by making font loading non-blocking.
-   **Automatic `size-adjust`:** Prevents Cumulative Layout Shift (CLS) by adjusting font metrics.
-   **No Layout Shift:** Ensures that text doesn't jump around as fonts load.
-   **Improved Privacy:** No requests sent to Google by the browser.

### Syntax

```tsx
// For Google Fonts
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Optional: 'auto', 'block', 'swap', 'fallback', 'optional'
});

// For Local Fonts
import localFont from 'next/font/local';

const myLocalFont = localFont({
  src: './my-font.woff2',
  display: 'swap',
});

// In your component or layout
<body className={inter.className}>
  {/* ... */}
</body>
```

### Example

This example demonstrates how to use `next/font/google` for Google Fonts and `next/font/local` for local fonts.

**1. `layout.tsx` (or `page.tsx` for page-specific fonts)**

```tsx
// src/app/layout.tsx
import { Inter, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css'; // Your global styles

// Configure Google Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Use CSS variable for TailwindCSS or global styles
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

// Configure Local Font
const customLocalFont = localFont({
  src: '../../../../public/fonts/YourCustomFont.woff2', // Adjust path to your font file
  variable: '--font-custom',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} ${customLocalFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

**2. `page.tsx` (or any component)**

```tsx
'use client';

export default function FontExample() {
  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-inter)' }}>Next.js Font Optimization</h1>
      <p style={{ fontFamily: 'var(--font-roboto-mono)' }}>
        This text uses Roboto Mono from Google Fonts.
      </p>
      <p style={{ fontFamily: 'var(--font-custom)' }}>
        This text uses a custom local font.
      </p>
      <p>Inspect the network tab to see how fonts are loaded.</p>
    </div>
  );
}
```

### Key Points
-   Always use `next/font` for optimal font loading.
-   For Google Fonts, import from `next/font/google`.
-   For local fonts, import from `next/font/local`.
-   Assign a `variable` to the font to easily use it with CSS variables (e.g., in Tailwind CSS or global stylesheets).
-   The `display` property is important for controlling font loading behavior and preventing CLS.

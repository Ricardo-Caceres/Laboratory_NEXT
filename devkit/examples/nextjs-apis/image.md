
# `next/image`

`next/image` is a React component that extends the HTML `<img>` element with automatic image optimization. It provides features like lazy loading, image resizing, and format optimization (e.g., WebP) to improve performance and user experience.

### When to use it
-   For all images in your Next.js application, especially those served from your own domain or a CDN.
-   To automatically optimize image loading and delivery.

### Syntax

```tsx
import Image from 'next/image';

<Image
  src="/path/to/your/image.jpg"
  alt="Description of image"
  width={500} // Required for static images or when not using fill
  height={300} // Required for static images or when not using fill
  // ... other props
/>
```

### Props
-   `src` (required): The path to the image file. Can be a local file, a URL, or a `StaticImageData` object.
-   `alt` (required): Alternative text for the image, important for accessibility.
-   `width` and `height` (required unless `fill` is true): The intrinsic width and height of the image in pixels. Used for aspect ratio and preventing layout shift.
-   `fill` (optional): Boolean. If `true`, the image will fill the parent element, and `width`/`height` are not needed. Requires the parent to have `position: relative`, `absolute`, `fixed`, or `sticky`.
-   `sizes` (optional): String. A string of media conditions and image slot widths, similar to the `sizes` attribute of `<img>`.
-   `quality` (optional): Number (1-100). The quality of the optimized image. Defaults to 75.
-   `priority` (optional): Boolean. If `true`, the image will be preloaded and considered high priority. Use for LCP images.
-   `loading` (optional): `'lazy'` (default) or `'eager'`. Defines when the image should load.
-   `placeholder` (optional): `'blur'` or `'empty'`. Defines the placeholder behavior while the image loads.
-   `style` (optional): Object. Inline styles for the image.
-   `className` (optional): String. CSS class names for the image.

### Example

This example demonstrates basic usage of `next/image` with local and external images.

```tsx
'use client';

import Image from 'next/image';
import localImage from '@/public/next.svg'; // Example of importing a local image

export default function ImageExample() {
  return (
    <div>
      <h1>Next.js Image Optimization</h1>

      <h2>Local Image (Static Import)</h2>
      <Image
        src={localImage}
        alt="Next.js Logo (Local)"
        width={200}
        height={100}
        priority // High priority for LCP
      />

      <h2>External Image (URL)</h2>
      <Image
        src="https://via.placeholder.com/300x200.png?text=External+Image"
        alt="Placeholder Image (External)"
        width={300}
        height={200}
        loading="lazy" // Default, but explicit for clarity
      />

      <h2>Image with `fill` prop</h2>
      <div style={{ position: 'relative', width: '400px', height: '250px', border: '1px solid red' }}>
        <Image
          src="https://via.placeholder.com/600x400.png?text=Fill+Image"
          alt="Fill Image"
          fill // Image will fill the parent div
          style={{ objectFit: 'cover' }} // Cover the area
        />
      </div>
    </div>
  );
}
```

### Key Points
-   Always provide `alt` text for accessibility.
-   `width` and `height` are crucial for preventing Cumulative Layout Shift (CLS).
-   For external images, you must configure `domains` in `next.config.js`.
-   `next/image` automatically handles responsive images, different formats, and lazy loading.

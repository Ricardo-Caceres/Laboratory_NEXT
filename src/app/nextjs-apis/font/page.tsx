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

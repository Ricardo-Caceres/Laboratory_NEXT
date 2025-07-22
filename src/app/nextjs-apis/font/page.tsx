'use client';

export default function FontExample() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-inter)' }}>Next.js Font Optimization</h1>
      <p className="text-lg mb-2" style={{ fontFamily: 'var(--font-roboto-mono)' }}>
        This text uses Roboto Mono from Google Fonts.
      </p>
      <p className="text-lg mb-2" style={{ fontFamily: 'var(--font-custom)' }}>
        This text uses a custom local font.
      </p>
      <p className="text-lg">Inspect the network tab to see how fonts are loaded.</p>
    </div>
  );
}

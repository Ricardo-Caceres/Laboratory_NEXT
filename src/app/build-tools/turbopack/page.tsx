import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function TurbopackPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Turbopack"
        description="**Turbopack** is an incremental bundler optimized for JavaScript and TypeScript, created by Vercel. It's the successor to Webpack and is built in Rust for maximum performance.

**Key Features:**
- **10x faster** than Webpack
- **Incremental compilation**: Only rebuilds changed files
- **Built in Rust**: Native speed
- **Zero config**: Works out of the box
- **HMR**: Lightning-fast hot module replacement

**Advantages:**
- Faster development builds
- Instant server start
- Optimized production builds
- Better caching strategy
- Native ESM support

**Use Cases:**
- Next.js development
- Large monorepos
- Production builds
- Development experience"
        codeContent={[
          {
            filePath: 'next.config.js',
            content: `/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Turbopack for development
  experimental: {
    turbo: {
      // Turbopack configuration
      resolveAlias: {
        '@': './src',
      },
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

module.exports = nextConfig;`,
          },
          {
            filePath: 'package.json',
            content: `{
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start"
  }
}`,
          },
          {
            filePath: 'turbopack-features.md',
            content: `# Turbopack Features

## Performance
- Incremental compilation
- Lazy bundling
- Persistent caching
- Parallel processing

## Developer Experience
- Fast refresh (HMR)
- Zero config
- Instant server start
- Better error messages

## Build Optimization
- Tree shaking
- Code splitting
- Minification
- Compression`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Turbopack Performance</h2>

          <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-3">Speed Comparison:</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Webpack</span>
                  <span>30s</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div className="bg-orange-500 h-4 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Vite</span>
                  <span>8s</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div className="bg-purple-500 h-4 rounded-full" style={{ width: '27%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Turbopack</span>
                  <span>3s</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div className="bg-[var(--primary)] h-4 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg text-center">
              <p className="text-3xl font-bold text-[var(--primary)]">10x</p>
              <p className="text-sm opacity-70">Faster builds</p>
            </div>
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg text-center">
              <p className="text-3xl font-bold text-[var(--primary)]">&lt;1s</p>
              <p className="text-sm opacity-70">HMR updates</p>
            </div>
          </div>

          <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-2">Usage:</h3>
            <code className="block text-sm font-mono p-3 bg-[var(--background)] rounded">
              $ next dev --turbo
            </code>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

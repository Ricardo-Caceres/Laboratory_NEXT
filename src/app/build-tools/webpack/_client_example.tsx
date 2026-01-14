'use client';

import { useState } from 'react';

interface BuildStats {
  file: string;
  size: string;
  time: string;
}

export default function WebpackExample() {
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildStats, setBuildStats] = useState<BuildStats[]>([]);

  const runBuild = () => {
    setIsBuilding(true);
    setBuildStats([]);

    // Simulate webpack build process
    setTimeout(() => {
      setBuildStats([
        { file: 'main.js', size: '245 KB', time: '1.2s' },
        { file: 'vendor.js', size: '456 KB', time: '0.8s' },
        { file: 'runtime.js', size: '12 KB', time: '0.1s' },
        { file: 'styles.css', size: '34 KB', time: '0.3s' },
      ]);
      setIsBuilding(false);
    }, 2000);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Webpack Build Simulation</h2>
      
      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-2">Configuration:</h3>
        <div className="space-y-1 text-sm">
          <p>✓ Entry: ./src/index.js</p>
          <p>✓ Output: ./dist/[name].[contenthash].js</p>
          <p>✓ Loaders: CSS, TypeScript, Images</p>
          <p>✓ Optimization: Code splitting enabled</p>
        </div>
      </div>

      <button
        onClick={runBuild}
        disabled={isBuilding}
        className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50 mb-6"
      >
        {isBuilding ? 'Building...' : 'Run Webpack Build'}
      </button>

      {buildStats.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-semibold mb-3">Build Output:</h3>
          <div className="border border-[var(--border)] rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[var(--panel)]">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold">File</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">Size</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">Time</th>
                </tr>
              </thead>
              <tbody>
                {buildStats.map((stat, index) => (
                  <tr
                    key={index}
                    className="border-t border-[var(--border)] hover:bg-[var(--panel)] transition-colors"
                  >
                    <td className="px-4 py-2 text-sm font-mono">{stat.file}</td>
                    <td className="px-4 py-2 text-sm">{stat.size}</td>
                    <td className="px-4 py-2 text-sm opacity-70">{stat.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm opacity-70 mt-4">
            ✓ Build completed successfully in 2.4s
          </p>
        </div>
      )}
    </div>
  );
}

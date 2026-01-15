'use client';

import { ThemeProvider, useTheme } from './ThemeContext';

function ThemedCard() {
  const { theme } = useTheme();
  
  const themeClasses = {
    light: 'bg-white text-gray-900 border-gray-200',
    dark: 'bg-gray-800 text-white border-gray-700',
    blue: 'bg-blue-600 text-white border-blue-700',
  };

  return (
    <div className={`p-6 rounded-lg border-2 ${themeClasses[theme]} transition-all`}>
      <h3 className="text-xl font-bold mb-2">Themed Card</h3>
      <p className="text-sm opacity-90">This card adapts to the theme using Provider Pattern</p>
    </div>
  );
}

function ThemeControls() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 justify-center mb-6 flex-wrap">
      <button
        onClick={() => setTheme('light')}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          theme === 'light' ? 'bg-white text-gray-900 shadow-lg scale-105' : 'bg-gray-200 text-gray-700'
        }`}
      >
        ☀️ Light
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          theme === 'dark' ? 'bg-gray-800 text-white shadow-lg scale-105' : 'bg-gray-200 text-gray-700'
        }`}
      >
        🌙 Dark
      </button>
      <button
        onClick={() => setTheme('blue')}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          theme === 'blue' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-gray-200 text-gray-700'
        }`}
      >
        💙 Blue
      </button>
    </div>
  );
}

function ThemedContent() {
  return (
    <div className="space-y-4">
      <ThemeControls />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ThemedCard />
        <ThemedCard />
      </div>
      <div className="text-center text-sm text-gray-600 mt-4 p-3 bg-gray-100 rounded">
        💡 No prop drilling! All components access theme via <code className="px-1 py-0.5 bg-gray-200 rounded">useTheme()</code>
      </div>
    </div>
  );
}

export default function ProviderPatternDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-indigo-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Provider Pattern</h2>
          <p className="text-gray-600">Share state globally without prop drilling</p>
        </div>

        <ThemeProvider>
          <ThemedContent />
        </ThemeProvider>
      </div>
    </div>
  );
}

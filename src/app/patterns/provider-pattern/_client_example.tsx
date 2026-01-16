'use client';

import CodeDisplay from '../../../components/CodeDisplay';
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
      <p className="text-sm opacity-90">This card adapts to the selected theme using the Provider Pattern.</p>
    </div>
  );
}

function ThemeControls() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 justify-center mb-6">
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
    </div>
  );
}

export default function ClientExample({ codeContent = [] }: { codeContent?: { filePath: string; content: string }[] } = {}) {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 p-4 overflow-y-auto bg-gray-50">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 sm:p-8 overflow-y-auto">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-indigo-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Provider Pattern</h1>
              <p className="text-base sm:text-lg text-gray-600">Share state across multiple components</p>
            </div>

            <ThemeProvider>
              <ThemedContent />
            </ThemeProvider>

            <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-gray-900 mb-2">Pattern Benefits:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Avoid prop drilling through many levels</li>
                <li>✓ Share state across unrelated components</li>
                <li>✓ Clean and maintainable code structure</li>
                <li>✓ Easy to test and refactor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

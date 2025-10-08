'use client';

import { ThemeProvider, useTheme } from './ThemeContext';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-6 py-4 rounded-lg shadow-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95
        ${theme === 'light' 
          ? 'bg-gradient-to-r from-slate-700 to-slate-900 text-white hover:from-slate-800 hover:to-black' 
          : 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 hover:from-amber-500 hover:to-yellow-600'
        }`}
    >
      {theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}
    </button>
  );
}

function ThemeInfo() {
  const { theme } = useTheme();
  
  return (
    <div className={`p-6 rounded-xl shadow-lg border-2 transition-all duration-300
      ${theme === 'light' 
        ? 'bg-white border-blue-200' 
        : 'bg-slate-800 border-slate-600'
      }`}
    >
      <h3 className={`text-xl font-bold mb-3 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
        Current Theme Information
      </h3>
      <div className="space-y-2">
        <div className={`flex items-center gap-3 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
          <span className="font-semibold">Mode:</span>
          <span className={`px-3 py-1 rounded-full font-medium
            ${theme === 'light' 
              ? 'bg-blue-100 text-blue-800' 
              : 'bg-slate-700 text-amber-400'
            }`}
          >
            {theme === 'light' ? 'Light' : 'Dark'}
          </span>
        </div>
        <div className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          This component accesses the theme context without prop drilling!
        </div>
      </div>
    </div>
  );
}

function NestedComponent() {
  const { theme } = useTheme();
  
  return (
    <div className={`p-4 rounded-lg border-2 border-dashed transition-all duration-300
      ${theme === 'light' 
        ? 'border-purple-300 bg-purple-50' 
        : 'border-purple-600 bg-slate-700/50'
      }`}
    >
      <p className={`text-sm font-medium ${theme === 'light' ? 'text-purple-900' : 'text-purple-300'}`}>
        🎯 Deeply nested component also has access to theme context!
      </p>
    </div>
  );
}

function ThemedContent() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-full transition-all duration-500 p-6 sm:p-8
      ${theme === 'light' 
        ? 'bg-gradient-to-br from-blue-50 via-white to-indigo-50' 
        : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
      }`}
    >
      <div className="w-full max-w-2xl mx-auto">
        <div className={`rounded-2xl shadow-2xl p-6 sm:p-8 border transition-all duration-300
          ${theme === 'light' 
            ? 'bg-white border-gray-200' 
            : 'bg-slate-800 border-slate-700'
          }`}
        >
          <div className="text-center mb-8">
            <div className={`inline-block p-3 rounded-full mb-4 transition-all duration-300
              ${theme === 'light' ? 'bg-blue-100' : 'bg-slate-700'}`}
            >
              <svg className={`w-8 h-8 ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h1 className={`text-2xl sm:text-3xl font-bold mb-3 transition-colors duration-300
              ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
            >
              useContext Hook Example
            </h1>
            <p className={`text-base sm:text-lg transition-colors duration-300
              ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
            >
              Share data across components without prop drilling
            </p>
          </div>
          
          <div className={`rounded-xl p-8 shadow-lg mb-8 text-center transition-all duration-300
            ${theme === 'light' 
              ? 'bg-gradient-to-br from-blue-500 to-indigo-600' 
              : 'bg-gradient-to-br from-slate-700 to-slate-900'
            }`}
          >
            <div className="mb-4">
              <span className="text-6xl">{theme === 'light' ? '☀️' : '🌙'}</span>
            </div>
            <ThemeToggleButton />
          </div>

          <div className="space-y-4 mb-6">
            <ThemeInfo />
            <NestedComponent />
          </div>

          <div className={`p-4 rounded-lg border transition-all duration-300
            ${theme === 'light' 
              ? 'bg-gray-50 border-gray-200' 
              : 'bg-slate-900/50 border-slate-700'
            }`}
          >
            <p className={`text-sm transition-colors duration-300
              ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
            >
              <strong className={theme === 'light' ? 'text-blue-700' : 'text-blue-400'}>
                useContext
              </strong> lets you subscribe to React Context without prop drilling. Perfect for sharing themes, user data, or settings across your component tree!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UseContextExample() {
  return (
    <ThemeProvider>
      <ThemedContent />
    </ThemeProvider>
  );
}
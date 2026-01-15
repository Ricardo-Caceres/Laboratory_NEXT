/**
 * Theme Toggle Button
 * Modern toggle for switching between light and dark modes with tooltip
 */

'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeProvider';
import { useState } from 'react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 group flex-shrink-0"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {/* Sun icon for light mode */}
        <Sun 
          className={`absolute h-5 w-5 transition-all duration-300 ${
            theme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'
          }`}
          aria-hidden="true"
        />
        
        {/* Moon icon for dark mode */}
        <Moon 
          className={`absolute h-5 w-5 transition-all duration-300 ${
            theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute top-full mt-2 right-0 px-3 py-1.5 bg-[var(--panel)] border border-[var(--border)] rounded-lg shadow-lg whitespace-nowrap text-xs font-medium animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          {theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
        </div>
      )}
    </div>
  );
};

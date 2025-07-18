'use client';

import { ThemeProvider, useTheme } from './ThemeContext';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{
      padding: '10px 20px',
      background: theme === 'light' ? '#FFF' : '#333',
      color: theme === 'light' ? '#000' : '#FFF',
      border: '1px solid'
    }}>
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default function UseContextExample() {
    return (
        <ThemeProvider>
            <ThemeToggleButton />
        </ThemeProvider>
    )
}

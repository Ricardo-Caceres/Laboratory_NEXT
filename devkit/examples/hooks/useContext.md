
# `useContext` Hook

The `useContext` hook allows you to subscribe to React context without introducing nesting. It makes it easy to pass data through the component tree without having to pass props down manually at every level.

### When to use it
-   For managing global state like theme (dark/light mode), user authentication, or language preference.
-   When you need to share state between many components at different levels of the component tree.

### Example

Here is an example of using `useContext` to provide a theme to a component tree.

**1. Create the Context**

```tsx
// devkit/examples/hooks/context/ThemeContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context data
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create a custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
```

**2. Use the Provider in `layout.tsx`**

Wrap your application with the `ThemeProvider`.

```tsx
// src/app/layout.tsx
import { ThemeProvider } from '@/devkit/examples/hooks/context/ThemeContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**3. Use the Context in a Component**

```tsx
// devkit/examples/hooks/ThemeToggleButton.tsx
'use client';

import { useTheme } from '@/devkit/examples/hooks/context/ThemeContext';

export default function ThemeToggleButton() {
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
```

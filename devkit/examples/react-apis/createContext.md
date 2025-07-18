
# `React.createContext`

`React.createContext` creates a Context object. A Context object allows you to pass data through the component tree without having to pass props down manually at every level. This is useful for global data like the current authenticated user, theme, or preferred language.

### When to use it
-   For managing global state that many components need to access.
-   To avoid "prop drilling" (passing props through many layers of components).

### Syntax

```typescript
const MyContext = React.createContext(defaultValue);
```

-   `defaultValue`: The value that will be used by consumers when they don't have a matching Provider above them in the tree. This is useful for testing components in isolation without wrapping them.

### Components Provided by Context

-   `MyContext.Provider`: A React component that allows consuming components to subscribe to context changes. It accepts a `value` prop to be passed to consuming components.
-   `MyContext.Consumer`: (Legacy) A React component that subscribes to context changes. It requires a function as a child that receives the current context value and returns a React node. `useContext` is the modern and preferred way to consume context in functional components.

### Example

This example demonstrates how to create a theme context and consume it in a component.

**1. Create the Context (`ThemeContext.tsx`)**

```tsx
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

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

// Custom hook to consume the context (modern approach)
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
```

**2. Use the Provider in `layout.tsx` (or `_app.tsx` for Pages Router)**

```tsx
// src/app/layout.tsx (conceptual)
import { ThemeProvider } from './ThemeContext'; // Adjust path

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

**3. Consume the Context in a Component (`ThemeToggleButton.tsx`)**

```tsx
'use client';

import { useTheme } from './ThemeContext'; // Adjust path

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

### Key Points
-   Context is designed to share data that can be considered "global" for a tree of React components.
-   `useContext` is the preferred way to consume context in functional components.
-   Avoid using context for every prop; it can make component reuse more difficult.

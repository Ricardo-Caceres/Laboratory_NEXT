'use client';

import { ThemeProvider, useTheme } from './ThemeContext';
import CodeDisplay from '../../../components/CodeDisplay';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={`py-2 px-4 rounded border ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

function ThemedDisplay() {
  const { theme } = useTheme();
  return (
    <div className={`p-4 mt-4 rounded-lg ${theme === 'light' ? 'bg-blue-100 text-blue-800' : 'bg-purple-800 text-purple-100'}`}>
      <p>Current Theme: {theme}</p>
      <p>This content changes based on the theme context.</p>
    </div>
  );
}

export default function CreateContextExample({ codeContent }: { codeContent: { filePath: string; content: string }[] }) {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-white">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">React.createContext Example</h1>
          <p className="text-lg mb-4">`React.createContext` crea un objeto Contexto. Cuando React renderiza un componente que se suscribe a este objeto Contexto, leerá el valor de contexto actual del `Provider` más cercano en el árbol.</p>
          <ThemeProvider>
            <ThemeToggleButton />
            <ThemedDisplay />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

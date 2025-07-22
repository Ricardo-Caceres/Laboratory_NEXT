'use client';

import { ThemeProvider, useTheme } from './ThemeContext';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-6 py-3 rounded-lg shadow-md transition duration-300
        ${theme === 'light' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-700 text-white hover:bg-gray-800'}`}
    >
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

function ThemedContent() {
  const { theme } = useTheme();
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'}`}>
      <ThemeToggleButton />
    </div>
  );
}

export default function UseContextExample() {
    return (
        <ThemeProvider>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">`useContext` Hook Example</h1>
            <p className="text-lg mb-4">`useContext` te permite suscribirte a un Contexto de React sin anidar componentes. Es una forma de compartir valores como temas, configuraciones de usuario, o datos de autenticación a través de la jerarquía de componentes sin pasar props manualmente en cada nivel.</p>
            <ThemedContent />
        </ThemeProvider>
    )
}
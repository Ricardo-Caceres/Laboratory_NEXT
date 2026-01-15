'use client';

export function CreateContextDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">createContext</strong> crea un Context que permite pasar datos a través del árbol de componentes sin prop drilling.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Sintaxis</h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`const ThemeContext = createContext(defaultValue);

// Provider
<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>

// Consumer (con hook)
const theme = useContext(ThemeContext);`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Casos de uso</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Tema (dark/light mode)</li>
          <li>Usuario autenticado</li>
          <li>Idioma/i18n</li>
          <li>Configuración global</li>
        </ul>
      </section>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>⚠️ Performance:</strong> Context causa re-render de todos los consumers cuando el valor cambia. Usa múltiples contexts o state management para apps grandes.
        </p>
      </div>
    </div>
  );
}

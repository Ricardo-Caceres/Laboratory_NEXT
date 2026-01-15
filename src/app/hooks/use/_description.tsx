'use client';

export function UseDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">use</strong> es un Hook nuevo en React 19 que permite leer valores de recursos como Promises y Contexts en render.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Simplifica el data fetching y la lectura de context sin hooks adicionales.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Lee Promises:</strong> Await promises directamente en render</li>
          <li><strong>Lee Context:</strong> Alternativa más simple a useContext</li>
          <li><strong>Condicional:</strong> Se puede usar dentro de if/loops (único hook que puede)</li>
          <li><strong>Suspense integrado:</strong> Trabaja naturalmente con Suspense</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Uso con Promises
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)] mb-3">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`function UserProfile({ userPromise }) {
  // Suspende hasta que la promise se resuelva
  const user = use(userPromise);
  
  return <div>{user.name}</div>;
}`}
          </pre>
        </div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          El componente se suspende automáticamente mientras la Promise está pending.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Uso con Context
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)] mb-3">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`function Button() {
  // Más simple que useContext
  const theme = use(ThemeContext);
  
  return <button className={theme}>Click</button>;
}`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventaja única: Condicional
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)] mb-3">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`function Component({ enabled }) {
  // ✓ Permitido con use()
  if (enabled) {
    const data = use(dataPromise);
    return <div>{data}</div>;
  }
  
  return <div>Disabled</div>;
}

// ✗ NO permitido con otros hooks
if (enabled) {
  const [state] = useState(); // Error!
}`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Data fetching con Suspense</li>
          <li>Streaming de datos desde el servidor (Server Components)</li>
          <li>Leer context condicionalmente</li>
          <li>Componentes que reciben promises como props</li>
          <li>Progressive enhancement</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Diferencias con hooks tradicionales
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">use() puede:</h3>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Usarse dentro de if/loops</li>
              <li>Leer promises directamente</li>
              <li>Suspender el componente automáticamente</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Otros hooks NO pueden:</h3>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Deben estar en el top level</li>
              <li>No pueden leer promises</li>
              <li>Requieren useEffect para async</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Importante
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Requiere React 19+</li>
          <li>Debe usarse con Suspense boundary</li>
          <li>La Promise debe ser cacheable (no crear nuevas en cada render)</li>
          <li>No reemplaza todos los hooks, es complementario</li>
        </ul>
      </section>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">✨ Nuevo en React 19:</strong> use() es el primer hook que puede usarse condicionalmente, abriendo nuevas posibilidades para patterns de data fetching.
        </p>
      </div>
    </div>
  );
}

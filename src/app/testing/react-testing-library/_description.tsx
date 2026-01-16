'use client';

export function reacttestinglibraryDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">React Testing Library</strong> es THE forma recomendada de testear componentes React modernos.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Filosofía: "Cuanto más se parezcan tus tests a cómo se usa tu software, más confianza te pueden dar."
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>User-centric:</strong> Testea como usuario, no implementación</li>
          <li><strong>Queries accesibles:</strong> getByRole, getByLabelText, etc.</li>
          <li><strong>No shallow rendering:</strong> Renderiza componentes completos</li>
          <li><strong>Hooks-friendly:</strong> Funciona perfecto con hooks</li>
          <li><strong>Accessibility first:</strong> Te guía a escribir HTML accesible</li>
          <li><strong>Mantenido activamente:</strong> Por Kent C. Dodds y comunidad</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Queries recomendadas (prioridad)
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">1. getByRole</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Preferred. Accesible para todos. button, link, heading, etc.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">2. getByLabelText</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Para form inputs. Asegura que forms son accesibles.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">3. getByPlaceholderText</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Fallback para inputs sin label (no ideal, pero útil).
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">4. getByText</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Para texto visible. Bueno para non-interactive elements.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">⚠️ getByTestId</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Último recurso. Úsalo solo si no hay alternativa semántica.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Herramientas complementarias
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">@testing-library/user-event</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Simula interacciones de usuario más realistas que fireEvent.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">@testing-library/jest-dom</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Custom matchers: toBeInTheDocument(), toHaveClass(), etc.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">MSW</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Mock Service Worker para mockear APIs de forma realista.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas vs Enzyme
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Tests más confiables y mantenibles</li>
          <li>Promueve mejores prácticas de accesibilidad</li>
          <li>Funciona con React 18+ y features modernas</li>
          <li>No se rompe con refactors internos</li>
          <li>Testea comportamiento, no implementación</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Filosofía clave
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Principios guía:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Si no puedes testearlo como usuario, rediseña el test</li>
          <li>No testees detalles de implementación</li>
          <li>Usa queries accesibles siempre que sea posible</li>
          <li>Prefiere integración sobre aislamiento</li>
          <li>Espera comportamiento asíncrono con waitFor</li>
        </ul>
      </section>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">⭐ Gold standard:</strong> React Testing Library es EL estándar para testing de componentes React. Oficialmente recomendado por el equipo de React.
        </p>
      </div>
    </div>
  );
}

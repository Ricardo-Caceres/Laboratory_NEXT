'use client';

export function ControlledUncontrolledDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Controlled vs Uncontrolled Components</strong> - Dos enfoques fundamentales para manejar el estado de formularios y componentes interactivos en React.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué son componentes controlados y no controlados?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-4">
          <strong>Componentes Controlados:</strong> React controla completamente el valor del componente a través de state. Cada cambio actualiza el estado, que a su vez actualiza el componente. React es la "única fuente de verdad".
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>Componentes No Controlados:</strong> El DOM mantiene su propio estado interno. Accedes al valor cuando lo necesitas usando refs. Similar a HTML tradicional.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Componentes Controlados
        </h2>
        <div className="space-y-3">
          <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
            <strong>Ventajas:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
            <li>Control total sobre el valor en todo momento</li>
            <li>Validación en tiempo real mientras el usuario escribe</li>
            <li>Formato automático de entrada (ej: mayúsculas, máscaras)</li>
            <li>Deshabilitar submit hasta que el form sea válido</li>
            <li>Testing más fácil - el estado es predecible</li>
          </ul>
          <p className="text-[var(--foreground)] opacity-90 leading-relaxed mt-3">
            <strong>Desventajas:</strong> Más código boilerplate, re-renders en cada tecla
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Componentes No Controlados
        </h2>
        <div className="space-y-3">
          <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
            <strong>Ventajas:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
            <li>Menos código - más simple para casos básicos</li>
            <li>Mejor performance - menos re-renders</li>
            <li>Fácil integración con librerías no-React</li>
            <li>Útil para file inputs (siempre no controlados)</li>
          </ul>
          <p className="text-[var(--foreground)] opacity-90 leading-relaxed mt-3">
            <strong>Desventajas:</strong> Sin validación en tiempo real, testing más complejo
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Cuándo usar cada uno?
        </h2>
        <div className="space-y-3">
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="font-semibold text-green-900 mb-2">Usa Controlados cuando:</p>
            <ul className="list-disc pl-6 space-y-1 text-green-800 text-sm">
              <li>Necesitas validación en tiempo real</li>
              <li>Requieres formato automático de entrada</li>
              <li>El valor depende de otros valores</li>
              <li>Necesitas habilitar/deshabilitar submit dinámicamente</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="font-semibold text-blue-900 mb-2">Usa No Controlados cuando:</p>
            <ul className="list-disc pl-6 space-y-1 text-blue-800 text-sm">
              <li>Formularios simples sin validación compleja</li>
              <li>Solo necesitas el valor en submit</li>
              <li>Integración con librerías no-React</li>
              <li>Performance es crítica (muchos campos)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En el ejemplo interactivo, verás el mismo formulario implementado de ambas formas, comparando código, comportamiento y casos de uso apropiados para cada enfoque.
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>💡 Tip:</strong> En React moderno, considera usar librerías como React Hook Form que combinan lo mejor de ambos mundos: performance de no controlados con API de controlados.
        </p>
      </div>
    </div>
  );
}

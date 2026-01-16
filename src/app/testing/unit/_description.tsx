'use client';

export function unitDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Unit Testing</strong> es la práctica de testear unidades individuales de código de forma aislada.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Cada test verifica que una función, método o componente específico funciona correctamente.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Aislamiento:</strong> Testea una unidad sin dependencias externas</li>
          <li><strong>Rapidez:</strong> Tests muy rápidos de ejecutar</li>
          <li><strong>Granularidad:</strong> Identifica exactamente qué falla</li>
          <li><strong>Mocking:</strong> Simula dependencias y side effects</li>
          <li><strong>Documentación:</strong> Los tests documentan comportamiento esperado</li>
          <li><strong>Confianza:</strong> Refactoriza código sin miedo a romper funcionalidad</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Qué testear
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Funciones puras y utilities</li>
          <li>Validaciones y transformaciones de datos</li>
          <li>Lógica de negocio</li>
          <li>Componentes individuales (props, rendering, eventos)</li>
          <li>Custom hooks</li>
          <li>Reducers y state management</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Buenas prácticas
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">AAA Pattern</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Arrange (preparar), Act (ejecutar), Assert (verificar).
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Un concepto por test</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Cada test debe verificar un solo comportamiento.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Nombres descriptivos</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              El nombre del test debe describir qué testea y el resultado esperado.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-green-600 dark:text-green-400">🎯 Fundamento esencial:</strong> Unit testing es la base de cualquier estrategia de testing. Tests rápidos, confiables y fáciles de mantener.
        </p>
      </div>
    </div>
  );
}

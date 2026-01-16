'use client';

export function TDDDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">TDD (Test-Driven Development)</strong> es una metodología donde escribes los tests ANTES de escribir el código de producción.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Cambia completamente tu approach al desarrollo: primero defines el comportamiento esperado, luego lo implementas.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          El ciclo Red-Green-Refactor
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">🔴 Red</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Escribe un test que falla (porque la funcionalidad no existe aún).
            </p>
          </div>
          <div>
            <h3 className="font-bold text-green-600 dark:text-green-400 mb-2">🟢 Green</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Escribe el código mínimo necesario para que el test pase.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">🔵 Refactor</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Mejora el código manteniendo los tests en verde.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Beneficios de TDD
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Diseño mejor:</strong> Código más modular y testeable</li>
          <li><strong>Menos bugs:</strong> Problemas detectados inmediatamente</li>
          <li><strong>Documentación:</strong> Tests documentan casos de uso</li>
          <li><strong>Confianza:</strong> Refactoriza sin miedo</li>
          <li><strong>Coverage alto:</strong> ~100% code coverage naturalmente</li>
          <li><strong>Foco:</strong> Te obliga a pensar antes de codear</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo usar TDD
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Lógica de negocio compleja</li>
          <li>Algoritmos y validaciones críticas</li>
          <li>Features bien definidos desde el inicio</li>
          <li>Fixing bugs (write failing test first)</li>
          <li>APIs y bibliotecas públicas</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo NO usar TDD
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Prototipos y experimentos</li>
          <li>UI/UX aún en diseño</li>
          <li>Spikes de investigación</li>
          <li>Cuando requirements son muy volátiles</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          TDD en React
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Ejemplo de workflow:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Escribe test: "Button renders with correct text"</li>
          <li>Test falla (componente no existe)</li>
          <li>Crea componente básico que pase el test</li>
          <li>Escribe test: "Button calls onClick when clicked"</li>
          <li>Implementa onClick handler</li>
          <li>Refactoriza componente mejorando código</li>
        </ul>
      </section>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong className="text-yellow-600 dark:text-yellow-400">⚡ Práctica avanzada:</strong> TDD requiere disciplina pero produce código de altísima calidad. Es un skill que se mejora con práctica constante.
        </p>
      </div>
    </div>
  );
}

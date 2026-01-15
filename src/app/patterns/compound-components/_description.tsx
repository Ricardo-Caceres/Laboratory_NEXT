'use client';

export function CompoundComponentsDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Compound Components Pattern</strong> es una de las técnicas más poderosas y elegantes para diseñar APIs de componentes en React.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Permite crear familias de componentes que trabajan juntos de manera armoniosa, compartiendo estado implícito a través de Context API.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          🎯 ¿Qué problema resuelve?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Cuando construyes componentes complejos como Accordions, Tabs, Dropdowns o Modals, típicamente te enfrentas a un dilema:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>¿Pasas 50 props para cada caso de uso posible?</li>
          <li>¿O creas múltiples componentes específicos para cada variación?</li>
        </ul>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mt-3">
          Los Compound Components ofrecen una tercera vía superior: <strong>una API declarativa y componible</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ⚙️ ¿Cómo funciona?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Los subcomponentes se comunican implícitamente a través de un contexto compartido, coordinando su comportamiento sin pasar props explícitamente.
        </p>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <pre className="text-[var(--foreground)] font-mono text-sm overflow-x-auto">
{`<Accordion>
  <Accordion.Item>
    <Accordion.Header>Título</Accordion.Header>
    <Accordion.Body>Contenido</Accordion.Body>
  </Accordion.Item>
</Accordion>`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ✨ Beneficios Clave
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">🎨 Flexibilidad Total</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Los consumidores tienen control absoluto sobre la estructura, orden y presentación de los subcomponentes.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">🔒 Encapsulación</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              La lógica interna (estado, eventos, coordinación) está completamente encapsulada. Los cambios internos no rompen la API externa.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">♻️ Reutilización Avanzada</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Los subcomponentes pueden ser reutilizados en diferentes contextos o combinados de formas inesperadas.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">📖 API Intuitiva</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              La API se lee como HTML semántico. Es auto-documentada y fácil de entender.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">🧪 Testabilidad</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Cada subcomponente puede ser testeado de forma aislada, y la lógica compartida está centralizada.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          🏢 Casos de Uso Reales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Design Systems:</strong> React Aria, Radix UI, Headless UI</li>
          <li><strong>Form Libraries:</strong> React Hook Form, Formik</li>
          <li><strong>Data Tables:</strong> TanStack Table</li>
          <li><strong>Navigation:</strong> React Router (Routes/Route)</li>
          <li><strong>Layouts:</strong> Chakra UI, Material UI</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ⚡ Cuándo NO usar este patrón
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Componentes simples con 2-3 props</li>
          <li>Cuando la relación entre componentes no es clara</li>
          <li>Si necesitas compatibilidad con frameworks que no soportan Context</li>
          <li>Performance crítica (Context puede causar re-renders)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          🔥 Tips Pro
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Combina con TypeScript para type-safe APIs</li>
          <li>Usa displayName para mejor debugging</li>
          <li>Considera agregar validación de children con React.Children</li>
          <li>Documenta qué subcomponentes son requeridos vs opcionales</li>
          <li>Usa React.memo en subcomponentes para optimizar re-renders</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Este patrón es la base de muchas bibliotecas UI modernas. Domínalo y podrás crear componentes increíblemente flexibles y mantenibles.
        </p>
      </div>
    </div>
  );
}

'use client';

export function StateReducerDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">State Reducer Pattern</strong> - Permite a los usuarios de un componente customizar cómo se manejan los cambios de estado internos, proporcionando un reducer que puede modificar o rechazar transiciones de estado.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es el State Reducer Pattern?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-4">
          El patrón State Reducer da a los usuarios de tu componente o hook la capacidad de controlar completamente las transiciones de estado internas. Similar a cómo Redux permite interceptar y modificar acciones, este patrón permite que los usuarios inyecten su propia lógica en el ciclo de actualización de estado.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Popularizado por Kent C. Dodds y usado en librerías como Downshift, este patrón es la forma más flexible de dar control sobre el comportamiento de componentes sin sacrificar su funcionalidad core.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cómo funciona
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm">
          <pre className="text-gray-800">{`const stateReducer = (state, action) => {
  if (action.type === 'INCREMENT' && state.count >= 10) {
    return state; // Bloquear incremento
  }
  return defaultReducer(state, action);
};

const counter = useCounter({ stateReducer });`}</pre>
        </div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mt-3">
          El usuario puede interceptar cualquier cambio de estado y decidir si permitirlo, modificarlo, o bloquearlo completamente.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Beneficios
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Máxima flexibilidad:</strong> Usuarios tienen control total sobre el comportamiento</li>
          <li><strong>Inversion of Control:</strong> El componente es altamente reutilizable</li>
          <li><strong>Composición:</strong> Múltiples reducers pueden componerse</li>
          <li><strong>Testing:</strong> Lógica customizada fácil de testear aisladamente</li>
          <li><strong>No rompe abstracción:</strong> Funcionalidad core permanece intacta</li>
          <li><strong>Debugging:</strong> Todas las transiciones de estado son explícitas</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Límites customizados:</strong> Contador con máximo/mínimo dinámico</li>
          <li><strong>Validación compleja:</strong> Rechazar cambios que violan reglas de negocio</li>
          <li><strong>Logging/Analytics:</strong> Trackear todos los cambios de estado</li>
          <li><strong>Comportamiento condicional:</strong> Cambiar lógica basándose en contexto</li>
          <li><strong>Undo/Redo:</strong> Implementar historial de cambios</li>
          <li><strong>A/B Testing:</strong> Variantes de comportamiento en el mismo componente</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          State Reducer vs Props Getter
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Estos patrones se complementan perfectamente: <strong>State Reducer</strong> controla el <em>comportamiento</em> (cómo cambia el estado), mientras <strong>Props Getter</strong> controla el <em>renderizado</em> (cómo se ve). Juntos proporcionan control total.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En el ejemplo interactivo, verás un contador con state reducer que permite implementar diferentes comportamientos: límite máximo, incrementos personalizados, logging, y más - todo sin modificar el hook base.
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>💡 Tip:</strong> El State Reducer Pattern es ideal para librerías y componentes reutilizables donde necesitas balance entre funcionalidad out-of-the-box y customización total.
        </p>
      </div>
    </div>
  );
}

'use client';

export function ReactHooksDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">React Hooks para State Management</strong> - Usa useState, useReducer y Context API nativos de React.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          No necesitas librerías externas para state management simple a moderado.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Herramientas nativas
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">useState</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Estado local de componente. Perfecto para UI state simple.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">useReducer</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Estado complejo con lógica de actualización centralizada.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Context API</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Compartir estado entre componentes sin prop drilling.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">useContext</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Consume valores del Context. Simple y directo.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Sin dependencias externas</li>
          <li>Parte de React - siempre actualizado</li>
          <li>Cero configuración</li>
          <li>Lightweight (sin bundle size extra)</li>
          <li>Fácil de aprender</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Desventajas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Context puede causar re-renders innecesarios</li>
          <li>No tiene DevTools incorporado</li>
          <li>Requiere más código para apps complejas</li>
          <li>No tiene middleware ecosystem</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Cuándo usar
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Aplicaciones pequeñas</li>
          <li>Estado simple a moderado</li>
          <li>Quieres evitar dependencias</li>
          <li>Prototipado rápido</li>
          <li>Estado mayormente local</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Patrón: Context + useReducer
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Combinar Context con useReducer te da algo similar a Redux:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>State centralizado en Context</li>
          <li>Lógica de actualización en reducer</li>
          <li>Dispatch actions para cambios</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Para muchas apps, React Hooks nativos son suficientes. Solo agrega una librería si realmente la necesitas.
        </p>
      </div>
    </div>
  );
}

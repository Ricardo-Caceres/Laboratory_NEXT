'use client';

export function ObserverPatternDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Observer Pattern</strong> define una dependencia uno-a-muchos entre objetos, donde cuando un objeto cambia de estado, todos sus dependientes son notificados.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Conceptos clave
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Subject:</strong> Objeto que mantiene lista de observers</li>
          <li><strong>Observer:</strong> Objeto que se suscribe a cambios</li>
          <li><strong>Notificación:</strong> Cuando el subject cambia, notifica a todos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Event emitters (EventEmitter en Node.js)</li>
          <li>Estado reactivo (MobX, Signals)</li>
          <li>WebSocket connections</li>
          <li>Real-time updates</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En React, useState y useEffect implementan variaciones del Observer pattern.
        </p>
      </div>
    </div>
  );
}

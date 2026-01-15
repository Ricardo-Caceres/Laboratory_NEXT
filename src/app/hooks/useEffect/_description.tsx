'use client';

export function UseEffectDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">useEffect</strong> es el Hook para manejar efectos secundarios (side effects) en componentes funcionales.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Reemplaza los métodos del ciclo de vida como <code className="text-[var(--primary)]">componentDidMount</code>, <code className="text-[var(--primary)]">componentDidUpdate</code> y <code className="text-[var(--primary)]">componentWillUnmount</code>.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué son los efectos secundarios?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          Los efectos secundarios son operaciones que afectan algo fuera del alcance de la función: llamadas a APIs, manipulación del DOM, suscripciones, timers, etc.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En React, estos deben manejarse de forma especial para mantener la predictibilidad.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características principales
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Sincronización:</strong> Mantiene tu componente sincronizado con sistemas externos</li>
          <li><strong>Ejecución asíncrona:</strong> Se ejecuta después de que React actualiza el DOM</li>
          <li><strong>Limpieza automática:</strong> Puedes retornar una función de cleanup</li>
          <li><strong>Control de ejecución:</strong> El array de dependencias controla cuándo se ejecuta</li>
          <li><strong>Agrupación (batching):</strong> React puede agrupar múltiples efectos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Obtener datos de una API (data fetching)</li>
          <li>Suscripciones a eventos (WebSocket, event listeners)</li>
          <li>Manipulación directa del DOM</li>
          <li>Temporizadores y intervalos (setTimeout, setInterval)</li>
          <li>Sincronización con servicios de terceros (analytics, ads)</li>
          <li>Actualizar el título del documento</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Sintaxis
        </h2>
        <div className="bg-[var(--code-bg)] p-4 rounded border border-[var(--border)]">
          <code className="text-[var(--foreground)] font-mono text-sm">
            useEffect(() ={'>'} {'{'} /* efecto */ return () ={'>'} {'{'} /* limpieza */ {'}'}; {'}'}, [deps]);
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Array de dependencias - Muy importante
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] opacity-90">
          <li>
            <strong>Sin array:</strong> Se ejecuta después de CADA renderizado (raramente útil)
          </li>
          <li>
            <strong>Array vacío []:</strong> Se ejecuta SOLO UNA VEZ al montar el componente
          </li>
          <li>
            <strong>Con deps [a, b]:</strong> Se ejecuta cuando <code className="text-[var(--primary)]">a</code> o <code className="text-[var(--primary)]">b</code> cambian
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Reglas de limpieza
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Siempre limpia suscripciones, timers y event listeners</li>
          <li>La función de limpieza se ejecuta ANTES del próximo efecto</li>
          <li>También se ejecuta cuando el componente se desmonta</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Buenas prácticas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Un efecto por responsabilidad (no mezclar lógica no relacionada)</li>
          <li>Siempre incluye todas las dependencias que uses</li>
          <li>Evita efectos que dependan de sí mismos (loops infinitos)</li>
          <li>Usa ESLint plugin para detectar dependencias faltantes</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En este ejemplo, demostramos cómo usar useEffect para obtener datos de una API cuando el componente se monta, y cómo limpiar correctamente recursos.
        </p>
      </div>
    </div>
  );
}

'use client';

export function RxJSDescription() {
  return (
    <div className="space-y-8">
      {/* Intro */}
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">RxJS (Reactive Extensions for JavaScript)</strong> es una biblioteca para programación reactiva usando Observables.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Permite manejar flujos de datos asíncronos complejos de manera declarativa.
        </p>
      </div>

      {/* Conceptos Fundamentales */}
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          📚 CONCEPTOS FUNDAMENTALES
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Observable</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-1">
              Fuente de datos que emite valores a lo largo del tiempo (stream).
            </p>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Similar a un array, pero los valores llegan asíncronamente.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Observer</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-1">
              Consumidor que reacciona a valores emitidos.
            </p>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Implementa callbacks: next, error, complete.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Subscription</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-1">
              Conexión activa entre Observable y Observer.
            </p>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Debe hacerse unsubscribe para evitar memory leaks.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Operators</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-1">
              Funciones puras que transforman, filtran o combinan Observables.
            </p>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Se encadenan en pipelines usando pipe().
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Subject</h3>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-1">
              Observable que también es Observer.
            </p>
            <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
              Puede emitir valores y suscribirse a otros Observables.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          🎯 BENEFICIOS DE RXJS CON REACT
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-3">1. Gestión Compleja de Estado Asíncrono</h3>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
              <li>Maneja múltiples streams de datos simultáneos</li>
              <li>Coordina llamadas API dependientes elegantemente</li>
              <li>Gestiona race conditions automáticamente</li>
              <li>Composición de operaciones asíncronas</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-3">2. Composición Declarativa</h3>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
              <li>Pipelines de transformación legibles y expresivos</li>
              <li>Separación clara de lógica de negocio del UI</li>
              <li>Código más testeable y mantenible</li>
              <li>Reutilización de operadores</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-3">3. Control Avanzado de Eventos</h3>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
              <li>Debouncing y throttling automático para inputs</li>
              <li>Cancelación de requests automática</li>
              <li>Retry logic robusto con exponential backoff</li>
              <li>Error handling centralizado y componible</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-3">4. WebSockets y Real-time</h3>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
              <li>Integración natural con WebSockets y Server-Sent Events</li>
              <li>Manejo automático de backpressure</li>
              <li>Reconnection automática con retry configurable</li>
              <li>Sincronización de múltiples fuentes de datos</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-3">5. Performance Optimizado</h3>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
              <li>Prevención de memory leaks con auto-unsubscribe</li>
              <li>Compartir computations entre múltiples suscriptores</li>
              <li>Lazy evaluation (solo ejecuta cuando hay suscriptor)</li>
              <li>Optimización de re-renders en componentes React</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Consideraciones */}
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ⚠️ CONSIDERACIONES IMPORTANTES
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-3">Curva de Aprendizaje Pronunciada</h3>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
              <li>Más de 100+ operadores diferentes para aprender</li>
              <li>Conceptos de programación funcional reactiva</li>
              <li>Debugging complejo que requiere marble diagrams</li>
              <li>Tiempo de onboarding significativo para nuevos desarrolladores</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-3">Bundle Size</h3>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
              <li>Aproximadamente 50KB minified</li>
              <li>Mitigable con tree-shaking en webpack/vite</li>
              <li>Alternativas más ligeras: most.js, xstream</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-3">Riesgo de Over-engineering</h3>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
              <li>Para casos simples, useState y useEffect son suficientes</li>
              <li>No todo necesita ser un Observable</li>
              <li>Agregar complejidad innecesaria dificulta mantenimiento</li>
              <li>Evalúa si el problema justifica usar RxJS</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-3">Integración con React</h3>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
              <li>Requiere crear hooks personalizados</li>
              <li>No es nativo de React (filosofía diferente a useState)</li>
              <li>Puede causar re-renders innecesarios si no se optimiza</li>
              <li>Necesita manejo cuidadoso del lifecycle de componentes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cuándo usar */}
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          📍 CUÁNDO USAR RXJS
        </h2>

        <h3 className="font-bold text-green-500 mb-4 text-lg">✅ USA RXJS PARA:</h3>

        <div className="space-y-5 mb-8">
          <div>
            <h4 className="font-bold text-[var(--primary)] mb-2">Autocomplete y Search Avanzado</h4>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Debouncing de inputs del usuario</li>
              <li>Cancelación automática de requests anteriores</li>
              <li>Manejo correcto del orden de respuestas</li>
              <li>Evita race conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--primary)] mb-2">Drag and Drop Complejo</h4>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Coordinación de múltiples eventos del mouse</li>
              <li>Cálculos en tiempo real de posición</li>
              <li>Gestión de estado durante el drag</li>
              <li>Composición de eventos touchstart, mousemove, etc</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--primary)] mb-2">Dashboards en Tiempo Real</h4>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Combinación de WebSocket más polling</li>
              <li>Transformaciones y agregaciones de datos</li>
              <li>Actualización reactiva del UI</li>
              <li>Manejo de múltiples fuentes simultáneas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--primary)] mb-2">Aplicaciones de Chat</h4>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Mensajes en tiempo real vía WebSocket</li>
              <li>Presence indicators (usuarios online/offline)</li>
              <li>Typing indicators mientras se escribe</li>
              <li>Sincronización de estado</li>
            </ul>
          </div>
        </div>

        <h3 className="font-bold text-red-500 mb-4 text-lg">❌ NO USES RXJS PARA:</h3>

        <div className="space-y-5">
          <div>
            <h4 className="font-bold text-[var(--primary)] mb-2">Simple Fetch de Datos</h4>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Usa SWR o React Query en su lugar</li>
              <li>Mejor DX para REST APIs simples</li>
              <li>Cache automático y sincronización incluidos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--primary)] mb-2">Formularios Básicos</h4>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Formik o React Hook Form son mejores opciones</li>
              <li>Menos código para casos comunes</li>
              <li>Validación más simple y directa</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--primary)] mb-2">Proyectos Pequeños</h4>
            <ul className="list-disc pl-6 space-y-1 text-[var(--foreground)] opacity-90">
              <li>Sin complejidad asíncrona significativa</li>
              <li>Overhead no justificado</li>
              <li>Mantenimiento más simple sin RxJS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mejores Prácticas */}
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          💡 MEJORES PRÁCTICAS
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-3">1. Encapsula en Hooks Personalizados</h3>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
              <li>Crea hooks reutilizables que encapsulen lógica RxJS</li>
              <li>Separa concerns y mejora testability</li>
              <li>Hace el código más limpio y mantenible</li>
              <li>Facilita testing unitario</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-3">2. Cleanup Automático Siempre</h3>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
              <li>Retorna unsubscribe en useEffect sin falta</li>
              <li>Evita memory leaks críticos</li>
              <li>Usa takeUntil para cancelar automáticamente</li>
              <li>Patrón destroy$ subject recomendado</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-3">3. Evita Nested Subscriptions</h3>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
              <li>Usa operadores como switchMap, mergeMap, concatMap</li>
              <li>Código más plano y legible</li>
              <li>Mejor manejo de errores</li>
              <li>Performance mejorado</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[var(--primary)] mb-3">4. TypeScript Siempre</h3>
            <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
              <li>Define tipos explícitos para tus Observables</li>
              <li>Mejor autocomplete y detección de errores</li>
              <li>Documentación implícita del código</li>
              <li>Refactoring más seguro</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

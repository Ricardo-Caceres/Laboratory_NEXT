'use client';

export function StrategyPatternDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Strategy Pattern</strong> - Define una familia de algoritmos, encapsula cada uno de ellos y los hace intercambiables, permitiendo que el algoritmo varíe independientemente de los clientes que lo utilizan.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es el Strategy Pattern?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-4">
          El patrón Strategy permite definir una familia de algoritmos relacionados, encapsularlos en clases separadas, y hacerlos intercambiables. El patrón permite que el algoritmo varíe independientemente de los clientes que lo usan, facilitando el cambio de comportamiento en tiempo de ejecución.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Este patrón es especialmente útil cuando tienes múltiples formas de realizar una operación y quieres poder cambiar entre ellas sin modificar el código cliente.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Componentes del patrón
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Context:</strong> Mantiene una referencia a la estrategia y delega el trabajo</li>
          <li><strong>Strategy:</strong> Interfaz común para todas las estrategias concretas</li>
          <li><strong>ConcreteStrategy:</strong> Implementaciones específicas del algoritmo</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Beneficios
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Elimina condicionales:</strong> Reemplaza largos if/else o switch con objetos</li>
          <li><strong>Principio Open/Closed:</strong> Añade nuevas estrategias sin modificar código existente</li>
          <li><strong>Runtime flexibility:</strong> Cambia algoritmos en tiempo de ejecución</li>
          <li><strong>Aislamiento:</strong> Cada estrategia está encapsulada en su propia clase</li>
          <li><strong>Testing:</strong> Facilita probar cada estrategia de forma independiente</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Sistemas de pago:</strong> Diferentes métodos de pago (tarjeta, PayPal, transferencia)</li>
          <li><strong>Algoritmos de ordenamiento:</strong> QuickSort, MergeSort, BubbleSort</li>
          <li><strong>Compresión de archivos:</strong> ZIP, RAR, TAR</li>
          <li><strong>Validación:</strong> Diferentes reglas de validación según contexto</li>
          <li><strong>Autenticación:</strong> OAuth, JWT, Basic Auth</li>
          <li><strong>Pricing:</strong> Diferentes estrategias de cálculo de precios</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En el ejemplo interactivo, verás un carrito de compras con diferentes estrategias de descuento: descuento por cantidad, descuento porcentual, y descuento de temporada. Puedes cambiar la estrategia dinámicamente y ver cómo afecta al precio final.
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>💡 Tip:</strong> Si te encuentras con largos bloques if/else que seleccionan diferentes algoritmos, es una señal clara de que el Strategy Pattern puede mejorar tu código.
        </p>
      </div>
    </div>
  );
}

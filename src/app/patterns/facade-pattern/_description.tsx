'use client';

export function FacadePatternDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Facade Pattern</strong> - Proporciona una interfaz simplificada a un conjunto complejo de clases, bibliotecas o subsistemas, facilitando su uso.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es el Facade Pattern?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-4">
          El patrón Facade (fachada) oculta la complejidad de un sistema proporcionando una interfaz simplificada. Actúa como una capa de abstracción que coordina múltiples subsistemas complejos detrás de una API simple y unificada.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Este patrón no añade nueva funcionalidad, sino que simplifica el uso de funcionalidad existente, haciéndola más accesible y fácil de entender para los clientes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Beneficios
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Simplifica interfaces complejas:</strong> Proporciona métodos simples para operaciones complejas</li>
          <li><strong>Desacoplamiento:</strong> Aísla el código cliente de la complejidad del subsistema</li>
          <li><strong>Facilita el uso:</strong> Reduce la curva de aprendizaje de sistemas complejos</li>
          <li><strong>Reduce dependencias:</strong> Los clientes solo dependen de la fachada, no del subsistema</li>
          <li><strong>Punto de entrada único:</strong> Centraliza el acceso a funcionalidad relacionada</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>APIs de servicios:</strong> Simplificar llamadas a múltiples endpoints relacionados</li>
          <li><strong>Bibliotecas complejas:</strong> Wrapper simple para librerías con muchas opciones</li>
          <li><strong>Sistemas legacy:</strong> Interfaz moderna para sistemas antiguos complejos</li>
          <li><strong>Configuración compleja:</strong> Simplificar la inicialización de múltiples componentes</li>
          <li><strong>Operaciones multi-paso:</strong> Encapsular workflows complejos en un solo método</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En el ejemplo interactivo, verás una fachada de <code className="px-2 py-1 bg-gray-100 rounded text-sm">HomeTheaterFacade</code> que simplifica el uso de múltiples dispositivos (DVD, proyector, luces, sonido). En lugar de controlar cada dispositivo individualmente, la fachada proporciona métodos simples como <code className="px-2 py-1 bg-gray-100 rounded text-sm">watchMovie()</code> y <code className="px-2 py-1 bg-gray-100 rounded text-sm">endMovie()</code>.
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>💡 Tip:</strong> El Facade Pattern no restringe el acceso directo a los subsistemas - los clientes aún pueden usarlos directamente si necesitan funcionalidad avanzada. La fachada es solo una conveniencia.
        </p>
      </div>
    </div>
  );
}

'use client';

export function CommandPatternDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Command Pattern</strong> - Encapsula una solicitud como un objeto, permitiendo parametrizar clientes con diferentes solicitudes, encolar operaciones, y soportar operaciones reversibles (undo/redo).
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es el Command Pattern?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-4">
          El patrón Command convierte una solicitud en un objeto independiente que contiene toda la información sobre la solicitud. Esta transformación permite parametrizar métodos con diferentes solicitudes, retrasar o encolar la ejecución de una solicitud, y soportar operaciones reversibles.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Desacopla el objeto que invoca la operación del objeto que sabe cómo ejecutarla, promoviendo el principio de responsabilidad única y facilitando la extensibilidad.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Componentes del patrón
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Command:</strong> Interfaz que declara el método de ejecución</li>
          <li><strong>ConcreteCommand:</strong> Implementa la operación y mantiene referencia al receptor</li>
          <li><strong>Receiver:</strong> Sabe cómo ejecutar la operación real</li>
          <li><strong>Invoker:</strong> Solicita la ejecución del comando</li>
          <li><strong>Client:</strong> Crea y configura objetos de comando concretos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Beneficios
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Principio Open/Closed:</strong> Puedes introducir nuevos comandos sin romper código existente</li>
          <li><strong>Undo/Redo:</strong> Implementa fácilmente operaciones reversibles manteniendo un historial</li>
          <li><strong>Desacoplamiento:</strong> Separa objetos que invocan operaciones de los que las ejecutan</li>
          <li><strong>Queue de operaciones:</strong> Puedes encolar, registrar y ejecutar comandos de forma diferida</li>
          <li><strong>Macros:</strong> Combina comandos simples en comandos complejos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso comunes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Editores de texto:</strong> Implementar undo/redo de operaciones</li>
          <li><strong>Sistemas transaccionales:</strong> Registrar y revertir operaciones</li>
          <li><strong>Gestión de tareas:</strong> Encolar y programar operaciones para ejecución posterior</li>
          <li><strong>UI con acciones complejas:</strong> Botones de toolbar que ejecutan diferentes comandos</li>
          <li><strong>Logging y auditoría:</strong> Registrar todas las operaciones ejecutadas</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo práctico
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          En el ejemplo interactivo, verás un editor de texto simple que implementa comandos para escribir, borrar y formatear texto. Cada comando es un objeto que puede ejecutarse y deshacerse, manteniendo un historial completo de operaciones.
        </p>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          <strong>💡 Tip:</strong> El patrón Command es fundamental en aplicaciones que necesitan undo/redo, logging de operaciones, o ejecución diferida de acciones.
        </p>
      </div>
    </div>
  );
}

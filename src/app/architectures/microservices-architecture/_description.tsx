'use client';

export function MicroservicesArchitectureDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Microservices</strong> divide el backend en servicios pequeños e independientes.
        </p>
      </div>
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Características</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Cada servicio maneja una capacidad de negocio</li>
          <li>Deploy independiente</li>
          <li>Base de datos por servicio</li>
          <li>Comunicación vía APIs (REST, gRPC, eventos)</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">En Next.js/React</h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Tu frontend consume múltiples microservicios backend. Next.js API routes pueden actuar como BFF (Backend for Frontend).
        </p>
      </section>
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Microservices es una arquitectura de backend, pero afecta cómo estructuras tu app React/Next.js.
        </p>
      </div>
    </div>
  );
}

'use client';

export function ThreeDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Three.js</strong> es la biblioteca líder para crear gráficos 3D en el navegador usando WebGL.
        </p>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Con React Three Fiber puedes usar Three.js de forma declarativa en React.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Características
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>3D Graphics:</strong> Modelos, luces, cámaras, materiales</li>
          <li><strong>WebGL:</strong> Hardware-accelerated rendering</li>
          <li><strong>Animaciones:</strong> Sistema de animación completo</li>
          <li><strong>React Three Fiber:</strong> Integración React declarativa</li>
          <li><strong>GLTF/GLB:</strong> Importa modelos 3D</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Product visualizers (e-commerce 3D)</li>
          <li>Games y experiencias interactivas</li>
          <li>Data visualization 3D</li>
          <li>AR/VR experiences</li>
          <li>Portfolios creativos</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          Three.js + React Three Fiber permite crear experiencias 3D inmersivas directamente en Next.js.
        </p>
      </div>
    </div>
  );
}

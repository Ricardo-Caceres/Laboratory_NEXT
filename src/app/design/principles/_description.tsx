export default function DesignPrinciplesDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Los principios de diseño fundamentales guían la creación de interfaces efectivas y atractivas.
        Aprende balance, contraste, jerarquía, espaciado y más.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎨 Principios fundamentales</h3>
          <ul className="space-y-2">
            <li>✓ Balance - Visual equilibrium</li>
            <li>✓ Contraste - Diferenciación clara</li>
            <li>✓ Jerarquía - Orden de importancia</li>
            <li>✓ Proximidad - Elementos relacionados</li>
            <li>✓ Repetición - Consistencia</li>
            <li>✓ Espacio en blanco - Respiración</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Leyes de UX</h3>
          <ul className="space-y-2">
            <li>• Hick's Law - Menos opciones, mejor</li>
            <li>• Fitts's Law - Tamaño y distancia</li>
            <li>• Miller's Law - 7±2 elementos</li>
            <li>• Jakob's Law - Familiaridad</li>
            <li>• Gestalt - Percepción visual</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">✅ Aplicación práctica</p>
        <ul className="space-y-1 text-sm">
          <li>• Jerarquía visual - Tamaños, colores, contraste</li>
          <li>• Consistencia - Mismo estilo en toda la app</li>
          <li>• Feedback - Respuesta a acciones del usuario</li>
          <li>• Simplicidad - Menos es más</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">🎨 Gestalt Principles</p>
        <ul className="space-y-1 text-sm">
          <li>• Proximity - Elementos cercanos se perciben juntos</li>
          <li>• Similarity - Elementos similares se agrupan</li>
          <li>• Continuity - Seguimos líneas visuales</li>
          <li>• Closure - Completamos formas incompletas</li>
        </ul>
      </div>
    </>
  );
}

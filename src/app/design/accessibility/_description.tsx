export default function AccessibilityDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        La accesibilidad web (a11y) asegura que todos puedan usar tu aplicación, incluyendo
        personas con discapacidades. Aprende ARIA, navegación por teclado y best practices.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">♿ Principios WCAG</h3>
          <ul className="space-y-2">
            <li>✓ Perceivable - Información presentable</li>
            <li>✓ Operable - UI navegable</li>
            <li>✓ Understandable - Contenido comprensible</li>
            <li>✓ Robust - Compatible con tecnologías</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔧 Técnicas</h3>
          <ul className="space-y-2">
            <li>• Semantic HTML</li>
            <li>• ARIA attributes</li>
            <li>• Keyboard navigation</li>
            <li>• Focus management</li>
            <li>• Alt text para imágenes</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">✅ Checklist básico</p>
        <ul className="space-y-1 text-sm">
          <li>□ Todo interactivo accesible por teclado</li>
          <li>□ Color contrast ratio adecuado (4.5:1)</li>
          <li>□ Texto alternativo en imágenes</li>
          <li>□ Labels en formularios</li>
          <li>□ Headings jerárquicos (h1-h6)</li>
          <li>□ Focus visible</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">🛠️ Herramientas</p>
        <ul className="space-y-1 text-sm">
          <li>• Lighthouse - Auditoría automática</li>
          <li>• axe DevTools - Testing a11y</li>
          <li>• Screen readers - NVDA, JAWS, VoiceOver</li>
          <li>• Color contrast checkers</li>
        </ul>
      </div>
    </>
  );
}

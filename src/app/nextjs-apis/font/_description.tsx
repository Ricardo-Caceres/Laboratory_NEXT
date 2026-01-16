export default function NextFontDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        next/font optimiza automáticamente las fuentes con self-hosting, eliminando round-trips
        externos. Soporta Google Fonts y fuentes locales con cero layout shift.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">✨ Ventajas</h3>
          <ul className="space-y-2">
            <li>✓ Self-hosted - Sin requests externos</li>
            <li>✓ Zero layout shift - CLS = 0</li>
            <li>✓ Automático - Build time optimization</li>
            <li>✓ Subset fonts - Solo caracteres usados</li>
            <li>✓ Variable fonts - Múltiples pesos</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔧 Opciones</h3>
          <ul className="space-y-2">
            <li>• Google Fonts - next/font/google</li>
            <li>• Local Fonts - next/font/local</li>
            <li>• Variable fonts - Un archivo</li>
            <li>• Subsets - Optimización idioma</li>
            <li>• Preload - Precarga automática</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Best practices</p>
        <ul className="space-y-1 text-sm">
          <li>• Define fuentes en un archivo central</li>
          <li>• Usa variable fonts cuando sea posible</li>
          <li>• Especifica subsets para reducir tamaño</li>
          <li>• Aplica className en vez de style inline</li>
        </ul>
      </div>
    </>
  );
}

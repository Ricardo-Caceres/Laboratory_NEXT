export default function NextHeadersDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        La función headers() de Next.js permite leer headers HTTP entrantes en Server Components
        y Route Handlers. Útil para autenticación, geolocalización y más.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📡 Headers comunes</h3>
          <ul className="space-y-2">
            <li>✓ authorization - Tokens de auth</li>
            <li>✓ cookie - Cookies del request</li>
            <li>✓ user-agent - Info del navegador</li>
            <li>✓ x-forwarded-for - IP real del cliente</li>
            <li>✓ accept-language - Idioma preferido</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Casos de uso</h3>
          <ul className="space-y-2">
            <li>• Autenticación - Validar tokens</li>
            <li>• Geolocalización - IP-based location</li>
            <li>• A/B testing - User segmentation</li>
            <li>• i18n - Detectar idioma</li>
            <li>• Analytics - Tracking</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 API</p>
        <ul className="space-y-1 text-sm">
          <li>• <code>headers().get('name')</code> - Obtener header</li>
          <li>• <code>headers().has('name')</code> - Verificar existencia</li>
          <li>• <code>headers().entries()</code> - Iterar todos</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚠️ Solo en server</p>
        <p className="text-sm">
          headers() solo funciona en Server Components y Route Handlers.
          No está disponible en Client Components.
        </p>
      </div>
    </>
  );
}

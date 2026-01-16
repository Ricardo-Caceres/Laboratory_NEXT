export default function NextServerDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        next/server proporciona utilidades para Middleware y Edge Runtime.
        Incluye NextRequest, NextResponse y helpers para manipular requests/responses.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔧 APIs principales</h3>
          <ul className="space-y-2">
            <li>✓ NextRequest - Request extendido</li>
            <li>✓ NextResponse - Response extendido</li>
            <li>✓ userAgent - Parser de user agent</li>
            <li>✓ geo - Información geográfica</li>
            <li>✓ ip - Dirección IP del cliente</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Casos de uso</h3>
          <ul className="space-y-2">
            <li>• Authentication - Validar tokens</li>
            <li>• Redirects - Basados en condiciones</li>
            <li>• A/B testing - Routing dinámico</li>
            <li>• Geoblocking - Restricción por país</li>
            <li>• Bot detection - Filtrar bots</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ NextResponse helpers</p>
        <ul className="space-y-1 text-sm">
          <li>• <code>NextResponse.redirect()</code> - Redireccionar</li>
          <li>• <code>NextResponse.rewrite()</code> - Reescribir URL</li>
          <li>• <code>NextResponse.next()</code> - Continuar</li>
          <li>• <code>NextResponse.json()</code> - Response JSON</li>
        </ul>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
        <p className="font-semibold mb-2">🌐 Edge Runtime</p>
        <p className="text-sm">
          next/server está optimizado para Edge Runtime, permitiendo ejecución
          global de middleware con latencia mínima.
        </p>
      </div>
    </>
  );
}

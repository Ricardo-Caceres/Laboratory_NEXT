export default function NextScriptDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        next/script optimiza la carga de scripts externos con estrategias de carga
        y eventos del ciclo de vida. Mejora el rendimiento vs {'<script>'} nativo.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">⚡ Estrategias de carga</h3>
          <ul className="space-y-2">
            <li>✓ beforeInteractive - Antes de hydration</li>
            <li>✓ afterInteractive - Después de hydration</li>
            <li>✓ lazyOnload - Al final, bajo prioridad</li>
            <li>✓ worker - En Web Worker (experimental)</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Casos de uso</h3>
          <ul className="space-y-2">
            <li>• Analytics - Google Analytics, Plausible</li>
            <li>• Chat widgets - Intercom, Drift</li>
            <li>• Ads - Google Ads, Facebook Pixel</li>
            <li>• Maps - Google Maps, Mapbox</li>
            <li>• Payment - Stripe, PayPal</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Eventos del ciclo</p>
        <ul className="space-y-1 text-sm">
          <li>• <code>onLoad</code> - Cuando el script carga</li>
          <li>• <code>onReady</code> - Cuando está listo para usar</li>
          <li>• <code>onError</code> - Si falla la carga</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Best practices</p>
        <ul className="space-y-1 text-sm">
          <li>• Usa lazyOnload para scripts no críticos</li>
          <li>• afterInteractive para analytics</li>
          <li>• beforeInteractive solo para críticos</li>
          <li>• Inline scripts con strategy para control</li>
        </ul>
      </div>
    </>
  );
}

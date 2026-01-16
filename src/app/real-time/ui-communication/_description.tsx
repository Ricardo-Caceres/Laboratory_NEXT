export default function UICommunicationDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Patrones y técnicas para comunicación entre componentes UI: props drilling, Context API,
        event buses, state management y más.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📊 Patrones</h3>
          <ul className="space-y-2">
            <li>✓ Props drilling - Directo</li>
            <li>✓ Context API - Contexto global</li>
            <li>✓ State management - Redux, Zustand</li>
            <li>✓ Event bus - Desacoplado</li>
            <li>✓ Custom hooks - Lógica compartida</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Cuándo usar</h3>
          <ul className="space-y-2">
            <li>• Props - Componentes cercanos</li>
            <li>• Context - Estado de app pequeña</li>
            <li>• Redux - App compleja, DevTools</li>
            <li>• Event Bus - Comunicación desacoplada</li>
            <li>• RxJS - Streams complejos</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚠️ Anti-patrones</p>
        <ul className="space-y-1 text-sm">
          <li>• Props drilling excesivo (&gt;3 niveles)</li>
          <li>• Múltiples contextos para mismo propósito</li>
          <li>• Event bus para todo (difícil debug)</li>
          <li>• State global innecesario</li>
        </ul>
      </div>
    </>
  );
}

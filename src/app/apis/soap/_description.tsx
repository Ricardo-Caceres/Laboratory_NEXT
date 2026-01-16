export default function SOAPDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        SOAP (Simple Object Access Protocol) es un protocolo basado en XML para intercambio
        de información estructurada. Aunque legacy, aún se usa en sistemas enterprise.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📋 Características</h3>
          <ul className="space-y-2">
            <li>✓ XML-based - Formato estructurado</li>
            <li>✓ WSDL - Definición de servicios</li>
            <li>✓ Protocol agnostic - HTTP, SMTP, etc</li>
            <li>✓ Built-in error handling</li>
            <li>✓ WS-Security - Seguridad estándar</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🆚 SOAP vs REST</h3>
          <p className="text-sm mb-2 font-semibold">SOAP:</p>
          <ul className="text-sm space-y-1 mb-3">
            <li>• Formal contract (WSDL)</li>
            <li>• Built-in error handling</li>
            <li>• ACID compliance</li>
          </ul>
          <p className="text-sm mb-2 font-semibold">REST:</p>
          <ul className="text-sm space-y-1">
            <li>• Más ligero y simple</li>
            <li>• JSON más fácil que XML</li>
            <li>• Mejor para web</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">🎯 Componentes SOAP</p>
        <ul className="space-y-1 text-sm">
          <li>• Envelope - Mensaje raíz</li>
          <li>• Header - Metadata opcional</li>
          <li>• Body - Contenido del mensaje</li>
          <li>• Fault - Información de errores</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Cuándo usar SOAP</p>
        <ul className="space-y-1 text-sm">
          <li>✓ Sistemas enterprise legacy</li>
          <li>✓ Transacciones ACID requeridas</li>
          <li>✓ WS-Security necesario</li>
          <li>❌ APIs públicas modernas</li>
          <li>❌ Mobile apps (overhead XML)</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">🔧 Herramientas</p>
        <ul className="space-y-1 text-sm">
          <li>• SoapUI - Testing SOAP services</li>
          <li>• Apache CXF - Java framework</li>
          <li>• node-soap - Node.js client</li>
        </ul>
      </div>
    </>
  );
}

export default function ZodDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Zod es una librería TypeScript-first para validación de esquemas y parsing de datos.
        Type-safe, sin decoradores, con inferencia automática de tipos.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Características</h3>
          <ul className="space-y-2">
            <li>✓ TypeScript-first - Inferencia automática</li>
            <li>✓ Zero dependencies - Ligero</li>
            <li>✓ Composable - Esquemas reutilizables</li>
            <li>✓ Async validation - Soporte async</li>
            <li>✓ Transform - Parsear y transformar</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔧 Tipos básicos</h3>
          <ul className="space-y-2">
            <li>• z.string() - Strings</li>
            <li>• z.number() - Números</li>
            <li>• z.boolean() - Booleanos</li>
            <li>• z.object() - Objetos</li>
            <li>• z.array() - Arrays</li>
            <li>• z.enum() - Enums</li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Casos de uso</p>
        <ul className="space-y-1 text-sm">
          <li>• Form validation - Validar inputs</li>
          <li>• API responses - Validar datos externos</li>
          <li>• Environment variables - Config type-safe</li>
          <li>• Runtime type checking - Validación en runtime</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Ventajas vs otros</p>
        <ul className="space-y-1 text-sm">
          <li>✓ Mejor inferencia de tipos que Yup</li>
          <li>✓ Más ligero que class-validator</li>
          <li>✓ No usa decoradores (más simple)</li>
          <li>✓ Excelente soporte TypeScript</li>
        </ul>
      </div>
    </>
  );
}

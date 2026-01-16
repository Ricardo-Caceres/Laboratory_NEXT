export default function ValidationDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Validación de datos es crítica para aplicaciones robustas. Aprende librerías type-safe
        como Zod, Yup, y técnicas para validar forms, APIs y datos en runtime.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🛡️ Librerías populares</h3>
          <ul className="space-y-2">
            <li>✓ Zod - TypeScript-first, zero deps</li>
            <li>✓ Yup - Schema validation classic</li>
            <li>✓ Joi - Server-side validation</li>
            <li>✓ Ajv - JSON Schema validator</li>
            <li>✓ class-validator - Decorator-based</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Casos de uso</h3>
          <ul className="space-y-2">
            <li>• Form validation - User input</li>
            <li>• API responses - External data</li>
            <li>• Environment variables - Config</li>
            <li>• Runtime type checking - Safety</li>
            <li>• Data transformation - Parse + validate</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">✅ Por qué validar</p>
        <ul className="space-y-1 text-sm">
          <li>• TypeScript solo valida en compile time</li>
          <li>• Runtime data puede ser malformed</li>
          <li>• User input nunca es confiable</li>
          <li>• External APIs pueden cambiar</li>
          <li>• Better error messages para usuarios</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Zod advantages</p>
        <ul className="space-y-1 text-sm">
          <li>• Perfect TypeScript inference</li>
          <li>• Zero dependencies - Lightweight</li>
          <li>• Composable schemas</li>
          <li>• Transform + validate in one step</li>
          <li>• Better than Yup for TS projects</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">📚 En esta sección aprenderás:</p>
        <ul className="space-y-1 text-sm">
          <li>• Zod fundamentals y best practices</li>
          <li>• Form validation con React Hook Form</li>
          <li>• API validation patterns</li>
          <li>• Error handling strategies</li>
          <li>• Type-safe environment variables</li>
        </ul>
      </div>
    </>
  );
}

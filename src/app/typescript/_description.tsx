export default function TypeScriptDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        TypeScript es el superset de JavaScript con tipos estáticos. Aprende desde fundamentos
        hasta características avanzadas: generics, utility types, type inference y más.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Conceptos básicos</h3>
          <ul className="space-y-2">
            <li>✓ Type annotations - Tipos explícitos</li>
            <li>✓ Interfaces - Contratos de objetos</li>
            <li>✓ Type inference - Inferencia automática</li>
            <li>✓ Union types - Múltiples tipos</li>
            <li>✓ Type guards - Validación en runtime</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🚀 Avanzado</h3>
          <ul className="space-y-2">
            <li>• Generics - Tipos reutilizables</li>
            <li>• Utility types - Partial, Pick, Omit</li>
            <li>• Conditional types - Type logic</li>
            <li>• Mapped types - Transform types</li>
            <li>• Template literal types - String types</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">✅ Beneficios</p>
        <ul className="space-y-1 text-sm">
          <li>• Catch errors at compile time</li>
          <li>• Better IDE autocomplete y IntelliSense</li>
          <li>• Self-documenting code</li>
          <li>• Safer refactoring</li>
          <li>• Better team collaboration</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">📚 En esta sección aprenderás:</p>
        <ul className="space-y-1 text-sm">
          <li>• TypeScript basics - Tipos fundamentales</li>
          <li>• Advanced types - Generics, conditional types</li>
          <li>• Best practices - Configuración y patterns</li>
          <li>• React + TypeScript - Type-safe components</li>
          <li>• Utility types - Maximizar productividad</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">🎨 Ecosystem</p>
        <ul className="space-y-1 text-sm">
          <li>• DefinitelyTyped - Type definitions</li>
          <li>• ts-node - Execute TS directly</li>
          <li>• tsc - TypeScript compiler</li>
          <li>• TSConfig - Compiler configuration</li>
        </ul>
      </div>
    </>
  );
}

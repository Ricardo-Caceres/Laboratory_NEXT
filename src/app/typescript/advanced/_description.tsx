export default function TypeScriptAdvancedDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Domina TypeScript a nivel elite con tipos avanzados, genéricos complejos y metaprogramación de tipos.
        Aprende conditional types, mapped types, template literals y patrones avanzados.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🚀 Temas avanzados</h3>
          <ul className="space-y-2">
            <li>✓ Generics y Constraints</li>
            <li>✓ Conditional Types</li>
            <li>✓ Mapped Types</li>
            <li>✓ Template Literal Types</li>
            <li>✓ Infer Keyword</li>
            <li>✓ Utility Types Avanzados</li>
          </ul>
        </div>
        
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">⚡ Patrones Elite</h3>
          <ul className="space-y-2">
            <li>• Branded Types</li>
            <li>• Phantom Types</li>
            <li>• Type-safe Builder Pattern</li>
            <li>• Recursive Conditional Types</li>
            <li>• Variance y Covariance</li>
          </ul>
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 my-6">
        <p className="font-semibold mb-2">🎯 Tips Elite</p>
        <ul className="space-y-1 text-sm">
          <li>• Usa <code>infer</code> para extraer tipos dentro de conditional types</li>
          <li>• Aprovecha template literal types para type-safe strings</li>
          <li>• Combina mapped types con conditional types para transformaciones complejas</li>
          <li>• Usa branded types para distinguir tipos primitivos nominalmente</li>
        </ul>
      </div>
    </>
  );
}

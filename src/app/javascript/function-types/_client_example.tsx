'use client';

import { useState } from 'react';

export default function FunctionTypesExample() {
  const [activeType, setActiveType] = useState<'declaration' | 'arrow' | 'async' | 'generator'>('declaration');

  const examples = {
    declaration: `// Function Declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Características:
// - Hoisted completamente
// - Tiene su propio 'this'
// - Puede usarse antes de su declaración
greet('World'); // "Hello, World!"`,

    arrow: `// Arrow Function
const greet = (name) => \`Hello, \${name}!\`;

// Sin paréntesis (un parámetro)
const double = x => x * 2;

// Sin parámetros
const sayHi = () => 'Hi!';

// Características:
// - No tiene su propio 'this'
// - No puede ser constructor
// - Sintaxis concisa`,

    async: `// Async Function
async function fetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  const data = await response.json();
  return data;
}

// Async Arrow
const fetchUser2 = async (id) => {
  const response = await fetch(\`/api/users/\${id}\`);
  return await response.json();
};

// Async IIFE
(async () => {
  const data = await fetchUser(1);
  console.log(data);
})();`,

    generator: `// Generator Function
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }

// Generator infinito
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}`
  };

  const types = [
    { id: 'declaration', label: 'Declaration', color: 'blue' },
    { id: 'arrow', label: 'Arrow', color: 'purple' },
    { id: 'async', label: 'Async', color: 'green' },
    { id: 'generator', label: 'Generator', color: 'orange' }
  ] as const;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {types.map(type => (
          <button
            key={type.id}
            onClick={() => setActiveType(type.id)}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              activeType === type.id
                ? `bg-${type.color}-600 text-white`
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            style={{
              backgroundColor: activeType === type.id 
                ? type.color === 'blue' ? '#2563eb' 
                : type.color === 'purple' ? '#9333ea'
                : type.color === 'green' ? '#16a34a'
                : '#ea580c'
                : undefined
            }}
          >
            {type.label}
          </button>
        ))}
      </div>

      <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
        <pre className="text-sm">
          <code>{examples[activeType]}</code>
        </pre>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <p className="text-sm">
            <strong>🔄 Hoisting:</strong>{' '}
            {activeType === 'declaration' || activeType === 'generator' 
              ? 'Sí, completamente hoisted'
              : 'No, sigue reglas de la variable'}
          </p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <p className="text-sm">
            <strong>📍 this:</strong>{' '}
            {activeType === 'arrow'
              ? 'No tiene this propio (léxico)'
              : 'Tiene su propio this'}
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <p className="text-sm">
            <strong>🎯 Uso:</strong>{' '}
            {activeType === 'declaration' ? 'Funciones principales'
              : activeType === 'arrow' ? 'Callbacks, métodos'
              : activeType === 'async' ? 'Operaciones async'
              : 'Iteraciones lazy'}
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
        <p className="text-sm">
          <strong>💡 Tip:</strong>{' '}
          {activeType === 'arrow' 
            ? 'Ideal para callbacks y cuando necesitas heredar this del contexto superior'
            : activeType === 'async'
            ? 'Siempre retorna una Promise, úsalo con await para código asíncrono limpio'
            : activeType === 'generator'
            ? 'Perfecto para lazy evaluation y secuencias infinitas'
            : 'La forma más tradicional, ideal para funciones reutilizables principales'}
        </p>
      </div>
    </div>
  );
}

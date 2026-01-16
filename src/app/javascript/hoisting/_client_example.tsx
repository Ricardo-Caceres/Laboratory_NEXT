'use client';

import { useState } from 'react';

export default function HoistingExample() {
  const [activeTab, setActiveTab] = useState<'var' | 'function' | 'letConst' | 'tdz'>('var');

  const examples = {
    var: `// var Hoisting
console.log(nombre); // undefined
var nombre = 'Juan';
console.log(nombre); // 'Juan'

// El motor JS lo interpreta como:
var nombre; // Declaración elevada
console.log(nombre); // undefined
nombre = 'Juan'; // Asignación
console.log(nombre); // 'Juan'

// var en bucles
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3 (no 0, 1, 2)`,

    function: `// Function Declaration (hoisted)
saludar(); // "¡Hola!" ✅

function saludar() {
  console.log('¡Hola!');
}

// Function Expression (NO hoisted)
despedir(); // TypeError ❌

var despedir = function() {
  console.log('Adiós');
};

// Arrow Function (NO hoisted)
const greet = () => console.log('Hi');`,

    letConst: `// let y const NO son hoisted
console.log(x); // ReferenceError ❌
let x = 10;

// Block Scope
{
  let y = 20;
}
console.log(y); // ReferenceError ❌

// let en bucles (solución al problema de var)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2 ✅`,

    tdz: `// Temporal Dead Zone
{
  // TDZ inicia aquí para 'nombre'
  
  console.log(nombre); // ReferenceError ❌
  // Aún en TDZ
  
  let nombre = 'Juan'; // TDZ termina aquí
  console.log(nombre); // 'Juan' ✅
}

// TDZ con typeof
console.log(typeof x); // 'undefined' (var)
var x = 5;

console.log(typeof y); // ReferenceError (let)
let y = 5;`
  };

  const tabs = [
    { id: 'var', label: 'var' },
    { id: 'function', label: 'Functions' },
    { id: 'letConst', label: 'let/const' },
    { id: 'tdz', label: 'TDZ' }
  ] as const;

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
        <pre className="text-sm">
          <code>{examples[activeTab]}</code>
        </pre>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <p className="text-sm">
            <strong>⚠️ Problema:</strong> var permite usar variables antes de declararlas (undefined)
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <p className="text-sm">
            <strong>✅ Solución:</strong> let/const previenen esto con la Temporal Dead Zone
          </p>
        </div>
      </div>
    </div>
  );
}

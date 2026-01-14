'use client';

import React, { useState } from 'react';

export default function FunctionTypesPage() {
  const [activeFunction, setActiveFunction] = useState<string>('declaration');

  const functionTypes = {
    declaration: {
      title: 'Function Declaration',
      description: 'La forma tradicional y más común de declarar funciones',
      syntax: 'function name(params) { body }',
      code: `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World')); // "Hello, World!"

// Características:
// - Hoisted completamente
// - Tiene nombre propio
// - Puede ser llamada antes de su declaración
// - Crea su propio 'this'`,
      hoisting: 'Completamente hoisted - puede usarse antes de su declaración',
      when: 'Cuando necesitas una función reutilizable que puede ser llamada desde cualquier parte del scope',
      where: 'Al nivel superior del módulo, dentro de otras funciones, o en objetos',
      why: 'Proporciona claridad, es hoisted, y el nombre aparece en stack traces',
      useCases: [
        'Funciones utilitarias reutilizables',
        'Métodos principales del módulo',
        'Callbacks que necesitan nombre para debugging',
        'Funciones que se llaman recursivamente'
      ]
    },
    expression: {
      title: 'Function Expression',
      description: 'Función asignada a una variable',
      syntax: 'const name = function(params) { body }',
      code: `const greet = function(name) {
  return \`Hello, \${name}!\`;
};

console.log(greet('World')); // "Hello, World!"

// Características:
// - No es hoisted (sigue reglas de la variable)
// - Puede ser anónima o nombrada
// - Solo puede usarse después de su declaración
// - Crea su propio 'this'`,
      hoisting: 'No hoisted - sigue las reglas de let/const/var',
      when: 'Cuando quieres asignar funciones condicionalmente o pasarlas como valores',
      where: 'En asignaciones de variables, como valores de objetos, o en condicionales',
      why: 'Más flexible que declarations, puede ser asignada dinámicamente',
      useCases: [
        'Callbacks',
        'Asignación condicional de funciones',
        'Métodos de objetos',
        'Funciones que cambian en runtime'
      ]
    },
    arrow: {
      title: 'Arrow Function',
      description: 'Sintaxis moderna y concisa introducida en ES6',
      syntax: '(params) => expression o (params) => { body }',
      code: `// Sintaxis simple
const greet = (name) => \`Hello, \${name}!\`;

// Con cuerpo de bloque
const greetVerbose = (name) => {
  const message = \`Hello, \${name}!\`;
  return message;
};

// Sin parámetros
const sayHi = () => 'Hi!';

// Un parámetro (paréntesis opcionales)
const double = x => x * 2;

// Características:
// - No tiene su propio 'this'
// - No tiene 'arguments'
// - No puede ser constructor
// - Hereda 'this' del contexto léxico`,
      hoisting: 'No hoisted - sigue las reglas de la variable',
      when: 'Para callbacks cortos, métodos que necesitan heredar this, o funciones inline',
      where: 'Arrays methods, event handlers, promises, callbacks',
      why: 'Sintaxis concisa y this léxico',
      useCases: [
        'Array methods (map, filter, reduce)',
        'Event handlers que necesitan this del componente',
        'Promises y async/await',
        'Callbacks simples'
      ]
    },
    iife: {
      title: 'IIFE (Immediately Invoked Function Expression)',
      description: 'Función que se ejecuta inmediatamente después de ser definida',
      syntax: '(function() { body })()',
      code: `// Sintaxis clásica
(function() {
  console.log('Ejecutada inmediatamente!');
})();

// Con parámetros
(function(name) {
  console.log(\`Hello, \${name}!\`);
})('World');

// Arrow IIFE
(() => {
  console.log('Arrow IIFE');
})();

// Uso común: crear scope privado
const counter = (function() {
  let count = 0; // Variable privada
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
})();

console.log(counter.getValue()); // 0
counter.increment();
console.log(counter.getValue()); // 1`,
      hoisting: 'No aplica - se ejecuta inmediatamente',
      when: 'Cuando necesitas ejecutar código inmediatamente y crear un scope privado',
      where: 'Inicialización de módulos, variables privadas, evitar contaminación del scope global',
      why: 'Crea un scope aislado y previene la contaminación del namespace global',
      useCases: [
        'Module pattern',
        'Variables y funciones privadas',
        'Inicialización one-time',
        'Evitar conflictos de nombres'
      ]
    },
    generator: {
      title: 'Generator Function',
      description: 'Función que puede pausar su ejecución y resumirla',
      syntax: 'function* name(params) { yield value }',
      code: `function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Generator infinito
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

// Generator con argumentos
function* idGenerator() {
  let id = 1;
  while (true) {
    const increment = yield id;
    if (increment !== undefined) {
      id += increment;
    } else {
      id++;
    }
  }
}`,
      hoisting: 'Hoisted como function declaration',
      when: 'Para iteraciones lazy, secuencias infinitas, o control de flujo complejo',
      where: 'Implementación de iteradores, procesamiento de streams, state machines',
      why: 'Permite pausar y resumir ejecución, ideal para lazy evaluation',
      useCases: [
        'Implementar iteradores custom',
        'Lazy evaluation de secuencias',
        'Async workflows (redux-saga)',
        'Generar IDs únicos'
      ]
    },
    async: {
      title: 'Async Function',
      description: 'Función que siempre retorna una Promise',
      syntax: 'async function name(params) { await promise }',
      code: `// Async function declaration
async function fetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  const data = await response.json();
  return data;
}

// Async arrow function
const fetchUser2 = async (id) => {
  const response = await fetch(\`/api/users/\${id}\`);
  return await response.json();
};

// Manejo de errores
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network error');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

// Async IIFE
(async () => {
  const data = await fetchUser(1);
  console.log(data);
})();`,
      hoisting: 'Async function declarations son hoisted, async expressions no',
      when: 'Para operaciones asíncronas como fetch, I/O, o cualquier Promise',
      where: 'API calls, database operations, file I/O, cualquier operación async',
      why: 'Sintaxis más limpia que .then(), mejor para código asíncrono secuencial',
      useCases: [
        'API requests',
        'Database queries',
        'File operations',
        'Sequential async operations'
      ]
    },
    asyncGenerator: {
      title: 'Async Generator Function',
      description: 'Combinación de async y generator',
      syntax: 'async function* name(params) { yield await promise }',
      code: `async function* asyncNumberGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

// Uso
(async () => {
  for await (const num of asyncNumberGenerator()) {
    console.log(num); // 1, 2, 3
  }
})();

// Ejemplo práctico: paginated API
async function* fetchPagedData(url) {
  let page = 1;
  let hasMore = true;
  
  while (hasMore) {
    const response = await fetch(\`\${url}?page=\${page}\`);
    const data = await response.json();
    
    yield data.items;
    
    hasMore = data.hasNext;
    page++;
  }
}`,
      hoisting: 'Hoisted como function declaration',
      when: 'Para streams asíncronos o procesamiento de datos paginados',
      where: 'Paginated APIs, real-time data streams, async iterations',
      why: 'Combina lazy evaluation con operaciones asíncronas',
      useCases: [
        'Paginated API responses',
        'Streaming data processing',
        'Real-time event streams',
        'Async iterations'
      ]
    },
    constructor: {
      title: 'Constructor Function',
      description: 'Función usada con new para crear objetos',
      syntax: 'function Name(params) { this.prop = value }',
      code: `function Person(name, age) {
  this.name = name;
  this.age = age;
  
  this.greet = function() {
    return \`Hi, I'm \${this.name}\`;
  };
}

// Uso
const john = new Person('John', 30);
console.log(john.greet()); // "Hi, I'm John"

// Con prototype
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return \`\${this.name} makes a sound\`;
};

const dog = new Animal('Dog');
console.log(dog.speak()); // "Dog makes a sound"

// Verificación
console.log(john instanceof Person); // true`,
      hoisting: 'Hoisted completamente como function declaration',
      when: 'En código legacy o cuando necesitas un constructor antes de ES6 classes',
      where: 'Definición de objetos con estado y comportamiento compartido',
      why: 'Era la única forma de crear "clases" antes de ES6',
      useCases: [
        'Legacy code',
        'Cuando no puedes usar ES6 classes',
        'Prototypal inheritance patterns'
      ]
    },
    method: {
      title: 'Method (Object Method)',
      description: 'Función como propiedad de un objeto',
      syntax: '{ methodName(params) { body } }',
      code: `// Shorthand (ES6)
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};

// Tradicional
const calculator2 = {
  add: function(a, b) {
    return a + b;
  }
};

// Arrow functions como métodos (cuidado con this)
const obj = {
  value: 42,
  regularMethod() {
    return this.value; // 42
  },
  arrowMethod: () => {
    return this.value; // undefined (this no es obj)
  }
};

// Métodos con this
const counter = {
  count: 0,
  increment() {
    this.count++;
    return this.count;
  },
  reset() {
    this.count = 0;
  }
};`,
      hoisting: 'No - el objeto debe existir primero',
      when: 'Para definir comportamiento asociado a objetos',
      where: 'En object literals, classes, prototypes',
      why: 'Encapsula comportamiento relacionado con el objeto',
      useCases: [
        'Object-oriented programming',
        'API objects',
        'Configuration objects con behaviors',
        'Class methods'
      ]
    },
    callback: {
      title: 'Callback Function',
      description: 'Función pasada como argumento a otra función',
      syntax: 'function(callback) { callback() }',
      code: `// Callback tradicional
function processData(data, callback) {
  const result = data * 2;
  callback(result);
}

processData(5, function(result) {
  console.log(result); // 10
});

// Array methods con callbacks
[1, 2, 3].forEach(function(item) {
  console.log(item);
});

// Arrow function callback
[1, 2, 3].map(item => item * 2);

// Named callback
function handleClick(event) {
  console.log('Clicked!');
}
button.addEventListener('click', handleClick);

// Callback con error-first pattern (Node.js)
function readFile(filename, callback) {
  if (error) {
    callback(error, null);
  } else {
    callback(null, data);
  }
}`,
      hoisting: 'Depende de cómo esté definida la función callback',
      when: 'Para operaciones asíncronas, eventos, o procesamiento de arrays',
      where: 'Event handlers, array methods, async operations',
      why: 'Permite código flexible y reutilizable',
      useCases: [
        'Event listeners',
        'Array methods',
        'Async operations',
        'Higher-order functions'
      ]
    },
    higherOrder: {
      title: 'Higher-Order Function',
      description: 'Función que recibe o retorna otras funciones',
      syntax: 'function() { return function() {} }',
      code: `// Retorna función
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// Recibe función
function withLogging(fn) {
  return function(...args) {
    console.log('Calling with:', args);
    const result = fn(...args);
    console.log('Result:', result);
    return result;
  };
}

const add = (a, b) => a + b;
const addWithLogging = withLogging(add);
addWithLogging(2, 3);

// Currying
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
};`,
      hoisting: 'Depende de cómo esté definida',
      when: 'Para crear funciones configurables, middleware, o patrones funcionales',
      where: 'Utilities, middleware, decorators, functional programming',
      why: 'Permite abstracción y composición de funciones',
      useCases: [
        'Function composition',
        'Middleware',
        'Decorators',
        'Currying y partial application'
      ]
    },
    named: {
      title: 'Named Function Expression',
      description: 'Function expression con nombre explícito',
      syntax: 'const var = function name() {}',
      code: `// Named function expression
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Recursión usando el nombre
};

console.log(factorial(5)); // 120

// El nombre solo está disponible dentro de la función
console.log(typeof fact); // "undefined"

// Útil para debugging
const handler = function handleClick(event) {
  // "handleClick" aparece en stack traces
  console.log(event);
};

// Comparación
const anon = function() {}; // Stack trace: "(anonymous)"
const named = function myFunc() {}; // Stack trace: "myFunc"`,
      hoisting: 'No hoisted - sigue reglas de la variable',
      when: 'Para recursión o cuando necesitas mejor debugging',
      where: 'Funciones recursivas, event handlers, debugging',
      why: 'Mejor stack traces y permite recursión sin variable externa',
      useCases: [
        'Recursión',
        'Debugging (nombres en stack traces)',
        'Self-reference',
        'Better error messages'
      ]
    }
  };

  const combinations = [
    {
      title: 'Async + Arrow',
      code: `const fetchData = async () => {
  const data = await fetch('/api');
  return data.json();
};`
    },
    {
      title: 'IIFE + Async',
      code: `(async () => {
  const data = await fetchData();
  console.log(data);
})();`
    },
    {
      title: 'Higher-Order + Arrow',
      code: `const withRetry = (fn) => async (...args) => {
  try {
    return await fn(...args);
  } catch (error) {
    return await fn(...args);
  }
};`
    },
    {
      title: 'Method + Async',
      code: `const api = {
  async getUser(id) {
    return await fetch(\`/users/\${id}\`);
  }
};`
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      color: '#000000',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#000000'
          }}>
            Tipos de Funciones en JavaScript
          </h1>
          <p style={{ 
            fontSize: '1.125rem',
            color: '#000000',
            lineHeight: '1.6'
          }}>
            Guía exhaustiva de todos los tipos de funciones: sintaxis, hoisting, casos de uso, y cuándo usar cada una
          </p>
        </header>

        <section style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {Object.entries(functionTypes).map(([key, func]) => (
              <button
                key={key}
                onClick={() => setActiveFunction(key)}
                style={{
                  padding: '1rem',
                  backgroundColor: activeFunction === key ? '#000000' : '#ffffff',
                  color: activeFunction === key ? '#ffffff' : '#000000',
                  border: '2px solid #000000',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                  textAlign: 'left'
                }}
              >
                {func.title}
              </button>
            ))}
          </div>

          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '2rem',
            borderRadius: '8px',
            border: '2px solid #000000'
          }}>
            <h2 style={{ 
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#000000'
            }}>
              {functionTypes[activeFunction as keyof typeof functionTypes].title}
            </h2>
            
            <p style={{ 
              marginBottom: '1.5rem',
              fontSize: '1.1rem',
              color: '#000000',
              lineHeight: '1.6'
            }}>
              {functionTypes[activeFunction as keyof typeof functionTypes].description}
            </p>

            <div style={{
              backgroundColor: '#e8f4f8',
              padding: '1rem',
              borderRadius: '6px',
              marginBottom: '1.5rem',
              border: '2px solid #0066cc'
            }}>
              <strong style={{ color: '#000000' }}>Sintaxis: </strong>
              <code style={{ 
                color: '#000000',
                fontSize: '1rem',
                fontFamily: 'monospace'
              }}>
                {functionTypes[activeFunction as keyof typeof functionTypes].syntax}
              </code>
            </div>

            <pre style={{
              backgroundColor: '#ffffff',
              padding: '1.5rem',
              borderRadius: '6px',
              border: '1px solid #000000',
              overflowX: 'auto',
              marginBottom: '2rem'
            }}>
              <code style={{ color: '#000000', fontSize: '0.95rem', whiteSpace: 'pre' }}>
                {functionTypes[activeFunction as keyof typeof functionTypes].code}
              </code>
            </pre>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                backgroundColor: '#fff3cd',
                padding: '1rem',
                borderRadius: '6px',
                border: '2px solid #856404'
              }}>
                <strong style={{ color: '#000000', display: 'block', marginBottom: '0.5rem' }}>
                  🔄 Hoisting:
                </strong>
                <span style={{ color: '#000000' }}>
                  {functionTypes[activeFunction as keyof typeof functionTypes].hoisting}
                </span>
              </div>

              <div style={{
                backgroundColor: '#d4edda',
                padding: '1rem',
                borderRadius: '6px',
                border: '2px solid #155724'
              }}>
                <strong style={{ color: '#000000', display: 'block', marginBottom: '0.5rem' }}>
                  ⏰ Cuándo:
                </strong>
                <span style={{ color: '#000000' }}>
                  {functionTypes[activeFunction as keyof typeof functionTypes].when}
                </span>
              </div>

              <div style={{
                backgroundColor: '#d1ecf1',
                padding: '1rem',
                borderRadius: '6px',
                border: '2px solid #0c5460'
              }}>
                <strong style={{ color: '#000000', display: 'block', marginBottom: '0.5rem' }}>
                  📍 Dónde:
                </strong>
                <span style={{ color: '#000000' }}>
                  {functionTypes[activeFunction as keyof typeof functionTypes].where}
                </span>
              </div>

              <div style={{
                backgroundColor: '#f8d7da',
                padding: '1rem',
                borderRadius: '6px',
                border: '2px solid #721c24'
              }}>
                <strong style={{ color: '#000000', display: 'block', marginBottom: '0.5rem' }}>
                  💡 Por qué:
                </strong>
                <span style={{ color: '#000000' }}>
                  {functionTypes[activeFunction as keyof typeof functionTypes].why}
                </span>
              </div>
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              padding: '1.5rem',
              borderRadius: '6px',
              border: '2px solid #000000'
            }}>
              <strong style={{ 
                color: '#000000',
                fontSize: '1.1rem',
                display: 'block',
                marginBottom: '1rem'
              }}>
                📋 Casos de Uso:
              </strong>
              <ul style={{ 
                marginLeft: '1.5rem',
                lineHeight: '2',
                color: '#000000'
              }}>
                {functionTypes[activeFunction as keyof typeof functionTypes].useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#000000'
          }}>
            Combinaciones Comunes
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {combinations.map((combo, index) => (
              <div key={index} style={{
                backgroundColor: '#f5f5f5',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '2px solid #000000'
              }}>
                <h3 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: '#000000'
                }}>
                  {combo.title}
                </h3>
                <pre style={{
                  backgroundColor: '#ffffff',
                  padding: '1rem',
                  borderRadius: '6px',
                  border: '1px solid #000000',
                  overflowX: 'auto'
                }}>
                  <code style={{ color: '#000000', fontSize: '0.9rem' }}>
                    {combo.code}
                  </code>
                </pre>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#000000'
          }}>
            Comparación de Características
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: '#ffffff',
              border: '2px solid #000000'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#f5f5f5' }}>
                  <th style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'left' }}>Tipo</th>
                  <th style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>Hoisted</th>
                  <th style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>this</th>
                  <th style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>arguments</th>
                  <th style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>Constructor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #000000' }}>Declaration</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>✅</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>✅</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>✅</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>✅</td>
                </tr>
                <tr style={{ backgroundColor: '#f5f5f5' }}>
                  <td style={{ padding: '1rem', border: '1px solid #000000' }}>Expression</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>❌</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>✅</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>✅</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>✅</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #000000' }}>Arrow</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>❌</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>❌</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>❌</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>❌</td>
                </tr>
                <tr style={{ backgroundColor: '#f5f5f5' }}>
                  <td style={{ padding: '1rem', border: '1px solid #000000' }}>Generator</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>✅</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>✅</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>✅</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>❌</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', border: '1px solid #000000' }}>Async</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>✅*</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>✅</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>✅</td>
                  <td style={{ padding: '1rem', border: '1px solid #000000', textAlign: 'center' }}>❌</td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#000000' }}>
              * Solo async function declarations son hoisted
            </p>
          </div>
        </section>

        <section>
          <h2 style={{ 
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#000000'
          }}>
            Guía de Selección
          </h2>
          <div style={{
            backgroundColor: '#d4edda',
            padding: '2rem',
            borderRadius: '8px',
            border: '2px solid #155724'
          }}>
            <ul style={{ 
              marginLeft: '1.5rem',
              lineHeight: '2',
              color: '#000000'
            }}>
              <li>✅ <strong>Arrow functions</strong> para callbacks y cuando necesites heredar <code>this</code></li>
              <li>✅ <strong>Function declarations</strong> para funciones principales reutilizables</li>
              <li>✅ <strong>Async/await</strong> para operaciones asíncronas (mejor que Promises)</li>
              <li>✅ <strong>Generators</strong> para iteraciones lazy o secuencias infinitas</li>
              <li>✅ <strong>IIFE</strong> para crear scopes privados y ejecutar código inmediatamente</li>
              <li>✅ <strong>Higher-order</strong> para abstracciones y composición</li>
              <li>✅ <strong>Named expressions</strong> para recursión y mejor debugging</li>
              <li>❌ Evita <strong>constructors</strong> - usa ES6 classes en su lugar</li>
              <li>❌ No uses arrow functions como métodos de objetos si necesitas <code>this</code></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

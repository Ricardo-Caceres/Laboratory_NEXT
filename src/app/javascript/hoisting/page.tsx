'use client';

import React, { useState } from 'react';

export default function HoistingPage() {
  const [activeTab, setActiveTab] = useState<'var' | 'function' | 'let-const' | 'class' | 'temporal'>('var');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">JavaScript Hoisting</h1>
          <p className="text-xl text-blue-100">
            Entendiendo el comportamiento de elevación en JavaScript
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        
        {/* ¿Qué es Hoisting? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué es Hoisting?</h2>
          <div className="bg-gray-50 border-l-4 border-blue-600 p-6 mb-6">
            <p className="text-gray-800 mb-4">
              <strong>Hoisting</strong> es el comportamiento predeterminado de JavaScript de mover todas las declaraciones
              al inicio de su contexto de ejecución (scope) durante la fase de compilación.
            </p>
            <p className="text-gray-800 mb-4">
              Esto significa que puedes usar variables y funciones antes de declararlas en el código.
              Sin embargo, <strong>solo las declaraciones son elevadas, no las inicializaciones</strong>.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded">
            <h3 className="text-xl font-bold text-gray-900 mb-3">⚠️ Concepto Clave</h3>
            <p className="text-gray-800">
              El hoisting ocurre en <strong>dos fases</strong>:
            </p>
            <ul className="list-disc list-inside mt-3 text-gray-800 space-y-2">
              <li><strong>Fase de Creación:</strong> Se reserva memoria para variables y funciones</li>
              <li><strong>Fase de Ejecución:</strong> Se asignan valores y se ejecuta el código</li>
            </ul>
          </div>
        </section>

        {/* Tabs */}
        <section className="mb-16">
          <div className="border-b border-gray-300 mb-8">
            <nav className="flex gap-4">
              <button
                onClick={() => setActiveTab('var')}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === 'var'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                var Hoisting
              </button>
              <button
                onClick={() => setActiveTab('function')}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === 'function'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Function Hoisting
              </button>
              <button
                onClick={() => setActiveTab('let-const')}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === 'let-const'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                let/const
              </button>
              <button
                onClick={() => setActiveTab('class')}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === 'class'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Class Hoisting
              </button>
              <button
                onClick={() => setActiveTab('temporal')}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === 'temporal'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Temporal Dead Zone
              </button>
            </nav>
          </div>

          {/* var Hoisting */}
          {activeTab === 'var' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Hoisting con var</h3>
              
              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Comportamiento Básico</h4>
                <p className="text-gray-800 mb-4">
                  Las variables declaradas con <code className="bg-gray-200 px-2 py-1 rounded">var</code> son elevadas
                  al inicio de su función o contexto global, pero se inicializan con <code className="bg-gray-200 px-2 py-1 rounded">undefined</code>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-bold text-gray-900 mb-2">Código escrito:</p>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`console.log(nombre); // undefined
var nombre = 'Juan';
console.log(nombre); // 'Juan'`}
                    </pre>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-2">Interpretación del motor JS:</p>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`var nombre; // Declaración elevada
console.log(nombre); // undefined
nombre = 'Juan'; // Asignación
console.log(nombre); // 'Juan'`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Scope de var</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto mb-4">
{`function ejemplo() {
  console.log(x); // undefined (no error)
  
  if (true) {
    var x = 10;
  }
  
  console.log(x); // 10
}

// var tiene FUNCTION SCOPE, no block scope`}
                </pre>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                  <p className="text-gray-800">
                    <strong>⚡ Importante:</strong> <code className="bg-gray-200 px-2 py-1 rounded">var</code> ignora
                    los bloques {'{'} {'}'} y solo respeta funciones.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Hoisting en bucles</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3 (no 0, 1, 2)
// Porque 'i' es elevada y compartida

// Solución con IIFE:
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 100);
  })(i);
}
// Output: 0, 1, 2`}
                </pre>
              </div>
            </div>
          )}

          {/* Function Hoisting */}
          {activeTab === 'function' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Hoisting con Funciones</h3>
              
              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Function Declarations</h4>
                <p className="text-gray-800 mb-4">
                  Las <strong>declaraciones de funciones</strong> son completamente elevadas, incluyendo su implementación.
                </p>
                
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto mb-4">
{`// Esto funciona perfectamente
saludar(); // "¡Hola!"

function saludar() {
  console.log('¡Hola!');
}

// El motor JS lo interpreta como:
function saludar() {
  console.log('¡Hola!');
}
saludar(); // "¡Hola!"`}
                </pre>

                <div className="bg-green-50 border border-green-200 p-4 rounded">
                  <p className="text-gray-800">
                    <strong>✅ Buena práctica:</strong> Las function declarations son seguras para usar antes
                    de ser declaradas, pero se recomienda declararlas al inicio para mejor legibilidad.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Function Expressions</h4>
                <p className="text-gray-800 mb-4">
                  Las <strong>expresiones de función</strong> NO son elevadas completamente.
                </p>
                
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto mb-4">
{`// ❌ Esto da error
despedir(); // TypeError: despedir is not a function

var despedir = function() {
  console.log('Adiós');
};

// El motor JS lo interpreta como:
var despedir; // undefined
despedir(); // Error: undefined no es función
despedir = function() {
  console.log('Adiós');
};`}
                </pre>

                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`// Con const/let también falla pero por TDZ
saludar(); // ReferenceError

const saludar = function() {
  console.log('Hola');
};`}
                </pre>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Arrow Functions</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`// Las arrow functions siguen las reglas de var/let/const
console.log(sumar); // undefined (con var)

var sumar = (a, b) => a + b;

// Con const/let:
multiplicar(2, 3); // ReferenceError

const multiplicar = (a, b) => a * b;`}
                </pre>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Orden de Precedencia</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`// Las funciones tienen prioridad sobre variables
var foo = 'soy variable';

function foo() {
  console.log('soy función');
}

console.log(typeof foo); // 'string'

// El motor JS lo interpreta como:
function foo() {
  console.log('soy función');
}
var foo; // Ignorada (ya existe)
foo = 'soy variable'; // Reasignación`}
                </pre>
              </div>
            </div>
          )}

          {/* let/const */}
          {activeTab === 'let-const' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Hoisting con let y const</h3>
              
              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Comportamiento de let</h4>
                <p className="text-gray-800 mb-4">
                  <code className="bg-gray-200 px-2 py-1 rounded">let</code> SÍ es elevado, pero NO es inicializado.
                  Queda en la "Temporal Dead Zone".
                </p>
                
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto mb-4">
{`// ❌ ReferenceError: Cannot access 'x' before initialization
console.log(x);
let x = 10;

// Block Scope
{
  let y = 20;
}
console.log(y); // ReferenceError: y is not defined`}
                </pre>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-200 p-4 rounded">
                    <p className="font-bold text-gray-900 mb-2">❌ Incorrecto:</p>
                    <pre className="bg-gray-900 text-green-400 p-2 rounded text-sm overflow-x-auto">
{`if (true) {
  console.log(dato);
  let dato = 5;
}
// ReferenceError`}
                    </pre>
                  </div>
                  <div className="bg-green-50 border border-green-200 p-4 rounded">
                    <p className="font-bold text-gray-900 mb-2">✅ Correcto:</p>
                    <pre className="bg-gray-900 text-green-400 p-2 rounded text-sm overflow-x-auto">
{`if (true) {
  let dato = 5;
  console.log(dato);
}
// 5`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Comportamiento de const</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto mb-4">
{`// const también está en TDZ
console.log(PI); // ReferenceError
const PI = 3.14159;

// const debe inicializarse al declararse
const valor; // SyntaxError
valor = 10;

// const correcto
const NOMBRE = 'Juan';
console.log(NOMBRE); // 'Juan'`}
                </pre>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">let en bucles (Solución al problema de var)</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2 ✅

// Cada iteración crea un nuevo 'i' en su propio scope`}
                </pre>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Re-declaración</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`// var permite re-declaración
var x = 1;
var x = 2; // ✅ Funciona

// let NO permite re-declaración
let y = 1;
let y = 2; // ❌ SyntaxError

// const tampoco
const z = 1;
const z = 2; // ❌ SyntaxError

// Pero en diferentes scopes:
let a = 1;
{
  let a = 2; // ✅ Diferente scope
  console.log(a); // 2
}
console.log(a); // 1`}
                </pre>
              </div>
            </div>
          )}

          {/* Class Hoisting */}
          {activeTab === 'class' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Hoisting con Clases</h3>
              
              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Class Declarations</h4>
                <p className="text-gray-800 mb-4">
                  Las clases SON elevadas pero permanecen en la Temporal Dead Zone.
                </p>
                
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto mb-4">
{`// ❌ ReferenceError
const perro = new Animal('Rex');

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// ✅ Correcto
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
const perro = new Animal('Rex');`}
                </pre>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Class Expressions</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`// Como function expressions, siguen reglas de var/let/const
const gato = new Gato(); // ReferenceError

const Gato = class {
  constructor() {
    this.sonido = 'miau';
  }
};

// Con var
var Perro = class {
  ladrar() {
    console.log('guau');
  }
};`}
                </pre>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Métodos estáticos y hoisting</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`class Utilidades {
  // Estos métodos están disponibles después de la declaración
  static sumar(a, b) {
    return a + b;
  }
  
  static restar(a, b) {
    return a - b;
  }
}

// ✅ Funciona
console.log(Utilidades.sumar(5, 3)); // 8

// Pero la clase misma está en TDZ antes de declararse`}
                </pre>
              </div>
            </div>
          )}

          {/* Temporal Dead Zone */}
          {activeTab === 'temporal' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Temporal Dead Zone (TDZ)</h3>
              
              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">¿Qué es la TDZ?</h4>
                <p className="text-gray-800 mb-4">
                  La <strong>Temporal Dead Zone</strong> es el período entre el inicio del scope y la declaración
                  de la variable donde la variable existe pero no puede ser accedida.
                </p>
                
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`{
  // TDZ inicia aquí para 'nombre'
  
  console.log(nombre); // ReferenceError
  // Aún en TDZ
  
  let nombre = 'Juan'; // TDZ termina aquí
  console.log(nombre); // 'Juan' ✅
}`}
                </pre>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">TDZ con typeof</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`// Con var (no hay TDZ)
console.log(typeof x); // 'undefined'
var x = 5;

// Con let/const (hay TDZ)
console.log(typeof y); // ReferenceError
let y = 5;

// Variable no declarada
console.log(typeof z); // 'undefined' (sin error)`}
                </pre>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">TDZ con parámetros por defecto</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`// ❌ ReferenceError: a está en TDZ
function ejemplo(a = b, b = 2) {
  return a + b;
}

// ✅ Correcto
function ejemplo(a = 2, b = a) {
  return a + b;
}

// Caso especial
function test(x = y, y = 2) {
  console.log(x, y);
}
test(); // ReferenceError
test(1); // 1, 2 ✅`}
                </pre>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">TDZ y Closures</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`function crearContador() {
  // incrementar está en TDZ aquí
  
  const contador = {
    valor: 0,
    incrementar() {
      // Puede usar 'valor' porque ya fue inicializado
      this.valor++;
    }
  };
  
  return contador;
}

const c = crearContador();
c.incrementar(); // ✅ Funciona`}
                </pre>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded">
                <h4 className="text-lg font-bold text-gray-900 mb-3">⚡ Por qué existe la TDZ</h4>
                <ul className="list-disc list-inside text-gray-800 space-y-2">
                  <li>Previene el uso de variables antes de ser inicializadas</li>
                  <li>Ayuda a detectar errores en tiempo de desarrollo</li>
                  <li>Hace el código más predecible y mantenible</li>
                  <li>Evita bugs sutiles relacionados con <code className="bg-gray-200 px-2 py-1 rounded">undefined</code></li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mejores Prácticas</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Hacer</h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Usar <code className="bg-gray-200 px-2 py-1 rounded">const</code> por defecto</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Usar <code className="bg-gray-200 px-2 py-1 rounded">let</code> cuando necesites reasignar</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Declarar variables al inicio del scope</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Usar function declarations para funciones principales</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mantener scopes pequeños y específicos</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-4">❌ Evitar</h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Usar <code className="bg-gray-200 px-2 py-1 rounded">var</code> en código moderno</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Acceder variables antes de declararlas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Depender del hoisting para funcionalidad</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mezclar var/let/const en el mismo scope</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Variables globales innecesarias</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ejemplos Prácticos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Casos de Uso Reales</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Listeners con Closures</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`// ❌ Problema con var
for (var i = 0; i < 5; i++) {
  document.getElementById('btn-' + i).addEventListener('click', function() {
    console.log('Botón ' + i); // Siempre imprime 5
  });
}

// ✅ Solución con let
for (let i = 0; i < 5; i++) {
  document.getElementById('btn-' + i).addEventListener('click', function() {
    console.log('Botón ' + i); // Imprime 0, 1, 2, 3, 4
  });
}`}
              </pre>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Módulos y Hoisting</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`// utils.js
export const API_URL = 'https://api.example.com';

export function fetchData() {
  // Puede usar API_URL porque const ya fue inicializado
  return fetch(API_URL);
}

// ❌ Esto fallaría
export function getData() {
  return fetch(BASE_URL); // ReferenceError
}
export const BASE_URL = 'https://api.example.com';`}
              </pre>
            </div>

            <div className="bg-gray-50 p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-4">React Hooks y Hoisting</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
{`function Component() {
  // ❌ Incorrecto: usar estado antes de declararlo
  console.log(count); // ReferenceError
  
  const [count, setCount] = useState(0);
  
  // ✅ Correcto
  const increment = () => {
    setCount(count + 1); // count ya está disponible
  };
  
  return <button onClick={increment}>{count}</button>;
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Interview Questions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Preguntas de Entrevista</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-300 p-6 rounded">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Q1: ¿Qué imprime este código?</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto mb-4">
{`console.log(a);
var a = 10;
console.log(a);`}
              </pre>
              <details className="mt-4">
                <summary className="cursor-pointer font-semibold text-blue-600 hover:text-blue-800">
                  Ver respuesta
                </summary>
                <div className="mt-4 p-4 bg-gray-50 rounded">
                  <p className="text-gray-800 mb-2"><strong>Respuesta:</strong> <code className="bg-gray-200 px-2 py-1 rounded">undefined</code> y luego <code className="bg-gray-200 px-2 py-1 rounded">10</code></p>
                  <p className="text-gray-800">
                    La declaración de <code className="bg-gray-200 px-2 py-1 rounded">a</code> es elevada con valor <code className="bg-gray-200 px-2 py-1 rounded">undefined</code>.
                    Luego se asigna 10.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-white border border-gray-300 p-6 rounded">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Q2: ¿Por qué falla este código?</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto mb-4">
{`function test() {
  console.log(x);
  let x = 5;
}`}
              </pre>
              <details className="mt-4">
                <summary className="cursor-pointer font-semibold text-blue-600 hover:text-blue-800">
                  Ver respuesta
                </summary>
                <div className="mt-4 p-4 bg-gray-50 rounded">
                  <p className="text-gray-800">
                    <strong>Respuesta:</strong> ReferenceError debido a la Temporal Dead Zone.
                    <code className="bg-gray-200 px-2 py-1 rounded ml-1">let</code> es elevado pero no inicializado.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-white border border-gray-300 p-6 rounded">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Q3: Explica el output</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto mb-4">
{`foo();
var foo = function() {
  console.log('A');
};
function foo() {
  console.log('B');
}`}
              </pre>
              <details className="mt-4">
                <summary className="cursor-pointer font-semibold text-blue-600 hover:text-blue-800">
                  Ver respuesta
                </summary>
                <div className="mt-4 p-4 bg-gray-50 rounded">
                  <p className="text-gray-800 mb-2"><strong>Respuesta:</strong> Imprime "B"</p>
                  <p className="text-gray-800">
                    La function declaration es elevada completamente. La asignación de var ocurre después
                    de la llamada.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Recursos Adicionales</h2>
          <div className="bg-gray-50 p-6 rounded">
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="mr-2">📚</span>
                <span>MDN: Hoisting - Documentación oficial</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📖</span>
                <span>You Don't Know JS: Scope & Closures</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🎥</span>
                <span>JavaScript: Understanding the Weird Parts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">💻</span>
                <span>ESLint rules: no-use-before-define</span>
              </li>
            </ul>
          </div>
        </section>

      </main>
    </div>
  );
}

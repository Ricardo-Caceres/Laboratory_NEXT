import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import { AdvancedJSDemo } from './_client_demo';

export default function AdvancedJSPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Advanced JavaScript - Características Elite"
        description="**Características profesionales que separan desarrolladores senior de junior.** Técnicas avanzadas raramente enseñadas pero extremadamente poderosas en producción.

# 🎯 ¿Por Qué Aprender Esto?

**El 90% de los developers solo usa:**
- Variables (let/const/var)
- Funciones básicas
- if/else, loops
- Arrays y objetos simples
- async/await básico

**El 10% elite domina:**
- Metaprogramación (Proxy/Reflect)
- Generadores y control de flujo avanzado
- Gestión de memoria (WeakMap/WeakSet)
- Optimizaciones de bajo nivel (bitwise)
- Patrones funcionales avanzados

# 📚 Temas Cubiertos

## 🔄 Control de Flujo Avanzado
**Generators (function\\*)**: Iteración lazy, pausable y reanudable
**Async Generators**: Streams asíncronos con backpressure natural
**Iterators Protocol**: Crea tus propias estructuras iterables

## 🎭 Metaprogramación
**Proxy API**: Intercepta y redefine operaciones fundamentales
**Reflect API**: Métodos de bajo nivel para manipular objetos
**Well-Known Symbols**: Customiza comportamiento interno de objetos

## 💾 Gestión de Memoria
**WeakMap/WeakSet**: Datos privados sin memory leaks
**Garbage Collection**: Control indirecto del GC
**Memory Profiling**: Detecta y previene leaks

## ⚡ Performance y Optimización
**Bitwise Operators**: Operaciones ultra-rápidas a nivel de bits
**BigInt**: Números arbitrariamente grandes sin overflow
**Memoization**: Cache inteligente de resultados

## 🏗️ Patrones Avanzados
**Currying & Partial Application**: Funciones configurables
**Composition over Inheritance**: Mixins y traits modernos
**Trampolining**: Recursión sin stack overflow
**Tagged Templates**: DSLs y sanitización

## 🔒 Encapsulación
**Private Fields (#)**: Privacidad real, no convencional
**Closures avanzados**: Módulos y factories
**Object.defineProperty**: Control granular de propiedades

## 🧪 Características Modernas
**Nullish Coalescing (??)**: Diferente de \\|\\|
**Optional Chaining (?.)**: Navegación segura profunda
**Logical Assignment (\\|\\|=, &&=, ??=)**: Actualización condicional

# ⚠️ Cuándo Usar vs No Usar

## ✅ USA Estas Técnicas Cuando:

**Generators**: 
- Procesar grandes datasets sin cargar todo en memoria
- Implementar state machines complejas
- Control de flujo personalizado (pausar/reanudar)

**Proxy**:
- Sistemas reactivos (como Vue 3)
- Validación automática de datos
- Logging y debugging transparente
- API wrappers con retry logic

**WeakMap**:
- Datos privados en clases pre-ES2015
- Cache que no debe prevenir GC
- Asociar metadata a objetos externos

**Bitwise**:
- Flags y permissions systems
- Optimizaciones críticas de performance
- Algoritmos de bajo nivel (hashing, encoding)

**Currying**:
- Configuración de funciones reutilizables
- Event handlers con parámetros
- Functional pipelines

## ❌ NO Uses Cuando:

**Generators**: Código simple lineal (usa funciones normales)
**Proxy**: Performance crítica (tiene overhead)
**WeakMap**: Necesitas iterar las claves
**Bitwise**: Legibilidad es prioridad sobre micro-optimización
**Currying**: El equipo no está familiarizado con FP

# 🎓 Nivel de Dificultad

**Principiante** (aprende primero):
- BigInt, Nullish Coalescing, Optional Chaining
- Object.defineProperty básico

**Intermedio**:
- Generators, Symbols, WeakMap/WeakSet
- Currying, Composition patterns

**Avanzado**:
- Proxy/Reflect, Async Generators
- Trampolining, Tagged Templates

**Expert**:
- Combinaciones de todo lo anterior
- Optimizaciones de performance profundas

# 💡 Mejores Prácticas

1. **Documentación**: Estas técnicas son menos conocidas, comenta bien
2. **TypeScript**: Usa tipos para hacer el código más claro
3. **Testing**: Escribe tests exhaustivos (comportamiento no obvio)
4. **Team Knowledge**: Asegúrate que tu equipo entiende el código
5. **Performance**: Mide antes de optimizar (no premature optimization)
6. **Readability First**: Si hace el código ilegible, busca alternativa"
        codeContent={[
          {
            filePath: '01-generators/basic-generator.js',
            content: `// ═══════════════════════════════════════════════════════════
// 1. GENERATORS - Control de Flujo Lazy
// ═══════════════════════════════════════════════════════════
// Los generators son funciones que pueden pausar y reanudar su ejecución
// Usan 'function*' y 'yield' para devolver valores uno a la vez

// EJEMPLO BÁSICO: Secuencia infinita sin crash
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++; // Pausa aquí hasta el próximo .next()
  }
}

const gen = infiniteSequence();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// Puede seguir infinitamente sin memory overflow

// ¿Por qué usar generators?
// - Lazy evaluation: solo genera lo que necesitas
// - Memory efficient: no crea todo el array en memoria
// - Control de flujo: pausas y reanudas cuando quieras

// EJEMPLO PRÁCTICO 1: Paginación de datos
function* paginate(data, pageSize) {
  for (let i = 0; i < data.length; i += pageSize) {
    yield data.slice(i, i + pageSize);
  }
}

const largeDataset = Array.from({ length: 100 }, (_, i) => i);
const pages = paginate(largeDataset, 10);

console.log(pages.next().value); // [0, 1, 2, ..., 9]
console.log(pages.next().value); // [10, 11, 12, ..., 19]
// Solo procesa una página a la vez

// EJEMPLO PRÁCTICO 2: Fibonacci infinito
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
const first10 = Array.from({ length: 10 }, () => fib.next().value);
console.log(first10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// EJEMPLO PRÁCTICO 3: ID Generator único
function* idGenerator() {
  let id = 1;
  while (true) {
    yield \`user-\${id++}\`;
  }
}

const createId = idGenerator();
console.log(createId.next().value); // "user-1"
console.log(createId.next().value); // "user-2"`,
          },
          {
            filePath: '01-generators/generator-communication.js',
            content: `// ═══════════════════════════════════════════════════════════
// 1B. GENERATORS - Comunicación Bidireccional
// ═══════════════════════════════════════════════════════════
// Los generators pueden RECIBIR valores con yield

// EJEMPLO: Generator que suma valores enviados
function* runningSum() {
  let sum = 0;
  while (true) {
    // yield puede recibir un valor cuando llamas .next(valor)
    const value = yield sum;
    if (value !== undefined) {
      sum += value;
    }
  }
}

const summer = runningSum();
console.log(summer.next().value);    // 0 (sum inicial)
console.log(summer.next(5).value);   // 5 (sum = 0 + 5)
console.log(summer.next(10).value);  // 15 (sum = 5 + 10)
console.log(summer.next(3).value);   // 18 (sum = 15 + 3)

// EJEMPLO PRÁCTICO: State Machine
function* trafficLight() {
  while (true) {
    yield 'green';
    yield 'yellow';
    yield 'red';
  }
}

const light = trafficLight();
console.log(light.next().value); // 'green'
console.log(light.next().value); // 'yellow'
console.log(light.next().value); // 'red'
console.log(light.next().value); // 'green' (vuelve a empezar)

// EJEMPLO AVANZADO: Task Queue
function* taskQueue() {
  const tasks = [];
  let result;
  
  while (true) {
    const task = yield result;
    
    if (task) {
      tasks.push(task);
    }
    
    if (tasks.length > 0) {
      const currentTask = tasks.shift();
      result = currentTask();
    }
  }
}

const queue = taskQueue();
queue.next(); // Inicializa

queue.next(() => console.log('Task 1'));
queue.next(() => console.log('Task 2'));
queue.next(); // Ejecuta Task 1
queue.next(); // Ejecuta Task 2`,
          },
          {
            filePath: '02-async-generators/basic-async.js',
            content: `// ═══════════════════════════════════════════════════════════
// 2. ASYNC GENERATORS - Streams Asíncronos
// ═══════════════════════════════════════════════════════════
// Combinan generators con async/await para manejar streams de datos asíncronos
// Perfecto para APIs paginadas, WebSockets, file streams

// EJEMPLO BÁSICO: Fetch múltiples páginas
async function* fetchPages(urls) {
  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();
    yield data;
  }
}

// Uso con for-await-of
const urls = ['/api/page1', '/api/page2', '/api/page3'];

for await (const page of fetchPages(urls)) {
  console.log('Received page:', page);
  // Se procesa una página a la vez, esperando cada fetch
}

// VENTAJA: Backpressure natural
// El siguiente fetch no se hace hasta que procesaste el anterior

// EJEMPLO PRÁCTICO 1: API Paginada
async function* fetchAllUsers(apiUrl) {
  let page = 1;
  let hasMore = true;
  
  while (hasMore) {
    const response = await fetch(\`\${apiUrl}?page=\${page}\`);
    const data = await response.json();
    
    yield* data.users; // yield* delega a otro iterable
    
    hasMore = data.hasNextPage;
    page++;
    
    // Opcional: delay entre requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

// Uso: procesa usuarios uno a uno sin cargar todos en memoria
for await (const user of fetchAllUsers('/api/users')) {
  console.log('Processing user:', user.name);
  // await processUser(user); // Procesa cada uno
}

// EJEMPLO PRÁCTICO 2: Rate-Limited Stream
async function* throttledStream(stream, delayMs) {
  for await (const chunk of stream) {
    await new Promise(resolve => setTimeout(resolve, delayMs));
    yield chunk;
  }
}

// Limita a máximo 1 item por segundo
for await (const item of throttledStream(fetchPages(urls), 1000)) {
  console.log('Throttled item:', item);
}`,
          },
          {
            filePath: '02-async-generators/websocket-stream.js',
            content: `// ═══════════════════════════════════════════════════════════
// 2B. ASYNC GENERATORS - WebSocket Stream
// ═══════════════════════════════════════════════════════════
// Async generators son perfectos para manejar WebSockets

// EJEMPLO: WebSocket como async iterable
async function* websocketStream(url) {
  const ws = new WebSocket(url);
  
  // Queue para mensajes que llegan antes de que los consumas
  const messageQueue = [];
  let resolveNext = null;
  
  ws.onmessage = (event) => {
    if (resolveNext) {
      resolveNext(event.data);
      resolveNext = null;
    } else {
      messageQueue.push(event.data);
    }
  };
  
  ws.onerror = (error) => {
    if (resolveNext) {
      resolveNext(Promise.reject(error));
    }
  };
  
  // Espera a que se abra la conexión
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });
  
  try {
    while (ws.readyState === WebSocket.OPEN) {
      // Si hay mensajes en queue, retornarlos
      if (messageQueue.length > 0) {
        yield messageQueue.shift();
      } else {
        // Esperar el siguiente mensaje
        yield await new Promise(resolve => {
          resolveNext = resolve;
        });
      }
    }
  } finally {
    ws.close();
  }
}

// Uso: procesa mensajes como stream
for await (const message of websocketStream('ws://localhost:8080')) {
  const data = JSON.parse(message);
  console.log('Received:', data);
  
  // Backpressure automático: si processing es lento,
  // los mensajes se acumulan en el queue
  await processMessage(data);
}

// EJEMPLO AVANZADO: Merge múltiples WebSockets
async function* mergeWebSockets(...urls) {
  const streams = urls.map(url => websocketStream(url));
  const iterators = streams.map(stream => stream[Symbol.asyncIterator]());
  
  while (true) {
    // Race entre todos los streams
    const results = await Promise.race(
      iterators.map(async (iter, idx) => ({
        idx,
        result: await iter.next()
      }))
    );
    
    if (results.result.done) break;
    yield results.result.value;
  }
}`,
          },
          {
            filePath: '03-proxy/reactive-system.js',
            content: `// ═══════════════════════════════════════════════════════════
// 3. PROXY - Sistema Reactivo (como Vue 3)
// ═══════════════════════════════════════════════════════════
// Proxy intercepta operaciones fundamentales en objetos
// Vue 3 usa Proxy para su sistema de reactividad

// EJEMPLO BÁSICO: Logging automático
function createLogger(target, name) {
  return new Proxy(target, {
    get(obj, prop) {
      console.log(\`📖 Reading \${name}.\${String(prop)}\`);
      return Reflect.get(obj, prop);
    },
    set(obj, prop, value) {
      console.log(\`✏️  Writing \${name}.\${String(prop)} = \${value}\`);
      return Reflect.set(obj, prop, value);
    }
  });
}

const state = createLogger({ count: 0 }, 'state');
state.count++;
// 📖 Reading state.count
// ✏️  Writing state.count = 1

// EJEMPLO PRÁCTICO 1: Validación automática
function createValidator(target, rules) {
  return new Proxy(target, {
    set(obj, prop, value) {
      const rule = rules[prop];
      
      if (rule) {
        if (rule.type && typeof value !== rule.type) {
          throw new TypeError(\`\${String(prop)} must be \${rule.type}\`);
        }
        
        if (rule.min !== undefined && value < rule.min) {
          throw new RangeError(\`\${String(prop)} must be >= \${rule.min}\`);
        }
        
        if (rule.max !== undefined && value > rule.max) {
          throw new RangeError(\`\${String(prop)} must be <= \${rule.max}\`);
        }
      }
      
      return Reflect.set(obj, prop, value);
    }
  });
}

const person = createValidator({}, {
  name: { type: 'string' },
  age: { type: 'number', min: 0, max: 150 }
});

person.name = 'Alice';     // ✓ OK
person.age = 25;           // ✓ OK
// person.age = -5;        // ✗ RangeError: age must be >= 0
// person.age = 'young';   // ✗ TypeError: age must be number

// EJEMPLO PRÁCTICO 2: Reactive State (como Vue)
function reactive(target, callback) {
  return new Proxy(target, {
    set(obj, prop, value) {
      const oldValue = obj[prop];
      const result = Reflect.set(obj, prop, value);
      
      if (oldValue !== value) {
        callback(prop, value, oldValue);
      }
      
      return result;
    }
  });
}

const reactiveState = reactive({ count: 0 }, (prop, newVal, oldVal) => {
  console.log(\`State changed: \${prop} from \${oldVal} to \${newVal}\`);
  // Aquí Vue re-renderizaría el componente
});

reactiveState.count = 1;
// State changed: count from 0 to 1`,
          },
          {
            filePath: '03-proxy/advanced-traps.js',
            content: `// ═══════════════════════════════════════════════════════════
// 3B. PROXY - Traps Avanzados
// ═══════════════════════════════════════════════════════════
// Proxy tiene 13 traps para interceptar casi cualquier operación

// EJEMPLO 1: Negative Array Indexing (como Python)
function createNegativeArray(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      let index = parseInt(prop);
      
      if (!isNaN(index)) {
        // Si índice es negativo, cuenta desde el final
        if (index < 0) {
          index = target.length + index;
        }
        return target[index];
      }
      
      return Reflect.get(target, prop);
    }
  });
}

const arr = createNegativeArray([1, 2, 3, 4, 5]);
console.log(arr[-1]);  // 5 (último)
console.log(arr[-2]);  // 4 (penúltimo)

// EJEMPLO 2: Default Values (como Python defaultdict)
function createDefaultDict(defaultValue) {
  return new Proxy({}, {
    get(target, prop) {
      if (!(prop in target)) {
        target[prop] = typeof defaultValue === 'function' 
          ? defaultValue() 
          : defaultValue;
      }
      return Reflect.get(target, prop);
    }
  });
}

const scores = createDefaultDict(0);
scores.alice += 10;  // scores.alice era undefined, ahora es 10
scores.bob += 5;     // scores.bob era undefined, ahora es 5
console.log(scores); // { alice: 10, bob: 5 }

// EJEMPLO 3: Hidden Properties (no aparecen en Object.keys)
function createHiddenProps(target, hiddenProps) {
  return new Proxy(target, {
    get(obj, prop) {
      return Reflect.get(obj, prop);
    },
    set(obj, prop, value) {
      return Reflect.set(obj, prop, value);
    },
    has(obj, prop) {
      if (hiddenProps.includes(prop)) return false;
      return Reflect.has(obj, prop);
    },
    ownKeys(obj) {
      return Reflect.ownKeys(obj).filter(
        key => !hiddenProps.includes(key)
      );
    }
  });
}

const user = createHiddenProps(
  { name: 'Alice', _password: 'secret123', age: 30 },
  ['_password']
);

console.log(Object.keys(user)); // ['name', 'age'] (_password oculto)
console.log('_password' in user); // false
console.log(user._password); // 'secret123' (aún accesible directamente)

// EJEMPLO 4: Immutable Object
function createImmutable(target) {
  return new Proxy(target, {
    set() {
      throw new Error('Cannot modify immutable object');
    },
    deleteProperty() {
      throw new Error('Cannot delete from immutable object');
    }
  });
}

const config = createImmutable({ apiUrl: 'https://api.example.com' });
// config.apiUrl = 'https://evil.com'; // Error: Cannot modify`,
          },
          {
            filePath: '04-weakmap/private-data.js',
            content: `// ═══════════════════════════════════════════════════════════
// 4. WEAKMAP - Datos Privados Sin Memory Leaks
// ═══════════════════════════════════════════════════════════
// WeakMap permite asociar datos a objetos sin prevenir garbage collection
// Perfecto para datos privados antes de que existiera #privateField

// PROBLEMA: Datos "privados" con _ son accesibles
class PersonBad {
  constructor(name, ssn) {
    this.name = name;
    this._ssn = ssn; // Convención, no privado de verdad
  }
}

const p = new PersonBad('Alice', '123-45-6789');
console.log(p._ssn); // '123-45-6789' - ¡Accesible!

// SOLUCIÓN 1: WeakMap para privacidad real
const privateData = new WeakMap();

class Person {
  constructor(name, ssn) {
    this.name = name; // Público
    privateData.set(this, { ssn }); // Privado de verdad
  }
  
  getSSN() {
    return privateData.get(this).ssn;
  }
  
  verifySSN(ssn) {
    return privateData.get(this).ssn === ssn;
  }
}

const person = new Person('Alice', '123-45-6789');
console.log(person.name);      // 'Alice'
console.log(person.ssn);       // undefined - no accesible
console.log(person.getSSN());  // '123-45-6789' - solo vía método

// VENTAJA: Garbage Collection automático
let user = new Person('Bob', '987-65-4321');
// Cuando user = null, el WeakMap automáticamente limpia la entrada
user = null; // La entrada en privateData se elimina automáticamente

// SOLUCIÓN 2: Múltiples propiedades privadas
const _private = new WeakMap();

class BankAccount {
  constructor(owner, balance, pin) {
    this.owner = owner; // Público
    _private.set(this, {
      balance,  // Privado
      pin,      // Privado
      transactions: [] // Privado
    });
  }
  
  deposit(amount) {
    const data = _private.get(this);
    data.balance += amount;
    data.transactions.push({ type: 'deposit', amount, date: new Date() });
  }
  
  withdraw(amount, pin) {
    const data = _private.get(this);
    
    if (data.pin !== pin) {
      throw new Error('Invalid PIN');
    }
    
    if (data.balance < amount) {
      throw new Error('Insufficient funds');
    }
    
    data.balance -= amount;
    data.transactions.push({ type: 'withdraw', amount, date: new Date() });
  }
  
  getBalance(pin) {
    const data = _private.get(this);
    if (data.pin !== pin) throw new Error('Invalid PIN');
    return data.balance;
  }
}

const account = new BankAccount('Alice', 1000, '1234');
account.deposit(500);
console.log(account.getBalance('1234')); // 1500
// console.log(account.balance); // undefined - no accesible
// console.log(account.pin);     // undefined - no accesible`,
          },
          {
            filePath: '04-weakmap/cache-without-leaks.js',
            content: `// ═══════════════════════════════════════════════════════════
// 4B. WEAKMAP - Cache Sin Memory Leaks
// ═══════════════════════════════════════════════════════════
// WeakMap es perfecto para caching porque no previene GC

// PROBLEMA: Cache con Map normal causa memory leak
const cacheMap = new Map();

function expensiveOperation(obj) {
  if (cacheMap.has(obj)) {
    console.log('✓ Cache hit');
    return cacheMap.get(obj);
  }
  
  console.log('✗ Cache miss - computing...');
  const result = JSON.stringify(obj).length; // Operación "cara"
  cacheMap.set(obj, result);
  return result;
}

let data = { huge: 'x'.repeat(1000000) };
expensiveOperation(data); // Cache miss
expensiveOperation(data); // Cache hit

data = null; // ¡El objeto sigue en memoria por el Map!
// Memory leak: cacheMap mantiene la referencia

// SOLUCIÓN: WeakMap para cache que no leak
const cacheWeakMap = new WeakMap();

function expensiveOperationFixed(obj) {
  if (cacheWeakMap.has(obj)) {
    console.log('✓ Cache hit');
    return cacheWeakMap.get(obj);
  }
  
  console.log('✗ Cache miss - computing...');
  const result = JSON.stringify(obj).length;
  cacheWeakMap.set(obj, result);
  return result;
}

let data2 = { huge: 'x'.repeat(1000000) };
expensiveOperationFixed(data2); // Cache miss
expensiveOperationFixed(data2); // Cache hit

data2 = null; // WeakMap permite que el GC limpie el objeto
// No hay memory leak

// EJEMPLO PRÁCTICO: Memoization de funciones
function memoizeWithWeakMap(fn) {
  const cache = new WeakMap();
  
  return function(obj) {
    if (cache.has(obj)) {
      console.log('Returning cached result');
      return cache.get(obj);
    }
    
    const result = fn(obj);
    cache.set(obj, result);
    return result;
  };
}

const processUser = memoizeWithWeakMap((user) => {
  console.log('Processing user:', user.name);
  return {
    processed: true,
    timestamp: Date.now(),
    data: user
  };
});

const user1 = { name: 'Alice', age: 30 };
processUser(user1); // Processing user: Alice
processUser(user1); // Returning cached result

// EJEMPLO: Metadata sin contaminar objetos
const metadata = new WeakMap();

function addMetadata(obj, meta) {
  metadata.set(obj, meta);
}

function getMetadata(obj) {
  return metadata.get(obj);
}

const element = document.createElement('div');
addMetadata(element, {
  created: Date.now(),
  clicks: 0
});

// El elemento puede ser removido del DOM y GC lo limpia
// sin tener que limpiar manualmente el metadata`,
          },
          {
            filePath: '05-symbols/well-known-symbols.js',
            content: `// ═══════════════════════════════════════════════════════════
// 5. SYMBOLS - Well-Known Symbols (Metaprogramación)
// ═══════════════════════════════════════════════════════════
// Symbols permiten customizar el comportamiento interno de objetos
// JavaScript tiene "well-known symbols" predefinidos

// EJEMPLO 1: Symbol.iterator - Custom Iterator
class Collection {
  constructor(items) {
    this.items = items;
  }
  
  // Hace la clase iterable con for...of
  *[Symbol.iterator]() {
    yield* this.items;
  }
}

const col = new Collection([1, 2, 3, 4, 5]);

// Ahora funciona con for...of
for (const item of col) {
  console.log(item); // 1, 2, 3, 4, 5
}

// Y con spread operator
const arr = [...col]; // [1, 2, 3, 4, 5]

// EJEMPLO 2: Symbol.toStringTag - Custom toString
class User {
  constructor(name) {
    this.name = name;
  }
  
  [Symbol.toStringTag] = 'User';
}

const user = new User('Alice');
console.log(user.toString());         // [object User]
console.log(Object.prototype.toString.call(user)); // [object User]

// EJEMPLO 3: Symbol.toPrimitive - Conversión personalizada
class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }
  
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.amount;
    }
    if (hint === 'string') {
      return \`\${this.amount} \${this.currency}\`;
    }
    // hint === 'default'
    return this.amount;
  }
}

const price = new Money(100, 'USD');
console.log(+price);           // 100 (conversion a number)
console.log(\`Price: \${price}\`); // "Price: 100 USD" (conversion a string)
console.log(price + 50);       // 150 (default hint)

// EJEMPLO 4: Symbol para propiedades "privadas"
const _id = Symbol('id');
const _password = Symbol('password');

class Account {
  constructor(id, password) {
    this[_id] = id;           // No enumerable
    this[_password] = password; // No enumerable
    this.username = 'user';   // Enumerable
  }
  
  verify(password) {
    return this[_password] === password;
  }
}

const account = new Account(123, 'secret');
console.log(account.username);     // 'user'
console.log(account[_password]);   // 'secret'
console.log(Object.keys(account)); // ['username'] - symbols no aparecen

// EJEMPLO 5: Symbol.hasInstance - Custom instanceof
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

console.log([1, 2, 3] instanceof MyArray); // true
console.log({} instanceof MyArray);        // false

// EJEMPLO 6: Symbol.species - Control de herencia
class MyArrayExtended extends Array {
  static get [Symbol.species]() {
    return Array; // map, filter, etc retornan Array en vez de MyArrayExtended
  }
}

const myArr = new MyArrayExtended(1, 2, 3);
const mapped = myArr.map(x => x * 2);
console.log(mapped instanceof MyArrayExtended); // false
console.log(mapped instanceof Array);          // true`,
          },
          {
            filePath: '06-bitwise/operations.js',
            content: `// ═══════════════════════════════════════════════════════════
// 6. BITWISE OPERATORS - Optimizaciones de Bajo Nivel
// ═══════════════════════════════════════════════════════════
// Operaciones a nivel de bits, ultra-rápidas para casos específicos

// OPERADORES BÁSICOS
const a = 5;  // 0101 en binario
const b = 3;  // 0011 en binario

console.log(a & b);   // 1 (0001) - AND: bits que están en ambos
console.log(a | b);   // 7 (0111) - OR: bits que están en alguno
console.log(a ^ b);   // 6 (0110) - XOR: bits que están en solo uno
console.log(~a);      // -6 - NOT: invierte todos los bits
console.log(a << 1);  // 10 (1010) - LEFT SHIFT: multiplica por 2
console.log(a >> 1);  // 2 (0010) - RIGHT SHIFT: divide por 2

// EJEMPLO 1: Multiplicación/División por potencias de 2 (ultra-rápido)
const num = 5;
console.log(num << 1);  // 10 (x2)
console.log(num << 2);  // 20 (x4)
console.log(num << 3);  // 40 (x8)
console.log(num >> 1);  // 2 (÷2)
console.log(num >> 2);  // 1 (÷4)

// EJEMPLO 2: Convertir a entero (más rápido que Math.floor)
const float = 3.14159;
console.log(~~float);      // 3
console.log(float | 0);    // 3
console.log(float >> 0);   // 3

// EJEMPLO 3: Flags y Permisos (como Unix chmod)
const READ    = 1 << 0;  // 0001 = 1
const WRITE   = 1 << 1;  // 0010 = 2
const EXECUTE = 1 << 2;  // 0100 = 4
const DELETE  = 1 << 3;  // 1000 = 8

// Combinar permisos con OR
let permissions = READ | WRITE; // 0011 = 3

// Agregar permiso
permissions |= EXECUTE; // 0111 = 7

// Verificar si tiene permiso (AND)
const hasRead = (permissions & READ) !== 0;      // true
const hasDelete = (permissions & DELETE) !== 0;  // false

// Remover permiso (AND NOT)
permissions &= ~WRITE; // 0101 = 5 (READ + EXECUTE)

// Toggle permiso (XOR)
permissions ^= EXECUTE; // 0001 = 1 (solo READ)

console.log('Permissions:', {
  read: (permissions & READ) !== 0,
  write: (permissions & WRITE) !== 0,
  execute: (permissions & EXECUTE) !== 0,
  delete: (permissions & DELETE) !== 0
});

// EJEMPLO 4: Swap de variables sin variable temporal
let x = 5, y = 10;
x ^= y;  // x = 15 (0101 XOR 1010 = 1111)
y ^= x;  // y = 5  (1010 XOR 1111 = 0101)
x ^= y;  // x = 10 (1111 XOR 0101 = 1010)
console.log(x, y); // 10, 5

// EJEMPLO 5: Verificar si es par/impar (más rápido que %)
const isEven = (n) => (n & 1) === 0;
const isOdd = (n) => (n & 1) === 1;

console.log(isEven(4));  // true
console.log(isOdd(7));   // true

// EJEMPLO 6: Feature Flags en una aplicación
const FEATURE_FLAGS = {
  DARK_MODE: 1 << 0,      // 1
  NOTIFICATIONS: 1 << 1,  // 2
  ANALYTICS: 1 << 2,      // 4
  BETA_FEATURES: 1 << 3,  // 8
  PREMIUM: 1 << 4         // 16
};

class UserSettings {
  constructor() {
    this.flags = 0;
  }
  
  enable(feature) {
    this.flags |= feature;
  }
  
  disable(feature) {
    this.flags &= ~feature;
  }
  
  toggle(feature) {
    this.flags ^= feature;
  }
  
  has(feature) {
    return (this.flags & feature) !== 0;
  }
  
  toString() {
    return this.flags.toString(2).padStart(5, '0');
  }
}

const settings = new UserSettings();
settings.enable(FEATURE_FLAGS.DARK_MODE);
settings.enable(FEATURE_FLAGS.NOTIFICATIONS);
settings.enable(FEATURE_FLAGS.PREMIUM);

console.log('Settings:', settings.toString()); // 10011
console.log('Has dark mode:', settings.has(FEATURE_FLAGS.DARK_MODE));
console.log('Has analytics:', settings.has(FEATURE_FLAGS.ANALYTICS));`,
          },
          {
            filePath: '07-currying/functional-patterns.js',
            content: `// ═══════════════════════════════════════════════════════════
// 7. CURRYING & PARTIAL APPLICATION
// ═══════════════════════════════════════════════════════════
// Currying transforma una función de múltiples argumentos en funciones anidadas

// EJEMPLO BÁSICO: Manual currying
function add(a) {
  return function(b) {
    return a + b;
  };
}

const add5 = add(5);
console.log(add5(3));  // 8
console.log(add5(10)); // 15

// Arrow function version
const multiply = (a) => (b) => a * b;
const double = multiply(2);
console.log(double(5)); // 10

// EJEMPLO: Curry automático (función genérica)
function curry(fn) {
  return function curried(...args) {
    // Si ya tenemos todos los argumentos, ejecuta la función
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    // Si no, retorna función que espera más argumentos
    return function(...nextArgs) {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
}

// Uso del curry genérico
const sum3 = (a, b, c) => a + b + c;
const curriedSum = curry(sum3);

console.log(curriedSum(1)(2)(3));     // 6
console.log(curriedSum(1, 2)(3));     // 6
console.log(curriedSum(1)(2, 3));     // 6
console.log(curriedSum(1, 2, 3));     // 6

// EJEMPLO PRÁCTICO 1: Event handlers configurables
const handleEvent = curry((eventType, selector, handler, event) => {
  if (event.target.matches(selector)) {
    handler(event);
  }
});

// Configurar handlers reutilizables
const onClickButton = handleEvent('click')('.button');
const onClickSubmit = handleEvent('click')('.submit-btn');

// Usar en código
document.addEventListener('click', onClickButton((e) => {
  console.log('Button clicked!', e);
}));

document.addEventListener('click', onClickSubmit((e) => {
  console.log('Submit clicked!', e);
}));

// EJEMPLO PRÁCTICO 2: Configuración de fetch
const fetchData = curry((method, headers, url, body) => {
  return fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });
});

// Pre-configurar diferentes tipos de requests
const jsonHeaders = { 'Content-Type': 'application/json' };
const getData = fetchData('GET')(jsonHeaders);
const postData = fetchData('POST')(jsonHeaders);

// Usar
getData('/api/users')
  .then(res => res.json())
  .then(console.log);

postData('/api/users')({ name: 'Alice', age: 30 })
  .then(res => res.json())
  .then(console.log);

// EJEMPLO PRÁCTICO 3: Validators reutilizables
const validate = curry((rule, value) => rule(value));

const minLength = (min) => (str) => str.length >= min;
const maxLength = (max) => (str) => str.length <= max;
const matches = (regex) => (str) => regex.test(str);

const validateUsername = validate(minLength(3));
const validatePassword = validate(minLength(8));
const validateEmail = validate(matches(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/));

console.log(validateUsername('ab'));        // false
console.log(validateUsername('alice'));     // true
console.log(validatePassword('weak'));      // false
console.log(validatePassword('Strong123!')); // true
console.log(validateEmail('test@test.com')); // true

// EJEMPLO PRÁCTICO 4: Logging con contexto
const log = curry((level, context, message) => {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] [\${level}] [\${context}] \${message}\`);
});

const infoLog = log('INFO');
const errorLog = log('ERROR');
const userLog = infoLog('User');
const apiLog = errorLog('API');

userLog('User logged in');        // [timestamp] [INFO] [User] User logged in
apiLog('Request failed');         // [timestamp] [ERROR] [API] Request failed

// EJEMPLO PRÁCTICO 5: Compose/Pipe funciones
const compose = (...fns) => (x) => 
  fns.reduceRight((acc, fn) => fn(acc), x);

const pipe = (...fns) => (x) => 
  fns.reduce((acc, fn) => fn(acc), x);

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

const calc1 = compose(square, double, addOne);
console.log(calc1(3)); // ((3 + 1) * 2)² = 64

const calc2 = pipe(addOne, double, square);
console.log(calc2(3)); // ((3 + 1) * 2)² = 64`,
          },
          {
            filePath: '08-trampolining/tail-recursion.js',
            content: `// ═══════════════════════════════════════════════════════════
// 8. TRAMPOLINING - Recursión Sin Stack Overflow
// ═══════════════════════════════════════════════════════════
// JavaScript no tiene TCO (Tail Call Optimization)
// Trampolining permite recursión infinita sin llenar el call stack

// PROBLEMA: Recursión normal causa stack overflow
function factorialBad(n, acc = 1) {
  if (n <= 1) return acc;
  return factorialBad(n - 1, n * acc);
}

// factorialBad(100000); // RangeError: Maximum call stack size exceeded

// SOLUCIÓN: Trampolining
const trampoline = (fn) => (...args) => {
  let result = fn(...args);
  
  // Ejecuta funciones retornadas hasta obtener un valor
  while (typeof result === 'function') {
    result = result();
  }
  
  return result;
};

// Factorial con trampolining
const factorial = trampoline(function fact(n, acc = 1) {
  if (n <= 1) return acc;
  
  // Retorna una función thunk en vez de llamar recursivamente
  return () => fact(n - 1, n * acc);
});

console.log(factorial(5));      // 120
console.log(factorial(10));     // 3628800
console.log(factorial(100000)); // Infinity (pero no stack overflow!)

// EJEMPLO 2: Fibonacci con trampolining
const fibonacci = trampoline(function fib(n, a = 0, b = 1) {
  if (n === 0) return a;
  if (n === 1) return b;
  
  return () => fib(n - 1, b, a + b);
});

console.log(fibonacci(10));    // 55
console.log(fibonacci(100));   // 354224848179262000000
console.log(fibonacci(1000));  // Muy grande pero funciona!

// EJEMPLO 3: Sum de array con trampolining
const sumArray = trampoline(function sum(arr, acc = 0, index = 0) {
  if (index >= arr.length) return acc;
  
  return () => sum(arr, acc + arr[index], index + 1);
});

const hugeArray = Array.from({ length: 100000 }, (_, i) => i + 1);
console.log(sumArray(hugeArray)); // 5000050000

// EJEMPLO 4: Buscar en árbol con trampolining
const findInTree = trampoline(function find(node, predicate) {
  if (!node) return null;
  
  if (predicate(node)) return node;
  
  if (node.left) {
    const found = find(node.left, predicate);
    if (found) return found;
  }
  
  if (node.right) {
    return () => find(node.right, predicate);
  }
  
  return null;
});

// Tree structure
const tree = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4 },
    right: { value: 5 }
  },
  right: {
    value: 3,
    left: { value: 6 },
    right: { value: 7 }
  }
};

const node = findInTree(tree, (n) => n.value === 5);
console.log(node); // { value: 5 }

// EJEMPLO 5: Generator-based Trampolining (alternativa)
function* factorialGen(n, acc = 1) {
  while (n > 1) {
    acc *= n;
    n--;
    yield; // Pause para evitar stack overflow
  }
  return acc;
}

function runGenerator(gen) {
  let result = gen.next();
  while (!result.done) {
    result = gen.next();
  }
  return result.value;
}

console.log(runGenerator(factorialGen(10))); // 3628800`,
          },
          {
            filePath: '09-composition/mixins.js',
            content: `// ═══════════════════════════════════════════════════════════
// 9. COMPOSITION OVER INHERITANCE - Mixins Modernos
// ═══════════════════════════════════════════════════════════
// Prefiere composición sobre herencia para mayor flexibilidad

// PROBLEMA: Herencia rígida (Diamond Problem)
class Animal {
  eat() { return 'eating'; }
}

class Bird extends Animal {
  fly() { return 'flying'; }
}

class Fish extends Animal {
  swim() { return 'swimming'; }
}

// ¿Qué pasa con un pato? Vuela Y nada
// No puede heredar de Bird y Fish al mismo tiempo

// SOLUCIÓN 1: Mixins funcionales
const CanEat = (Base) => class extends Base {
  eat() {
    return \`\${this.name} is eating\`;
  }
};

const CanFly = (Base) => class extends Base {
  fly() {
    return \`\${this.name} is flying\`;
  }
};

const CanSwim = (Base) => class extends Base {
  swim() {
    return \`\${this.name} is swimming\`;
  }
};

// Composición: combina comportamientos
class AnimalBase {
  constructor(name) {
    this.name = name;
  }
}

class Duck extends CanFly(CanSwim(CanEat(AnimalBase))) {}
class Penguin extends CanSwim(CanEat(AnimalBase)) {}
class Eagle extends CanFly(CanEat(AnimalBase)) {}

const duck = new Duck('Donald');
console.log(duck.eat());  // Donald is eating
console.log(duck.fly());  // Donald is flying
console.log(duck.swim()); // Donald is swimming

const penguin = new Penguin('Pingu');
console.log(penguin.eat());  // Pingu is eating
console.log(penguin.swim()); // Pingu is swimming
// penguin.fly(); // Error: no existe

// SOLUCIÓN 2: Object.assign para mixins (sin extends)
const eater = {
  eat() {
    return \`\${this.name} is eating\`;
  }
};

const flyer = {
  fly() {
    return \`\${this.name} is flying\`;
  }
};

const swimmer = {
  swim() {
    return \`\${this.name} is swimming\`;
  }
};

class Animal2 {
  constructor(name) {
    this.name = name;
  }
}

// Aplicar mixins
Object.assign(Animal2.prototype, eater, flyer, swimmer);

const animal = new Animal2('Multi');
console.log(animal.eat());
console.log(animal.fly());
console.log(animal.swim());

// EJEMPLO PRÁCTICO: Mixins para React (antes de hooks)
const WithLogger = (Component) => {
  return class extends Component {
    componentDidMount() {
      console.log('Component mounted:', this.constructor.name);
      if (super.componentDidMount) {
        super.componentDidMount();
      }
    }
  };
};

const WithDataFetching = (Component) => {
  return class extends Component {
    state = { data: null, loading: true };
    
    async componentDidMount() {
      const data = await this.fetchData();
      this.setState({ data, loading: false });
      
      if (super.componentDidMount) {
        super.componentDidMount();
      }
    }
    
    fetchData() {
      // Override en componente hijo
      return Promise.resolve([]);
    }
  };
};

// Componer múltiples HOCs
// const EnhancedComponent = WithLogger(WithDataFetching(MyComponent));

// EJEMPLO AVANZADO: Traits con Symbol para evitar colisiones
const _fly = Symbol('fly');
const _swim = Symbol('swim');

const FlyingTrait = {
  [_fly]() {
    return 'flying';
  },
  get canFly() {
    return true;
  }
};

const SwimmingTrait = {
  [_swim]() {
    return 'swimming';
  },
  get canSwim() {
    return true;
  }
};

class SuperAnimal {
  constructor(name) {
    this.name = name;
    Object.assign(this, FlyingTrait, SwimmingTrait);
  }
  
  fly() {
    return this[_fly]();
  }
  
  swim() {
    return this[_swim]();
  }
}

const superDuck = new SuperAnimal('SuperDuck');
console.log(superDuck.fly());
console.log(superDuck.swim());
console.log(superDuck.canFly);  // true
console.log(superDuck.canSwim); // true`,
          },
          {
            filePath: '10-tagged-templates/dsl.js',
            content: `// ═══════════════════════════════════════════════════════════
// 10. TAGGED TEMPLATE LITERALS - DSLs en JavaScript
// ═══════════════════════════════════════════════════════════
// Tagged templates permiten crear Domain-Specific Languages (DSLs)

// EJEMPLO BÁSICO: Función tag
function tag(strings, ...values) {
  console.log('Strings:', strings); // Array de literales
  console.log('Values:', values);   // Array de expresiones
}

const name = 'Alice';
const age = 30;
tag\`Hello \${name}, you are \${age} years old\`;
// Strings: ['Hello ', ', you are ', ' years old']
// Values: ['Alice', 30]

// EJEMPLO 1: SQL seguro contra injection
function sql(strings, ...values) {
  // Construye query parametrizada
  const query = strings.reduce((acc, str, i) => {
    return acc + str + (values[i] !== undefined ? '?' : '');
  }, '');
  
  return {
    query,
    params: values
  };
}

const userId = "1' OR '1'='1"; // Intento de SQL injection
const query = sql\`SELECT * FROM users WHERE id = \${userId}\`;

console.log(query);
// {
//   query: "SELECT * FROM users WHERE id = ?",
//   params: ["1' OR '1'='1"]
// }
// Los params se escapan en el driver, previniendo injection

// EJEMPLO 2: HTML Sanitization
function html(strings, ...values) {
  const escapeHtml = (str) => {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };
  
  return strings.reduce((acc, str, i) => {
    return acc + str + (values[i] !== undefined ? escapeHtml(values[i]) : '');
  }, '');
}

const userInput = '<script>alert("XSS")</script>';
const safeHtml = html\`<div>User said: \${userInput}</div>\`;

console.log(safeHtml);
// <div>User said: &lt;script&gt;alert("XSS")&lt;/script&gt;</div>

// EJEMPLO 3: i18n (Internationalization)
const translations = {
  en: { greeting: 'Hello', goodbye: 'Goodbye' },
  es: { greeting: 'Hola', goodbye: 'Adiós' }
};

let currentLang = 'en';

function i18n(strings, ...values) {
  // Reemplaza keys por traducciones
  return strings.reduce((acc, str, i) => {
    const value = values[i];
    const translated = value && translations[currentLang][value] 
      ? translations[currentLang][value] 
      : value;
    
    return acc + str + (translated || '');
  }, '');
}

console.log(i18n\`\${'greeting'}, world!\`); // Hello, world!
currentLang = 'es';
console.log(i18n\`\${'greeting'}, world!\`); // Hola, world!

// EJEMPLO 4: CSS-in-JS (como styled-components)
function css(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    const value = typeof values[i] === 'function' 
      ? values[i]() // Evalúa funciones
      : values[i];
    
    return acc + str + (value || '');
  }, '');
}

const primaryColor = () => '#007bff';
const fontSize = 16;

const styles = css\`
  .button {
    background-color: \${primaryColor};
    font-size: \${fontSize}px;
    padding: 10px 20px;
  }
\`;

console.log(styles);

// EJEMPLO 5: GraphQL-like DSL
function gql(strings, ...values) {
  const query = strings.reduce((acc, str, i) => {
    return acc + str + (values[i] || '');
  }, '');
  
  return {
    kind: 'Document',
    query: query.trim(),
    variables: values.filter(v => typeof v === 'object')
  };
}

const userFields = 'id name email';
const queryDef = gql\`
  query GetUser {
    user {
      \${userFields}
    }
  }
\`;

console.log(queryDef);

// EJEMPLO 6: URL Builder
function url(strings, ...values) {
  const base = strings[0];
  const params = values.filter(v => v !== undefined && v !== null);
  
  if (params.length === 0) return base;
  
  const queryString = params
    .map((param, i) => {
      if (typeof param === 'object') {
        return Object.entries(param)
          .map(([k, v]) => \`\${encodeURIComponent(k)}=\${encodeURIComponent(v)}\`)
          .join('&');
      }
      return param;
    })
    .join('&');
  
  return \`\${base}?\${queryString}\`;
}

const search = 'javascript tutorial';
const page = 2;
const apiUrl = url\`https://api.example.com/search\${{ q: search, page }}\`;

console.log(apiUrl);
// https://api.example.com/search?q=javascript%20tutorial&page=2`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">🚀 Advanced JavaScript</h2>
          <AdvancedJSDemo />
        </div>
      </RightPanel>
    </div>
  );
}

import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import { AdvancedJSDemo } from './_client_demo';

export default function AdvancedJSPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Advanced JavaScript Features"
        description="**Features profesionales que separan a los desarrolladores elite del resto.** Técnicas avanzadas raramente enseñadas pero extremadamente poderosas.

**Temas Cubiertos:**
- Generator Functions (function*) - Control de flujo lazy
- Async Generators - Streams asíncronos
- Proxy & Reflect API - Metaprogramación
- WeakMap & WeakSet - Gestión de memoria
- Symbol & Well-Known Symbols - Propiedades privadas
- Iterators & Iterables - Protocolos de iteración
- Tagged Template Literals - DSLs en JavaScript
- Temporal Dead Zone - Hoisting avanzado
- Abstract Equality vs Strict - Coerción profunda
- Bitwise Operators - Optimización de bajo nivel
- BigInt Operations - Números arbitrariamente grandes
- Object.defineProperty - Control de propiedades
- Descriptores de Propiedad - Configurabilidad avanzada
- Function.prototype.call/apply/bind - Contexto explícito
- Composition over Inheritance - Mixins y traits
- Currying & Partial Application
- Trampolining - Recursión sin stack overflow
- Memoization avanzada con WeakMap
- Private Fields (#) y métodos estáticos
- Nullish Coalescing & Optional Chaining profundo

**Por qué importa:**
Estas características resuelven problemas reales de forma más eficiente y elegante. El 90% de los desarrolladores no las conocen, dominarlas te posiciona en el top 10%."
        codeContent={[
          {
            filePath: 'generators/lazy-evaluation.js',
            content: `// 1. GENERATORS - Control de flujo lazy (infinito sin crash)
function* infiniteSequence() {
  let i = 0;
  while (true) yield i++;
}

const gen = infiniteSequence();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1

// Generator para paginar datos
function* paginate(data, pageSize) {
  for (let i = 0; i < data.length; i += pageSize) {
    yield data.slice(i, i + pageSize);
  }
}`,
          },
          {
            filePath: 'generators/async-generators.js',
            content: `// 2. ASYNC GENERATORS - Streams asíncronos
async function* fetchPages(urls) {
  for (const url of urls) {
    const response = await fetch(url);
    yield await response.json();
  }
}

// Uso
for await (const page of fetchPages(urls)) {
  console.log(page);
}

// Backpressure natural
async function* throttledStream(stream, delay) {
  for await (const chunk of stream) {
    await new Promise(r => setTimeout(r, delay));
    yield chunk;
  }
}`,
          },
          {
            filePath: 'proxy/reactive-object.js',
            content: `// 3. PROXY - Sistema reactivo (como Vue 3)
function reactive(target) {
  return new Proxy(target, {
    get(obj, prop) {
      console.log(\`Reading \${prop}\`);
      return Reflect.get(obj, prop);
    },
    set(obj, prop, value) {
      console.log(\`Setting \${prop} = \${value}\`);
      return Reflect.set(obj, prop, value);
    }
  });
}

const state = reactive({ count: 0 });
state.count++; // Logs: Reading count, Setting count = 1`,
          },
          {
            filePath: 'weakmap/private-data.js',
            content: `// 4. WEAKMAP - Datos privados sin memory leaks
const privateData = new WeakMap();

class Person {
  constructor(name) {
    privateData.set(this, { ssn: '123-45-6789' });
    this.name = name;
  }
  
  getSSN() {
    return privateData.get(this).ssn;
  }
}

// El WeakMap permite GC cuando Person es eliminado`,
          },
          {
            filePath: 'symbols/well-known.js',
            content: `// 5. SYMBOLS - Metaprogramación con well-known symbols
class Collection {
  constructor(items) {
    this.items = items;
  }
  
  // Custom iterator
  *[Symbol.iterator]() {
    yield* this.items;
  }
  
  // Custom toString
  [Symbol.toStringTag] = 'MyCollection';
  
  // Custom toPrimitive
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.items.length;
    return \`Collection(\${this.items.length})\`;
  }
}

const col = new Collection([1, 2, 3]);
for (const item of col) console.log(item);
console.log(+col); // 3`,
          },
          {
            filePath: 'tagged-templates/sql-dsl.js',
            content: `// 6. TAGGED TEMPLATES - DSL seguro contra SQL injection
function sql(strings, ...values) {
  return {
    query: strings.reduce((acc, str, i) => 
      acc + str + (values[i] ? '?' : ''), ''
    ),
    params: values
  };
}

const userId = "1'; DROP TABLE users--";
const query = sql\`SELECT * FROM users WHERE id = \${userId}\`;
// { query: "SELECT * FROM users WHERE id = ?", params: ["1'; DROP TABLE users--"] }`,
          },
          {
            filePath: 'bitwise/flags.js',
            content: `// 7. BITWISE - Flags y optimizaciones
const READ = 1 << 0;    // 0001
const WRITE = 1 << 1;   // 0010
const EXECUTE = 1 << 2; // 0100

let permissions = 0;
permissions |= READ;     // Add READ
permissions |= WRITE;    // Add WRITE

const hasRead = (permissions & READ) !== 0;    // true
const hasExecute = (permissions & EXECUTE) !== 0; // false

// Toggle permission
permissions ^= READ; // Remove READ`,
          },
          {
            filePath: 'currying/advanced.js',
            content: `// 8. CURRYING - Aplicación parcial avanzada
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);

curriedSum(1)(2)(3);     // 6
curriedSum(1, 2)(3);     // 6
curriedSum(1)(2, 3);     // 6`,
          },
          {
            filePath: 'trampolining/tail-recursion.js',
            content: `// 9. TRAMPOLINING - Recursión sin stack overflow
const trampoline = (fn) => (...args) => {
  let result = fn(...args);
  while (typeof result === 'function') {
    result = result();
  }
  return result;
};

const factorial = trampoline(function fact(n, acc = 1) {
  if (n <= 1) return acc;
  return () => fact(n - 1, n * acc);
});

factorial(100000); // No stack overflow!`,
          },
          {
            filePath: 'composition/mixins.js',
            content: `// 10. COMPOSITION - Mixins modernos
const CanFly = (Base) => class extends Base {
  fly() { return 'Flying!'; }
};

const CanSwim = (Base) => class extends Base {
  swim() { return 'Swimming!'; }
};

class Animal {}
class Duck extends CanFly(CanSwim(Animal)) {}

const duck = new Duck();
duck.fly();  // 'Flying!'
duck.swim(); // 'Swimming!'`,
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

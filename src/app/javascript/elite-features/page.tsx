'use client';

export default function EliteJavaScriptPage() {
  return (
    <div className="min-h-screen p-6" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
        ⚡ JavaScript Elite Features
      </h1>
      <p className="mb-6">Lo que los developers elite saben pero no se enseña en cursos</p>

      <div className="space-y-6">
        <section className="p-6 rounded" style={{ background: 'var(--panel)' }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--primary)' }}>1. Generators Functions (*)</h2>
          <pre className="text-sm mb-3" style={{ background: 'var(--code-bg)', padding: '12px', borderRadius: '6px' }}>
{`function* infiniteSequence() {
  let i = 0;
  while (true) yield i++;
}

const gen = infiniteSequence();
gen.next().value; // 0
gen.next().value; // 1

// Lazy evaluation - Solo calcula cuando lo pides
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Más eficiente que crear array completo
const fib = fibonacci();
for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}`}
          </pre>
          <p className="text-sm" style={{ opacity: 0.8 }}>
            <strong>Uso real:</strong> Iteración de datasets gigantes, streaming de datos, implementar async iterators
          </p>
        </section>

        <section className="p-6 rounded" style={{ background: 'var(--panel)' }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--primary)' }}>2. Proxy & Reflect</h2>
          <pre className="text-sm mb-3" style={{ background: 'var(--code-bg)', padding: '12px', borderRadius: '6px' }}>
{`// Reactive state management (como Vue 3)
const reactive = (obj) => new Proxy(obj, {
  get(target, prop) {
    console.log('Reading', prop);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    console.log('Writing', prop, value);
    return Reflect.set(target, prop, value);
  }
});

const state = reactive({ count: 0 });
state.count++; // Logs: Reading count, Writing count 1

// Validation automática
const validated = new Proxy({}, {
  set(target, prop, value) {
    if (typeof value !== 'number') {
      throw new TypeError('Must be number');
    }
    return Reflect.set(target, prop, value);
  }
});`}
          </pre>
          <p className="text-sm" style={{ opacity: 0.8 }}>
            <strong>Uso real:</strong> State management libraries (MobX, Vue), validation, logging, mocking
          </p>
        </section>

        <section className="p-6 rounded" style={{ background: 'var(--panel)' }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--primary)' }}>3. Symbols & Well-Known Symbols</h2>
          <pre className="text-sm mb-3" style={{ background: 'var(--code-bg)', padding: '12px', borderRadius: '6px' }}>
{`// Unique keys que no colisionan
const ID = Symbol('id');
const user = { [ID]: 123, name: 'John' };

Object.keys(user); // ['name'] - Symbol no aparece!

// Custom iterators
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        }
        return { done: true };
      }
    };
  }
};

[...range]; // [1, 2, 3, 4, 5]
for (let num of range) console.log(num);`}
          </pre>
        </section>

        <section className="p-6 rounded" style={{ background: 'var(--panel)' }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--primary)' }}>4. WeakMap & WeakSet</h2>
          <pre className="text-sm mb-3" style={{ background: 'var(--code-bg)', padding: '12px', borderRadius: '6px' }}>
{`// No previene garbage collection
const cache = new WeakMap();

function process(element) {
  if (!cache.has(element)) {
    const result = expensiveOperation(element);
    cache.set(element, result);
  }
  return cache.get(element);
}

// Cuando element se elimina, su entry en WeakMap también
// Previene memory leaks!

// Private data pattern
const privateData = new WeakMap();

class User {
  constructor(name, ssn) {
    this.name = name;
    privateData.set(this, { ssn });
  }
  getSSN() {
    return privateData.get(this).ssn;
  }
}`}
          </pre>
        </section>

        <section className="p-6 rounded" style={{ background: 'var(--panel)' }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--primary)' }}>5. Temporal Dead Zone (TDZ)</h2>
          <pre className="text-sm mb-3" style={{ background: 'var(--code-bg)', padding: '12px', borderRadius: '6px' }}>
{`// let/const tienen TDZ, var no
console.log(varVariable); // undefined
console.log(letVariable); // ReferenceError!

var varVariable = 'var';
let letVariable = 'let';

// Útil para debugging
typeof undeclaredVar; // "undefined"
typeof letVar; // ReferenceError! (en TDZ)`}
          </pre>
        </section>

        <section className="p-6 rounded" style={{ background: 'var(--panel)' }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--primary)' }}>6. Tagged Template Literals</h2>
          <pre className="text-sm mb-3" style={{ background: 'var(--code-bg)', padding: '12px', borderRadius: '6px' }}>
{`function sql(strings, ...values) {
  // SQL injection protection automática
  return strings.reduce((query, str, i) => {
    const value = values[i - 1];
    const escaped = typeof value === 'string'
      ? value.replace(/'/g, "''")
      : value;
    return query + escaped + str;
  });
}

const userId = "1' OR '1'='1";
const query = sql\`SELECT * FROM users WHERE id = \${userId}\`;
// Escapa automáticamente!

// Styled-components usa esto:
const Button = styled.button\`
  color: \${props => props.primary ? 'white' : 'black'};
\`;`}
          </pre>
        </section>

        <section className="p-6 rounded" style={{ background: 'var(--panel)' }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--primary)' }}>7. Async Iterators</h2>
          <pre className="text-sm mb-3" style={{ background: 'var(--code-bg)', padding: '12px', borderRadius: '6px' }}>
{`async function* fetchPages(url) {
  let page = 1;
  while (true) {
    const response = await fetch(\`\${url}?page=\${page}\`);
    const data = await response.json();
    if (data.length === 0) break;
    yield data;
    page++;
  }
}

// Consume páginas bajo demanda
for await (const page of fetchPages('/api/users')) {
  console.log(page);
}`}
          </pre>
        </section>

        <section className="p-6 rounded" style={{ background: 'var(--panel)' }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--primary)' }}>8. Private Fields (#)</h2>
          <pre className="text-sm mb-3" style={{ background: 'var(--code-bg)', padding: '12px', borderRadius: '6px' }}>
{`class BankAccount {
  #balance = 0; // Verdaderamente privado!
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  get balance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.#balance; // SyntaxError!
account.balance; // 0 (getter público)`}
          </pre>
        </section>

        <section className="p-6 rounded" style={{ background: 'var(--panel)' }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--primary)' }}>9. Nullish Coalescing & Optional Chaining</h2>
          <pre className="text-sm mb-3" style={{ background: 'var(--code-bg)', padding: '12px', borderRadius: '6px' }}>
{`// ?? vs ||
const value1 = 0 || 'default'; // 'default' (0 es falsy)
const value2 = 0 ?? 'default'; // 0 (0 no es nullish)

// Optional chaining
const user = { address: { street: '123 Main' } };
user?.address?.street; // '123 Main'
user?.contact?.email; // undefined (no error!)

// Con funciones
user.getName?.(); // Solo llama si existe

// Con arrays
const arr = null;
arr?.[0]; // undefined`}
          </pre>
        </section>

        <section className="p-6 rounded" style={{ background: 'var(--panel)' }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--primary)' }}>10. Logical Assignment Operators</h2>
          <pre className="text-sm mb-3" style={{ background: 'var(--code-bg)', padding: '12px', borderRadius: '6px' }}>
{`let obj = { a: 1 };

// Asigna solo si es falsy
obj.b ||= 2; // obj.b = 2
obj.a ||= 10; // obj.a sigue siendo 1

// Asigna solo si es nullish
obj.c ??= 3;

// Asigna solo si es truthy
obj.d &&= 4; // obj.d sigue undefined

// Muy útil para defaults
function setDefaults(options) {
  options.timeout ??= 5000;
  options.retries ??= 3;
  return options;
}`}
          </pre>
        </section>

        <div className="p-6 rounded" style={{ background: 'var(--success)', border: '1px solid var(--border)' }}>
          <h3 className="text-xl font-bold mb-3 text-white">🏆 Por Qué Esto Te Hace Elite</h3>
          <ul className="space-y-2 text-white text-sm">
            <li>✅ Generators: Memoria infinitamente más eficiente</li>
            <li>✅ Proxy: Implementar reactivity como Vue/MobX</li>
            <li>✅ Symbols: Metaprogramming avanzado</li>
            <li>✅ WeakMap: Prevenir memory leaks</li>
            <li>✅ Tagged templates: DSLs (styled-components, GraphQL)</li>
            <li>✅ Async iterators: Stream processing</li>
            <li>✅ Private fields: Encapsulación real</li>
            <li>✅ Nullish coalescing: Código más robusto</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example_demo'));

export default function ModulePatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Module Pattern"
        description="📦 **Module Pattern** - Encapsulación con API pública/privada

El Module Pattern es un patrón clásico de JavaScript que usa closures para crear scope privado, exponiendo solo una API pública. Pre-ES6 era LA forma de encapsular código. Con ES6 modules es menos necesario pero sigue siendo útil para singleton-like behavior.

**🎯 ¿Cuándo usarlo?**
- **Encapsular** estado y funciones privadas
- **Exponer** solo API pública
- **Singleton** behavior (una instancia)
- **Namespace** para evitar colisiones globales

**📐 Estructura (IIFE):**
\`\`\`javascript
const MyModule = (() => {
  // Private
  let privateVar = 0;
  function privateFunc() { }
  
  // Public API
  return {
    publicMethod() {
      privateVar++;
      privateFunc();
    },
    getValue: () => privateVar
  };
})();

MyModule.publicMethod();
// privateVar is not accessible!
\`\`\`

**✅ Ventajas:**
- 🔒 **Privacidad**: Variables/funciones privadas
- 🌍 **No contamina global scope**
- 🎯 **Singleton**: Una instancia compartida
- 📦 **Encapsulación**: API clara

**En ES6+ (mejor alternativa):**
\`\`\`javascript
// counter.js
let count = 0; // private

export function increment() {
  count++;
}

export function getCount() {
  return count;
}
\`\`\`"
        codeContent={[
          {
            filePath: 'patterns/module-pattern.js',
            content: `// Classic Module Pattern (IIFE)
const CounterModule = (() => {
  // Private
  let count = 0;
  
  // Public API
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount: () => count,
    reset() {
      count = 0;
      return count;
    }
  };
})();

// Usage
CounterModule.increment(); // 1
CounterModule.increment(); // 2
CounterModule.getCount();  // 2
// count is private!

// ES6 Module (better)
// counter.ts
let count = 0;

export function increment() {
  return ++count;
}

export function getCount() {
  return count;
}`,
          }
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

export const metadata = {
  title: 'Module Pattern | Design Patterns',
  description: 'Learn the Module pattern for encapsulation and private/public APIs',
};

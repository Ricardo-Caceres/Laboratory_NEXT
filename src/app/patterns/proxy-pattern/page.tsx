import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example_demo'));

export default function ProxyPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Proxy Pattern"
        description="🛡️ **Proxy Pattern** - Controla acceso a objetos con un intermediario

El Proxy Pattern es un patrón estructural GoF que proporciona un sustituto o placeholder para otro objeto, controlando el acceso a él. El proxy intercepta operaciones antes de llegar al objeto real, añadiendo funcionalidad como validación, caching, logging, o lazy loading.

**🎯 ¿Cuándo usarlo?**
- **Lazy loading**: Cargar objetos pesados solo cuando se necesitan
- **Access control**: Validar permisos antes de acceder
- **Caching**: Guardar resultados de operaciones costosas
- **Logging**: Registrar accesos y modificaciones
- **Validation**: Validar datos antes de set/get
- **Remote proxy**: Representar objetos remotos (RPC, API calls)

**🔑 Conceptos Clave:**
- **Subject**: Interfaz común para RealSubject y Proxy
- **RealSubject**: Objeto real que hace el trabajo
- **Proxy**: Controla acceso al RealSubject
- **ES6 Proxy**: JavaScript nativo con `new Proxy(target, handler)`
- **Traps**: Interceptors para operaciones (get, set, has, etc)

**✅ Ventajas:**
- 🔒 **Access Control**: Valida permisos antes de acceder
- 💾 **Caching**: Mejora performance con resultados cacheados
- 📝 **Logging**: Audita todas las operaciones
- 🔄 **Lazy Loading**: Carga recursos solo cuando se necesitan
- ✅ **Validation**: Valida datos automáticamente

**📐 Estructura (ES6 Proxy):**
\`\`\`typescript
const target = {
  name: 'John',
  password: 'secret123'
};

const proxy = new Proxy(target, {
  get(obj, prop) {
    if (prop === 'password') {
      return '***HIDDEN***';
    }
    return obj[prop];
  },
  
  set(obj, prop, value) {
    if (prop === 'age' && typeof value !== 'number') {
      throw new Error('Age must be number');
    }
    obj[prop] = value;
    return true;
  }
});

proxy.password; // '***HIDDEN***'
proxy.age = 'thirty'; // Error!
\`\`\`

**💡 Casos de Uso Reales:**
- **Vue 3 Reactivity**: Usa Proxy para reactive objects
- **MobX**: Observables con Proxy
- **Immer**: Immutable state con Proxy
- **ORM**: Sequelize, TypeORM usan proxies
- **API Mocking**: Interceptar requests en tests
- **Virtual Proxy**: Images con lazy loading

**🆚 Proxy vs Decorator:**
- **Proxy**: Controla acceso, misma interfaz que objeto real
- **Decorator**: Agrega funcionalidad nueva al objeto

**Tipos de Proxy:**
1. **Virtual Proxy**: Lazy initialization de objetos costosos
2. **Protection Proxy**: Control de acceso basado en permisos
3. **Remote Proxy**: Representa objeto remoto (API, RPC)
4. **Caching Proxy**: Cache resultados de operaciones
5. **Logging Proxy**: Registra todas las operaciones

**ES6 Proxy Traps:**
- **get**: Intercepta property access
- **set**: Intercepta property assignment
- **has**: Intercepta `in` operator
- **deleteProperty**: Intercepta `delete`
- **apply**: Intercepta function calls
- **construct**: Intercepta `new` operator

**⚠️ Consideraciones:**
- Performance overhead (mínimo pero existe)
- Debugging puede ser más complejo
- No todos los objetos son proxiables (sealed, frozen)

**Ejemplo del código:**
Proxy con access control (oculta password), validation (valida tipos), y caching (cachea operaciones costosas)."
        codeContent={[
          {
            filePath: 'patterns/proxy-access-control.ts',
            content: `// Proxy Pattern: Access Control & Validation
const user = {
  name: 'John Doe',
  email: 'john@example.com',
  age: 30,
  password: 'secret123',
  role: 'user' as 'user' | 'admin'
};

const createUserProxy = (target: typeof user) => {
  return new Proxy(target, {
    get(obj, prop: string) {
      // Hide sensitive data
      if (prop === 'password') {
        console.log('⚠️ Access to password blocked');
        return '***HIDDEN***';
      }
      
      console.log(\`✓ Accessed: \${prop}\`);
      return obj[prop as keyof typeof obj];
    },
    
    set(obj, prop: string, value: any) {
      // Validation
      if (prop === 'age' && typeof value !== 'number') {
        console.error('❌ Age must be a number');
        return false;
      }
      
      if (prop === 'email' && !value.includes('@')) {
        console.error('❌ Invalid email format');
        return false;
      }
      
      // Prevent modifying password directly
      if (prop === 'password') {
        console.error('❌ Cannot modify password directly. Use changePassword()');
        return false;
      }
      
      console.log(\`✓ Set \${prop} = \${value}\`);
      (obj as any)[prop] = value;
      return true;
    }
  });
};

// Usage
const userProxy = createUserProxy(user);

console.log(userProxy.name); // "John Doe"
console.log(userProxy.password); // "***HIDDEN***"

userProxy.age = 31; // ✓ Works
userProxy.age = 'thirty' as any; // ❌ Error: Age must be number
userProxy.email = 'invalid'; // ❌ Error: Invalid email`,
          },
          {
            filePath: 'patterns/proxy-caching.ts',
            content: `// Proxy Pattern: Caching
interface Calculator {
  expensiveOperation(n: number): number;
}

const calculator: Calculator = {
  expensiveOperation(n: number): number {
    console.log(\`💾 Computing expensive operation for \${n}...\`);
    // Simulate expensive computation
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += n;
    }
    return result;
  }
};

const createCachingProxy = (target: Calculator) => {
  const cache = new Map<number, number>();
  
  return new Proxy(target, {
    get(obj, prop: string) {
      if (prop === 'expensiveOperation') {
        return (n: number) => {
          // Check cache first
          if (cache.has(n)) {
            console.log(\`🎯 Cache HIT for \${n}\`);
            return cache.get(n)!;
          }
          
          // Cache miss - compute and store
          console.log(\`💾 Cache MISS for \${n}\`);
          const result = obj[prop](n);
          cache.set(n, result);
          return result;
        };
      }
      return obj[prop as keyof Calculator];
    }
  });
};

// Usage
const cachedCalculator = createCachingProxy(calculator);

cachedCalculator.expensiveOperation(5); // Cache MISS - computes
cachedCalculator.expensiveOperation(5); // Cache HIT - instant!
cachedCalculator.expensiveOperation(10); // Cache MISS - computes
cachedCalculator.expensiveOperation(5); // Cache HIT - instant!`,
          },
          {
            filePath: 'patterns/proxy-logging.ts',
            content: `// Proxy Pattern: Logging & Audit Trail
interface Product {
  name: string;
  price: number;
  stock: number;
}

const createLoggingProxy = <T extends object>(target: T, name: string) => {
  const logs: string[] = [];
  
  return new Proxy(target, {
    get(obj, prop: string) {
      const timestamp = new Date().toISOString();
      const value = obj[prop as keyof T];
      logs.push(\`[\${timestamp}] GET \${name}.\${prop} = \${value}\`);
      console.log(\`📖 Read: \${name}.\${prop}\`);
      return value;
    },
    
    set(obj, prop: string, value: any) {
      const timestamp = new Date().toISOString();
      const oldValue = obj[prop as keyof T];
      logs.push(\`[\${timestamp}] SET \${name}.\${prop}: \${oldValue} → \${value}\`);
      console.log(\`📝 Write: \${name}.\${prop} = \${value}\`);
      (obj as any)[prop] = value;
      return true;
    },
    
    deleteProperty(obj, prop: string) {
      const timestamp = new Date().toISOString();
      logs.push(\`[\${timestamp}] DELETE \${name}.\${prop}\`);
      console.log(\`🗑️ Delete: \${name}.\${prop}\`);
      delete (obj as any)[prop];
      return true;
    }
  });
};

// Usage
const product: Product = {
  name: 'Laptop',
  price: 999,
  stock: 50
};

const productProxy = createLoggingProxy(product, 'Product');

productProxy.price; // Logged: GET Product.price
productProxy.stock = 45; // Logged: SET Product.stock: 50 → 45
delete (productProxy as any).price; // Logged: DELETE Product.price`,
          },
          {
            filePath: 'patterns/proxy-lazy-loading.ts',
            content: `// Proxy Pattern: Lazy Loading (Virtual Proxy)
class HeavyImage {
  private imageData: string | null = null;
  
  constructor(private url: string) {
    console.log(\`HeavyImage created for \${url}\`);
  }
  
  load(): void {
    if (!this.imageData) {
      console.log(\`📥 Loading image from \${this.url}...\`);
      // Simulate loading
      this.imageData = \`data_from_\${this.url}\`;
    }
  }
  
  display(): void {
    if (!this.imageData) {
      this.load();
    }
    console.log(\`🖼️ Displaying: \${this.imageData}\`);
  }
}

// Lazy Proxy - doesn't create HeavyImage until needed
const createImageProxy = (url: string) => {
  let realImage: HeavyImage | null = null;
  
  return new Proxy({} as HeavyImage, {
    get(target, prop: string) {
      // Create real object only when accessed
      if (!realImage) {
        console.log('🔄 Creating real HeavyImage...');
        realImage = new HeavyImage(url);
      }
      return (realImage as any)[prop];
    }
  });
};

// Usage
console.log('Creating proxies...');
const img1 = createImageProxy('image1.jpg'); // No loading yet!
const img2 = createImageProxy('image2.jpg'); // No loading yet!

console.log('Now displaying img1...');
img1.display(); // NOW it loads`,
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
  title: 'Proxy Pattern | Design Patterns',
  description: 'Control access to objects with the Proxy pattern',
};

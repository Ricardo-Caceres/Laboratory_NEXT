import Link from 'next/link';

export default function TypeScriptPage() {
  return (
    <div className="min-h-screen p-8" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-5xl">📘</span>
          <h1 className="text-4xl font-bold">TypeScript: De Básico a Elite</h1>
        </div>
        <p className="text-lg leading-relaxed max-w-3xl" style={{ opacity: 0.9 }}>
          Domina TypeScript desde fundamentos hasta patrones avanzados. Aprende a escribir 
          código type-safe, escalable y mantenible con el superset de JavaScript más popular.
        </p>
      </div>
      
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link 
          href="/typescript/basics"
          className="p-6 rounded-lg transition-all hover:translate-x-1"
          style={{ background: 'var(--panel)', border: '2px solid var(--border)' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">📚</span>
            <h3 className="text-xl font-bold" style={{ color: 'var(--primary)' }}>TypeScript Basics</h3>
          </div>
          <p style={{ opacity: 0.9 }}>Fundamentos esenciales: tipos primitivos, interfaces, clases y type guards</p>
        </Link>
        
        <Link 
          href="/typescript/advanced"
          className="p-6 rounded-lg transition-all hover:translate-x-1"
          style={{ background: 'var(--panel)', border: '2px solid var(--border)' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🚀</span>
            <h3 className="text-xl font-bold" style={{ color: 'var(--primary)' }}>TypeScript Advanced</h3>
          </div>
          <p style={{ opacity: 0.9 }}>Patrones avanzados: generics, conditional types, mapped types y template literals</p>
        </Link>
      </div>
      
      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)', borderLeft: '4px solid var(--primary)' }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🎯</span>
          <h2 className="text-2xl font-semibold" style={{ color: 'var(--primary)' }}>1. Tipos Básicos y Anotaciones</h2>
        </div>
        <p className="mb-3 text-sm" style={{ opacity: 0.8 }}>
          Fundamentos del sistema de tipos: primitivos, arrays, tuples y enums
        </p>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// Tipos primitivos
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b"];

// Tuple
let tuple: [string, number] = ["age", 30];

// Enum
enum Color {
  Red = "#ff0000",
  Green = "#00ff00",
  Blue = "#0000ff"
}

// Any y Unknown
let anything: any = "can be anything";
let unknown: unknown = "safer than any";

// Void, Never
function log(): void {
  console.log("No return");
}

function throwError(): never {
  throw new Error("Always throws");
}`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>2. Interfaces y Types</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// Interface
interface User {
  id: number;
  name: string;
  email?: string; // Opcional
  readonly createdAt: Date; // Solo lectura
}

// Type Alias
type ID = string | number;

type Point = {
  x: number;
  y: number;
};

// Diferencia clave: Interface se puede extender
interface Admin extends User {
  role: string;
}

// Type con intersección
type SuperAdmin = User & {
  permissions: string[];
};

// Index Signature
interface Dictionary {
  [key: string]: any;
}

// Function Types
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>3. Generics - El Poder Real de TypeScript</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// Generic Function
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("hello");

// Generic Interface
interface Response<T> {
  data: T;
  status: number;
  error?: string;
}

type UserResponse = Response<User>;

// Generic Class
class DataStore<T> {
  private data: T[] = [];
  
  add(item: T): void {
    this.data.push(item);
  }
  
  get(index: number): T | undefined {
    return this.data[index];
  }
}

const userStore = new DataStore<User>();

// Generic Constraints
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length);
}

// Multiple Type Parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>4. Utility Types - Transformaciones Avanzadas</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Partial - Todos los campos opcionales
type PartialTodo = Partial<Todo>;

// Required - Todos los campos requeridos
type RequiredTodo = Required<Todo>;

// Readonly - Todos los campos de solo lectura
type ReadonlyTodo = Readonly<Todo>;

// Pick - Seleccionar propiedades
type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit - Excluir propiedades
type TodoInfo = Omit<Todo, "completed">;

// Record - Crear objeto con keys y values tipados
type PageInfo = Record<string, { title: string; url: string }>;

const pages: PageInfo = {
  home: { title: "Home", url: "/" },
  about: { title: "About", url: "/about" }
};

// ReturnType - Extraer tipo de retorno
function createUser() {
  return {
    id: 1,
    name: "John"
  };
}

type User = ReturnType<typeof createUser>;

// Parameters - Extraer parámetros de función
type Params = Parameters<typeof merge>;

// Awaited - Extraer tipo de Promise
type AwaitedUser = Awaited<Promise<User>>;`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>5. Mapped Types y Conditional Types</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// Mapped Type - Transformar todas las propiedades
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type NullableUser = Nullable<User>;

// Conditional Type
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// Conditional Type Avanzado
type NonNullable<T> = T extends null | undefined ? never : T;

// Distributive Conditional Types
type ToArray<T> = T extends any ? T[] : never;

type StrOrNumArray = ToArray<string | number>;
// string[] | number[]

// infer keyword - Extraer tipos
type UnpackArray<T> = T extends (infer U)[] ? U : T;

type UnpackedNumber = UnpackArray<number[]>; // number

// Template Literal Types
type EventName = "click" | "scroll" | "mousemove";
type EventHandler = \`on\${Capitalize<EventName>}\`;
// "onClick" | "onScroll" | "onMousemove"`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>6. Type Guards y Narrowing</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// typeof guard
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // string
  } else {
    console.log(value.toFixed(2)); // number
  }
}

// instanceof guard
class Dog {
  bark() {}
}

class Cat {
  meow() {}
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// Custom Type Guard
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// in operator
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}

// Discriminated Unions
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>7. Advanced Patterns - React + TypeScript</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// Component Props con Generics
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <>{items.map(renderItem)}</>;
}

// Discriminated Union en Props
type ButtonProps =
  | { variant: "primary"; icon: string }
  | { variant: "secondary"; loading: boolean };

// Event Handlers
type InputChangeHandler = React.ChangeEventHandler<HTMLInputElement>;

const handleChange: InputChangeHandler = (e) => {
  console.log(e.target.value);
};

// Children Types
type PropsWithChildren<P = unknown> = P & { children?: React.ReactNode };

// Ref Types
const inputRef = useRef<HTMLInputElement>(null);

// Custom Hook con Generics
function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  // ...
  return [value, setValue] as const;
}

// Polymorphic Component
type PolymorphicProps<E extends React.ElementType> = {
  as?: E;
} & React.ComponentPropsWithoutRef<E>;

function Box<E extends React.ElementType = "div">({
  as,
  ...props
}: PolymorphicProps<E>) {
  const Component = as || "div";
  return <Component {...props} />;
}`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>8. Decorators y Metadata (Experimental)</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// tsconfig.json: "experimentalDecorators": true

// Class Decorator
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
}

// Method Decorator
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(\`Calling \${key} with\`, args);
    const result = original.apply(this, args);
    console.log(\`Result:\`, result);
    return result;
  };
  
  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number) {
    return a + b;
  }
}`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>9. tsconfig.json - Configuración Profesional</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`{
  "compilerOptions": {
    // Strict Type Checking
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    
    // Module Resolution
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    
    // Emit
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "removeComments": false,
    
    // Advanced
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true
  }
}`}
        </pre>
      </section>

      <div className="mt-8 p-6 rounded-lg" style={{ background: 'var(--success)', color: '#000' }}>
        <h3 className="text-xl font-semibold mb-2">🎯 Best Practices</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Usa <code>unknown</code> en lugar de <code>any</code></li>
          <li>Aprovecha la inferencia de tipos cuando sea obvio</li>
          <li>Usa <code>const assertions</code> para valores literales</li>
          <li>Prefiere <code>interface</code> para objetos públicos, <code>type</code> para uniones</li>
          <li>Usa Discriminated Unions para estados mutuamente excluyentes</li>
          <li>Activa todas las opciones strict en tsconfig.json</li>
          <li>Usa Generics para código reutilizable type-safe</li>
        </ul>
      </div>
    </div>
  );
}

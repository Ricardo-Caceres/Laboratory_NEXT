import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TypeScript Advanced - Elite Level',
  description: 'TypeScript avanzado: Generics, Conditional Types, Mapped Types, y más'
};

export default function TypeScriptAdvancedPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">TypeScript Advanced</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Domina TypeScript a nivel elite con tipos avanzados, genéricos complejos y metaprogramación de tipos.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Generics Fundamentals</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 className="font-bold mb-2">Generic Functions y Constraints</h3>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Generic básico
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("hello"); // Explícito
const result2 = identity(42); // Inferido como number

// Generic con constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("hello"); // OK, string tiene length
logLength([1, 2, 3]); // OK, array tiene length
// logLength(42); // Error: number no tiene length

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const p = pair("age", 25); // [string, number]

// Generic con default types
interface Box<T = string> {
  value: T;
}

const box1: Box = { value: "hello" }; // T es string por defecto
const box2: Box<number> = { value: 42 };

// Generic constraints con keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Alice", age: 30 };
const name = getProperty(person, "name"); // string
const age = getProperty(person, "age"); // number
// getProperty(person, "invalid"); // Error`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Utility Types Avanzados</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

// Partial<T> - Hace todas las propiedades opcionales
type PartialTodo = Partial<Todo>;
// { title?: string; description?: string; completed?: boolean; createdAt?: Date }

// Required<T> - Hace todas las propiedades requeridas
type RequiredTodo = Required<PartialTodo>;

// Readonly<T> - Hace todas las propiedades readonly
type ReadonlyTodo = Readonly<Todo>;

// Pick<T, K> - Selecciona solo ciertas propiedades
type TodoPreview = Pick<Todo, "title" | "completed">;
// { title: string; completed: boolean }

// Omit<T, K> - Omite ciertas propiedades
type TodoInfo = Omit<Todo, "completed" | "createdAt">;
// { title: string; description: string }

// Record<K, T> - Crea un tipo con keys K y valores T
type PageInfo = {
  title: string;
  url: string;
};

type Pages = "home" | "about" | "contact";
const pages: Record<Pages, PageInfo> = {
  home: { title: "Home", url: "/" },
  about: { title: "About", url: "/about" },
  contact: { title: "Contact", url: "/contact" }
};

// Exclude<T, U> - Excluye de T los tipos que son asignables a U
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<string | number | (() => void), Function>; // string | number

// Extract<T, U> - Extrae de T los tipos que son asignables a U
type T2 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T3 = Extract<string | number | (() => void), Function>; // () => void

// NonNullable<T> - Excluye null y undefined
type T4 = NonNullable<string | number | undefined>; // string | number

// ReturnType<T> - Obtiene el tipo de retorno de una función
function createUser() {
  return { id: 1, name: "Alice" };
}
type User = ReturnType<typeof createUser>; // { id: number; name: string }

// Parameters<T> - Obtiene los tipos de los parámetros de una función
function greet(name: string, age: number) {}
type GreetParams = Parameters<typeof greet>; // [string, number]

// Awaited<T> - Obtiene el tipo resuelto de una Promise
type A = Awaited<Promise<string>>; // string
type B = Awaited<Promise<Promise<number>>>; // number`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Conditional Types</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Sintaxis básica: T extends U ? X : Y
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// Conditional types con inferencia
type Flatten<T> = T extends Array<infer U> ? U : T;

type Str = Flatten<string[]>; // string
type Num = Flatten<number>; // number

// Extraer tipo de retorno
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Func = () => { name: string };
type Return = GetReturnType<Func>; // { name: string }

// Conditional types distributivos
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArray = ToArray<string | number>; 
// string[] | number[] (distributivo sobre union)

// Non-distributivo con []
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;
type Combined = ToArrayNonDist<string | number>; 
// (string | number)[]

// Recursive conditional types
type Awaited<T> = T extends Promise<infer U> 
  ? Awaited<U> 
  : T;

type T1 = Awaited<Promise<Promise<string>>>; // string

// Deep Readonly
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object 
    ? DeepReadonly<T[P]> 
    : T[P];
};

interface Nested {
  level1: {
    level2: {
      value: number;
    }
  }
}

type ReadonlyNested = DeepReadonly<Nested>;
// Todos los niveles son readonly`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Mapped Types</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Mapped type básico
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

// Con key remapping (as)
type Getters<T> = {
  [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P];
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters<Person>;
// { getName: () => string; getAge: () => number; }

// Filtrar keys
type RemoveKindField<T> = {
  [K in keyof T as Exclude<K, "kind">]: T[K];
};

interface Circle {
  kind: "circle";
  radius: number;
}

type WithoutKind = RemoveKindField<Circle>;
// { radius: number }

// Mapped types con conditional
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type NullablePerson = Nullable<Person>;
// { name: string | null; age: number | null; }

// Template literal key remapping
type Events<T> = {
  [K in keyof T as \`on\${Capitalize<string & K>}Change\`]: (value: T[K]) => void;
};

type PersonEvents = Events<Person>;
// {
//   onNameChange: (value: string) => void;
//   onAgeChange: (value: number) => void;
// }

// Modifier flags: readonly, optional
type CreateMutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type CreateRequired<T> = {
  [P in keyof T]-?: T[P];
};`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Template Literal Types</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Template literal básico
type World = "world";
type Greeting = \`hello \${World}\`; // "hello world"

// Con unions
type Color = "red" | "blue";
type Quantity = "one" | "two";
type SeussFish = \`\${Quantity | Color} fish\`;
// "one fish" | "two fish" | "red fish" | "blue fish"

// Utility types con template literals
type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(
    eventName: \`\${Key}Changed\`,
    callback: (newValue: Type[Key]) => void
  ): void;
};

declare function makeWatchedObject<T>(obj: T): T & PropEventSource<T>;

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});

person.on("firstNameChanged", newName => {
  // newName es string (inferido)
  console.log(newName.toUpperCase());
});

// Intrinsic string manipulation types
type Uppercase<S extends string> = intrinsic;
type Lowercase<S extends string> = intrinsic;
type Capitalize<S extends string> = intrinsic;
type Uncapitalize<S extends string> = intrinsic;

type T0 = Uppercase<"hello">; // "HELLO"
type T1 = Lowercase<"HELLO">; // "hello"
type T2 = Capitalize<"hello">; // "Hello"
type T3 = Uncapitalize<"Hello">; // "hello"

// CSS-in-JS type safety
type CSSValue = number | \`\${number}px\` | \`\${number}%\` | \`\${number}rem\`;

interface Style {
  width: CSSValue;
  height: CSSValue;
  margin?: CSSValue;
}

const style: Style = {
  width: 100,
  height: "50px",
  margin: "2rem"
};`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Infer Keyword Avanzado</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Extraer primer argumento
type FirstArg<T> = T extends (first: infer F, ...args: any[]) => any 
  ? F 
  : never;

type F1 = FirstArg<(a: string, b: number) => void>; // string

// Extraer todos los argumentos excepto el primero
type RestArgs<T> = T extends (first: any, ...rest: infer R) => any 
  ? R 
  : never;

type R1 = RestArgs<(a: string, b: number, c: boolean) => void>; 
// [number, boolean]

// Extraer tipo de elemento de array
type ArrayElement<T> = T extends (infer E)[] ? E : T;

type AE1 = ArrayElement<string[]>; // string
type AE2 = ArrayElement<number>; // number

// Extraer valor de Promise
type Unpromise<T> = T extends Promise<infer U> ? U : T;

type U1 = Unpromise<Promise<string>>; // string
type U2 = Unpromise<number>; // number

// Extraer tipo de constructor
type InstanceType<T extends new (...args: any[]) => any> = 
  T extends new (...args: any[]) => infer R ? R : any;

class MyClass {
  value: number = 42;
}

type Instance = InstanceType<typeof MyClass>; // MyClass

// Extraer tipo de this
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any 
  ? U 
  : unknown;

function toHex(this: Number) {
  return this.toString(16);
}

type T = ThisParameterType<typeof toHex>; // Number`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Variance y Covariance</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Covariance - tipos de retorno
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Covariante - OK porque Dog es más específico que Animal
let animalFunction: () => Animal;
let dogFunction: () => Dog;

animalFunction = dogFunction; // OK (covariant)

// Contravariance - tipos de parámetros
type AnimalHandler = (animal: Animal) => void;
type DogHandler = (dog: Dog) => void;

// Contravariante - OK porque Animal es más general
let handleAnimal: AnimalHandler;
let handleDog: DogHandler;

handleDog = handleAnimal; // OK (contravariant)
// handleAnimal = handleDog; // Error

// Invariance - cuando no puede ser ni co ni contravariante
interface Box<T> {
  value: T;
  setValue: (value: T) => void;
}

let animalBox: Box<Animal>;
let dogBox: Box<Dog>;

// animalBox = dogBox; // Error (invariant)
// dogBox = animalBox; // Error (invariant)

// Bivariance (con strictFunctionTypes: false - no recomendado)
// Las funciones en métodos de objetos son bivariantes por defecto`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Advanced Patterns</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Builder Pattern con TypeScript
class QueryBuilder<T, K extends keyof T = never> {
  private fields: K[] = [];

  select<NK extends keyof T>(
    ...newFields: NK[]
  ): QueryBuilder<T, K | NK> {
    return this as any;
  }

  build(): Pick<T, K> {
    return {} as Pick<T, K>;
  }
}

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const query = new QueryBuilder<User>()
  .select("id", "name")
  .select("email")
  .build(); // Pick<User, "id" | "name" | "email">

// Type-safe Event Emitter
type EventMap = {
  click: { x: number; y: number };
  keypress: { key: string };
  resize: { width: number; height: number };
};

class TypedEventEmitter<Events extends Record<string, any>> {
  on<E extends keyof Events>(
    event: E,
    listener: (data: Events[E]) => void
  ): void {
    // implementation
  }

  emit<E extends keyof Events>(
    event: E,
    data: Events[E]
  ): void {
    // implementation
  }
}

const emitter = new TypedEventEmitter<EventMap>();
emitter.on("click", data => {
  console.log(data.x, data.y); // data es { x: number; y: number }
});

// Branded Types (Nominal Typing)
type Brand<K, T> = K & { __brand: T };

type USD = Brand<number, "USD">;
type EUR = Brand<number, "EUR">;

const usd = 10 as USD;
const eur = 10 as EUR;

function processUSD(amount: USD) {
  console.log(\`Processing $\${amount}\`);
}

processUSD(usd); // OK
// processUSD(eur); // Error: EUR no es asignable a USD
// processUSD(10); // Error: number no es asignable a USD

// Phantom Types
type Entity<T extends string> = {
  id: string;
  _type: T;
};

type User = Entity<"user">;
type Product = Entity<"product">;

function getUser(id: string): User {
  return { id, _type: "user" as const };
}

function getProduct(id: string): Product {
  return { id, _type: "product" as const };
}

function processUser(user: User) {}

const user = getUser("1");
const product = getProduct("2");

processUser(user); // OK
// processUser(product); // Error`}
          </pre>
        </div>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Tips Elite</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Usa <code>infer</code> para extraer tipos dentro de conditional types</li>
          <li>Aprovecha template literal types para type-safe strings</li>
          <li>Combina mapped types con conditional types para transformaciones complejas</li>
          <li>Usa branded types para distinguir tipos primitivos nominalmente</li>
          <li>Aprovecha variance para type-safe APIs con funciones</li>
          <li>Usa recursive conditional types con precaución (límite de recursión)</li>
          <li>Combina utility types en lugar de crear nuevos cuando sea posible</li>
          <li>Usa <code>as const</code> para inferencia literal precisa</li>
        </ul>
      </section>

      <div className="flex gap-4">
        <Link 
          href="/typescript/basics"
          style={{ color: 'var(--primary)', textDecoration: 'underline' }}
        >
          ← Anterior: TypeScript Basics
        </Link>
      </div>
    </div>
  );
}

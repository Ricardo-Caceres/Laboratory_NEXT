import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TypeScript Fundamentals - Básico a Intermedio',
  description: 'Fundamentos de TypeScript desde cero'
};

export default function TypeScriptBasicsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">TypeScript Basics</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Domina los fundamentos de TypeScript desde tipos primitivos hasta interfaces avanzadas.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Tipos Primitivos</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 className="font-bold mb-2">Basic Types</h3>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Primitivos
let isDone: boolean = false;
let age: number = 25;
let username: string = "John";
let nothing: null = null;
let notDefined: undefined = undefined;

// BigInt (ES2020+)
let big: bigint = 100n;

// Symbol
let sym: symbol = Symbol("key");

// Arrays
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// Tuples
let tuple: [string, number] = ["hello", 10];
let tuple2: [string, number, boolean] = ["hi", 5, true];

// Enum
enum Color {
  Red,
  Green,
  Blue
}
let color: Color = Color.Red;

// Any (evitar cuando sea posible)
let anything: any = "could be anything";

// Unknown (mejor que any)
let uncertain: unknown = 4;
if (typeof uncertain === "number") {
  let num: number = uncertain; // Safe
}

// Never (funciones que nunca retornan)
function error(message: string): never {
  throw new Error(message);
}

// Void (sin retorno)
function log(message: string): void {
  console.log(message);
}`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Interfaces y Types</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 className="font-bold mb-2">Interface vs Type</h3>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Interface
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Opcional
  readonly createdAt: Date; // Solo lectura
}

// Type Alias
type Point = {
  x: number;
  y: number;
};

// Type puede usar unions
type ID = number | string;

// Interface puede extenderse
interface Admin extends User {
  role: string;
  permissions: string[];
}

// Interfaces se pueden reabrir (declaration merging)
interface Window {
  customProp: string;
}

// Type no se puede reabrir pero puede intersectar
type Employee = User & {
  employeeId: string;
  department: string;
};

// Uso
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  createdAt: new Date()
};`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Union y Intersection Types</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Union Types (OR)
type Status = "pending" | "approved" | "rejected";
type Result = string | number | boolean;

function process(status: Status) {
  if (status === "approved") {
    // TypeScript sabe que status es "approved"
  }
}

// Intersection Types (AND)
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

const widget: UIWidget = {
  drag() { console.log("dragging"); },
  resize() { console.log("resizing"); }
};

// Discriminated Unions
type Success = {
  type: "success";
  data: any;
};

type Error = {
  type: "error";
  message: string;
};

type Response = Success | Error;

function handleResponse(response: Response) {
  if (response.type === "success") {
    console.log(response.data); // TypeScript sabe que tiene data
  } else {
    console.log(response.message); // TypeScript sabe que tiene message
  }
}`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Funciones con Tipos</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Función básica
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Parámetros opcionales
function greet(name: string, greeting?: string): string {
  return \`\${greeting || "Hello"}, \${name}!\`;
}

// Parámetros por defecto
function createUser(name: string, age: number = 18): User {
  return { id: Date.now(), name, email: "", createdAt: new Date(), age };
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

// Function types
type MathOperation = (a: number, b: number) => number;

const divide: MathOperation = (a, b) => a / b;

// Overloads
function parse(value: string): string[];
function parse(value: number): number;
function parse(value: string | number): string[] | number {
  if (typeof value === "string") {
    return value.split(",");
  }
  return value;
}

// This parameters
interface DB {
  data: string[];
  query(this: DB, filter: string): string[];
}

const db: DB = {
  data: ["a", "b", "c"],
  query(filter) {
    return this.data.filter(item => item.includes(filter));
  }
};`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Clases en TypeScript</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Clase básica
class Person {
  // Propiedades
  private id: number;
  protected name: string;
  public age: number;
  readonly birthDate: Date;

  // Constructor
  constructor(name: string, age: number) {
    this.id = Date.now();
    this.name = name;
    this.age = age;
    this.birthDate = new Date();
  }

  // Métodos
  greet(): string {
    return \`Hi, I'm \${this.name}\`;
  }

  // Getter
  get displayName(): string {
    return this.name.toUpperCase();
  }

  // Setter
  set displayName(value: string) {
    this.name = value.toLowerCase();
  }

  // Método estático
  static create(name: string, age: number): Person {
    return new Person(name, age);
  }
}

// Herencia
class Employee extends Person {
  constructor(
    name: string,
    age: number,
    public department: string
  ) {
    super(name, age);
  }

  override greet(): string {
    return \`\${super.greet()} from \${this.department}\`;
  }
}

// Clase abstracta
abstract class Shape {
  abstract getArea(): number;
  
  describe(): string {
    return \`Area: \${this.getArea()}\`;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Implementing interfaces
interface Printable {
  print(): void;
}

class Document implements Printable {
  print(): void {
    console.log("Printing document...");
  }
}`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Type Assertions y Casting</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Type Assertion (as)
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// Angle-bracket syntax (no usar en JSX/TSX)
let strLength2: number = (<string>someValue).length;

// Non-null assertion (!)
function liveDangerously(x?: number | null) {
  console.log(x!.toFixed(2)); // Asumes que x no es null/undefined
}

// Const assertion
const config = {
  endpoint: "https://api.example.com",
  timeout: 3000
} as const; // Readonly y literal types

// config.endpoint = "new"; // Error: readonly

// Array as const
const colors = ["red", "green", "blue"] as const;
type Color = typeof colors[number]; // "red" | "green" | "blue"`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Literal Types</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// String Literal Types
type Direction = "north" | "south" | "east" | "west";

function move(direction: Direction) {
  // Solo acepta estos 4 valores exactos
}

// Numeric Literal Types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

// Boolean Literal Types
type YesOrNo = true | false; // Equivalente a boolean

// Template Literal Types (TypeScript 4.1+)
type EventName = "click" | "scroll" | "mousemove";
type EventHandler = \`on\${Capitalize<EventName>}\`;
// "onClick" | "onScroll" | "onMousemove"

// Combining
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type Endpoint = \`/api/\${string}\`;
type APICall = \`\${HTTPMethod} \${Endpoint}\`;
// Ejemplo: "GET /api/users", "POST /api/products", etc.`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Narrowing y Type Guards</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// typeof guard
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // value es string
  } else {
    console.log(value.toFixed(2)); // value es number
  }
}

// instanceof guard
class Dog {
  bark() { console.log("Woof!"); }
}

class Cat {
  meow() { console.log("Meow!"); }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // animal es Dog
  } else {
    animal.meow(); // animal es Cat
  }
}

// in operator
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // animal es Fish
  } else {
    animal.fly(); // animal es Bird
  }
}

// Custom type guard
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function process(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // value es string
  }
}

// Truthiness narrowing
function printName(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase()); // name es string
  }
}`}
          </pre>
        </div>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Prefiere <code>interface</code> para definir shapes de objetos</li>
          <li>Usa <code>type</code> para unions, intersections y utility types</li>
          <li>Evita <code>any</code>, usa <code>unknown</code> cuando no conozcas el tipo</li>
          <li>Aprovecha el type narrowing en lugar de assertions</li>
          <li>Usa <code>const assertions</code> para valores inmutables</li>
          <li>Prefiere union types sobre enums cuando sea posible</li>
          <li>Usa <code>readonly</code> para inmutabilidad</li>
          <li>Aprovecha discriminated unions para manejar estados</li>
        </ul>
      </section>

      <div className="flex gap-4">
        <Link 
          href="/typescript/advanced"
          style={{ color: 'var(--primary)', textDecoration: 'underline' }}
        >
          → Siguiente: TypeScript Advanced
        </Link>
      </div>
    </div>
  );
}

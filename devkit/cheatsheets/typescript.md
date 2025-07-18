
# TypeScript Cheatsheet

## Table of Contents
1.  [Basic Types](#basic-types)
2.  [Interfaces](#interfaces)
3.  [Type Aliases](#type-aliases)
4.  [Functions](#functions)
5.  [Generics](#generics)
6.  [Enums](#enums)
7.  [Union & Intersection Types](#union--intersection-types)
8.  [Type Guards](#type-guards)
9.  [Utility Types](#utility-types)

---

### Basic Types
TypeScript adds static types to JavaScript.

```typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [1, 2, 3];
let x: [string, number] = ["hello", 10]; // Tuple
let u: undefined = undefined;
let n: null = null;
let anything: any = 4;
let unknownValue: unknown = "maybe a string";
```

`void` is used for functions that do not return a value. `never` is for functions that never return (e.g., throw an error).

### Interfaces
An interface is a way to define a contract for an object's shape.

```typescript
interface Person {
  readonly id: number; // Read-only property
  firstName: string;
  lastName: string;
  age?: number; // Optional property
}

function greet(person: Person) {
  return `Hello, ${person.firstName}`;
}
```

### Type Aliases
A type alias is a name for any type.

```typescript
type Point = {
  x: number;
  y: number;
};

type ID = string | number;

let p: Point = { x: 10, y: 20 };
let userId: ID = '123-abc';
```

### Functions
Type annotations for function parameters and return values.

```typescript
function add(x: number, y: number): number {
  return x + y;
}

// Arrow function syntax
const subtract = (x: number, y: number): number => x - y;

// Optional and default parameters
function buildName(firstName: string, lastName: string = "Smith", middleName?: string) {
    if (middleName) return `${firstName} ${middleName} ${lastName}`;
    return `${firstName} ${lastName}`;
}
```

### Generics
Generics allow you to create reusable components that work with a variety of types.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(123);

interface GenericIdentityFn<T> {
    (arg: T): T;
}
let myIdentity: GenericIdentityFn<number> = identity;
```

### Enums
Enums allow a developer to define a set of named constants.

```typescript
enum Color {
  Red,    // 0
  Green,  // 1
  Blue    // 2
}
let c: Color = Color.Green;

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

### Union & Intersection Types
-   **Union (`|`):** A value can be one of several types.
-   **Intersection (`&`):** Combines multiple types into one.

```typescript
// Union
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

// Intersection
interface Draggable {
  drag: () => void;
}
interface Resizable {
  resize: () => void;
}
type UIElement = Draggable & Resizable;

let element: UIElement = {
  drag: () => {},
  resize: () => {},
};
```

### Type Guards
Mechanisms to check the type of a variable at runtime.

**`typeof`**
```typescript
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
```

**`instanceof`**
```typescript
class Bird { fly() {} }
class Fish { swim() {} }

function move(pet: Fish | Bird) {
  if (pet instanceof Bird) {
    pet.fly();
  } else {
    pet.swim();
  }
}
```

**`in`**
```typescript
interface A { a: number }
interface B { b: string }

function check(x: A | B) {
  if ('a' in x) {
    // x is type A
  } else {
    // x is type B
  }
}
```

### Utility Types
TypeScript provides several utility types to facilitate common type transformations.
-   `Partial<T>`: Makes all properties of `T` optional.
-   `Readonly<T>`: Makes all properties of `T` readonly.
-   `Record<K, T>`: Constructs a type with a set of properties `K` of type `T`.
-   `Pick<T, K>`: Constructs a type by picking the set of properties `K` from `T`.
-   `Omit<T, K>`: Constructs a type by picking all properties from `T` and then removing `K`.
-   `ReturnType<T>`: Constructs a type consisting of the return type of function `T`.

```typescript
interface Todo {
  title: string;
  description: string;
}

// { title?: string; description?: string; }
type PartialTodo = Partial<Todo>;

// { readonly title: string; readonly description: string; }
type ReadonlyTodo = Readonly<Todo>;

// { title: string; }
type TodoPreview = Pick<Todo, "title">;
```

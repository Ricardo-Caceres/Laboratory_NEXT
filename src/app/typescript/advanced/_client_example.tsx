'use client';

import { useState } from 'react';

export default function TypeScriptAdvancedExample() {
  const [activeTab, setActiveTab] = useState<'generics' | 'conditional' | 'mapped' | 'template'>('generics');

  const examples = {
    generics: `// Generics con Constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Generic con keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Alice", age: 30 };
const name = getProperty(person, "name"); // string
const age = getProperty(person, "age"); // number`,

    conditional: `// Conditional Types
type IsString<T> = T extends string ? true : false;

// Con inferencia
type Flatten<T> = T extends Array<infer U> ? U : T;

type Str = Flatten<string[]>; // string
type Num = Flatten<number>; // number

// Recursive conditional
type Awaited<T> = T extends Promise<infer U> 
  ? Awaited<U> 
  : T;

type T1 = Awaited<Promise<Promise<string>>>; // string`,

    mapped: `// Mapped Types
type Getters<T> = {
  [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P];
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters<Person>;
// { getName: () => string; getAge: () => number; }

// Con modifiers
type CreateMutable<T> = {
  -readonly [P in keyof T]: T[P];
};`,

    template: `// Template Literal Types
type Color = "red" | "blue";
type Quantity = "one" | "two";
type SeussFish = \`\${Quantity | Color} fish\`;
// "one fish" | "two fish" | "red fish" | "blue fish"

// Event handler pattern
type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(
    eventName: \`\${Key}Changed\`,
    callback: (newValue: Type[Key]) => void
  ): void;
};

// Intrinsic manipulation
type T0 = Uppercase<"hello">; // "HELLO"
type T1 = Lowercase<"HELLO">; // "hello"
type T2 = Capitalize<"hello">; // "Hello"`
  };

  const tabs = [
    { id: 'generics', label: 'Generics' },
    { id: 'conditional', label: 'Conditional' },
    { id: 'mapped', label: 'Mapped' },
    { id: 'template', label: 'Template' }
  ] as const;

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-gray-900 text-cyan-400 p-6 rounded-lg overflow-x-auto">
        <pre className="text-sm">
          <code>{examples[activeTab]}</code>
        </pre>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <p className="text-sm">
            <strong>🎯 Nivel:</strong> Elite - Requiere conocimiento sólido de TypeScript básico
          </p>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
          <p className="text-sm">
            <strong>💡 Aplicación:</strong> Type-safe APIs, builders, frameworks
          </p>
        </div>
      </div>
    </div>
  );
}

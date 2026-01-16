'use client';

import { useState } from 'react';

export default function TypeScriptBasicsExample() {
  const [activeTab, setActiveTab] = useState<'primitives' | 'interfaces' | 'unions' | 'guards'>('primitives');

  const examples = {
    primitives: `// Tipos Primitivos
let isDone: boolean = false;
let age: number = 25;
let username: string = "John";

// Arrays y Tuples
let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Unknown vs Any
let uncertain: unknown = 4;
if (typeof uncertain === "number") {
  let num: number = uncertain; // Safe
}`,

    interfaces: `// Interface
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  readonly createdAt: Date;
}

// Extending interfaces
interface Admin extends User {
  role: string;
  permissions: string[];
}

// Type Alias con intersection
type Employee = User & {
  employeeId: string;
  department: string;
};`,

    unions: `// Union Types
type Status = "pending" | "approved" | "rejected";

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
    console.log(response.data);
  } else {
    console.log(response.message);
  }
}`,

    guards: `// Type Guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

// Using type guards
function process(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  }
}

// in operator
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}`
  };

  const tabs = [
    { id: 'primitives', label: 'Primitivos' },
    { id: 'interfaces', label: 'Interfaces' },
    { id: 'unions', label: 'Unions' },
    { id: 'guards', label: 'Type Guards' }
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
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
        <pre className="text-sm">
          <code>{examples[activeTab]}</code>
        </pre>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <p className="text-sm">
          <strong>💡 Tip:</strong> TypeScript proporciona type safety en tiempo de compilación,
          ayudándote a detectar errores antes de ejecutar el código.
        </p>
      </div>
    </div>
  );
}

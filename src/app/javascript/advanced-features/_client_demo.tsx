'use client';

import { useState } from 'react';

export function AdvancedJSDemo() {
  const [activeDemo, setActiveDemo] = useState<string>('generator');
  const [output, setOutput] = useState<string[]>([]);

  const addOutput = (text: string) => setOutput(prev => [...prev, text]);
  const clearOutput = () => setOutput([]);

  const demos = {
    generator: () => {
      clearOutput();
      function* fibonacci() {
        let [a, b] = [0, 1];
        while (true) {
          yield a;
          [a, b] = [b, a + b];
        }
      }
      const fib = fibonacci();
      addOutput('🔢 Generator: Fibonacci infinito');
      for (let i = 0; i < 10; i++) {
        addOutput(`fibonacci(${i}) = ${fib.next().value}`);
      }
    },
    proxy: () => {
      clearOutput();
      addOutput('🎭 Proxy: Validación reactiva');
      const validator = {
        set(target: any, property: string, value: any) {
          if (property === 'age' && (typeof value !== 'number' || value < 0)) {
            addOutput(`❌ Error: Age debe ser positivo`);
            return false;
          }
          target[property] = value;
          addOutput(`✅ Set ${property} = ${value}`);
          return true;
        }
      };
      const person = new Proxy({} as any, validator);
      person.name = 'John';
      person.age = 25;
      person.age = -5;
    },
    bitwise: () => {
      clearOutput();
      addOutput('⚡ Bitwise: Ultra-rápido');
      const num = 5;
      addOutput(`${num} << 1 = ${num << 1} (double)`);
      addOutput(`${num} >> 1 = ${num >> 1} (half)`);
      addOutput(`~~3.14 = ${~~3.14} (to int)`);
      const READ = 1 << 0, WRITE = 1 << 1, EXECUTE = 1 << 2;
      let perms = READ | WRITE;
      addOutput(`Permisos: ${perms.toString(2)} (binario)`);
    },
  };

  return (
    <div className="mt-6 p-6 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
      <h3 className="text-xl font-bold mb-4">🧪 Interactive Demos</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(demos).map((demo) => (
          <button
            key={demo}
            onClick={() => { setActiveDemo(demo); (demos as any)[demo](); }}
            className={`px-4 py-2 rounded ${activeDemo === demo ? 'bg-[var(--primary)] text-white' : 'bg-[var(--background)]'}`}
          >
            {demo.charAt(0).toUpperCase() + demo.slice(1)}
          </button>
        ))}
      </div>
      <div className="bg-black text-green-400 p-4 rounded font-mono text-sm h-64 overflow-y-auto">
        {output.length === 0 ? <div className="text-gray-500">→ Click demo...</div> : output.map((line, i) => <div key={i}>{line}</div>)}
      </div>
    </div>
  );
}

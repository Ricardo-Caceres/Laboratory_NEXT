'use client';

import { useState } from 'react';

type DemoType = 'generator' | 'proxy' | 'weakmap' | 'bitwise' | 'symbols' | 'currying' | 'trampoline';

export function AdvancedJSDemo() {
  const [activeDemo, setActiveDemo] = useState<DemoType>('generator');
  const [output, setOutput] = useState<string[]>([]);

  const addOutput = (text: string) => setOutput(prev => [...prev, text]);
  const clearOutput = () => setOutput([]);

  const demos: Record<DemoType, () => void> = {
    generator: () => {
      clearOutput();
      addOutput('🔢 GENERATOR: Fibonacci infinito (lazy evaluation)');
      addOutput('─'.repeat(60));
      
      function* fibonacci() {
        let [a, b] = [0, 1];
        while (true) {
          yield a;
          [a, b] = [b, a + b];
        }
      }
      
      const fib = fibonacci();
      for (let i = 0; i < 12; i++) {
        addOutput(`fib[${i.toString().padStart(2)}] = ${fib.next().value}`);
      }
      
      addOutput('');
      addOutput('💡 Ventaja: Puede generar valores infinitos sin llenar memoria');
      addOutput('   Solo calcula lo que necesitas, cuando lo necesitas');
    },
    
    proxy: () => {
      clearOutput();
      addOutput('🎭 PROXY: Validación y Reactividad');
      addOutput('─'.repeat(60));
      
      const validator = {
        set(target: any, property: string, value: any) {
          if (property === 'age') {
            if (typeof value !== 'number') {
              addOutput(`❌ Error: age debe ser número, recibió ${typeof value}`);
              return false;
            }
            if (value < 0 || value > 150) {
              addOutput(`❌ Error: age (${value}) fuera de rango [0, 150]`);
              return false;
            }
          }
          
          target[property] = value;
          addOutput(`✅ Set: ${property} = ${JSON.stringify(value)}`);
          return true;
        },
        
        get(target: any, property: string) {
          addOutput(`📖 Get: ${property} → ${JSON.stringify(target[property])}`);
          return target[property];
        }
      };
      
      const person = new Proxy({} as any, validator);
      
      addOutput('');
      addOutput('Operación: person.name = "Alice"');
      person.name = 'Alice';
      
      addOutput('');
      addOutput('Operación: person.age = 25');
      person.age = 25;
      
      addOutput('');
      addOutput('Operación: person.age = -5');
      person.age = -5;
      
      addOutput('');
      addOutput('Operación: console.log(person.name)');
      const _ = person.name;
      
      addOutput('');
      addOutput('💡 Uso: Vue 3 usa Proxy para reactividad, validación, logging');
    },
    
    weakmap: () => {
      clearOutput();
      addOutput('💾 WEAKMAP: Datos privados sin memory leaks');
      addOutput('─'.repeat(60));
      
      const privateData = new WeakMap();
      
      class BankAccount {
        public owner: string;
        
        constructor(owner: string, balance: number, pin: string) {
          this.owner = owner;
          privateData.set(this, { balance, pin, transactions: [] });
        }
        
        deposit(amount: number) {
          const data = privateData.get(this);
          if (data) {
            data.balance += amount;
            data.transactions.push({ type: 'deposit', amount });
            addOutput(`✅ Depositado: $${amount} → Balance: $${data.balance}`);
          }
        }
        
        withdraw(amount: number, pin: string) {
          const data = privateData.get(this);
          if (!data) return;
          
          if (data.pin !== pin) {
            addOutput(`❌ PIN incorrecto`);
            return;
          }
          
          if (data.balance < amount) {
            addOutput(`❌ Fondos insuficientes (balance: $${data.balance})`);
            return;
          }
          
          data.balance -= amount;
          data.transactions.push({ type: 'withdraw', amount });
          addOutput(`✅ Retirado: $${amount} → Balance: $${data.balance}`);
        }
        
        getBalance(pin: string) {
          const data = privateData.get(this);
          if (!data) return 0;
          
          if (data.pin !== pin) {
            addOutput(`❌ PIN incorrecto`);
            return 0;
          }
          
          addOutput(`📊 Balance actual: $${data.balance}`);
          return data.balance;
        }
      }
      
      addOutput('Creando cuenta: new BankAccount("Alice", 1000, "1234")');
      const account = new BankAccount('Alice', 1000, '1234');
      
      addOutput('');
      addOutput('Operación: account.deposit(500)');
      account.deposit(500);
      
      addOutput('');
      addOutput('Operación: account.withdraw(200, "1234")');
      account.withdraw(200, '1234');
      
      addOutput('');
      addOutput('Operación: account.withdraw(100, "0000") [PIN incorrecto]');
      account.withdraw(100, '0000');
      
      addOutput('');
      addOutput('Operación: account.getBalance("1234")');
      account.getBalance('1234');
      
      addOutput('');
      addOutput('💡 Los datos privados son REALMENTE privados');
      addOutput(`   account.balance = undefined (no accesible)`);
      addOutput(`   account.pin = undefined (no accesible)`);
    },
    
    bitwise: () => {
      clearOutput();
      addOutput('⚡ BITWISE: Operaciones ultra-rápidas a nivel de bits');
      addOutput('─'.repeat(60));
      
      addOutput('🔢 Operaciones básicas:');
      const num = 5;
      addOutput(`${num} << 1 = ${num << 1}  (multiplicar por 2)`);
      addOutput(`${num} << 2 = ${num << 2}  (multiplicar por 4)`);
      addOutput(`${num} >> 1 = ${num >> 1}  (dividir por 2)`);
      addOutput(`~~3.14 = ${~~3.14}  (convertir a int, más rápido que Math.floor)`);
      
      addOutput('');
      addOutput('🏴 Sistema de permisos (flags):');
      const READ    = 1 << 0;  // 0001
      const WRITE   = 1 << 1;  // 0010
      const EXECUTE = 1 << 2;  // 0100
      const DELETE  = 1 << 3;  // 1000
      
      let perms = 0;
      addOutput(`Permisos iniciales: ${perms.toString(2).padStart(4, '0')} (binario)`);
      
      perms |= READ;
      addOutput(`Agregar READ:  ${perms.toString(2).padStart(4, '0')} = ${perms}`);
      
      perms |= WRITE;
      addOutput(`Agregar WRITE: ${perms.toString(2).padStart(4, '0')} = ${perms}`);
      
      perms |= EXECUTE;
      addOutput(`Agregar EXEC:  ${perms.toString(2).padStart(4, '0')} = ${perms}`);
      
      addOutput('');
      addOutput('✓ Verificaciones:');
      addOutput(`  Tiene READ: ${(perms & READ) !== 0}`);
      addOutput(`  Tiene WRITE: ${(perms & WRITE) !== 0}`);
      addOutput(`  Tiene DELETE: ${(perms & DELETE) !== 0}`);
      
      perms &= ~WRITE;
      addOutput('');
      addOutput(`Remover WRITE: ${perms.toString(2).padStart(4, '0')} = ${perms}`);
      addOutput(`  Tiene WRITE: ${(perms & WRITE) !== 0}`);
      
      addOutput('');
      addOutput('💡 Uso: Sistemas de permisos, feature flags, optimizaciones');
    },
    
    symbols: () => {
      clearOutput();
      addOutput('🔣 SYMBOLS: Well-Known Symbols y Metaprogramación');
      addOutput('─'.repeat(60));
      
      class Money {
        constructor(public amount: number, public currency: string) {}
        
        [Symbol.toPrimitive](hint: string) {
          if (hint === 'number') return this.amount;
          if (hint === 'string') return `${this.amount} ${this.currency}`;
          return this.amount;
        }
        
        *[Symbol.iterator]() {
          // Iterar sobre los dólares individuales
          for (let i = 0; i < this.amount; i++) {
            yield 1;
          }
        }
        
        get [Symbol.toStringTag]() {
          return 'Money';
        }
      }
      
      const price = new Money(5, 'USD');
      
      addOutput('Creado: new Money(5, "USD")');
      addOutput('');
      
      addOutput('Symbol.toPrimitive (conversión personalizada):');
      addOutput(`  +price → ${+price} (conversión a number)`);
      addOutput(`  \`\${price}\` → "${price}" (conversión a string)`);
      addOutput(`  price + 10 → ${price.amount + 10} (default hint)`);
      
      addOutput('');
      addOutput('Symbol.iterator (hacer iterable):');
      const bills = [...price];
      addOutput(`  [...price] → [${bills.join(', ')}] (${bills.length} billetes de $1)`);
      
      addOutput('');
      addOutput('Symbol.toStringTag:');
      addOutput(`  Object.prototype.toString.call(price) → ${Object.prototype.toString.call(price)}`);
      
      addOutput('');
      addOutput('💡 Well-known Symbols permiten customizar comportamiento interno');
      addOutput('   de objetos: iteración, conversión, instanceof, etc.');
    },
    
    currying: () => {
      clearOutput();
      addOutput('🍛 CURRYING: Funciones configurables y reutilizables');
      addOutput('─'.repeat(60));
      
      const curry = <T extends any[], R>(fn: (...args: T) => R) => {
        return function curried(...args: any[]): any {
          if (args.length >= fn.length) {
            return fn(...args as T);
          }
          return (...nextArgs: any[]) => curried(...args, ...nextArgs);
        };
      };
      
      const sum3 = (a: number, b: number, c: number) => a + b + c;
      const curriedSum = curry(sum3);
      
      addOutput('Función original: sum3(a, b, c) = a + b + c');
      addOutput('');
      
      addOutput('Currying permite aplicación parcial:');
      addOutput(`  curriedSum(1)(2)(3) = ${curriedSum(1)(2)(3)}`);
      addOutput(`  curriedSum(1, 2)(3) = ${curriedSum(1, 2)(3)}`);
      addOutput(`  curriedSum(1)(2, 3) = ${curriedSum(1)(2, 3)}`);
      
      addOutput('');
      addOutput('Configurar funciones reutilizables:');
      const add5 = curriedSum(5);
      addOutput(`  const add5 = curriedSum(5)`);
      addOutput(`  add5(10, 15) = ${add5(10, 15)}`);
      addOutput(`  add5(3, 7) = ${add5(3, 7)}`);
      
      const add5and10 = curriedSum(5)(10);
      addOutput('');
      addOutput(`  const add5and10 = curriedSum(5)(10)`);
      addOutput(`  add5and10(20) = ${add5and10(20)}`);
      addOutput(`  add5and10(100) = ${add5and10(100)}`);
      
      addOutput('');
      addOutput('💡 Uso: Event handlers, configuración de fetch, validators,');
      addOutput('   logging con contexto, composition de funciones');
    },
    
    trampoline: () => {
      clearOutput();
      addOutput('🦘 TRAMPOLINING: Recursión sin stack overflow');
      addOutput('─'.repeat(60));
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const trampoline = function<T>(fn: (...args: any[]) => T | (() => T)) {
        return (...args: any[]): T => {
          let result: any = fn(...args);
          while (typeof result === 'function') {
            result = result();
          }
          return result;
        };
      };
      
      const factorial = trampoline(function fact(n: number, acc: number = 1): any {
        if (n <= 1) return acc;
        return () => fact(n - 1, n * acc);
      });
      
      addOutput('Problema: Recursión normal causa stack overflow en n grandes');
      addOutput('Solución: Trampolining convierte recursión en iteración');
      addOutput('');
      
      addOutput('Calculando factoriales:');
      for (const n of [5, 10, 15, 20]) {
        const result = factorial(n);
        addOutput(`  factorial(${n}) = ${result}`);
      }
      
      addOutput('');
      addOutput('Factoriales grandes:');
      addOutput(`  factorial(100) = ${factorial(100)} (¡sin overflow!)`);
      addOutput(`  factorial(500) = Infinity (resultado too large)`);
      
      addOutput('');
      addOutput('Fibonacci con trampolining:');
      const fibonacci = trampoline(function fib(n: number, a: number = 0, b: number = 1): any {
        if (n === 0) return a;
        if (n === 1) return b;
        return () => fib(n - 1, b, a + b);
      });
      
      for (const n of [10, 20, 30, 40, 50]) {
        addOutput(`  fib(${n}) = ${fibonacci(n)}`);
      }
      
      addOutput('');
      addOutput('💡 Permite recursión "infinita" sin llenar el call stack');
      addOutput('   JavaScript no tiene TCO, trampolining es la solución');
    },
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">🧪 Demos Interactivos</h3>
      
      {/* Demo Selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(demos) as DemoType[]).map((demo) => (
          <button
            key={demo}
            onClick={() => {
              setActiveDemo(demo);
              demos[demo]();
            }}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeDemo === demo
                ? 'bg-[var(--primary)] text-white shadow-lg scale-105'
                : 'bg-[var(--panel)] hover:bg-[var(--border)] border border-[var(--border)]'
            }`}
          >
            {demo === 'generator' && '🔢 Generator'}
            {demo === 'proxy' && '🎭 Proxy'}
            {demo === 'weakmap' && '💾 WeakMap'}
            {demo === 'bitwise' && '⚡ Bitwise'}
            {demo === 'symbols' && '🔣 Symbols'}
            {demo === 'currying' && '🍛 Currying'}
            {demo === 'trampoline' && '🦘 Trampoline'}
          </button>
        ))}
      </div>

      {/* Console Output */}
      <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-xs h-96 overflow-y-auto shadow-lg border border-gray-700">
        {output.length === 0 ? (
          <div className="text-gray-500 text-center mt-20">
            → Selecciona un demo para ver su ejecución
          </div>
        ) : (
          output.map((line, i) => (
            <div key={i} className="leading-relaxed">
              {line}
            </div>
          ))
        )}
      </div>

      {/* Legend */}
      <div className="mt-4 text-xs opacity-70 space-y-1">
        <p>💡 <strong>Tip:</strong> Estos demos muestran técnicas avanzadas que el 90% de developers no dominan</p>
        <p>🎯 Úsalas cuando la situación lo requiera, no por over-engineering</p>
      </div>
    </div>
  );
}

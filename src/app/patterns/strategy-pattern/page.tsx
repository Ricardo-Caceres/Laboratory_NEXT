import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function StrategyPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Strategy Pattern"
        description="🎯 **Strategy Pattern** - Intercambia algoritmos en runtime

El Strategy Pattern es un patrón comportamental GoF que define una familia de algoritmos, encapsula cada uno en clases separadas, y los hace intercambiables. Permite que el algoritmo varíe independientemente de los clientes que lo usan, eliminando condicionales complejos.

**🎯 ¿Cuándo usarlo?**
- Múltiples **algoritmos** para realizar la misma tarea
- Eliminar **switch/if-else** complejos basados en tipos
- **Cambiar comportamiento** en runtime según contexto
- Diferentes **variantes de un proceso** (sorting, validation, pricing)
- **Plugin systems** donde estrategias se cargan dinámicamente

**🔑 Conceptos Clave:**
- **Strategy**: Interfaz común para todos los algoritmos
- **ConcreteStrategy**: Implementaciones específicas del algoritmo
- **Context**: Clase que usa una Strategy
- **Runtime Selection**: Estrategia puede cambiar en ejecución

**✅ Ventajas:**
- 🔓 **Open/Closed**: Nuevas estrategias sin modificar context
- 🎯 **Single Responsibility**: Cada estrategia una responsabilidad
- 🔄 **Runtime Flexibility**: Cambia estrategia dinámicamente
- 🧪 **Testeable**: Fácil testear cada estrategia aisladamente
- 📦 **No Condicionales**: Elimina if/else/switch complejos

**📐 Estructura:**
\`\`\`typescript
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardStrategy implements PaymentStrategy {
  pay(amount: number) {
    console.log(\`Paid $\${amount} with Credit Card\`);
  }
}

class PayPalStrategy implements PaymentStrategy {
  pay(amount: number) {
    console.log(\`Paid $\${amount} with PayPal\`);
  }
}

class PaymentContext {
  constructor(private strategy: PaymentStrategy) {}
  
  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }
  
  processPayment(amount: number) {
    this.strategy.pay(amount);
  }
}

// Usage
const context = new PaymentContext(new CreditCardStrategy());
context.processPayment(100);

context.setStrategy(new PayPalStrategy());
context.processPayment(50);
\`\`\`

**💡 Casos de Uso Reales:**
- **Payment Processing**: Stripe, PayPal, Crypto strategies
- **Sorting Algorithms**: QuickSort, MergeSort, BubbleSort
- **Compression**: ZIP, RAR, 7Z strategies
- **Validation**: Email, Phone, Password validators
- **Discount Calculation**: Percentage, Fixed, BOGO strategies
- **Routing**: Different routing algorithms in navigation

**🆚 Strategy vs State:**
- **Strategy**: Algoritmos intercambiables, cliente conoce estrategias
- **State**: Cambio de comportamiento basado en estado interno

**⚠️ Consideraciones:**
- Cliente debe conocer estrategias disponibles
- Puede aumentar número de clases si muchas estrategias

**Ejemplo del código:**
Sistema de descuentos con diferentes estrategias (porcentaje, monto fijo, sin descuento) que se aplican dinámicamente."
        codeContent={[
          {
            filePath: 'patterns/strategy-discount.ts',
            content: `// Strategy Interface
interface DiscountStrategy {
  calculate(price: number): number;
}

// Concrete Strategies
class PercentageDiscount implements DiscountStrategy {
  constructor(private percentage: number) {}
  
  calculate(price: number): number {
    return price * (1 - this.percentage / 100);
  }
}

class FixedDiscount implements DiscountStrategy {
  constructor(private amount: number) {}
  
  calculate(price: number): number {
    return Math.max(0, price - this.amount);
  }
}

class NoDiscount implements DiscountStrategy {
  calculate(price: number): number {
    return price;
  }
}

class BOGODiscount implements DiscountStrategy {
  calculate(price: number): number {
    return price * 0.5; // Buy one get one = 50% off
  }
}

// Context
class ShoppingCart {
  private items: number[] = [];
  private strategy: DiscountStrategy = new NoDiscount();
  
  addItem(price: number) {
    this.items.push(price);
  }
  
  setDiscountStrategy(strategy: DiscountStrategy) {
    this.strategy = strategy;
  }
  
  getTotal(): number {
    const subtotal = this.items.reduce((sum, price) => sum + price, 0);
    return this.strategy.calculate(subtotal);
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem(100);
cart.addItem(50);

console.log(cart.getTotal()); // 150 (no discount)

cart.setDiscountStrategy(new PercentageDiscount(20));
console.log(cart.getTotal()); // 120 (20% off)

cart.setDiscountStrategy(new FixedDiscount(30));
console.log(cart.getTotal()); // 120 (30 fixed discount)

cart.setDiscountStrategy(new BOGODiscount());
console.log(cart.getTotal()); // 75 (BOGO)`,
          },
          {
            filePath: 'patterns/strategy-validation.ts',
            content: `// Real-world: Form Validation Strategies
interface ValidationStrategy {
  validate(value: string): boolean;
  getErrorMessage(): string;
}

class EmailValidation implements ValidationStrategy {
  validate(value: string): boolean {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
  }
  
  getErrorMessage(): string {
    return 'Invalid email format';
  }
}

class PhoneValidation implements ValidationStrategy {
  validate(value: string): boolean {
    return /^\\d{10}$/.test(value.replace(/\\D/g, ''));
  }
  
  getErrorMessage(): string {
    return 'Phone must be 10 digits';
  }
}

class PasswordValidation implements ValidationStrategy {
  validate(value: string): boolean {
    return value.length >= 8 && 
           /[A-Z]/.test(value) && 
           /[0-9]/.test(value);
  }
  
  getErrorMessage(): string {
    return 'Password must be 8+ chars with uppercase and number';
  }
}

// Field Validator Context
class FormField {
  constructor(
    private name: string,
    private strategy: ValidationStrategy
  ) {}
  
  validate(value: string): { valid: boolean; error?: string } {
    const valid = this.strategy.validate(value);
    return {
      valid,
      error: valid ? undefined : this.strategy.getErrorMessage()
    };
  }
}

// Usage
const emailField = new FormField('email', new EmailValidation());
console.log(emailField.validate('test@example.com')); // { valid: true }
console.log(emailField.validate('invalid')); // { valid: false, error: '...' }

const phoneField = new FormField('phone', new PhoneValidation());
console.log(phoneField.validate('1234567890')); // { valid: true }`,
          },
          {
            filePath: 'patterns/strategy-sorting.ts',
            content: `// Classic Example: Sorting Strategies
interface SortStrategy<T> {
  sort(data: T[]): T[];
}

class QuickSort<T> implements SortStrategy<T> {
  sort(data: T[]): T[] {
    if (data.length <= 1) return data;
    const pivot = data[Math.floor(data.length / 2)];
    const left = data.filter(x => x < pivot);
    const middle = data.filter(x => x === pivot);
    const right = data.filter(x => x > pivot);
    return [...this.sort(left), ...middle, ...this.sort(right)];
  }
}

class BubbleSort<T> implements SortStrategy<T> {
  sort(data: T[]): T[] {
    const arr = [...data];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
}

// Context
class DataSorter<T> {
  constructor(private strategy: SortStrategy<T>) {}
  
  setStrategy(strategy: SortStrategy<T>) {
    this.strategy = strategy;
  }
  
  sort(data: T[]): T[] {
    console.log(\`Sorting with \${this.strategy.constructor.name}\`);
    return this.strategy.sort(data);
  }
}

// Usage
const sorter = new DataSorter(new QuickSort<number>());
console.log(sorter.sort([5, 2, 9, 1, 7]));

// Switch to bubble sort for small arrays
sorter.setStrategy(new BubbleSort<number>());
console.log(sorter.sort([3, 1, 2]));`,
          }
        ]}
      />
      <RightPanel>
        <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="text-center max-w-md">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Strategy Pattern</h2>
            <p className="text-gray-600 mb-6">Interchangeable algorithms at runtime</p>
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
              <code className="text-sm text-gray-800 block text-left">
                {`// Switch strategies
cart.setStrategy(
  new PercentageDiscount(20)
);

cart.setStrategy(
  new FixedDiscount(50)
);`}
              </code>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

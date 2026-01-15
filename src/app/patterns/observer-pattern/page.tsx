import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example_demo'));

export default function ObserverPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Observer Pattern"
        description="📡 **Observer Pattern** - El fundamento de arquitecturas event-driven

El Observer Pattern es un patrón comportamental GoF que define una dependencia uno-a-muchos entre objetos, de manera que cuando un objeto cambia su estado, todos sus dependientes son notificados y actualizados automáticamente. Es el patrón que impulsa RxJS, EventEmitter, Redux y la mayoría de sistemas reactivos.

**🎯 ¿Cuándo usarlo?**
- Implementar **event-driven architectures** donde múltiples componentes reaccionan a cambios
- **Pub/Sub systems** para comunicación desacoplada
- **State management** (Redux, MobX, Zustand usan variantes)
- **Real-time updates** (WebSockets, Server-Sent Events)
- **Reactive programming** (RxJS Observables)
- **UI updates** cuando el modelo cambia

**🔑 Conceptos Clave:**
- **Subject (Observable)**: Objeto que mantiene lista de observers y notifica cambios
- **Observer (Subscriber)**: Objeto que se suscribe para recibir notificaciones
- **Subscribe**: Método para registrarse como observer
- **Unsubscribe**: Método para des-registrarse
- **Notify**: Dispara actualización a todos los observers

**✅ Ventajas:**
- 🔓 **Loose Coupling**: Subject no conoce detalles de observers
- 📡 **Broadcast**: Un cambio notifica a N observers automáticamente
- 🔄 **Dynamic**: Observers pueden suscribirse/desuscribirse en runtime
- 🧪 **Testeable**: Fácil testear observers de forma aislada
- 🎯 **Single Responsibility**: Subject maneja lógica, observers reaccionan

**📐 Estructura:**
\`\`\`typescript
interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];
  
  subscribe(observer: Observer) {
    this.observers.push(observer);
    return () => this.unsubscribe(observer);
  }
  
  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }
  
  notify(data: any) {
    this.observers.forEach(o => o.update(data));
  }
}
\`\`\`

**💡 Casos de Uso Reales:**
- **DOM Events**: addEventListener es Observer Pattern
- **RxJS**: Observables/Observers
- **Redux**: Store notifica a subscribers cuando state cambia
- **Vue.js**: Reactivity system usa Observer Pattern
- **Node.js EventEmitter**: on, emit, removeListener
- **WebSockets**: onmessage, onopen, onclose

**🆚 Observer vs Pub/Sub:**
- **Observer**: Subject conoce a observers directamente
- **Pub/Sub**: Event channel intermedio, completo desacoplamiento

**⚠️ Consideraciones:**
- **Memory leaks**: Siempre unsubscribe cuando ya no necesites updates
- **Order**: Notificaciones pueden no tener orden garantizado
- **Performance**: Muchos observers pueden impactar performance

**Ejemplo del código:**
Sistema de mensajería donde múltiples observers (subscribers) reciben notificaciones cuando se emite un evento."
        codeContent={[
          {
            filePath: 'patterns/observer-basic.ts',
            content: `// Observer Pattern: Event Emitter
type EventCallback = (data?: any) => void;

class EventEmitter {
  private events: Map<string, EventCallback[]> = new Map();
  
  // Subscribe to event
  subscribe(event: string, callback: EventCallback) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)!.push(callback);
    
    // Return unsubscribe function
    return () => this.unsubscribe(event, callback);
  }
  
  // Unsubscribe from event
  unsubscribe(event: string, callback: EventCallback) {
    const callbacks = this.events.get(event);
    if (!callbacks) return;
    
    this.events.set(
      event,
      callbacks.filter(cb => cb !== callback)
    );
  }
  
  // Emit event to all subscribers
  emit(event: string, data?: any) {
    const callbacks = this.events.get(event);
    if (!callbacks) return;
    
    callbacks.forEach(callback => callback(data));
  }
}

// Usage
const emitter = new EventEmitter();

// Observer 1
const unsubscribe1 = emitter.subscribe('message', (data) => {
  console.log('Observer 1 received:', data);
});

// Observer 2
const unsubscribe2 = emitter.subscribe('message', (data) => {
  console.log('Observer 2 received:', data);
});

// Emit event - both observers notified
emitter.emit('message', 'Hello World');

// Unsubscribe observer 1
unsubscribe1();

// Only observer 2 receives this
emitter.emit('message', 'Second message');`,
          },
          {
            filePath: 'patterns/observer-stock-ticker.ts',
            content: `// Real-world: Stock Price Ticker
interface StockObserver {
  update(stock: string, price: number): void;
}

class StockTicker {
  private observers: StockObserver[] = [];
  private prices: Map<string, number> = new Map();
  
  subscribe(observer: StockObserver) {
    this.observers.push(observer);
    return () => this.unsubscribe(observer);
  }
  
  unsubscribe(observer: StockObserver) {
    this.observers = this.observers.filter(o => o !== observer);
  }
  
  setPrice(stock: string, price: number) {
    this.prices.set(stock, price);
    this.notify(stock, price);
  }
  
  private notify(stock: string, price: number) {
    this.observers.forEach(observer => {
      observer.update(stock, price);
    });
  }
}

// Observers
class PortfolioDisplay implements StockObserver {
  update(stock: string, price: number) {
    console.log(\`Portfolio: \${stock} is now $\${price}\`);
    // Update UI
  }
}

class PriceAlert implements StockObserver {
  constructor(private threshold: number) {}
  
  update(stock: string, price: number) {
    if (price > this.threshold) {
      console.log(\`🚨 Alert: \${stock} exceeded $\${this.threshold}!\`);
    }
  }
}

class Logger implements StockObserver {
  update(stock: string, price: number) {
    console.log(\`[LOG] \${new Date().toISOString()}: \${stock} = $\${price}\`);
  }
}

// Usage
const ticker = new StockTicker();

ticker.subscribe(new PortfolioDisplay());
ticker.subscribe(new PriceAlert(150));
ticker.subscribe(new Logger());

ticker.setPrice('AAPL', 145); // All 3 observers notified
ticker.setPrice('AAPL', 155); // Alert triggers!`,
          },
          {
            filePath: 'patterns/observer-redux-pattern.ts',
            content: `// Redux-like Observer Pattern
type Listener = () => void;
type State = { count: number };

class Store {
  private state: State = { count: 0 };
  private listeners: Listener[] = [];
  
  getState(): State {
    return this.state;
  }
  
  subscribe(listener: Listener) {
    this.listeners.push(listener);
    return () => this.unsubscribe(listener);
  }
  
  unsubscribe(listener: Listener) {
    this.listeners = this.listeners.filter(l => l !== listener);
  }
  
  dispatch(action: { type: string; payload?: any }) {
    // Update state (simplified reducer)
    if (action.type === 'INCREMENT') {
      this.state = { count: this.state.count + 1 };
    } else if (action.type === 'DECREMENT') {
      this.state = { count: this.state.count - 1 };
    }
    
    // Notify all observers
    this.notify();
  }
  
  private notify() {
    this.listeners.forEach(listener => listener());
  }
}

// Usage
const store = new Store();

// Observer 1: UI Component
const unsubUI = store.subscribe(() => {
  console.log('UI Update:', store.getState());
});

// Observer 2: Logger
const unsubLogger = store.subscribe(() => {
  console.log('[LOG]', store.getState());
});

store.dispatch({ type: 'INCREMENT' }); // Both observers notified
store.dispatch({ type: 'INCREMENT' }); // Both observers notified`,
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
  title: 'Observer Pattern | Design Patterns',
  description: '📡 El patrón fundamental para arquitecturas event-driven - Permite que objetos se suscriban a cambios sin acoplamiento directo. Base de RxJS, EventEmitter, Redux y la mayoría de sistemas reactivos modernos',
};

import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function RxJSPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="RxJS con React/Next.js - Guía Completa"
        description="**RxJS (Reactive Extensions for JavaScript)** es una biblioteca para programación reactiva usando Observables. Permite manejar flujos de datos asíncronos complejos de manera declarativa.


📚 CONCEPTOS FUNDAMENTALES

**Observable**
Fuente de datos que emite valores a lo largo del tiempo (stream). Similar a un array, pero los valores llegan asíncronamente.

**Observer**
Consumidor que reacciona a valores emitidos. Implementa callbacks: next, error, complete.

**Subscription**
Conexión activa entre Observable y Observer. Debe hacerse unsubscribe para evitar memory leaks.

**Operators**
Funciones puras que transforman, filtran o combinan Observables. Se encadenan en pipelines usando pipe().

**Subject**
Observable que también es Observer. Puede emitir valores y suscribirse a otros Observables.


🎯 BENEFICIOS DE RXJS CON REACT

**1. Gestión Compleja de Estado Asíncrono**

- Maneja múltiples streams de datos simultáneos
- Coordina llamadas API dependientes elegantemente
- Gestiona race conditions automáticamente
- Composición de operaciones asíncronas

**2. Composición Declarativa**

- Pipelines de transformación legibles y expresivos
- Separación clara de lógica de negocio del UI
- Código más testeable y mantenible
- Reutilización de operadores

**3. Control Avanzado de Eventos**

- Debouncing y throttling automático para inputs
- Cancelación de requests automática
- Retry logic robusto con exponential backoff
- Error handling centralizado y componible

**4. WebSockets y Real-time**

- Integración natural con WebSockets y Server-Sent Events
- Manejo automático de backpressure
- Reconnection automática con retry configurable
- Sincronización de múltiples fuentes de datos

**5. Performance Optimizado**

- Prevención de memory leaks con auto-unsubscribe
- Compartir computations entre múltiples suscriptores
- Lazy evaluation (solo ejecuta cuando hay suscriptor)
- Optimización de re-renders en componentes React


⚠️ CONSIDERACIONES IMPORTANTES

**Curva de Aprendizaje Pronunciada**

- Más de 100+ operadores diferentes para aprender
- Conceptos de programación funcional reactiva
- Debugging complejo que requiere marble diagrams
- Tiempo de onboarding significativo para nuevos desarrolladores

**Bundle Size**

- Aproximadamente 50KB minified
- Mitigable con tree-shaking en webpack/vite
- Alternativas más ligeras: most.js, xstream

**Riesgo de Over-engineering**

- Para casos simples, useState y useEffect son suficientes
- No todo necesita ser un Observable
- Agregar complejidad innecesaria dificulta mantenimiento
- Evalúa si el problema justifica usar RxJS

**Integración con React**

- Requiere crear hooks personalizados
- No es nativo de React (filosofía diferente a useState)
- Puede causar re-renders innecesarios si no se optimiza
- Necesita manejo cuidadoso del lifecycle de componentes


📍 CUÁNDO USAR RXJS

✅ USA RXJS PARA:

**Autocomplete y Search Avanzado**
- Debouncing de inputs del usuario
- Cancelación automática de requests anteriores
- Manejo correcto del orden de respuestas
- Evita race conditions

**Drag and Drop Complejo**
- Coordinación de múltiples eventos del mouse
- Cálculos en tiempo real de posición
- Gestión de estado durante el drag
- Composición de eventos touchstart, mousemove, etc

**Dashboards en Tiempo Real**
- Combinación de WebSocket más polling
- Transformaciones y agregaciones de datos
- Actualización reactiva del UI
- Manejo de múltiples fuentes simultáneas

**Validación de Formularios Compleja**
- Validación asíncrona con dependencias entre campos
- Validación cross-field
- Feedback en tiempo real mientras se escribe
- Debouncing de validaciones costosas

**Infinite Scroll**
- Combinación de scroll events más API calls
- Debouncing y throttling configurables
- Manejo automático de loading states
- Cancelación de requests al scrollear rápido

**Aplicaciones de Chat**
- Mensajes en tiempo real vía WebSocket
- Presence indicators (usuarios online/offline)
- Typing indicators mientras se escribe
- Sincronización de estado

**Sincronización de Datos**
- Aplicaciones offline-first
- Retry logic con exponential backoff
- Conflict resolution automático
- Queue de operaciones pendientes


❌ NO USES RXJS PARA:

**Simple Fetch de Datos**
- Usa SWR o React Query en su lugar
- Mejor DX para REST APIs simples
- Cache automático y sincronización incluidos
- Menos boilerplate

**Formularios Básicos**
- Formik o React Hook Form son mejores opciones
- Menos código para casos comunes
- Validación más simple y directa
- Mejor integración con React

**Eventos Simples onClick**
- Event handlers normales de React son suficientes
- No requiere la complejidad de Observables
- Más directo y fácil de entender

**Proyectos Pequeños**
- Sin complejidad asíncrona significativa
- Overhead no justificado
- Mantenimiento más simple sin RxJS
- Menor tamaño de bundle

**Equipo Sin Experiencia**
- Si tu equipo no conoce RxJS
- Curva de aprendizaje afecta productividad inicial
- Considera alternativas más simples primero
- Invierte tiempo en capacitación si decides usarlo


🔄 RXJS VS ALTERNATIVAS

**RxJS vs React Query / SWR**

RxJS:
- Control total sobre el flujo de datos
- Múltiples fuentes de datos combinadas
- Transformaciones complejas con operadores
- Mayor complejidad y curva de aprendizaje

React Query / SWR:
- Cache automático y sincronización
- Mejor DX para REST APIs simples
- Revalidación automática
- Menor boilerplate y más rápido de implementar


**RxJS vs Zustand / Redux**

RxJS:
- Perfecto para streams asíncronos y eventos temporales
- No es state management per se
- Manejo de flujos de datos reactivos
- Composición de operaciones asíncronas

Zustand / Redux:
- Estado global sincrónico
- Actualizaciones predecibles
- DevTools para debugging
- Arquitectura clara de estado


**RxJS vs Promises / Async-Await**

RxJS:
- Múltiples valores a lo largo del tiempo
- Cancelable (importante para cleanup)
- Composición rica con operadores
- Lazy evaluation

Promises / Async-Await:
- Un solo valor (resolve una vez)
- No cancelable
- Sintaxis más simple y familiar
- Eager evaluation


🏗️ PATRONES EN NEXT.JS

**Server Components** ❌
No uses RxJS aquí. No hay código cliente ni interactividad. Los Observables requieren runtime del navegador.

**Client Components** ✅
Perfecto para lógica compleja. Usa hooks personalizados para encapsular. Ideal para manejo de eventos y estado asíncrono.

**API Routes** 🟡
Útil para agregar múltiples fuentes. Combinar datos de diferentes APIs. Transformaciones complejas antes de responder.

**Middleware** ❌
No recomendado. Edge runtime tiene limitaciones. Mejor usar lógica simple y directa.

**App Router** ✅
Compatible y funciona bien. Prefiere Server Actions para mutaciones simples. Usa RxJS en Client Components para lógica compleja.


💡 MEJORES PRÁCTICAS

**1. Encapsula en Hooks Personalizados**
- Crea hooks reutilizables que encapsulen lógica RxJS
- Separa concerns y mejora testability
- Hace el código más limpio y mantenible
- Facilita testing unitario

**2. Cleanup Automático Siempre**
- Retorna unsubscribe en useEffect sin falta
- Evita memory leaks críticos
- Usa takeUntil para cancelar automáticamente
- Patrón destroy$ subject recomendado

**3. ShareReplay para Evitar Duplicados**
- Comparte resultados entre múltiples suscriptores
- Evita requests HTTP duplicados e innecesarios
- Mejora performance significativamente
- Especialmente útil para datos que no cambian

**4. TakeUntil al Desmontar Componente**
- Cancela streams cuando el componente se desmonta
- Patrón común con un Subject de destroy
- Previene actualizaciones de estado en componentes desmontados
- Evita errores y warnings en consola

**5. Evita Nested Subscriptions**
- Usa operadores como switchMap, mergeMap, concatMap
- Código más plano y legible
- Mejor manejo de errores
- Performance mejorado

**6. TypeScript Siempre**
- Define tipos explícitos para tus Observables
- Mejor autocomplete y detección de errores
- Documentación implícita del código
- Refactoring más seguro

**7. Testing con TestScheduler**
- Usa TestScheduler para tests determinísticos
- Marble testing para flujos complejos
- Tests más rápidos y confiables
- Debugging más fácil de flujos asíncronos"
        codeContent={[
          {
            filePath: 'rxjs/1-basic-observable.ts',
            content: `import { Observable } from 'rxjs';

// EJEMPLO 1: Observable Básico
// Un Observable es un stream de datos que emite valores a lo largo del tiempo
// Similar a un array, pero los valores llegan asíncronamente

const observable = new Observable<number>(subscriber => {
  // Emitimos valores sincrónicamente
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  
  // Emitimos un valor después de 1 segundo
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete(); // Indicamos que terminó
  }, 1000);
});

// Observer: objeto con 3 callbacks opcionales
observable.subscribe({
  next: (value) => console.log('Received:', value),  // Se ejecuta cada vez que hay un valor
  error: (err) => console.error('Error:', err),      // Se ejecuta si hay error
  complete: () => console.log('Complete!'),          // Se ejecuta cuando termina
});

// Output:
// Received: 1
// Received: 2
// Received: 3
// (1 segundo después)
// Received: 4
// Complete!`,
          },
          {
            filePath: 'rxjs/2-creation-operators.ts',
            content: `import { of, from, interval, fromEvent, timer, range } from 'rxjs';
import { take } from 'rxjs/operators';

// EJEMPLO 2: Operadores de Creación
// RxJS provee funciones para crear Observables fácilmente

// of: Emite valores sincrónicamente y completa
of(1, 2, 3).subscribe(x => console.log('of:', x));
// Output: of: 1, of: 2, of: 3

// from: Convierte arrays, promises, iterables en Observable
from([10, 20, 30]).subscribe(x => console.log('from:', x));
from(fetch('/api/user')).subscribe(res => console.log('Response:', res));

// interval: Emite números secuencialmente cada X ms (infinito)
interval(1000).pipe(take(3)).subscribe(x => console.log('interval:', x));
// Output (cada 1s): interval: 0, interval: 1, interval: 2

// timer: Espera X ms, luego emite y opcionalmente continúa con intervalo
timer(2000).subscribe(() => console.log('Timer completed!'));
timer(1000, 500).pipe(take(3)).subscribe(x => console.log('timer:', x));

// range: Emite secuencia de números
range(1, 5).subscribe(x => console.log('range:', x));
// Output: range: 1, 2, 3, 4, 5

// fromEvent: Convierte eventos DOM en Observable
const clicks$ = fromEvent(document, 'click');
clicks$.subscribe(event => console.log('Clicked at:', event.clientX, event.clientY));`,
          },
          {
            filePath: 'rxjs/3-transformation-operators.ts',
            content: `import { of, interval } from 'rxjs';
import { map, filter, scan, reduce, pluck } from 'rxjs/operators';

// EJEMPLO 3: Operadores de Transformación
// Transforman los valores emitidos sin modificar el Observable original

// map: Transforma cada valor (como Array.map)
of(1, 2, 3, 4, 5)
  .pipe(map(x => x * 2))
  .subscribe(x => console.log('doubled:', x));
// Output: doubled: 2, 4, 6, 8, 10

// filter: Filtra valores que cumplan condición (como Array.filter)
of(1, 2, 3, 4, 5)
  .pipe(filter(x => x % 2 === 0))
  .subscribe(x => console.log('even:', x));
// Output: even: 2, 4

// scan: Acumula valores (como Array.reduce pero emite cada paso)
of(1, 2, 3, 4, 5)
  .pipe(scan((acc, curr) => acc + curr, 0))
  .subscribe(x => console.log('sum:', x));
// Output: sum: 1, 3, 6, 10, 15 (valores acumulativos)

// reduce: Acumula y emite solo el resultado final
of(1, 2, 3, 4, 5)
  .pipe(reduce((acc, curr) => acc + curr, 0))
  .subscribe(x => console.log('total:', x));
// Output: total: 15 (solo el último)

// Combinando operadores en pipeline
interval(1000)
  .pipe(
    take(5),                    // Toma solo 5 valores
    map(x => x + 1),            // Suma 1 (empieza desde 1)
    filter(x => x % 2 === 0),   // Solo pares
    map(x => x * 10)            // Multiplica por 10
  )
  .subscribe(x => console.log('result:', x));
// Output (cada 1s): result: 20, result: 40`,
          },
          {
            filePath: 'rxjs/4-react-hook-basic.tsx',
            content: `import { useEffect, useState } from 'react';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

// EJEMPLO 4: Hook Básico con RxJS
// Integración simple de Observable en React

function TimerComponent() {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Creamos un Observable que emite cada segundo
    const subscription = interval(1000)
      .pipe(
        take(10),              // Solo 10 valores
        map(x => x + 1)        // Empieza desde 1
      )
      .subscribe({
        next: (value) => setCount(value),
        complete: () => setIsComplete(true)
      });

    // CRÍTICO: Cleanup para evitar memory leaks
    return () => subscription.unsubscribe();
  }, []); // Array vacío = se ejecuta una sola vez

  return (
    <div>
      <h2>Count: {count}</h2>
      {isComplete && <p>Timer completed!</p>}
    </div>
  );
}

export default TimerComponent;`,
          },
          {
            filePath: 'rxjs/5-react-search-autocomplete.tsx',
            content: `import { useEffect, useState, useRef } from 'react';
import { fromEvent, of } from 'rxjs';
import { 
  debounceTime, 
  distinctUntilChanged, 
  switchMap, 
  map,
  catchError 
} from 'rxjs/operators';

// EJEMPLO 5: Autocomplete con Debouncing
// Caso de uso real: búsqueda que espera a que el usuario pare de escribir

interface SearchResult {
  id: number;
  title: string;
}

function SearchAutocomplete() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    // Convertimos eventos de input en Observable
    const search$ = fromEvent<InputEvent>(inputRef.current, 'input')
      .pipe(
        map(event => (event.target as HTMLInputElement).value), // Extraemos el valor
        debounceTime(300),        // Esperamos 300ms después del último keystroke
        distinctUntilChanged(),   // Solo si el valor cambió
        switchMap(query => {      // Cancelamos request anterior si hay uno nuevo
          if (!query) {
            setLoading(false);
            return of([]);
          }
          
          setLoading(true);
          
          // Simulamos API call (reemplaza con tu endpoint real)
          return fetch(\`/api/search?q=\${encodeURIComponent(query)}\`)
            .then(res => res.json())
            .catch(err => {
              console.error('Search error:', err);
              return [];
            })
            .finally(() => setLoading(false));
        }),
        catchError(error => {
          console.error('Stream error:', error);
          return of([]);
        })
      );

    const subscription = search$.subscribe(results => {
      setResults(results);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Search..." 
      />
      {loading && <p>Loading...</p>}
      <ul>
        {results.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

// ¿Por qué RxJS aquí?
// - debounceTime: Evita requests innecesarios
// - distinctUntilChanged: No hace request si el valor es el mismo
// - switchMap: Cancela requests anteriores (evita race conditions)
// Hacer esto manualmente con useState/useEffect sería mucho más código`,
          },
          {
            filePath: 'rxjs/6-subjects.ts',
            content: `import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

// EJEMPLO 6: Subjects - Observable que también es Observer
// Útiles para multicasting (múltiples suscriptores al mismo stream)

// 1. Subject: Básico, sin valor inicial, no replay
const subject = new Subject<number>();

subject.subscribe(x => console.log('Observer A:', x));
subject.next(1); // Observer A: 1

subject.subscribe(x => console.log('Observer B:', x));
subject.next(2); // Observer A: 2, Observer B: 2

// 2. BehaviorSubject: Requiere valor inicial, emite último valor a nuevos suscriptores
const behavior = new BehaviorSubject<number>(0); // Valor inicial

behavior.subscribe(x => console.log('Behavior A:', x)); // Behavior A: 0
behavior.next(1); // Behavior A: 1
behavior.next(2); // Behavior A: 2

behavior.subscribe(x => console.log('Behavior B:', x)); // Behavior B: 2 (último valor)
behavior.next(3); // Behavior A: 3, Behavior B: 3

// 3. ReplaySubject: Guarda N valores y los re-emite a nuevos suscriptores
const replay = new ReplaySubject<number>(2); // Guarda últimos 2 valores

replay.next(1);
replay.next(2);
replay.next(3);

replay.subscribe(x => console.log('Replay A:', x)); 
// Replay A: 2, Replay A: 3 (últimos 2)

// 4. AsyncSubject: Solo emite el último valor cuando se completa
const async = new AsyncSubject<number>();

async.subscribe(x => console.log('Async:', x));
async.next(1);
async.next(2);
async.next(3);
// (no se emite nada aún)

async.complete(); // Async: 3 (solo el último)`,
          },
          {
            filePath: 'rxjs/7-combination-operators.ts',
            content: `import { of, interval, combineLatest, merge, concat, forkJoin, zip } from 'rxjs';
import { map, take } from 'rxjs/operators';

// EJEMPLO 7: Operadores de Combinación
// Combinan múltiples Observables en uno solo

// combineLatest: Emite cuando cualquiera emite, con últimos valores de todos
const age$ = of(25, 26, 27);
const name$ = of('Alice', 'Bob');

combineLatest([age$, name$])
  .pipe(map(([age, name]) => ({ age, name })))
  .subscribe(x => console.log('combineLatest:', x));
// Output: 
// combineLatest: { age: 27, name: 'Alice' }
// combineLatest: { age: 27, name: 'Bob' }

// merge: Combina múltiples Observables en uno (mezcla emisiones)
const obs1$ = interval(1000).pipe(take(3), map(x => \`A\${x}\`));
const obs2$ = interval(1500).pipe(take(2), map(x => \`B\${x}\`));

merge(obs1$, obs2$).subscribe(x => console.log('merge:', x));
// Output (intercalado): merge: A0, merge: B0, merge: A1, merge: A2, merge: B1

// concat: Suscribe al siguiente solo cuando el anterior completa
concat(
  of(1, 2, 3),
  of(4, 5, 6)
).subscribe(x => console.log('concat:', x));
// Output: concat: 1, 2, 3, 4, 5, 6 (en orden)

// forkJoin: Espera a que todos completen, emite último valor de cada uno
// Similar a Promise.all()
forkJoin([
  of(1, 2, 3),
  of('a', 'b', 'c'),
  of(true, false)
]).subscribe(x => console.log('forkJoin:', x));
// Output: forkJoin: [3, 'c', false]

// zip: Combina valores por índice (como un zipper)
zip(
  of(1, 2, 3),
  of('a', 'b', 'c', 'd')
).subscribe(x => console.log('zip:', x));
// Output: zip: [1, 'a'], [2, 'b'], [3, 'c']
// (d no se emite porque no hay valor correspondiente en el primer Observable)`,
          },
          {
            filePath: 'rxjs/8-error-handling.ts',
            content: `import { of, throwError, interval } from 'rxjs';
import { map, catchError, retry, retryWhen, delay, take } from 'rxjs/operators';

// EJEMPLO 8: Manejo de Errores
// RxJS provee operadores poderosos para manejar fallos

// catchError: Captura error y retorna un Observable alternativo
const obs$ = of(1, 2, 3, 4, 5).pipe(
  map(x => {
    if (x === 3) throw new Error('Three is unlucky!');
    return x * 2;
  }),
  catchError(err => {
    console.error('Caught:', err.message);
    return of(999); // Valor de fallback
  })
);

obs$.subscribe(x => console.log('catchError:', x));
// Output: catchError: 2, 4, Caught: Three is unlucky!, catchError: 999

// retry: Re-intenta la suscripción N veces al fallar
let attempt = 0;
const unreliable$ = of(1, 2, 3).pipe(
  map(x => {
    if (x === 2 && attempt++ < 2) {
      throw new Error('Failed!');
    }
    return x;
  }),
  retry(3) // Re-intenta hasta 3 veces
);

unreliable$.subscribe({
  next: x => console.log('retry:', x),
  error: err => console.error('Final error:', err)
});

// retryWhen: Retry con lógica personalizada (ej: exponential backoff)
const apiCall$ = throwError(() => new Error('API failed')).pipe(
  retryWhen(errors => 
    errors.pipe(
      delay(1000),  // Espera 1s entre reintentos
      take(3)       // Máximo 3 reintentos
    )
  ),
  catchError(err => {
    console.error('All retries failed:', err);
    return of({ error: true, message: err.message });
  })
);

apiCall$.subscribe(x => console.log('retryWhen:', x));`,
          },
          {
            filePath: 'rxjs/9-react-websocket.tsx',
            content: `import { useEffect, useState } from 'react';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { retry, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

// EJEMPLO 9: WebSocket con Auto-Reconnect
// Caso de uso real: Chat, notificaciones en tiempo real

interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: number;
}

function WebSocketChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [connected, setConnected] = useState(false);
  const [ws$, setWs$] = useState<WebSocketSubject<Message> | null>(null);

  useEffect(() => {
    // Creamos WebSocket Observable con auto-reconnect
    const socket$ = webSocket<Message>({
      url: 'ws://localhost:8080/chat',
      openObserver: {
        next: () => {
          console.log('WebSocket connected');
          setConnected(true);
        }
      },
      closeObserver: {
        next: () => {
          console.log('WebSocket disconnected');
          setConnected(false);
        }
      }
    });

    // Suscribimos con retry automático
    const subscription = socket$
      .pipe(
        retry({ count: 5, delay: 2000 }), // Reintentar 5 veces, esperar 2s
        catchError(err => {
          console.error('WebSocket error:', err);
          setConnected(false);
          return EMPTY; // Termina el stream
        })
      )
      .subscribe({
        next: (message) => {
          setMessages(prev => [...prev, message]);
        },
        error: (err) => {
          console.error('Stream error:', err);
        }
      });

    setWs$(socket$);

    return () => {
      subscription.unsubscribe();
      socket$.complete();
    };
  }, []);

  const sendMessage = (text: string) => {
    if (ws$ && connected) {
      ws$.next({
        id: Date.now().toString(),
        user: 'Me',
        text,
        timestamp: Date.now()
      });
    }
  };

  return (
    <div>
      <div>Status: {connected ? '🟢 Connected' : '🔴 Disconnected'}</div>
      <div>
        {messages.map(msg => (
          <div key={msg.id}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <button onClick={() => sendMessage('Hello!')}>
        Send Message
      </button>
    </div>
  );
}

// Ventajas de RxJS aquí:
// - Auto-reconnect con retry
// - Backpressure handling
// - Fácil testing con TestScheduler
// - Composición con otros streams (ej: typing indicators)`,
          },
          {
            filePath: 'rxjs/10-custom-hook.tsx',
            content: `import { useEffect, useState, useRef } from 'react';
import { Observable, Subscription } from 'rxjs';

// EJEMPLO 10: Custom Hook Reutilizable
// Patrón recomendado para encapsular lógica RxJS

/**
 * Hook para suscribirse a un Observable y manejar cleanup automático
 * 
 * @param observable$ - Observable al que suscribirse
 * @param initialValue - Valor inicial del estado
 * @returns [value, error] - Estado actual y error si ocurrió
 */
function useObservable<T>(
  observable$: Observable<T>,
  initialValue: T
): [T, Error | null] {
  const [value, setValue] = useState<T>(initialValue);
  const [error, setError] = useState<Error | null>(null);
  const subscriptionRef = useRef<Subscription | null>(null);

  useEffect(() => {
    // Cleanup de suscripción previa si existe
    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe();
    }

    // Nueva suscripción
    subscriptionRef.current = observable$.subscribe({
      next: (val) => {
        setValue(val);
        setError(null);
      },
      error: (err) => {
        console.error('Observable error:', err);
        setError(err);
      }
    });

    // Cleanup al desmontar
    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
      }
    };
  }, [observable$]); // Re-suscribe si el Observable cambia

  return [value, error];
}

// Uso del hook
function CounterComponent() {
  const counter$ = interval(1000).pipe(
    take(10),
    map(x => x + 1)
  );

  const [count, error] = useObservable(counter$, 0);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Count: {count}</div>;
}

export default CounterComponent;

// Este patrón permite:
// - Reutilizar lógica de suscripción
// - Manejo de errores consistente
// - Cleanup automático
// - TypeScript type-safe`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

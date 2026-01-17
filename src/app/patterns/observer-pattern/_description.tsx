'use client';

export function ObserverPatternDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Observer Pattern</strong> define una dependencia uno-a-muchos entre objetos, donde cuando un objeto cambia de estado, todos sus dependientes son notificados.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Conceptos clave
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Subject:</strong> Objeto que mantiene lista de observers</li>
          <li><strong>Observer:</strong> Objeto que se suscribe a cambios</li>
          <li><strong>Notificación:</strong> Cuando el subject cambia, notifica a todos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo en React
        </h2>
        <div className="bg-gray-950 rounded-xl border border-gray-800 shadow-lg overflow-hidden">
          <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-xs font-mono ml-2">EventEmitter.jsx</span>
          </div>
          <div className="p-6 overflow-x-auto">
            <pre className="text-sm font-mono leading-relaxed"><code className="text-gray-100">
{`// 1. Crear un EventEmitter (Subject)
class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    
    // Retornar función para desuscribirse
    return () => this.unsubscribe(event, callback);
  }

  unsubscribe(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event]
        .filter(cb => cb !== callback);
    }
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => {
        callback(data);
      });
    }
  }
}

// 2. Usar en componente React
import { useEffect, useState } from 'react';

const eventEmitter = new EventEmitter();

function UserNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Suscribirse al evento
    const unsubscribe = eventEmitter.subscribe(
      'notification',
      (message) => {
        setNotifications(prev => [...prev, message]);
      }
    );

    // Cleanup: desuscribirse al desmontar
    return unsubscribe;
  }, []);

  return (
    <div>
      {notifications.map((msg, i) => (
        <div key={i}>{msg}</div>
      ))}
    </div>
  );
}

// 3. Emitir eventos desde otro componente
function SendNotification() {
  const handleClick = () => {
    eventEmitter.emit('notification', 'Nueva notificación!');
  };

  return <button onClick={handleClick}>Enviar</button>;
}`}
            </code></pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Custom Hook para Observer Pattern
        </h2>
        <div className="bg-gray-950 rounded-xl p-6 overflow-x-auto border border-gray-800 shadow-lg">
          <pre className="text-sm font-mono leading-relaxed"><code className="text-gray-100">
{`// useEventEmitter.js
import { useEffect, useState } from 'react';

export function useEventSubscription(
  emitter, 
  eventName, 
  initialValue = []
) {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    const handleEvent = (newData) => {
      setData(prev => [...prev, newData]);
    };

    const unsubscribe = emitter.subscribe(
      eventName, 
      handleEvent
    );

    return () => unsubscribe();
  }, [emitter, eventName]);

  return data;
}

// Uso del hook
function MyComponent() {
  const messages = useEventSubscription(
    eventEmitter, 
    'message'
  );

  return (
    <ul>
      {messages.map((msg, i) => (
        <li key={i}>{msg}</li>
      ))}
    </ul>
  );
}`}
          </code></pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Event emitters (EventEmitter en Node.js)</li>
          <li>Estado reactivo (MobX, Signals)</li>
          <li>WebSocket connections</li>
          <li>Real-time updates</li>
          <li>Chat applications</li>
          <li>Notificaciones push</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          💡 <strong>En React:</strong> useState y useEffect implementan variaciones del Observer pattern. 
          Context API también usa este patrón para notificar a componentes cuando el valor cambia.
        </p>
      </div>
    </div>
  );
}

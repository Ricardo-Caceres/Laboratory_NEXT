'use client';

import { useState, useEffect, useRef } from 'react';

type DemoType = 'interval' | 'search' | 'mouse' | 'websocket';

export default function RxJSExample() {
  const [activeDemo, setActiveDemo] = useState<DemoType>('interval');

  const demos = {
    interval: <IntervalDemo />,
    search: <SearchDemo />,
    mouse: <MouseTrackingDemo />,
    websocket: <WebSocketSimulation />,
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">🚀 Demos Interactivos de RxJS</h2>
      
      {/* Selector de Demos */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(demos).map((demo) => (
          <button
            key={demo}
            onClick={() => setActiveDemo(demo as DemoType)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              activeDemo === demo
                ? 'bg-[var(--primary)] text-white'
                : 'bg-[var(--panel)] hover:bg-[var(--border)] border border-[var(--border)]'
            }`}
          >
            {demo === 'interval' && '⏱️ Interval'}
            {demo === 'search' && '🔍 Search Debounce'}
            {demo === 'mouse' && '🖱️ Mouse Throttle'}
            {demo === 'websocket' && '🌐 WebSocket'}
          </button>
        ))}
      </div>

      {/* Demo Activo */}
      <div className="bg-[var(--panel)] border border-[var(--border)] rounded-lg p-6">
        {demos[activeDemo]}
      </div>
    </div>
  );
}

// Demo 1: Interval con Operadores
function IntervalDemo() {
  const [values, setValues] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    // Simula: interval(500ms) → filter(even) → map(x * 2) → take(10)
    const interval = setInterval(() => {
      setCurrentValue(prev => {
        const newValue = prev + 1;
        if (newValue % 2 === 0) {
          setValues(prevValues => [...prevValues, newValue * 2]);
        }
        if (newValue >= 10) {
          setIsRunning(false);
        }
        return newValue;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isRunning]);

  const startObservable = () => {
    setValues([]);
    setCurrentValue(0);
    setIsRunning(true);
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-3">Observable con Operadores</h3>
      <div className="mb-4 p-3 bg-black/10 dark:bg-white/5 rounded">
        <code className="text-sm font-mono">
          interval(500ms) → filter(even) → map(x * 2) → take(10)
        </code>
      </div>
      <p className="text-sm opacity-70 mb-4">
        Emite valores cada 500ms, filtra solo pares, los duplica, y toma solo 10 valores.
      </p>

      <button
        onClick={startObservable}
        disabled={isRunning}
        className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50 mb-4"
      >
        {isRunning ? '⏳ Running...' : '▶️ Start'}
      </button>

      <div className="space-y-2">
        <h4 className="font-semibold text-sm">Valores Emitidos:</h4>
        <div className="flex flex-wrap gap-2">
          {values.map((value, index) => (
            <div
              key={index}
              className="px-3 py-1 rounded bg-[var(--primary)] text-white font-mono text-sm animate-fade-in"
            >
              {value}
            </div>
          ))}
          {!isRunning && values.length >= 5 && (
            <div className="px-3 py-1 rounded bg-green-500 text-white font-semibold text-sm">
              ✓ Complete!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Demo 2: Search con Debouncing
function SearchDemo() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [searches, setSearches] = useState<string[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    // Simula debounceTime(500)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (query) {
        setDebouncedQuery(query);
        setSearches(prev => [...prev, query]);
      }
    }, 500);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [query]);

  return (
    <div>
      <h3 className="text-xl font-bold mb-3">Search con Debouncing</h3>
      <div className="mb-4 p-3 bg-black/10 dark:bg-white/5 rounded">
        <code className="text-sm font-mono">
          fromEvent(input) → debounceTime(500ms) → distinctUntilChanged()
        </code>
      </div>
      <p className="text-sm opacity-70 mb-4">
        Espera 500ms después del último keystroke antes de hacer la búsqueda. Evita requests innecesarios.
      </p>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Escribe para buscar..."
        className="w-full px-4 py-2 rounded border border-[var(--border)] bg-[var(--background)] mb-4"
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm font-semibold mb-1">Input actual:</p>
          <p className="text-sm font-mono bg-black/10 dark:bg-white/5 px-3 py-2 rounded">
            {query || '(vacío)'}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold mb-1">Última búsqueda:</p>
          <p className="text-sm font-mono bg-black/10 dark:bg-white/5 px-3 py-2 rounded">
            {debouncedQuery || '(ninguna)'}
          </p>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold mb-2">Búsquedas realizadas ({searches.length}):</p>
        <div className="flex flex-wrap gap-2">
          {searches.map((search, idx) => (
            <span
              key={idx}
              className="px-2 py-1 rounded text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
            >
              {search}
            </span>
          ))}
          {searches.length === 0 && (
            <p className="text-sm opacity-50 italic">Sin búsquedas aún</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Demo 3: Mouse Throttling
function MouseTrackingDemo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [throttledPosition, setThrottledPosition] = useState({ x: 0, y: 0 });
  const [moveCount, setMoveCount] = useState(0);
  const [throttledCount, setThrottledCount] = useState(0);
  const lastUpdateRef = useRef(0);
  const areaRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!areaRef.current) return;
    
    const rect = areaRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    
    setPosition({ x, y });
    setMoveCount(prev => prev + 1);

    // Simula throttleTime(100ms)
    const now = Date.now();
    if (now - lastUpdateRef.current >= 100) {
      setThrottledPosition({ x, y });
      setThrottledCount(prev => prev + 1);
      lastUpdateRef.current = now;
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-3">Mouse Tracking con Throttle</h3>
      <div className="mb-4 p-3 bg-black/10 dark:bg-white/5 rounded">
        <code className="text-sm font-mono">
          fromEvent(mousemove) → throttleTime(100ms) → map(event.position)
        </code>
      </div>
      <p className="text-sm opacity-70 mb-4">
        Throttle emite máximo cada 100ms. Útil para performance con eventos de alta frecuencia.
      </p>

      <div
        ref={areaRef}
        onMouseMove={handleMouseMove}
        className="relative w-full h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border-2 border-[var(--border)] mb-4 cursor-crosshair"
      >
        <div className="absolute top-2 left-2 text-xs bg-black/50 text-white px-2 py-1 rounded">
          Mueve el mouse aquí
        </div>
        
        {/* Indicador throttled */}
        <div
          className="absolute w-4 h-4 bg-green-500 rounded-full transition-all duration-100"
          style={{
            left: throttledPosition.x - 8,
            top: throttledPosition.y - 8,
          }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-black/10 dark:bg-white/5 rounded">
          <p className="text-xs font-semibold mb-1">Eventos totales:</p>
          <p className="text-2xl font-bold text-red-500">{moveCount}</p>
          <p className="text-xs opacity-70">Sin throttle</p>
        </div>
        <div className="p-3 bg-black/10 dark:bg-white/5 rounded">
          <p className="text-xs font-semibold mb-1">Eventos procesados:</p>
          <p className="text-2xl font-bold text-green-500">{throttledCount}</p>
          <p className="text-xs opacity-70">Con throttle (100ms)</p>
        </div>
      </div>
      
      <p className="text-xs text-center mt-3 opacity-70">
        Reducción: {moveCount > 0 ? Math.round((1 - throttledCount / moveCount) * 100) : 0}%
      </p>
    </div>
  );
}

// Demo 4: WebSocket Simulation
function WebSocketSimulation() {
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<Array<{ id: number; text: string; time: string }>>([]);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const connect = () => {
    setConnected(true);
    setMessages([{ id: 0, text: '✓ Connected to server', time: new Date().toLocaleTimeString() }]);

    // Simula mensajes entrantes cada 2-4 segundos
    intervalRef.current = setInterval(() => {
      const randomMessages = [
        'New user joined',
        'Message received',
        'File uploaded',
        'Status updated',
        'Notification sent',
      ];
      const msg = randomMessages[Math.floor(Math.random() * randomMessages.length)];
      
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          text: msg,
          time: new Date().toLocaleTimeString(),
        },
      ]);
    }, 2000 + Math.random() * 2000);
  };

  const disconnect = () => {
    setConnected(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setMessages(prev => [
      ...prev,
      { id: Date.now(), text: '✗ Disconnected', time: new Date().toLocaleTimeString() },
    ]);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h3 className="text-xl font-bold mb-3">WebSocket con Auto-Reconnect</h3>
      <div className="mb-4 p-3 bg-black/10 dark:bg-white/5 rounded">
        <code className="text-sm font-mono">
          webSocket(url) → retry(&#123;count: 5, delay: 2000&#125;) → catchError()
        </code>
      </div>
      <p className="text-sm opacity-70 mb-4">
        RxJS maneja reconexión automática y backpressure para WebSockets de forma elegante.
      </p>

      <div className="flex gap-2 mb-4">
        <button
          onClick={connect}
          disabled={connected}
          className="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          🟢 Connect
        </button>
        <button
          onClick={disconnect}
          disabled={!connected}
          className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          🔴 Disconnect
        </button>
        <div className="flex-1 flex items-center justify-end">
          <span className={`px-3 py-1 rounded text-sm font-semibold ${connected ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100' : 'bg-gray-200 dark:bg-gray-700'}`}>
            {connected ? '● Connected' : '○ Disconnected'}
          </span>
        </div>
      </div>

      <div className="bg-black text-green-400 font-mono text-xs p-4 rounded h-64 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-1">
            <span className="opacity-50">[{msg.time}]</span> {msg.text}
          </div>
        ))}
        {messages.length === 0 && (
          <div className="opacity-50">Waiting for connection...</div>
        )}
      </div>
    </div>
  );
}

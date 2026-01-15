import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example_demo'));

export default function SingletonPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Singleton Pattern"
        description="🔒 **Singleton Pattern** - UNA única instancia global garantizada

El Singleton Pattern es un patrón creacional GoF que restringe la instanciación de una clase a UN solo objeto. Garantiza que solo exista una instancia y proporciona un punto de acceso global a ella.

**🎯 ¿Cuándo usarlo?**
- **Config managers**: Una configuración global para toda la app
- **Logger**: Un solo logger centralizado
- **Database connections**: Un pool de conexiones compartido
- **Cache**: Una cache global
- **State managers**: Redux store, Zustand store
- **WebSocket connections**: Una conexión compartida

**🔑 Conceptos Clave:**
- **Private constructor**: Previene <code>new Singleton()</code>
- **Static instance**: Variable estática privada
- **getInstance()**: Método público que retorna la única instancia
- **Lazy initialization**: Instancia se crea solo cuando se necesita
- **Thread-safe**: En JS single-threaded no es problema

**✅ Ventajas:**
- 🎯 **Guaranteed single instance**: Solo una instancia existe
- 🌍 **Global access**: Accesible desde cualquier parte
- 💾 **Resource saving**: No se crean múltiples instancias pesadas
- 🔒 **Controlled access**: Control centralizado del recurso
- 💤 **Lazy loading**: Se crea solo cuando se necesita

**📐 Estructura:**
\`\`\`typescript
class Singleton {
  private static instance: Singleton;
  
  // Private constructor prevents new Singleton()
  private constructor() {
    // Initialization
  }
  
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  
  public someMethod() {
    // Business logic
  }
}

// Usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true
\`\`\`

**💡 Casos de Uso Reales:**
- **Logger**: Winston, Pino con instancia única
- **Redux Store**: <code>configureStore()</code> llamado una vez
- **Configuration**: <code>dotenv.config()</code>
- **Database**: Mongoose connection singleton
- **API Client**: Axios instance configurada
- **EventBus**: Global event dispatcher

**⚠️ Críticas del Singleton:**
- 🚫 **Global state**: Puede causar coupling
- 🧪 **Testing**: Dificulta testing (estado compartido)
- 🔄 **Concurrency**: Puede causar problemas en multi-thread (no en JS)
- 🎯 **Single Responsibility**: Viola SRP (crea + controla instancia)

**Alternativas modernas:**
```typescript
// ❌ Singleton class
class Logger {
  private static instance: Logger;
  private constructor() {}
  static getInstance() { /* ... */ }
}

// ✅ Module singleton (simpler)
const logger = {
  log(msg: string) { console.log(msg); }
};
export default logger;

// ✅ ES6 Module (auto-singleton)
// logger.ts
export const logger = createLogger();
// Imported instance is same everywhere
```

**En React/JavaScript moderno:**
- **ES6 Modules** son singletons por defecto
- **Context API** para compartir instancias
- **Dependency Injection** en vez de global singleton

**🆚 Singleton vs Global Variable:**
- **Singleton**: Lazy loading, control de creación, methods
- **Global**: Inmediato, sin control, solo data

**Ejemplo del código:**
<code>ConfigManager</code> y <code>Logger</code> singletons que garantizan una sola instancia para toda la app."
        codeContent={[
          {
            filePath: 'patterns/singleton-basic.ts',
            content: `// Classic Singleton Pattern
class ConfigManager {
  private static instance: ConfigManager;
  private config: Record<string, string> = {};
  
  // Private constructor prevents: new ConfigManager()
  private constructor() {
    // Load config
    this.config = {
      apiUrl: process.env.API_URL || 'https://api.example.com',
      appName: 'My App',
      version: '1.0.0'
    };
  }
  
  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }
  
  public get(key: string): string {
    return this.config[key] || '';
  }
  
  public set(key: string, value: string): void {
    this.config[key] = value;
  }
  
  public getAll(): Record<string, string> {
    return { ...this.config };
  }
}

// Usage
const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();

console.log(config1 === config2); // true - same instance

config1.set('theme', 'dark');
console.log(config2.get('theme')); // 'dark' - shared state`,
          },
          {
            filePath: 'patterns/singleton-logger.ts',
            content: `// Singleton Logger
class Logger {
  private static instance: Logger;
  private logs: string[] = [];
  
  private constructor() {
    console.log('Logger initialized');
  }
  
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
  
  public log(level: 'info' | 'warn' | 'error', message: string): void {
    const timestamp = new Date().toISOString();
    const logEntry = \`[\${timestamp}] [\${level.toUpperCase()}] \${message}\`;
    this.logs.push(logEntry);
    console.log(logEntry);
  }
  
  public info(message: string) {
    this.log('info', message);
  }
  
  public warn(message: string) {
    this.log('warn', message);
  }
  
  public error(message: string) {
    this.log('error', message);
  }
  
  public getLogs(): string[] {
    return [...this.logs];
  }
  
  public clear(): void {
    this.logs = [];
  }
}

// Usage across application
// File 1
const logger = Logger.getInstance();
logger.info('App started');

// File 2
const sameLogger = Logger.getInstance();
sameLogger.error('Something failed');

console.log(logger.getLogs()); // Contains both logs`,
          },
          {
            filePath: 'patterns/singleton-modern-alternative.ts',
            content: `// Modern Alternative: ES6 Module (Auto-Singleton)
// config.ts
interface Config {
  apiUrl: string;
  appName: string;
  get(key: string): string;
  set(key: string, value: string): void;
}

class ConfigService implements Config {
  private data: Record<string, string> = {
    apiUrl: process.env.API_URL || '',
    appName: 'My App'
  };
  
  get(key: string): string {
    return this.data[key] || '';
  }
  
  set(key: string, value: string): void {
    this.data[key] = value;
  }
}

// Export instance (singleton by default in ES6 modules)
export const config = new ConfigService();

// Usage in any file
import { config } from './config';
config.set('theme', 'dark');

// ✅ Simpler than Singleton pattern
// ✅ Same instance across all imports
// ✅ No getInstance() boilerplate
// ✅ Better for tree-shaking

// Or even simpler: Plain object
export const appConfig = {
  apiUrl: process.env.API_URL || '',
  appName: 'My App',
  get(key: string) { return this[key]; },
  set(key: string, val: string) { this[key] = val; }
};`,
          },
          {
            filePath: 'patterns/singleton-database.ts',
            content: `// Singleton for Database Connection
import { MongoClient, Db } from 'mongodb';

class Database {
  private static instance: Database;
  private db: Db | null = null;
  private client: MongoClient | null = null;
  
  private constructor() {}
  
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
  
  public async connect(uri: string): Promise<Db> {
    if (this.db) {
      return this.db; // Return existing connection
    }
    
    try {
      this.client = new MongoClient(uri);
      await this.client.connect();
      this.db = this.client.db();
      console.log('Database connected');
      return this.db;
    } catch (error) {
      console.error('Database connection failed:', error);
      throw error;
    }
  }
  
  public getDb(): Db {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first.');
    }
    return this.db;
  }
  
  public async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.db = null;
      this.client = null;
      console.log('Database disconnected');
    }
  }
}

// Usage
const db1 = Database.getInstance();
await db1.connect('mongodb://localhost:27017/mydb');

// Somewhere else in code
const db2 = Database.getInstance();
const database = db2.getDb(); // Same connection
console.log(db1 === db2); // true`,
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
  title: 'Singleton Pattern | Design Patterns',
  description: '🔒 El patrón clásico de GoF para garantizar UNA única instancia global - Perfecto para config managers, loggers, caches y connection pools en JavaScript/TypeScript',
};

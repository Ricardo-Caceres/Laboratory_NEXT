'use client';

export function SingletonPatternDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Singleton Pattern</strong> garantiza que una clase tenga solo una instancia y proporciona un punto de acceso global a ella.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es el Singleton?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-4">
          El patrón Singleton asegura que no importa cuántas veces intentes crear una instancia, 
          siempre obtendrás la misma. Es útil para gestionar estado global, configuraciones, o recursos compartidos.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo Básico en JavaScript
        </h2>
        <div className="bg-gray-950 rounded-xl p-6 overflow-x-auto border border-gray-800 shadow-lg">
          <pre className="text-sm font-mono leading-relaxed"><code className="text-gray-100">
{`// Singleton básico con ES6
class ConfigManager {
  constructor() {
    if (ConfigManager.instance) {
      return ConfigManager.instance;
    }
    
    this.config = {};
    ConfigManager.instance = this;
  }

  set(key, value) {
    this.config[key] = value;
  }

  get(key) {
    return this.config[key];
  }

  getAll() {
    return { ...this.config };
  }
}

// Uso
const config1 = new ConfigManager();
config1.set('apiUrl', 'https://api.example.com');

const config2 = new ConfigManager();
console.log(config2.get('apiUrl')); // 'https://api.example.com'

console.log(config1 === config2); // true (misma instancia!)`}
          </code></pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Singleton con Método estático
        </h2>
        <div className="bg-gray-950 rounded-xl p-6 overflow-x-auto border border-gray-800 shadow-lg">
          <pre className="text-sm font-mono leading-relaxed"><code className="text-gray-100">
{`class Logger {
  static instance = null;

  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    
    this.logs = [];
    Logger.instance = this;
  }

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ timestamp, message });
    console.log(\`[\${timestamp}] \${message}\`);
  }

  getLogs() {
    return [...this.logs];
  }

  clearLogs() {
    this.logs = [];
  }
}

// Uso recomendado con getInstance()
const logger = Logger.getInstance();
logger.log('Application started');

// Desde otro módulo
const sameLogger = Logger.getInstance();
sameLogger.log('User logged in');

console.log(logger === sameLogger); // true`}
          </code></pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Singleton en React
        </h2>
        <div className="bg-gray-950 rounded-xl p-6 overflow-x-auto border border-gray-800 shadow-lg">
          <pre className="text-sm font-mono leading-relaxed"><code className="text-gray-100">
{`// apiClient.js - Singleton para API client
class ApiClient {
  static instance = null;

  constructor() {
    if (ApiClient.instance) {
      return ApiClient.instance;
    }

    this.baseURL = process.env.NEXT_PUBLIC_API_URL;
    this.headers = {
      'Content-Type': 'application/json',
    };

    ApiClient.instance = this;
  }

  setAuthToken(token) {
    this.headers['Authorization'] = \`Bearer \${token}\`;
  }

  async get(endpoint) {
    const response = await fetch(\`\${this.baseURL}\${endpoint}\`, {
      method: 'GET',
      headers: this.headers,
    });
    return response.json();
  }

  async post(endpoint, data) {
    const response = await fetch(\`\${this.baseURL}\${endpoint}\`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

// Exportar instancia singleton
export const apiClient = new ApiClient();

// Uso en componentes React
import { apiClient } from '@/lib/apiClient';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    apiClient.get('/user/profile')
      .then(setUser);
  }, []);

  return <div>{user?.name}</div>;
}

// En otro componente, misma instancia
function LoginButton() {
  const handleLogin = async (token) => {
    apiClient.setAuthToken(token);
    const user = await apiClient.get('/auth/me');
    // ...
  };

  return <button onClick={() => handleLogin('token123')}>Login</button>;
}`}
          </code></pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Configuración global:</strong> Settings de la app</li>
          <li><strong>Cache Manager:</strong> Sistema de caché centralizado</li>
          <li><strong>Logger:</strong> Sistema de logging único</li>
          <li><strong>API Client:</strong> Cliente HTTP compartido</li>
          <li><strong>Database Connection:</strong> Pool de conexiones</li>
          <li><strong>Event Bus:</strong> Sistema de eventos global</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ⚠️ Consideraciones
        </h2>
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 space-y-2">
          <p className="text-[var(--foreground)] opacity-90">
            <strong>Ventajas:</strong>
          </p>
          <ul className="list-disc pl-6 text-[var(--foreground)] opacity-90">
            <li>Control sobre la creación de instancias</li>
            <li>Acceso global controlado</li>
            <li>Ahorro de memoria (una sola instancia)</li>
          </ul>
          
          <p className="text-[var(--foreground)] opacity-90 mt-4">
            <strong>Desventajas:</strong>
          </p>
          <ul className="list-disc pl-6 text-[var(--foreground)] opacity-90">
            <li>Puede dificultar testing (estado global)</li>
            <li>Viola el principio de responsabilidad única</li>
            <li>Puede crear acoplamiento fuerte</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          💡 <strong>En React:</strong> Considera usar Context API o librerías de estado global (Zustand, Redux) 
          en lugar de Singletons para estado compartido, ya que son más "React-friendly" y testables.
        </p>
      </div>
    </div>
  );
}

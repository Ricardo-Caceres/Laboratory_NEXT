import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function DecoratorPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Decorator Pattern"
        description="🎨 **Decorator Pattern** - Agrega funcionalidad dinámicamente sin herencia

El Decorator Pattern es un patrón estructural GoF que permite agregar responsabilidades a objetos de forma dinámica envolviendo objetos en otros objetos decoradores. Proporciona una alternativa flexible a la herencia para extender funcionalidad.

**🎯 ¿Cuándo usarlo?**
- Agregar **responsabilidades** a objetos sin afectar otros
- Extender **funcionalidad dinámicamente** en runtime
- Evitar **explosión de subclases** con herencia
- Implementar **middleware** y **plugins**
- Agregar **cross-cutting concerns** (logging, caching, validación)

**🔑 Conceptos Clave:**
- **Component**: Interfaz común para objetos y decoradores
- **ConcreteComponent**: Objeto original que será decorado
- **Decorator**: Clase base que envuelve Component
- **ConcreteDecorator**: Implementación que agrega funcionalidad
- **Wrapping**: Decorador contiene referencia al Component

**✅ Ventajas:**
- 🔄 **Composition over Inheritance**: Más flexible que subclasificar
- 🔓 **Open/Closed**: Agrega funcionalidad sin modificar código existente
- 🧩 **Single Responsibility**: Cada decorador una responsabilidad
- 🎭 **Runtime Flexibility**: Combina decoradores dinámicamente
- ♻️ **Reusable**: Decoradores se pueden combinar de múltiples formas

**📐 Estructura:**
\`\`\`typescript
interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  operation() {
    return 'Base';
  }
}

class Decorator implements Component {
  constructor(protected component: Component) {}
  
  operation() {
    return this.component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  operation() {
    return \`A(\${super.operation()})\`;
  }
}

class ConcreteDecoratorB extends Decorator {
  operation() {
    return \`B(\${super.operation()})\`;
  }
}

// Usage: Stack decorators
const decorated = new ConcreteDecoratorA(
  new ConcreteDecoratorB(
    new ConcreteComponent()
  )
);
decorated.operation(); // 'A(B(Base))'
\`\`\`

**💡 Casos de Uso Reales:**
- **React HOCs**: withAuth, withLogging (decoradores de componentes)
- **Node.js Streams**: writable.pipe(transform).pipe(writable)
- **Express Middleware**: app.use(logger, auth, cors)
- **Java I/O**: new BufferedReader(new FileReader(file))
- **Logging Decorators**: @log en Python/TypeScript decorators
- **Caching**: Wrap fetch con cache decorator

**🆚 Decorator vs Proxy:**
- **Decorator**: Agrega funcionalidad nueva
- **Proxy**: Controla acceso, no cambia comportamiento esencial

**⚠️ Consideraciones:**
- Muchos decoradores pueden crear complejidad
- Debugging puede ser más difícil con múltiples capas
- Orden de decoradores importa

**Ejemplo del código:**
Sistema de notificaciones donde decoramos un notificador base con diferentes canales (Email, SMS, Slack) que se pueden combinar."
        codeContent={[
          {
            filePath: 'patterns/decorator-notifications.ts',
            content: `// Component Interface
interface Notifier {
  send(message: string): void;
}

// Concrete Component (Base)
class BasicNotifier implements Notifier {
  send(message: string) {
    console.log(\`[Basic] \${message}\`);
  }
}

// Base Decorator
abstract class NotifierDecorator implements Notifier {
  constructor(protected notifier: Notifier) {}
  
  send(message: string) {
    this.notifier.send(message);
  }
}

// Concrete Decorators
class EmailDecorator extends NotifierDecorator {
  send(message: string) {
    super.send(message);
    this.sendEmail(message);
  }
  
  private sendEmail(message: string) {
    console.log(\`📧 Email sent: \${message}\`);
  }
}

class SMSDecorator extends NotifierDecorator {
  send(message: string) {
    super.send(message);
    this.sendSMS(message);
  }
  
  private sendSMS(message: string) {
    console.log(\`📱 SMS sent: \${message}\`);
  }
}

class SlackDecorator extends NotifierDecorator {
  send(message: string) {
    super.send(message);
    this.sendSlack(message);
  }
  
  private sendSlack(message: string) {
    console.log(\`💬 Slack message sent: \${message}\`);
  }
}

// Usage: Stack decorators
const notifier = new SlackDecorator(
  new SMSDecorator(
    new EmailDecorator(
      new BasicNotifier()
    )
  )
);

notifier.send('Important alert!');
// Output:
// [Basic] Important alert!
// 📧 Email sent: Important alert!
// 📱 SMS sent: Important alert!
// 💬 Slack message sent: Important alert!`,
          },
          {
            filePath: 'patterns/decorator-react-hoc.tsx',
            content: `// React HOC as Decorator Pattern
import React from 'react';

// Base Component
function UserProfile({ user }: { user: { name: string } }) {
  return <div>Welcome, {user.name}</div>;
}

// Decorator 1: Add loading state
function withLoading<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WithLoadingComponent(props: P & { isLoading?: boolean }) {
    const { isLoading, ...rest } = props;
    
    if (isLoading) {
      return <div>Loading...</div>;
    }
    
    return <Component {...rest as P} />;
  };
}

// Decorator 2: Add error boundary
function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>
) {
  return class WithErrorBoundary extends React.Component<P> {
    state = { hasError: false };
    
    static getDerivedStateFromError() {
      return { hasError: true };
    }
    
    render() {
      if (this.state.hasError) {
        return <div>Error occurred!</div>;
      }
      return <Component {...this.props} />;
    }
  };
}

// Decorator 3: Add analytics
function withAnalytics<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WithAnalyticsComponent(props: P) {
    React.useEffect(() => {
      console.log('Component rendered:', Component.name);
    }, []);
    
    return <Component {...props} />;
  };
}

// Stack decorators (compose)
const EnhancedProfile = withAnalytics(
  withErrorBoundary(
    withLoading(UserProfile)
  )
);

// Usage
<EnhancedProfile user={{ name: 'John' }} isLoading={false} />`,
          },
          {
            filePath: 'patterns/decorator-functional.ts',
            content: `// Functional Decorator Pattern (Higher-Order Functions)
type FetchFunction = (url: string) => Promise<Response>;

// Base function
const baseFetch: FetchFunction = async (url) => {
  return fetch(url);
};

// Decorator: Add caching
function withCache(fn: FetchFunction): FetchFunction {
  const cache = new Map<string, Response>();
  
  return async (url: string) => {
    if (cache.has(url)) {
      console.log('Cache HIT');
      return cache.get(url)!;
    }
    
    console.log('Cache MISS');
    const result = await fn(url);
    cache.set(url, result);
    return result;
  };
}

// Decorator: Add logging
function withLogging(fn: FetchFunction): FetchFunction {
  return async (url: string) => {
    console.log(\`[LOG] Fetching: \${url}\`);
    const start = Date.now();
    const result = await fn(url);
    console.log(\`[LOG] Done in \${Date.now() - start}ms\`);
    return result;
  };
}

// Decorator: Add retry logic
function withRetry(fn: FetchFunction, retries = 3): FetchFunction {
  return async (url: string) => {
    for (let i = 0; i < retries; i++) {
      try {
        return await fn(url);
      } catch (error) {
        console.log(\`Retry \${i + 1}/\${retries}\`);
        if (i === retries - 1) throw error;
      }
    }
    throw new Error('All retries failed');
  };
}

// Compose decorators
const enhancedFetch = withRetry(
  withLogging(
    withCache(baseFetch)
  ),
  3
);

// Usage
await enhancedFetch('/api/users');`,
          }
        ]}
      />
      <RightPanel>
        <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="text-center max-w-md">
            <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
              <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Decorator Pattern</h2>
            <p className="text-gray-600 mb-6">Enhance objects dynamically without inheritance</p>
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
              <code className="text-sm text-gray-800 block text-left">
                {`// Stack decorators
const enhanced = 
  withRetry(
    withLogging(
      withCache(
        baseFetch
      )
    )
  );`}
              </code>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

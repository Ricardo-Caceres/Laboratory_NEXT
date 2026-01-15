import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function FactoryPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Factory Pattern"
        description="🏭 **Factory Pattern** - Crea objetos sin especificar clases concretas

El Factory Pattern es un patrón creacional GoF que proporciona una interfaz para crear objetos delegando la decisión de qué clase instanciar a subclases o lógica centralizada. Encapsula la creación de objetos para promover loose coupling.

**🎯 ¿Cuándo usarlo?**
- Crear **diferentes tipos de objetos** basados en condiciones (UI components, notifications, etc.)
- Implementar **plugins o módulos** dinámicos
- Generar objetos desde **configuración** o datos externos
- Abstraer **lógica de creación compleja** con múltiples pasos
- **Testing**: Fácil crear mock objects

**🔑 Conceptos Clave:**
- **Product**: Interfaz común de los objetos creados
- **ConcreteProduct**: Implementaciones específicas
- **Factory**: Clase/método que decide qué Product crear
- **Creator**: Define el factory method
- **Client**: Usa factory para obtener objetos sin conocer clases concretas

**✅ Ventajas:**
- 🔓 **Open/Closed**: Nuevos productos sin modificar código existente
- 🎯 **Single Responsibility**: Creación separada de lógica de negocio
- 🔄 **DRY**: Lógica de creación centralizada y reutilizable
- 🧪 **Testeable**: Fácil inyectar mock factories
- 📦 **Encapsulación**: Cliente no depende de clases concretas

**📐 Estructura:**
\`\`\`typescript
// Product Interface
interface Button {
  render(): void;
  onClick(): void;
}

// Concrete Products
class PrimaryButton implements Button {
  render() { /* Blue button */ }
  onClick() { /* Primary action */ }
}

class DangerButton implements Button {
  render() { /* Red button */ }
  onClick() { /* Dangerous action */ }
}

// Factory
class ButtonFactory {
  static create(type: string): Button {
    switch(type) {
      case 'primary': return new PrimaryButton();
      case 'danger': return new DangerButton();
      default: throw new Error('Unknown button type');
    }
  }
}

// Client
const btn = ButtonFactory.create('primary');
btn.render();
\`\`\`

**💡 Casos de Uso Reales:**
- **React.createElement()**: Factory para crear elementos React
- **document.createElement()**: Factory del DOM
- **Notification Systems**: Email, SMS, Push factories
- **Payment Processors**: Stripe, PayPal, Square factories
- **Logger Factories**: Console, File, Cloud loggers
- **UI Component Libraries**: Button, Input, Card factories

**🆚 Factory vs Constructor:**
- **Factory**: Lógica centralizada, puede retornar diferentes tipos
- **Constructor**: Siempre crea instancia de la misma clase

**🆚 Factory vs Abstract Factory:**
- **Factory**: Crea un tipo de producto
- **Abstract Factory**: Crea familias de productos relacionados

**Ejemplo del código:**
Factory de botones que crea diferentes variantes (primary, secondary, danger, success) basado en tipo, con estilos y comportamientos específicos."
        codeContent={[
          {
            filePath: 'patterns/factory-buttons.tsx',
            content: `// Product Interface
interface Button {
  label: string;
  color: string;
  onClick: () => void;
  render(): JSX.Element;
}

// Concrete Products
class PrimaryButton implements Button {
  constructor(public label: string, public onClick: () => void) {}
  color = 'bg-blue-600 hover:bg-blue-700';
  
  render() {
    return (
      <button 
        onClick={this.onClick}
        className={\`\${this.color} text-white px-6 py-2 rounded\`}
      >
        {this.label}
      </button>
    );
  }
}

class DangerButton implements Button {
  constructor(public label: string, public onClick: () => void) {}
  color = 'bg-red-600 hover:bg-red-700';
  
  render() {
    return (
      <button 
        onClick={this.onClick}
        className={\`\${this.color} text-white px-6 py-2 rounded\`}
      >
        ⚠️ {this.label}
      </button>
    );
  }
}

class SuccessButton implements Button {
  constructor(public label: string, public onClick: () => void) {}
  color = 'bg-green-600 hover:bg-green-700';
  
  render() {
    return (
      <button 
        onClick={this.onClick}
        className={\`\${this.color} text-white px-6 py-2 rounded\`}
      >
        ✓ {this.label}
      </button>
    );
  }
}

// Factory
class ButtonFactory {
  static create(
    type: 'primary' | 'danger' | 'success',
    label: string,
    onClick: () => void
  ): Button {
    switch(type) {
      case 'primary':
        return new PrimaryButton(label, onClick);
      case 'danger':
        return new DangerButton(label, onClick);
      case 'success':
        return new SuccessButton(label, onClick);
      default:
        throw new Error(\`Unknown button type: \${type}\`);
    }
  }
}

// Usage
export function ActionButtons() {
  const saveBtn = ButtonFactory.create('success', 'Save', () => save());
  const deleteBtn = ButtonFactory.create('danger', 'Delete', () => remove());
  
  return (
    <div className="flex gap-2">
      {saveBtn.render()}
      {deleteBtn.render()}
    </div>
  );
}`,
          },
          {
            filePath: 'patterns/factory-notifications.ts',
            content: `// Real-world: Notification Factory
interface Notification {
  send(user: User, message: string): Promise<void>;
}

class EmailNotification implements Notification {
  async send(user: User, message: string) {
    await emailService.send({
      to: user.email,
      subject: 'Notification',
      body: message
    });
  }
}

class SMSNotification implements Notification {
  async send(user: User, message: string) {
    await twilioService.send({
      to: user.phone,
      body: message
    });
  }
}

class PushNotification implements Notification {
  async send(user: User, message: string) {
    await fcmService.send({
      token: user.deviceToken,
      notification: { title: 'Alert', body: message }
    });
  }
}

// Factory with dynamic creation
class NotificationFactory {
  static create(type: string): Notification {
    const factories: Record<string, () => Notification> = {
      email: () => new EmailNotification(),
      sms: () => new SMSNotification(),
      push: () => new PushNotification()
    };
    
    const factory = factories[type];
    if (!factory) throw new Error(\`Unknown notification type: \${type}\`);
    
    return factory();
  }
  
  // Factory Method pattern
  static createForUser(user: User): Notification {
    if (user.preferences.push) return new PushNotification();
    if (user.preferences.sms) return new SMSNotification();
    return new EmailNotification(); // Fallback
  }
}

// Usage
const notifier = NotificationFactory.create('email');
await notifier.send(user, 'Hello!');

// Or based on user preference
const userNotifier = NotificationFactory.createForUser(user);
await userNotifier.send(user, 'Personalized notification');`,
          },
          {
            filePath: 'patterns/factory-config-driven.ts',
            content: `// Config-driven Factory
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(msg: string) { console.log(msg); }
}

class FileLogger implements Logger {
  constructor(private filepath: string) {}
  log(msg: string) { fs.appendFileSync(this.filepath, msg + '\\n'); }
}

class CloudLogger implements Logger {
  log(msg: string) { cloudService.log(msg); }
}

// Factory from config
class LoggerFactory {
  static createFromEnv(): Logger {
    const env = process.env.NODE_ENV;
    
    if (env === 'production') {
      return new CloudLogger();
    } else if (env === 'development') {
      return new ConsoleLogger();
    } else {
      return new FileLogger('./test.log');
    }
  }
  
  static createFromConfig(config: LogConfig): Logger {
    switch(config.type) {
      case 'console': return new ConsoleLogger();
      case 'file': return new FileLogger(config.filepath!);
      case 'cloud': return new CloudLogger();
      default: throw new Error('Invalid logger config');
    }
  }
}

// Usage - No hardcoding!
const logger = LoggerFactory.createFromEnv();
logger.log('App started');`,
          }
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

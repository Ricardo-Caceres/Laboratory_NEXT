import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function FacadePatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Facade Pattern"
        description="🏢 **Facade Pattern** - Simplifica subsistemas complejos con una interfaz unificada

El Facade Pattern es un patrón estructural GoF que proporciona una interfaz simplificada a un conjunto complejo de clases, bibliotecas o frameworks. Actúa como un punto de entrada único que oculta la complejidad interna.

**🎯 ¿Cuándo usarlo?**
- Simplificar **APIs complejas** de terceros (jQuery sobre DOM, axios sobre fetch)
- Crear **servicios coordinadores** que orquestan múltiples subsistemas
- Ofrecer **interfaces simplificadas** a sistemas legacy
- Reducir **dependencias** entre el cliente y subsistemas
- Frameworks como **Next.js** (facade sobre React, Webpack, Babel, etc.)

**🔑 Conceptos Clave:**
- **Facade**: Clase que proporciona la interfaz simplificada
- **Subsystems**: Clases complejas que hace el trabajo real
- **Client**: Código que usa la facade en vez de subsistemas directamente
- **Delegation**: Facade delega trabajo a subsistemas

**✅ Ventajas:**
- 🎯 **Simplicidad**: Interfaz fácil de usar para clientes
- 🔓 **Desacoplamiento**: Cliente no depende de subsistemas internos
- 📦 **Encapsulación**: Oculta complejidad y detalles de implementación
- 🔄 **Mantenibilidad**: Cambios internos no afectan clientes
- 🧪 **Testeable**: Fácil mockear facade completa

**📐 Estructura:**
\`\`\`typescript
// Subsistemas complejos
class Database { query(sql: string) {} }
class Cache { get(key: string) {} set(key: string, val: any) {} }
class Logger { log(msg: string) {} }
class Validator { validate(data: any) {} }

// Facade simplifica el uso
class UserService {
  async getUser(id: string) {
    this.logger.log(\`Fetching user \${id}\`);
    const cached = this.cache.get(id);
    if (cached) return cached;
    
    const user = await this.db.query(\`SELECT * FROM users WHERE id=\${id}\`);
    this.validator.validate(user);
    this.cache.set(id, user);
    return user;
  }
}

// Cliente solo ve interface simple
const user = await userService.getUser('123');
\`\`\`

**💡 Casos de Uso Reales:**
- **jQuery**: Facade sobre DOM APIs complejas
- **Next.js**: Facade sobre React + Webpack + Babel + Router
- **axios**: Facade sobre fetch API con mejor DX
- **Stripe SDK**: Facade sobre REST API compleja
- **OrderFacade**: Coordina Payment + Inventory + Shipping + Notifications

**🆚 Facade vs Adapter:**
- **Facade**: Simplifica múltiples clases (N:1), misma interfaz
- **Adapter**: Convierte una interfaz a otra (1:1), diferentes interfaces

**Ejemplo del código:**
Sistema de procesamiento de órdenes que coordina payment, inventory, shipping y notifications en una sola llamada simple."
        codeContent={[
          {
            filePath: 'patterns/facade-order-system.ts',
            content: `// ❌ Sin Facade: Cliente debe conocer todos los subsistemas
const payment = new PaymentProcessor();
const inventory = new InventorySystem();
const shipping = new ShippingService();
const notifications = new NotificationService();

// Cliente hace 4+ llamadas complejas
payment.validateCard(order.card);
payment.charge(order.total);
inventory.checkStock(order.items);
inventory.reserve(order.items);
shipping.calculateFees(order.address);
shipping.schedule(order);
notifications.sendEmail(order.user, 'order_confirmed');
notifications.sendSMS(order.user.phone, 'Order placed');

// ✅ Con Facade: Interface simple y limpia
class OrderFacade {
  private payment = new PaymentProcessor();
  private inventory = new InventorySystem();
  private shipping = new ShippingService();
  private notifications = new NotificationService();
  
  async processOrder(order: Order): Promise<OrderResult> {
    try {
      // Coordina todos los subsistemas
      await this.payment.validateAndCharge(order);
      await this.inventory.reserveItems(order.items);
      const tracking = await this.shipping.scheduleShipment(order);
      await this.notifications.notifyCustomer(order.user, tracking);
      
      return { success: true, tracking };
    } catch (error) {
      await this.rollback(order);
      throw error;
    }
  }
  
  private async rollback(order: Order) {
    await this.payment.refund(order);
    await this.inventory.release(order.items);
  }
}

// Cliente usa una sola línea
const facade = new OrderFacade();
const result = await facade.processOrder(order);`,
          },
          {
            filePath: 'patterns/facade-api-wrapper.ts',
            content: `// Real-world: API Client Facade
class ComplexAPIClient {
  // Sin facade: Múltiples pasos para una operación simple
  async getUserData(userId: string) {
    const token = await this.authenticate();
    const headers = this.buildHeaders(token);
    const response = await fetch(\`/users/\${userId}\`, { headers });
    
    if (!response.ok) {
      const retry = await this.retryWithRefresh(userId);
      if (!retry.ok) throw new Error('Failed');
      return retry.json();
    }
    
    const data = await response.json();
    this.cache.set(userId, data);
    return this.transform(data);
  }
}

// ✅ Con Facade: Simple y declarativo
class APIFacade {
  private client = new ComplexAPIClient();
  
  async getUser(id: string) {
    return this.client.getUserData(id);
  }
  
  async updateUser(id: string, data: Partial<User>) {
    return this.client.updateUserData(id, data);
  }
}

// Cliente solo ve métodos simples
const api = new APIFacade();
const user = await api.getUser('123');
await api.updateUser('123', { name: 'John' });`,
          },
          {
            filePath: 'patterns/facade-nextjs-example.tsx',
            content: `// Next.js como Facade Pattern
// Sin Next.js: Configurar manualmente todo
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import webpack from 'webpack';
import babel from '@babel/core';
// ... configurar 100+ líneas de webpack, babel, etc

// ✅ Con Next.js Facade
// app/page.tsx
export default function Home() {
  return <div>Hello World</div>;
}
// Next.js maneja: React, routing, bundling, babel, HMR, SSR, etc

// Otro ejemplo: axios como Facade sobre fetch
// Sin facade
const response = await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
if (!response.ok) throw new Error('HTTP error');
const result = await response.json();

// Con facade (axios)
const result = await axios.post('/api/users', data);`,
          }
        ]}
      />
      <RightPanel>
        <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="text-center max-w-md">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Facade Pattern</h2>
            <p className="text-gray-600 mb-6">Unified interface to complex subsystems</p>
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
              <code className="text-sm text-gray-800 block">
                // Simple interface<br/>
                facade.processOrder(order)<br/>
                <br/>
                // Hides complexity<br/>
                // payment + inventory +<br/>
                // shipping + notifications
              </code>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

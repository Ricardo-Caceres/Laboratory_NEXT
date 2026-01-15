import ArchitecturePageLayout from '../../../components/ArchitecturePageLayout';

const description = `
🔬 **Microservices Architecture** - Patrón arquitectónico que descompone una aplicación monolítica en servicios pequeños, independientes y autónomos que se comunican a través de APIs bien definidas.

**🎯 Principio Fundamental:**
En lugar de construir una aplicación grande y monolítica, divides la funcionalidad en múltiples servicios pequeños, cada uno ejecutándose en su propio proceso, con su propia base de datos, y desplegable independientemente.

**📐 Características Clave:**

**1. 🎯 Servicio = Bounded Context**
- Cada microservicio representa un dominio de negocio específico
- User Service, Order Service, Payment Service, Inventory Service
- Ownership claro por equipo

**2. 💾 Database per Service**
- Cada servicio tiene su propia base de datos
- No hay base de datos compartida
- Evita acoplamiento de datos
- Puede usar diferentes tecnologías (SQL, NoSQL)

**3. 🔌 Comunicación via APIs**
- REST, GraphQL, gRPC, Message Queues
- Comunicación asíncrona con eventos
- Service discovery y load balancing
- Circuit breakers para resilience

**4. ⚙️ Independencia Tecnológica**
- Cada servicio puede usar diferente stack
- User Service en Node.js, Payment en Java
- Libertad de elegir la mejor herramienta

**5. 🚀 Despliegue Independiente**
- Deploy sin afectar otros servicios
- Rollback individual
- CI/CD por servicio
- Escalado independiente

**✨ Beneficios:**
- ✅ **Escalabilidad:** Escala solo los servicios que necesitas
- ✅ **Autonomía de Equipos:** Equipos trabajan independientemente
- ✅ **Tecnología Flexible:** Usa el stack correcto por servicio
- ✅ **Deployment Rápido:** Deploys pequeños y frecuentes
- ✅ **Fault Isolation:** Falla de un servicio no tumba todo
- ✅ **Fácil de Entender:** Cada servicio es pequeño y enfocado

**⚠️ Desafíos:**
- ❌ **Complejidad Operacional:** Múltiples servicios, logs, monitoring
- ❌ **Comunicación de Red:** Latencia, fallos de red
- ❌ **Consistencia de Datos:** Transacciones distribuidas
- ❌ **Testing:** Integration testing complejo
- ❌ **Debugging:** Rastrear requests across services

**🏢 Casos de Uso Reales:**
- **Netflix:** Cientos de microservicios
- **Amazon:** Checkout, Inventory, Shipping como servicios separados
- **Uber:** Rides, Payments, Maps como microservicios
- **Spotify:** Playlists, Search, Recommendations independientes

**💡 Micro Frontends (Frontend Microservices):**
Aplica los mismos principios al frontend:
- Header app, Products app, Checkout app
- Cada uno desplegable independientemente
- Module Federation, Web Components, iframes

**🔧 Herramientas del Ecosistema:**
- **Orquestación:** Kubernetes, Docker Swarm
- **Service Mesh:** Istio, Linkerd
- **API Gateway:** Kong, AWS API Gateway
- **Message Bus:** RabbitMQ, Kafka
- **Service Discovery:** Consul, Eureka
- **Monitoring:** Prometheus, Grafana, Jaeger

**Ejemplo del código:**
Arquitectura de e-commerce con 4 microservicios independientes comunicándose via APIs.
`;

function MicroservicesDemo() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Microservices Architecture</h2>
      
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* User Service */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-xl">
          <div className="text-4xl mb-3">👤</div>
          <h3 className="text-xl font-bold mb-2">User Service</h3>
          <div className="text-sm space-y-1 text-blue-100">
            <div>• Authentication</div>
            <div>• Profile Management</div>
            <div>• PostgreSQL Database</div>
            <div>• Node.js + Express</div>
          </div>
        </div>

        {/* Order Service */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-xl">
          <div className="text-4xl mb-3">🛒</div>
          <h3 className="text-xl font-bold mb-2">Order Service</h3>
          <div className="text-sm space-y-1 text-green-100">
            <div>• Order Creation</div>
            <div>• Order History</div>
            <div>• MongoDB Database</div>
            <div>• Python + FastAPI</div>
          </div>
        </div>

        {/* Payment Service */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-xl">
          <div className="text-4xl mb-3">💳</div>
          <h3 className="text-xl font-bold mb-2">Payment Service</h3>
          <div className="text-sm space-y-1 text-purple-100">
            <div>• Payment Processing</div>
            <div>• Stripe Integration</div>
            <div>• MySQL Database</div>
            <div>• Java + Spring Boot</div>
          </div>
        </div>

        {/* Inventory Service */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-xl">
          <div className="text-4xl mb-3">📦</div>
          <h3 className="text-xl font-bold mb-2">Inventory Service</h3>
          <div className="text-sm space-y-1 text-orange-100">
            <div>• Stock Management</div>
            <div>• Product Catalog</div>
            <div>• Redis Cache</div>
            <div>• Go + Gin</div>
          </div>
        </div>
      </div>

      {/* Communication */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg p-6">
        <h3 className="text-lg font-bold mb-3">🔌 Inter-Service Communication</h3>
        <div className="text-sm space-y-2">
          <div>• <strong>Synchronous:</strong> REST APIs, gRPC</div>
          <div>• <strong>Asynchronous:</strong> Message queues (RabbitMQ, Kafka)</div>
          <div>• <strong>Events:</strong> Event bus para notificaciones</div>
          <div>• <strong>API Gateway:</strong> Punto de entrada único</div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-6 bg-white border-2 border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">✨ ¿Por qué Microservices?</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• <strong>User Service</strong> caído → Order Service sigue funcionando</li>
          <li>• <strong>Payment Service</strong> tiene tráfico alto → Solo escala ese servicio</li>
          <li>• <strong>Team A</strong> actualiza Inventory → No afecta a Team B</li>
          <li>• <strong>Migración gradual</strong> de monolito a microservicios</li>
        </ul>
      </div>
    </div>
  );
}

const filePaths = ['src/app/architectures/microservices-architecture/page.tsx'];

export default function MicroservicesArchitecturePage() {
  return (
    <ArchitecturePageLayout
      title="Microservices Architecture"
      description={description}
      filePaths={filePaths}
      ClientExample={MicroservicesDemo}
    />
  );
}

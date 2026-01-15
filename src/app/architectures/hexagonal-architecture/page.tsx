import ArchitecturePageLayout from '../../../components/ArchitecturePageLayout';

const description = `
🏛️ **Hexagonal Architecture** - También conocida como Ports & Adapters, es un patrón que separa la lógica de negocio del código de infraestructura mediante interfaces bien definidas.

**🎯 Principio Fundamental:**
El core de la aplicación (lógica de negocio) está en el centro del hexágono, completamente aislado del mundo exterior. La comunicación con sistemas externos (UI, DB, APIs) se realiza a través de "puertos" (interfaces) y "adaptadores" (implementaciones concretas).

**📐 Componentes Clave:**

**1. 🎯 Core/Domain (Centro del Hexágono)**
- Lógica de negocio pura
- Reglas y entidades del dominio
- Independiente de frameworks y tecnologías
- No conoce nada del mundo exterior

**2. 🔌 Ports (Puertos - Interfaces)**
- **Primary/Driving Ports:** Interfaces que expone el core (API de entrada)
- **Secondary/Driven Ports:** Interfaces que el core requiere (API de salida)
- Definen CONTRATOS, no implementaciones
- Ejemplo: UserRepository interface, PaymentGateway interface

**3. 🔧 Adapters (Adaptadores - Implementaciones)**
- **Primary/Driving Adapters:** UI, Controllers, API endpoints
- **Secondary/Driven Adapters:** Database, External APIs, File systems
- Implementan los ports
- Son intercambiables sin afectar el core

**🎨 Arquitectura Visual:**
\`\`\`
        Primary Adapters (Driving Side)
         UI | REST API | GraphQL
              ↓
         Primary Ports (Interfaces)
              ↓
       ┌──────────────────┐
       │   CORE DOMAIN    │
       │ Business Logic   │
       │   Entities       │
       └──────────────────┘
              ↓
        Secondary Ports (Interfaces)
              ↓
       Secondary Adapters (Driven Side)
       PostgreSQL | MongoDB | External API
\`\`\`

**✨ Beneficios:**
- ✅ **Altamente Testeable:** Mock adapters fácilmente
- ✅ **Independiente de Frameworks:** El core no depende de React, Express, etc.
- ✅ **Flexible:** Cambia DB de SQL a NoSQL sin tocar el core
- ✅ **Mantenible:** Lógica de negocio aislada y clara
- ✅ **Escalable:** Añade nuevos adapters sin modificar el core

**🔑 Reglas de Oro:**
1. El core NUNCA importa código de adapters
2. Los adapters implementan ports definidos por el core
3. Las dependencias apuntan HACIA el core (Dependency Inversion)
4. El core contiene SOLO lógica de negocio

**🏢 Casos de Uso Reales:**
- **E-commerce:** Core con lógica de checkout, adapters para Stripe/PayPal
- **Multi-tenant SaaS:** Core común, adapters por cliente
- **Sistemas Legacy:** Migra adapters gradualmente sin tocar el core

**💡 En React/TypeScript:**
- **Core:** Entities, Use Cases, Business Rules
- **Primary Ports:** Service interfaces que expone el core
- **Primary Adapters:** React Components, API Routes
- **Secondary Ports:** Repository interfaces, Gateway interfaces
- **Secondary Adapters:** API clients, LocalStorage, IndexedDB

**Ejemplo del código:**
Implementamos un UserService con ports claramente definidos y adapters intercambiables para persistencia (InMemory, API, LocalStorage).
`;

// Client example component
function HexagonalArchitectureDemo() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Hexagonal Architecture Demo</h2>
      
      <div className="space-y-6">
        {/* Core */}
        <div className="bg-purple-50 border-2 border-purple-500 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">🎯 Core Domain</h3>
          <div className="bg-white rounded p-4 font-mono text-sm">
            <pre>{`// Pure business logic
class User {
  constructor(
    public id: string,
    public name: string,
    public email: string
  ) {}
  
  isValid(): boolean {
    return this.email.includes('@');
  }
}`}</pre>
          </div>
        </div>

        {/* Ports */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">🔌 Primary Port (Input)</h4>
            <div className="bg-white rounded p-3 font-mono text-xs">
              <pre>{`interface UserService {
  createUser(data): User;
  getUser(id): User;
}`}</pre>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
            <h4 className="font-bold text-green-900 mb-2">🔌 Secondary Port (Output)</h4>
            <div className="bg-white rounded p-3 font-mono text-xs">
              <pre>{`interface UserRepository {
  save(user): Promise<void>;
  findById(id): Promise<User>;
}`}</pre>
            </div>
          </div>
        </div>

        {/* Adapters */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
            <h4 className="font-bold text-blue-800 mb-2">🔧 Primary Adapter (UI)</h4>
            <div className="bg-white rounded p-3 font-mono text-xs">
              <pre>{`// React Component
function UserForm() {
  const service = useUserService();
  
  const handleSubmit = (data) => {
    service.createUser(data);
  };
}`}</pre>
            </div>
          </div>

          <div className="bg-green-100 border border-green-300 rounded-lg p-4">
            <h4 className="font-bold text-green-800 mb-2">🔧 Secondary Adapter (DB)</h4>
            <div className="bg-white rounded p-3 font-mono text-xs">
              <pre>{`// API Implementation
class APIUserRepository 
  implements UserRepository {
  async save(user: User) {
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user)
    });
  }
}`}</pre>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6">
          <h3 className="text-lg font-bold mb-3">✨ Ventaja Clave</h3>
          <p className="text-sm">
            Puedes cambiar de InMemoryRepository a APIRepository a FirebaseRepository
            <strong> sin modificar una sola línea del core business logic</strong>.
            Solo cambias qué adapter inyectas!
          </p>
        </div>
      </div>
    </div>
  );
}

const filePaths = ['src/app/architectures/hexagonal-architecture/page.tsx'];

export default function HexagonalArchitecturePage() {
  return (
    <ArchitecturePageLayout
      title="Hexagonal Architecture (Ports & Adapters)"
      description={description}
      filePaths={filePaths}
      ClientExample={HexagonalArchitectureDemo}
    />
  );
}

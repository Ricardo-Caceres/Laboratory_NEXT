import ArchitecturePageLayout from '../../../components/ArchitecturePageLayout';

const description = `
🏗️ **Layered Architecture** - También conocida como N-tier Architecture, organiza el código en capas horizontales donde cada capa tiene una responsabilidad específica y solo puede comunicarse con la capa inmediatamente inferior.

**🎯 Principio Fundamental:**
Separación de responsabilidades en capas horizontales con dependencias unidireccionales: cada capa solo puede depender de las capas inferiores, nunca de las superiores.

**📐 Las 4 Capas Clásicas:**

**1. 🎨 Presentation Layer (Capa de Presentación)**
- Interfaz de usuario y presentación de datos
- Componentes React, páginas, layouts
- Maneja interacciones del usuario
- **NO contiene lógica de negocio**
- Ejemplo: Components, Views, Templates

**2. 💼 Business Logic Layer (Capa de Negocio)**
- Reglas de negocio y lógica de aplicación
- Servicios, casos de uso, validaciones
- Procesamiento de datos
- Orquestación de operaciones
- Ejemplo: Services, Use Cases, Domain Logic

**3. 📊 Data Access Layer (Capa de Acceso a Datos)**
- Abstracción del acceso a datos
- Repositorios, ORMs, queries
- CRUD operations
- Mapeo de datos
- Ejemplo: Repositories, Data Mappers, DAOs

**4. 💾 Database Layer (Capa de Persistencia)**
- Almacenamiento físico de datos
- Base de datos, file system, cache
- Schemas, tablas, índices
- Ejemplo: PostgreSQL, MongoDB, Redis

**🔄 Flujo de Comunicación:**
\`\`\`
User Action
    ↓
Presentation Layer (React Component)
    ↓
Business Logic Layer (Service)
    ↓
Data Access Layer (Repository)
    ↓
Database Layer (PostgreSQL)
\`\`\`

**✨ Beneficios:**
- ✅ **Separación Clara:** Cada capa tiene una responsabilidad única
- ✅ **Mantenible:** Cambios en una capa no afectan las demás
- ✅ **Testeable:** Puedes testear cada capa independientemente
- ✅ **Reutilizable:** La lógica de negocio puede usarse desde diferentes UIs
- ✅ **Escalable:** Añade capas según crece la complejidad

**⚠️ Limitaciones:**
- ❌ Puede crear demasiada indirección
- ❌ Cambios transversales requieren modificar múltiples capas
- ❌ No siempre es natural para todas las aplicaciones

**🏢 Casos de Uso Reales:**
- **Enterprise Applications:** Grandes aplicaciones corporativas
- **APIs REST tradicionales:** Backend con capas bien definidas
- **Sistemas Legacy:** Migración gradual por capas
- **Aplicaciones CRUD:** Operaciones estándar de base de datos

**💡 En React/Next.js:**
- **Presentation:** Components (/components, /app)
- **Business:** Services, Hooks (/services, /hooks)
- **Data Access:** API clients, Repositories (/lib/api)
- **Database:** Backend, ORM (Prisma, TypeORM)

**Ejemplo del código:**
Implementamos un sistema de gestión de productos con 4 capas claramente separadas.
`;

function LayeredArchitectureDemo() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Layered Architecture Demo</h2>
      
      <div className="space-y-4">
        {/* Layer 1: Presentation */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-2">🎨 Layer 1: Presentation</h3>
          <div className="bg-white text-gray-900 rounded p-3 font-mono text-xs mt-2">
            <pre>{`// React Component
function ProductList() {
  const products = useProducts(); // Hook
  return products.map(p => <ProductCard {...p} />);
}`}</pre>
          </div>
        </div>

        {/* Layer 2: Business Logic */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-2">💼 Layer 2: Business Logic</h3>
          <div className="bg-white text-gray-900 rounded p-3 font-mono text-xs mt-2">
            <pre>{`// Service
class ProductService {
  async createProduct(data) {
    if (!this.validateProduct(data)) 
      throw new Error('Invalid');
    return this.repository.save(data);
  }
}`}</pre>
          </div>
        </div>

        {/* Layer 3: Data Access */}
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-2">📊 Layer 3: Data Access</h3>
          <div className="bg-white text-gray-900 rounded p-3 font-mono text-xs mt-2">
            <pre>{`// Repository
class ProductRepository {
  async save(product) {
    return db.products.create(product);
  }
  async findAll() {
    return db.products.findMany();
  }
}`}</pre>
          </div>
        </div>

        {/* Layer 4: Database */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-2">💾 Layer 4: Database</h3>
          <div className="bg-white text-gray-900 rounded p-3 font-mono text-xs mt-2">
            <pre>{`// Database
PostgreSQL / MongoDB / Redis
- Tables/Collections
- Indexes
- Constraints`}</pre>
          </div>
        </div>

        {/* Flow */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6 mt-6">
          <h3 className="text-lg font-bold mb-3">🔄 Regla de Oro</h3>
          <p className="text-sm">
            Las dependencias fluyen <strong>SOLO hacia abajo</strong>. 
            Presentation → Business → Data Access → Database.
            NUNCA al revés!
          </p>
        </div>
      </div>
    </div>
  );
}

const filePaths = ['src/app/architectures/layered-architecture/page.tsx'];

export default function LayeredArchitecturePage() {
  return (
    <ArchitecturePageLayout
      title="Layered Architecture (N-Tier)"
      description={description}
      filePaths={filePaths}
      ClientExample={LayeredArchitectureDemo}
    />
  );
}

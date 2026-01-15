import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function AdapterPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Adapter Pattern"
        description="🔌 **Adapter Pattern** - El puente entre interfaces incompatibles

El Adapter Pattern es un patrón estructural GoF que convierte la interfaz de una clase en otra que los clientes esperan. Permite que clases con interfaces incompatibles trabajen juntas sin modificar su código fuente.

**🎯 ¿Cuándo usarlo?**
- Integrar **APIs legacy** con código moderno
- Adaptar **bibliotecas de terceros** a tu interfaz
- Migrar entre **versiones de APIs** gradualmente
- Convertir **formatos de datos** (REST ↔ GraphQL, JSON ↔ XML)
- Integrar **servicios externos** con diferentes contratos

**🔑 Conceptos Clave:**
- **Adaptee**: La clase/interfaz existente que necesita adaptación
- **Target**: La interfaz que el cliente espera
- **Adapter**: La clase que convierte Adaptee → Target
- **Client**: Código que trabaja con la interfaz Target

**✅ Ventajas:**
- ✨ **Single Responsibility**: Separa lógica de conversión del negocio
- 🔓 **Open/Closed**: Introduce nuevos adapters sin modificar código existente
- 🧪 **Testeable**: Fácil crear mock adapters para testing
- 🔄 **Reutilización**: Aprovecha código legacy sin reescribirlo

**📐 Estructura:**
\`\`\`typescript
// Target interface
interface ModernAPI {
  getData(): Data;
}

// Adaptee (legacy)
class LegacyAPI {
  getLegacyData(): LegacyData;
}

// Adapter
class APIAdapter implements ModernAPI {
  constructor(private legacy: LegacyAPI) {}
  
  getData(): Data {
    const legacy = this.legacy.getLegacyData();
    return this.convert(legacy);
  }
}
\`\`\`

**💡 Casos de Uso Reales:**
- **Stripe**: Adaptar v1 API a v2 sin breaking changes
- **AWS SDK**: Adaptar v2 a v3 con diferentes interfaces
- **React**: Adaptar class components a functional components
- **Database**: Adaptar SQL queries a ORM syntax

**🆚 Adapter vs Facade:**
- **Adapter**: Convierte una interfaz a otra (1:1)
- **Facade**: Simplifica múltiples interfaces en una (N:1)

**Ejemplo del código:**
Adaptamos una API legacy con formato <code>user_name, user_email</code> a formato moderno <code>name, email, id</code> sin modificar la API original ni el código cliente."
        codeContent={[
          {
            filePath: 'patterns/adapter-basic.ts',
            content: `// ❌ Problema: API legacy con formato incompatible
interface LegacyUser {
  user_name: string;
  user_email: string;
  user_age: number;
}

// ✅ Solución: Nueva interfaz esperada
interface ModernUser {
  name: string;
  email: string;
  age: number;
  id: string;
}

// 🔌 Adapter: Convierte legacy → modern
class UserAdapter {
  static adapt(legacyUser: LegacyUser): ModernUser {
    return {
      name: legacyUser.user_name,
      email: legacyUser.user_email,
      age: legacyUser.user_age,
      id: crypto.randomUUID()
    };
  }

  static adaptMany(users: LegacyUser[]): ModernUser[] {
    return users.map(this.adapt);
  }
}

// Legacy API (no se modifica)
class LegacyAPIService {
  static getUsers(): LegacyUser[] {
    return [
      { user_name: 'John', user_email: 'john@example.com', user_age: 30 }
    ];
  }
}

// Cliente moderno usa el adapter
const legacyUsers = LegacyAPIService.getUsers();
const modernUsers = UserAdapter.adaptMany(legacyUsers);
console.log(modernUsers[0].name); // ✅ Works!`,
          },
          {
            filePath: 'patterns/adapter-api-migration.ts',
            content: `// Real-world: Migrar de REST a GraphQL
interface RESTResponse {
  user_id: number;
  first_name: string;
  last_name: string;
  email_address: string;
}

interface GraphQLUser {
  id: string;
  fullName: string;
  email: string;
}

class GraphQLAdapter {
  static fromREST(rest: RESTResponse): GraphQLUser {
    return {
      id: rest.user_id.toString(),
      fullName: \`\${rest.first_name} \${rest.last_name}\`,
      email: rest.email_address
    };
  }
  
  static toREST(gql: GraphQLUser): RESTResponse {
    const [first, ...last] = gql.fullName.split(' ');
    return {
      user_id: parseInt(gql.id),
      first_name: first,
      last_name: last.join(' '),
      email_address: gql.email
    };
  }
}

// Migración gradual
async function fetchUser(id: string) {
  const restData = await fetch(\`/api/users/\${id}\`).then(r => r.json());
  return GraphQLAdapter.fromREST(restData);
}`,
          },
          {
            filePath: 'patterns/adapter-class-to-functional.tsx',
            content: `// Adaptar class component a hook
import { Component } from 'react';

// Legacy class component
class LegacyCounter extends Component {
  state = { count: 0 };
  increment = () => this.setState({ count: this.state.count + 1 });
  render() {
    return <button onClick={this.increment}>{this.state.count}</button>;
  }
}

// Modern functional adapter
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  return { count, increment };
}

// Adapter component
function CounterAdapter() {
  const { count, increment } = useCounter(0);
  return <button onClick={increment}>{count}</button>;
}

// Ahora podemos reemplazar gradualmente
export default CounterAdapter;`,
          }
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

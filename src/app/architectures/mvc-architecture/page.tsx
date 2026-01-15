import ArchitecturePageLayout from '../../../components/ArchitecturePageLayout';

const description = `
🎮 **MVC Architecture (Model-View-Controller)** - El patrón arquitectónico clásico que separa una aplicación en tres componentes interconectados para separar la lógica de negocio de la interfaz de usuario.

**🎯 Principio Fundamental:**
Dividir la aplicación en tres responsabilidades claramente diferenciadas: datos (Model), presentación (View) y lógica de control (Controller). Cada componente tiene un rol específico y se comunica con los demás de forma estructurada.

**📐 Los 3 Componentes:**

**1. 📊 MODEL (Modelo)**
- **Responsabilidad:** Gestionar los datos y la lógica de negocio
- **Contiene:** Entidades, validaciones, reglas de negocio
- **NO conoce:** Nada sobre la UI o cómo se presenta
- Ejemplos:
  - User model con validación de email
  - Product model con cálculo de precio con descuento
  - Order model con estados (pending, confirmed, shipped)

**2. 👁️ VIEW (Vista)**
- **Responsabilidad:** Presentar datos al usuario
- **Contiene:** Templates, componentes UI, layouts
- **NO contiene:** Lógica de negocio
- Ejemplos:
  - UserProfileView renderiza datos del usuario
  - ProductListView muestra lista de productos
  - FormView muestra campos de formulario

**3. 🎮 CONTROLLER (Controlador)**
- **Responsabilidad:** Manejar input del usuario y orquestar Model↔View
- **Contiene:** Event handlers, routing, coordinación
- **NO contiene:** HTML ni lógica de negocio compleja
- Ejemplos:
  - UserController maneja login, registro, logout
  - ProductController maneja crear, editar, eliminar productos
  - OrderController procesa checkout

**🔄 Flujo de Interacción:**
\`\`\`
User clicks button
    ↓
View captura evento
    ↓
Controller recibe input
    ↓
Controller actualiza Model (lógica de negocio)
    ↓
Model notifica cambios
    ↓
Controller actualiza View
    ↓
View renderiza nuevos datos
    ↓
User ve resultado
\`\`\`

**✨ Beneficios:**
- ✅ **Separación de Responsabilidades:** Cada parte tiene un rol claro
- ✅ **Mantenibilidad:** Cambios en UI no afectan lógica de negocio
- ✅ **Testabilidad:** Testea Model sin necesidad de UI
- ✅ **Reutilización:** Mismo Model para web, mobile, desktop
- ✅ **Trabajo en Equipo:** Diseñadores en View, developers en Model/Controller

**⚠️ Variantes Modernas:**
- **MVP (Model-View-Presenter):** Presenter tiene más control que Controller
- **MVVM (Model-View-ViewModel):** ViewModel con data binding
- **Flux/Redux:** Unidirectional data flow para React

**🏢 Casos de Uso Reales:**
- **Ruby on Rails:** Framework MVC clásico
- **Django (Python):** MTV (Model-Template-View, similar a MVC)
- **ASP.NET MVC:** Framework Microsoft
- **Laravel (PHP):** MVC moderno
- **Angular:** Framework MVC/MVVM para frontend

**💡 MVC en React:**
Aunque React no es estrictamente MVC, puedes aplicar principios similares:
- **Model:** State management (Redux, Zustand), Business logic
- **View:** React Components (JSX)
- **Controller:** Event handlers, Custom hooks, Actions

**Ejemplo del código:**
Sistema de gestión de usuarios con Model (User entity), View (React component), y Controller (event handlers).
`;

function MVCDemo() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">MVC Pattern Demo</h2>
      
      <div className="space-y-6">
        {/* Model */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-4xl">📊</div>
            <div>
              <h3 className="text-2xl font-bold">MODEL</h3>
              <p className="text-sm text-blue-100">Data & Business Logic</p>
            </div>
          </div>
          <div className="bg-white text-gray-900 rounded p-4 font-mono text-xs mt-3">
            <pre>{`// User Model
class User {
  constructor(
    public name: string,
    public email: string
  ) {}
  
  // Business Logic
  isValidEmail(): boolean {
    return this.email.includes('@');
  }
  
  getDisplayName(): string {
    return this.name.toUpperCase();
  }
}`}</pre>
          </div>
        </div>

        {/* View & Controller */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* View */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">👁️</div>
              <div>
                <h3 className="text-xl font-bold">VIEW</h3>
                <p className="text-sm text-green-100">User Interface</p>
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded p-4 font-mono text-xs mt-3">
              <pre>{`// React Component (View)
function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}`}</pre>
            </div>
          </div>

          {/* Controller */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">🎮</div>
              <div>
                <h3 className="text-xl font-bold">CONTROLLER</h3>
                <p className="text-sm text-purple-100">Input Handler</p>
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded p-4 font-mono text-xs mt-3">
              <pre>{`// Controller
function handleSubmit(data) {
  // Crear Model
  const user = new User(
    data.name, 
    data.email
  );
  
  // Validar
  if (!user.isValidEmail()) {
    alert('Invalid email');
    return;
  }
  
  // Actualizar View
  updateView(user);
}`}</pre>
            </div>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">🔄 Flujo de Datos</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded font-bold">1</span>
              <span>Usuario interactúa con la <strong>View</strong> (click, input)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-purple-500 text-white px-2 py-1 rounded font-bold">2</span>
              <span><strong>Controller</strong> recibe el evento</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded font-bold">3</span>
              <span><strong>Controller</strong> actualiza el <strong>Model</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded font-bold">4</span>
              <span><strong>Model</strong> procesa lógica de negocio</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded font-bold">5</span>
              <span><strong>View</strong> se actualiza con nuevos datos</span>
            </div>
          </div>
        </div>

        {/* Key Point */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">💡 Punto Clave de MVC</h3>
          <p className="text-sm">
            El <strong>Model</strong> NO conoce la View. La <strong>View</strong> NO contiene lógica. 
            El <strong>Controller</strong> orquesta la comunicación entre ambos. 
            Esto permite cambiar la UI completamente sin tocar la lógica de negocio!
          </p>
        </div>
      </div>
    </div>
  );
}

const filePaths = ['src/app/architectures/mvc-architecture/page.tsx'];

export default function MVCArchitecturePage() {
  return (
    <ArchitecturePageLayout
      title="MVC Architecture (Model-View-Controller)"
      description={description}
      filePaths={filePaths}
      ClientExample={MVCDemo}
    />
  );
}

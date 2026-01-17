'use client';

import { CodeBlock } from '@/components/CodeBlock';

export function FactoryPatternDescription() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
          <strong className="text-[var(--primary)]">Factory Pattern</strong> proporciona una interfaz para crear objetos sin especificar la clase exacta del objeto que se creará.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          ¿Qué es el Factory Pattern?
        </h2>
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          El patrón Factory encapsula la lógica de creación de objetos. En lugar de usar <code className="bg-gray-700 px-2 py-1 rounded">new</code> directamente, 
          delegas la creación a una función o clase factory que decide qué tipo de objeto crear.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Ejemplo Básico
        </h2>
        <CodeBlock
          filename="ButtonFactory.jsx"
          code={`// Sin Factory Pattern (problemático)
function createButton(type) {
  if (type === 'primary') {
    return <button className="btn-primary">Click</button>;
  } else if (type === 'secondary') {
    return <button className="btn-secondary">Click</button>;
  }
  // ... más tipos
}

// Con Factory Pattern (mejor)
class ButtonFactory {
  static create(type, props) {
    const buttonTypes = {
      primary: PrimaryButton,
      secondary: SecondaryButton,
      danger: DangerButton,
      success: SuccessButton,
    };

    const ButtonComponent = buttonTypes[type] || PrimaryButton;
    return <ButtonComponent {...props} />;
  }
}

// Uso
<ButtonFactory.create('primary' label="Submit" />
<ButtonFactory.create('danger' label="Delete" />`}
        />
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Factory en React: Componentes Dinámicos
        </h2>
        <CodeBlock
          filename="example.jsx"
          code={`// Componentes base
const PrimaryButton = ({ label, onClick }) => (
  <button 
    onClick={onClick}
    className="bg-blue-600 text-white px-4 py-2 rounded"
  >
    {label}
  </button>
);

const SecondaryButton = ({ label, onClick }) => (
  <button 
    onClick={onClick}
    className="bg-gray-600 text-white px-4 py-2 rounded"
  >
    {label}
  </button>
);

const DangerButton = ({ label, onClick }) => (
  <button 
    onClick={onClick}
    className="bg-red-600 text-white px-4 py-2 rounded"
  >
    {label}
  </button>
);

// Factory Component
function ButtonFactory({ type = 'primary', ...props }) {
  const buttons = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    danger: DangerButton,
  };

  const Component = buttons[type] || buttons.primary;
  return <Component {...props} />;
}

// Uso en componente
function MyForm() {
  return (
    <form>
      <ButtonFactory type="primary" label="Save" />
      <ButtonFactory type="secondary" label="Cancel" />
      <ButtonFactory type="danger" label="Delete" />
    </form>
  );
}`}
        />
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Factory con Configuración
        </h2>
        <CodeBlock
          filename="example.jsx"
          code={`// notificationFactory.js
class NotificationFactory {
  static create(type, message) {
    const config = {
      success: {
        icon: '✅',
        className: 'bg-green-100 border-green-500',
        duration: 3000,
      },
      error: {
        icon: '❌',
        className: 'bg-red-100 border-red-500',
        duration: 5000,
      },
      warning: {
        icon: '⚠️',
        className: 'bg-yellow-100 border-yellow-500',
        duration: 4000,
      },
      info: {
        icon: 'ℹ️',
        className: 'bg-blue-100 border-blue-500',
        duration: 3000,
      },
    };

    const settings = config[type] || config.info;

    return {
      id: Date.now(),
      type,
      message,
      ...settings,
    };
  }
}

// Uso en React
function useNotification() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, message) => {
    const notification = NotificationFactory.create(type, message);
    
    setNotifications(prev => [...prev, notification]);

    // Auto-remove después de duration
    setTimeout(() => {
      setNotifications(prev => 
        prev.filter(n => n.id !== notification.id)
      );
    }, notification.duration);
  };

  return { notifications, addNotification };
}

// Componente
function App() {
  const { notifications, addNotification } = useNotification();

  return (
    <>
      <button onClick={() => 
        addNotification('success', 'Saved successfully!')
      }>
        Show Success
      </button>

      <div className="notifications">
        {notifications.map(notif => (
          <div 
            key={notif.id} 
            className={notif.className}
          >
            <span>{notif.icon}</span>
            <span>{notif.message}</span>
          </div>
        ))}
      </div>
    </>
  );
}`}
        />
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Factory para Formularios Dinámicos
        </h2>
        <CodeBlock
          filename="example.jsx"
          code={`// Componentes de input
const TextInput = ({ label, ...props }) => (
  <div>
    <label>{label}</label>
    <input type="text" {...props} />
  </div>
);

const SelectInput = ({ label, options, ...props }) => (
  <div>
    <label>{label}</label>
    <select {...props}>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

const CheckboxInput = ({ label, ...props }) => (
  <div>
    <label>
      <input type="checkbox" {...props} />
      {label}
    </label>
  </div>
);

// Factory
class FormFieldFactory {
  static create(field) {
    const fieldTypes = {
      text: TextInput,
      email: TextInput,
      select: SelectInput,
      checkbox: CheckboxInput,
    };

    const Component = fieldTypes[field.type];
    return <Component key={field.name} {...field} />;
  }
}

// Uso: Formulario desde configuración JSON
function DynamicForm({ schema }) {
  return (
    <form>
      {schema.fields.map(field => 
        FormFieldFactory.create(field)
      )}
    </form>
  );
}

// Schema example
const userFormSchema = {
  fields: [
    { type: 'text', name: 'name', label: 'Name' },
    { type: 'email', name: 'email', label: 'Email' },
    { 
      type: 'select', 
      name: 'country', 
      label: 'Country',
      options: [
        { value: 'mx', label: 'México' },
        { value: 'us', label: 'USA' },
      ],
    },
    { type: 'checkbox', name: 'terms', label: 'Accept Terms' },
  ],
};

<DynamicForm schema={userFormSchema} />`}
        />
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Beneficios
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li><strong>Encapsulación:</strong> Lógica de creación en un solo lugar</li>
          <li><strong>Flexibilidad:</strong> Fácil agregar nuevos tipos</li>
          <li><strong>Desacoplamiento:</strong> El código no depende de clases concretas</li>
          <li><strong>Configurabilidad:</strong> Crear objetos desde configuración</li>
          <li><strong>Testeable:</strong> Fácil mockear la factory</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
          Casos de uso
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)] opacity-90">
          <li>Crear componentes dinámicamente según tipo</li>
          <li>Formularios generados desde schema JSON</li>
          <li>Sistemas de notificaciones</li>
          <li>Diferentes tipos de gráficas/visualizaciones</li>
          <li>Layouts dinámicos</li>
          <li>Temas y estilos variables</li>
        </ul>
      </section>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-[var(--foreground)] opacity-90 leading-relaxed">
          💡 <strong>En React:</strong> El Factory Pattern es muy común en componentes que renderizan 
          diferentes variantes basadas en props. También es útil para crear Higher-Order Components (HOCs).
        </p>
      </div>
    </div>
  );
}

import AdapterPatternExample from './_client_example';

const description = `
**Adapter Pattern** es un patrón de diseño estructural que permite que interfaces incompatibles trabajen juntas actuando como un puente entre ellas.

Características principales:
- **Compatibilidad:** Convierte la interfaz de una clase en otra que el cliente espera
- **Reutilización:** Permite reutilizar clases existentes sin modificarlas
- **Flexibilidad:** Facilita la integración de componentes de terceros
- **Desacoplamiento:** Mantiene el código del cliente independiente de las implementaciones específicas

Casos de uso comunes:
- Integrar APIs legacy con código moderno
- Adaptar bibliotecas de terceros a tu interfaz
- Migrar entre versiones de APIs
- Convertir formatos de datos (JSON, XML, etc.)
- Integrar servicios externos con diferentes interfaces

**Ventajas:**
- Principio de Responsabilidad Única
- Principio Abierto/Cerrado
- Separa la lógica de conversión del código de negocio
- Facilita el testing mediante adapters mock

**Sintaxis:**
\`\`\`typescript
class Adapter {
  adapt(legacyObject: LegacyType): ModernType {
    return {
      modernField: legacyObject.legacy_field
    };
  }
}
\`\`\`

En este ejemplo, adaptamos datos de una API legacy (con formato user_name, user_email) a un formato moderno (name, email) sin modificar la API original ni el código cliente.
`;

const filePaths = [
  'src/app/patterns/adapter-pattern/_client_example.tsx',
];

export default function AdapterPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)]">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Adapter Pattern</h1>
          <div className="text-sm sm:text-base text-gray-300 whitespace-pre-line">
            {description}
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-6 min-h-[400px] lg:min-h-0">
        <div className="w-full max-w-4xl">
          <AdapterPatternExample />
        </div>
      </div>
    </div>
  );
}

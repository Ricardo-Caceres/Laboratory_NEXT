import FactoryPatternExample from './_client_example';

const description = `
**Factory Pattern** es un patrón de diseño creacional que proporciona una interfaz para crear objetos sin especificar sus clases concretas.

Características principales:
- **Encapsulación:** La lógica de creación de objetos está encapsulada en un solo lugar
- **Flexibilidad:** Fácil de extender con nuevos tipos sin modificar código existente
- **Desacoplamiento:** El código cliente no depende de clases concretas
- **Reutilización:** La lógica de creación puede ser reutilizada en múltiples lugares

Casos de uso comunes:
- Crear diferentes tipos de componentes UI (botones, inputs, cards)
- Generar objetos basados en configuración
- Implementar plugins o módulos dinámicos
- Crear diferentes tipos de notificaciones o alerts

**Ventajas:**
- Principio Open/Closed: abierto para extensión, cerrado para modificación
- Reduce duplicación de código de creación
- Facilita testing con objetos mock

**Sintaxis:**
\`\`\`typescript
class Factory {
  static create(type: string): Product {
    switch(type) {
      case 'A': return new ProductA();
      case 'B': return new ProductB();
    }
  }
}
\`\`\`

En este ejemplo, creamos una fábrica de botones que puede generar diferentes tipos de botones (primary, secondary, danger, success) sin que el código cliente necesite conocer las clases concretas.
`;

const filePaths = [
  'src/app/patterns/factory-pattern/_client_example.tsx',
];

export default function FactoryPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)]">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Factory Pattern</h1>
          <div className="text-sm sm:text-base text-gray-300 whitespace-pre-line">
            {description}
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-6 min-h-[400px] lg:min-h-0">
        <div className="w-full max-w-4xl">
          <FactoryPatternExample />
        </div>
      </div>
    </div>
  );
}

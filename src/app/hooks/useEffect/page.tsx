import DataFetcher from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

const description = `
**useEffect** es el Hook para manejar efectos secundarios (side effects) en componentes funcionales. Reemplaza los métodos del ciclo de vida como \`componentDidMount\`, \`componentDidUpdate\` y \`componentWillUnmount\`.

**¿Qué son los efectos secundarios?**

Los efectos secundarios son operaciones que afectan algo fuera del alcance de la función: llamadas a APIs, manipulación del DOM, suscripciones, timers, etc. En React, estos deben manejarse de forma especial para mantener la predictibilidad.

**Características principales:**

- **Sincronización:** Mantiene tu componente sincronizado con sistemas externos
- **Ejecución asíncrona:** Se ejecuta después de que React actualiza el DOM
- **Limpieza automática:** Puedes retornar una función de cleanup
- **Control de ejecución:** El array de dependencias controla cuándo se ejecuta
- **Agrupación (batching):** React puede agrupar múltiples efectos

**Casos de uso comunes:**

- Obtener datos de una API (data fetching)
- Suscripciones a eventos (WebSocket, event listeners)
- Manipulación directa del DOM
- Temporizadores y intervalos (setTimeout, setInterval)
- Sincronización con servicios de terceros (analytics, ads)
- Actualizar el título del documento

**Sintaxis:**

\`useEffect(() => { /* efecto */ return () => { /* limpieza */ }; }, [deps]);\`

**Array de dependencias - Muy importante:**

- **Sin array:** Se ejecuta después de CADA renderizado (raramente útil)
- **Array vacío []:** Se ejecuta SOLO UNA VEZ al montar el componente
- **Con deps [a, b]:** Se ejecuta cuando \`a\` o \`b\` cambian

**Reglas de limpieza:**

- Siempre limpia suscripciones, timers y event listeners
- La función de limpieza se ejecuta ANTES del próximo efecto
- También se ejecuta cuando el componente se desmonta

**Buenas prácticas:**

- Un efecto por responsabilidad (no mezclar lógica no relacionada)
- Siempre incluye todas las dependencias que uses
- Evita efectos que dependan de sí mismos (loops infinitos)
- Usa ESLint plugin para detectar dependencias faltantes

En este ejemplo, demostramos cómo usar useEffect para obtener datos de una API cuando el componente se monta, y cómo limpiar correctamente recursos.
`;

const filePaths = [
  'src/app/hooks/useEffect/_client_example.tsx',
];

export default function UseEffectPage() {
  return (
    <HookPageLayout
      title="useEffect Hook"
      description={description}
      filePaths={filePaths}
      ClientExample={DataFetcher}
    />
  );
}

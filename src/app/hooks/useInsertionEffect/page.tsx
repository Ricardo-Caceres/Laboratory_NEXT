import MyStyledComponent from './_client_example';
import CodeDisplay from '../../../components/CodeDisplay';
import { StyledText } from '../../../components/StyledText';

const description = `
**useInsertionEffect** es un Hook especializado que se ejecuta antes de que el navegador pinte, pero después de las mutaciones del DOM. Está diseñado específicamente para bibliotecas de CSS-in-JS que necesitan inyectar estilos dinámicamente.

Características principales:
- **Timing preciso:** Se ejecuta después del DOM pero antes de layout/paint
- **Sin mediciones DOM:** No tiene acceso a mediciones del layout
- **Inyección de estilos:** Optimizado para insertar \`<style>\` tags
- **Libraries CSS-in-JS:** Diseñado para styled-components, emotion, etc.

Orden de ejecución:
1. React actualiza el DOM
2. **useInsertionEffect** se ejecuta
3. useLayoutEffect se ejecuta
4. El navegador calcula layout
5. El navegador pinta
6. useEffect se ejecuta

Casos de uso:
- Bibliotecas de CSS-in-JS (styled-components, emotion)
- Inyección dinámica de hojas de estilo
- Herramientas de theming que modifican CSS
- Manipulación de \`<style>\` tags antes del paint

**Sintaxis:**
\`useInsertionEffect(() => { /* insertar estilos */ }, [deps]);\`

**Por qué existe:**
- **useEffect:** Demasiado tarde (después del paint)
- **useLayoutEffect:** Puede leer layout (no queremos eso para estilos)
- **useInsertionEffect:** Momento perfecto para inyectar estilos

**Cuándo usarlo:**
- Estás creando una librería de CSS-in-JS
- Necesitas inyectar estilos dinámicamente
- Los estilos deben estar disponibles antes del primer paint

**Cuándo NO usarlo:**
- Para la mayoría de casos (usa useEffect o useLayoutEffect)
- Para lógica de negocio
- Para efectos secundarios normales
- Si no estás trabajando con CSS dinámico

**Importante:**
- Este Hook es principalmente para librerías, no para código de aplicación
- No puedes leer el layout del DOM dentro de él
- Solo debe usarse para inyectar estilos
- Tiene restricciones similares a useLayoutEffect

**Diferencia clave:**
- **useLayoutEffect:** Puede leer y modificar el layout
- **useInsertionEffect:** Solo para insertar estilos, sin lecturas

**Limitaciones:**
- No se puede acceder a refs
- No se pueden programar actualizaciones de estado
- Solo para operaciones de inserción de estilos

En este ejemplo, demostramos cómo useInsertionEffect inyecta dinámicamente un \`<style>\` tag en el \`<head>\` del documento antes de que el navegador pinte, permitiendo estilos dinámicos sin flicker visual.
`;

export default function UseInsertionEffectPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-3xl font-bold text-white mb-4">useInsertionEffect Hook</h1>
          <StyledText text={description} />
        </div>
        <CodeDisplay filePaths={['src/app/hooks/useInsertionEffect/_client_example.tsx']} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100">
        <MyStyledComponent />
      </div>
    </div>
  );
}

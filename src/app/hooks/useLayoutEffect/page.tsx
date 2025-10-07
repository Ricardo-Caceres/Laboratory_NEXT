import LayoutEffectExample from './_client_example';
import HookPageLayout from '../../../components/HookPageLayout';

const description = `
**useLayoutEffect** es idéntico a useEffect, pero se ejecuta de forma síncrona después de todas las mutaciones del DOM pero antes de que el navegador pinte. Es útil cuando necesitas leer el layout del DOM y sincronizar re-renderizados.

Características principales:
- **Ejecución síncrona:** Se ejecuta antes de que el navegador pinte
- **Bloquea la pintura:** Puede causar problemas de rendimiento si es lento
- **Mediciones del DOM:** Ideal para leer posiciones, tamaños, etc.
- **Sincronización visual:** Previene "flickers" visuales

Diferencias con useEffect:
- **useEffect:** Se ejecuta después de pintar (asíncrono)
- **useLayoutEffect:** Se ejecuta antes de pintar (síncrono)

Casos de uso comunes:
- Medir elementos del DOM (posición, tamaño, scroll)
- Sincronizar animaciones
- Actualizar el DOM antes de que se pinte
- Tooltips y popovers que necesitan posicionamiento
- Prevenir "flash" de contenido sin estilo

**Sintaxis:**
\`useLayoutEffect(() => { /* efecto */ return () => { /* limpieza */ }; }, [deps]);\`

**Cuándo usar useLayoutEffect:**
- Necesitas medir el DOM antes de pintar
- Quieres prevenir flickers visuales
- Necesitas sincronizar actualizaciones visuales

**Cuándo NO usarlo:**
- Para la mayoría de efectos (usa useEffect)
- Para llamadas a API
- Para lógica que no afecta el layout visual

**Importante:**
- Prefiere useEffect por defecto
- Usa useLayoutEffect solo cuando veas problemas visuales
- En el servidor (SSR), useLayoutEffect genera warnings

**Orden de ejecución:**
1. React actualiza el DOM
2. useLayoutEffect se ejecuta (síncrono)
3. El navegador pinta
4. useEffect se ejecuta (asíncrono)

En este ejemplo, demostramos cómo useLayoutEffect puede medir un elemento del DOM y ajustar su posición antes de que el navegador lo pinte, previniendo saltos visuales.
`;

const filePaths = [
  'src/app/hooks/useLayoutEffect/_client_example.tsx',
];

export default function UseLayoutEffectPage() {
  return (
    <HookPageLayout
      title="useLayoutEffect Hook"
      description={description}
      filePaths={filePaths}
      ClientExample={LayoutEffectExample}
    />
  );
}

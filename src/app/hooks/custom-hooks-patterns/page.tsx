'use client';

import { useState } from 'react';

export default function CustomHooksPatternsPage() {
  const [activeSection, setActiveSection] = useState<'when' | 'how' | 'where' | 'why' | 'examples' | 'bestPractices'>('when');

  const sections: Record<'when' | 'how' | 'where' | 'why' | 'examples' | 'bestPractices', string> = {
    when: `⏰ CUÁNDO Usar Custom Hooks

✅ ÚSALOS CUANDO:
1. Código repetido en 3+ componentes
2. Lógica compleja que oscurece la UI (>100 líneas)
3. Necesitas testear lógica independientemente
4. Sincronización con sistemas externos (WebSockets, APIs del navegador)
5. Composición de comportamientos

❌ NO LOS USES CUANDO:
1. Lógica usada una sola vez
2. Solo necesitas pasar datos (usa funciones helper)
3. El problema es prop drilling (usa Context)
4. Premature optimization (Rule of Three)`,

    how: `🎯 CÓMO Crear Custom Hooks

PRINCIPIOS:
1. Single Responsibility - Un hook = una responsabilidad
2. API Consistente - Objeto o Array según el caso
3. Cleanup Obligatorio - Todo setup necesita cleanup
4. Type Safety - TypeScript siempre

PATRONES AVANZADOS:
- Factory Pattern: Hooks que retornan hooks
- State Machine: Estados bien definidos (idle/loading/success/error)
- Dependency Injection: Inyectar servicios para testing
- Reducer + Actions: Redux-like para estado complejo`,

    where: `📍 DÓNDE Organizarlos

ESTRUCTURA:
src/hooks/
  /auth - useAuth, usePermissions
  /data - useFetch, useQuery
  /ui - useModal, useToast  
  /form - useForm, useValidation
  /utils - useDebounce, useLocalStorage

src/features/X/hooks/ - Hooks específicos de feature

NIVELES:
- Global: Toda la app
- Feature: Módulo específico
- Page: Último recurso`,

    why: `💡 POR QUÉ Son Críticos

1. Separation of Concerns - UI limpia, lógica en hooks
2. Testability - Test sin renderizar UI
3. Composición - Combinar hooks para super poderes
4. Reusabilidad - Un hook, múltiples componentes
5. Mantenibilidad - Cambio en un lugar
6. Performance - Memoization incorporada`,

    examples: `💻 Ejemplos del Mundo Real

useDebounce - Search input (evita 100 API calls)
useLocalStorage - Persistencia automática
useMediaQuery - Responsive logic en JS
useAsync - State machine para API calls
useInterval - Real-time updates
useOnClickOutside - Cerrar modals
useIntersectionObserver - Lazy loading
useForm - Form handling completo
useWebSocket - Real-time communication
usePrevious - Tracking de cambios`,

    bestPractices: `🏆 Best Practices

NAMING:
✅ Prefijo "use" obligatorio
✅ Descriptivos: useUserAuth no useUA

PERFORMANCE:
✅ useCallback para funciones
✅ useMemo para cálculos
✅ Dependencies correctas

ERROR HANDLING:
✅ try/catch siempre
✅ Retornar estado de error
✅ Fallbacks

TESTING:
✅ @testing-library/react-hooks
✅ Test cleanup functions
✅ Mock dependencies

CODE REVIEW:
✅ ¿Tiene cleanup?
✅ ¿Dependencies correctas?
✅ ¿Maneja errores?
✅ ¿Es reutilizable?
✅ ¿Type-safe?
✅ ¿SSR-safe?`
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
          🎣 Custom Hooks Patterns - Guía Definitiva
        </h1>
        <p className="text-lg mb-6" style={{ opacity: 0.8 }}>
          Cuándo, Cómo, Dónde y Por Qué usar Custom Hooks
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {([
            { id: 'when' as const, label: 'CUÁNDO' },
            { id: 'how' as const, label: 'CÓMO' },
            { id: 'where' as const, label: 'DÓNDE' },
            { id: 'why' as const, label: 'POR QUÉ' },
            { id: 'examples' as const, label: 'EJEMPLOS' },
            { id: 'bestPractices' as const, label: 'BEST PRACTICES' }
          ] as const).map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className="px-4 py-2 rounded font-medium transition-all"
              style={{
                background: activeSection === section.id ? 'var(--primary)' : 'var(--panel)',
                color: activeSection === section.id ? 'white' : 'var(--foreground)',
                border: `1px solid ${activeSection === section.id ? 'var(--primary)' : 'var(--border)'}`
              }}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>
            {sections[activeSection]}
          </pre>
        </div>
      </div>
    </div>
  );
}

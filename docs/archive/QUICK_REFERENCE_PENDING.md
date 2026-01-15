# 🚀 Quick Reference - 20 Módulos Pendientes

## 📊 RESUMEN EJECUTIVO
- **3 Patterns** (ya tienen descripciones, migrar formato)
- **9 Hooks** (actualizar a HookPageLayout)
- **8 Architectures** (crear desde cero)

---

## 1️⃣ PATTERNS FINALES (3)

### compound-components
```
Ubicación: src/app/patterns/compound-components/
Estado: Descripción completa en líneas 6-48 del page.tsx
Tarea: Migrar a LeftPanel/RightPanel
Demo: _client_example.tsx existe
Tiempo: 15-20 min
```

### higher-order-component
```
Ubicación: src/app/patterns/higher-order-component/
Estado: Descripción completa en page.tsx (163 líneas)
Tarea: Migrar a LeftPanel/RightPanel
Demo: _client_example.tsx existe
Tiempo: 15-20 min
```

### render-props
```
Ubicación: src/app/patterns/render-props/
Estado: Descripción completa en page.tsx (185 líneas)
Tarea: Migrar a LeftPanel/RightPanel
Demo: _client_example.tsx existe
Tiempo: 15-20 min
```

---

## 2️⃣ HOOKS (9)

### custom-hooks-advanced
```bash
Path: src/app/hooks/custom-hooks-advanced/
Descripción: Patrones avanzados de custom hooks
- useToggle avanzado
- useAsync para data fetching
- usePrevious para valores anteriores
- Composition de hooks
```

### custom-hooks-patterns
```bash
Path: src/app/hooks/custom-hooks-patterns/
Descripción: Patrones comunes y best practices
- Naming conventions
- Return patterns (array vs object)
- Dependency management
- Testing custom hooks
```

### react-hooks
```bash
Path: src/app/hooks/react-hooks/
Descripción: Overview de todos los hooks de React
- Built-in hooks overview
- Cuándo usar cada uno
- Rules of hooks
- Performance considerations
```

### use (React 19)
```bash
Path: src/app/hooks/use/
Descripción: Hook use() para promises y context
Syntax: const value = use(promise | context);
Retorna: Unwrapped promise value o context value
Nota: Solo React 19+
```

### useDeferredValue
```bash
Path: src/app/hooks/useDeferredValue/
Descripción: Defer re-rendering de parte del árbol
Syntax: const deferredValue = useDeferredValue(value);
Caso de uso: Search input con resultados pesados
```

### useId
```bash
Path: src/app/hooks/useId/
Descripción: Genera IDs únicos para accesibilidad
Syntax: const id = useId();
Caso de uso: aria-labelledby, htmlFor en forms
```

### useInsertionEffect
```bash
Path: src/app/hooks/useInsertionEffect/
Descripción: Inserta estilos antes de layout effects
Syntax: useInsertionEffect(() => {}, []);
Caso de uso: CSS-in-JS libraries
Nota: Avanzado - no usar en app code
```

### useSyncExternalStore
```bash
Path: src/app/hooks/useSyncExternalStore/
Descripción: Suscribe a stores externos
Syntax: const snapshot = useSyncExternalStore(subscribe, getSnapshot);
Caso de uso: Redux, Zustand, browser APIs
```

### useTransition
```bash
Path: src/app/hooks/useTransition/
Descripción: Marca updates como transiciones no-urgentes
Syntax: const [isPending, startTransition] = useTransition();
Caso de uso: Navegación, filtering, heavy rendering
```

---

## 3️⃣ ARCHITECTURES (8)

### atomic-design
```
Concepto: Atoms → Molecules → Organisms → Templates → Pages
Ejemplo:
- Atoms: Button, Input, Label
- Molecules: SearchBox (Input + Button)
- Organisms: Header (Logo + Nav + SearchBox)
- Templates: Layout structure
- Pages: Specific instances
```

### clean-architecture
```
Concepto: Separación en capas concéntricas
Capas:
1. Entities (Business logic)
2. Use Cases (Application logic)
3. Interface Adapters (Presenters, Controllers)
4. Frameworks & Drivers (UI, DB, External)
Regla: Dependencies apuntan hacia adentro
```

### feature-sliced-design
```
Concepto: Organización por features y capas
Estructura:
/app - Inicialización
/processes - Business processes
/pages - Páginas completas
/widgets - Grandes bloques UI
/features - User scenarios
/entities - Business entities
/shared - Reutilizable
```

### hexagonal-architecture
```
Concepto: Ports & Adapters (Alistair Cockburn)
Estructura:
- Core Domain (center)
- Ports (interfaces)
- Adapters (implementations)
Beneficio: Core independiente de frameworks
```

### layered-architecture
```
Concepto: Separación horizontal en capas
Capas típicas:
1. Presentation Layer (UI)
2. Business Logic Layer (Services)
3. Data Access Layer (Repositories)
4. Database Layer
Regla: Cada capa solo habla con capa adyacente
```

### micro-frontends
```
Concepto: Múltiples apps independientes compuestas
Approaches:
- Build-time integration (npm packages)
- Run-time integration (Module Federation)
- Server-side integration (SSI)
- iFrame integration
Ejemplo: Diferentes teams → diferentes apps
```

### microservices-architecture
```
Concepto: Servicios pequeños independientes
Características:
- Independently deployable
- Organized around business capabilities
- Own their data
- Communicate via APIs
Frontend: Micro-frontends matching microservices
```

### mvc-architecture
```
Concepto: Model-View-Controller clásico
Componentes:
- Model: Data y business logic
- View: Presentation (React components)
- Controller: Handles user input, updates model
En React: Más común usar flux/redux patterns
```

---

## 📋 ARCHIVOS DE REFERENCIA

### Patterns ya completados (usar como template)
```bash
src/app/patterns/adapter-pattern/page.tsx
src/app/patterns/singleton-pattern/page.tsx
src/app/patterns/provider-pattern/page.tsx
```

### Hooks ya completados (usar como template)
```bash
src/app/hooks/useCallback/page.tsx
src/app/hooks/useEffect/page.tsx
src/app/hooks/useState/page.tsx
```

### Componentes disponibles
```bash
src/components/layout/LeftPanel.tsx
src/components/layout/RightPanel.tsx
src/components/HookPageLayout.tsx
src/components/CodeDisplay.tsx
```

---

## ⚡ ATAJOS DE TECLADO

```bash
# Verificar progreso rápido
grep -l "LeftPanel" src/app/patterns/*/page.tsx | wc -l

# Ver hooks pendientes
for dir in src/app/hooks/*/; do
  if [ -f "$dir/page.tsx" ]; then
    if ! grep -q "HookPageLayout" "$dir/page.tsx"; then
      basename "$dir"
    fi
  fi
done

# Contar líneas de archivo
wc -l src/app/patterns/compound-components/page.tsx

# Ver primeras líneas de archivo
head -50 src/app/patterns/compound-components/page.tsx
```

---

## 🎯 MÉTRICAS DE ÉXITO

Al completar los 20 módulos:
- ✅ 21/21 Patterns (100%)
- ✅ ~20/20 Hooks (100%)
- ✅ 8/8 Architectures (100%)
- ✅ Total: 49/49 módulos (100%)

**Calidad esperada:**
- Descripción completa en español
- 3-4 ejemplos de código
- Demo interactivo
- Responsive design
- Accesibilidad
- SEO metadata

---

Última actualización: 2026-01-15
Próxima sesión: Completar 100%

# Code Review Session - Enero 13, 2026
## Componentes Principales - Análisis y Mejoras

## 🔍 Navbar.tsx - Análisis

### Problemas Identificados

#### 1. **Violación SRP (Single Responsibility)**
- Maneja navegación + dropdown state + mobile menu + data hardcoded
- Debería separarse en: NavbarContainer + NavbarView + NavData

#### 2. **Datos Hardcoded (214 líneas)**
- El objeto `navigation` (líneas 8-99) está en el componente
- Debería estar en archivo separado de constantes

#### 3. **Lógica de UI Mezclada**
- Desktop y Mobile navigation en el mismo componente
- Debería separarse en componentes más pequeños

#### 4. **Falta de Tipos**
- `navigation` no tiene tipos explícitos
- `items` en el map no está tipado

#### 5. **Componente muy grande**
- 224 líneas (límite recomendado: 200)
- Difícil de mantener y testear

### Mejoras Propuestas

1. **Extraer datos a constantes** (`src/lib/constants/navigation.ts`)
2. **Crear tipos** (`src/lib/types/navigation.ts`)
3. **Separar componentes:**
   - `DesktopNav.tsx` - Navegación desktop
   - `MobileNav.tsx` - Navegación móvil
   - `NavDropdown.tsx` - Dropdown reutilizable
4. **Aplicar Container/Presentational**
   - `NavbarContainer` - Lógica y estado
   - `NavbarView` - Solo UI

---

## 🔍 Breadcrumbs.tsx - Análisis

### Problemas Identificados

#### 1. **Datos Hardcoded (103 líneas)**
- `segmentNames` (líneas 8-102) hardcoded
- Debería estar en archivo separado

#### 2. **Función de Formateo Compleja**
- `formatSegment` (líneas 104-126) hace demasiado
- Debería estar en utilidad separada

#### 3. **Falta JSDoc**
- No hay documentación de propósito y uso

### Mejoras Propuestas

1. **Extraer `segmentNames` a constantes**
2. **Mover `formatSegment` a utilities**
3. **Agregar JSDoc**
4. **Crear tipo para breadcrumb**

---

## 🔍 CodeDisplay.tsx - Análisis

### Problemas Identificados

#### 1. **Responsabilidades Múltiples**
- Fetching + highlighting + UI
- Debería separarse

#### 2. **useEffect Complejo**
- Dos useEffect con lógica diferente
- Difícil de seguir

#### 3. **Error Handling Faltante**
- No maneja errores del fetch
- No muestra estado de error

#### 4. **Props Opcionales Confusos**
- `codeContent` o `filePaths` (mutuamente excluyentes)
- Debería usar discriminated union

### Mejoras Propuestas

1. **Custom hook para fetching** (`useCodeContent`)
2. **Custom hook para highlighting** (`useCodeHighlight`)
3. **Error boundary**
4. **Tipos mejorados con discriminated union**
5. **Componentes separados:**
   - `CodeBlock` - Single file display
   - `CodeDisplayView` - Multiple files display

---

## 📊 Métricas Actuales

| Componente | Líneas | Problemas | Prioridad |
|------------|--------|-----------|-----------|
| Navbar.tsx | 224 | 5 mayores | 🔴 Alta |
| Breadcrumbs.tsx | 188 | 3 medianos | 🟡 Media |
| CodeDisplay.tsx | 62 | 4 mayores | 🟠 Alta |

---

## 🎯 Plan de Refactoring

### Fase 1: Extraer Constantes y Tipos (15 min)
- [ ] Crear `src/lib/constants/navigation.ts`
- [ ] Crear `src/lib/constants/breadcrumbs.ts`
- [ ] Crear `src/lib/types/navigation.ts`
- [ ] Crear `src/lib/types/breadcrumb.ts`

### Fase 2: Crear Utilidades (10 min)
- [ ] Crear `src/lib/utils/formatSegment.ts`
- [ ] Crear `src/lib/utils/classNames.ts`

### Fase 3: Custom Hooks (20 min)
- [ ] Crear `src/lib/hooks/useCodeContent.ts`
- [ ] Crear `src/lib/hooks/useCodeHighlight.ts`
- [ ] Crear `src/lib/hooks/useNavigation.ts`

### Fase 4: Refactorizar Navbar (30 min)
- [ ] Crear `DesktopNav.tsx`
- [ ] Crear `MobileNav.tsx`
- [ ] Crear `NavDropdown.tsx`
- [ ] Refactorizar `Navbar.tsx` como container

### Fase 5: Refactorizar Breadcrumbs (15 min)
- [ ] Extraer constantes
- [ ] Agregar JSDoc
- [ ] Mejorar tipos

### Fase 6: Refactorizar CodeDisplay (20 min)
- [ ] Implementar custom hooks
- [ ] Crear `CodeBlock.tsx`
- [ ] Agregar error handling
- [ ] Mejorar tipos

### Fase 7: Testing (20 min)
- [ ] Verificar builds
- [ ] Verificar lint
- [ ] Probar en navegador
- [ ] Documentar cambios

**Total estimado: 2h 10min**

---

## 🚀 Comenzar Refactoring

¿Empezamos con la Fase 1?

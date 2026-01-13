# Layout Components Refactoring - Análisis
**Fecha:** Enero 13, 2026  
**Componentes:** HookPageLayout, ArchitecturePageLayout, StyledText

## 🔍 Análisis de Problemas

### HookPageLayout.tsx (58 líneas)

**Problemas identificados:**
1. **Violación SRP**: Fetching de archivos + layout + renderizado
2. **Código duplicado**: `getCodeContent` duplicada en ambos layouts
3. **Sin tipos separados**: Props interface inline
4. **Sin componentes reutilizables**: Panel izquierdo/derecho hardcoded

**Mejoras necesarias:**
- Extraer `getCodeContent` a utility
- Separar en componentes: LeftPanel, RightPanel
- Crear tipos compartidos
- Eliminar duplicación con ArchitecturePageLayout

---

### ArchitecturePageLayout.tsx (54 líneas)

**Problemas identificados:**
1. **Código duplicado**: 95% igual a HookPageLayout
2. **Mismo `getCodeContent`**: Función repetida
3. **Solo diferencia**: Estilos del panel izquierdo
4. **Violación DRY**: No reutiliza código

**Mejoras necesarias:**
- Unificar con HookPageLayout
- Crear componente base reutilizable
- Props para personalizar estilos
- Eliminar duplicación completa

---

### StyledText.tsx (75 líneas)

**Problemas identificados:**
1. **Función compleja**: 75 líneas, hace demasiado
2. **Lógica de renderizado**: Mezclada con parsing
3. **Sin tests**: Lógica compleja sin validación
4. **Nombres poco claros**: `renderLineContent`

**Mejoras necesarias:**
- Separar parsing de renderizado
- Crear funciones pequeñas y enfocadas
- Mejorar nombres
- Agregar JSDoc
- Preparar para tests

---

## 🎯 Plan de Refactoring

### Fase 1: Utilities (10 min)
- [ ] Crear `src/lib/utils/getCodeContent.ts`
- [ ] Crear tipos en `src/lib/types/layout.ts`

### Fase 2: StyledText Refactoring (15 min)
- [ ] Separar parsing logic
- [ ] Crear funciones pequeñas
- [ ] Mejorar legibilidad
- [ ] Agregar JSDoc

### Fase 3: Layout Components (15 min)
- [ ] Crear `BasePageLayout` componente
- [ ] Crear `LeftPanel` componente
- [ ] Crear `RightPanel` componente
- [ ] Refactorizar HookPageLayout
- [ ] Refactorizar ArchitecturePageLayout

### Fase 4: Testing & Documentation (5 min)
- [ ] Verificar builds
- [ ] Verificar lint
- [ ] Actualizar documentación

**Total estimado:** 45 minutos

---

## 📊 Mejoras Esperadas

### Reducción de Duplicación
- HookPageLayout + ArchitecturePageLayout → 1 BasePageLayout
- De ~110 líneas → ~60 líneas (-45%)

### Mejora de Mantenibilidad
- 1 lugar para actualizar layouts (no 2)
- Componentes reutilizables
- Utilities compartidas

### SOLID Compliance
- SRP: Cada componente una responsabilidad
- DRY: Sin duplicación
- OCP: Extensible vía props

---

## 🚀 Comenzar Refactoring

¿Listo para empezar?

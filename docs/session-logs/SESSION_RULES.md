# 📋 Reglas de Sesión - Laboratory_NEXT

**Documento obligatorio para todas las sesiones de trabajo**

---

## 🎯 REGLA DE ORO

> **Al finalizar CADA sesión, SIEMPRE actualizar toda la documentación relevante**

---

## 🚨 REGLAS DE GIT - MUY IMPORTANTE

### ⛔ PROHIBIDO para Asistentes de IA

**NUNCA ejecutar los siguientes comandos:**
- ❌ `git add` - SOLO el usuario puede agregar archivos
- ❌ `git commit` - SOLO el usuario puede hacer commits
- ❌ `git push` - SOLO el usuario puede hacer push
- ❌ `git tag` - SOLO el usuario puede crear tags
- ❌ `git merge` - SOLO el usuario puede hacer merges
- ❌ `git rebase` - SOLO el usuario puede hacer rebase

### ✅ PERMITIDO para Asistentes de IA

**Solo comandos de lectura:**
- ✅ `git status` - Ver estado
- ✅ `git diff` - Ver cambios
- ✅ `git log` - Ver historial
- ✅ `git show` - Ver commits
- ✅ `git branch` - Listar branches

### 📝 En su lugar, el asistente debe:

1. **Preparar los archivos** (editar, crear, modificar)
2. **Verificar el build** (`yarn build`, `yarn lint`)
3. **Mostrar el status** (`git status`)
4. **SUGERIR los comandos** que el usuario debe ejecutar
5. **ESPERAR** a que el usuario ejecute los comandos git

### Ejemplo de lo que DEBE hacer el asistente:

```bash
# ✅ CORRECTO - Sugerir comandos
echo "Archivos listos para commit. Ejecuta estos comandos:"
echo ""
echo "git add README.md CHANGELOG.md NEXT_STEPS.md"
echo "git commit -m 'docs: update documentation for v3.0.0'"
echo "git push origin main"
```

```bash
# ❌ INCORRECTO - Ejecutar directamente
git add .
git commit -m "..."
git push
```

---

## ✅ Checklist Obligatorio - Cierre de Sesión

### 1. Documentación Principal (OBLIGATORIO)

#### README.md
```bash
□ Actualizar número de versión
□ Actualizar sección "What's New" con cambios relevantes
□ Actualizar stack tecnológico si cambió
□ Actualizar comandos si hay nuevos scripts
□ Verificar enlaces que funcionen
```

#### CHANGELOG.md
```bash
□ Agregar nueva entrada con fecha (formato: YYYY-MM-DD)
□ Usar versionado semántico (MAJOR.MINOR.PATCH)
□ Categorizar cambios:
  - ⬆️ Upgrades (dependencias)
  - ➕ Added (nuevas features)
  - ✏️ Modified (cambios en existente)
  - ❌ Removed (código eliminado)
  - 🔧 Fixed (bugs corregidos)
  - 🔄 Changed (breaking changes)
□ Documentar breaking changes claramente
□ Listar todos los archivos modificados
```

#### NEXT_STEPS.md
```bash
□ Actualizar fecha y versión
□ Marcar tareas completadas en esta sesión
□ Agregar nuevas tareas pendientes
□ Actualizar prioridades
□ Documentar decisiones importantes
□ Actualizar métricas de calidad
```

#### SESSION_[DATE].md
```bash
□ Crear archivo nuevo con fecha actual
□ Incluir:
  - Problema/objetivo inicial
  - Solución implementada
  - Archivos modificados
  - Comandos ejecutados
  - Resultados obtenidos
  - Lecciones aprendidas
  - Próximos pasos
```

### 2. Código y Build (OBLIGATORIO)

```bash
□ Build exitoso confirmado (yarn build)
□ TypeScript sin errores (yarn type-check)
□ Linter ejecutado (yarn lint)
□ Tests pasando si existen (yarn test:ci)
□ No hay console.logs olvidados
□ No hay código comentado sin razón
□ No hay TODOs sin ticket asociado
```

### 3. Git (OBLIGATORIO)

```bash
⚠️  IMPORTANTE: Solo el USUARIO puede ejecutar comandos git
    El asistente SOLO puede sugerir los comandos

□ Git status revisado (asistente puede ejecutar)
□ Archivos staging correctos (USUARIO ejecuta git add)
□ Mensaje de commit descriptivo (USUARIO ejecuta git commit)
□ No hay archivos sensibles (.env, secrets)
□ .gitignore actualizado si es necesario
□ Branch correcto (main o feature)
□ Push a remoto (USUARIO ejecuta git push)
```

### 4. Coherencia (OBLIGATORIO)

```bash
□ Versión consistente en:
  - README.md
  - CHANGELOG.md
  - NEXT_STEPS.md
  - package.json
  - SESSION_*.md
□ Fechas correctas en todos los documentos
□ Enlaces entre documentos funcionando
□ Información no contradictoria
```

---

## 📝 Template: Mensaje de Commit

### Formato Estándar
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Tipos Permitidos
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Solo documentación
- `style`: Formato, punto y coma, etc
- `refactor`: Refactorización de código
- `perf`: Mejora de performance
- `test`: Agregar o corregir tests
- `chore`: Cambios en build, deps, etc
- `ci`: Cambios en CI/CD

### Ejemplos
```bash
# Feature
feat(upgrade): upgrade to Next.js 16 & React 19.2

- Next.js 15.4.1 → 16.1.1
- React 19.1.0 → 19.2.3
- Tailwind CSS v4 configuration
- Migrate from next/config to env vars

BREAKING CHANGES:
- next/config removed
- Runtime configs deprecated

# Bug fix
fix(css): resolve Tailwind v4 parsing error

- Update postcss.config.mjs
- Change to @tailwindcss/postcss plugin
- Update globals.css to use @import syntax

# Documentation
docs(readme): update to version 3.0.0

- Add upgrade information
- Update tech stack
- Add new features section
```

---

## 📅 Workflow de Sesión Completo

### Inicio de Sesión
```bash
# 1. Sincronizar con remoto
git pull origin main

# 2. Verificar estado limpio
git status

# 3. Actualizar dependencias si es necesario
yarn install

# 4. Verificar que todo funciona
yarn build
yarn lint

# 5. Leer NEXT_STEPS.md
# - Revisar tareas pendientes
# - Verificar última actualización
# - Entender contexto
```

### Durante la Sesión
```bash
# Commits frecuentes y pequeños
git add <archivos-relacionados>
git commit -m "feat/fix/docs: descripción clara"

# Testear cambios constantemente
yarn build
yarn test

# Documentar decisiones importantes
# - En comentarios de código
# - En archivos SESSION_*.md
```

### Cierre de Sesión (CRÍTICO)
```bash
# 1. Ejecutar checklist completo de arriba
# Ver sección: "✅ Checklist Obligatorio"

# 2. Actualizar documentación (asistente hace esto)
# - README.md
# - CHANGELOG.md
# - NEXT_STEPS.md
# - SESSION_[DATE].md

# 3. Verificar build final (asistente puede hacer esto)
yarn build
yarn type-check
yarn lint

# 4. Ver status (asistente puede hacer esto)
git status

# 5. USUARIO ejecuta los comandos git:
git add README.md CHANGELOG.md NEXT_STEPS.md SESSION_*.md
git commit -m "docs: update documentation for v[VERSION]"
git push origin main

# 6. USUARIO crea tag si es release mayor
git tag v[VERSION]
git push --tags
```

---

## 🚨 Errores Comunes a Evitar

### ❌ NO hacer (Asistente de IA):
- **NUNCA** ejecutar git add, git commit, git push
- **NUNCA** ejecutar git tag, git merge, git rebase
- Terminar sesión sin actualizar documentación
- Dejar versiones inconsistentes entre archivos
- Olvidar crear SESSION_[DATE].md
- Dejar cambios sin documentar en CHANGELOG
- Ignorar warnings de linter/TypeScript
- Dejar TODOs sin contexto

### ❌ NO hacer (Usuario):
- Hacer commit sin verificar build
- Commitear archivos sensibles
- Terminar sesión sin actualizar documentación
- Dejar versiones inconsistentes

### ✅ SÍ hacer (Asistente de IA):
- Preparar y editar archivos
- Verificar build (yarn build, yarn lint)
- Mostrar git status
- **SUGERIR** comandos git al usuario
- Seguir checklist completo cada vez
- Mensajes de commit descriptivos sugeridos
- Documentar TODOS los cambios importantes
- Resolver warnings antes de sugerir commit

### ✅ SÍ hacer (Usuario):
- Ejecutar comandos git personalmente
- Revisar cambios antes de commit
- Verificar mensajes de commit
- Push a remoto cuando esté listo

---

## 📊 Métricas de Calidad de Sesión

### Sesión Exitosa si:
```
✅ Todas las tareas del checklist completadas
✅ Build exitoso
✅ 0 errores de TypeScript
✅ Tests pasando (si existen)
✅ Documentación actualizada y coherente
✅ Commit(s) con mensajes claros
✅ SESSION_[DATE].md creado
✅ CHANGELOG.md actualizado
✅ README.md actualizado si es necesario
✅ NEXT_STEPS.md actualizado
```

### Sesión Incompleta si falta:
```
⚠️ Cualquier item del checklist
⚠️ Documentación sin actualizar
⚠️ Versiones inconsistentes
⚠️ Build con errores/warnings
⚠️ SESSION_[DATE].md faltante
```

---

## 🎓 Best Practices

### Versionado Semántico
```
MAJOR.MINOR.PATCH

MAJOR: Cambios incompatibles (breaking changes)
MINOR: Nueva funcionalidad compatible
PATCH: Bug fixes compatibles

Ejemplos:
2.1.0 → 3.0.0  (Next.js upgrade - breaking)
3.0.0 → 3.1.0  (Nueva feature)
3.1.0 → 3.1.1  (Bug fix)
```

### Nombres de Archivos de Sesión
```
Formato: SESSION_YYYY-MM-DD_TOPIC.md

Ejemplos:
SESSION_2026-01-13_UPGRADE.md
SESSION_2026-01-13_TESTING.md
SESSION_2026-01-14_PERFORMANCE.md
SESSION_2026-01-14_CI_CD.md
```

### Categorías de CHANGELOG
```
[MAJOR.MINOR.PATCH] - YYYY-MM-DD

### 🚀 Features (MINOR)
### 🔧 Fixes (PATCH)
### 🔄 Breaking Changes (MAJOR)
### ⬆️ Dependencies
### 📝 Documentation
### 🧪 Tests
### ⚡ Performance
### ♿ Accessibility
### 🔒 Security
```

---

## 🔗 Referencias

### Documentos Relacionados
- [README.md](./README.md) - Overview del proyecto
- [CHANGELOG.md](./CHANGELOG.md) - Historial completo
- [NEXT_STEPS.md](./NEXT_STEPS.md) - Próximos pasos
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Arquitectura
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Guía de contribución

### Estándares Externos
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

---

## 📞 Ayuda y Soporte

### Si no sabes qué documentar:
1. Lee el archivo anterior (README, CHANGELOG, NEXT_STEPS)
2. Mira ejemplos en SESSION_*.md anteriores
3. Usa los templates de este documento
4. Pregunta: "¿Qué cambió en esta sesión?"
5. Documenta TODO, es mejor sobre-documentar

### Si algo falla:
1. Revisa el último SESSION_*.md
2. Mira CHANGELOG.md para ver qué cambió
3. Ejecuta comandos de emergencia de NEXT_STEPS.md
4. Revierte al último commit estable si es necesario

---

**Documento:** Reglas de Sesión  
**Versión:** 1.0.0  
**Fecha:** 2026-01-13  
**Status:** ✅ Activo y obligatorio  
**Aplica a:** Todas las sesiones de desarrollo

---

## 🎯 RECORDATORIO FINAL

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  🚨 AL TERMINAR LA SESIÓN, ACTUALIZAR:         │
│                                                 │
│  ✅ README.md                                   │
│  ✅ CHANGELOG.md                                │
│  ✅ NEXT_STEPS.md                               │
│  ✅ SESSION_[DATE].md (crear)                   │
│                                                 │
│  NO OMITIR - ES OBLIGATORIO                     │
│                                                 │
└─────────────────────────────────────────────────┘
```

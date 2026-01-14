#!/bin/bash

# Script para hacer commit de todos los cambios realizados en la sesión
# Uso: ./git-commit.sh

echo "🚀 Preparando commit de los cambios..."

# Añadir archivos borrados
git rm ALL_SECTIONS_IMPROVEMENTS.md
git rm ALL_SESSIONS_COMPLETE.md
git rm CI_CD_GUIDE.md
git rm DEPLOYMENT_GUIDE.md
git rm HOOK_EXAMPLES_IMPROVEMENTS.md
git rm LAYOUT_REFACTOR_PLAN.md
git rm PROJECT_STATUS.md
git rm PROYECTO_COMPLETADO.md
git rm PROYECTO_MEJORADO.md
git rm QUICK_DEPLOY.md
git rm QUICK_REFERENCE.md
git rm REFACTOR_COMPLETE_GUIDE.md
git rm RESUMEN_EJECUTIVO.md
git rm SESSION_2026-01-13.md
git rm SESSION_2026-01-13_TESTING.md
git rm SESSION_2026-01-13_UPGRADE.md
git rm SESSION_CICD_IMPLEMENTATION.md
git rm SESSION_COMPLETE_2026-01-13.md
git rm SESSION_FINAL_2026-01-13.md
git rm SESSION_FINAL_CLOSURE.md
git rm SESSION_LAYOUT_REFACTOR.md
git rm SESSION_READY.md
git rm SESSION_REFACTOR_COMPLETE.md
git rm SESSION_REFACTOR_PART1.md
git rm SESSION_RULES.md
git rm SESSION_TESTING_IMPLEMENTATION.md
git rm TESTING_STATUS.md

# Añadir archivos modificados
git add src/app/globals.css
git add src/app/page.tsx
git add src/lib/constants/navigation.ts
git add tsconfig.json

# Añadir nuevos archivos
git add COMPLETE_CHECKLIST_2026-01-14.md
git add COMPLETE_SESSION_SUMMARY.md
git add MODULE_STATUS_2026.md
git add SESSION_FINAL_2026-01-14.md
git add docs/

# Añadir todos los nuevos módulos
git add src/app/algorithms/
git add src/app/apis/
git add src/app/auth/
git add src/app/build-tools/
git add src/app/cicd/
git add src/app/cloud/
git add src/app/data-fetching/
git add src/app/data-structures/
git add src/app/design/
git add src/app/devops/
git add src/app/graphql/
git add src/app/hooks/custom-hooks-advanced/
git add src/app/hooks/custom-hooks-patterns/
git add src/app/hooks/react-hooks/
git add src/app/javascript/
git add src/app/methodologies/
git add src/app/mobile/
git add src/app/performance/
git add src/app/pwa/
git add src/app/real-time/
git add src/app/security/
git add src/app/soft-skills/
git add src/app/state-management/react-hooks/
git add src/app/styling/
git add src/app/testing/
git add src/app/tools/
git add src/app/typescript/
git add src/app/ui-libraries/
git add src/app/validation/

echo "✅ Archivos añadidos al staging area"
echo ""
echo "📊 Estado del repositorio:"
git --no-pager status --short

echo ""
echo "🎯 Haciendo commit..."
git commit -m "feat: massive module expansion and color palette update

- Updated color palette for better contrast and accessibility
- Added 50+ new learning modules covering:
  * GraphQL, Apollo Client, WebSockets, RxJS
  * CI/CD pipelines, AWS, Azure, Docker, Prometheus
  * TanStack Query, JWT authentication
  * Data structures & algorithms (basic & advanced)
  * TypeScript comprehensive coverage
  * Testing: TDD, unit, integration, E2E, Jest, Mocha, Cypress, Enzyme
  * Mobile: Capacitor, Cordova
  * Performance optimization, rate limiting
  * PWA, Turbopack, Webpack
  * Security (frontend best practices)
  * Accessibility (WCAG, ARIA)
  * ORM: Prisma
  * UI libraries: AG Grid, Three.js, Storybook
  * Tools: Turborepo, DataDoc, Zod
  * Methodologies: Scrum, Agile
  * Soft skills: stakeholder management, tech lead skills
  * JavaScript elite/advanced features
  * Custom hooks patterns with extensive examples
  * CSS/SASS strategies and patterns
  * API protocols: gRPC, SOAP, Webhooks
  
- Improved existing modules
- Organized project structure
- Removed outdated documentation files
- Enhanced navigation and module organization"

echo ""
echo "✨ Commit completado exitosamente!"
echo ""
echo "📤 Para hacer push ejecuta:"
echo "   git push origin main"

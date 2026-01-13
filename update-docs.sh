#!/bin/bash

# Script para recordar actualizar documentación al final de cada sesión
# Uso: ./update-docs.sh

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 CHECKLIST DE CIERRE DE SESIÓN - Laboratory_NEXT"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}1. VERIFICAR BUILD${NC}"
echo "   □ yarn build"
echo "   □ yarn type-check"
echo "   □ yarn lint"
echo ""

echo -e "${YELLOW}2. DOCUMENTACIÓN OBLIGATORIA${NC}"
echo "   □ README.md - Actualizar versión y 'What's New'"
echo "   □ CHANGELOG.md - Nueva entrada con fecha"
echo "   □ NEXT_STEPS.md - Actualizar tareas y fecha"
echo "   □ SESSION_[DATE].md - Crear nuevo archivo de sesión"
echo "   □ PROJECT_STATUS.md - Actualizar métricas"
echo ""

echo -e "${YELLOW}3. GIT STATUS${NC}"
echo "   □ git status - Revisar archivos modificados"
echo "   □ git diff - Verificar cambios"
echo ""

echo -e "${YELLOW}4. VERSIÓN CONSISTENTE EN:${NC}"
echo "   □ README.md"
echo "   □ CHANGELOG.md"
echo "   □ NEXT_STEPS.md"
echo "   □ package.json"
echo ""

read -p "¿Has completado todos los items del checklist? (s/n): " response

if [[ "$response" == "s" || "$response" == "S" ]]; then
    echo -e "${GREEN}✅ Excelente! Procediendo...${NC}"
    echo ""
    
    # Mostrar archivos modificados
    echo -e "${YELLOW}Archivos modificados:${NC}"
    git status --short
    echo ""
    
    # Sugerencia de commit
    echo -e "${YELLOW}Sugerencia de comandos:${NC}"
    echo "git add README.md CHANGELOG.md NEXT_STEPS.md SESSION_*.md PROJECT_STATUS.md"
    echo "git commit -m 'docs: update documentation for v[VERSION]'"
    echo "git push origin main"
    echo ""
    
else
    echo -e "${RED}⚠️  Por favor completa el checklist antes de continuar${NC}"
    echo ""
    echo "Archivos que debes revisar:"
    echo "  - README.md"
    echo "  - CHANGELOG.md"
    echo "  - NEXT_STEPS.md"
    echo "  - SESSION_[DATE].md (crear si no existe)"
    echo "  - PROJECT_STATUS.md"
    echo ""
    echo "Ver SESSION_RULES.md para más detalles"
    exit 1
fi

'use client';

import { useState } from 'react';

export default function StylingPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'bestPractices'>('overview');

  const content: Record<'overview' | 'bestPractices', string> = {
    overview: `
# 🎨 CSS/SCSS Architecture & Patterns - Guía Completa

## Estrategias y Metodologías Modernas

### 1️⃣ CSS-in-JS
**Librerías:** Styled Components (deprecated), Emotion, Stitches

**✅ Ventajas:**
- Scoped styles automático
- Dynamic styling con props
- TypeScript support
- Dead code elimination

**❌ Desventajas:**
- Runtime overhead
- SSR complexity
- Larger bundle sizes
- Styled Components está deprecated

**Ejemplo (Emotion):**
\`\`\`tsx
import { css } from '@emotion/react';

const button = css\\\`
  background: var(--primary);
  color: white;
  padding: 12px 24px;
  &:hover { background: var(--primary-hover); }
\\\`;

<button css={button}>Click</button>
\`\`\`

### 2️⃣ CSS Modules
**Status:** ✅ Recomendado para Next.js

**✅ Ventajas:**
- Zero runtime  
- Scoped por defecto
- Works con SSR
- Framework agnostic

### 3️⃣ Tailwind CSS
**Status:** ✅ Más popular actualmente

**✅ Ventajas:**
- Utility-first
- Tiny bundle size (purge unused)
- Design system consistency  
- Rapid development

### 4️⃣ Sass/SCSS
**Status:** ✅ Still relevant

**✅ Ventajas:**
- Variables, mixins, functions
- Nesting
- Modular imports
- Mature ecosystem

## 🏗️ Arquitecturas CSS

### BEM (Block Element Modifier)
.card {}
.card__title {}  
.card--featured {}

### ITCSS (Inverted Triangle CSS)
settings/ → Variables
tools/ → Mixins
generic/ → Reset
elements/ → Base elements
objects/ → Layout patterns
components/ → UI components
utilities/ → Helpers

### SMACSS
- Base (defaults)
- Layout (l-header, l-sidebar)
- Module (components)
- State (is-active, is-hidden)
- Theme (theme-dark)

## ⚡ CSS Custom Properties (Variables)

**Mejor que Sass variables:**
- Runtime changeable
- Scope controllable
- Works con calc()
- Theme switching fácil

\`\`\`css
:root {
  --spacing-unit: 8px;
  --primary: #0056b3;
}

.card {
  padding: calc(var(--spacing-unit) * 2);
  color: var(--primary);
}

[data-theme="dark"] {
  --primary: #4a9eff;
}
\`\`\`

## 🎯 Modern Alternatives a Styled Components

### 1. Vanilla Extract (Zero-runtime, Type-safe)
### 2. Panda CSS (Like Tailwind but type-safe)
### 3. Linaria (Zero-runtime CSS-in-JS)
### 4. Tailwind + CVA (Class Variance Authority)

## 📊 Comparación para Next.js/React

| Solución | Runtime | TypeSafety | Performance | DX |
|----------|---------|------------|-------------|-----|
| Tailwind CSS | ⚡ Zero | ✅ (variants) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| CSS Modules | ⚡ Zero | ❌ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Vanilla Extract | ⚡ Zero | ✅✅✅ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Panda CSS | ⚡ Zero | ✅✅ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Styled Comp. | ❌ Runtime | ✅ | ⭐⭐⭐ | ⭐⭐⭐⭐ |

## 🏆 Recomendaciones por Caso de Uso

### Startup / MVP
→ **Tailwind CSS** (velocidad de desarrollo)

### Design System  
→ **Vanilla Extract** o **Panda CSS** (type-safety)

### Legacy Migration
→ **CSS Modules** (mínima fricción)

### Component Library
→ **Vanilla Extract** + **CVA** (best of both)

### E-commerce / Landing Pages
→ **Tailwind CSS** (rapid iteration)
    `,
    bestPractices: `
# 🏆 Best Practices & Anti-Patterns

## ✅ DO's

### 1. Use CSS Custom Properties for Theming
\`\`\`css
/* ✅ GOOD */
.button {
  background: var(--button-bg, var(--primary));
  color: var(--button-color, white);
}

/* ❌ BAD */
.button {
  background: #0056b3;
  color: white;
}
\`\`\`

### 2. Mobile-First Responsive Design
\`\`\`css
/* ✅ GOOD */
.grid {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* ❌ BAD */
.grid {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 1023px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
\`\`\`

### 3. Accessibility First
\`\`\`css
.button:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
\`\`\`

### 4. Performance: Avoid Expensive Properties
\`\`\`css
/* ✅ GOOD: GPU-accelerated */
.modal {
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
}

/* ❌ BAD: Triggers layout reflow */
.modal {
  top: 100%;
  height: auto;
  transition: top 0.3s, height 0.3s;
}
\`\`\`

## ❌ DON'Ts - Anti-Patterns

### 1. Never Use !important (except utilities)
### 2. Don't Nest Too Deep (max 3 levels)
### 3. Don't Use Magic Numbers
### 4. Don't Overuse Preprocessor Features  
### 5. Don't Abuse Global Styles

## 📊 Performance Checklist

- ✅ Use CSS containment: contain: layout style paint;
- ✅ Minimize repaints with will-change (sparingly)
- ✅ Use content-visibility: auto for long lists
- ✅ Prefer transform and opacity for animations
- ✅ Use @layer to control cascade
- ✅ Purge unused CSS in production
- ✅ Load critical CSS inline
- ✅ Use CSS custom properties for runtime theming
    `
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--primary)' }}>
          🎨 CSS/SCSS Architecture & Modern Styling
        </h1>
        <p className="text-lg mb-6 max-w-3xl leading-relaxed" style={{ opacity: 0.9 }}>
          Domina estrategias, paradigmas y arquitecturas CSS modernas. Desde metodologías probadas 
          hasta soluciones de última generación para aplicaciones escalables.
        </p>

        <div className="flex gap-2 mb-6 border-b" style={{ borderColor: 'var(--border)' }}>
          {([
            { id: 'overview' as const, label: '📚 Overview' },
            { id: 'bestPractices' as const, label: '🏆 Best Practices' }
          ] as const).map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-6 py-3 font-medium transition-colors"
              style={{
                color: activeTab === tab.id ? 'var(--primary)' : 'var(--foreground)',
                borderBottom: activeTab === tab.id ? '2px solid var(--primary)' : 'none',
                opacity: activeTab === tab.id ? 1 : 0.6
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="prose max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>
            {content[activeTab]}
          </pre>
        </div>
      </div>
    </div>
  );
}

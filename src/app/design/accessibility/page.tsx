import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import { AccessibilityDemo } from './_client_example';

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Accessibility Standards (WCAG, ARIA)"
        description="**Construye aplicaciones inclusivas que todos puedan usar.** Aprende los estándares WCAG 2.1 y ARIA para crear interfaces accesibles.

**WCAG 2.1 - 4 Principios (POUR):**
- **Perceivable**: La información debe ser presentable a los usuarios de formas que puedan percibir
- **Operable**: Los componentes de interfaz deben ser operables
- **Understandable**: La información y operación deben ser comprensibles
- **Robust**: El contenido debe ser lo suficientemente robusto para funcionar con tecnologías asistivas

**Niveles de Conformidad:**
- **Nivel A**: Básico (mínimo)
- **Nivel AA**: Óptimo (estándar legal en muchos países)
- **Nivel AAA**: Avanzado (mejores prácticas)

**ARIA (Accessible Rich Internet Applications):**
- Roles: Definen qué es un elemento
- Properties: Describen características
- States: Describen el estado actual

**Por qué importa:**
- 15% de la población mundial tiene alguna discapacidad
- Es legalmente requerido en muchas jurisdicciones
- Mejora la UX para todos los usuarios
- Mejora el SEO"
        codeContent={[
          {
            filePath: 'basics/semantic-html.tsx',
            content: `// ❌ MAL - Divs sin significado
<div onClick={handleClick}>Click me</div>

// ✅ BIEN - Elementos semánticos
<button onClick={handleClick}>Click me</button>

// Estructura semántica
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Título del Artículo</h1>
    <p>Contenido...</p>
  </article>
  
  <aside>
    <h2>Relacionado</h2>
  </aside>
</main>

<footer>
  <p>&copy; 2024</p>
</footer>`,
          },
          {
            filePath: 'wcag/alt-text.tsx',
            content: `// Texto Alternativo (WCAG 1.1.1 - Nivel A)

// ❌ MAL
<img src="logo.png" />
<img src="chart.png" alt="chart" />

// ✅ BIEN
<img src="logo.png" alt="Company Logo" />
<img src="chart.png" alt="Sales increased 25% in Q4" />

// Imágenes decorativas
<img src="decoration.png" alt="" /> // alt vacío, no omitir

// Imágenes complejas
<figure>
  <img 
    src="complex-chart.png" 
    alt="Bar chart showing quarterly sales"
    aria-describedby="chart-desc"
  />
  <figcaption id="chart-desc">
    Detailed description: Q1: $10k, Q2: $15k, Q3: $12k, Q4: $20k
  </figcaption>
</figure>`,
          },
          {
            filePath: 'wcag/keyboard-navigation.tsx',
            content: `// Navegación por teclado (WCAG 2.1.1 - Nivel A)

// ✅ Todos los elementos interactivos deben ser accesibles por teclado
function AccessibleButton() {
  return (
    <button
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      Click me
    </button>
  );
}

// Custom interactive element
function CustomButton({ onClick, children }: Props) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {children}
    </div>
  );
}

// Skip links
function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav>...</nav>
      <main id="main-content">...</main>
    </>
  );
}`,
          },
          {
            filePath: 'wcag/color-contrast.tsx',
            content: `// Contraste de Color (WCAG 1.4.3 - Nivel AA)

// Ratios requeridos:
// - Texto normal: 4.5:1 mínimo
// - Texto grande (18pt+): 3:1 mínimo
// - Nivel AAA: 7:1 (texto normal), 4.5:1 (texto grande)

// ✅ BIEN - Alto contraste
const goodContrast = {
  background: '#ffffff',
  text: '#1a1a1a',        // Ratio: ~15:1
  primary: '#0066cc',     // Ratio: ~8:1
  success: '#16a34a',     // Ratio: ~4.5:1
};

// ❌ MAL - Bajo contraste
const badContrast = {
  background: '#ffffff',
  text: '#cccccc',        // Ratio: 1.6:1 ❌
  primary: '#ffcc00',     // Ratio: 1.3:1 ❌
};

// No confiar solo en color
function Status({ type }: { type: 'success' | 'error' }) {
  return (
    <div>
      {/* ❌ Solo color */}
      <span style={{ color: type === 'success' ? 'green' : 'red' }}>
        Message
      </span>
      
      {/* ✅ Color + icono + texto */}
      <span style={{ color: type === 'success' ? '#16a34a' : '#dc2626' }}>
        {type === 'success' ? '✓' : '✗'} 
        {type === 'success' ? 'Success' : 'Error'}
      </span>
    </div>
  );
}`,
          },
          {
            filePath: 'aria/roles.tsx',
            content: `// ARIA Roles

// Landmark roles (estructura)
<header role="banner">
  <nav role="navigation" aria-label="Main">
    ...
  </nav>
</header>

<main role="main">
  <article role="article">...</article>
  <aside role="complementary">...</aside>
</main>

<footer role="contentinfo">...</footer>

// Widget roles
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel-1">
    Tab 1
  </button>
  <button role="tab" aria-selected="false" aria-controls="panel-2">
    Tab 2
  </button>
</div>

<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">
  Content 1
</div>

// Alert role
<div role="alert" aria-live="assertive">
  Error: Form submission failed
</div>

// Dialog role
<div 
  role="dialog" 
  aria-labelledby="dialog-title"
  aria-describedby="dialog-desc"
  aria-modal="true"
>
  <h2 id="dialog-title">Confirm Action</h2>
  <p id="dialog-desc">Are you sure?</p>
</div>`,
          },
          {
            filePath: 'aria/properties-states.tsx',
            content: `// ARIA Properties y States

// aria-label: Etiqueta invisible
<button aria-label="Close dialog">
  <XIcon />
</button>

// aria-labelledby: Referencia a etiqueta visible
<div>
  <h2 id="section-title">User Settings</h2>
  <div aria-labelledby="section-title">
    ...
  </div>
</div>

// aria-describedby: Descripción adicional
<input
  type="password"
  aria-describedby="password-requirements"
/>
<div id="password-requirements">
  Must be at least 8 characters
</div>

// aria-expanded: Estado de expansión
<button 
  aria-expanded={isOpen}
  aria-controls="menu"
  onClick={() => setIsOpen(!isOpen)}
>
  Menu
</button>
<div id="menu" hidden={!isOpen}>
  ...
</div>

// aria-hidden: Ocultar de screen readers
<span aria-hidden="true">👍</span>
<span className="sr-only">Thumbs up</span>

// aria-live: Actualizaciones dinámicas
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>

// aria-live values:
// - "off": No announce
// - "polite": Announce when idle
// - "assertive": Announce immediately

// aria-invalid: Estado de error
<input
  type="email"
  aria-invalid={!isValid}
  aria-errormessage={!isValid ? "email-error" : undefined}
/>
{!isValid && (
  <div id="email-error" role="alert">
    Please enter a valid email
  </div>
)}`,
          },
          {
            filePath: 'patterns/accessible-modal.tsx',
            content: `'use client';

import { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function AccessibleModal({ isOpen, onClose, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Guardar el elemento con foco actual
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      // Focus trap
      const focusableElements = modalRef.current?.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
      
      // Prevenir scroll del body
      document.body.style.overflow = 'hidden';
    } else {
      // Restaurar foco
      previousFocusRef.current?.focus();
      document.body.style.overflow = '';
    }

    // ESC para cerrar
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="bg-white rounded-lg p-6 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="modal-title" className="text-xl font-bold">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 hover:bg-gray-100 rounded"
          >
            ✕
          </button>
        </div>
        
        <div>{children}</div>
      </div>
    </div>
  );
}`,
          },
          {
            filePath: 'patterns/accessible-form.tsx',
            content: `'use client';

import { useState } from 'react';

export function AccessibleForm() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('Email is required');
      return false;
    }
    if (!value.includes('@')) {
      setEmailError('Please enter a valid email');
      return false;
    }
    setEmailError('');
    return true;
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (validateEmail(email)) {
        console.log('Submit:', email);
      }
    }}>
      <div>
        {/* Label explícito */}
        <label htmlFor="email-input" className="block mb-2">
          Email Address
          <span aria-label="required">*</span>
        </label>
        
        <input
          id="email-input"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) validateEmail(e.target.value);
          }}
          onBlur={() => validateEmail(email)}
          aria-invalid={!!emailError}
          aria-describedby={emailError ? 'email-error' : 'email-hint'}
          aria-required="true"
          className="border p-2 w-full"
        />
        
        {/* Hint text */}
        {!emailError && (
          <div id="email-hint" className="text-sm text-gray-600 mt-1">
            We'll never share your email
          </div>
        )}
        
        {/* Error message */}
        {emailError && (
          <div id="email-error" role="alert" className="text-red-600 mt-1">
            {emailError}
          </div>
        )}
      </div>
      
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
}`,
          },
          {
            filePath: 'testing/accessibility-testing.ts',
            content: `// Testing de Accessibility

// 1. Herramientas automáticas
// - axe-core (Jest/Playwright)
// - Lighthouse CI
// - Pa11y

// 2. Testing manual
// - Navegación por teclado (Tab, Shift+Tab, Enter, Space, Arrows)
// - Screen reader (NVDA, JAWS, VoiceOver)
// - Zoom al 200%
// - Modo alto contraste

// Example con jest-axe
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

// Playwright accessibility testing
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should not have accessibility violations', async ({ page }) => {
  await page.goto('/');
  
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();
  
  expect(accessibilityScanResults.violations).toEqual([]);
});`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Accessibility Standards</h2>
          <AccessibilityDemo />
        </div>
      </RightPanel>
    </div>
  );
}

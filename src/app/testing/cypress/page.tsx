import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cypress - E2E Testing',
  description: '🧪 Cypress - El framework de testing E2E que cambió las reglas del juego con time-travel debugging, automatic waiting y developer experience excepcional. Usado por Nike, Disney, Siemens para garantizar calidad en producción'
};

export default function CypressPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-5xl">🧪</span>
          <h1 className="text-4xl font-bold">Cypress E2E Testing</h1>
        </div>
        <p className="text-lg leading-relaxed max-w-3xl" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
          El framework moderno y completo para End-to-End testing, Component testing e Integration testing. 
          Cypress eliminó los problemas clásicos del testing E2E (flaky tests, sleeps, complex setup) con 
          una arquitectura innovadora que ejecuta tests EN el browser, no fuera de él.
        </p>
        <div className="flex gap-3 flex-wrap">
          <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'var(--panel)', border: '1px solid var(--primary)' }}>
            ⏱️ Time Travel
          </span>
          <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'var(--panel)', border: '1px solid var(--primary)' }}>
            🎥 Auto Screenshots
          </span>
          <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'var(--panel)', border: '1px solid var(--primary)' }}>
            🔄 Real-time Reload
          </span>
          <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'var(--panel)', border: '1px solid var(--primary)' }}>
            🌐 Network Control
          </span>
        </div>
      </div>

      <section className="space-y-6" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '4px solid var(--primary)' }}>
        <div>
          <h2 className="text-2xl font-bold mb-3">🚀 Por qué Cypress cambió el testing E2E</h2>
          <p className="mb-4" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
            Antes de Cypress, E2E testing era sinónimo de frustración: tests frágiles, sleeps everywhere, 
            debugging imposible, setup complejo. Cypress resolvió estos problemas con una arquitectura revolucionaria.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">✨ Ventajas Game-Changing</h3>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">⏱️</span>
              <div>
                <strong>Time Travel Debugging:</strong> Ve snapshots de CADA step del test. Hover sobre comandos 
                para ver el estado exacto del DOM en ese momento. Es como DevTools + debugger integrado.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🔄</span>
              <div>
                <strong>Automatic Waiting:</strong> Cypress espera automáticamente a que elementos existan, sean 
                visibles, estén enabled. ZERO sleeps, ZERO race conditions. Adiós cy.wait(5000)
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <strong>Real-time Reload:</strong> Guarda el test, Cypress lo reejec uta automáticamente. 
                Ciclo de desarrollo ultrarrápido como en desarrollo normal.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🌐</span>
              <div>
                <strong>Network Traffic Control:</strong> Intercepta, modifica o mockea CUALQUIER request. 
                Testea error states sin necesitar backend fallando.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📸</span>
              <div>
                <strong>Screenshots & Videos Automáticos:</strong> Cada test failure captura screenshot. 
                En CI, graba video completo. Debugging post-mortem trivial.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🐛</span>
              <div>
                <strong>Debugger Integrado:</strong> Usa debugger; directamente en tests. Inspecciona state, 
                DOM, network en el momento exacto del failure.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📦</span>
              <div>
                <strong>Zero Config:</strong> npm install cypress, cy.open() y ya. No webpack, no babel config, 
                no setup hell. Funciona out-of-the-box.
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Ejemplos Prácticos</h2>
        
        <div className="space-y-4">
          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">1. Test Básico de Login</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login successfully', () => {
    cy.get('[data-testid="email"]')
      .type('user@example.com');
    
    cy.get('[data-testid="password"]')
      .type('password123');
    
    cy.get('[data-testid="submit"]').click();
    
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome back').should('be.visible');
  });

  it('should show error for invalid credentials', () => {
    cy.get('[data-testid="email"]').type('wrong@example.com');
    cy.get('[data-testid="password"]').type('wrong');
    cy.get('[data-testid="submit"]').click();
    
    cy.contains('Invalid credentials').should('be.visible');
  });
});`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">2. Network Mocking</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`describe('API Testing', () => {
  it('should handle API responses', () => {
    // Interceptar y mockear request
    cy.intercept('GET', '/api/users', {
      statusCode: 200,
      body: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
      ]
    }).as('getUsers');

    cy.visit('/users');
    cy.wait('@getUsers');
    
    cy.contains('John').should('be.visible');
    cy.contains('Jane').should('be.visible');
  });

  it('should handle API errors', () => {
    cy.intercept('GET', '/api/users', {
      statusCode: 500,
      body: { error: 'Server error' }
    });

    cy.visit('/users');
    cy.contains('Error loading users').should('be.visible');
  });
});`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">3. Custom Commands</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// cypress/support/commands.ts
Cypress.Commands.add('login', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/login');
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(password);
    cy.get('[data-testid="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});

// Uso en tests
describe('Dashboard', () => {
  beforeEach(() => {
    cy.login('user@example.com', 'password123');
    cy.visit('/dashboard');
  });

  it('should display user data', () => {
    cy.contains('My Dashboard').should('be.visible');
  });
});`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">4. Assertions Comunes</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Visibility
cy.get('.element').should('be.visible');
cy.get('.element').should('not.exist');

// Text content
cy.get('.element').should('contain', 'text');
cy.get('.element').should('have.text', 'exact text');

// Attributes
cy.get('input').should('have.attr', 'placeholder', 'Email');
cy.get('button').should('be.disabled');
cy.get('input').should('have.value', 'value');

// Classes
cy.get('.element').should('have.class', 'active');

// Length
cy.get('li').should('have.length', 5);

// URL
cy.url().should('eq', 'https://example.com/page');
cy.url().should('include', '/dashboard');`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">5. Component Testing</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import Button from './Button';

describe('Button Component', () => {
  it('should render and be clickable', () => {
    const onClick = cy.stub().as('onClick');
    cy.mount(<Button onClick={onClick}>Click me</Button>);
    
    cy.get('button').should('be.visible');
    cy.get('button').click();
    cy.get('@onClick').should('have.been.calledOnce');
  });

  it('should be disabled when prop is set', () => {
    cy.mount(<Button disabled>Disabled</Button>);
    cy.get('button').should('be.disabled');
  });
});`}
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Usa data-testid en lugar de selectores CSS frágiles</li>
          <li>No uses cy.wait() con tiempos fijos, usa aliases</li>
          <li>Crea custom commands para acciones repetitivas</li>
          <li>Usa cy.session() para optimizar autenticación</li>
          <li>Intercepta network requests cuando sea posible</li>
          <li>Mantén los tests independientes</li>
          <li>Usa beforeEach para setup común</li>
        </ul>
      </section>

      <div className="mt-8">
        <Link 
          href="/testing"
          style={{ color: 'var(--primary)' }}
          className="hover:underline"
        >
          ← Volver a Testing
        </Link>
      </div>
    </div>
  );
}

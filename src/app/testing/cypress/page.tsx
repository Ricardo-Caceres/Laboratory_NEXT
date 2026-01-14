import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cypress - E2E Testing',
  description: 'Framework moderno para testing end-to-end'
};

export default function CypressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Cypress E2E Testing</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Framework completo para testing E2E, component testing e integration testing.
        </p>
      </div>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Ventajas de Cypress</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Time travel - Debug con snapshots</li>
          <li>Real-time reload automático</li>
          <li>Automatic waiting (no más sleeps)</li>
          <li>Network traffic control</li>
          <li>Screenshots y videos automáticos</li>
          <li>Debugger integrado</li>
        </ul>
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

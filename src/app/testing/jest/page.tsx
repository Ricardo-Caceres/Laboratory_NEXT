import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jest - Testing Framework',
  description: 'Aprende Jest para testing unitario en JavaScript y React'
};

export default function JestPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Jest Testing Framework</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Framework de testing completo con zero-config para JavaScript y React.
        </p>
      </div>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Características Clave</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Zero configuration - Funciona out of the box</li>
          <li>Snapshot testing para componentes</li>
          <li>Mocking potente y fácil</li>
          <li>Coverage de código integrado</li>
          <li>Fast watch mode</li>
          <li>Parallel test execution</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Conceptos Fundamentales</h2>
        
        <div className="space-y-4">
          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">1. Test Básico</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`describe('Calculator', () => {
  test('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">2. Testing React Components</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  
  fireEvent.click(screen.getByText('Click'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">3. Mocking</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Mock de función
const mockFn = jest.fn();
mockFn.mockReturnValue(42);

// Mock de módulo
jest.mock('./api', () => ({
  fetchUser: jest.fn(() => 
    Promise.resolve({ id: 1, name: 'John' })
  )
}));

// Mock de timer
jest.useFakeTimers();
jest.advanceTimersByTime(1000);`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">4. Matchers Comunes</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Igualdad
expect(value).toBe(4);
expect(value).toEqual({ name: 'John' });

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();

// Números
expect(value).toBeGreaterThan(3);
expect(value).toBeLessThan(5);
expect(value).toBeCloseTo(0.3);

// Strings
expect(value).toMatch(/pattern/);

// Arrays
expect(array).toContain('item');
expect(array).toHaveLength(3);

// Exceptions
expect(() => fn()).toThrow();`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">5. Async Testing</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Promises
test('fetches data', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

// Async/Await
test('fetches data async', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

// Callbacks
test('callback test', done => {
  fetchData(data => {
    expect(data).toBe('peanut butter');
    done();
  });
});`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">6. Setup y Teardown</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`beforeAll(() => {
  // Runs once before all tests
  return initializeDatabase();
});

afterAll(() => {
  // Runs once after all tests
  return closeDatabase();
});

beforeEach(() => {
  // Runs before each test
  return clearDatabase();
});

afterEach(() => {
  // Runs after each test
  return resetMocks();
});`}
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Usa describe para agrupar tests relacionados</li>
          <li>Nombres descriptivos para cada test</li>
          <li>Arrange-Act-Assert pattern</li>
          <li>Mock solo lo necesario</li>
          <li>Tests independientes y aislados</li>
          <li>Usa beforeEach para setup común</li>
          <li>Evita lógica compleja en tests</li>
          <li>Un concepto por test</li>
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

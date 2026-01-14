export default function ReactTestingLibraryPage() {
  return (
    <div className="min-h-screen p-8" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <h1 className="text-4xl font-bold mb-6">React Testing Library</h1>
      
      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>1. Configuración Inicial</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`yarn add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event

// jest.setup.ts
import '@testing-library/jest-dom';`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>2. Queries - Cómo Encontrar Elementos</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { render, screen } from '@testing-library/react';

test('queries examples', () => {
  render(<LoginForm />);
  
  // getBy* - Falla si no encuentra
  const button = screen.getByRole('button', { name: /submit/i });
  
  // queryBy* - Retorna null si no encuentra
  const error = screen.queryByText('Error');
  expect(error).not.toBeInTheDocument();
  
  // findBy* - Async, espera hasta encontrar
  const message = await screen.findByText('Success');
  
  // getAllBy*, queryAllBy*, findAllBy* - Múltiples elementos
  const items = screen.getAllByRole('listitem');
});

// Prioridad de Queries (mejor a peor):
// 1. getByRole - Accesibilidad first
// 2. getByLabelText - Forms
// 3. getByPlaceholderText - Alternativa para inputs
// 4. getByText - Contenido visible
// 5. getByDisplayValue - Input values
// 6. getByAltText - Imágenes
// 7. getByTitle - Title attribute
// 8. getByTestId - Último recurso`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>3. User Interactions</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('user interactions', async () => {
  const user = userEvent.setup();
  render(<SearchForm />);
  
  // Typing
  const input = screen.getByRole('textbox');
  await user.type(input, 'React Testing');
  
  // Click
  const button = screen.getByRole('button');
  await user.click(button);
  
  // Double Click
  await user.dblClick(button);
  
  // Hover
  await user.hover(button);
  
  // Select
  const select = screen.getByRole('combobox');
  await user.selectOptions(select, 'option1');
  
  // Upload File
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });
  const input = screen.getByLabelText(/upload/i);
  await user.upload(input, file);
  
  // Keyboard
  await user.keyboard('{Enter}');
  await user.keyboard('{Shift>}A{/Shift}'); // Shift+A
});`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>4. Async Testing</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { render, screen, waitFor } from '@testing-library/react';

test('async data loading', async () => {
  render(<UserList />);
  
  // findBy - Ya es async
  const user = await screen.findByText('John Doe');
  expect(user).toBeInTheDocument();
  
  // waitFor - Esperar condición
  await waitFor(() => {
    expect(screen.getByRole('list')).toHaveLength(5);
  });
  
  // waitForElementToBeRemoved
  const loading = screen.getByText('Loading...');
  await waitForElementToBeRemoved(loading);
});

test('API mocking', async () => {
  // Mock fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ name: 'John' })
    })
  ) as jest.Mock;
  
  render(<UserProfile id="1" />);
  
  const name = await screen.findByText('John');
  expect(name).toBeInTheDocument();
  
  expect(fetch).toHaveBeenCalledWith('/api/users/1');
});`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>5. Testing Hooks</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { renderHook, act } from '@testing-library/react';

test('custom hook', () => {
  const { result } = renderHook(() => useCounter(0));
  
  expect(result.current.count).toBe(0);
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});

test('hook with props', () => {
  const { result, rerender } = renderHook(
    ({ initialValue }) => useCounter(initialValue),
    { initialProps: { initialValue: 5 } }
  );
  
  expect(result.current.count).toBe(5);
  
  // Cambiar props
  rerender({ initialValue: 10 });
});`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>6. Testing Context y Providers</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`test('component with context', () => {
  render(
    <ThemeProvider theme="dark">
      <Button />
    </ThemeProvider>
  );
  
  const button = screen.getByRole('button');
  expect(button).toHaveClass('dark-theme');
});

// Custom render con providers
function renderWithProviders(
  ui: React.ReactElement,
  options = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    );
  }
  
  return render(ui, { wrapper: Wrapper, ...options });
}

// Uso
test('with all providers', () => {
  renderWithProviders(<MyComponent />);
});`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>7. Testing Router (Next.js)</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

test('navigation', async () => {
  const push = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({ push });
  
  const user = userEvent.setup();
  render(<NavigationButton />);
  
  const button = screen.getByRole('button');
  await user.click(button);
  
  expect(push).toHaveBeenCalledWith('/dashboard');
});`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>8. Accessibility Testing</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('no accessibility violations', async () => {
  const { container } = render(<LoginForm />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('keyboard navigation', async () => {
  const user = userEvent.setup();
  render(<Menu />);
  
  // Tab navigation
  await user.tab();
  expect(screen.getByRole('menuitem', { name: 'Home' })).toHaveFocus();
  
  await user.tab();
  expect(screen.getByRole('menuitem', { name: 'About' })).toHaveFocus();
});`}
        </pre>
      </section>

      <div className="mt-8 p-6 rounded-lg" style={{ background: 'var(--success)', color: '#000' }}>
        <h3 className="text-xl font-semibold mb-2">🎯 Best Practices</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Prueba cómo el usuario interactúa, no detalles de implementación</li>
          <li>Usa getByRole para accesibilidad automática</li>
          <li>Evita getByTestId excepto cuando sea necesario</li>
          <li>Usa userEvent en lugar de fireEvent</li>
          <li>No pruebes implementación de librerías externas</li>
          <li>Mock solo lo necesario (APIs, router)</li>
          <li>Usa screen en lugar de destructuring de render</li>
        </ul>
      </div>
    </div>
  );
}

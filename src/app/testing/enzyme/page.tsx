import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enzyme & Jest - Testing Integration',
  description: 'Testing de componentes React con Enzyme y Jest'
};

export default function EnzymePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Enzyme + Jest Testing</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Testing utilities para React desarrollado por Airbnb, combinado con Jest para testing completo.
        </p>
      </div>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">¿Qué es Enzyme?</h2>
        <p>
          Enzyme es una utilidad de testing para React que facilita las aserciones, manipulación y navegación de componentes.
          Proporciona una API similar a jQuery para manipular el DOM de React.
        </p>
        <div className="space-y-2">
          <h3 className="font-bold">Tipos de Renderizado:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>shallow()</strong> - Renderiza solo el componente, no sus hijos</li>
            <li><strong>mount()</strong> - Renderizado completo incluyendo ciclo de vida</li>
            <li><strong>render()</strong> - Renderiza a HTML estático</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Configuración con Jest</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 className="font-bold mb-2">1. Instalación</h3>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`yarn add -D enzyme enzyme-adapter-react-18
yarn add -D @types/enzyme @types/enzyme-adapter-react-18`}
          </pre>
        </div>

        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 className="font-bold mb-2">2. Setup de Enzyme (setupTests.ts)</h3>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-18';

configure({ adapter: new Adapter() });`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Ejemplos con Shallow Rendering</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 className="font-bold mb-2">Test Básico con Shallow</h3>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { shallow } from 'enzyme';
import Button from './Button';

describe('Button Component', () => {
  it('renders button text', () => {
    const wrapper = shallow(<Button>Click me</Button>);
    expect(wrapper.text()).toBe('Click me');
  });

  it('calls onClick handler', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick}>Click</Button>);
    
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('has correct className', () => {
    const wrapper = shallow(<Button className="primary">Test</Button>);
    expect(wrapper.hasClass('primary')).toBe(true);
  });
});`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Mount - Full Rendering</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 className="font-bold mb-2">Testing con Lifecycle Methods</h3>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { mount } from 'enzyme';
import UserProfile from './UserProfile';

describe('UserProfile with mount', () => {
  it('fetches data on mount', () => {
    const fetchUser = jest.fn();
    const wrapper = mount(
      <UserProfile userId="123" fetchUser={fetchUser} />
    );
    
    expect(fetchUser).toHaveBeenCalledWith('123');
  });

  it('updates on prop change', () => {
    const wrapper = mount(<UserProfile userId="123" />);
    wrapper.setProps({ userId: '456' });
    
    expect(wrapper.find('.user-id').text()).toBe('456');
  });

  it('unmounts cleanly', () => {
    const cleanup = jest.fn();
    const wrapper = mount(<UserProfile onUnmount={cleanup} />);
    
    wrapper.unmount();
    expect(cleanup).toHaveBeenCalled();
  });
});`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Selectores y Navegación</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 className="font-bold mb-2">Diferentes formas de seleccionar elementos</h3>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`const wrapper = shallow(<MyComponent />);

// Por tag HTML
wrapper.find('button');

// Por clase CSS
wrapper.find('.my-class');

// Por ID
wrapper.find('#my-id');

// Por componente
wrapper.find(ChildComponent);

// Por prop
wrapper.find('[data-test="submit"]');

// Combinaciones
wrapper.find('button.primary[disabled=true]');

// Navegación
wrapper.find('li').at(0);           // Primer elemento
wrapper.find('li').first();         // Primer elemento
wrapper.find('li').last();          // Último elemento
wrapper.findWhere(n => n.type() === 'button'); // Condición custom`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Testing de Estados y Props</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 className="font-bold mb-2">Manipulación de State y Props</h3>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`describe('State and Props Testing', () => {
  it('checks initial state', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state('count')).toBe(0);
  });

  it('updates state', () => {
    const wrapper = shallow(<Counter />);
    wrapper.setState({ count: 5 });
    expect(wrapper.state('count')).toBe(5);
  });

  it('checks props', () => {
    const wrapper = shallow(<Display value={42} />);
    expect(wrapper.props().value).toBe(42);
  });

  it('updates props', () => {
    const wrapper = shallow(<Display value={10} />);
    wrapper.setProps({ value: 20 });
    expect(wrapper.props().value).toBe(20);
  });
});`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Snapshot Testing con Enzyme</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 className="font-bold mb-2">Combinar Enzyme con Snapshots de Jest</h3>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Snapshot tests', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Card title="Test" content="Content" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('matches snapshot with different props', () => {
    const wrapper = shallow(
      <Card title="Different" variant="primary" />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Testing de Hooks con Enzyme</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 className="font-bold mb-2">useEffect y useState</h3>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

describe('Hooks Testing', () => {
  it('tests useEffect', async () => {
    const wrapper = mount(<DataFetcher url="/api/data" />);
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    wrapper.update();
    expect(wrapper.find('.data').length).toBeGreaterThan(0);
  });

  it('tests useState updates', () => {
    const wrapper = mount(<Toggle />);
    
    expect(wrapper.find('.status').text()).toBe('off');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.status').text()).toBe('on');
  });
});`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Mocking con Enzyme y Jest</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <h3 className="font-bold mb-2">Mock de módulos y funciones</h3>
          <pre style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`jest.mock('./api', () => ({
  fetchUser: jest.fn(() => Promise.resolve({ name: 'John' }))
}));

describe('Mocking tests', () => {
  it('mocks API calls', async () => {
    const { fetchUser } = require('./api');
    const wrapper = mount(<UserComponent />);
    
    await act(async () => {
      await wrapper.instance().loadUser();
    });
    
    wrapper.update();
    expect(fetchUser).toHaveBeenCalled();
    expect(wrapper.find('.username').text()).toBe('John');
  });

  it('mocks child components', () => {
    const MockChild = () => <div>Mocked</div>;
    jest.mock('./Child', () => MockChild);
    
    const wrapper = shallow(<Parent />);
    expect(wrapper.find(MockChild).length).toBe(1);
  });
});`}
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Best Practices</h2>
        
        <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
          <ul className="list-disc list-inside space-y-2">
            <li>Usa <strong>shallow</strong> cuando sea posible (más rápido)</li>
            <li>Usa <strong>mount</strong> cuando necesites lifecycle methods o refs</li>
            <li>Limpia después de cada test con wrapper.unmount()</li>
            <li>Usa data-test attributes en lugar de clases CSS para selectores</li>
            <li>Combina con Jest matchers para mejores aserciones</li>
            <li>Evita testear detalles de implementación</li>
            <li>Considera React Testing Library para nuevos proyectos</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Enzyme vs React Testing Library</h2>
        <div className="space-y-2">
          <p><strong>Enzyme:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Más control sobre implementación interna</li>
            <li>Manipulación directa de state y props</li>
            <li>Ideal para tests de unidad muy específicos</li>
            <li>Requiere adaptadores para nuevas versiones de React</li>
          </ul>
          <p className="mt-4"><strong>React Testing Library:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Enfoque en testing desde perspectiva del usuario</li>
            <li>No permite acceso a state interno</li>
            <li>Fomenta mejores prácticas de testing</li>
            <li>Mejor soporte para React 18+</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Recursos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a 
              href="https://enzymejs.github.io/enzyme/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--primary)' }}
            >
              Documentación oficial de Enzyme
            </a>
          </li>
          <li>
            <a 
              href="https://jestjs.io/docs/tutorial-react" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--primary)' }}
            >
              Jest con React
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

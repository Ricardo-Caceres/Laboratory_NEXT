/**
 * Enzyme + Jest Testing Module
 * Learn how to test React components with Enzyme and Jest
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enzyme + Jest | Laboratory',
  description: 'Learn how to test React components using Enzyme and Jest together',
};

export default function EnzymeJestPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Enzyme + Jest Testing</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          Enzyme is a JavaScript testing utility for React that makes it easier to test React
          Components' output. When combined with Jest, it provides a powerful testing framework.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# Install Enzyme and adapters
yarn add --dev enzyme @wojtekmaj/enzyme-adapter-react-17
yarn add --dev @types/enzyme

# For React 18
yarn add --dev @cfaester/enzyme-adapter-react-18`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Setup Configuration</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// setupTests.ts
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Shallow Rendering</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`import { shallow } from 'enzyme';
import Button from './Button';

describe('Button Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button>Click me</Button>);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct text', () => {
    const wrapper = shallow(<Button>Submit</Button>);
    expect(wrapper.text()).toBe('Submit');
  });

  it('calls onClick when clicked', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Button onClick={mockFn}>Click</Button>);
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Full DOM Rendering (Mount)</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`import { mount } from 'enzyme';
import Form from './Form';

describe('Form Component', () => {
  it('updates state on input change', () => {
    const wrapper = mount(<Form />);
    const input = wrapper.find('input[name="email"]');
    
    input.simulate('change', {
      target: { name: 'email', value: 'test@example.com' }
    });

    expect(wrapper.find('input[name="email"]').prop('value'))
      .toBe('test@example.com');
  });

  it('submits form with correct data', () => {
    const mockSubmit = jest.fn();
    const wrapper = mount(<Form onSubmit={mockSubmit} />);
    
    wrapper.find('input[name="email"]').simulate('change', {
      target: { name: 'email', value: 'user@test.com' }
    });
    
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    
    expect(mockSubmit).toHaveBeenCalledWith({ email: 'user@test.com' });
  });
});`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Testing Hooks with Enzyme</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Counter from './Counter';

describe('Counter with Hooks', () => {
  it('increments counter on button click', () => {
    const wrapper = mount(<Counter />);
    
    expect(wrapper.find('.count').text()).toBe('0');
    
    act(() => {
      wrapper.find('button.increment').simulate('click');
    });
    wrapper.update();
    
    expect(wrapper.find('.count').text()).toBe('1');
  });

  it('handles async operations', async () => {
    const wrapper = mount(<Counter />);
    
    await act(async () => {
      wrapper.find('button.fetch-data').simulate('click');
    });
    wrapper.update();
    
    expect(wrapper.find('.data').text()).toContain('Loaded');
  });
});`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Enzyme Selectors</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`import { shallow } from 'enzyme';

describe('Enzyme Selectors', () => {
  const wrapper = shallow(<MyComponent />);

  // CSS Selectors
  wrapper.find('.class-name');
  wrapper.find('#id-name');
  wrapper.find('div.container');

  // Component Selectors
  wrapper.find(Button);
  wrapper.find('Button');

  // Prop Selectors
  wrapper.find('[disabled=true]');
  wrapper.find({ type: 'submit' });

  // Multiple selectors
  wrapper.find('button[type="submit"]');

  // Traversal methods
  wrapper.find('form').children();
  wrapper.find('button').parent();
  wrapper.find('li').at(0);
  wrapper.find('li').first();
  wrapper.find('li').last();
});`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Testing Component Lifecycle</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`import { mount } from 'enzyme';

describe('Component Lifecycle', () => {
  it('calls componentDidMount', () => {
    const spy = jest.spyOn(MyComponent.prototype, 'componentDidMount');
    const wrapper = mount(<MyComponent />);
    expect(spy).toHaveBeenCalled();
  });

  it('calls componentWillUnmount on cleanup', () => {
    const spy = jest.spyOn(MyComponent.prototype, 'componentWillUnmount');
    const wrapper = mount(<MyComponent />);
    wrapper.unmount();
    expect(spy).toHaveBeenCalled();
  });

  it('updates on prop change', () => {
    const wrapper = mount(<MyComponent value="initial" />);
    wrapper.setProps({ value: 'updated' });
    expect(wrapper.find('.value').text()).toBe('updated');
  });
});`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Snapshot Testing</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Snapshot Tests', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Card title="Test" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('matches inline snapshot', () => {
    const wrapper = shallow(<Button>Click</Button>);
    expect(wrapper).toMatchInlineSnapshot(\`
      <button className="btn">
        Click
      </button>
    \`);
  });
});`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Advanced Testing Patterns</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`import { mount } from 'enzyme';

describe('Advanced Patterns', () => {
  // Testing Context
  it('provides context to children', () => {
    const wrapper = mount(
      <ThemeContext.Provider value="dark">
        <ThemedButton />
      </ThemeContext.Provider>
    );
    expect(wrapper.find('button').hasClass('dark')).toBe(true);
  });

  // Testing Portals
  it('renders portal content', () => {
    const wrapper = mount(<ModalPortal />);
    expect(wrapper.find('Portal').exists()).toBe(true);
  });

  // Testing Error Boundaries
  it('catches errors in error boundary', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    );
    expect(wrapper.find('.error-message').exists()).toBe(true);
  });
});`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use shallow rendering when possible for better performance</li>
          <li>Use mount when you need to test component lifecycle or DOM interactions</li>
          <li>Clean up after tests with wrapper.unmount()</li>
          <li>Test user behavior, not implementation details</li>
          <li>Use data-testid attributes for reliable selectors</li>
          <li>Mock external dependencies and APIs</li>
          <li>Keep tests focused and isolated</li>
          <li>Consider migrating to React Testing Library for modern React apps</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Note</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-700">
            <strong>⚠️ Important:</strong> Enzyme is no longer actively maintained and doesn't officially
            support React 18+. For new projects, consider using React Testing Library which is
            recommended by the React team. However, Enzyme is still useful for maintaining legacy projects.
          </p>
        </div>
      </section>
    </div>
  );
}

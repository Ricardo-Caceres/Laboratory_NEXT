'use client';

import { createElement, useState } from 'react';

// Helper components created without JSX
const createButton = (text: string, onClick: () => void, variant: 'primary' | 'secondary' = 'primary') => {
  const className = variant === 'primary'
    ? 'px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all'
    : 'px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all';

  return createElement(
    'button',
    { onClick, className },
    text
  );
};

const createCard = (title: string, description: string, children?: React.ReactNode) => {
  return createElement(
    'div',
    { className: 'p-6 bg-white rounded-xl shadow-lg border border-gray-200' },
    createElement('h3', { className: 'text-xl font-bold text-gray-900 mb-2' }, title),
    createElement('p', { className: 'text-gray-600 mb-4' }, description),
    children
  );
};

const createList = (items: string[]) => {
  return createElement(
    'ul',
    { className: 'list-disc pl-6 space-y-2' },
    ...items.map((item, index) =>
      createElement(
        'li',
        { key: index, className: 'text-gray-700' },
        item
      )
    )
  );
};

// Dynamic component factory
function DynamicComponentFactory({ type, content }: { type: string; content: string }) {
  const components: Record<string, React.ReactElement> = {
    heading: createElement('h2', { className: 'text-3xl font-bold text-purple-600 mb-4' }, content),
    paragraph: createElement('p', { className: 'text-gray-700 leading-relaxed' }, content),
    alert: createElement(
      'div',
      { className: 'p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded' },
      createElement('p', { className: 'text-yellow-800 font-semibold' }, content)
    ),
    success: createElement(
      'div',
      { className: 'p-4 bg-green-50 border-l-4 border-green-500 rounded' },
      createElement('p', { className: 'text-green-800 font-semibold' }, content)
    ),
    code: createElement('code', { className: 'px-3 py-2 bg-gray-100 rounded font-mono text-sm' }, content),
  };

  return components[type] || createElement('div', {}, 'Unknown component type');
}

export default function CreateElementExample() {
  const [count, setCount] = useState(0);
  const [selectedComponent, setSelectedComponent] = useState('heading');
  const [componentContent, setComponentContent] = useState('Hello from createElement!');
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [newItem, setNewItem] = useState('');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return createElement(
    'div',
    { className: 'flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-6 sm:p-8' },
    createElement(
      'div',
      { className: 'w-full max-w-5xl' },
      createElement(
        'div',
        { className: 'bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200' },
        
        // Header
        createElement(
          'div',
          { className: 'text-center mb-8' },
          createElement(
            'div',
            { className: 'inline-block p-3 bg-cyan-100 rounded-full mb-4' },
            createElement(
              'svg',
              { className: 'w-8 h-8 text-cyan-600', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
              createElement('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
              })
            )
          ),
          createElement('h1', { className: 'text-2xl sm:text-3xl font-bold text-gray-900 mb-3' }, 'createElement API'),
          createElement('p', { className: 'text-base sm:text-lg text-gray-600' }, 'Create React elements programmatically without JSX')
        ),

        // Example 1: Counter
        createElement(
          'div',
          { className: 'mb-8' },
          createElement('h3', { className: 'font-bold text-gray-900 mb-4 flex items-center gap-2' },
            createElement('span', { className: 'text-cyan-600' }, '1.'),
            'Counter Built with createElement'
          ),
          createElement(
            'div',
            { className: 'p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200' },
            createElement('div', { className: 'text-center mb-4' },
              createElement('div', { className: 'text-6xl font-bold text-cyan-600 mb-2' }, String(count)),
              createElement('p', { className: 'text-gray-600' }, 'Current Count')
            ),
            createElement(
              'div',
              { className: 'flex gap-3 justify-center' },
              createButton('Decrement', decrement, 'secondary'),
              createButton('Reset', reset, 'secondary'),
              createButton('Increment', increment)
            )
          )
        ),

        // Example 2: Dynamic Components
        createElement(
          'div',
          { className: 'mb-8' },
          createElement('h3', { className: 'font-bold text-gray-900 mb-4 flex items-center gap-2' },
            createElement('span', { className: 'text-purple-600' }, '2.'),
            'Dynamic Component Factory'
          ),
          createElement(
            'div',
            { className: 'space-y-4' },
            createElement(
              'div',
              { className: 'flex gap-3' },
              ['heading', 'paragraph', 'alert', 'success', 'code'].map(type =>
                createElement(
                  'button',
                  {
                    key: type,
                    onClick: () => setSelectedComponent(type),
                    className: `px-4 py-2 rounded-lg font-semibold transition-all ${
                      selectedComponent === type
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`
                  },
                  type.charAt(0).toUpperCase() + type.slice(1)
                )
              )
            ),
            createElement(
              'input',
              {
                type: 'text',
                value: componentContent,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => setComponentContent(e.target.value),
                className: 'w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none',
                placeholder: 'Enter content...'
              }
            ),
            createElement(
              'div',
              { className: 'p-6 bg-gray-50 rounded-xl border border-gray-200' },
              createElement(DynamicComponentFactory, { type: selectedComponent, content: componentContent })
            )
          )
        ),

        // Example 3: List with createElement
        createElement(
          'div',
          { className: 'mb-8' },
          createElement('h3', { className: 'font-bold text-gray-900 mb-4 flex items-center gap-2' },
            createElement('span', { className: 'text-green-600' }, '3.'),
            'Dynamic List Creation'
          ),
          createElement(
            'div',
            { className: 'space-y-4' },
            createElement(
              'div',
              { className: 'flex gap-3' },
              createElement('input', {
                type: 'text',
                value: newItem,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => setNewItem(e.target.value),
                onKeyPress: (e: React.KeyboardEvent) => e.key === 'Enter' && addItem(),
                className: 'flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none',
                placeholder: 'Add new item...'
              }),
              createButton('Add Item', addItem)
            ),
            createElement(
              'div',
              { className: 'p-6 bg-green-50 rounded-xl border border-green-200' },
              items.length > 0
                ? createElement(
                    'div',
                    { className: 'space-y-2' },
                    ...items.map((item, index) =>
                      createElement(
                        'div',
                        {
                          key: index,
                          className: 'flex items-center justify-between p-3 bg-white rounded-lg border border-green-200'
                        },
                        createElement('span', { className: 'text-gray-900' }, item),
                        createElement(
                          'button',
                          {
                            onClick: () => removeItem(index),
                            className: 'text-red-600 hover:text-red-700 font-bold'
                          },
                          '✕'
                        )
                      )
                    )
                  )
                : createElement('p', { className: 'text-gray-500 italic text-center' }, 'No items yet')
            )
          )
        ),

        // Example 4: Card with createElement
        createElement(
          'div',
          {},
          createElement('h3', { className: 'font-bold text-gray-900 mb-4 flex items-center gap-2' },
            createElement('span', { className: 'text-orange-600' }, '4.'),
            'Complex Component Composition'
          ),
          createCard(
            'Welcome Card',
            'This entire card is built using createElement without any JSX!',
            createElement(
              'div',
              { className: 'mt-4' },
              createElement('p', { className: 'text-sm text-gray-600 mb-3' }, 'Features included:'),
              createList([
                'No JSX transpilation needed',
                'Full programmatic control',
                'Dynamic component creation',
                'Useful for libraries and tools'
              ])
            )
          )
        ),

        // Info
        createElement(
          'div',
          { className: 'mt-8 p-4 bg-cyan-50 rounded-lg border border-cyan-200' },
          createElement(
            'p',
            { className: 'text-sm text-gray-700' },
            createElement('strong', { className: 'text-cyan-700' }, 'createElement: '),
            'Creates React elements programmatically. JSX is syntactic sugar that compiles to createElement calls. Signature: ',
            createElement('code', { className: 'px-2 py-1 bg-white rounded text-xs' }, 'createElement(type, props, ...children)')
          )
        )
      )
    )
  );
}

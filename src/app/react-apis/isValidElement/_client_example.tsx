'use client';

import { isValidElement, ReactNode, Fragment, useState, Children } from 'react';

// Example component
function MyComponent({ title }: { title: string }) {
  return <div className="p-3 bg-blue-100 rounded border border-blue-300">{title}</div>;
}

// Type guard using isValidElement
function renderContent(content: ReactNode) {
  if (isValidElement(content)) {
    return (
      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
        <p className="text-sm text-green-700 font-semibold mb-2">✅ Valid React Element</p>
        <div className="text-gray-700">{content}</div>
      </div>
    );
  }
  
  return (
    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
      <p className="text-sm text-red-700 font-semibold mb-2">❌ Not a React Element</p>
      <div className="text-gray-700">{String(content)}</div>
    </div>
  );
}

// Component that validates children
function ValidatedContainer({ children }: { children: ReactNode }) {
  const validElements: React.ReactElement[] = [];
  const invalidItems: ReactNode[] = [];

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      validElements.push(child);
    } else {
      invalidItems.push(child);
    }
  });

  return (
    <div className="space-y-4">
      {validElements.length > 0 && (
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm font-semibold text-green-700 mb-3">✅ Valid Elements ({validElements.length}):</p>
          <div className="space-y-2">
            {validElements.map((el, i) => (
              <div key={i} className="bg-white p-2 rounded border border-green-200">
                {el}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {invalidItems.length > 0 && (
        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm font-semibold text-yellow-700 mb-3">⚠️ Invalid Items ({invalidItems.length}):</p>
          <div className="space-y-2">
            {invalidItems.map((item, i) => (
              <div key={i} className="bg-white p-2 rounded border border-yellow-200 text-sm">
                {String(item)} (type: {typeof item})
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Different types to test
const testCases: Array<{ label: string; value: ReactNode; expected: boolean }> = [
  { label: 'React Element', value: <div>I am a React element</div>, expected: true },
  { label: 'Component Element', value: <MyComponent title="Component" />, expected: true },
  { label: 'Fragment', value: <Fragment><span>Fragment</span></Fragment>, expected: true },
  { label: 'String', value: 'Plain string', expected: false },
  { label: 'Number', value: 42, expected: false },
  { label: 'Boolean', value: true as ReactNode, expected: false },
  { label: 'Null', value: null, expected: false },
  { label: 'Undefined', value: undefined, expected: false },
  { label: 'Array', value: [1, 2, 3] as ReactNode, expected: false },
  { label: 'Object', value: { key: 'value' } as ReactNode, expected: false },
];

export default function IsValidElementExample() {
  const [selectedValue, setSelectedValue] = useState<ReactNode>(<div>Test Element</div>);
  const [selectedLabel, setSelectedLabel] = useState('React Element');

  const handleTest = (value: ReactNode, label: string) => {
    setSelectedValue(value);
    setSelectedLabel(label);
  };

  return (
    <div className="space-y-8">
      {/* Type Guards Section */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Type Guard Example</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {testCases.map((testCase) => (
            <button
              key={testCase.label}
              onClick={() => handleTest(testCase.value, testCase.label)}
              className={`p-3 rounded-lg border-2 transition-colors text-left ${
                selectedLabel === testCase.label
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="text-sm font-semibold text-slate-700">{testCase.label}</div>
              <div className="text-xs text-slate-500 mt-1">
                Expected: {testCase.expected ? '✅ true' : '❌ false'}
              </div>
            </button>
          ))}
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-sm font-semibold text-slate-700 mb-2">Testing: {selectedLabel}</p>
          {renderContent(selectedValue)}
        </div>
      </div>

      {/* Children Validation Section */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Filtering Valid Elements</h2>
        
        <ValidatedContainer>
          <div className="p-2 bg-blue-100 rounded">Valid Element 1</div>
          Plain text (not valid)
          {42}
          <span className="text-green-700">Valid Element 2</span>
          {null}
          <p>Valid Element 3</p>
          {undefined}
        </ValidatedContainer>
      </div>

      {/* TypeScript Type Guard */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">TypeScript Type Guard</h2>
        
        <div className="p-4 bg-slate-50 rounded-lg">
          <pre className="text-sm text-slate-700 whitespace-pre-wrap">
{`function processNode(node: ReactNode) {
  if (isValidElement(node)) {
    // TypeScript now knows node is ReactElement
    console.log(node.type);
    console.log(node.props);
  }
}`}
          </pre>
        </div>
      </div>

      {/* Reference */}
      <div className="p-6 bg-white rounded-lg border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">What isValidElement Returns</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-700 mb-2">✅ Returns TRUE for:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✅ JSX elements: <code className="text-xs bg-white px-1 rounded">{'<div>...</div>'}</code></li>
              <li>✅ Components: <code className="text-xs bg-white px-1 rounded">{'<MyComponent />'}</code></li>
              <li>✅ createElement results</li>
              <li>✅ Fragments: <code className="text-xs bg-white px-1 rounded">{'<>...</>'}</code></li>
            </ul>
          </div>
          
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-700 mb-2">❌ Returns FALSE for:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>❌ Strings, numbers, booleans</li>
              <li>❌ null, undefined, objects, arrays</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
        <p className="text-sm text-gray-700">
          <strong className="text-amber-700">isValidElement:</strong> Returns <code className="px-2 py-1 bg-white rounded text-xs">true</code> if the value is a valid React element (created with JSX or createElement). Returns <code className="px-2 py-1 bg-white rounded text-xs">false</code> for primitives, null, undefined, or plain objects.
        </p>
      </div>
    </div>
  );
}

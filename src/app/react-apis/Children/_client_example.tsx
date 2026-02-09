'use client';

import { Children, ReactNode, cloneElement, isValidElement } from 'react';
import { useState } from 'react';

// Example 1: Children.map
interface RowProps {
  children: ReactNode;
}

function Row({ children }: RowProps) {
  return (
    <div className="flex gap-2 mb-2">
      {Children.map(children, (child, index) => (
        <div className="flex-1 p-3 bg-blue-100 rounded-lg border border-blue-300">
          <div className="text-xs text-blue-600 font-bold mb-1">Item #{index + 1}</div>
          {child}
        </div>
      ))}
    </div>
  );
}

// Example 2: Children.count
interface CounterWrapperProps {
  children: ReactNode;
}

function CounterWrapper({ children }: CounterWrapperProps) {
  const count = Children.count(children);
  
  return (
    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
      <div className="text-sm font-semibold text-purple-700 mb-3">
        Total Children: {count}
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

// Example 3: Children.only
interface SingleChildProps {
  children: ReactNode;
}

function SingleChild({ children }: SingleChildProps) {
  try {
    const onlyChild = Children.only(children);
    return (
      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="text-sm font-semibold text-green-700 mb-2">✅ Single Child Accepted</div>
        {onlyChild}
      </div>
    );
  } catch (error) {
    return (
      <div className="p-4 bg-red-50 rounded-lg border border-red-200">
        <div className="text-sm font-semibold text-red-700">❌ Error: Expected exactly one child</div>
      </div>
    );
  }
}

// Example 4: Children.toArray + manipulation
interface ListProps {
  children: ReactNode;
  reverse?: boolean;
}

function List({ children, reverse = false }: ListProps) {
  let childArray = Children.toArray(children);
  
  if (reverse) {
    childArray = childArray.reverse();
  }

  return (
    <div className="space-y-2">
      {childArray.map((child, index) => (
        <div key={index} className="p-3 bg-orange-50 rounded-lg border border-orange-200">
          <span className="text-orange-600 font-bold mr-2">#{index + 1}</span>
          {child}
        </div>
      ))}
    </div>
  );
}

// Example 5: Clone children with props
interface RadioGroupProps {
  children: ReactNode;
  value: string;
  onChange: (value: string) => void;
}

function RadioGroup({ children, value, onChange }: RadioGroupProps) {
  return (
    <div className="space-y-2">
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            // @ts-expect-error - We know these props exist on our Radio components
            checked: child.props.value === value,
            // @ts-expect-error
            onChange: () => onChange(child.props.value),
          });
        }
        return child;
      })}
    </div>
  );
}

interface RadioProps {
  value: string;
  label: string;
  checked?: boolean;
  onChange?: () => void;
}

function Radio({ value, label, checked = false, onChange }: RadioProps) {
  return (
    <label className="flex items-center gap-2 p-3 bg-white rounded-lg border-2 border-gray-200 hover:border-indigo-300 cursor-pointer transition-all">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4"
      />
      <span className="text-gray-900 font-medium">{label}</span>
    </label>
  );
}

export default function ChildrenExample() {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [reverseList, setReverseList] = useState(false);
  const [childCount, setChildCount] = useState(3);

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 sm:p-8">
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">React.Children API</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Utilities for working with props.children
            </p>
          </div>

          <div className="space-y-8">
            {/* Example 1: Children.map */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600">1.</span>
                Children.map - Transform each child
              </h3>
              <Row>
                <div className="text-sm">First Item</div>
                <div className="text-sm">Second Item</div>
                <div className="text-sm">Third Item</div>
              </Row>
              <p className="text-xs text-gray-600 mt-2 italic">
                Each child is wrapped and indexed automatically
              </p>
            </div>

            {/* Example 2: Children.count */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-purple-600">2.</span>
                Children.count - Count children
              </h3>
              <div className="flex gap-3 mb-3">
                {[1, 2, 3, 4, 5].map(num => (
                  <button
                    key={num}
                    onClick={() => setChildCount(num)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      childCount === num
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <CounterWrapper>
                {Array.from({ length: childCount }, (_, i) => (
                  <div key={i} className="p-2 bg-white rounded border border-purple-200">
                    Child {i + 1}
                  </div>
                ))}
              </CounterWrapper>
            </div>

            {/* Example 3: Children.only */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-green-600">3.</span>
                Children.only - Enforce single child
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">✅ Valid (one child):</p>
                  <SingleChild>
                    <div className="text-sm">I am the only child</div>
                  </SingleChild>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">❌ Invalid (multiple children):</p>
                  <SingleChild>
                    <div className="text-sm">First child</div>
                    <div className="text-sm">Second child</div>
                  </SingleChild>
                </div>
              </div>
            </div>

            {/* Example 4: Children.toArray */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-orange-600">4.</span>
                Children.toArray - Convert to array
              </h3>
              <button
                onClick={() => setReverseList(!reverseList)}
                className="mb-3 px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all"
              >
                {reverseList ? '🔄 Show Normal Order' : '🔄 Reverse Order'}
              </button>
              <List reverse={reverseList}>
                <span>Apple</span>
                <span>Banana</span>
                <span>Cherry</span>
                <span>Date</span>
              </List>
            </div>

            {/* Example 5: Clone with props */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-indigo-600">5.</span>
                Children.map + cloneElement - Inject props
              </h3>
              <RadioGroup value={selectedOption} onChange={setSelectedOption}>
                <Radio value="option1" label="Option 1" />
                <Radio value="option2" label="Option 2" />
                <Radio value="option3" label="Option 3" />
              </RadioGroup>
              <div className="mt-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                <p className="text-sm text-indigo-700">
                  <strong>Selected:</strong> {selectedOption}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              <strong className="text-blue-700">React.Children API:</strong> Provides utilities to work with the <code className="px-2 py-1 bg-white rounded text-xs">props.children</code> data structure. Includes map, forEach, count, only, and toArray methods for transforming and validating children.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

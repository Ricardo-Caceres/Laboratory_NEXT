'use client';

import { useState } from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

function useToggle(initialState = false) {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = () => setIsOn((prev) => !prev);
  const setOn = () => setIsOn(true);
  const setOff = () => setIsOn(false);

  // Props getter functions
  const getTogglerProps = (props = {}) => ({
    'aria-pressed': isOn,
    onClick: toggle,
    ...props,
  });

  const getStatusProps = (props = {}) => ({
    'aria-live': 'polite' as const,
    ...props,
  });

  return { isOn, toggle, setOn, setOff, getTogglerProps, getStatusProps };
}

export default function ClientExample({ codeContent }: { codeContent: { filePath: string; content: string }[] }) {
  const { isOn, getTogglerProps, getStatusProps } = useToggle();

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 p-4 overflow-y-auto bg-gray-50">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-6 sm:p-8 overflow-y-auto">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-cyan-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Props Getter Pattern</h1>
              <p className="text-base sm:text-lg text-gray-600">Simplified prop spreading and composition</p>
            </div>

            <div className="space-y-6">
              {/* Status Display */}
              <div {...getStatusProps()} className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
                <div className={`inline-block w-16 h-16 rounded-full mb-3 transition-all ${isOn ? 'bg-green-500' : 'bg-gray-400'}`}>
                  <div className="flex items-center justify-center h-full">
                    {isOn ? (
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Status: {isOn ? 'ON' : 'OFF'}
                </h2>
              </div>

              {/* Toggle Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  {...getTogglerProps()}
                  className={`px-6 py-4 rounded-lg font-semibold transition-all ${
                    isOn
                      ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg'
                      : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                  }`}
                >
                  Toggle
                </button>
                <button
                  {...getTogglerProps({ className: 'px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-md transition-all' })}
                >
                  Custom Styled
                </button>
                <button
                  {...getTogglerProps()}
                  className="px-6 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 shadow-md transition-all"
                >
                  Also Toggles!
                </button>
              </div>

              {/* Code Example */}
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <pre className="text-xs text-gray-700 overflow-x-auto">
{`// Easy prop spreading with getters
<button {...getTogglerProps()}>
  Toggle
</button>

// Custom props are merged
<button {...getTogglerProps({ 
  className: 'custom-class' 
})}>
  Custom
</button>`}
                </pre>
              </div>
            </div>

            <div className="mt-6 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
              <h3 className="font-semibold text-gray-900 mb-2">Pattern Benefits:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Cleaner API for prop spreading</li>
                <li>✓ Automatic accessibility attributes</li>
                <li>✓ Easy to compose and override props</li>
                <li>✓ Consistent behavior across components</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

function useToggle(initialState = false) {
  const [on, setOn] = useState(initialState);
  
  const toggle = () => setOn(!on);
  
  const getTogglerProps = (props: any = {}) => ({
    'aria-pressed': on,
    onClick: () => {
      toggle();
      props.onClick?.();
    },
    ...props,
  });
  
  return { on, toggle, getTogglerProps };
}

export default function PropsGetterDemo() {
  const { on, getTogglerProps } = useToggle();

  return (
    <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Props Getter Pattern</h2>
          <p className="text-gray-600">Functions that return pre-configured props</p>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-bold mb-4">Default Toggle</h3>
            <button 
              {...getTogglerProps()}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {on ? '🔆 ON' : '🌙 OFF'}
            </button>
            <p className="text-xs text-gray-600 mt-2">
              Uses <code className="px-1 bg-blue-100 rounded">getTogglerProps()</code> with defaults
            </p>
          </div>

          <div className="p-6 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-bold mb-4">Custom Override</h3>
            <button 
              {...getTogglerProps({
                className: "w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold",
                onClick: () => console.log('Custom click!')
              })}
            >
              {on ? '✅ ENABLED' : '❌ DISABLED'}
            </button>
            <p className="text-xs text-gray-600 mt-2">
              User props override defaults: custom className and onClick
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Current state:</strong> <span className={on ? 'text-green-600' : 'text-red-600'}>{on ? 'ON' : 'OFF'}</span>
            </p>
            <p className="text-xs text-gray-600">
              💡 Getter includes: <code className="px-1 bg-gray-200 rounded">aria-pressed</code>, 
              <code className="px-1 bg-gray-200 rounded">onClick</code>, and merges user props
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

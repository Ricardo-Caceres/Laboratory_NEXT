'use client';

import { ReactNode } from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

// Layout Components
function TwoColumnLayout({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">{left}</div>
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">{right}</div>
    </div>
  );
}

function CardLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function GridLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );
}

export default function ClientExample({ codeContent = [] }: { codeContent?: { filePath: string; content: string }[] } = {}) {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 p-4 overflow-y-auto bg-gray-50">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 p-6 sm:p-8 overflow-y-auto">
        <div className="w-full max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-slate-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Layout Pattern</h1>
              <p className="text-base sm:text-lg text-gray-600">Reusable layout components</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Two Column Layout:</h3>
                <TwoColumnLayout
                  left={<div className="text-center py-4">Left Column 📄</div>}
                  right={<div className="text-center py-4">Right Column 📊</div>}
                />
              </div>

              <div>
                <h3 className="font-semibold mb-3">Card Layout:</h3>
                <CardLayout title="Sample Card">
                  <p>This is a reusable card component that can wrap any content with consistent styling.</p>
                </CardLayout>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Grid Layout:</h3>
                <GridLayout>
                  <div className="bg-purple-100 p-4 rounded text-center">Item 1</div>
                  <div className="bg-pink-100 p-4 rounded text-center">Item 2</div>
                  <div className="bg-yellow-100 p-4 rounded text-center">Item 3</div>
                </GridLayout>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-gray-900 mb-2">Pattern Benefits:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Consistent layout across app</li>
                <li>✓ Easy to maintain and update</li>
                <li>✓ Composable and flexible</li>
                <li>✓ Separation of structure from content</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import CodeDisplay from '../../../components/CodeDisplay';

export default function ClientExample({ codeContent = [] }: { codeContent?: { filePath: string; content: string }[] } = {}) {
  const [showIf, setShowIf] = useState(true);
  const [showTernary, setShowTernary] = useState(false);
  const [userRole, setUserRole] = useState<'guest' | 'user' | 'admin'>('guest');

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6">
      <div className="w-full bg-gray-50 rounded-lg p-4 border border-gray-200">
        <CodeDisplay codeContent={codeContent} />
      </div>
      <div className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-white to-pink-50 p-6 sm:p-8 rounded-lg">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-rose-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Conditional Rendering</h1>
              <p className="text-base sm:text-lg text-gray-600">Multiple techniques for showing/hiding content</p>
            </div>

            <div className="space-y-4">
              {/* If-Else Pattern */}
              <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">1. && Operator</h3>
                <button onClick={() => setShowIf(!showIf)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-2">
                  Toggle
                </button>
                {showIf && <div className="p-3 bg-white rounded border border-blue-300">✓ Content is visible!</div>}
              </div>

              {/* Ternary Pattern */}
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-2">2. Ternary Operator</h3>
                <button onClick={() => setShowTernary(!showTernary)} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mb-2">
                  Toggle
                </button>
                {showTernary ? (
                  <div className="p-3 bg-green-100 rounded border border-green-300">😊 Showing Option A</div>
                ) : (
                  <div className="p-3 bg-red-100 rounded border border-red-300">😔 Showing Option B</div>
                )}
              </div>

              {/* Switch Case Pattern */}
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-gray-900 mb-2">3. Switch/Case Pattern</h3>
                <div className="flex gap-2 mb-2">
                  <button onClick={() => setUserRole('guest')} className={`px-3 py-1 rounded ${userRole === 'guest' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>Guest</button>
                  <button onClick={() => setUserRole('user')} className={`px-3 py-1 rounded ${userRole === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>User</button>
                  <button onClick={() => setUserRole('admin')} className={`px-3 py-1 rounded ${userRole === 'admin' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>Admin</button>
                </div>
                {(() => {
                  switch (userRole) {
                    case 'admin': return <div className="p-3 bg-red-100 rounded">🔐 Admin Dashboard Access</div>;
                    case 'user': return <div className="p-3 bg-blue-100 rounded">👤 User Profile Access</div>;
                    case 'guest': return <div className="p-3 bg-gray-100 rounded">👋 Welcome! Please sign in</div>;
                  }
                })()}
              </div>
            </div>

            <div className="mt-6 p-4 bg-rose-50 rounded-lg border border-rose-200">
              <h3 className="font-semibold text-gray-900 mb-2">Best Practices:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Use && for simple show/hide</li>
                <li>✓ Use ternary for either/or scenarios</li>
                <li>✓ Use switch for multiple conditions</li>
                <li>✓ Extract complex logic to variables</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function ConditionalRenderingDemo() {
  const [showAnd, setShowAnd] = useState(true);
  const [showTernary, setShowTernary] = useState(false);
  const [role, setRole] = useState<'guest' | 'user' | 'admin'>('guest');

  const roleComponents = {
    guest: '👤 Guest - Limited access',
    user: '✅ User - Standard access',
    admin: '⭐ Admin - Full access'
  };

  return (
    <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-rose-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Conditional Rendering</h2>
          <p className="text-gray-600">Multiple techniques for showing/hiding UI</p>
        </div>

        <div className="space-y-6">
          {/* && Operator */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-bold mb-2">1. && Operator (show or nothing)</h3>
            <button
              onClick={() => setShowAnd(!showAnd)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-2"
            >
              Toggle
            </button>
            {showAnd && (
              <div className="p-3 bg-white rounded border border-blue-300">
                ✓ Content is visible!
              </div>
            )}
          </div>

          {/* Ternary Operator */}
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-bold mb-2">2. Ternary (? :) - Choose between two</h3>
            <button
              onClick={() => setShowTernary(!showTernary)}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mb-2"
            >
              Toggle
            </button>
            <div className="p-3 bg-white rounded border border-green-300">
              {showTernary ? (
                <span className="text-green-600">✓ Option A</span>
              ) : (
                <span className="text-red-600">✗ Option B</span>
              )}
            </div>
          </div>

          {/* Object Mapping */}
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-bold mb-2">3. Object Mapping - Multiple options</h3>
            <div className="flex gap-2 mb-2 flex-wrap">
              {(['guest', 'user', 'admin'] as const).map(r => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`px-3 py-1 rounded transition-colors ${
                    role === r
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-purple-600 border border-purple-300'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
            <div className="p-3 bg-white rounded border border-purple-300">
              {roleComponents[role]}
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded text-center text-sm text-gray-700">
          💡 Choose the right technique: && for show/hide, ternary for A/B, object for multiple options
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

type TestStatus = 'pending' | 'red' | 'green' | 'refactor';

export default function TDDExample() {
  const [currentPhase, setCurrentPhase] = useState<TestStatus>('pending');
  const [testResults, setTestResults] = useState<{ name: string; status: 'pass' | 'fail' }[]>([]);

  const runTDDCycle = () => {
    setCurrentPhase('red');
    setTestResults([{ name: 'should add two numbers', status: 'fail' }]);

    setTimeout(() => {
      setCurrentPhase('green');
      setTestResults([{ name: 'should add two numbers', status: 'pass' }]);
    }, 1500);

    setTimeout(() => {
      setCurrentPhase('refactor');
    }, 3000);

    setTimeout(() => {
      setCurrentPhase('pending');
    }, 4500);
  };

  const getPhaseColor = (phase: TestStatus) => {
    switch (phase) {
      case 'red': return 'bg-red-500';
      case 'green': return 'bg-green-500';
      case 'refactor': return 'bg-blue-500';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">TDD Cycle Demo</h2>

      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-4">TDD Cycle:</h3>
        <div className="flex items-center justify-between mb-4">
          {(['red', 'green', 'refactor'] as const).map((phase, idx) => (
            <div key={phase} className="flex items-center flex-1">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold transition-all ${
                currentPhase === phase ? getPhaseColor(phase) : 'bg-gray-300 dark:bg-gray-700'
              }`}>
                {phase === 'red' && '❌'}
                {phase === 'green' && '✓'}
                {phase === 'refactor' && '🔧'}
              </div>
              {idx < 2 && <div className="flex-1 h-1 bg-gray-300 dark:bg-gray-700 mx-2" />}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <p className="font-semibold text-red-500">1. RED</p>
            <p className="opacity-70">Write failing test</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-green-500">2. GREEN</p>
            <p className="opacity-70">Make it pass</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-blue-500">3. REFACTOR</p>
            <p className="opacity-70">Improve code</p>
          </div>
        </div>
      </div>

      <button
        onClick={runTDDCycle}
        disabled={currentPhase !== 'pending'}
        className="mb-6 bg-[var(--primary)] hover:bg-[var(--primary-hover)] disabled:opacity-50 text-white font-bold py-2 px-4 rounded"
      >
        {currentPhase === 'pending' ? 'Start TDD Cycle' : 'Running...'}
      </button>

      {testResults.length > 0 && (
        <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
          <h3 className="font-semibold mb-3">Test Results:</h3>
          {testResults.map((test, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-2">
              <span className={test.status === 'pass' ? 'text-green-500' : 'text-red-500'}>
                {test.status === 'pass' ? '✓' : '✗'}
              </span>
              <span>{test.name}</span>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
          <h3 className="font-semibold mb-2">Benefits:</h3>
          <ul className="space-y-1 text-sm">
            <li>✓ Better design</li>
            <li>✓ High test coverage</li>
            <li>✓ Fewer bugs</li>
            <li>✓ Living documentation</li>
          </ul>
        </div>
        <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
          <h3 className="font-semibold mb-2">AAA Pattern:</h3>
          <ul className="space-y-1 text-sm">
            <li><strong>Arrange:</strong> Set up test data</li>
            <li><strong>Act:</strong> Execute the code</li>
            <li><strong>Assert:</strong> Verify results</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

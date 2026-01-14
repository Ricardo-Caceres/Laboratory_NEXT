'use client';

import { useState } from 'react';

interface PipelineStage {
  name: string;
  status: 'pending' | 'running' | 'success' | 'failed';
  duration?: string;
}

export default function CICDPipelinesExample() {
  const [pipeline, setPipeline] = useState<PipelineStage[]>([
    { name: 'Checkout Code', status: 'pending' },
    { name: 'Install Dependencies', status: 'pending' },
    { name: 'Run Linter', status: 'pending' },
    { name: 'Run Tests', status: 'pending' },
    { name: 'Build', status: 'pending' },
    { name: 'Deploy', status: 'pending' },
  ]);

  const [isRunning, setIsRunning] = useState(false);

  const runPipeline = async () => {
    setIsRunning(true);
    
    for (let i = 0; i < pipeline.length; i++) {
      // Set stage as running
      setPipeline(prev => prev.map((stage, idx) => 
        idx === i ? { ...stage, status: 'running' } : stage
      ));
      
      // Simulate stage execution
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set stage as success (90% success rate)
      const success = Math.random() > 0.1;
      const duration = `${Math.floor(Math.random() * 30 + 10)}s`;
      
      setPipeline(prev => prev.map((stage, idx) => 
        idx === i ? { 
          ...stage, 
          status: success ? 'success' : 'failed',
          duration 
        } : stage
      ));
      
      if (!success) {
        setIsRunning(false);
        return;
      }
    }
    
    setIsRunning(false);
  };

  const resetPipeline = () => {
    setPipeline([
      { name: 'Checkout Code', status: 'pending' },
      { name: 'Install Dependencies', status: 'pending' },
      { name: 'Run Linter', status: 'pending' },
      { name: 'Run Tests', status: 'pending' },
      { name: 'Build', status: 'pending' },
      { name: 'Deploy', status: 'pending' },
    ]);
  };

  const getStatusColor = (status: PipelineStage['status']) => {
    switch (status) {
      case 'pending': return 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400';
      case 'running': return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100';
      case 'success': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100';
      case 'failed': return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100';
    }
  };

  const getStatusIcon = (status: PipelineStage['status']) => {
    switch (status) {
      case 'pending': return '⏸';
      case 'running': return '⏳';
      case 'success': return '✓';
      case 'failed': return '✗';
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">CI/CD Pipeline Simulation</h2>

      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-2">Pipeline Stages:</h3>
        <div className="space-y-1 text-sm">
          <p>1. Checkout → 2. Install → 3. Lint → 4. Test → 5. Build → 6. Deploy</p>
        </div>
      </div>

      <div className="mb-6 flex gap-3">
        <button
          onClick={runPipeline}
          disabled={isRunning}
          className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
        >
          {isRunning ? 'Running...' : 'Run Pipeline'}
        </button>
        <button
          onClick={resetPipeline}
          disabled={isRunning}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
        >
          Reset
        </button>
      </div>

      <div className="space-y-3">
        {pipeline.map((stage, index) => (
          <div
            key={index}
            className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getStatusIcon(stage.status)}</span>
                <div>
                  <p className="font-semibold">{stage.name}</p>
                  {stage.duration && (
                    <p className="text-xs opacity-70">Duration: {stage.duration}</p>
                  )}
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(stage.status)}`}>
                {stage.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

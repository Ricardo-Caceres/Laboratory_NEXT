'use client';

import { useState, useEffect } from 'react';

export function PrometheusDemo() {
  const [metrics, setMetrics] = useState({
    requests: 0,
    errors: 0,
    latency: 0,
    activeUsers: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        requests: metrics.requests + Math.floor(Math.random() * 10),
        errors: metrics.errors + Math.floor(Math.random() * 2),
        latency: 100 + Math.random() * 200,
        activeUsers: 50 + Math.floor(Math.random() * 20),
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [metrics]);

  const errorRate = metrics.requests > 0 
    ? ((metrics.errors / metrics.requests) * 100).toFixed(2) 
    : '0.00';

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MetricCard
          title="Total Requests"
          value={metrics.requests.toLocaleString()}
          type="counter"
          description="http_requests_total"
        />
        
        <MetricCard
          title="Error Rate"
          value={`${errorRate}%`}
          type={Number(errorRate) > 5 ? 'error' : 'success'}
          description="Errors / Total Requests"
        />
        
        <MetricCard
          title="P95 Latency"
          value={`${metrics.latency.toFixed(0)}ms`}
          type={metrics.latency > 200 ? 'warning' : 'success'}
          description="http_request_duration_seconds"
        />
        
        <MetricCard
          title="Active Users"
          value={metrics.activeUsers.toString()}
          type="gauge"
          description="active_users gauge"
        />
      </div>

      <div className="p-4 rounded-lg" style={{ background: 'var(--panel)', border: '1px solid var(--border)' }}>
        <h3 className="font-semibold mb-3">📊 PromQL Query Examples</h3>
        <div className="space-y-2 text-sm font-mono">
          <CodeSnippet code="rate(http_requests_total[5m])" description="Requests per second" />
          <CodeSnippet 
            code="histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))" 
            description="P95 latency" 
          />
          <CodeSnippet 
            code="sum(rate(http_requests_total{status=~'5..'}[5m])) / sum(rate(http_requests_total[5m]))" 
            description="Error rate" 
          />
        </div>
      </div>

      <div className="p-4 rounded-lg" style={{ background: 'var(--code-bg)', border: '1px solid var(--border)' }}>
        <h3 className="font-semibold mb-3">🚀 Quick Start</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Install: <code className="px-2 py-1 rounded" style={{ background: 'var(--background)' }}>yarn add prom-client</code></li>
          <li>Setup metrics in <code>lib/metrics.ts</code></li>
          <li>Create <code>app/api/metrics/route.ts</code> endpoint</li>
          <li>Add instrumentation to middleware/API routes</li>
          <li>Run Prometheus with <code>docker-compose up</code></li>
          <li>Access Prometheus UI at <code>localhost:9090</code></li>
          <li>Access Grafana at <code>localhost:3001</code></li>
        </ol>
      </div>

      <div className="p-4 rounded-lg" style={{ background: 'var(--panel)', border: '1px solid var(--border)' }}>
        <h3 className="font-semibold mb-3">💡 Best Practices</h3>
        <ul className="space-y-2 text-sm">
          <li>✓ Use counters for cumulative values (total requests, errors)</li>
          <li>✓ Use gauges for current values (active connections, memory)</li>
          <li>✓ Use histograms for latency and size distributions</li>
          <li>✓ Keep cardinality low (avoid user IDs as labels)</li>
          <li>✓ Use meaningful metric names with units (e.g., _seconds, _bytes)</li>
          <li>✓ Set up alerts for critical metrics</li>
          <li>✓ Create dashboards in Grafana for visualization</li>
        </ul>
      </div>
    </div>
  );
}

function MetricCard({ 
  title, 
  value, 
  type, 
  description 
}: { 
  title: string; 
  value: string; 
  type: 'counter' | 'gauge' | 'success' | 'warning' | 'error'; 
  description: string;
}) {
  const getColor = () => {
    switch (type) {
      case 'success': return 'var(--success)';
      case 'warning': return 'var(--warning)';
      case 'error': return 'var(--error)';
      default: return 'var(--primary)';
    }
  };

  return (
    <div className="p-4 rounded-lg" style={{ background: 'var(--panel)', border: '1px solid var(--border)' }}>
      <div className="text-sm opacity-70 mb-1">{title}</div>
      <div className="text-3xl font-bold mb-1" style={{ color: getColor() }}>
        {value}
      </div>
      <div className="text-xs opacity-60 font-mono">{description}</div>
    </div>
  );
}

function CodeSnippet({ code, description }: { code: string; description: string }) {
  return (
    <div className="p-2 rounded" style={{ background: 'var(--background)' }}>
      <div className="text-xs opacity-70 mb-1">{description}</div>
      <code className="text-xs break-all">{code}</code>
    </div>
  );
}

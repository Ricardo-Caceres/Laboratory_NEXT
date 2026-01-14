import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function PrometheusPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Prometheus Monitoring"
        description="**Prometheus** is an open-source monitoring and alerting toolkit. It collects and stores metrics as time series data with labels.

**Key Features:**
- **Multi-dimensional data**: Label-based metrics
- **PromQL**: Powerful query language
- **Pull model**: Scrapes metrics from targets
- **Alerting**: Alert manager integration
- **Visualization**: Grafana integration

**Use Cases:**
- Application monitoring
- Infrastructure monitoring
- Performance metrics
- Custom business metrics"
        codeContent={[
          {
            filePath: 'prometheus.yml',
            content: `global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'node-app'
    static_configs:
      - targets: ['localhost:3000']
    
  - job_name: 'postgres'
    static_configs:
      - targets: ['localhost:9187']`,
          },
          {
            filePath: 'metrics.ts',
            content: `import client from 'prom-client';

// Create a Registry
const register = new client.Registry();

// Create metrics
const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  registers: [register],
});

const httpRequestTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code'],
  registers: [register],
});

// Middleware to track metrics
export function metricsMiddleware(req, res, next) {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    
    httpRequestDuration.observe({
      method: req.method,
      route: req.route?.path || req.path,
      status_code: res.statusCode,
    }, duration);
    
    httpRequestTotal.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status_code: res.statusCode,
    });
  });
  
  next();
}

// Expose metrics endpoint
export async function getMetrics() {
  return await register.metrics();
}`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Prometheus Metrics Dashboard</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <p className="text-sm opacity-70 mb-1">Total Requests</p>
              <p className="text-3xl font-bold">1,234</p>
            </div>
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <p className="text-sm opacity-70 mb-1">Avg Response Time</p>
              <p className="text-3xl font-bold">245ms</p>
            </div>
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <p className="text-sm opacity-70 mb-1">Error Rate</p>
              <p className="text-3xl font-bold">0.5%</p>
            </div>
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <p className="text-sm opacity-70 mb-1">Active Targets</p>
              <p className="text-3xl font-bold">3</p>
            </div>
          </div>

          <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-3">Sample PromQL Queries:</h3>
            <div className="space-y-2 text-sm font-mono">
              <p className="p-2 bg-[var(--background)] rounded">
                rate(http_requests_total[5m])
              </p>
              <p className="p-2 bg-[var(--background)] rounded">
                histogram_quantile(0.95, http_request_duration_seconds)
              </p>
              <p className="p-2 bg-[var(--background)] rounded">
                sum(rate(http_requests_total[5m])) by (status_code)
              </p>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

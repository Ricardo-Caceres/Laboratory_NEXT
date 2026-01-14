import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import { PrometheusDemo } from './_client_example';

export default function PrometheusPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Prometheus - Monitoring & Metrics"
        description="**Sistema de monitoreo y alertas para aplicaciones modernas.** Aprende a instrumentar tu aplicación y crear dashboards con Prometheus y Grafana.

**¿Qué es Prometheus?**
Sistema de monitoreo open-source que recopila y almacena métricas como series temporales, identificadas por nombre de métrica y pares clave-valor.

**Componentes Principales:**
- **Prometheus Server**: Recopila y almacena métricas
- **Pushgateway**: Para jobs de corta duración
- **Exporters**: Exponen métricas de servicios third-party
- **Alertmanager**: Maneja alertas
- **Grafana**: Visualización de dashboards

**Tipos de Métricas:**
- **Counter**: Solo incrementa (requests totales, errores)
- **Gauge**: Puede subir y bajar (memoria, CPU, conexiones activas)
- **Histogram**: Distribución de valores (latencia, tamaño de response)
- **Summary**: Similar a histogram, con percentiles

**PromQL:**
Lenguaje de consulta potente para analizar métricas y crear alertas.

**Por qué importa:**
En producción necesitas visibilidad de qué está pasando en tu aplicación en tiempo real."
        codeContent={[
          {
            filePath: 'setup/next-config.ts',
            content: `// next.config.ts - Exponer endpoint de métricas
import { register } from 'prom-client';

export default {
  async rewrites() {
    return [
      {
        source: '/api/metrics',
        destination: '/api/metrics',
      },
    ];
  },
};`,
          },
          {
            filePath: 'metrics/setup.ts',
            content: `// lib/metrics.ts - Setup de Prometheus Client
import { Registry, Counter, Histogram, Gauge } from 'prom-client';

// Registry para métricas custom
export const register = new Registry();

// Métricas por defecto (CPU, memoria, etc)
import { collectDefaultMetrics } from 'prom-client';
collectDefaultMetrics({ register });

// Counter - Requests totales
export const httpRequestsTotal = new Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'route', 'status'],
  registers: [register],
});

// Histogram - Duración de requests
export const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.1, 0.5, 1, 2, 5], // seconds
  registers: [register],
});

// Gauge - Usuarios activos
export const activeUsers = new Gauge({
  name: 'active_users',
  help: 'Number of active users',
  registers: [register],
});

// Gauge - Database connections
export const dbConnections = new Gauge({
  name: 'db_connections_active',
  help: 'Number of active database connections',
  registers: [register],
});`,
          },
          {
            filePath: 'api/metrics-endpoint.ts',
            content: `// app/api/metrics/route.ts
import { NextResponse } from 'next/server';
import { register } from '@/lib/metrics';

export async function GET() {
  try {
    const metrics = await register.metrics();
    
    return new NextResponse(metrics, {
      headers: {
        'Content-Type': register.contentType,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to collect metrics' },
      { status: 500 }
    );
  }
}`,
          },
          {
            filePath: 'middleware/metrics-middleware.ts',
            content: `// middleware.ts - Instrumentar requests
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { httpRequestsTotal, httpRequestDuration } from '@/lib/metrics';

export function middleware(request: NextRequest) {
  const start = Date.now();
  
  // Continuar con el request
  const response = NextResponse.next();
  
  // Después del response
  const duration = (Date.now() - start) / 1000;
  const method = request.method;
  const route = request.nextUrl.pathname;
  const status = response.status;
  
  // Incrementar counter
  httpRequestsTotal.inc({
    method,
    route,
    status: status.toString(),
  });
  
  // Registrar duración
  httpRequestDuration.observe(
    { method, route, status: status.toString() },
    duration
  );
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/metrics).*)',
  ],
};`,
          },
          {
            filePath: 'custom-metrics/business-metrics.ts',
            content: `// Métricas de negocio custom
import { Counter, Histogram } from 'prom-client';
import { register } from '@/lib/metrics';

// Signup metrics
export const userSignupsTotal = new Counter({
  name: 'user_signups_total',
  help: 'Total user signups',
  labelNames: ['source', 'plan'],
  registers: [register],
});

export const userSignupDuration = new Histogram({
  name: 'user_signup_duration_seconds',
  help: 'Time taken to complete signup',
  buckets: [1, 2, 5, 10, 30],
  registers: [register],
});

// Payment metrics
export const paymentsTotal = new Counter({
  name: 'payments_total',
  help: 'Total payments processed',
  labelNames: ['status', 'method'],
  registers: [register],
});

export const paymentAmount = new Histogram({
  name: 'payment_amount_dollars',
  help: 'Payment amounts in dollars',
  buckets: [10, 50, 100, 500, 1000],
  registers: [register],
});

// Feature usage
export const featureUsage = new Counter({
  name: 'feature_usage_total',
  help: 'Feature usage count',
  labelNames: ['feature', 'user_tier'],
  registers: [register],
});

// Uso:
async function handleSignup(data: SignupData) {
  const start = Date.now();
  
  try {
    await createUser(data);
    
    userSignupsTotal.inc({
      source: data.source,
      plan: data.plan,
    });
    
    const duration = (Date.now() - start) / 1000;
    userSignupDuration.observe(duration);
  } catch (error) {
    // Handle error
  }
}`,
          },
          {
            filePath: 'queries/promql-examples.promql',
            content: `# PROMQL - Prometheus Query Language

# 1. Rate - Requests por segundo
rate(http_requests_total[5m])

# 2. Error rate
sum(rate(http_requests_total{status=~"5.."}[5m])) 
  / 
sum(rate(http_requests_total[5m]))

# 3. p95 latency
histogram_quantile(0.95, 
  rate(http_request_duration_seconds_bucket[5m])
)

# 4. Requests by route
sum by (route) (rate(http_requests_total[5m]))

# 5. Top 5 routes por traffic
topk(5, sum by (route) (rate(http_requests_total[5m])))

# 6. CPU usage
rate(process_cpu_seconds_total[5m]) * 100

# 7. Memory usage percentage
(process_resident_memory_bytes / node_memory_MemTotal_bytes) * 100

# 8. Request duration p50, p90, p99
histogram_quantile(0.50, rate(http_request_duration_seconds_bucket[5m]))
histogram_quantile(0.90, rate(http_request_duration_seconds_bucket[5m]))
histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))

# 9. Active users over time
active_users

# 10. Increase in signups last hour
increase(user_signups_total[1h])`,
          },
          {
            filePath: 'alerts/alert-rules.yml',
            content: `# prometheus-alerts.yml
groups:
  - name: application_alerts
    interval: 30s
    rules:
      # High error rate
      - alert: HighErrorRate
        expr: |
          sum(rate(http_requests_total{status=~"5.."}[5m])) 
            / 
          sum(rate(http_requests_total[5m])) > 0.05
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High error rate detected"
          description: "Error rate is {{ $value | humanizePercentage }}"
      
      # High latency
      - alert: HighLatency
        expr: |
          histogram_quantile(0.95,
            rate(http_request_duration_seconds_bucket[5m])
          ) > 2
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High latency detected"
          description: "p95 latency is {{ $value }}s"
      
      # Low active users (potential issue)
      - alert: LowActiveUsers
        expr: active_users < 10
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "Unusually low active users"
          description: "Only {{ $value }} active users"
      
      # High memory usage
      - alert: HighMemoryUsage
        expr: |
          (process_resident_memory_bytes / 
           node_memory_MemTotal_bytes) > 0.9
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High memory usage"
          description: "Memory usage at {{ $value | humanizePercentage }}"`,
          },
          {
            filePath: 'docker/docker-compose.yml',
            content: `# Docker Compose para Prometheus + Grafana
version: '3.8'

services:
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - ./alerts.yml:/etc/prometheus/alerts.yml
      - prometheus-data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
    networks:
      - monitoring

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3001:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
      - GF_USERS_ALLOW_SIGN_UP=false
    volumes:
      - grafana-data:/var/lib/grafana
      - ./grafana/dashboards:/etc/grafana/provisioning/dashboards
      - ./grafana/datasources:/etc/grafana/provisioning/datasources
    networks:
      - monitoring
    depends_on:
      - prometheus

  alertmanager:
    image: prom/alertmanager:latest
    ports:
      - "9093:9093"
    volumes:
      - ./alertmanager.yml:/etc/alertmanager/alertmanager.yml
    command:
      - '--config.file=/etc/alertmanager/alertmanager.yml'
    networks:
      - monitoring

networks:
  monitoring:
    driver: bridge

volumes:
  prometheus-data:
  grafana-data:`,
          },
          {
            filePath: 'config/prometheus.yml',
            content: `# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets: ['alertmanager:9093']

# Load rules
rule_files:
  - "alerts.yml"

# Scrape configs
scrape_configs:
  # Next.js app
  - job_name: 'nextjs-app'
    static_configs:
      - targets: ['host.docker.internal:3000']
    metrics_path: '/api/metrics'
    scrape_interval: 10s
  
  # Prometheus itself
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
  
  # Node exporter (system metrics)
  - job_name: 'node'
    static_configs:
      - targets: ['node-exporter:9100']`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Prometheus Monitoring</h2>
          <PrometheusDemo />
        </div>
      </RightPanel>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DataDog - Monitoring & Observability',
  description: 'Plataforma de monitoreo y observabilidad para aplicaciones'
};

export default function DataDogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">DataDog</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Plataforma completa de monitoreo, logging y observabilidad para aplicaciones modernas.
        </p>
      </div>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Pilares de Observabilidad</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Metrics - Métricas de rendimiento y negocio</li>
          <li>Traces - Distributed tracing</li>
          <li>Logs - Logging centralizado</li>
          <li>RUM - Real User Monitoring</li>
          <li>APM - Application Performance Monitoring</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Implementación Frontend</h2>
        
        <div className="space-y-4">
          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">1. Setup Básico</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`# Instalar
yarn add @datadog/browser-rum @datadog/browser-logs

# Inicializar RUM
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: process.env.NEXT_PUBLIC_DATADOG_APP_ID,
  clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
  site: 'datadoghq.com',
  service: 'my-app',
  env: process.env.NODE_ENV,
  version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input'
});`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">2. Next.js Integration</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// app/providers.tsx
'use client';

import { useEffect } from 'react';
import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs';

export function DataDogProvider({ children }) {
  useEffect(() => {
    // Initialize RUM
    datadogRum.init({
      applicationId: process.env.NEXT_PUBLIC_DATADOG_APP_ID!,
      clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN!,
      site: 'datadoghq.com',
      service: 'my-next-app',
      env: process.env.NODE_ENV,
      version: '1.0.0',
      sessionSampleRate: 100,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true
    });

    // Initialize Logs
    datadogLogs.init({
      clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN!,
      site: 'datadoghq.com',
      forwardErrorsToLogs: true,
      sessionSampleRate: 100
    });

    datadogRum.startSessionReplayRecording();
  }, []);

  return <>{children}</>;
}

// app/layout.tsx
import { DataDogProvider } from './providers';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <DataDogProvider>
          {children}
        </DataDogProvider>
      </body>
    </html>
  );
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">3. Custom Events</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { datadogRum } from '@datadog/browser-rum';

// Track custom action
function handlePurchase(item: string, price: number) {
  datadogRum.addAction('purchase', {
    item,
    price,
    currency: 'USD'
  });
}

// Add user context
datadogRum.setUser({
  id: '123',
  name: 'John Doe',
  email: 'john@example.com',
  plan: 'premium'
});

// Add custom context
datadogRum.setGlobalContextProperty('feature_flags', {
  newCheckout: true,
  darkMode: false
});

// Track errors
try {
  riskyOperation();
} catch (error) {
  datadogRum.addError(error, {
    context: 'checkout',
    userAction: 'submit_payment'
  });
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">4. Performance Monitoring</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Measure custom timing
import { datadogRum } from '@datadog/browser-rum';

async function loadData() {
  const startTime = performance.now();
  
  try {
    const data = await fetch('/api/data');
    const duration = performance.now() - startTime;
    
    datadogRum.addTiming('data_load_time', duration);
    
    return data;
  } catch (error) {
    datadogRum.addError(error, {
      type: 'data_load_error'
    });
    throw error;
  }
}

// Track component render time
function MyComponent() {
  useEffect(() => {
    const timing = performance.mark('component-rendered');
    
    datadogRum.addTiming('component_render', timing.startTime);
  }, []);
  
  return <div>Content</div>;
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">5. Logging</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { datadogLogs } from '@datadog/browser-logs';

// Log levels
datadogLogs.logger.debug('Debug message', { context: 'value' });
datadogLogs.logger.info('Info message');
datadogLogs.logger.warn('Warning message');
datadogLogs.logger.error('Error message', { error: errorObject });

// Custom logger
const logger = datadogLogs.createLogger('checkout', {
  level: 'info',
  handler: 'http',
  context: {
    team: 'payments'
  }
});

logger.info('Checkout started', {
  userId: '123',
  cartTotal: 99.99
});

// Structured logging
logger.info('Order completed', {
  orderId: 'ORD-123',
  amount: 99.99,
  items: 3,
  duration: 1234
});`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">6. Error Tracking</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Error boundary with DataDog
import { Component, ErrorInfo, ReactNode } from 'react';
import { datadogRum } from '@datadog/browser-rum';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    datadogRum.addError(error, {
      errorInfo: errorInfo.componentStack,
      type: 'react_error_boundary'
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">7. API Monitoring</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Fetch interceptor
const originalFetch = window.fetch;

window.fetch = async (...args) => {
  const startTime = performance.now();
  const [url] = args;
  
  try {
    const response = await originalFetch(...args);
    const duration = performance.now() - startTime;
    
    datadogRum.addAction('api_call', {
      url,
      status: response.status,
      duration,
      success: response.ok
    });
    
    return response;
  } catch (error) {
    datadogRum.addError(error, {
      type: 'fetch_error',
      url
    });
    throw error;
  }
};

// TanStack Query integration
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => {
        datadogRum.addError(error, {
          type: 'query_error'
        });
      }
    }
  }
});`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">8. Backend APM (Node.js)</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// pages/api/users.ts
import tracer from 'dd-trace';

tracer.init({
  service: 'my-api',
  env: process.env.NODE_ENV,
  version: '1.0.0'
});

export default async function handler(req, res) {
  const span = tracer.startSpan('api.users.get');
  
  try {
    const users = await db.users.findMany();
    
    span.setTag('user_count', users.length);
    res.json(users);
  } catch (error) {
    span.setTag('error', true);
    span.log({ event: 'error', message: error.message });
    res.status(500).json({ error: 'Internal error' });
  } finally {
    span.finish();
  }
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">9. Custom Metrics</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Send custom metrics
import { datadogRum } from '@datadog/browser-rum';

function trackBusinessMetric() {
  datadogRum.addAction('conversion', {
    type: 'signup',
    plan: 'premium',
    value: 99
  });
}

// Track feature usage
function trackFeature(featureName: string) {
  datadogRum.addAction('feature_usage', {
    feature: featureName,
    timestamp: Date.now()
  });
}

// A/B test tracking
datadogRum.setGlobalContextProperty('experiments', {
  checkout_v2: 'variant_a',
  new_pricing: 'control'
});`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">10. Dashboard Queries</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Ejemplo de queries en DataDog

// Error rate
sum:rum.error.count{service:my-app}.as_rate()

// Average page load time
avg:rum.view.loading_time{service:my-app}

// P95 API response time
p95:rum.resource.duration{service:my-app,resource_type:fetch}

// Conversion funnel
count:rum.action.custom{action.name:page_view}
count:rum.action.custom{action.name:add_to_cart}
count:rum.action.custom{action.name:checkout}
count:rum.action.custom{action.name:purchase}

// User sessions by country
count:rum.session.count{*} by {geo.country}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Usa sample rates apropiados para reducir costos</li>
          <li>Mask datos sensibles (passwords, tarjetas)</li>
          <li>Tag eventos consistentemente</li>
          <li>Crea dashboards por equipo/feature</li>
          <li>Configura alerts para métricas críticas</li>
          <li>Correlaciona frontend y backend traces</li>
          <li>Revisa session replays para UX issues</li>
          <li>Monitorea Core Web Vitals</li>
        </ul>
      </section>

      <div className="mt-8">
        <Link 
          href="/tools"
          style={{ color: 'var(--primary)' }}
          className="hover:underline"
        >
          ← Volver a Tools
        </Link>
      </div>
    </div>
  );
}

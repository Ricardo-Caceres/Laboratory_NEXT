export default function ArtilleryPage() {
  return (
    <div className="container">
      <h1>Artillery - Load Testing & Performance</h1>
      
      <section>
        <h2>¿Qué es Artillery?</h2>
        <p>
          Artillery es una herramienta moderna de testing de carga y rendimiento para APIs, microservicios y aplicaciones web.
          Es altamente escalable, fácil de usar y está diseñada para CI/CD.
        </p>
      </section>

      <section>
        <h2>Características Principales</h2>
        <ul>
          <li><strong>Multi-Protocol:</strong> HTTP, WebSocket, Socket.io, gRPC</li>
          <li><strong>Scenarios:</strong> Flujos de usuario complejos</li>
          <li><strong>Métricas en tiempo real:</strong> Latencia, throughput, errores</li>
          <li><strong>CI/CD Integration:</strong> GitHub Actions, CircleCI, Jenkins</li>
          <li><strong>Cloud-native:</strong> AWS Lambda, Fargate</li>
          <li><strong>Plugins:</strong> Extensible y personalizable</li>
        </ul>
      </section>

      <section>
        <h2>Instalación</h2>
        <pre><code>{`# Instalación global
npm install -g artillery

# O como dependencia de desarrollo
yarn add -D artillery

# Verificar instalación
artillery --version`}</code></pre>
      </section>

      <section>
        <h2>Configuración Básica</h2>
        <h3>Test Simple de HTTP</h3>
        <pre><code>{`# load-test.yml
config:
  target: 'https://api.example.com'
  phases:
    - duration: 60
      arrivalRate: 10
      name: "Warm up"
    - duration: 120
      arrivalRate: 50
      name: "Sustained load"
  plugins:
    expect: {}
    metrics-by-endpoint: {}

scenarios:
  - name: "API Health Check"
    flow:
      - get:
          url: "/health"
          expect:
            - statusCode: 200
            - contentType: json`}</code></pre>
      </section>

      <section>
        <h2>Escenarios Avanzados</h2>
        <h3>Flujos con Autenticación</h3>
        <pre><code>{`# auth-test.yml
config:
  target: 'https://api.example.com'
  phases:
    - duration: 60
      arrivalRate: 20

scenarios:
  - name: "Authenticated User Flow"
    flow:
      # 1. Login
      - post:
          url: "/api/auth/login"
          json:
            email: "{{ $randomEmail() }}"
            password: "test123"
          capture:
            - json: "$.token"
              as: "authToken"
      
      # 2. Get User Profile
      - get:
          url: "/api/user/profile"
          headers:
            Authorization: "Bearer {{ authToken }}"
          expect:
            - statusCode: 200
      
      # 3. Update Data
      - put:
          url: "/api/user/settings"
          headers:
            Authorization: "Bearer {{ authToken }}"
          json:
            theme: "dark"
            notifications: true
          expect:
            - statusCode: 200`}</code></pre>
      </section>

      <section>
        <h2>Testing de WebSockets</h2>
        <pre><code>{`# websocket-test.yml
config:
  target: 'ws://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 10

scenarios:
  - engine: ws
    flow:
      - send: '{"type": "subscribe", "channel": "updates"}'
      - think: 5
      - send: '{"type": "message", "data": "Hello"}'
      - think: 10`}</code></pre>
      </section>

      <section>
        <h2>Variables y Datos Dinámicos</h2>
        <pre><code>{`# dynamic-test.yml
config:
  target: 'https://api.example.com'
  payload:
    path: "./users.csv"
    fields:
      - "email"
      - "name"
  phases:
    - duration: 30
      arrivalRate: 5

scenarios:
  - name: "Create Users"
    flow:
      - post:
          url: "/api/users"
          json:
            email: "{{ email }}"
            name: "{{ name }}"
            age: "{{ $randomInt(18, 80) }}"
            country: "{{ $randomString(2) }}"
          expect:
            - statusCode: 201`}</code></pre>

        <h3>Archivo CSV (users.csv)</h3>
        <pre><code>{`email,name
user1@test.com,John Doe
user2@test.com,Jane Smith
user3@test.com,Bob Johnson`}</code></pre>
      </section>

      <section>
        <h2>Funciones Custom</h2>
        <pre><code>{`// processor.js
module.exports = {
  generateToken: function(requestParams, context, ee, next) {
    context.vars.customToken = \`token-\${Date.now()}\`;
    return next();
  },
  
  logResponse: function(requestParams, response, context, ee, next) {
    console.log('Response time:', response.timings.phases.total);
    return next();
  },
  
  validateData: function(requestParams, response, context, ee, next) {
    if (response.body.data && response.body.data.length > 0) {
      context.vars.isValid = true;
    } else {
      context.vars.isValid = false;
    }
    return next();
  }
};`}</code></pre>

        <pre><code>{`# test-with-processor.yml
config:
  target: 'https://api.example.com'
  processor: "./processor.js"
  phases:
    - duration: 30
      arrivalRate: 10

scenarios:
  - flow:
      - function: "generateToken"
      - post:
          url: "/api/data"
          headers:
            X-Custom-Token: "{{ customToken }}"
          afterResponse: "logResponse"
      - function: "validateData"`}</code></pre>
      </section>

      <section>
        <h2>Métricas y Reporting</h2>
        <pre><code>{`# Ejecutar test con reportes
artillery run load-test.yml --output report.json

# Generar reporte HTML
artillery report report.json

# Reporte en tiempo real
artillery run --quiet load-test.yml`}</code></pre>

        <h3>Ejemplo de Output</h3>
        <pre><code>{`Summary report @ 12:34:56
  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  1800
  Mean response/sec:   30
  Response time (msec):
    min: 45
    max: 892
    median: 120
    p95: 350
    p99: 650
  Scenario duration (msec):
    min: 150
    max: 2500
    median: 400
  Codes:
    200: 1750
    201: 50`}</code></pre>
      </section>

      <section>
        <h2>Plugins Útiles</h2>
        <pre><code>{`# Instalar plugins
yarn add -D artillery-plugin-expect
yarn add -D artillery-plugin-metrics-by-endpoint
yarn add -D artillery-plugin-publish-metrics

# Configuración
config:
  plugins:
    expect: {}
    metrics-by-endpoint:
      stripQueryString: true
    publish-metrics:
      - type: cloudwatch
        region: us-east-1
        namespace: MyApp/LoadTests`}</code></pre>
      </section>

      <section>
        <h2>Integración con CI/CD</h2>
        <h3>GitHub Actions</h3>
        <pre><code>{`name: Load Testing

on:
  push:
    branches: [main]
  schedule:
    - cron: '0 2 * * *'

jobs:
  load-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install Artillery
        run: npm install -g artillery
      
      - name: Run Load Test
        run: |
          artillery run tests/load-test.yml \\
            --output report.json
      
      - name: Generate Report
        run: artillery report report.json
      
      - name: Upload Report
        uses: actions/upload-artifact@v3
        with:
          name: load-test-report
          path: report.json.html
      
      - name: Check Thresholds
        run: |
          # Fallar si p95 > 500ms
          artillery run tests/load-test.yml \\
            --environment production \\
            --ensure "p95 < 500"`}</code></pre>
      </section>

      <section>
        <h2>Testing de Next.js API Routes</h2>
        <pre><code>{`# nextjs-api-test.yml
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 20
      name: "Next.js API Load Test"

scenarios:
  - name: "API Routes Test"
    flow:
      # Test API Route
      - get:
          url: "/api/users"
          expect:
            - statusCode: 200
      
      # Test with query params
      - get:
          url: "/api/users?page=1&limit=10"
          expect:
            - statusCode: 200
            - hasHeader: "content-type"
      
      # POST to API
      - post:
          url: "/api/users"
          json:
            name: "{{ $randomString(10) }}"
            email: "{{ $randomEmail() }}"
          expect:
            - statusCode: 201
      
      # Server Actions simulation
      - post:
          url: "/api/actions"
          headers:
            Content-Type: "application/json"
          json:
            action: "updateProfile"
            data:
              theme: "dark"`}</code></pre>
      </section>

      <section>
        <h2>Pruebas de Estrés Avanzadas</h2>
        <pre><code>{`# stress-test.yml
config:
  target: 'https://api.example.com'
  phases:
    # Ramp up
    - duration: 120
      arrivalRate: 1
      rampTo: 50
      name: "Ramp up"
    
    # Sustained high load
    - duration: 300
      arrivalRate: 50
      name: "Sustained load"
    
    # Spike test
    - duration: 60
      arrivalRate: 200
      name: "Spike"
    
    # Recovery
    - duration: 120
      arrivalRate: 50
      rampTo: 1
      name: "Recovery"
  
  ensure:
    max: 500           # p95 < 500ms
    median: 200        # median < 200ms
    maxErrorRate: 0.01 # < 1% error rate

scenarios:
  - name: "Complex User Journey"
    weight: 70
    flow:
      - get:
          url: "/"
      - think: 3
      - get:
          url: "/products"
      - think: 5
      - get:
          url: "/products/{{ $randomInt(1, 100) }}"
      - think: 2
      - post:
          url: "/cart/add"
          json:
            productId: "{{ $randomInt(1, 100) }}"
            quantity: "{{ $randomInt(1, 5) }}"
  
  - name: "Quick Search"
    weight: 30
    flow:
      - get:
          url: "/search?q={{ $randomString(5) }}"`}</code></pre>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li><strong>Start Small:</strong> Comienza con carga baja y aumenta gradualmente</li>
          <li><strong>Think Time:</strong> Simula comportamiento real con pausas</li>
          <li><strong>Data Variation:</strong> Usa datos dinámicos, no estáticos</li>
          <li><strong>Monitor Everything:</strong> Servidor, base de datos, red</li>
          <li><strong>Test Environments:</strong> Usa entornos similares a producción</li>
          <li><strong>Baseline Metrics:</strong> Establece métricas base antes de optimizar</li>
          <li><strong>Realistic Scenarios:</strong> Modela flujos de usuario reales</li>
          <li><strong>Error Handling:</strong> Captura y analiza errores</li>
        </ul>
      </section>

      <section>
        <h2>Troubleshooting</h2>
        <h3>Problemas Comunes</h3>
        <pre><code>{`# Error: ECONNREFUSED
# Solución: Verificar que el servidor esté corriendo

# Error: Too many open files
# Solución (Linux/Mac):
ulimit -n 65536

# Error: High error rate
# Solución: Revisar logs del servidor, reducir arrivalRate

# Timeout issues
config:
  timeout: 30 # Aumentar timeout
  http:
    timeout: 10`}</code></pre>
      </section>

      <section>
        <h2>Recursos</h2>
        <ul>
          <li><a href="https://www.artillery.io/docs" target="_blank" rel="noopener">Documentación Oficial</a></li>
          <li><a href="https://github.com/artilleryio/artillery" target="_blank" rel="noopener">GitHub Repository</a></li>
          <li><a href="https://www.artillery.io/docs/guides/getting-started/writing-your-first-test" target="_blank" rel="noopener">Getting Started Guide</a></li>
          <li><a href="https://www.artillery.io/docs/guides/plugins" target="_blank" rel="noopener">Plugins</a></li>
        </ul>
      </section>
    </div>
  );
}

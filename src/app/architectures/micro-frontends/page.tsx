import Link from "next/link";

export default function MicroFrontendsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/architectures" 
          className="text-cyan-600 hover:text-cyan-700 mb-4 inline-flex items-center gap-2"
        >
          ← Back to Architectures
        </Link>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Micro Frontends Architecture</h1>
        <p className="text-lg text-slate-600">
          Decompose frontend applications into smaller, independently deployable applications that work together
        </p>
      </div>

      {/* Overview */}
      <section className="mb-12 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
        <p className="text-slate-700 mb-4">
          Micro Frontends is an architectural style where independently deliverable frontend applications 
          are composed into a greater whole. It extends the concepts of microservices to the frontend world.
        </p>
        <p className="text-slate-700">
          Each micro frontend represents a specific business subdomain and can be developed, tested, 
          and deployed independently by different teams using different technologies if needed.
        </p>
      </section>

      {/* Key Concepts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Concepts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">🔧 Technology Agnostic</h3>
            <p className="text-slate-700">
              Each team can choose their own technology stack without being forced into framework decisions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">🏢 Team Autonomy</h3>
            <p className="text-slate-700">
              Teams can develop, test, and deploy independently without coordinating releases.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">🔄 Incremental Upgrades</h3>
            <p className="text-slate-700">
              Update parts of the application individually without rewriting the entire frontend.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">🎯 Isolated Code</h3>
            <p className="text-slate-700">
              Each micro frontend has its own repository, dependencies, and build pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Approaches */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Implementation Approaches</h2>
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-sm border border-blue-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Build-time Integration</h3>
            <p className="text-slate-700 mb-4">
              Micro frontends are published as packages and integrated during the build process.
            </p>
            <div className="bg-white/70 rounded-lg p-4">
              <pre className="text-sm overflow-x-auto">
                <code>{`// package.json
{
  "dependencies": {
    "@company/header": "^1.2.0",
    "@company/product-list": "^2.1.0",
    "@company/checkout": "^1.0.5"
  }
}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-sm border border-purple-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Server-side Composition</h3>
            <p className="text-slate-700 mb-4">
              A server assembles HTML from multiple micro frontends before sending to the browser.
            </p>
            <div className="bg-white/70 rounded-lg p-4">
              <pre className="text-sm overflow-x-auto">
                <code>{`// Server-side composition (SSI, ESI, or Tailor)
<html>
  <body>
    <include src="http://header-service/fragment" />
    <include src="http://product-service/fragment" />
    <include src="http://footer-service/fragment" />
  </body>
</html>`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-sm border border-green-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Client-side Composition (Module Federation)</h3>
            <p className="text-slate-700 mb-4">
              Webpack Module Federation dynamically loads micro frontends at runtime.
            </p>
            <div className="bg-white/70 rounded-lg p-4">
              <pre className="text-sm overflow-x-auto">
                <code>{`// webpack.config.js
new ModuleFederationPlugin({
  name: 'host',
  remotes: {
    header: 'header@http://localhost:3001/remoteEntry.js',
    products: 'products@http://localhost:3002/remoteEntry.js',
  },
  shared: ['react', 'react-dom']
})`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-sm border border-orange-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Web Components</h3>
            <p className="text-slate-700 mb-4">
              Each micro frontend is wrapped as a custom element (Web Component).
            </p>
            <div className="bg-white/70 rounded-lg p-4">
              <pre className="text-sm overflow-x-auto">
                <code>{`<!-- Using Web Components -->
<html>
  <body>
    <app-header></app-header>
    <app-products category="electronics"></app-products>
    <app-footer></app-footer>
  </body>
</html>

<script src="header.bundle.js"></script>
<script src="products.bundle.js"></script>
<script src="footer.bundle.js"></script>`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-lg shadow-sm border border-indigo-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">5. Iframe Integration</h3>
            <p className="text-slate-700 mb-4">
              Simplest approach using iframes for complete isolation (with limitations).
            </p>
            <div className="bg-white/70 rounded-lg p-4">
              <pre className="text-sm overflow-x-auto">
                <code>{`<html>
  <body>
    <iframe src="http://header-service" />
    <iframe src="http://product-service" />
    <iframe src="http://footer-service" />
  </body>
</html>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Challenges */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-2xl font-bold text-green-600 mb-4">✅ Benefits</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>Scalable development:</strong> Multiple teams can work independently</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>Technology flexibility:</strong> Use the best tool for each job</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>Faster deployments:</strong> Deploy features without full application release</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>Better fault isolation:</strong> Failures don&apos;t bring down the entire app</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>Incremental migration:</strong> Modernize legacy applications gradually</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">⚠️ Challenges</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Increased complexity:</strong> More moving parts to manage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Payload size:</strong> Risk of duplicating dependencies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Consistency:</strong> Maintaining UX/UI consistency across teams</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Testing complexity:</strong> Integration testing becomes more difficult</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Shared state:</strong> Managing state across micro frontends</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12 bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Best Practices</h2>
        <div className="space-y-3 text-slate-700">
          <div className="flex items-start gap-3">
            <span className="text-cyan-500 text-xl">1.</span>
            <p><strong>Define Clear Boundaries:</strong> Align micro frontends with business domains</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-500 text-xl">2.</span>
            <p><strong>Shared Design System:</strong> Use a common UI library for consistency</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-500 text-xl">3.</span>
            <p><strong>Communication Contracts:</strong> Establish clear APIs between micro frontends</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-500 text-xl">4.</span>
            <p><strong>Shared Dependencies:</strong> Use Module Federation or shared libraries wisely</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-500 text-xl">5.</span>
            <p><strong>Independent Deployment:</strong> Ensure each micro frontend can deploy separately</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-500 text-xl">6.</span>
            <p><strong>Monitoring & Observability:</strong> Track performance across all micro frontends</p>
          </div>
        </div>
      </section>

      {/* Tools & Frameworks */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Tools & Frameworks</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-semibold text-slate-900 mb-2">Module Federation</h4>
            <p className="text-sm text-slate-600">Webpack 5+ runtime sharing</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <h4 className="font-semibold text-slate-900 mb-2">Single-SPA</h4>
            <p className="text-sm text-slate-600">Framework for micro frontends</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h4 className="font-semibold text-slate-900 mb-2">Bit</h4>
            <p className="text-sm text-slate-600">Component-driven development</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <h4 className="font-semibold text-slate-900 mb-2">Piral</h4>
            <p className="text-sm text-slate-600">Modular app shell framework</p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
            <h4 className="font-semibold text-slate-900 mb-2">Luigi</h4>
            <p className="text-sm text-slate-600">SAP&apos;s micro frontend framework</p>
          </div>
          <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
            <h4 className="font-semibold text-slate-900 mb-2">Qiankun</h4>
            <p className="text-sm text-slate-600">Alibaba&apos;s micro frontend solution</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-12 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg shadow-sm border border-slate-200 p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">When to Use Micro Frontends</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 mb-2">✅ Good Fit:</h4>
            <ul className="text-slate-700 space-y-1 ml-5 list-disc">
              <li>Large applications with multiple teams</li>
              <li>Complex domains with clear boundaries</li>
              <li>Need for independent deployment cycles</li>
              <li>Legacy migration scenarios</li>
              <li>Different technology requirements per feature</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 mb-2">❌ Not Recommended:</h4>
            <ul className="text-slate-700 space-y-1 ml-5 list-disc">
              <li>Small applications or teams</li>
              <li>Tightly coupled features</li>
              <li>Performance-critical applications</li>
              <li>Limited development resources</li>
              <li>Simple, straightforward UIs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Learn More</h2>
        <ul className="space-y-2 text-cyan-600">
          <li>
            <a href="https://micro-frontends.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              → Micro Frontends Official Website
            </a>
          </li>
          <li>
            <a href="https://webpack.js.org/concepts/module-federation/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              → Webpack Module Federation Documentation
            </a>
          </li>
          <li>
            <a href="https://single-spa.js.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              → Single-SPA Framework
            </a>
          </li>
          <li>
            <a href="https://martinfowler.com/articles/micro-frontends.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
              → Martin Fowler on Micro Frontends
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

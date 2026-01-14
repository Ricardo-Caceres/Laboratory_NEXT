import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function MicroFrontendsPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Micro Frontends Architecture"
        description="**Micro Frontends** is an architectural style where independently deliverable frontend applications are composed into a greater whole. Each micro frontend represents a specific business subdomain.

**Key Concepts:**
- **Technology Agnostic**: Choose different tech stacks
- **Team Autonomy**: Independent development & deployment
- **Incremental Upgrades**: Update parts individually
- **Isolated Code**: Separate repositories & build pipelines

**Benefits:**
- Scalable development with multiple teams
- Technology flexibility per feature
- Faster deployments without full releases
- Better fault isolation
- Incremental legacy migration

**Challenges:**
- Increased complexity
- Payload size & dependency duplication
- UX/UI consistency
- Testing complexity
- Shared state management

**When to Use:**
- Large applications with multiple teams
- Complex domains with clear boundaries
- Independent deployment needs
- Legacy migration scenarios"
        codeContent={[
          {
            filePath: 'build-time-integration.json',
            content: `// Build-time Integration
// Micro frontends published as packages
{
  "dependencies": {
    "@company/header": "^1.2.0",
    "@company/product-list": "^2.1.0",
    "@company/checkout": "^1.0.5"
  }
}`,
          },
          {
            filePath: 'module-federation.js',
            content: `// Module Federation (Runtime Integration)
// Webpack 5+ dynamic loading
new ModuleFederationPlugin({
  name: 'host',
  remotes: {
    header: 'header@http://localhost:3001/remoteEntry.js',
    products: 'products@http://localhost:3002/remoteEntry.js',
  },
  shared: ['react', 'react-dom']
})`,
          },
          {
            filePath: 'web-components.html',
            content: `<!-- Web Components Approach -->
<!-- Each micro frontend as custom element -->
<html>
  <body>
    <app-header></app-header>
    <app-products category="electronics"></app-products>
    <app-footer></app-footer>
  </body>
</html>

<script src="header.bundle.js"></script>
<script src="products.bundle.js"></script>`,
          },
          {
            filePath: 'server-side-composition.html',
            content: `<!-- Server-side Composition -->
<!-- Server assembles HTML from multiple services -->
<html>
  <body>
    <include src="http://header-service/fragment" />
    <include src="http://product-service/fragment" />
    <include src="http://footer-service/fragment" />
  </body>
</html>`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Implementation Approaches</h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-900 mb-2">1. Build-time Integration</h4>
              <p className="text-sm text-slate-600">Packages integrated during build process</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-900 mb-2">2. Runtime Integration (Module Federation)</h4>
              <p className="text-sm text-slate-600">Dynamic loading at runtime</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-900 mb-2">3. Web Components</h4>
              <p className="text-sm text-slate-600">Custom elements for encapsulation</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-900 mb-2">4. Server-side Composition</h4>
              <p className="text-sm text-slate-600">Server assembles HTML fragments</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-900 mb-2">5. Iframe Integration</h4>
              <p className="text-sm text-slate-600">Simple but limited isolation</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold text-slate-900 mb-3">Popular Tools & Frameworks:</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• <strong>Module Federation</strong> - Webpack 5+ runtime sharing</li>
              <li>• <strong>Single-SPA</strong> - Framework for micro frontends</li>
              <li>• <strong>Bit</strong> - Component-driven development</li>
              <li>• <strong>Piral</strong> - Modular app shell</li>
              <li>• <strong>Qiankun</strong> - Alibaba's solution</li>
            </ul>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold text-slate-900 mb-3">Best Practices:</h4>
            <ol className="space-y-2 text-sm text-slate-700 list-decimal list-inside">
              <li>Define clear domain boundaries</li>
              <li>Use shared design system for consistency</li>
              <li>Establish communication contracts</li>
              <li>Share dependencies wisely</li>
              <li>Ensure independent deployment</li>
              <li>Implement monitoring & observability</li>
            </ol>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

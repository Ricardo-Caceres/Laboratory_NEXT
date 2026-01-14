import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Karma - Test Runner',
  description: 'Test runner para ejecutar tests en múltiples navegadores'
};

export default function KarmaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Karma Test Runner</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Test runner que ejecuta tests en navegadores reales, especialmente usado en Angular.
        </p>
      </div>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Características</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Tests en navegadores reales</li>
          <li>Watch mode automático</li>
          <li>Soporte para múltiples frameworks (Jasmine, Mocha, QUnit)</li>
          <li>CI/CD integration</li>
          <li>Code coverage reports</li>
          <li>Remote testing</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Configuración</h2>
        
        <div className="space-y-4">
          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">karma.conf.js</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage')
    ],
    
    files: [
      'src/**/*.spec.ts'
    ],
    
    preprocessors: {
      'src/**/*.ts': ['webpack', 'coverage']
    },
    
    reporters: ['progress', 'coverage'],
    
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    
    browsers: ['Chrome', 'ChromeHeadless'],
    
    singleRun: false,
    restartOnFileChange: true
  });
};`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">Ejemplo con Jasmine</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it('should subtract two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });
});`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">Package.json Scripts</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`{
  "scripts": {
    "test": "karma start",
    "test:once": "karma start --single-run",
    "test:headless": "karma start --browsers=ChromeHeadless"
  }
}`}
            </pre>
          </div>
        </div>
      </section>

      <div className="mt-8">
        <Link 
          href="/testing"
          style={{ color: 'var(--primary)' }}
          className="hover:underline"
        >
          ← Volver a Testing
        </Link>
      </div>
    </div>
  );
}

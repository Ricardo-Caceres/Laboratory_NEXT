import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mocha - Testing Framework',
  description: 'Framework de testing flexible para Node.js y navegadores'
};

export default function MochaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Mocha Testing Framework</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Framework de testing flexible que se ejecuta en Node.js y navegadores.
        </p>
      </div>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Características</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Flexible y extensible</li>
          <li>Soporte para async/await</li>
          <li>Múltiples assertion libraries (Chai, Should.js)</li>
          <li>Browser y Node.js support</li>
          <li>Hooks para setup/teardown</li>
          <li>Multiple reporters</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Ejemplos</h2>
        
        <div className="space-y-4">
          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">1. Test Básico con Chai</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`const { expect } = require('chai');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when value not present', () => {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">2. Async Tests</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`describe('User API', () => {
  it('should fetch user data', async () => {
    const user = await fetchUser(1);
    expect(user.name).to.equal('John');
  });
  
  it('should handle errors', (done) => {
    fetchUser(999).catch(err => {
      expect(err.message).to.include('not found');
      done();
    });
  });
});`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">3. Hooks</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`describe('Database', () => {
  before(() => {
    // runs once before all tests
    return db.connect();
  });

  after(() => {
    // runs once after all tests
    return db.disconnect();
  });

  beforeEach(() => {
    // runs before each test
    return db.clear();
  });

  afterEach(() => {
    // runs after each test
  });

  it('should save user', async () => {
    const user = await db.save({ name: 'John' });
    expect(user.id).to.exist;
  });
});`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">4. Chai Assertions</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`const { expect } = require('chai');

// BDD style
expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(obj).to.have.property('name');
expect([1,2,3]).to.include(2);
expect(fn).to.throw();

// TDD style (assert)
const { assert } = require('chai');
assert.equal(foo, 'bar');
assert.isTrue(foo);
assert.lengthOf(arr, 3);`}
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

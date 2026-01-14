import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function IntegrationTestingPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Integration Testing"
        description="**Integration Testing** verifies that different modules or services work together correctly as a group.

**Key Concepts:**
- Test module interactions
- Database integration
- API endpoints
- External services
- Multiple components

**Scope:**
- Broader than unit tests
- Narrower than E2E tests
- Focus on interfaces
- Real dependencies (when possible)

**Tools:**
- Jest + Supertest (APIs)
- Testing Library (React)
- Cypress (Component Testing)
- Playwright"
        codeContent={[
          {
            filePath: 'integration/api.test.ts',
            content: `import request from 'supertest';
import app from '../app';
import { setupDatabase, cleanupDatabase } from '../test-utils';

describe('User API Integration Tests', () => {
  beforeAll(async () => {
    await setupDatabase();
  });

  afterAll(async () => {
    await cleanupDatabase();
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
      };

      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.email).toBe(userData.email);
      expect(response.body).not.toHaveProperty('password');
    });

    it('should return 400 for invalid email', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({ email: 'invalid-email', password: '123' })
        .expect(400);

      expect(response.body).toHaveProperty('error');
    });
  });

  describe('GET /api/users/:id', () => {
    it('should get user by id', async () => {
      // First create a user
      const createResponse = await request(app)
        .post('/api/users')
        .send({ email: 'get@example.com', password: '123', name: 'Get Test' });

      const userId = createResponse.body.id;

      // Then retrieve it
      const response = await request(app)
        .get(\`/api/users/\${userId}\`)
        .expect(200);

      expect(response.body.id).toBe(userId);
      expect(response.body.email).toBe('get@example.com');
    });

    it('should return 404 for non-existent user', async () => {
      await request(app)
        .get('/api/users/999999')
        .expect(404);
    });
  });
});`,
          },
          {
            filePath: 'integration/database.test.ts',
            content: `import { UserRepository } from '../repositories/user-repository';
import { Database } from '../database';

describe('UserRepository Integration Tests', () => {
  let database: Database;
  let userRepository: UserRepository;

  beforeAll(async () => {
    database = new Database();
    await database.connect();
    userRepository = new UserRepository(database);
  });

  afterAll(async () => {
    await database.disconnect();
  });

  beforeEach(async () => {
    await database.query('DELETE FROM users');
  });

  it('should save and retrieve user', async () => {
    const user = {
      email: 'test@example.com',
      password: 'hashed_password',
      name: 'Test User',
    };

    const savedUser = await userRepository.save(user);
    expect(savedUser.id).toBeDefined();

    const retrievedUser = await userRepository.findById(savedUser.id);
    expect(retrievedUser?.email).toBe(user.email);
  });

  it('should update user', async () => {
    const user = await userRepository.save({
      email: 'original@example.com',
      password: 'pass',
      name: 'Original',
    });

    await userRepository.update(user.id, { name: 'Updated Name' });

    const updated = await userRepository.findById(user.id);
    expect(updated?.name).toBe('Updated Name');
  });
});`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Integration Testing</h2>
          
          <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-3">Test Levels:</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div>
                  <p className="font-semibold">Unit Tests</p>
                  <p className="opacity-70">Single function/class</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--primary)]" />
                <div>
                  <p className="font-semibold">Integration Tests</p>
                  <p className="opacity-70">Multiple modules together</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <div>
                  <p className="font-semibold">E2E Tests</p>
                  <p className="opacity-70">Full application flow</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">What to Test:</h3>
              <ul className="space-y-1 text-sm">
                <li>✓ API endpoints</li>
                <li>✓ Database operations</li>
                <li>✓ Service integration</li>
                <li>✓ Component interaction</li>
              </ul>
            </div>
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Best Practices:</h3>
              <ul className="space-y-1 text-sm">
                <li>• Use test database</li>
                <li>• Clean up after tests</li>
                <li>• Test realistic scenarios</li>
                <li>• Mock external APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function TDDPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Test-Driven Development (TDD)"
        description="**TDD** is a software development approach where tests are written before the actual code. It follows a simple cycle: Red, Green, Refactor.

**TDD Cycle:**
- **Red**: Write a failing test
- **Green**: Write minimal code to pass
- **Refactor**: Improve code quality

**Benefits:**
- Better code design
- Higher test coverage
- Fewer bugs
- Living documentation
- Confidence in changes

**Principles:**
- Write tests first
- Keep tests simple
- One test at a time
- Fast feedback loop

**Best Practices:**
- Test one thing at a time
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)
- Keep tests isolated"
        codeContent={[
          {
            filePath: 'tdd/calculator.test.ts',
            content: `import { describe, it, expect } from '@jest/globals';
import { Calculator } from './calculator';

describe('Calculator', () => {
  // RED: Write failing test
  it('should add two numbers', () => {
    const calculator = new Calculator();
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  it('should subtract two numbers', () => {
    const calculator = new Calculator();
    const result = calculator.subtract(5, 3);
    expect(result).toBe(2);
  });

  it('should multiply two numbers', () => {
    const calculator = new Calculator();
    const result = calculator.multiply(3, 4);
    expect(result).toBe(12);
  });

  it('should divide two numbers', () => {
    const calculator = new Calculator();
    const result = calculator.divide(10, 2);
    expect(result).toBe(5);
  });

  it('should throw error when dividing by zero', () => {
    const calculator = new Calculator();
    expect(() => calculator.divide(10, 0)).toThrow('Division by zero');
  });
});`,
          },
          {
            filePath: 'tdd/calculator.ts',
            content: `// GREEN: Write minimal code to pass tests
export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }
}

// REFACTOR: Code is already clean and simple`,
          },
          {
            filePath: 'tdd/user-service.test.ts',
            content: `import { UserService } from './user-service';
import { UserRepository } from './user-repository';

describe('UserService', () => {
  let userService: UserService;
  let mockRepository: jest.Mocked<UserRepository>;

  beforeEach(() => {
    mockRepository = {
      findById: jest.fn(),
      save: jest.fn(),
    } as any;
    
    userService = new UserService(mockRepository);
  });

  describe('createUser', () => {
    it('should create user with hashed password', async () => {
      const userData = { email: 'test@example.com', password: 'password123' };
      mockRepository.save.mockResolvedValue({ id: '1', ...userData });

      const result = await userService.createUser(userData);

      expect(mockRepository.save).toHaveBeenCalled();
      expect(result.id).toBe('1');
    });

    it('should throw error if email already exists', async () => {
      mockRepository.save.mockRejectedValue(new Error('Email exists'));

      await expect(
        userService.createUser({ email: 'test@example.com', password: '123' })
      ).rejects.toThrow('Email exists');
    });
  });
});`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

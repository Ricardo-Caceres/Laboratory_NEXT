import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function SoftwareDesignPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Software Design Principles"
        description="**Software Design Principles** guide the creation of maintainable, scalable, and robust software systems.

**SOLID Principles:**
- **S**ingle Responsibility
- **O**pen/Closed
- **L**iskov Substitution
- **I**nterface Segregation
- **D**ependency Inversion

**Other Principles:**
- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple, Stupid)
- YAGNI (You Aren't Gonna Need It)
- Separation of Concerns
- Composition over Inheritance"
        codeContent={[
          {
            filePath: 'principles/single-responsibility.ts',
            content: `// Bad: Multiple responsibilities
class User {
  saveToDatabase() { /* ... */ }
  sendEmail() { /* ... */ }
  generateReport() { /* ... */ }
}

// Good: Single responsibility
class User {
  constructor(public name: string, public email: string) {}
}

class UserRepository {
  save(user: User) { /* ... */ }
}

class EmailService {
  send(to: string, message: string) { /* ... */ }
}

class ReportGenerator {
  generate(user: User) { /* ... */ }
}`,
          },
          {
            filePath: 'principles/open-closed.ts',
            content: `// Bad: Modifying existing code
class PaymentProcessor {
  process(type: string) {
    if (type === 'credit') { /* ... */ }
    if (type === 'paypal') { /* ... */ }
  }
}

// Good: Open for extension, closed for modification
interface PaymentMethod {
  process(): void;
}

class CreditCardPayment implements PaymentMethod {
  process() { /* ... */ }
}

class PayPalPayment implements PaymentMethod {
  process() { /* ... */ }
}

class PaymentProcessor {
  process(method: PaymentMethod) {
    method.process();
  }
}`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Design Principles</h2>
          <div className="space-y-4">
            {[
              { name: 'Single Responsibility', desc: 'Class should have one reason to change' },
              { name: 'Open/Closed', desc: 'Open for extension, closed for modification' },
              { name: 'DRY', desc: 'Don\'t repeat yourself - reuse code' },
              { name: 'KISS', desc: 'Keep it simple and straightforward' },
            ].map((principle) => (
              <div key={principle.name} className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
                <h3 className="font-semibold mb-1">{principle.name}</h3>
                <p className="text-sm opacity-70">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

import { CodeBlock } from '@/components/CodeBlock';

export function BusinessRulesDescription() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
          ¿Qué son las Reglas de Negocio?
        </h2>
        <p className="text-[var(--foreground-muted)] leading-relaxed">
          Las <strong>reglas de negocio</strong> son políticas, restricciones y validaciones que 
          definen cómo debe comportarse una aplicación según los requisitos del negocio. Son la 
          lógica central que determina qué operaciones son válidas y bajo qué condiciones.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
          Principios Clave
        </h2>
        <ul className="list-disc list-inside space-y-2 text-[var(--foreground-muted)]">
          <li><strong>Separación de responsabilidades</strong>: Las reglas de negocio deben estar separadas de la UI y la infraestructura</li>
          <li><strong>Reusabilidad</strong>: Las reglas deben ser independientes del framework y reutilizables</li>
          <li><strong>Testabilidad</strong>: Deben ser fáciles de probar sin dependencias externas</li>
          <li><strong>Claridad</strong>: Deben expresar claramente la intención del negocio</li>
          <li><strong>Inmutabilidad</strong>: Preferir funciones puras que no modifiquen el estado</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
          Tipos de Reglas de Negocio
        </h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
              1. Reglas de Validación
            </h3>
            <p className="text-[var(--foreground-muted)] mb-3">
              Verifican que los datos cumplan con los requisitos del negocio.
            </p>
            <CodeBlock
              language="typescript"
              code={`// Ejemplo: Validación de edad para registro
interface User {
  name: string;
  email: string;
  age: number;
}

class UserValidationRules {
  static isEligibleForRegistration(user: User): boolean {
    return user.age >= 18 && user.age <= 120;
  }

  static hasValidEmail(email: string): boolean {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
  }

  static hasValidName(name: string): boolean {
    return name.trim().length >= 2 && name.trim().length <= 50;
  }
}

// Uso
const user: User = {
  name: "Juan Pérez",
  email: "juan@example.com",
  age: 25
};

const isValid = UserValidationRules.isEligibleForRegistration(user);
// true`}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
              2. Reglas de Cálculo
            </h3>
            <p className="text-[var(--foreground-muted)] mb-3">
              Determinan cómo se calculan valores basados en lógica de negocio.
            </p>
            <CodeBlock
              language="typescript"
              code={`// Ejemplo: Sistema de descuentos para e-commerce
interface Product {
  id: string;
  name: string;
  price: number;
  category: 'electronics' | 'clothing' | 'food';
}

interface Customer {
  id: string;
  membershipLevel: 'basic' | 'premium' | 'vip';
  purchaseHistory: number; // total de compras
}

class PricingRules {
  static calculateDiscount(
    product: Product, 
    customer: Customer,
    quantity: number
  ): number {
    let discount = 0;

    // Regla 1: Descuento por membresía
    switch (customer.membershipLevel) {
      case 'premium':
        discount += 0.1; // 10%
        break;
      case 'vip':
        discount += 0.15; // 15%
        break;
    }

    // Regla 2: Descuento por cantidad
    if (quantity >= 10) {
      discount += 0.05; // 5% adicional
    }

    // Regla 3: Descuento por historial de compras
    if (customer.purchaseHistory > 1000) {
      discount += 0.05; // 5% adicional
    }

    // Máximo descuento: 30%
    return Math.min(discount, 0.3);
  }

  static calculateFinalPrice(
    product: Product,
    customer: Customer,
    quantity: number
  ): number {
    const discount = this.calculateDiscount(product, customer, quantity);
    const subtotal = product.price * quantity;
    return subtotal * (1 - discount);
  }
}

// Uso
const product: Product = {
  id: '1',
  name: 'Laptop',
  price: 1000,
  category: 'electronics'
};

const customer: Customer = {
  id: '123',
  membershipLevel: 'premium',
  purchaseHistory: 1500
};

const finalPrice = PricingRules.calculateFinalPrice(product, customer, 2);
// $1800 con 10% descuento = $1620`}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
              3. Reglas de Autorización
            </h3>
            <p className="text-[var(--foreground-muted)] mb-3">
              Determinan qué acciones puede realizar un usuario.
            </p>
            <CodeBlock
              language="typescript"
              code={`// Ejemplo: Sistema de permisos para blog
interface User {
  id: string;
  role: 'admin' | 'editor' | 'author' | 'reader';
}

interface Post {
  id: string;
  authorId: string;
  status: 'draft' | 'published' | 'archived';
}

class PostAuthorizationRules {
  static canEdit(user: User, post: Post): boolean {
    // Admin puede editar todo
    if (user.role === 'admin') return true;

    // Editor puede editar posts publicados
    if (user.role === 'editor' && post.status === 'published') {
      return true;
    }

    // Autor solo puede editar sus propios drafts
    if (user.role === 'author') {
      return post.authorId === user.id && post.status === 'draft';
    }

    return false;
  }

  static canDelete(user: User, post: Post): boolean {
    // Solo admin puede eliminar
    if (user.role === 'admin') return true;

    // Autor puede eliminar solo sus propios drafts
    if (user.role === 'author') {
      return post.authorId === user.id && post.status === 'draft';
    }

    return false;
  }

  static canPublish(user: User, post: Post): boolean {
    // Admin y Editor pueden publicar
    if (user.role === 'admin' || user.role === 'editor') {
      return true;
    }

    return false;
  }
}`}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
              4. Reglas de Flujo de Trabajo
            </h3>
            <p className="text-[var(--foreground-muted)] mb-3">
              Definen las transiciones válidas entre estados.
            </p>
            <CodeBlock
              language="typescript"
              code={`// Ejemplo: Workflow de órdenes de compra
type OrderStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'processing' 
  | 'shipped' 
  | 'delivered' 
  | 'cancelled';

interface Order {
  id: string;
  status: OrderStatus;
  paymentReceived: boolean;
  items: Array<{ productId: string; quantity: number }>;
}

class OrderWorkflowRules {
  private static readonly VALID_TRANSITIONS: Record<
    OrderStatus, 
    OrderStatus[]
  > = {
    pending: ['confirmed', 'cancelled'],
    confirmed: ['processing', 'cancelled'],
    processing: ['shipped', 'cancelled'],
    shipped: ['delivered'],
    delivered: [],
    cancelled: []
  };

  static canTransitionTo(
    currentStatus: OrderStatus, 
    newStatus: OrderStatus
  ): boolean {
    const allowedTransitions = this.VALID_TRANSITIONS[currentStatus];
    return allowedTransitions.includes(newStatus);
  }

  static canConfirm(order: Order): boolean {
    return (
      order.status === 'pending' &&
      order.paymentReceived &&
      order.items.length > 0
    );
  }

  static canShip(order: Order): boolean {
    return order.status === 'processing';
  }

  static canCancel(order: Order): boolean {
    return ['pending', 'confirmed', 'processing'].includes(order.status);
  }

  static getNextValidStatuses(order: Order): OrderStatus[] {
    return this.VALID_TRANSITIONS[order.status];
  }
}`}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
          Patrones de Implementación en React/Next.js
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
              Patrón 1: Objetos de Reglas (Rule Objects)
            </h3>
            <CodeBlock
              language="typescript"
              code={`// lib/rules/subscription.rules.ts
export class SubscriptionRules {
  static readonly MAX_FREE_PROJECTS = 3;
  static readonly MAX_PREMIUM_PROJECTS = 50;
  static readonly MAX_ENTERPRISE_PROJECTS = Infinity;

  static canCreateProject(
    currentProjectCount: number,
    tier: 'free' | 'premium' | 'enterprise'
  ): boolean {
    const limits = {
      free: this.MAX_FREE_PROJECTS,
      premium: this.MAX_PREMIUM_PROJECTS,
      enterprise: this.MAX_ENTERPRISE_PROJECTS
    };

    return currentProjectCount < limits[tier];
  }

  static getProjectLimit(tier: 'free' | 'premium' | 'enterprise'): number {
    return {
      free: this.MAX_FREE_PROJECTS,
      premium: this.MAX_PREMIUM_PROJECTS,
      enterprise: this.MAX_ENTERPRISE_PROJECTS
    }[tier];
  }
}

// Uso en componente React
'use client';
import { SubscriptionRules } from '@/lib/rules/subscription.rules';

export function CreateProjectButton({ 
  projectCount, 
  tier 
}: { 
  projectCount: number; 
  tier: 'free' | 'premium' | 'enterprise' 
}) {
  const canCreate = SubscriptionRules.canCreateProject(projectCount, tier);
  const limit = SubscriptionRules.getProjectLimit(tier);

  return (
    <div>
      <button 
        disabled={!canCreate}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        Create Project
      </button>
      {!canCreate && (
        <p className="text-red-600 text-sm mt-2">
          You've reached your limit of {limit} projects. Upgrade to create more.
        </p>
      )}
    </div>
  );
}`}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
              Patrón 2: Custom Hooks con Reglas de Negocio
            </h3>
            <CodeBlock
              language="typescript"
              code={`// hooks/useInvoiceRules.ts
import { useMemo } from 'react';

interface Invoice {
  id: string;
  amount: number;
  dueDate: Date;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  paymentMethod?: 'card' | 'transfer' | 'cash';
}

export function useInvoiceRules(invoice: Invoice) {
  const rules = useMemo(() => {
    const now = new Date();
    const daysUntilDue = Math.floor(
      (invoice.dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );

    return {
      canEdit: invoice.status === 'draft',
      canSend: invoice.status === 'draft' && invoice.amount > 0,
      canMarkAsPaid: ['sent', 'overdue'].includes(invoice.status),
      canCancel: invoice.status !== 'paid',
      isOverdue: invoice.status === 'sent' && daysUntilDue < 0,
      requiresLatePaymentFee: daysUntilDue < -30,
      latePaymentFee: daysUntilDue < -30 ? invoice.amount * 0.05 : 0,
      daysUntilDue,
      warningLevel: 
        daysUntilDue < 0 ? 'critical' :
        daysUntilDue <= 7 ? 'warning' : 'normal'
    };
  }, [invoice]);

  return rules;
}

// Uso en componente
import { useInvoiceRules } from '@/hooks/useInvoiceRules';

export function InvoiceCard(\\{ invoice \\}: \\{ invoice: Invoice \\}) {
  const rules = useInvoiceRules(invoice);

  return (
    <div className="border rounded-lg p-4">
      <h3>Invoice #\\{invoice.id\\}</h3>
      <p>Amount: $\\{invoice.amount\\}</p>
      
      \\{rules.isOverdue && (
        <div className="bg-red-100 text-red-800 p-2 rounded mt-2">
          <strong>Overdue!</strong> \\{Math.abs(rules.daysUntilDue)\\} days late
          \\{rules.requiresLatePaymentFee && (
            <p>Late fee: $\\{rules.latePaymentFee.toFixed(2)\\}</p>
          )\\}
        </div>
      )\\}

      <div className="flex gap-2 mt-4">
        \\{rules.canSend && (
          <button className="px-3 py-1 bg-blue-600 text-white rounded">
            Send
          </button>
        )\\}
        \\{rules.canMarkAsPaid && (
          <button className="px-3 py-1 bg-green-600 text-white rounded">
            Mark as Paid
          </button>
        )\\}
        \\{rules.canEdit && (
          <button className="px-3 py-1 bg-gray-600 text-white rounded">
            Edit
          </button>
        )\\}
      </div>
    </div>
  );
}`}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
              Patrón 3: Especificaciones (Specification Pattern)
            </h3>
            <CodeBlock
              language="typescript"
              code={`// lib/specifications/user.specification.ts
interface User {
  id: string;
  age: number;
  country: string;
  isVerified: boolean;
  accountCreatedAt: Date;
}

abstract class Specification<T> {
  abstract isSatisfiedBy(item: T): boolean;

  and(other: Specification<T>): Specification<T> {
    return new AndSpecification(this, other);
  }

  or(other: Specification<T>): Specification<T> {
    return new OrSpecification(this, other);
  }

  not(): Specification<T> {
    return new NotSpecification(this);
  }
}

class AndSpecification<T> extends Specification<T> {
  constructor(
    private spec1: Specification<T>,
    private spec2: Specification<T>
  ) {
    super();
  }

  isSatisfiedBy(item: T): boolean {
    return this.spec1.isSatisfiedBy(item) && this.spec2.isSatisfiedBy(item);
  }
}

class OrSpecification<T> extends Specification<T> {
  constructor(
    private spec1: Specification<T>,
    private spec2: Specification<T>
  ) {
    super();
  }

  isSatisfiedBy(item: T): boolean {
    return this.spec1.isSatisfiedBy(item) || this.spec2.isSatisfiedBy(item);
  }
}

class NotSpecification<T> extends Specification<T> {
  constructor(private spec: Specification<T>) {
    super();
  }

  isSatisfiedBy(item: T): boolean {
    return !this.spec.isSatisfiedBy(item);
  }
}

// Especificaciones concretas
class IsAdultSpecification extends Specification<User> {
  isSatisfiedBy(user: User): boolean {
    return user.age >= 18;
  }
}

class IsVerifiedSpecification extends Specification<User> {
  isSatisfiedBy(user: User): boolean {
    return user.isVerified;
  }
}

class IsFromCountrySpecification extends Specification<User> {
  constructor(private country: string) {
    super();
  }

  isSatisfiedBy(user: User): boolean {
    return user.country === this.country;
  }
}

class HasActiveAccountSpecification extends Specification<User> {
  isSatisfiedBy(user: User): boolean {
    const daysSinceCreation = 
      (Date.now() - user.accountCreatedAt.getTime()) / (1000 * 60 * 60 * 24);
    return daysSinceCreation >= 30;
  }
}

// Uso combinado
export class UserEligibilityRules {
  static canAccessPremiumContent(user: User): boolean {
    const spec = new IsAdultSpecification()
      .and(new IsVerifiedSpecification())
      .and(new HasActiveAccountSpecification());
    
    return spec.isSatisfiedBy(user);
  }

  static canVote(user: User): boolean {
    const spec = new IsAdultSpecification()
      .and(new IsVerifiedSpecification())
      .and(
        new IsFromCountrySpecification('US')
          .or(new IsFromCountrySpecification('CA'))
          .or(new IsFromCountrySpecification('UK'))
      );
    
    return spec.isSatisfiedBy(user);
  }
}`}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
          Mejores Prácticas
        </h2>
        <ul className="list-disc list-inside space-y-2 text-[var(--foreground-muted)]">
          <li>
            <strong>Mantén las reglas fuera de los componentes</strong>: Separa la lógica de negocio 
            de la UI para mejor testabilidad y reutilización
          </li>
          <li>
            <strong>Usa TypeScript</strong>: Los tipos ayudan a documentar y validar reglas de negocio
          </li>
          <li>
            <strong>Nombra las reglas claramente</strong>: Usa nombres que expresen la intención del negocio 
            (canApproveTransaction, isEligibleForDiscount)
          </li>
          <li>
            <strong>Evita reglas dispersas</strong>: Centraliza reglas relacionadas en clases o módulos
          </li>
          <li>
            <strong>Documenta las excepciones</strong>: Cuando una regla tiene casos especiales, documéntalos
          </li>
          <li>
            <strong>Haz las reglas testeables</strong>: Usa funciones puras sin efectos secundarios
          </li>
          <li>
            <strong>Versiona las reglas</strong>: Si las reglas cambian frecuentemente, considera versionarlas
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
          Beneficios
        </h2>
        <ul className="list-disc list-inside space-y-2 text-[var(--foreground-muted)]">
          <li>✅ Código más mantenible y legible</li>
          <li>✅ Fácil de testear sin dependencias de UI</li>
          <li>✅ Reutilizable en diferentes contextos (web, mobile, API)</li>
          <li>✅ Reduce duplicación de lógica</li>
          <li>✅ Facilita cambios en requisitos de negocio</li>
          <li>✅ Mejor documentación del comportamiento del sistema</li>
        </ul>
      </section>
    </div>
  );
}

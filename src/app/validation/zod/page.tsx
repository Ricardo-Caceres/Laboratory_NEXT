import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zod - Schema Validation',
  description: 'TypeScript-first schema validation con inferencia estática de tipos'
};

export default function ZodPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Zod Schema Validation</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Biblioteca de validación TypeScript-first con inferencia automática de tipos.
        </p>
      </div>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">¿Por qué Zod?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Zero dependencies</li>
          <li>TypeScript-first con inferencia automática</li>
          <li>Composable schemas</li>
          <li>Rich error messages</li>
          <li>Funciona en Node y navegador</li>
          <li>Pequeño bundle size (~8kb)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Uso Práctico</h2>
        
        <div className="space-y-4">
          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">1. Schemas Básicos</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { z } from 'zod';

// Primitivos
const stringSchema = z.string();
const numberSchema = z.number();
const booleanSchema = z.boolean();
const dateSchema = z.date();

// Con validaciones
const emailSchema = z.string().email();
const urlSchema = z.string().url();
const uuidSchema = z.string().uuid();

// Números
const positiveSchema = z.number().positive();
const intSchema = z.number().int();
const rangeSchema = z.number().min(1).max(100);

// Strings
const minLengthSchema = z.string().min(3);
const maxLengthSchema = z.string().max(255);
const regexSchema = z.string().regex(/^[A-Z]/);
const trimSchema = z.string().trim();`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">2. Objects</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(2).max(100),
  age: z.number().int().positive().optional(),
  role: z.enum(['admin', 'user', 'guest']),
  createdAt: z.date()
});

// Inferir tipo TypeScript
type User = z.infer<typeof UserSchema>;

// Validar
const result = UserSchema.safeParse({
  id: '123e4567-e89b-12d3-a456-426614174000',
  email: 'john@example.com',
  name: 'John Doe',
  role: 'user',
  createdAt: new Date()
});

if (result.success) {
  console.log(result.data); // Typed as User
} else {
  console.error(result.error); // ZodError con detalles
}

// Parse (throw en error)
const user = UserSchema.parse(data);`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">3. Arrays y Records</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Arrays
const stringArray = z.array(z.string());
const minArray = z.array(z.number()).min(1);
const maxArray = z.array(z.string()).max(10);
const nonEmptyArray = z.array(z.string()).nonempty();

// Tuple
const coordSchema = z.tuple([z.number(), z.number()]);
type Coordinates = z.infer<typeof coordSchema>; // [number, number]

// Record (diccionario)
const pricesSchema = z.record(z.number());
type Prices = z.infer<typeof pricesSchema>; // { [key: string]: number }

// Map
const mapSchema = z.map(z.string(), z.number());

// Set
const setSchema = z.set(z.string());`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">4. Unions y Discriminated Unions</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Union simple
const stringOrNumber = z.union([z.string(), z.number()]);
const nullableString = z.string().nullable();
const optionalString = z.string().optional();

// Discriminated union
const SuccessSchema = z.object({
  status: z.literal('success'),
  data: z.any()
});

const ErrorSchema = z.object({
  status: z.literal('error'),
  message: z.string()
});

const ResponseSchema = z.discriminatedUnion('status', [
  SuccessSchema,
  ErrorSchema
]);

type Response = z.infer<typeof ResponseSchema>;

// TypeScript sabe el tipo basado en status
function handleResponse(res: Response) {
  if (res.status === 'success') {
    console.log(res.data); // ✅ TypeScript sabe que data existe
  } else {
    console.log(res.message); // ✅ TypeScript sabe que message existe
  }
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">5. Refinements y Transforms</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Refine - validación custom
const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters')
  .refine(
    (val) => /[A-Z]/.test(val),
    'Password must contain uppercase letter'
  )
  .refine(
    (val) => /[0-9]/.test(val),
    'Password must contain number'
  );

// Transform - transformar valor
const numberFromString = z.string().transform((val) => parseInt(val));
const trimmed = z.string().transform((val) => val.trim());

// Preprocess
const dateFromString = z.preprocess(
  (arg) => {
    if (typeof arg === 'string') return new Date(arg);
    return arg;
  },
  z.date()
);

// Validación compleja
const userSchema = z.object({
  password: z.string(),
  confirmPassword: z.string()
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords don't match",
    path: ['confirmPassword']
  }
);`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">6. React Hook Form Integration</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Min 8 characters'),
  age: z.number().min(18, 'Must be 18+')
});

type FormData = z.infer<typeof formSchema>;

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data); // Fully typed!
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input type="password" {...register('password')} />
      {errors.password && <span>{errors.password.message}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">7. API Validation</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';

const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(100),
  password: z.string().min(8)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = CreateUserSchema.parse(body);
    
    // validatedData es fully typed
    const user = await db.user.create({
      data: validatedData
    });
    
    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { errors: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal error' },
      { status: 500 }
    );
  }
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">8. Environment Variables</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_KEY: z.string().min(1),
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.string().transform(Number).pipe(z.number().int().positive())
});

// Validar al inicio
export const env = envSchema.parse(process.env);

// Ahora env es typed y validado
console.log(env.DATABASE_URL); // string
console.log(env.PORT); // number`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">9. Composición de Schemas</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Base schemas
const BaseEntitySchema = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date()
});

const TimestampsSchema = z.object({
  createdAt: z.date(),
  updatedAt: z.date()
});

// Extend
const UserSchema = BaseEntitySchema.extend({
  email: z.string().email(),
  name: z.string()
});

// Merge
const UserWithTimestamps = UserSchema.merge(TimestampsSchema);

// Pick
const UserPublicSchema = UserSchema.pick({
  id: true,
  name: true
});

// Omit
const UserWithoutId = UserSchema.omit({ id: true });

// Partial
const PartialUser = UserSchema.partial();

// Required
const RequiredUser = PartialUser.required();`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">10. Error Handling</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18)
});

const result = schema.safeParse({
  email: 'invalid',
  age: 15
});

if (!result.success) {
  // Format errors
  const formatted = result.error.format();
  console.log(formatted.email?._errors); // ["Invalid email"]
  console.log(formatted.age?._errors); // ["Number must be >= 18"]
  
  // Flat errors
  const flat = result.error.flatten();
  console.log(flat.fieldErrors.email); // ["Invalid email"]
  
  // Custom error map
  const customError = z.setErrorMap((issue, ctx) => {
    if (issue.code === z.ZodIssueCode.invalid_type) {
      return { message: 'Wrong type!' };
    }
    return { message: ctx.defaultError };
  });
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Define schemas cerca de donde se usan</li>
          <li>Usa safeParse en lugar de parse para mejor control de errores</li>
          <li>Aprovecha inferencia de tipos con z.infer</li>
          <li>Crea schemas reutilizables para validaciones comunes</li>
          <li>Valida en cliente Y servidor</li>
          <li>Usa mensajes de error descriptivos</li>
          <li>Combina con React Hook Form para forms complejos</li>
        </ul>
      </section>

      <div className="mt-8">
        <Link 
          href="/validation"
          style={{ color: 'var(--primary)' }}
          className="hover:underline"
        >
          ← Volver a Validation
        </Link>
      </div>
    </div>
  );
}

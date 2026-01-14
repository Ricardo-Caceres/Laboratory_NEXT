export default function PrismaPage() {
  return (
    <div className="min-h-screen p-8" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <h1 className="text-4xl font-bold mb-6">Prisma ORM</h1>
      
      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>1. Setup</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`yarn add -D prisma
yarn add @prisma/client

npx prisma init

# .env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>2. Schema Definition</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String?
  posts     Post[]
  profile   Profile?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([email])
}

model Profile {
  id     String @id @default(uuid())
  bio    String
  userId String @unique
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Post {
  id        String     @id @default(uuid())
  title     String
  content   String?
  published Boolean    @default(false)
  authorId  String
  author    User       @relation(fields: [authorId], references: [id])
  categories Category[]
  
  @@index([authorId])
}

model Category {
  id    String @id @default(uuid())
  name  String @unique
  posts Post[]
}

// Comandos
// npx prisma migrate dev --name init
// npx prisma generate
// npx prisma studio`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>3. Client Setup (Next.js)</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>4. CRUD Operations</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`import { prisma } from '@/lib/prisma';

// CREATE
const user = await prisma.user.create({
  data: {
    email: 'john@example.com',
    name: 'John Doe',
    posts: {
      create: [
        { title: 'First Post', published: true },
        { title: 'Second Post' }
      ]
    }
  },
  include: {
    posts: true
  }
});

// READ
const users = await prisma.user.findMany({
  where: {
    email: {
      contains: '@example.com'
    },
    posts: {
      some: {
        published: true
      }
    }
  },
  include: {
    posts: {
      where: { published: true },
      orderBy: { createdAt: 'desc' }
    },
    profile: true
  },
  take: 10,
  skip: 0
});

const user = await prisma.user.findUnique({
  where: { email: 'john@example.com' }
});

const user = await prisma.user.findUniqueOrThrow({
  where: { id: '123' }
});

// UPDATE
const updated = await prisma.user.update({
  where: { id: '123' },
  data: {
    name: 'Jane Doe',
    posts: {
      updateMany: {
        where: { published: false },
        data: { published: true }
      }
    }
  }
});

// UPSERT
const upserted = await prisma.user.upsert({
  where: { email: 'john@example.com' },
  update: { name: 'John Updated' },
  create: {
    email: 'john@example.com',
    name: 'John New'
  }
});

// DELETE
await prisma.user.delete({
  where: { id: '123' }
});

await prisma.user.deleteMany({
  where: {
    createdAt: {
      lt: new Date('2020-01-01')
    }
  }
});`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>5. Advanced Queries</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// Aggregation
const stats = await prisma.post.aggregate({
  _count: true,
  _avg: { views: true },
  _sum: { views: true },
  _min: { createdAt: true },
  _max: { createdAt: true }
});

// Group By
const grouped = await prisma.post.groupBy({
  by: ['authorId', 'published'],
  _count: {
    id: true
  },
  _avg: {
    views: true
  },
  having: {
    views: {
      _avg: {
        gt: 100
      }
    }
  }
});

// Raw SQL
const result = await prisma.$queryRaw\`
  SELECT * FROM "User" WHERE "email" = \${email}
\`;

// Transactions
const [user, posts] = await prisma.$transaction([
  prisma.user.create({ data: { email: 'test@test.com' } }),
  prisma.post.findMany()
]);

// Interactive Transactions
await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({
    data: { email: 'test@test.com' }
  });
  
  await tx.post.create({
    data: {
      title: 'First Post',
      authorId: user.id
    }
  });
});`}
        </pre>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>6. Next.js API Routes</h2>
        <pre className="p-4 rounded text-sm overflow-x-auto" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
{`// app/api/users/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = 10;
  
  const [users, total] = await prisma.$transaction([
    prisma.user.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        _count: {
          select: { posts: true }
        }
      }
    }),
    prisma.user.count()
  ]);
  
  return NextResponse.json({
    users,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  
  const user = await prisma.user.create({
    data: body
  });
  
  return NextResponse.json(user, { status: 201 });
}

// app/api/users/[id]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
    include: {
      posts: true,
      profile: true
    }
  });
  
  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(user);
}`}
        </pre>
      </section>

      <div className="mt-8 p-6 rounded-lg" style={{ background: 'var(--success)', color: '#000' }}>
        <h3 className="text-xl font-semibold mb-2">🎯 Best Practices</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Usa singleton pattern para PrismaClient en desarrollo</li>
          <li>Siempre incluye índices en campos frecuentemente consultados</li>
          <li>Usa transactions para operaciones relacionadas</li>
          <li>Aprovecha include y select para optimizar queries</li>
          <li>Usa Prisma Studio para debugging (npx prisma studio)</li>
          <li>Mantén migrations en control de versiones</li>
        </ul>
      </div>
    </div>
  );
}

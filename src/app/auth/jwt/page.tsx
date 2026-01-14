import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function JWTAuthPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="JWT Authentication"
        description="**JSON Web Tokens (JWT)** are a secure way to transmit information between parties as a JSON object. They are commonly used for authentication and authorization.

**JWT Structure:**
- **Header**: Algorithm and token type
- **Payload**: Claims (user data)
- **Signature**: Verifies token integrity

**Benefits:**
- Stateless authentication
- Scalable across services
- Self-contained tokens
- Cross-domain authentication

**Use Cases:**
- User authentication
- API authorization
- Single Sign-On (SSO)
- Secure data exchange"
        codeContent={[
          {
            filePath: 'auth/login.ts',
            content: `import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET!;

interface LoginCredentials {
  email: string;
  password: string;
}

interface TokenPayload {
  userId: number;
  email: string;
  role: string;
}

export async function login(credentials: LoginCredentials) {
  // Verify credentials (example)
  const user = await verifyCredentials(credentials);
  
  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Create JWT token
  const token = jwt.sign(
    {
      userId: user.id,
      email: user.email,
      role: user.role,
    } as TokenPayload,
    SECRET_KEY,
    { expiresIn: '24h' }
  );

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  };
}`,
          },
          {
            filePath: 'auth/middleware.ts',
            content: `import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET!;

export async function authMiddleware(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json(
      { error: 'No token provided' },
      { status: 401 }
    );
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    
    // Add user info to request
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', (decoded as any).userId);
    
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 401 }
    );
  }
}`,
          },
          {
            filePath: 'auth/hooks/useAuth.ts',
            content: `import { useState, useEffect } from 'react';

interface User {
  id: number;
  email: string;
  name: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing token
    const token = localStorage.getItem('token');
    if (token) {
      // Verify and get user info
      fetchUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    if (response.ok) {
      localStorage.setItem('token', data.token);
      setUser(data.user);
      return data;
    }

    throw new Error(data.error);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const getToken = () => {
    return localStorage.getItem('token');
  };

  return { user, loading, login, logout, getToken };
}`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

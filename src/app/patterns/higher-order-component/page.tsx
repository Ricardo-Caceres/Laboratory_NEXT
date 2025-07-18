'use client';

import { ComponentType, useEffect, useState } from 'react';

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
    }, 1000);
  }, []);

  return { isAuthenticated, loading };
}

function withAuth<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  const WithAuthComponent = (props: P) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
      return <div>Please log in to view this content.</div>;
    }

    return <WrappedComponent {...props} />;
  };

  WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAuthComponent;
}

function SecretDashboard() {
  return (
    <div>
      <h1>Secret Dashboard</h1>
      <p>Welcome, authenticated user!</p>
    </div>
  );
}

const AuthenticatedDashboard = withAuth(SecretDashboard);

export default function MyPage() {
  return <AuthenticatedDashboard />;
}

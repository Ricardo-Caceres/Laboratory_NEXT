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
      return <div className="text-xl font-semibold text-gray-600">Loading...</div>;
    }

    if (!isAuthenticated) {
      return <div className="text-xl font-semibold text-red-600">Please log in to view this content.</div>;
    }

    return <WrappedComponent {...props} />;
  };

  WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAuthComponent;
}

function SecretDashboard() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Secret Dashboard</h1>
      <p className="text-lg text-gray-700">Welcome, authenticated user!</p>
    </div>
  );
}

const AuthenticatedDashboard = withAuth(SecretDashboard);

export default function MyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <AuthenticatedDashboard />
    </div>
  );
}

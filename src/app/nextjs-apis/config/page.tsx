// next/config was removed in Next.js 16
// Use environment variables instead
export default function ConfigExample() {
  // Use environment variables with NEXT_PUBLIC_ prefix for client-side access
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Next.js App';
  const version = process.env.NEXT_PUBLIC_VERSION || '1.0.0';
  const publicApiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com/public';

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Next.js Configuration Example</h1>
      <p className="text-lg mb-2">App Name: {appName}</p>
      <p className="text-lg mb-2">Version: {version}</p>
      <p className="text-lg mb-2">Public API URL: {publicApiUrl}</p>
      <p className="text-sm text-gray-600 mt-4">
        Note: next/config was removed in Next.js 16. Use environment variables instead.
      </p>
    </div>
  );
}

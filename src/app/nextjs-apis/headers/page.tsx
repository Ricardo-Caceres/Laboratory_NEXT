import { headers, cookies } from 'next/headers';

export default function HeadersExample() {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');

  const cookieStore = cookies();
  const theme = cookieStore.get('theme');

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Next.js Headers & Cookies Example</h1>
      <h2 className="text-xl font-semibold mt-4 mb-2">Request Headers (Server Component)</h2>
      <p className="text-lg mb-2">User-Agent: {userAgent}</p>
      <p className="text-lg mb-2">Theme Cookie: {theme?.value || 'Not set'}</p>
      <p className="text-lg mb-2">Check your browser's developer tools (Network tab) for request and response headers.</p>
      <p className="text-lg">To set a cookie, visit <a className="text-blue-500 hover:underline" href="/api/set-cookie">/api/set-cookie</a></p>
    </div>
  );
}

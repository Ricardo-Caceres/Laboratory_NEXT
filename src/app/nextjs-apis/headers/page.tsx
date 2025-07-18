import { headers, cookies } from 'next/headers';

export default function HeadersExample() {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');

  const cookieStore = cookies();
  const theme = cookieStore.get('theme');

  return (
    <div>
      <h1>Next.js Headers & Cookies Example</h1>
      <h2>Request Headers (Server Component)</h2>
      <p>User-Agent: {userAgent}</p>
      <p>Theme Cookie: {theme?.value || 'Not set'}</p>
      <p>Check your browser's developer tools (Network tab) for request and response headers.</p>
      <p>To set a cookie, visit <a href="/api/set-cookie">/api/set-cookie</a></p>
    </div>
  );
}

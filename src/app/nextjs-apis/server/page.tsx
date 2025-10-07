'use client';

import { useEffect, useState } from 'react';

export default function ServerApiExample() {
  const [message, setMessage] = useState('Loading...');
  const [postResponse, setPostResponse] = useState('---');

  useEffect(() => {
    fetch('/api/hello?name=Next.js')
      .then(res => res.json())
      .then(data => setMessage(data.message));

    fetch('/api/hello', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item: 'example' }),
    })
      .then(res => res.json())
      .then(data => setPostResponse(JSON.stringify(data)));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Next.js Server API Example</h1>
      <h2 className="text-xl font-semibold mt-4 mb-2">Route Handler (`/api/hello`)</h2>
      <p className="text-lg mb-2">GET Response: {message}</p>
      <p className="text-lg mb-2">POST Response: {postResponse}</p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Middleware Example</h2>
      <p className="text-lg mb-2">Check your browser&apos;s network tab for `x-custom-header` on this page&apos;s response.</p>
      <p className="text-lg">Accessing <a className="text-blue-500 hover:underline" href="/nextjs-apis/server/private">/nextjs-apis/server/private</a> (if middleware is uncommented) would redirect.</p>
    </div>
  );
}

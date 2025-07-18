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
    <div>
      <h1>Next.js Server API Example</h1>
      <h2>Route Handler (`/api/hello`)</h2>
      <p>GET Response: {message}</p>
      <p>POST Response: {postResponse}</p>
      <h2>Middleware Example</h2>
      <p>Check your browser's network tab for `x-custom-header` on this page's response.</p>
      <p>Accessing <a href="/nextjs-apis/server/private">/nextjs-apis/server/private</a> (if middleware is uncommented) would redirect.</p>
    </div>
  );
}

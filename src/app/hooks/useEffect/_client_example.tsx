'use client';

import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
}

export default function DataFetcher() {
  const [data, setData] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        setData(posts);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
      setLoading(false);
    }

    fetchData();

    return () => {
    };
  }, []);

  if (loading) {
    return <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-xl font-semibold text-gray-600">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Fetched Data</h1>
      <ul className="list-disc list-inside bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {data && data.slice(0, 5).map(post => <li key={post.id} className="mb-2 text-gray-700">{post.title}</li>)}
      </ul>
    </div>
  );
}
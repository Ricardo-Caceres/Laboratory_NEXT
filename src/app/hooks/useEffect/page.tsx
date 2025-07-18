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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data && data.slice(0, 5).map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

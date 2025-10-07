'use client';

import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function DataFetcher() {
  const [data, setData] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch');
        const posts = await response.json();
        setData(posts);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6 sm:p-8">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="mb-6">
            <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">useEffect Hook Example</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Fetching posts from JSONPlaceholder API
            </p>
          </div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-200 border-t-green-600"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-green-600 rounded-full animate-pulse"></div>
                </div>
              </div>
              <span className="mt-4 text-lg font-medium text-gray-600">Loading posts...</span>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 mb-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-red-700 font-medium">Error: {error}</p>
              </div>
            </div>
          )}

          {data && !loading && (
            <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="px-5 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Fetched Posts</h3>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">{data.length} total</span>
                </div>
                <p className="text-green-100 text-sm mt-1">Showing first 5 posts</p>
              </div>
              <ul className="divide-y divide-gray-200">
                {data.slice(0, 5).map((post, index) => (
                  <li key={post.id} className="p-5 hover:bg-gray-50 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-2 capitalize">{post.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{post.body.substring(0, 120)}...</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>useEffect</strong> lets you perform side effects in functional components like data fetching, subscriptions, or manually changing the DOM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

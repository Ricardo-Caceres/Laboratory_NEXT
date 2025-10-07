
'use client';

import { useAsyncStore } from '../store';

export default function AsyncPosts() {
  const { posts, loading, error, fetchPosts } = useAsyncStore();

  return (
    <div className="p-4 border rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-2">Posts Asíncronos (Ejemplo Avanzado)</h2>
      <button 
        onClick={fetchPosts} 
        disabled={loading} 
        className="px-4 py-2 bg-purple-500 text-white rounded disabled:bg-purple-300"
      >
        {loading ? 'Cargando...' : 'Cargar Posts'}
      </button>

      {error && <p className="text-red-500 mt-4">Error: {error}</p>}

      {posts.length > 0 && (
        <ul className="list-disc pl-5 mt-4">
          {posts.map(post => (
            <li key={post.id} className="mb-2">
              <h4 className="font-semibold">{post.title}</h4>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

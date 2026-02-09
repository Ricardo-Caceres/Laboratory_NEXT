'use client';

import { useState } from 'react';

// ============================================
// SHARED LAYER - Base building blocks
// ============================================

// Shared UI Components
const Button = ({ onClick, children, variant = 'primary' }: { 
  onClick: () => void; 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' 
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded font-medium transition-colors ${
      variant === 'primary' 
        ? 'bg-blue-600 text-white hover:bg-blue-700' 
        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
    }`}
  >
    {children}
  </button>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
    {children}
  </div>
);

// Shared API utilities
const api = {
  async fetchUsers(): Promise<User[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [
      { id: '1', name: 'Alice', email: 'alice@example.com', role: 'admin' },
      { id: '2', name: 'Bob', email: 'bob@example.com', role: 'user' },
      { id: '3', name: 'Charlie', email: 'charlie@example.com', role: 'user' },
    ];
  },
  async fetchPosts(): Promise<Post[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [
      { id: '1', title: 'Getting Started with FSD', content: 'Feature-Sliced Design is...', authorId: '1', likes: 42 },
      { id: '2', title: 'Layered Architecture', content: 'Understanding layers...', authorId: '2', likes: 28 },
    ];
  }
};

// ============================================
// ENTITIES LAYER - Business entities
// ============================================

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  likes: number;
}

// User Entity UI
const UserCard = ({ user }: { user: User }) => (
  <Card>
    <h3 className="font-bold text-slate-900">{user.name}</h3>
    <p className="text-sm text-slate-600">{user.email}</p>
    <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
      {user.role}
    </span>
  </Card>
);

// Post Entity UI
const PostCard = ({ post, author }: { post: Post; author?: User }) => (
  <Card>
    <h3 className="font-bold text-slate-900 mb-2">{post.title}</h3>
    <p className="text-slate-700 mb-3">{post.content}</p>
    <div className="flex justify-between items-center text-sm text-slate-600">
      <span>By {author?.name || 'Unknown'}</span>
      <span>❤️ {post.likes}</span>
    </div>
  </Card>
);

// ============================================
// FEATURES LAYER - User interactions
// ============================================

// Feature: Like Post
const LikePostButton = ({ postId, likes, onLike }: { 
  postId: string; 
  likes: number; 
  onLike: (id: string) => void 
}) => (
  <button
    onClick={() => onLike(postId)}
    className="flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors"
  >
    ❤️ Like ({likes})
  </button>
);

// Feature: User Filter
const UserRoleFilter = ({ 
  currentRole, 
  onFilterChange 
}: { 
  currentRole: string; 
  onFilterChange: (role: string) => void 
}) => (
  <div className="flex gap-2">
    <span className="text-slate-700 font-medium">Filter:</span>
    {['all', 'admin', 'user'].map(role => (
      <button
        key={role}
        onClick={() => onFilterChange(role)}
        className={`px-3 py-1 rounded capitalize ${
          currentRole === role
            ? 'bg-blue-600 text-white'
            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
        }`}
      >
        {role}
      </button>
    ))}
  </div>
);

// ============================================
// WIDGETS LAYER - Composite blocks
// ============================================

const UsersList = ({ users }: { users: User[] }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-slate-900">Users</h2>
    <div className="grid gap-3">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  </div>
);

const PostsFeed = ({ 
  posts, 
  users, 
  onLike 
}: { 
  posts: Post[]; 
  users: User[]; 
  onLike: (id: string) => void 
}) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-slate-900">Posts Feed</h2>
    <div className="space-y-4">
      {posts.map(post => {
        const author = users.find(u => u.id === post.authorId);
        return (
          <div key={post.id} className="space-y-2">
            <PostCard post={post} author={author} />
            <LikePostButton postId={post.id} likes={post.likes} onLike={onLike} />
          </div>
        );
      })}
    </div>
  </div>
);

// ============================================
// PAGES LAYER - Application pages
// ============================================

export default function FeatureSlicedDesignExample() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [roleFilter, setRoleFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const [fetchedUsers, fetchedPosts] = await Promise.all([
      api.fetchUsers(),
      api.fetchPosts()
    ]);
    setUsers(fetchedUsers);
    setPosts(fetchedPosts);
    setLoading(false);
  };

  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const filteredUsers = roleFilter === 'all' 
    ? users 
    : users.filter(u => u.role === roleFilter);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Feature-Sliced Design (FSD) Demo
          </h1>
          <p className="text-slate-700 mb-4">
            Interactive demonstration of FSD architecture layers: Shared → Entities → Features → Widgets → Pages
          </p>
          <Button onClick={loadData} variant="primary">
            {loading ? 'Loading...' : 'Load Data'}
          </Button>
        </div>

        {/* Layer Visualization */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">FSD Layers Structure</h2>
          <div className="space-y-2 font-mono text-sm">
            <div className="p-3 bg-purple-50 border border-purple-200 rounded">
              <strong className="text-purple-700">app/</strong> - Application initialization, providers, routing
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded ml-4">
              <strong className="text-blue-700">pages/</strong> - Complete pages (PostsFeed + UsersList)
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded ml-8">
              <strong className="text-green-700">widgets/</strong> - Composite blocks (UsersList, PostsFeed)
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded ml-12">
              <strong className="text-yellow-700">features/</strong> - User interactions (LikePost, UserFilter)
            </div>
            <div className="p-3 bg-orange-50 border border-orange-200 rounded ml-16">
              <strong className="text-orange-700">entities/</strong> - Business entities (User, Post)
            </div>
            <div className="p-3 bg-red-50 border border-red-200 rounded ml-20">
              <strong className="text-red-700">shared/</strong> - Reusable utilities (UI, API, lib)
            </div>
          </div>
          <p className="mt-4 text-slate-600 text-sm">
            <strong>Rule:</strong> Upper layers can import from lower layers, but NOT vice versa.
            Shared knows nothing about entities. Entities know nothing about features.
          </p>
        </div>

        {users.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Users Section with Filter Feature */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="mb-4">
                <UserRoleFilter currentRole={roleFilter} onFilterChange={setRoleFilter} />
              </div>
              <UsersList users={filteredUsers} />
            </div>

            {/* Posts Section with Like Feature */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <PostsFeed posts={posts} users={users} onLike={handleLike} />
            </div>
          </div>
        )}

        {/* Benefits */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">FSD Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded">
              <h3 className="font-bold text-green-900 mb-2">✅ Standardization</h3>
              <p className="text-green-800 text-sm">Same structure across all projects</p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <h3 className="font-bold text-blue-900 mb-2">🔒 Controlled Dependencies</h3>
              <p className="text-blue-800 text-sm">Clear import rules prevent spaghetti code</p>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded">
              <h3 className="font-bold text-purple-900 mb-2">📦 Easy Refactoring</h3>
              <p className="text-purple-800 text-sm">Move features between projects easily</p>
            </div>
            <div className="p-4 bg-orange-50 border border-orange-200 rounded">
              <h3 className="font-bold text-orange-900 mb-2">👥 Team Scalability</h3>
              <p className="text-orange-800 text-sm">Clear boundaries for parallel development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client'
import { useEffect, useState } from 'react';
import { Post } from '@/app/architectures/feature-sliced-design/entities/post/model/types';
import PostCard from '@/app/architectures/feature-sliced-design/entities/post/ui/PostCard';

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => setPosts(data));
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}

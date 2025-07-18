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
    <div>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}

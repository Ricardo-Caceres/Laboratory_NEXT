import { Post } from '../model/types';

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
}

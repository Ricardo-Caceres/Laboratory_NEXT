import PostList from '@/app/architectures/feature-sliced-design/widgets/PostList/ui/PostList';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Blog Feed</h1>
      <PostList />
    </main>
  );
}

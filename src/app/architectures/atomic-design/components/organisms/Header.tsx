import SearchForm from '@/app/architectures/atomic-design/components/molecules/SearchForm';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">Logo</div>
      <SearchForm />
    </header>
  );
}

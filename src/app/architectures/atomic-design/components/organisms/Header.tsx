import SearchForm from '@/app/architectures/atomic-design/components/molecules/SearchForm';

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <div>Logo</div>
      <SearchForm />
    </header>
  );
}

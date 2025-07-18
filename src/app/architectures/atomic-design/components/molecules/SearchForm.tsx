import Button from '@/app/architectures/atomic-design/components/atoms/Button';
import Input from '@/app/architectures/atomic-design/components/atoms/Input';

export default function SearchForm() {
  return (
    <form className="flex items-center space-x-2">
      <Input type="search" placeholder="Search..." className="flex-grow" />
      <Button type="submit">Search</Button>
    </form>
  );
}

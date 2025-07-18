import Button from '@/app/architectures/atomic-design/components/atoms/Button';
import Input from '@/app/architectures/atomic-design/components/atoms/Input';

export default function SearchForm() {
  return (
    <form>
      <Input type="search" placeholder="Search..." />
      <Button type="submit">Search</Button>
    </form>
  );
}

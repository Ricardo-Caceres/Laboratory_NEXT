'use client';

function SlowList({ query }: { query: string }) {
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
  const filteredItems = items.filter(item => item.includes(query));

  return (
    <ul className="max-h-60 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-white shadow-sm w-80">
      {filteredItems.map(item => <li key={item} className="py-1 text-gray-700">{item}</li>)}
    </ul>
  );
}

export default SlowList;

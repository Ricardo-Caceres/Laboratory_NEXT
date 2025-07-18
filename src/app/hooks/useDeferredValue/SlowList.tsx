'use client';

function SlowList({ query }: { query: string }) {
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
  const filteredItems = items.filter(item => item.includes(query));

  return (
    <ul style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #eee', padding: '10px' }}>
      {filteredItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default SlowList;

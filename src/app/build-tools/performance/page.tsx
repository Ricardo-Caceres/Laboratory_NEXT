import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function PerformanceOptimizationPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Performance Optimization"
        description="**Performance optimization** is crucial for providing excellent user experience. Focus on loading speed, runtime performance, and resource efficiency.

**Key Techniques:**
- **Code splitting**: Load only what's needed
- **Lazy loading**: Defer loading of components
- **Memoization**: Cache expensive computations
- **Virtual scrolling**: Render only visible items
- **Image optimization**: Compress and lazy load
- **Bundle analysis**: Identify large dependencies

**Metrics to Track:**
- First Contentful Paint (FCP)
- Time to Interactive (TTI)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)"
        codeContent={[
          {
            filePath: 'optimization/code-splitting.tsx',
            content: `import dynamic from 'next/dynamic';

// Lazy load heavy component
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false,
});

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HeavyChart />
    </div>
  );
}`,
          },
          {
            filePath: 'optimization/memoization.tsx',
            content: `import { useMemo, memo } from 'react';

// Memoize expensive calculation
function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    return data.map(item => 
      // Expensive processing
      complexCalculation(item)
    );
  }, [data]);

  return <div>{processedData}</div>;
}

// Memoize component
export default memo(ExpensiveComponent);`,
          },
          {
            filePath: 'optimization/virtual-scroll.tsx',
            content: `import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }) {
  const parentRef = useRef(null);
  
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  return (
    <div ref={parentRef} style={{ height: '400px', overflow: 'auto' }}>
      <div style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map(virtualRow => (
          <div key={virtualRow.index} style={{ height: virtualRow.size }}>
            {items[virtualRow.index]}
          </div>
        ))}
      </div>
    </div>
  );
}`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

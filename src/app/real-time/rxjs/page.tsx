import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function RxJSPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="RxJS Observables"
        description="**RxJS** (Reactive Extensions for JavaScript) is a library for reactive programming using Observables, making it easier to compose asynchronous or callback-based code.

**Key Concepts:**
- **Observable**: Stream of data over time
- **Observer**: Consumes the stream
- **Operators**: Transform, filter, combine streams
- **Subscription**: Start listening to observable

**Use Cases:**
- Event handling
- Async operations
- Data streams
- Real-time updates
- Complex async flows"
        codeContent={[
          {
            filePath: 'rxjs/basic-observable.ts',
            content: `import { Observable } from 'rxjs';

const observable = new Observable<number>(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

observable.subscribe({
  next: (value) => console.log('Received:', value),
  error: (err) => console.error('Error:', err),
  complete: () => console.log('Complete!'),
});`,
          },
          {
            filePath: 'rxjs/operators.ts',
            content: `import { of, interval } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

// Map operator
of(1, 2, 3, 4, 5)
  .pipe(map(x => x * 2))
  .subscribe(x => console.log(x)); // 2, 4, 6, 8, 10

// Filter operator
of(1, 2, 3, 4, 5)
  .pipe(filter(x => x % 2 === 0))
  .subscribe(x => console.log(x)); // 2, 4

// Combining operators
interval(1000)
  .pipe(
    take(5),
    map(x => x + 1),
    filter(x => x % 2 === 0)
  )
  .subscribe(x => console.log(x)); // 2, 4`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

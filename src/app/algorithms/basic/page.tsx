import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function AlgorithmsBasicPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Basic Algorithms"
        description="**Algorithms** are step-by-step procedures for solving problems. Understanding basic algorithms is essential for efficient programming.

**Common Algorithms:**
- **Sorting**: Bubble, Selection, Insertion
- **Searching**: Linear, Binary
- **String**: Pattern matching, reversal
- **Math**: GCD, Prime numbers

**Big O Notation:**
- O(1): Constant time
- O(n): Linear time
- O(n²): Quadratic time
- O(log n): Logarithmic time

**Why Learn:**
- Problem-solving skills
- Code optimization
- Interview preparation
- Algorithm design"
        codeContent={[
          {
            filePath: 'algorithms/binary-search.ts',
            content: `function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Not found
}

// Time Complexity: O(log n)
// Space Complexity: O(1)`,
          },
          {
            filePath: 'algorithms/bubble-sort.ts',
            content: `function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  const result = [...arr];

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // Swap
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }

  return result;
}

// Time Complexity: O(n²)
// Space Complexity: O(1)`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

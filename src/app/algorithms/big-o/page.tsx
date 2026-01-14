import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function BigOPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Big O Notation"
        description="**Big O Notation** describes the performance or complexity of an algorithm in terms of time and space as the input size grows.

**Common Complexities:**
- **O(1)**: Constant - Best
- **O(log n)**: Logarithmic - Excellent
- **O(n)**: Linear - Good
- **O(n log n)**: Log-linear - Fair
- **O(n²)**: Quadratic - Poor
- **O(2ⁿ)**: Exponential - Very Poor

**Types:**
- **Time Complexity**: Execution time
- **Space Complexity**: Memory usage

**Rules:**
- Drop constants: O(2n) → O(n)
- Drop non-dominant terms: O(n² + n) → O(n²)
- Different inputs use different variables"
        codeContent={[
          {
            filePath: 'big-o/examples.ts',
            content: `// O(1) - Constant Time
function getFirstElement(arr: number[]): number {
  return arr[0]; // Always one operation
}

// O(n) - Linear Time
function findMax(arr: number[]): number {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max; // n iterations
}

// O(n²) - Quadratic Time
function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n; i++) {        // n times
    for (let j = 0; j < n - i - 1; j++) { // n times
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr; // n × n = n²
}

// O(log n) - Logarithmic Time
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1; // Cuts array in half each time
}

// O(n log n) - Log-linear Time
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
  // Divides (log n) and merges (n) = O(n log n)
}`,
          },
          {
            filePath: 'big-o/space-complexity.ts',
            content: `// O(1) - Constant Space
function sum(a: number, b: number): number {
  return a + b; // Only stores result
}

// O(n) - Linear Space
function createArray(n: number): number[] {
  const arr: number[] = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr; // Array grows with n
}

// O(n²) - Quadratic Space
function create2DArray(n: number): number[][] {
  const matrix: number[][] = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix; // n × n = n²
}

// O(log n) - Logarithmic Space (Recursion)
function binarySearchRecursive(
  arr: number[],
  target: number,
  left = 0,
  right = arr.length - 1
): number {
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) return mid;
  
  if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
  // Call stack depth = log n
}`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Big O Complexity Chart</h2>
          
          <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-3">Performance Rankings:</h3>
            <div className="space-y-2">
              {[
                { notation: 'O(1)', name: 'Constant', color: 'bg-green-500', example: 'Array access' },
                { notation: 'O(log n)', name: 'Logarithmic', color: 'bg-green-400', example: 'Binary search' },
                { notation: 'O(n)', name: 'Linear', color: 'bg-yellow-500', example: 'Simple loop' },
                { notation: 'O(n log n)', name: 'Log-linear', color: 'bg-orange-400', example: 'Merge sort' },
                { notation: 'O(n²)', name: 'Quadratic', color: 'bg-red-500', example: 'Nested loops' },
                { notation: 'O(2ⁿ)', name: 'Exponential', color: 'bg-red-700', example: 'Fibonacci (naive)' },
              ].map((item) => (
                <div key={item.notation} className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${item.color}`} />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{item.notation} - {item.name}</p>
                    <p className="text-xs opacity-70">{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Data Structure Operations:</h3>
              <div className="text-xs space-y-1">
                <p><strong>Array:</strong> Access O(1), Search O(n)</p>
                <p><strong>Linked List:</strong> Access O(n), Insert O(1)</p>
                <p><strong>Hash Table:</strong> Access O(1), Insert O(1)</p>
                <p><strong>Binary Tree:</strong> Access O(log n)</p>
              </div>
            </div>
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Sorting Algorithms:</h3>
              <div className="text-xs space-y-1">
                <p><strong>Quick Sort:</strong> O(n log n) avg</p>
                <p><strong>Merge Sort:</strong> O(n log n)</p>
                <p><strong>Bubble Sort:</strong> O(n²)</p>
                <p><strong>Insertion Sort:</strong> O(n²)</p>
              </div>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

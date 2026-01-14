/**
 * Advanced Algorithms Module
 * Learn advanced algorithmic techniques and data structures
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advanced Algorithms | Laboratory',
  description: 'Master advanced algorithms and problem-solving techniques',
};

export default function AdvancedAlgorithmsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Advanced Algorithms</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          Advanced algorithms are essential for solving complex computational problems efficiently.
          These techniques are crucial for technical interviews and real-world applications.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Dynamic Programming</h2>
        <p className="mb-4">
          Solve complex problems by breaking them down into simpler subproblems and caching results.
        </p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// Fibonacci with Memoization
function fibonacci(n: number, memo: Map<number, number> = new Map()): number {
  if (n <= 1) return n;
  
  if (memo.has(n)) return memo.get(n)!;
  
  const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo.set(n, result);
  return result;
}

// Time: O(n), Space: O(n)
console.log(fibonacci(50)); // Fast!

// Longest Common Subsequence
function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const dp: number[][] = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

// Knapsack Problem
function knapsack(weights: number[], values: number[], capacity: number): number {
  const n = weights.length;
  const dp: number[][] = Array(n + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Graph Algorithms</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// Dijkstra's Shortest Path
class PriorityQueue<T> {
  private items: Array<{ value: T; priority: number }> = [];

  enqueue(value: T, priority: number) {
    this.items.push({ value, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }

  dequeue(): T | undefined {
    return this.items.shift()?.value;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

function dijkstra(
  graph: Map<string, Map<string, number>>,
  start: string
): Map<string, number> {
  const distances = new Map<string, number>();
  const visited = new Set<string>();
  const pq = new PriorityQueue<string>();

  // Initialize distances
  for (const node of graph.keys()) {
    distances.set(node, Infinity);
  }
  distances.set(start, 0);
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const current = pq.dequeue()!;
    
    if (visited.has(current)) continue;
    visited.add(current);

    const neighbors = graph.get(current) || new Map();
    for (const [neighbor, weight] of neighbors) {
      const distance = distances.get(current)! + weight;
      
      if (distance < distances.get(neighbor)!) {
        distances.set(neighbor, distance);
        pq.enqueue(neighbor, distance);
      }
    }
  }

  return distances;
}

// Topological Sort (DFS-based)
function topologicalSort(graph: Map<string, string[]>): string[] {
  const visited = new Set<string>();
  const stack: string[] = [];

  function dfs(node: string) {
    visited.add(node);
    const neighbors = graph.get(node) || [];
    
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
    
    stack.push(node);
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack.reverse();
}

// Detect Cycle in Directed Graph
function hasCycle(graph: Map<string, string[]>): boolean {
  const visited = new Set<string>();
  const recStack = new Set<string>();

  function dfs(node: string): boolean {
    visited.add(node);
    recStack.add(node);

    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) return true;
      } else if (recStack.has(neighbor)) {
        return true;
      }
    }

    recStack.delete(node);
    return false;
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      if (dfs(node)) return true;
    }
  }

  return false;
}`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Advanced Sorting & Searching</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// Quick Select - Find kth largest element (O(n) average)
function quickSelect(arr: number[], k: number): number {
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const left = arr.filter(x => x > pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x < pivot);

  if (k <= left.length) {
    return quickSelect(left, k);
  } else if (k <= left.length + middle.length) {
    return pivot;
  } else {
    return quickSelect(right, k - left.length - middle.length);
  }
}

// Merge Sort (stable, O(n log n))
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Binary Search Variations
function binarySearchFirst(arr: number[], target: number): number {
  let left = 0, right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      result = mid;
      right = mid - 1; // Continue searching left
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

function binarySearchLast(arr: number[], target: number): number {
  let left = 0, right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      result = mid;
      left = mid + 1; // Continue searching right
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Backtracking</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// N-Queens Problem
function solveNQueens(n: number): string[][] {
  const result: string[][] = [];
  const board: string[][] = Array(n).fill(0).map(() => Array(n).fill('.'));

  function isValid(row: number, col: number): boolean {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }

    // Check diagonal (top-left)
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }

    // Check diagonal (top-right)
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }

    return true;
  }

  function backtrack(row: number) {
    if (row === n) {
      result.push(board.map(r => r.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.'; // Backtrack
      }
    }
  }

  backtrack(0);
  return result;
}

// Generate Permutations
function permute<T>(nums: T[]): T[][] {
  const result: T[][] = [];

  function backtrack(current: T[], remaining: T[]) {
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);
      backtrack(
        current,
        [...remaining.slice(0, i), ...remaining.slice(i + 1)]
      );
      current.pop();
    }
  }

  backtrack([], nums);
  return result;
}

// Sudoku Solver
function solveSudoku(board: string[][]): boolean {
  function isValid(row: number, col: number, num: string): boolean {
    // Check row
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) return false;
    }

    // Check column
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) return false;
    }

    // Check 3x3 box
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[boxRow + i][boxCol + j] === num) return false;
      }
    }

    return true;
  }

  function solve(): boolean {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === '.') {
          for (let num = 1; num <= 9; num++) {
            const numStr = String(num);
            
            if (isValid(row, col, numStr)) {
              board[row][col] = numStr;
              
              if (solve()) return true;
              
              board[row][col] = '.'; // Backtrack
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  return solve();
}`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Greedy Algorithms</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// Activity Selection Problem
interface Activity {
  start: number;
  end: number;
  name: string;
}

function activitySelection(activities: Activity[]): Activity[] {
  // Sort by end time
  const sorted = [...activities].sort((a, b) => a.end - b.end);
  const result: Activity[] = [sorted[0]];
  let lastEnd = sorted[0].end;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i].start >= lastEnd) {
      result.push(sorted[i]);
      lastEnd = sorted[i].end;
    }
  }

  return result;
}

// Huffman Coding
class HuffmanNode {
  constructor(
    public char: string | null,
    public freq: number,
    public left: HuffmanNode | null = null,
    public right: HuffmanNode | null = null
  ) {}
}

function buildHuffmanTree(frequencies: Map<string, number>): HuffmanNode {
  const pq: HuffmanNode[] = Array.from(frequencies.entries())
    .map(([char, freq]) => new HuffmanNode(char, freq));

  while (pq.length > 1) {
    pq.sort((a, b) => a.freq - b.freq);
    const left = pq.shift()!;
    const right = pq.shift()!;
    
    const parent = new HuffmanNode(
      null,
      left.freq + right.freq,
      left,
      right
    );
    pq.push(parent);
  }

  return pq[0];
}

// Fractional Knapsack
interface Item {
  value: number;
  weight: number;
}

function fractionalKnapsack(items: Item[], capacity: number): number {
  // Sort by value/weight ratio
  const sorted = items
    .map(item => ({
      ...item,
      ratio: item.value / item.weight
    }))
    .sort((a, b) => b.ratio - a.ratio);

  let totalValue = 0;
  let remainingCapacity = capacity;

  for (const item of sorted) {
    if (remainingCapacity >= item.weight) {
      totalValue += item.value;
      remainingCapacity -= item.weight;
    } else {
      totalValue += item.ratio * remainingCapacity;
      break;
    }
  }

  return totalValue;
}`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Advanced String Algorithms</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// KMP Pattern Matching (O(n + m))
function kmpSearch(text: string, pattern: string): number[] {
  const lps = computeLPS(pattern);
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      result.push(i - j);
      j = lps[j - 1];
    } else if (i < text.length && text[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return result;
}

function computeLPS(pattern: string): number[] {
  const lps: number[] = Array(pattern.length).fill(0);
  let len = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

// Rabin-Karp Algorithm
function rabinKarp(text: string, pattern: string): number[] {
  const d = 256; // Number of characters
  const q = 101; // A prime number
  const m = pattern.length;
  const n = text.length;
  const result: number[] = [];
  
  let p = 0; // Hash for pattern
  let t = 0; // Hash for text
  let h = 1;

  // Calculate h = d^(m-1) % q
  for (let i = 0; i < m - 1; i++) {
    h = (h * d) % q;
  }

  // Calculate initial hash values
  for (let i = 0; i < m; i++) {
    p = (d * p + pattern.charCodeAt(i)) % q;
    t = (d * t + text.charCodeAt(i)) % q;
  }

  // Slide pattern over text
  for (let i = 0; i <= n - m; i++) {
    if (p === t) {
      // Check characters one by one
      let match = true;
      for (let j = 0; j < m; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) result.push(i);
    }

    // Calculate hash for next window
    if (i < n - m) {
      t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;
      if (t < 0) t += q;
    }
  }

  return result;
}`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dynamic Programming: Optimize recursive solutions with memoization</li>
          <li>Graph Algorithms: Essential for network and relationship problems</li>
          <li>Backtracking: Explore all possibilities with pruning</li>
          <li>Greedy: Make locally optimal choices (doesn't always work)</li>
          <li>Advanced Sorting: Know when to use which algorithm</li>
          <li>String Algorithms: Efficient pattern matching and text processing</li>
          <li>Practice on LeetCode, HackerRank, CodeSignal</li>
          <li>Understand time and space complexity trade-offs</li>
        </ul>
      </section>
    </div>
  );
}

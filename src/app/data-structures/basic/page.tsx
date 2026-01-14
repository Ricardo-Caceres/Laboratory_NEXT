import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function DataStructuresBasicPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Data Structures Basics"
        description="**Data Structures** organize and store data efficiently for different operations. Understanding them is fundamental for writing efficient code.

**Basic Structures:**
- **Array**: Fixed-size sequential collection
- **Linked List**: Nodes with pointers
- **Stack**: LIFO (Last In First Out)
- **Queue**: FIFO (First In First Out)
- **Hash Table**: Key-value pairs

**Operations:**
- Insert, Delete, Search
- Traverse, Access
- Time complexity matters

**Why Learn:**
- Better algorithm design
- Optimized performance
- Interview preparation
- Problem-solving skills"
        codeContent={[
          {
            filePath: 'structures/stack.ts',
            content: `class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

// Usage
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2`,
          },
          {
            filePath: 'structures/queue.ts',
            content: `class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  front(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

// Usage
const queue = new Queue<string>();
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');
console.log(queue.dequeue()); // 'first'`,
          },
          {
            filePath: 'structures/linked-list.ts',
            content: `class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null;

  append(value: T): void {
    const newNode = new Node(value);
    
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  find(value: T): Node<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }
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

import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function EventDrivenPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Event-Driven UI Architectures"
        description="**Event-driven architecture** in UI applications uses events to trigger and communicate between decoupled components, enabling loose coupling and scalability.

**Key Concepts:**
- **Event emitters**: Publish events
- **Event listeners**: Subscribe to events
- **Event bus**: Central communication hub
- **Custom events**: Domain-specific events

**Benefits:**
- Loose coupling
- Scalability
- Flexibility
- Testability
- Reusability

**Patterns:**
- Observer pattern
- Pub/Sub pattern
- Event delegation"
        codeContent={[
          {
            filePath: 'events/event-bus.ts',
            content: `type EventCallback = (data?: any) => void;

class EventBus {
  private events: Map<string, EventCallback[]>;

  constructor() {
    this.events = new Map();
  }

  on(event: string, callback: EventCallback) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)!.push(callback);
  }

  off(event: string, callback: EventCallback) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  emit(event: string, data?: any) {
    const callbacks = this.events.get(event) || [];
    callbacks.forEach(callback => callback(data));
  }
}

export const eventBus = new EventBus();`,
          },
          {
            filePath: 'events/usage.tsx',
            content: `import { useEffect } from 'react';
import { eventBus } from './event-bus';

// Component A - Emits event
function ComponentA() {
  const handleClick = () => {
    eventBus.emit('user:login', { userId: 123 });
  };

  return <button onClick={handleClick}>Login</button>;
}

// Component B - Listens to event
function ComponentB() {
  useEffect(() => {
    const handleLogin = (data) => {
      console.log('User logged in:', data.userId);
    };

    eventBus.on('user:login', handleLogin);
    
    return () => {
      eventBus.off('user:login', handleLogin);
    };
  }, []);

  return <div>Welcome!</div>;
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

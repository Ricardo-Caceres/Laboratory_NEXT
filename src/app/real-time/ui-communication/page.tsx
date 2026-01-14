import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function RealTimeUIPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Real-Time UI Communication"
        description="**Real-time UI communication** enables instant data synchronization between server and client, providing live updates without user interaction.

**Technologies:**
- **WebSockets**: Bidirectional communication
- **Server-Sent Events (SSE)**: Server to client
- **Long polling**: Fallback technique
- **GraphQL Subscriptions**: Real-time queries

**Use Cases:**
- Live notifications
- Chat applications
- Collaborative editing
- Live dashboards
- Stock tickers
- Sports scores"
        codeContent={[
          {
            filePath: 'realtime/websocket.ts',
            content: `class RealTimeConnection {
  private ws: WebSocket;
  private listeners: Map<string, Function[]>;

  constructor(url: string) {
    this.ws = new WebSocket(url);
    this.listeners = new Map();
    
    this.ws.onmessage = (event) => {
      const { type, data } = JSON.parse(event.data);
      this.emit(type, data);
    };
  }

  on(event: string, callback: Function) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(callback);
  }

  emit(event: string, data: any) {
    const callbacks = this.listeners.get(event) || [];
    callbacks.forEach(cb => cb(data));
  }

  send(type: string, data: any) {
    this.ws.send(JSON.stringify({ type, data }));
  }
}`,
          },
          {
            filePath: 'realtime/react-hook.ts',
            content: `import { useEffect, useState } from 'react';

function useRealTime(url: string) {
  const [data, setData] = useState<any[]>([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => setConnected(true);
    ws.onclose = () => setConnected(false);
    
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setData(prev => [...prev, message]);
    };

    return () => ws.close();
  }, [url]);

  return { data, connected };
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

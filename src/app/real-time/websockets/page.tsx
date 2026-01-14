import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function WebSocketsPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="WebSockets"
        description="**WebSockets** provide full-duplex communication channels over a single TCP connection, enabling real-time data exchange between client and server.

**Key Features:**
- **Bidirectional**: Two-way communication
- **Real-time**: Instant data updates
- **Persistent connection**: Stays open
- **Low latency**: Minimal overhead

**Use Cases:**
- Chat applications
- Live notifications
- Real-time dashboards
- Multiplayer games
- Collaborative editing"
        codeContent={[
          {
            filePath: 'websocket/client.ts',
            content: `const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', (event) => {
  console.log('Connected to WebSocket server');
  socket.send('Hello Server!');
});

socket.addEventListener('message', (event) => {
  console.log('Message from server:', event.data);
});

socket.addEventListener('close', (event) => {
  console.log('Disconnected from server');
});

socket.addEventListener('error', (error) => {
  console.error('WebSocket error:', error);
});`,
          },
          {
            filePath: 'websocket/react-hook.ts',
            content: `import { useEffect, useState } from 'react';

function useWebSocket(url: string) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket(url);
    
    ws.onopen = () => console.log('Connected');
    ws.onmessage = (event) => {
      setMessages(prev => [...prev, event.data]);
    };
    ws.onclose = () => console.log('Disconnected');
    
    setSocket(ws);
    
    return () => ws.close();
  }, [url]);

  const sendMessage = (message: string) => {
    socket?.send(message);
  };

  return { messages, sendMessage };
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

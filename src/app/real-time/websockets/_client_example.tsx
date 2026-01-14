'use client';

import { useState, useEffect, useRef } from 'react';

export default function WebSocketsExample() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Simulate WebSocket connection
  useEffect(() => {
    setIsConnected(true);
    setMessages(['System: Connected to WebSocket server']);
    
    // Simulate receiving messages
    const interval = setInterval(() => {
      const randomMessages = [
        'Server: New user joined',
        'Server: Data updated',
        'Server: Ping',
      ];
      const randomMsg = randomMessages[Math.floor(Math.random() * randomMessages.length)];
      setMessages(prev => [...prev, randomMsg]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages(prev => [...prev, `You: ${inputMessage}`]);
      setInputMessage('');
      
      // Simulate server response
      setTimeout(() => {
        setMessages(prev => [...prev, `Server: Message received - "${inputMessage}"`]);
      }, 500);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">WebSocket Chat</h2>
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full mr-2 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-sm">{isConnected ? 'Connected' : 'Disconnected'}</span>
        </div>
      </div>

      <div className="border border-[var(--border)] rounded-lg p-4 h-96 overflow-y-auto mb-4 bg-[var(--panel)]">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2 p-2 rounded bg-[var(--background)]">
            <p className="text-sm">{msg}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
          className="flex-1 p-3 border border-[var(--border)] rounded-lg bg-[var(--background)]"
        />
        <button
          onClick={sendMessage}
          className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-6 rounded transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}

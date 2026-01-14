'use client';

import { useState } from 'react';

export default function AzureExample() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const azureServices = [
    {
      category: 'Compute',
      services: [
        { name: 'Virtual Machines', icon: '🖥️', desc: 'IaaS compute instances' },
        { name: 'App Service', icon: '🌐', desc: 'PaaS web apps' },
        { name: 'Azure Functions', icon: '⚡', desc: 'Serverless compute' },
        { name: 'Container Instances', icon: '📦', desc: 'Docker containers' },
      ],
    },
    {
      category: 'Storage',
      services: [
        { name: 'Blob Storage', icon: '💾', desc: 'Object storage' },
        { name: 'File Storage', icon: '📁', desc: 'SMB file shares' },
        { name: 'Queue Storage', icon: '📬', desc: 'Message queue' },
        { name: 'Table Storage', icon: '📊', desc: 'NoSQL key-value' },
      ],
    },
    {
      category: 'Database',
      services: [
        { name: 'SQL Database', icon: '🗄️', desc: 'Managed SQL Server' },
        { name: 'Cosmos DB', icon: '🌍', desc: 'Global NoSQL database' },
        { name: 'Database for PostgreSQL', icon: '🐘', desc: 'Managed PostgreSQL' },
        { name: 'Database for MySQL', icon: '🐬', desc: 'Managed MySQL' },
      ],
    },
    {
      category: 'AI + Machine Learning',
      services: [
        { name: 'Cognitive Services', icon: '🧠', desc: 'AI APIs' },
        { name: 'Machine Learning', icon: '🤖', desc: 'ML platform' },
        { name: 'Bot Service', icon: '💬', desc: 'Chatbot platform' },
        { name: 'OpenAI Service', icon: '✨', desc: 'GPT models' },
      ],
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Azure Services Overview</h2>

      <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Regions', value: '60+', icon: '🌍' },
          { label: 'Services', value: '200+', icon: '🛠️' },
          { label: 'Compliance', value: '90+', icon: '✅' },
          { label: 'Uptime SLA', value: '99.9%', icon: '⚡' },
        ].map((stat) => (
          <div key={stat.label} className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg text-center">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-[var(--primary)]">{stat.value}</div>
            <div className="text-sm opacity-70">{stat.label}</div>
          </div>
        ))}
      </div>

      {azureServices.map((category) => (
        <div key={category.category} className="mb-6">
          <h3 className="font-semibold text-lg mb-3">{category.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {category.services.map((service) => (
              <div
                key={service.name}
                onClick={() => setSelectedService(service.name)}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedService === service.name
                    ? 'bg-[var(--primary)] text-white border-[var(--primary)]'
                    : 'bg-[var(--panel)] border-[var(--border)] hover:border-[var(--primary)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{service.icon}</span>
                  <div>
                    <p className="font-semibold">{service.name}</p>
                    <p className={`text-sm ${selectedService === service.name ? 'opacity-90' : 'opacity-70'}`}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <h3 className="font-semibold mb-2">Azure vs AWS Comparison:</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-2">Azure</p>
            <p className="opacity-70">• Microsoft ecosystem</p>
            <p className="opacity-70">• Hybrid cloud focus</p>
            <p className="opacity-70">• Enterprise integration</p>
          </div>
          <div>
            <p className="font-semibold mb-2">AWS</p>
            <p className="opacity-70">• Market leader</p>
            <p className="opacity-70">• Largest service catalog</p>
            <p className="opacity-70">• Strong startup ecosystem</p>
          </div>
        </div>
      </div>
    </div>
  );
}

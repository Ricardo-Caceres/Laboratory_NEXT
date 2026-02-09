'use client';

import { useState } from 'react';

// Component Interface
interface Notification {
  send(message: string): string[];
  getDescription(): string;
  getCost(): number;
}

// Concrete Component
class BasicNotification implements Notification {
  send(message: string): string[] {
    return [`📧 Email: ${message}`];
  }

  getDescription(): string {
    return 'Basic Email';
  }

  getCost(): number {
    return 0;
  }
}

// Base Decorator
abstract class NotificationDecorator implements Notification {
  protected wrapped: Notification;

  constructor(notification: Notification) {
    this.wrapped = notification;
  }

  send(message: string): string[] {
    return this.wrapped.send(message);
  }

  getDescription(): string {
    return this.wrapped.getDescription();
  }

  getCost(): number {
    return this.wrapped.getCost();
  }
}

// Concrete Decorators
class SMSDecorator extends NotificationDecorator {
  send(message: string): string[] {
    return [...this.wrapped.send(message), `📱 SMS: ${message}`];
  }

  getDescription(): string {
    return this.wrapped.getDescription() + ' + SMS';
  }

  getCost(): number {
    return this.wrapped.getCost() + 2;
  }
}

class PushDecorator extends NotificationDecorator {
  send(message: string): string[] {
    return [...this.wrapped.send(message), `🔔 Push: ${message}`];
  }

  getDescription(): string {
    return this.wrapped.getDescription() + ' + Push';
  }

  getCost(): number {
    return this.wrapped.getCost() + 1;
  }
}

class SlackDecorator extends NotificationDecorator {
  send(message: string): string[] {
    return [...this.wrapped.send(message), `💬 Slack: ${message}`];
  }

  getDescription(): string {
    return this.wrapped.getDescription() + ' + Slack';
  }

  getCost(): number {
    return this.wrapped.getCost() + 3;
  }
}

class UrgentDecorator extends NotificationDecorator {
  send(message: string): string[] {
    const urgentMessage = `🚨 URGENT: ${message}`;
    return this.wrapped.send(urgentMessage);
  }

  getDescription(): string {
    return this.wrapped.getDescription() + ' (Urgent)';
  }

  getCost(): number {
    return this.wrapped.getCost() + 5;
  }
}

class EncryptionDecorator extends NotificationDecorator {
  private encrypt(text: string): string {
    return text.split('').reverse().join('');
  }

  send(message: string): string[] {
    const encrypted = this.encrypt(message);
    return this.wrapped.send(encrypted).map(msg => `🔒 ${msg}`);
  }

  getDescription(): string {
    return this.wrapped.getDescription() + ' + Encryption';
  }

  getCost(): number {
    return this.wrapped.getCost() + 4;
  }
}

export default function DecoratorPatternExample() {
  const [message, setMessage] = useState('Hello, this is a test notification!');
  const [decorators, setDecorators] = useState<Set<string>>(new Set(['basic']));
  const [sentMessages, setSentMessages] = useState<string[]>([]);
  const [notification, setNotification] = useState<Notification>(new BasicNotification());

  const buildNotification = (selectedDecorators: Set<string>): Notification => {
    let notif: Notification = new BasicNotification();

    if (selectedDecorators.has('urgent')) {
      notif = new UrgentDecorator(notif);
    }
    if (selectedDecorators.has('encryption')) {
      notif = new EncryptionDecorator(notif);
    }
    if (selectedDecorators.has('sms')) {
      notif = new SMSDecorator(notif);
    }
    if (selectedDecorators.has('push')) {
      notif = new PushDecorator(notif);
    }
    if (selectedDecorators.has('slack')) {
      notif = new SlackDecorator(notif);
    }

    return notif;
  };

  const toggleDecorator = (decorator: string) => {
    const newDecorators = new Set(decorators);
    if (decorator === 'basic') return;
    
    if (newDecorators.has(decorator)) {
      newDecorators.delete(decorator);
    } else {
      newDecorators.add(decorator);
    }
    
    setDecorators(newDecorators);
    const newNotification = buildNotification(newDecorators);
    setNotification(newNotification);
  };

  const sendNotification = () => {
    const messages = notification.send(message);
    setSentMessages(messages);
  };

  const clearMessages = () => {
    setSentMessages([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-pink-50 via-white to-purple-50 p-6 sm:p-8">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-pink-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Decorator Pattern</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Add features dynamically to notifications
            </p>
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Notification Message:
            </label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
              placeholder="Enter your message..."
            />
          </div>

          {/* Decorator Selection */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Select Decorators:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-gray-100 p-3 rounded-lg border-2 border-gray-400">
                <div className="flex items-center gap-2 mb-1">
                  <input
                    type="checkbox"
                    id="basic"
                    checked={true}
                    disabled
                    className="w-4 h-4"
                  />
                  <label htmlFor="basic" className="font-semibold text-gray-900">📧 Email (Base)</label>
                </div>
                <p className="text-xs text-gray-600">$0 - Always included</p>
              </div>

              {[
                { id: 'sms', label: '📱 SMS', cost: 2 },
                { id: 'push', label: '🔔 Push', cost: 1 },
                { id: 'slack', label: '💬 Slack', cost: 3 },
                { id: 'urgent', label: '🚨 Urgent', cost: 5 },
                { id: 'encryption', label: '🔒 Encrypt', cost: 4 },
              ].map(({ id, label, cost }) => (
                <button
                  key={id}
                  onClick={() => toggleDecorator(id)}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    decorators.has(id)
                      ? 'bg-pink-50 border-pink-500'
                      : 'bg-white border-gray-300 hover:border-pink-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <input
                      type="checkbox"
                      checked={decorators.has(id)}
                      onChange={() => {}}
                      className="w-4 h-4"
                    />
                    <span className="font-semibold text-gray-900">{label}</span>
                  </div>
                  <p className="text-xs text-gray-600">${cost}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="mb-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600 mb-1">Configuration:</p>
                <p className="font-bold text-gray-900">{notification.getDescription()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Total Cost:</p>
                <p className="text-2xl font-bold text-pink-600">${notification.getCost()}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={sendNotification}
              className="flex-1 px-6 py-4 bg-pink-600 text-white font-bold rounded-lg shadow-md hover:bg-pink-700 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              📤 Send Notification
            </button>
            <button
              onClick={clearMessages}
              className="px-6 py-4 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              🧹 Clear
            </button>
          </div>

          {/* Sent Messages */}
          {sentMessages.length > 0 && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Sent Messages ({sentMessages.length})
              </h3>
              <div className="space-y-2">
                {sentMessages.map((msg, index) => (
                  <div key={index} className="bg-white px-4 py-3 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-800 break-words">{msg}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-200">
            <p className="text-sm text-gray-700">
              <strong className="text-pink-700">Decorator Pattern:</strong> Dynamically add responsibilities to objects by wrapping them in decorator objects. Each decorator adds functionality without modifying the original class.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

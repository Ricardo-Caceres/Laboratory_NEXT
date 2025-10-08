'use client';

import { useState } from 'react';
import React from 'react';

// Factory Pattern - Creates objects without specifying exact class
interface Button {
  render: () => React.ReactElement;
  type: string;
}

class PrimaryButton implements Button {
  type = 'primary';
  constructor(private label: string) {}
  
  render() {
    return (
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all duration-200">
        {this.label}
      </button>
    );
  }
}

class SecondaryButton implements Button {
  type = 'secondary';
  constructor(private label: string) {}
  
  render() {
    return (
      <button className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg active:scale-95 transition-all duration-200">
        {this.label}
      </button>
    );
  }
}

class DangerButton implements Button {
  type = 'danger';
  constructor(private label: string) {}
  
  render() {
    return (
      <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg active:scale-95 transition-all duration-200">
        {this.label}
      </button>
    );
  }
}

class SuccessButton implements Button {
  type = 'success';
  constructor(private label: string) {}
  
  render() {
    return (
      <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg active:scale-95 transition-all duration-200">
        {this.label}
      </button>
    );
  }
}

// Factory
class ButtonFactory {
  static createButton(type: string, label: string): Button {
    switch (type) {
      case 'primary':
        return new PrimaryButton(label);
      case 'secondary':
        return new SecondaryButton(label);
      case 'danger':
        return new DangerButton(label);
      case 'success':
        return new SuccessButton(label);
      default:
        return new PrimaryButton(label);
    }
  }
}

export default function FactoryPatternExample() {
  const [selectedType, setSelectedType] = useState('primary');
  const [buttonLabel, setButtonLabel] = useState('Click Me');
  const [createdButtons, setCreatedButtons] = useState<Button[]>([]);

  const createNewButton = () => {
    const button = ButtonFactory.createButton(selectedType, buttonLabel);
    setCreatedButtons(prev => [...prev, button]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 sm:p-8">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-indigo-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Factory Pattern</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Create objects without specifying exact class
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 shadow-lg mb-6">
            <h3 className="text-white font-semibold mb-4 text-lg">Button Factory</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-indigo-100 text-sm font-medium mb-2">
                  Button Label:
                </label>
                <input
                  type="text"
                  value={buttonLabel}
                  onChange={(e) => setButtonLabel(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 border-2 border-indigo-300 focus:border-white focus:outline-none transition-colors"
                  placeholder="Enter button label"
                />
              </div>

              <div>
                <label className="block text-indigo-100 text-sm font-medium mb-2">
                  Button Type:
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 border-2 border-indigo-300 focus:border-white focus:outline-none transition-colors"
                >
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="success">Success</option>
                  <option value="danger">Danger</option>
                </select>
              </div>

              <button
                onClick={createNewButton}
                className="w-full px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-50 hover:shadow-lg active:scale-95 transition-all duration-200"
              >
                Create Button
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Created Buttons</h3>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                {createdButtons.length}
              </span>
            </div>
            
            {createdButtons.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No buttons created yet</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {createdButtons.map((button, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
                    <span className="text-xs text-gray-500 font-medium">{button.type}</span>
                    {button.render()}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <p className="text-sm text-gray-700">
              <strong className="text-indigo-700">Factory Pattern</strong> provides an interface for creating objects without specifying their concrete classes. It encapsulates object creation logic and makes the code more flexible and maintainable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

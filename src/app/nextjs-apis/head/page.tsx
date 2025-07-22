'use client';

import { useState } from 'react';

export const metadata = {
  title: 'Default Title',
  description: 'This is a page about dynamic titles.',
};

export default function HeadExample() {
  const [pageTitle, setPageTitle] = useState('Default Title');

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Next.js Head Example</h1>
      <p className="text-lg mb-2">Current Page Title: {pageTitle}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => setPageTitle('Dynamic Page')}>Set Dynamic Title</button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setPageTitle('Another Title')}>Set Another Title</button>
      <p className="text-lg mt-4">Check your browser tab title and view page source to see the changes.</p>
    </div>
  );
}

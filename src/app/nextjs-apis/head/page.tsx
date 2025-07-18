'use client';

import Head from 'next/head';
import { useState } from 'react';

export default function HeadExample() {
  const [pageTitle, setPageTitle] = useState('Default Title');

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={`This is a page about ${pageTitle.toLowerCase()}.`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={`Learn more about ${pageTitle.toLowerCase()}.`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Next.js Head Example</h1>
        <p>Current Page Title: {pageTitle}</p>
        <button onClick={() => setPageTitle('Dynamic Page')}>Set Dynamic Title</button>
        <button onClick={() => setPageTitle('Another Title')}>Set Another Title</button>
        <p>Check your browser tab title and view page source to see the changes.</p>
      </div>
    </>
  );
}

'use client';

import Script from 'next/script';
import { useState } from 'react';

export default function ScriptExample() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  return (
    <div>
      <h1>Next.js Script Optimization</h1>

      <h2>Analytics Script (afterInteractive)</h2>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Google Analytics script loaded!');
        }}
      />

      <h2>Chat Widget Script (lazyOnload)</h2>
      <Script
        src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js" // Using lodash as a dummy script
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Chat widget script loaded!');
          setScriptLoaded(true);
        }}
      />
      {scriptLoaded && <p>Chat widget is now available! (Check console for lodash global variable)</p>}

      <h2>Inline Script (beforeInteractive)</h2>
      <Script
        id="inline-script-example"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            console.log('Inline script ran before interactive!');
            window.myGlobalVar = 'Hello from inline script';
          `,
        }}
      />

      <p>Check the network tab and console to observe script loading behavior.</p>
    </div>
  );
}

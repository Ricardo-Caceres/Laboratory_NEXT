'use client';

import getConfig from 'next/config';

export default function ConfigExample() {
  const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

  // serverRuntimeConfig will be undefined on the client-side
  console.log('serverRuntimeConfig on client:', serverRuntimeConfig);

  return (
    <div>
      <h1>Next.js `next/config` Example</h1>
      <p>App Name: {publicRuntimeConfig.appName}</p>
      <p>Version: {publicRuntimeConfig.version}</p>
      <p>Public API URL: {publicRuntimeConfig.publicApiUrl}</p>
      <p>Check the console for `serverRuntimeConfig` (will be undefined on client).</p>
    </div>
  );
}

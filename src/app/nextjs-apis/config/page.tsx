import getConfig from 'next/config';

export default function ConfigExample() {
  const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

  // serverRuntimeConfig will be undefined on the client-side
  console.log('serverRuntimeConfig on client:', serverRuntimeConfig);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Next.js `next/config` Example</h1>
      <p className="text-lg mb-2">App Name: {publicRuntimeConfig.appName}</p>
      <p className="text-lg mb-2">Version: {publicRuntimeConfig.version}</p>
      <p className="text-lg mb-2">Public API URL: {publicRuntimeConfig.publicApiUrl}</p>
      <p className="text-lg">Check the console for `serverRuntimeConfig` (will be undefined on client).</p>
    </div>
  );
}

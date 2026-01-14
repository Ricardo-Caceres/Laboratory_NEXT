import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function PWAPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Progressive Web Apps (PWA)"
        description="**PWAs** are web applications that use modern web capabilities to deliver app-like experiences to users.

**Key Features:**
- **Offline support**: Service Workers
- **Installable**: Add to home screen
- **App-like**: Full-screen, standalone
- **Push notifications**: Re-engage users
- **Fast loading**: Cached resources

**Requirements:**
- HTTPS
- Service Worker
- Web App Manifest
- Responsive design

**Benefits:**
- Cross-platform
- No app store approval
- Always up-to-date
- Discoverable via search"
        codeContent={[
          {
            filePath: 'public/manifest.json',
            content: `{
  "name": "My PWA App",
  "short_name": "PWA",
  "description": "Progressive Web App Example",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1a73e8",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}`,
          },
          {
            filePath: 'public/sw.js',
            content: `const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

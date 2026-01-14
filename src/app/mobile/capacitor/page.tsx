import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function CapacitorPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Capacitor.js"
        description="**Capacitor** is a cross-platform native runtime by Ionic that makes it easy to build web apps that run natively on iOS, Android, and the web.

**Key Features:**
- Web-first approach
- Modern JavaScript APIs
- Native functionality access
- Plugin ecosystem
- Progressive Web Apps support

**Core Plugins:**
- Camera, Geolocation, Storage
- Filesystem, Network, Device
- Push Notifications
- Haptics, StatusBar

**Advantages:**
- Use any web framework
- Hot reload during development
- Easy native code access
- Modern tooling"
        codeContent={[
          {
            filePath: 'capacitor/setup.sh',
            content: `# Install Capacitor
npm install @capacitor/core @capacitor/cli

# Initialize Capacitor
npx cap init

# Add platforms
npx cap add ios
npx cap add android

# Install plugins
npm install @capacitor/camera
npm install @capacitor/geolocation
npm install @capacitor/storage
npm install @capacitor/push-notifications

# Build web assets
npm run build

# Sync with native projects
npx cap sync

# Open in native IDE
npx cap open ios
npx cap open android`,
          },
          {
            filePath: 'capacitor/camera.ts',
            content: `import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export async function takePicture() {
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    // image.webPath contains the photo URL
    const imageUrl = image.webPath;
    
    return imageUrl;
  } catch (error) {
    console.error('Error taking picture:', error);
    throw error;
  }
}

export async function pickImageFromGallery() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Base64,
    source: CameraSource.Photos,
  });

  return \`data:image/jpeg;base64,\${image.base64String}\`;
}`,
          },
          {
            filePath: 'capacitor/geolocation.ts',
            content: `import { Geolocation } from '@capacitor/geolocation';

export async function getCurrentPosition() {
  try {
    const coordinates = await Geolocation.getCurrentPosition();
    
    return {
      latitude: coordinates.coords.latitude,
      longitude: coordinates.coords.longitude,
      accuracy: coordinates.coords.accuracy,
      timestamp: coordinates.timestamp,
    };
  } catch (error) {
    console.error('Error getting location:', error);
    throw error;
  }
}

export async function watchPosition(callback: (position: any) => void) {
  const watchId = await Geolocation.watchPosition({}, (position, err) => {
    if (err) {
      console.error('Error watching position:', err);
      return;
    }
    
    if (position) {
      callback({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }
  });

  // Return function to clear watch
  return () => Geolocation.clearWatch({ id: watchId });
}`,
          },
          {
            filePath: 'capacitor/storage.ts',
            content: `import { Preferences } from '@capacitor/preferences';

export async function saveData(key: string, value: any) {
  await Preferences.set({
    key,
    value: JSON.stringify(value),
  });
}

export async function getData(key: string) {
  const { value } = await Preferences.get({ key });
  return value ? JSON.parse(value) : null;
}

export async function removeData(key: string) {
  await Preferences.remove({ key });
}

export async function clearAllData() {
  await Preferences.clear();
}`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Capacitor Overview</h2>
          
          <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-3">Capacitor vs Cordova:</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-2 text-[var(--primary)]">Capacitor ⭐</p>
                <p className="opacity-70">✓ Modern tooling</p>
                <p className="opacity-70">✓ Native project control</p>
                <p className="opacity-70">✓ Easy debugging</p>
                <p className="opacity-70">✓ Hot reload</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Cordova</p>
                <p className="opacity-70">• Mature ecosystem</p>
                <p className="opacity-70">• Large plugin library</p>
                <p className="opacity-70">• Wrapper approach</p>
                <p className="opacity-70">• Complex debugging</p>
              </div>
            </div>
          </div>

          <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-3">Core Plugins:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              {['Camera', 'Geolocation', 'Storage', 'Filesystem', 'Network', 'Device', 'Push Notifications', 'Haptics', 'StatusBar'].map((plugin) => (
                <div key={plugin} className="p-2 bg-[var(--background)] rounded text-center">
                  {plugin}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Use Cases:</h3>
              <ul className="space-y-1 text-sm">
                <li>✓ Hybrid mobile apps</li>
                <li>✓ PWA with native features</li>
                <li>✓ Cross-platform development</li>
                <li>✓ Existing web apps</li>
              </ul>
            </div>
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Supported Frameworks:</h3>
              <ul className="space-y-1 text-sm">
                <li>• React / Next.js</li>
                <li>• Vue / Nuxt</li>
                <li>• Angular</li>
                <li>• Vanilla JS</li>
              </ul>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function CordovaPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Apache Cordova"
        description="**Apache Cordova** is a mobile development framework that allows you to build native mobile apps using HTML, CSS, and JavaScript.

**Key Features:**
- Cross-platform development
- Native device API access
- Large plugin ecosystem
- Web technologies
- Command-line tools

**Core Concepts:**
- WebView wrapper
- Plugin architecture
- config.xml configuration
- Platform-specific code
- Build process

**Popular Plugins:**
- cordova-plugin-camera
- cordova-plugin-geolocation
- cordova-plugin-file
- cordova-plugin-network-information"
        codeContent={[
          {
            filePath: 'cordova/setup.sh',
            content: `# Install Cordova CLI
npm install -g cordova

# Create new project
cordova create myApp com.example.myapp MyApp

cd myApp

# Add platforms
cordova platform add ios
cordova platform add android

# Install plugins
cordova plugin add cordova-plugin-camera
cordova plugin add cordova-plugin-geolocation
cordova plugin add cordova-plugin-file
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-network-information

# Build for platform
cordova build ios
cordova build android

# Run on emulator
cordova emulate ios
cordova emulate android

# Run on device
cordova run ios --device
cordova run android --device`,
          },
          {
            filePath: 'cordova/camera.js',
            content: `// Camera Plugin
function takePicture() {
  navigator.camera.getPicture(
    onSuccess,
    onFail,
    {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true,
    }
  );
}

function onSuccess(imageData) {
  const image = document.getElementById('myImage');
  image.src = 'data:image/jpeg;base64,' + imageData;
}

function onFail(message) {
  console.error('Failed because: ' + message);
}

// Get picture from photo library
function getPictureFromLibrary() {
  navigator.camera.getPicture(
    onSuccess,
    onFail,
    {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    }
  );
}`,
          },
          {
            filePath: 'cordova/geolocation.js',
            content: `// Geolocation Plugin
function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(
    onSuccess,
    onError,
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
}

function onSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const accuracy = position.coords.accuracy;

  console.log('Latitude: ' + latitude);
  console.log('Longitude: ' + longitude);
  console.log('Accuracy: ' + accuracy + ' meters');
}

function onError(error) {
  console.error('code: ' + error.code + ' message: ' + error.message);
}

// Watch position
let watchID = null;

function startWatchingPosition() {
  watchID = navigator.geolocation.watchPosition(
    onSuccess,
    onError,
    {
      enableHighAccuracy: true,
      timeout: 30000,
    }
  );
}

function stopWatchingPosition() {
  if (watchID !== null) {
    navigator.geolocation.clearWatch(watchID);
    watchID = null;
  }
}`,
          },
          {
            filePath: 'cordova/config.xml',
            content: `<?xml version='1.0' encoding='utf-8'?>
<widget id="com.example.myapp" version="1.0.0" 
        xmlns="http://www.w3.org/ns/widgets">
    <name>MyApp</name>
    <description>A sample Apache Cordova application</description>
    <author email="dev@example.com" href="https://example.com">
        Developer Team
    </author>
    
    <content src="index.html" />
    
    <access origin="*" />
    
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
    
    <platform name="android">
        <allow-intent href="market:*" />
        <icon density="ldpi" src="res/icon/android/ldpi.png" />
        <icon density="mdpi" src="res/icon/android/mdpi.png" />
        <icon density="hdpi" src="res/icon/android/hdpi.png" />
        <icon density="xhdpi" src="res/icon/android/xhdpi.png" />
    </platform>
    
    <platform name="ios">
        <allow-intent href="itms:*" />
        <allow-intent href="itms-apps:*" />
    </platform>
    
    <preference name="Orientation" value="portrait" />
    <preference name="DisallowOverscroll" value="true" />
    <preference name="BackgroundColor" value="0xffffffff" />
</widget>`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Apache Cordova</h2>
          
          <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-3">Architecture:</h3>
            <div className="space-y-2 text-sm">
              <div className="p-2 bg-[var(--background)] rounded">
                <p className="font-semibold">Web App (HTML/CSS/JS)</p>
              </div>
              <div className="text-center">↓</div>
              <div className="p-2 bg-[var(--background)] rounded">
                <p className="font-semibold">WebView</p>
              </div>
              <div className="text-center">↓</div>
              <div className="p-2 bg-[var(--background)] rounded">
                <p className="font-semibold">Cordova Plugins</p>
              </div>
              <div className="text-center">↓</div>
              <div className="p-2 bg-[var(--background)] rounded">
                <p className="font-semibold">Native APIs (iOS/Android)</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Pros:</h3>
              <ul className="space-y-1 text-sm">
                <li>✓ Mature ecosystem</li>
                <li>✓ Large plugin library</li>
                <li>✓ Single codebase</li>
                <li>✓ Web technologies</li>
              </ul>
            </div>
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Cons:</h3>
              <ul className="space-y-1 text-sm">
                <li>✗ Performance limitations</li>
                <li>✗ Complex debugging</li>
                <li>✗ Plugin compatibility</li>
                <li>✗ Older tooling</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm">
              <strong>Note:</strong> Consider migrating to Capacitor for new projects. Capacitor offers modern tooling, better performance, and easier debugging.
            </p>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

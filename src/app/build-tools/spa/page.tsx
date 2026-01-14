import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function SPAPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Single Page Application (SPA)"
        description="**Single Page Applications (SPA)** load a single HTML page and dynamically update content as users interact with the app, without full page reloads.

**Key Concepts:**
- **Client-side routing**: Navigate without page reloads
- **AJAX/Fetch**: Load data asynchronously
- **State management**: Manage app state
- **Virtual DOM**: Efficient rendering

**Advantages:**
- Faster navigation
- Better user experience
- Reduced server load
- Mobile-app-like feel

**Challenges:**
- SEO optimization
- Initial load time
- Browser history management"
        codeContent={[
          {
            filePath: 'spa/router.tsx',
            content: `import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`,
          },
          {
            filePath: 'spa/data-fetching.tsx',
            content: `import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data without page reload
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">SPA Architecture</h2>
          
          <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-3">SPA vs Traditional:</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-2">SPA:</p>
                <ul className="space-y-1 opacity-70">
                  <li>• Single HTML file</li>
                  <li>• Client-side routing</li>
                  <li>• Dynamic updates</li>
                  <li>• Fast navigation</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Traditional:</p>
                <ul className="space-y-1 opacity-70">
                  <li>• Multiple HTML files</li>
                  <li>• Server-side routing</li>
                  <li>• Full page reloads</li>
                  <li>• Better SEO</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <p className="font-semibold mb-2">Request Flow:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-xs">1</span>
                  <span>Initial load: HTML + JS bundle</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-xs">2</span>
                  <span>User navigates: Client-side routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-xs">3</span>
                  <span>Data needed: AJAX/Fetch request</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-xs">4</span>
                  <span>Update view: Virtual DOM diff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

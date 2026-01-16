export default function SecurityDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Aprende a proteger tus aplicaciones web con técnicas modernas de seguridad.
        Desde prevención de XSS y CSRF hasta autenticación segura y best practices de frontend security.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🚨 Amenazas principales</h3>
          <ul className="space-y-2">
            <li>✓ XSS - Cross-Site Scripting</li>
            <li>✓ CSRF - Cross-Site Request Forgery</li>
            <li>✓ Injection attacks - SQL, JS, HTML</li>
            <li>✓ Clickjacking - UI redressing</li>
            <li>✓ Man-in-the-middle - Intercepción</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🛡️ Defensas esenciales</h3>
          <ul className="space-y-2">
            <li>• HTTPS everywhere</li>
            <li>• Content Security Policy</li>
            <li>• Input sanitization</li>
            <li>• Secure authentication</li>
            <li>• Security headers</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">✅ Golden rules</p>
        <ul className="space-y-1 text-sm">
          <li>• Never trust user input</li>
          <li>• Always sanitize before rendering</li>
          <li>• Use HTTPS for everything</li>
          <li>• Keep dependencies updated</li>
          <li>• Implement defense in depth</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">📚 En esta sección aprenderás:</p>
        <ul className="space-y-1 text-sm">
          <li>• Frontend security fundamentals</li>
          <li>• Authentication y authorization</li>
          <li>• Secure data handling</li>
          <li>• Security testing y auditing</li>
        </ul>
      </div>
    </>
  );
}

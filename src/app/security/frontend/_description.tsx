export default function FrontendSecurityDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Seguridad frontend: XSS, CSRF, autenticación segura, sanitización de datos,
        Content Security Policy y best practices para proteger aplicaciones web.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🚨 Amenazas comunes</h3>
          <ul className="space-y-2">
            <li>✓ XSS - Cross-Site Scripting</li>
            <li>✓ CSRF - Cross-Site Request Forgery</li>
            <li>✓ Clickjacking - UI redressing</li>
            <li>✓ Code injection - SQL, JS injection</li>
            <li>✓ Man-in-the-middle - Intercepción</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🛡️ Defensas</h3>
          <ul className="space-y-2">
            <li>• CSP - Content Security Policy</li>
            <li>• HTTPS - Encriptación</li>
            <li>• SameSite cookies - CSRF protection</li>
            <li>• Input sanitization - XSS prevention</li>
            <li>• HTTPOnly cookies - Token security</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">✅ Best practices</p>
        <ul className="space-y-1 text-sm">
          <li>• Nunca confíes en input del usuario</li>
          <li>• Sanitiza TODO antes de renderizar</li>
          <li>• Usa DOMPurify para HTML sanitization</li>
          <li>• Implementa CSP headers</li>
          <li>• HTTPS everywhere</li>
          <li>• Secure, HttpOnly, SameSite en cookies</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">🔐 Autenticación segura</p>
        <ul className="space-y-1 text-sm">
          <li>• JWT en HttpOnly cookies (no localStorage)</li>
          <li>• Refresh token rotation</li>
          <li>• MFA cuando sea posible</li>
          <li>• Rate limiting en login</li>
        </ul>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ XSS Prevention</p>
        <ul className="space-y-1 text-sm">
          <li>• React auto-escapes por defecto</li>
          <li>• Cuidado con dangerouslySetInnerHTML</li>
          <li>• Usa DOMPurify si necesitas HTML</li>
          <li>• Valida URLs en href/src</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Security headers</p>
        <ul className="space-y-1 text-sm">
          <li>• Content-Security-Policy</li>
          <li>• X-Frame-Options: DENY</li>
          <li>• X-Content-Type-Options: nosniff</li>
          <li>• Strict-Transport-Security (HSTS)</li>
        </ul>
      </div>
    </>
  );
}

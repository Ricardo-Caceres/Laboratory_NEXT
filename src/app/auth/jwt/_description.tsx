export default function JWTDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        JSON Web Tokens (JWT) son un estándar abierto para transmitir información de forma segura
        entre partes. Aprende a generar, validar y usar JWTs para autenticación y autorización.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🔑 Estructura JWT</h3>
          <ul className="space-y-2">
            <li>✓ Header - Algoritmo y tipo</li>
            <li>✓ Payload - Claims (datos)</li>
            <li>✓ Signature - Verificación</li>
            <li>✓ Base64 encoded</li>
            <li>✓ Self-contained</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📋 Claims comunes</h3>
          <ul className="space-y-2">
            <li>• iss - Issuer</li>
            <li>• sub - Subject (user ID)</li>
            <li>• exp - Expiration time</li>
            <li>• iat - Issued at</li>
            <li>• aud - Audience</li>
          </ul>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-6">
        <p className="font-semibold mb-2">🔒 Seguridad</p>
        <ul className="space-y-1 text-sm">
          <li>⚠️ No guardar datos sensibles en el payload</li>
          <li>⚠️ Usar HTTPS siempre</li>
          <li>⚠️ Implementar refresh tokens</li>
          <li>⚠️ Validar signature y expiración</li>
          <li>⚠️ Rotar secrets regularmente</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">✅ Casos de uso</p>
        <ul className="space-y-1 text-sm">
          <li>• Autenticación stateless</li>
          <li>• SSO (Single Sign-On)</li>
          <li>• API authentication</li>
          <li>• Mobile apps</li>
        </ul>
      </div>
    </>
  );
}

export default function NextHeadDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        next/head permite modificar el {'<head>'} del documento desde cualquier componente.
        Ideal para SEO, meta tags, títulos dinámicos y scripts externos.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">📋 Elementos comunes</h3>
          <ul className="space-y-2">
            <li>✓ {'<title>'} - Título de página</li>
            <li>✓ {'<meta>'} - Meta tags (description, og, etc)</li>
            <li>✓ {'<link>'} - Stylesheets, favicons</li>
            <li>✓ {'<script>'} - Scripts externos</li>
            <li>✓ {'<style>'} - CSS inline</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 SEO y Social</h3>
          <ul className="space-y-2">
            <li>• Open Graph - Facebook, LinkedIn</li>
            <li>• Twitter Cards - Twitter preview</li>
            <li>• Canonical URL - URL canónica</li>
            <li>• Meta description - Descripción</li>
            <li>• Robots - Indexación</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚠️ Nota importante</p>
        <p className="text-sm">
          En App Router (Next.js 13+), usa <code>metadata</code> export en vez de next/head.
          next/head solo funciona en Pages Router.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Best practices</p>
        <ul className="space-y-1 text-sm">
          <li>• Usa key prop para elementos duplicados</li>
          <li>• Define meta tags en componente de layout</li>
          <li>• Títulos únicos para cada página</li>
        </ul>
      </div>
    </>
  );
}

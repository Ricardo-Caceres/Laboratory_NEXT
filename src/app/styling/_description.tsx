export default function StylingDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Domina las técnicas modernas de styling para aplicaciones React y Next.js.
        Desde CSS-in-JS hasta Tailwind CSS, utility-first y CSS Modules.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎨 Metodologías</h3>
          <ul className="space-y-2">
            <li>✓ CSS-in-JS - Styled Components, Emotion</li>
            <li>✓ Utility-first - Tailwind CSS</li>
            <li>✓ CSS Modules - Scoped styles</li>
            <li>✓ Sass/SCSS - Preprocessors</li>
            <li>✓ PostCSS - CSS transformations</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Conceptos modernos</h3>
          <ul className="space-y-2">
            <li>• Design tokens - Variables de diseño</li>
            <li>• Theming - Dark mode, customization</li>
            <li>• Responsive design - Mobile-first</li>
            <li>• Component-driven - Reusable styles</li>
            <li>• Performance - Critical CSS, code splitting</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Frameworks populares</p>
        <ul className="space-y-1 text-sm">
          <li>• Tailwind CSS - Utility-first, altamente popular</li>
          <li>• Styled Components - CSS-in-JS líder</li>
          <li>• Emotion - Performance-focused CSS-in-JS</li>
          <li>• CSS Modules - Built-in Next.js</li>
          <li>• Sass - Preprocessor clásico</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">📚 En esta sección aprenderás:</p>
        <ul className="space-y-1 text-sm">
          <li>• Diferentes approaches de styling</li>
          <li>• Cuándo usar cada metodología</li>
          <li>• Best practices y patterns</li>
          <li>• Performance optimization</li>
        </ul>
      </div>
    </>
  );
}

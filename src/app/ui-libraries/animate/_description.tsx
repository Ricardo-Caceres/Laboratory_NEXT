export default function AnimateDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Framer Motion es la librería líder para animaciones en React. Aprende a crear
        animaciones fluidas, gestos, transiciones de página y motion components avanzados.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">✨ Características</h3>
          <ul className="space-y-2">
            <li>✓ Declarative - API simple</li>
            <li>✓ Gestures - Drag, tap, hover</li>
            <li>✓ Layout animations - Auto-animate</li>
            <li>✓ SVG support - Path animations</li>
            <li>✓ Variants - Orchestration</li>
            <li>✓ Exit animations - AnimatePresence</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Casos de uso</h3>
          <ul className="space-y-2">
            <li>• Page transitions - Route animations</li>
            <li>• Micro-interactions - Hover, click</li>
            <li>• Scroll animations - Parallax, reveal</li>
            <li>• Drag & drop - Reordering lists</li>
            <li>• Loading states - Skeletons, spinners</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">⚡ Componentes clave</p>
        <ul className="space-y-1 text-sm">
          <li>• <code>motion.div</code> - Animatable component</li>
          <li>• <code>AnimatePresence</code> - Exit animations</li>
          <li>• <code>motion.layout</code> - Layout animations</li>
          <li>• <code>useAnimation</code> - Imperative control</li>
          <li>• <code>useScroll</code> - Scroll-linked animations</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Best practices</p>
        <ul className="space-y-1 text-sm">
          <li>• Usa variants para orquestación compleja</li>
          <li>• layoutId para shared element transitions</li>
          <li>• whileInView para scroll animations</li>
          <li>• Reduce motion para a11y</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">🎨 Performance</p>
        <p className="text-sm">
          Framer Motion usa hardware acceleration (GPU) automáticamente para
          transform y opacity. Evita animar width, height directamente.
        </p>
      </div>
    </>
  );
}

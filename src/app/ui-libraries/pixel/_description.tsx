export default function PixelDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Pixi.js es un renderer 2D ultra-rápido usando WebGL. Ideal para juegos 2D,
        visualizaciones interactivas, animaciones complejas y gráficos de alto rendimiento.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎮 Características</h3>
          <ul className="space-y-2">
            <li>✓ WebGL renderer - GPU accelerated</li>
            <li>✓ Canvas fallback - Compatibility</li>
            <li>✓ Sprites - 2D images</li>
            <li>✓ Filters - Visual effects</li>
            <li>✓ Text - Rich text rendering</li>
            <li>✓ Particles - Particle systems</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">⚡ Performance</h3>
          <ul className="space-y-2">
            <li>• Batch rendering - Menos draw calls</li>
            <li>• Texture atlases - Optimización</li>
            <li>• Object pooling - Reuso</li>
            <li>• 60 FPS - Smooth animations</li>
            <li>• Mobile optimized - Touch support</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">🎯 Casos de uso</p>
        <ul className="space-y-1 text-sm">
          <li>• 2D Games - Platformers, shooters</li>
          <li>• Data visualization - Interactive charts</li>
          <li>• Slot machines - Casino games</li>
          <li>• Banner ads - Rich media ads</li>
          <li>• Educational apps - Interactive learning</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">🔧 Conceptos clave</p>
        <ul className="space-y-1 text-sm">
          <li>• Application - Root container</li>
          <li>• Stage - Scene graph root</li>
          <li>• Sprites - Display objects</li>
          <li>• Containers - Grouping</li>
          <li>• Ticker - Animation loop</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 vs Other libraries</p>
        <ul className="space-y-1 text-sm">
          <li>• vs Phaser - Pixi es lower-level, más flexible</li>
          <li>• vs Canvas API - Mucho más rápido (WebGL)</li>
          <li>• vs Three.js - 2D vs 3D</li>
        </ul>
      </div>
    </>
  );
}

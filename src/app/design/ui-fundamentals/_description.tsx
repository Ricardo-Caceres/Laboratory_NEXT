export default function UIFundamentalsDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Fundamentos de User Interface: tipografía, color, layout, componentes y sistemas de diseño.
        La base para crear interfaces coherentes y profesionales.
      </p>
      
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h4 className="font-bold mb-2">📝 Tipografía</h4>
          <ul className="text-sm space-y-1">
            <li>• Font families</li>
            <li>• Type scale</li>
            <li>• Line height</li>
            <li>• Letter spacing</li>
            <li>• Hierarchy</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h4 className="font-bold mb-2">🎨 Color</h4>
          <ul className="text-sm space-y-1">
            <li>• Color theory</li>
            <li>• Palettes</li>
            <li>• Contrast ratios</li>
            <li>• Semantic colors</li>
            <li>• Dark mode</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h4 className="font-bold mb-2">📐 Layout</h4>
          <ul className="text-sm space-y-1">
            <li>• Grid systems</li>
            <li>• Spacing scale</li>
            <li>• Responsive design</li>
            <li>• Breakpoints</li>
            <li>• Flexbox/Grid</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">🎯 Componentes esenciales</p>
        <ul className="space-y-1 text-sm">
          <li>• Buttons - States, sizes, variants</li>
          <li>• Forms - Inputs, validation, accessibility</li>
          <li>• Cards - Containers de contenido</li>
          <li>• Navigation - Menus, tabs, breadcrumbs</li>
          <li>• Modals - Overlays y dialogs</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Design tokens</p>
        <ul className="space-y-1 text-sm">
          <li>• Colors - Primary, secondary, neutrals</li>
          <li>• Spacing - 4px, 8px, 16px, 24px, 32px...</li>
          <li>• Typography - Font sizes, weights, families</li>
          <li>• Shadows - Elevation levels</li>
          <li>• Border radius - Rounding values</li>
        </ul>
      </div>
    </>
  );
}

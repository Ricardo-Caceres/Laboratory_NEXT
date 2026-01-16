export default function AGGridDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        AG Grid es la grid más potente para JavaScript, con soporte para millones de filas,
        filtrado avanzado, agrupación, edición inline y más.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">⚡ Características</h3>
          <ul className="space-y-2">
            <li>✓ Virtual scrolling - Millones de filas</li>
            <li>✓ Sorting/Filtering - Avanzados</li>
            <li>✓ Grouping - Agregaciones</li>
            <li>✓ Editing - Inline/Popup</li>
            <li>✓ Excel export - Exportar datos</li>
            <li>✓ Charts - Gráficos integrados</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🎯 Casos de uso</h3>
          <ul className="space-y-2">
            <li>• Dashboards financieros</li>
            <li>• Admin panels</li>
            <li>• Reporting tools</li>
            <li>• Data analysis apps</li>
            <li>• CRM/ERP systems</li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
        <p className="font-semibold mb-2">📊 Ediciones</p>
        <ul className="space-y-1 text-sm">
          <li>• Community - Free, features básicos</li>
          <li>• Enterprise - Features avanzados, soporte</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">⚠️ Consideraciones</p>
        <ul className="space-y-1 text-sm">
          <li>• Bundle size grande (~500KB)</li>
          <li>• Curva de aprendizaje moderada</li>
          <li>• Enterprise features requieren licencia</li>
          <li>• Excelente documentación</li>
        </ul>
      </div>
    </>
  );
}

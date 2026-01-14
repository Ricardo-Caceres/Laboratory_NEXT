'use client';

import { useState } from 'react';

export function AccessibilityDemo() {
  const [showModal, setShowModal] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const makeAnnouncement = (message: string) => {
    setAnnouncement(message);
    setTimeout(() => setAnnouncement(''), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Live Region para anuncios */}
      <div 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
        className="sr-only"
      >
        {announcement}
      </div>

      <div className="p-4 rounded-lg" style={{ background: 'var(--panel)', border: '1px solid var(--border)' }}>
        <h3 className="text-lg font-semibold mb-4">Ejemplos Interactivos</h3>
        
        {/* Botón accesible */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Botón con ARIA</h4>
          <button
            onClick={() => {
              makeAnnouncement('Acción ejecutada correctamente');
            }}
            className="px-4 py-2 rounded font-medium transition-colors"
            style={{ background: 'var(--primary)', color: 'white' }}
            aria-label="Ejecutar acción de demostración"
          >
            Ejecutar Acción
          </button>
        </div>

        {/* Form accesible */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Formulario Accesible</h4>
          <div className="space-y-3">
            <div>
              <label htmlFor="name-input" className="block mb-1">
                Nombre <span className="text-red-600" aria-label="requerido">*</span>
              </label>
              <input
                id="name-input"
                type="text"
                aria-required="true"
                aria-describedby="name-hint"
                className="w-full p-2 rounded border"
                style={{ borderColor: 'var(--border)' }}
              />
              <div id="name-hint" className="text-sm mt-1 opacity-70">
                Ingresa tu nombre completo
              </div>
            </div>
          </div>
        </div>

        {/* Toggle con ARIA */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Toggle Accesible</h4>
          <ToggleSwitch />
        </div>
      </div>

      <div className="p-4 rounded-lg" style={{ background: 'var(--code-bg)', border: '1px solid var(--border)' }}>
        <h3 className="font-semibold mb-3">✅ Checklist de Accessibility</h3>
        <ul className="space-y-2 text-sm">
          <li>✓ Todos los elementos interactivos son navegables por teclado</li>
          <li>✓ Todas las imágenes tienen texto alternativo apropiado</li>
          <li>✓ El contraste de color cumple WCAG AA (4.5:1)</li>
          <li>✓ Los formularios tienen labels asociados</li>
          <li>✓ Los errores se comunican con aria-invalid y role="alert"</li>
          <li>✓ Modals tienen focus trap y se cierran con ESC</li>
          <li>✓ Estados dinámicos usan aria-live</li>
          <li>✓ La estructura usa HTML semántico</li>
          <li>✓ Los enlaces tienen texto descriptivo</li>
          <li>✓ El zoom al 200% no rompe el layout</li>
        </ul>
      </div>

      <div className="p-4 rounded-lg" style={{ background: 'var(--panel)', border: '1px solid var(--border)' }}>
        <h3 className="font-semibold mb-3">🛠️ Herramientas de Testing</h3>
        <ul className="space-y-2 text-sm">
          <li><strong>axe DevTools:</strong> Extension para Chrome/Firefox</li>
          <li><strong>Lighthouse:</strong> Auditoría integrada en Chrome DevTools</li>
          <li><strong>WAVE:</strong> Evaluador visual de accessibility</li>
          <li><strong>Screen Readers:</strong> NVDA (Windows), JAWS, VoiceOver (Mac)</li>
          <li><strong>jest-axe:</strong> Testing automatizado de a11y</li>
          <li><strong>Pa11y:</strong> CLI para testing continuo</li>
        </ul>
      </div>
    </div>
  );
}

function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      role="switch"
      aria-checked={enabled}
      onClick={() => setEnabled(!enabled)}
      className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors"
      style={{ background: enabled ? 'var(--success)' : 'var(--border)' }}
    >
      <span className="sr-only">Activar notificaciones</span>
      <span
        className="inline-block w-4 h-4 transform bg-white rounded-full transition-transform"
        style={{
          transform: enabled ? 'translateX(1.5rem)' : 'translateX(0.25rem)',
        }}
      />
    </button>
  );
}

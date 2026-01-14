import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function UXFundamentalsPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="UX Fundamentals"
        description="**User Experience (UX)** es la experiencia completa que tiene un usuario al interactuar con un producto o servicio digital.

**Principios Fundamentales de UX:**
- **User-Centered Design**: El usuario es el centro de todas las decisiones
- **Usability**: Facilidad de uso y aprendizaje
- **Accessibility**: Diseño inclusivo para todos
- **Consistency**: Patrones y comportamientos predecibles
- **Feedback**: Comunicación clara de acciones y estados
- **Hierarchy**: Organización clara de información

**5 Elementos de UX (Jesse James Garrett):**
1. **Strategy**: Objetivos de negocio y necesidades del usuario
2. **Scope**: Requisitos funcionales y contenido
3. **Structure**: Arquitectura de información e interacción
4. **Skeleton**: Diseño de interfaz, navegación e información
5. **Surface**: Diseño visual

**Leyes de UX que todo front-end debe conocer:**
- **Ley de Fitts**: El tiempo para alcanzar un objetivo depende de su tamaño y distancia
- **Ley de Hick**: El tiempo de decisión aumenta con el número de opciones
- **Ley de Miller**: Las personas pueden retener 7±2 elementos en memoria de trabajo
- **Ley de Jakob**: Los usuarios prefieren que tu sitio funcione como los que ya conocen
- **Efecto de Usabilidad Estética**: Los diseños atractivos se perciben como más usables

**Heurísticas de Nielsen (10 principios de usabilidad):**
1. Visibilidad del estado del sistema
2. Coincidencia entre el sistema y el mundo real
3. Control y libertad del usuario
4. Consistencia y estándares
5. Prevención de errores
6. Reconocer en lugar de recordar
7. Flexibilidad y eficiencia de uso
8. Diseño estético y minimalista
9. Ayuda a reconocer, diagnosticar y recuperarse de errores
10. Ayuda y documentación

**Métricas de UX:**
- **Task Success Rate**: % de tareas completadas exitosamente
- **Time on Task**: Tiempo para completar una tarea
- **Error Rate**: Frecuencia de errores
- **System Usability Scale (SUS)**: Puntuación de 0-100
- **Net Promoter Score (NPS)**: Probabilidad de recomendar

**Por qué importa para front-end developers:**
- Reduce tasas de rebote y abandono
- Aumenta conversiones y engagement
- Disminuye costos de soporte
- Mejora satisfacción del usuario
- Diferencia competitiva"
        codeContent={[
          {
            filePath: 'laws/fitts-law.tsx',
            content: `// Ley de Fitts: Objetivos más grandes y cercanos son más fáciles de alcanzar

// ❌ MAL - Botones pequeños y difíciles de clickear
export function BadButton() {
  return (
    <button className="px-1 py-0.5 text-xs">
      Enviar
    </button>
  );
}

// ✅ BIEN - Botones con área de click adecuada (mínimo 44x44px)
export function GoodButton() {
  return (
    <button className="px-6 py-3 text-base min-w-[120px] min-h-[44px]">
      Enviar
    </button>
  );
}

// Aplicación: CTAs principales deben ser grandes y visibles
export function CallToAction() {
  return (
    <div className="flex flex-col gap-4">
      {/* CTA primario - grande y prominente */}
      <button className="px-8 py-4 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Comenzar Gratis
      </button>
      
      {/* CTA secundario - menos prominente pero aún clickeable */}
      <button className="px-6 py-3 text-base border border-gray-300 rounded-lg hover:bg-gray-50">
        Saber Más
      </button>
    </div>
  );
}`,
          },
          {
            filePath: 'laws/hicks-law.tsx',
            content: `// Ley de Hick: Reducir opciones acelera la toma de decisiones

// ❌ MAL - Demasiadas opciones abruman al usuario
export function OverwhelmingMenu() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Productos</li>
        <li>Servicios</li>
        <li>Soluciones</li>
        <li>Recursos</li>
        <li>Documentación</li>
        <li>Blog</li>
        <li>Noticias</li>
        <li>Eventos</li>
        <li>Comunidad</li>
        <li>Soporte</li>
        <li>FAQ</li>
        <li>Contacto</li>
        {/* ... más opciones */}
      </ul>
    </nav>
  );
}

// ✅ BIEN - Opciones agrupadas jerárquicamente
export function SimplifiedMenu() {
  return (
    <nav>
      <ul className="flex gap-6">
        <li>Home</li>
        <li className="relative group">
          <button>Productos ▾</button>
          <ul className="hidden group-hover:block absolute">
            <li>SaaS</li>
            <li>Enterprise</li>
            <li>API</li>
          </ul>
        </li>
        <li className="relative group">
          <button>Recursos ▾</button>
          <ul className="hidden group-hover:block absolute">
            <li>Documentación</li>
            <li>Blog</li>
            <li>Soporte</li>
          </ul>
        </li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

// Progressive Disclosure: Mostrar opciones gradualmente
export function ProgressiveForm() {
  const [step, setStep] = React.useState(1);
  
  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Paso 1: Información Básica</h2>
          <input placeholder="Nombre" />
          <input placeholder="Email" />
          <button onClick={() => setStep(2)}>Continuar</button>
        </div>
      )}
      
      {step === 2 && (
        <div>
          <h2>Paso 2: Preferencias</h2>
          <select><option>Selecciona tu plan</option></select>
          <button onClick={() => setStep(3)}>Continuar</button>
        </div>
      )}
      
      {step === 3 && (
        <div>
          <h2>Paso 3: Confirmación</h2>
          <button>Finalizar</button>
        </div>
      )}
    </div>
  );
}`,
          },
          {
            filePath: 'heuristics/visibility-system-status.tsx',
            content: `// Heurística 1: Visibilidad del estado del sistema

'use client';
import { useState } from 'react';

// Los usuarios deben saber qué está pasando en todo momento
export function VisibilityExamples() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const handleUpload = async () => {
    setLoading(true);
    // Simular upload
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(r => setTimeout(r, 200));
      setProgress(i);
    }
    setLoading(false);
  };
  
  return (
    <div className="space-y-6 p-6">
      {/* ❌ MAL - No hay feedback */}
      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        Subir Archivo
      </button>
      
      {/* ✅ BIEN - Estados visuales claros */}
      <div>
        <button
          onClick={handleUpload}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Subiendo...
            </span>
          ) : (
            'Subir Archivo'
          )}
        </button>
        
        {loading && (
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: \`\${progress}%\` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">{progress}% completado</p>
          </div>
        )}
      </div>
      
      {/* Estados de formulario */}
      <div>
        <input
          type="email"
          placeholder="Email"
          className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          aria-label="Email"
        />
        <p className="text-sm text-gray-600 mt-1">
          ✓ Formato válido
        </p>
      </div>
    </div>
  );
}`,
          },
          {
            filePath: 'heuristics/error-prevention.tsx',
            content: `// Heurística 5: Prevención de errores

'use client';
import { useState } from 'react';

export function ErrorPreventionExamples() {
  const [email, setEmail] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  
  return (
    <div className="space-y-6 p-6">
      {/* ❌ MAL - Sin validación ni prevención */}
      <div>
        <input type="text" placeholder="Email" />
        <button className="ml-2 px-4 py-2 bg-red-600 text-white rounded">
          Eliminar Cuenta
        </button>
      </div>
      
      {/* ✅ BIEN - Validación en tiempo real */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={\`border rounded px-3 py-2 w-full \${
            email && !email.includes('@') 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:ring-blue-500'
          }\`}
          placeholder="tu@email.com"
        />
        {email && !email.includes('@') && (
          <p className="text-sm text-red-600 mt-1">
            ⚠️ Por favor ingresa un email válido
          </p>
        )}
      </div>
      
      {/* Confirmación de acciones destructivas */}
      <div>
        {!showConfirm ? (
          <button
            onClick={() => setShowConfirm(true)}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Eliminar Cuenta
          </button>
        ) : (
          <div className="border border-red-300 bg-red-50 p-4 rounded">
            <p className="text-sm text-red-800 mb-3">
              ⚠️ Esta acción es permanente. ¿Estás seguro de eliminar tu cuenta?
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Sí, Eliminar
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Constraints: Prevenir entrada inválida */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Teléfono (solo números)
        </label>
        <input
          type="tel"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength={10}
          className="border rounded px-3 py-2"
          placeholder="1234567890"
        />
      </div>
      
      {/* Deshacer acciones */}
      <div className="bg-gray-800 text-white px-4 py-3 rounded flex items-center justify-between">
        <span>Archivo eliminado</span>
        <button className="px-3 py-1 bg-white text-gray-800 rounded text-sm hover:bg-gray-100">
          Deshacer
        </button>
      </div>
    </div>
  );
}`,
          },
          {
            filePath: 'metrics/sus-calculation.ts',
            content: `// System Usability Scale (SUS) - Métrica estándar de usabilidad

/**
 * El SUS es un cuestionario de 10 preguntas con escala Likert (1-5)
 * Resultado: 0-100 (no es un porcentaje)
 * 
 * Interpretación:
 * - 80+: Excelente
 * - 68-80: Bueno (promedio es 68)
 * - 51-68: OK
 * - <51: Pobre
 */

export interface SUSResponse {
  q1: number; // Usaría este sistema frecuentemente
  q2: number; // El sistema es innecesariamente complejo
  q3: number; // El sistema es fácil de usar
  q4: number; // Necesitaría ayuda técnica para usar el sistema
  q5: number; // Las funciones están bien integradas
  q6: number; // Hay demasiada inconsistencia
  q7: number; // La mayoría aprenderían rápido
  q8: number; // El sistema es muy tedioso de usar
  q9: number; // Me sentí confiado usando el sistema
  q10: number; // Necesité aprender mucho antes de usar el sistema
}

export function calculateSUS(responses: SUSResponse): number {
  // Preguntas impares (1,3,5,7,9): contribución = respuesta - 1
  const oddSum = 
    (responses.q1 - 1) +
    (responses.q3 - 1) +
    (responses.q5 - 1) +
    (responses.q7 - 1) +
    (responses.q9 - 1);
  
  // Preguntas pares (2,4,6,8,10): contribución = 5 - respuesta
  const evenSum =
    (5 - responses.q2) +
    (5 - responses.q4) +
    (5 - responses.q6) +
    (5 - responses.q8) +
    (5 - responses.q10);
  
  // Multiplicar suma por 2.5 para obtener puntaje 0-100
  return (oddSum + evenSum) * 2.5;
}

// Ejemplo de implementación de encuesta SUS
export function SUSQuestionnaire() {
  const questions = [
    "Creo que usaría este sistema frecuentemente",
    "Encuentro el sistema innecesariamente complejo",
    "Creo que el sistema es fácil de usar",
    "Creo que necesitaría ayuda técnica para usar el sistema",
    "Las funciones del sistema están bien integradas",
    "Creo que hay demasiada inconsistencia en el sistema",
    "Imagino que la mayoría de personas aprenderían a usar el sistema rápidamente",
    "Encuentro el sistema muy tedioso de usar",
    "Me sentí muy confiado usando el sistema",
    "Necesité aprender muchas cosas antes de poder usar el sistema"
  ];
  
  // Implementación del formulario...
}

// Ejemplo de uso
const exampleResponse: SUSResponse = {
  q1: 5, q2: 2, q3: 4, q4: 1, q5: 5,
  q6: 2, q7: 4, q8: 1, q9: 5, q10: 1
};

console.log(calculateSUS(exampleResponse)); // ~85 - Excelente`,
          },
          {
            filePath: 'patterns/feedback-patterns.tsx',
            content: `// Patrones de Feedback en UX

'use client';
import { useState } from 'react';

export function FeedbackPatterns() {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  
  return (
    <div className="space-y-8 p-6">
      {/* 1. Feedback inmediato */}
      <div>
        <h3 className="font-semibold mb-2">Feedback Inmediato</h3>
        <button
          onClick={() => {
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          {saved ? '✓ Guardado' : 'Guardar'}
        </button>
      </div>
      
      {/* 2. Toast notifications */}
      <div>
        <h3 className="font-semibold mb-2">Toast Notification</h3>
        <button
          onClick={() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
          }}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Copiar al portapapeles
        </button>
        
        {copied && (
          <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-up">
            ✓ Copiado al portapapeles
          </div>
        )}
      </div>
      
      {/* 3. Micro-interactions */}
      <div>
        <h3 className="font-semibold mb-2">Micro-interactions</h3>
        <button className="group px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          <span className="inline-block group-hover:scale-110 transition-transform">
            ❤️
          </span>
          {' '}Like
        </button>
      </div>
      
      {/* 4. Progress indicators */}
      <div>
        <h3 className="font-semibold mb-2">Indicadores de Progreso</h3>
        <div className="space-y-2">
          {/* Determinate */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Subiendo archivo</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
          
          {/* Indeterminate */}
          <div>
            <div className="text-sm mb-1">Procesando...</div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div className="bg-blue-600 h-2 rounded-full animate-pulse w-1/3" />
            </div>
          </div>
        </div>
      </div>
      
      {/* 5. Estado vacío con acción */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="mt-2 text-sm font-semibold">No hay documentos</h3>
        <p className="mt-1 text-sm text-gray-500">Comienza creando un nuevo documento</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          + Nuevo Documento
        </button>
      </div>
    </div>
  );
}`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">UX Fundamentals</h2>
          <p className="mb-4">
            Fundamentos esenciales de User Experience para desarrolladores front-end.
          </p>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Recursos Recomendados</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Libros:</strong> "Don't Make Me Think" - Steve Krug</li>
                <li><strong>Libros:</strong> "The Design of Everyday Things" - Don Norman</li>
                <li><strong>Web:</strong> <a href="https://lawsofux.com" className="text-blue-600 hover:underline">Laws of UX</a></li>
                <li><strong>Web:</strong> <a href="https://www.nngroup.com" className="text-blue-600 hover:underline">Nielsen Norman Group</a></li>
                <li><strong>Herramientas:</strong> Hotjar, FullStory (analytics de comportamiento)</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-2">Checklist de UX para Developers</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>¿El usuario sabe dónde está en todo momento?</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>¿Hay feedback inmediato para todas las acciones?</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>¿Los CTAs son claros y fáciles de clickear?</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>¿Los errores se previenen antes de que ocurran?</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>¿El lenguaje es claro y orientado al usuario?</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>¿Las opciones están agrupadas lógicamente?</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>¿Los tiempos de carga tienen indicadores visuales?</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

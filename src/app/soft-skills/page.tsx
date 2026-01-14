import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tech Lead Skills',
  description: 'Habilidades técnicas y sociales para Tech Leads'
};

export default function SoftSkillsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Tech Lead Skills</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Habilidades universales que todo Tech Lead debe dominar - técnicas, sociales y de liderazgo.
        </p>
      </div>

      <section className="space-y-6">
        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">Habilidades Técnicas</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Arquitectura de Software</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Diseño de sistemas escalables y mantenibles</li>
                <li>Patrones de arquitectura (Microservicios, Event-Driven, CQRS)</li>
                <li>Trade-offs entre diferentes soluciones</li>
                <li>Documentación de decisiones arquitectónicas (ADRs)</li>
                <li>Evaluación de tecnologías y frameworks</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Code Review y Quality</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Establecer estándares de código</li>
                <li>Dar feedback constructivo y específico</li>
                <li>Identificar code smells y anti-patrones</li>
                <li>Balancear perfección vs. pragmatismo</li>
                <li>Enseñar best practices durante reviews</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Technical Debt Management</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Identificar y catalogar deuda técnica</li>
                <li>Priorizar refactoring vs. features</li>
                <li>Comunicar impacto técnico a stakeholders</li>
                <li>Crear roadmap de mejoras técnicas</li>
                <li>Balancear velocidad y calidad</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">DevOps y CI/CD</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Automatización de deploys</li>
                <li>Monitoreo y observabilidad</li>
                <li>Estrategias de release (Blue-Green, Canary)</li>
                <li>Incident response y post-mortems</li>
                <li>Infrastructure as Code</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">Habilidades de Liderazgo</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Mentoring y Coaching</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Identificar fortalezas y áreas de mejora del equipo</li>
                <li>Crear planes de desarrollo individual</li>
                <li>Pair programming efectivo</li>
                <li>Delegación inteligente de tareas</li>
                <li>Fomentar cultura de aprendizaje continuo</li>
              </ul>
              
              <div className="mt-3 p-3" style={{ background: 'var(--background)', borderRadius: '0.25rem' }}>
                <p className="font-semibold mb-2">Ejemplo de 1-on-1:</p>
                <pre style={{ overflow: 'auto', fontSize: '0.875rem' }}>
{`Agenda:
1. Check-in personal (5 min)
2. Progreso en objetivos (10 min)
3. Bloqueadores y ayuda necesaria (10 min)
4. Desarrollo profesional (10 min)
5. Feedback mutuo (5 min)

Preguntas clave:
- ¿Qué te está motivando últimamente?
- ¿Hay algo que te esté frustrando?
- ¿En qué te gustaría mejorar?
- ¿Cómo puedo ayudarte mejor?`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2">Gestión de Conflictos</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Identificar conflictos tempranamente</li>
                <li>Facilitar conversaciones difíciles</li>
                <li>Mediar entre diferentes perspectivas</li>
                <li>Mantener objetividad y profesionalismo</li>
                <li>Encontrar soluciones win-win</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Toma de Decisiones</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Analizar opciones con datos objetivos</li>
                <li>Consultar al equipo cuando sea apropiado</li>
                <li>Decidir con información incompleta</li>
                <li>Comunicar el "por qué" de las decisiones</li>
                <li>Aceptar responsabilidad de las decisiones</li>
              </ul>
              
              <div className="mt-3 p-3" style={{ background: 'var(--background)', borderRadius: '0.25rem' }}>
                <p className="font-semibold mb-2">Framework de decisión:</p>
                <pre style={{ overflow: 'auto', fontSize: '0.875rem' }}>
{`1. Definir el problema claramente
2. Recopilar información relevante
3. Identificar opciones
4. Evaluar pros/contras de cada opción
5. Considerar impacto a corto y largo plazo
6. Decidir y documentar
7. Comunicar y ejecutar
8. Revisar resultado`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">Comunicación Efectiva</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Con el Equipo</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Comunicación clara y concisa</li>
                <li>Escucha activa</li>
                <li>Adaptar mensaje a la audiencia</li>
                <li>Dar y recibir feedback constructivo</li>
                <li>Documentación efectiva</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Con Stakeholders</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Traducir complejidad técnica a lenguaje de negocio</li>
                <li>Gestionar expectativas realistas</li>
                <li>Comunicar riesgos y trade-offs</li>
                <li>Reportes de progreso regulares</li>
                <li>Negociación de recursos y timelines</li>
              </ul>
              
              <div className="mt-3 p-3" style={{ background: 'var(--background)', borderRadius: '0.25rem' }}>
                <p className="font-semibold mb-2">Template de actualización semanal:</p>
                <pre style={{ overflow: 'auto', fontSize: '0.875rem' }}>
{`Semana del [fecha]

✅ Completado:
- Feature X implementado (valor: Y)
- Bug crítico Z resuelto

🔄 En Progreso:
- Feature A (80% - bloqueado por B)
- Refactor C (planeado para siguiente sprint)

⚠️ Riesgos:
- Dependencia externa tiene delay
- Necesitamos decisión sobre arquitectura

📊 Métricas:
- Velocity: X puntos
- Bugs abiertos: Y
- Test coverage: Z%`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2">Presentaciones Técnicas</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Estructura clara: problema → solución → impacto</li>
                <li>Visualizaciones efectivas (diagramas, gráficos)</li>
                <li>Demos en vivo cuando sea posible</li>
                <li>Anticipar preguntas y objeciones</li>
                <li>Call to action claro</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">Gestión de Proyectos</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Planning y Estimación</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Breakdown de tareas complejas</li>
                <li>Estimación realista (considera imprevistos)</li>
                <li>Identificación de dependencias</li>
                <li>Definition of Done clara</li>
                <li>Buffer para incertidumbre</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Priorización</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Framework RICE (Reach, Impact, Confidence, Effort)</li>
                <li>MoSCoW (Must, Should, Could, Won't)</li>
                <li>Value vs. Complexity matrix</li>
                <li>Technical debt vs. features balance</li>
                <li>ROI de iniciativas técnicas</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Risk Management</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Identificación temprana de riesgos</li>
                <li>Planes de mitigación</li>
                <li>Comunicación proactiva</li>
                <li>Contingency planning</li>
                <li>Lessons learned</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">Cultura y Team Building</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Crear Buen Ambiente</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Seguridad psicológica - está bien fallar y aprender</li>
                <li>Reconocer logros públicamente</li>
                <li>Celebrar wins del equipo</li>
                <li>Fomentar colaboración sobre competencia</li>
                <li>Balance vida-trabajo</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Diversity & Inclusion</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Valorar perspectivas diferentes</li>
                <li>Dar voz a todos en reuniones</li>
                <li>Combatir sesgos inconscientes</li>
                <li>Crear oportunidades equitativas</li>
                <li>Lenguaje inclusivo</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Knowledge Sharing</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Tech talks internos regulares</li>
                <li>Documentación de decisiones</li>
                <li>Pair/mob programming</li>
                <li>Retrospectivas efectivas</li>
                <li>Lunch & learns</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">Stakeholder Management</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Entender el Negocio</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Objetivos de cada unidad de negocio</li>
                <li>KPIs y métricas de éxito</li>
                <li>Presiones y constraints del negocio</li>
                <li>Competencia y mercado</li>
                <li>Roadmap estratégico</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Gestión de Expectativas</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Comunicar limitaciones técnicas</li>
                <li>Ofrecer alternativas viables</li>
                <li>Ser honesto sobre timelines</li>
                <li>Under-promise, over-deliver</li>
                <li>Updates regulares y transparentes</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Influencia sin Autoridad</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Construir credibilidad con resultados</li>
                <li>Entender motivaciones de stakeholders</li>
                <li>Presentar con datos y evidencia</li>
                <li>Encontrar allies y sponsors</li>
                <li>Win-win solutions</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">Desarrollo Personal</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Continuous Learning</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Mantenerse actualizado con tecnologías</li>
                <li>Leer code de proyectos open source</li>
                <li>Experimentar con nuevas herramientas</li>
                <li>Asistir a conferencias y meetups</li>
                <li>Contribuir a la comunidad</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Time Management</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Priorizar ruthlessly</li>
                <li>Bloques de tiempo para deep work</li>
                <li>Aprender a decir "no"</li>
                <li>Delegar efectivamente</li>
                <li>Balance entre coding y management</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Inteligencia Emocional</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Auto-conciencia de emociones</li>
                <li>Regulación emocional bajo presión</li>
                <li>Empatía con equipo y stakeholders</li>
                <li>Habilidades sociales</li>
                <li>Motivación intrínseca</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Recursos Recomendados</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Libros: "The Manager's Path", "Staff Engineer", "Team Topologies"</li>
          <li>Blogs: martinfowler.com, charity.wtf, leaddev.com</li>
          <li>Podcasts: Software Engineering Daily, The Changelog</li>
          <li>Comunidades: Dev.to, Reddit r/ExperiencedDevs</li>
        </ul>
      </section>

      <div className="mt-8">
        <Link 
          href="/"
          style={{ color: 'var(--primary)' }}
          className="hover:underline"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default function TechLeadSkillsPage() {
  return (
    <div className="min-h-screen p-8" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <h1 className="text-4xl font-bold mb-6">Tech Lead: Habilidades Universales</h1>
      
      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>🎯 Visión Técnica y Estratégica</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Arquitectura de Sistemas:</strong> Diseñar soluciones escalables, mantenibles y resilientes.
              <div className="mt-2 text-sm opacity-80">Conocer patrones como Microservicios, Event-Driven, CQRS, Serverless</div>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Trade-offs:</strong> Evaluar pros/contras de decisiones técnicas considerando tiempo, costo, calidad.
              <div className="mt-2 text-sm opacity-80">Ejemplo: Monolito vs Microservicios, SQL vs NoSQL, Server vs Serverless</div>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Deuda Técnica:</strong> Identificar, documentar y priorizar su pago estratégicamente.
              <div className="mt-2 text-sm opacity-80">Balance entre features nuevas y refactoring</div>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Technology Radar:</strong> Evaluar nuevas tecnologías: Adopt, Trial, Assess, Hold.
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>👥 Liderazgo y Gestión de Personas</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Mentoring:</strong> Desarrollar capacidades del equipo, no solo asignar tareas.
              <div className="mt-2 p-3 rounded text-sm" style={{ background: 'var(--background)' }}>
                - Code reviews constructivos<br/>
                - Pair programming regular<br/>
                - 1-on-1s para crecimiento profesional<br/>
                - Crear cultura de aprendizaje
              </div>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Delegación Efectiva:</strong> Asignar tareas según habilidades y objetivos de crecimiento.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Feedback:</strong> Específico, accionable, oportuno (SBI: Situation, Behavior, Impact).
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Resolución de Conflictos:</strong> Mediar disputas técnicas con objetividad y datos.
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>💼 Comunicación con Stakeholders</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Traducción Técnica-Negocio:</strong> Explicar conceptos técnicos en términos de valor de negocio.
              <div className="mt-2 p-3 rounded text-sm" style={{ background: 'var(--background)' }}>
                ❌ "Necesitamos refactorizar el backend"<br/>
                ✅ "Reducir tiempo de carga 40% mejorará conversión en 15%"
              </div>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Gestión de Expectativas:</strong> Comunicar limitaciones, riesgos y timelines realistas.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Status Reports:</strong> Transparencia sobre progreso, bloqueadores y soluciones.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Negociación:</strong> Scope, recursos, deadlines - el triángulo de hierro.
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>📊 Gestión de Proyectos</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Estimaciones:</strong> Story points, T-shirt sizes, planning poker.
              <div className="mt-2 text-sm opacity-80">Buffer para incertidumbre (× 1.5 para desconocido)</div>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Priorización:</strong> Frameworks como RICE (Reach, Impact, Confidence, Effort).
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Risk Management:</strong> Identificar, evaluar y mitigar riesgos técnicos proactivamente.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Retrospectivas:</strong> Mejora continua basada en datos y feedback honesto.
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>🛠️ Excelencia Técnica</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Code Quality:</strong> Establecer y mantener estándares (linters, formatters, conventions).
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Testing Strategy:</strong> Pirámide de tests (Unit 70%, Integration 20%, E2E 10%).
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>CI/CD:</strong> Automatizar builds, tests, deployments.
              <div className="mt-2 text-sm opacity-80">Deploy confidence + rollback rápido = menos stress</div>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Observability:</strong> Logs, métricas, traces, alertas (Prometheus, Datadog, Sentry).
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Security:</strong> OWASP Top 10, security reviews, dependency scanning.
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>📚 Documentación</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>ADRs (Architecture Decision Records):</strong> Documentar decisiones importantes y su contexto.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>README Efectivos:</strong> Setup rápido, ejemplos, troubleshooting.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>API Documentation:</strong> OpenAPI/Swagger, ejemplos de uso.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Runbooks:</strong> Guías de operación, troubleshooting, incident response.
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>🎓 Aprendizaje Continuo</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Tech Talks:</strong> Compartir conocimiento internamente.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>POCs:</strong> Validar tecnologías antes de adoptar.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Post-mortems:</strong> Aprender de incidentes sin culpar personas.
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 font-bold" style={{ color: 'var(--primary)' }}>•</span>
            <div>
              <strong>Communities:</strong> Participar en conferencias, open source, meetups.
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-8 p-6 rounded-lg" style={{ background: 'var(--panel)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>⚡ Soft Skills Críticos</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded" style={{ background: 'var(--background)' }}>
            <h3 className="font-semibold mb-2">Inteligencia Emocional</h3>
            <p className="text-sm opacity-80">Reconocer y manejar emociones propias y del equipo</p>
          </div>
          <div className="p-4 rounded" style={{ background: 'var(--background)' }}>
            <h3 className="font-semibold mb-2">Pensamiento Crítico</h3>
            <p className="text-sm opacity-80">Analizar problemas objetivamente, cuestionar asunciones</p>
          </div>
          <div className="p-4 rounded" style={{ background: 'var(--background)' }}>
            <h3 className="font-semibold mb-2">Adaptabilidad</h3>
            <p className="text-sm opacity-80">Flexibilidad ante cambios de prioridades y tecnologías</p>
          </div>
          <div className="p-4 rounded" style={{ background: 'var(--background)' }}>
            <h3 className="font-semibold mb-2">Influencia sin Autoridad</h3>
            <p className="text-sm opacity-80">Convencer con datos, lógica y empatía</p>
          </div>
          <div className="p-4 rounded" style={{ background: 'var(--background)' }}>
            <h3 className="font-semibold mb-2">Time Management</h3>
            <p className="text-sm opacity-80">Balancear código, meetings, reviews, planning</p>
          </div>
          <div className="p-4 rounded" style={{ background: 'var(--background)' }}>
            <h3 className="font-semibold mb-2">Ownership</h3>
            <p className="text-sm opacity-80">Responsabilidad end-to-end del sistema</p>
          </div>
        </div>
      </section>

      <div className="mt-8 p-6 rounded-lg" style={{ background: 'var(--success)', color: '#000' }}>
        <h3 className="text-xl font-semibold mb-2">💎 El Balance Perfecto</h3>
        <p className="mb-4">Un Tech Lead exitoso balancea:</p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong>30% - Codificando</strong>
            <div className="opacity-80">Mantener skills técnicos actualizados</div>
          </div>
          <div>
            <strong>40% - Liderando</strong>
            <div className="opacity-80">Mentoring, reviews, decisiones arquitectónicas</div>
          </div>
          <div>
            <strong>30% - Coordinando</strong>
            <div className="opacity-80">Stakeholders, planning, documentación</div>
          </div>
        </div>
      </div>
    </div>
  );
}

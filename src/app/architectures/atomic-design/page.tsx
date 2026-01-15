import HomePage from './_client_example';
import ArchitecturePageLayout from '../../../components/ArchitecturePageLayout';

const description = `
⚛️ **Atomic Design** - La metodología que revolucionó cómo construimos Design Systems escalables

Atomic Design es el framework conceptual definitivo para construir sistemas de diseño robustos, consistentes y altamente reutilizables. Creado por Brad Frost en 2013, se inspira en la química: así como los átomos forman moléculas que forman organismos, los componentes UI más pequeños forman componentes más complejos que eventualmente forman páginas completas.

**🎯 ¿Por qué Atomic Design?**
Antes de Atomic Design, los equipos construían componentes ad-hoc sin estructura clara, resultando en:
- ❌ Duplicación masiva de código UI
- ❌ Inconsistencias visuales entre secciones
- ❌ Imposibilidad de escalar el design system
- ❌ Dificultad para onboarding de nuevos developers

Atomic Design resuelve esto con una jerarquía clara y predecible de 5 niveles:

**🔬 Los 5 Niveles de Atomic Design:**

**1. ⚛️ ATOMS (Átomos)** - Los bloques fundamentales
Los elementos UI más básicos e indivisibles. Son los inputs más primitivos del sistema.
- Ejemplos: Button, Input, Label, Icon, Typography (h1, p), Colors, Spacing tokens
- Características: No se pueden dividir más, altamente reutilizables, no tienen contexto de negocio
- En código: Un <Button> acepta variant, size, onClick pero no sabe nada del dominio

**2. 🧬 MOLECULES (Moléculas)** - Grupos funcionales simples
Combinaciones de átomos que trabajan juntos como una unidad funcional.
- Ejemplos: SearchBar (Input + Button + Icon), FormField (Label + Input + ErrorText), Card Header (Avatar + Title + Subtitle)
- Características: Realizan UNA función específica, más útiles que átomos aislados
- En código: SearchForm combina Input atom + Button atom, maneja su propio estado local

**3. 🦠 ORGANISMS (Organismos)** - Secciones complejas e independientes
Grupos de moléculas y átomos que forman secciones distintas y reutilizables de una interfaz.
- Ejemplos: Header completo (Logo + Navigation + SearchBar + UserMenu), ProductCard, CommentSection
- Características: Sección identificable de la UI, puede tener lógica compleja, reutilizable en diferentes contextos
- En código: Header organism compone múltiples molecules y tiene estado/lógica de navegación

**4. 📄 TEMPLATES (Plantillas)** - Wireframes con componentes
Layouts que organizan organismos en una estructura de página, SIN contenido real.
- Ejemplos: DashboardTemplate, BlogPostTemplate, CheckoutTemplate
- Características: Define la estructura y disposición, usa placeholders, muestra el layout responsive
- En código: ProductPageTemplate define dónde van Header, Breadcrumbs, ProductGallery, Reviews pero sin datos reales

**5. 📱 PAGES (Páginas)** - Instancias finales con datos reales
Templates con contenido específico, lo que el usuario finalmente ve.
- Ejemplos: /products/nike-air-max, /blog/atomic-design-guide, /checkout/cart
- Características: Usa data real de APIs, muestra el resultado final, específicas a un caso de uso
- En código: ProductPage usa ProductPageTemplate con data de useQuery() o getServerSideProps

**✨ Beneficios Clave:**

🎨 **Consistencia Visual**: Todos usan los mismos atoms → UI uniforme across toda la app
♻️ **Máxima Reutilización**: Un Button atom se usa 500+ veces sin duplicación
📚 **Documentation Natural**: La jerarquía auto-documenta la arquitectura
🧪 **Testing Granular**: Testea atoms aisladamente, compose con confianza
🚀 **Desarrollo Paralelo**: Equipos trabajan en diferentes niveles sin conflictos
📦 **Design System Ready**: Base perfecta para Storybook, design tokens, theme system
🔄 **Refactoring Seguro**: Cambios en atoms se propagan automáticamente

**🏢 Quién lo usa en Producción:**
- **Airbnb**: Su design system completo está en Atomic Design
- **IBM Carbon**: Design system enterprise siguiendo esta metodología
- **Shopify Polaris**: Framework de componentes basado en Atomic Design
- **Material UI**: Organizan componentes en esta jerarquía
- **GOV.UK Design System**: Gobierno UK para consistencia en servicios públicos

**🛠️ Implementación con React/Next.js:**

\`\`\`
src/
  components/
    atoms/
      Button/
        Button.tsx
        Button.test.tsx
        Button.stories.tsx
    molecules/
      SearchBar/
    organisms/
      Header/
    templates/
      MainLayout/
  pages/
    index.tsx  # Usa MainLayout template
\`\`\`

**⚡ Best Practices:**

1. **Atoms = Zero business logic**: Solo presentación pura
2. **Molecules = Grupos lógicos**: Átomos que SIEMPRE van juntos
3. **Organisms = Context-aware**: Pueden conectar a state management
4. **Templates = Layout only**: Placeholders, no data fetching
5. **Pages = Data + Template**: Conecta datos reales al template

**🎯 Cuándo usar cada nivel:**

- ¿Es reutilizable en TODO el sistema? → **Atom**
- ¿Es un grupo pequeño de atoms? → **Molecule**
- ¿Es una sección completa de la UI? → **Organism**
- ¿Define estructura sin contenido? → **Template**
- ¿Tiene data específica? → **Page**

**⚠️ Errores Comunes:**

❌ Saltar niveles (Atom directo a Organism)
❌ Atoms con lógica de negocio
❌ Templates con data hardcodeada
❌ No distinguir entre Molecule y Organism

**💡 Pro Tips:**

- Combina con Storybook para visualizar cada nivel aisladamente
- Usa TypeScript para type-safe props en cada nivel
- Implementa design tokens (colors, spacing) como "sub-atomic particles"
- Documenta qué componentes van en qué nivel con ADRs
- Considera usar tools como Figma con la misma nomenclatura

**🔥 Variantes Modernas:**

- **Atomic Design + Compound Components**: Átomos exponen subcomponentes
- **Atomic Design + Headless UI**: Separar lógica de presentación en cada nivel
- **Atomic Design + Design Tokens**: Theme system más granular

**Ejemplo en este código:**
Implementación completa de una UI siguiendo Atomic Design desde Button atom hasta MainLayout template, demostrando composición bottom-up.
`;


const filePaths = [
  'src/app/architectures/atomic-design/_client_example.tsx',
  'src/app/architectures/atomic-design/components/atoms/Button.tsx',
  'src/app/architectures/atomic-design/components/atoms/Input.tsx',
  'src/app/architectures/atomic-design/components/molecules/SearchForm.tsx',
  'src/app/architectures/atomic-design/components/organisms/Header.tsx',
  'src/app/architectures/atomic-design/components/templates/MainLayout.tsx',
];

export default function AtomicDesignPage() {
  return (
    <ArchitecturePageLayout
      title="Atomic Design Architecture"
      description={description}
      filePaths={filePaths}
      ClientExample={HomePage}
    />
  );
}

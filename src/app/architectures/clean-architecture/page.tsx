import CleanArchitectureExample from './_client_example';
import ArchitecturePageLayout from '../../../components/ArchitecturePageLayout';

const description = `
**Clean Architecture** es un patrón arquitectónico que separa el código en capas concéntricas con la regla de dependencia: las capas internas no deben conocer ni depender de las capas externas.

Características principales:
- **Independencia de Frameworks:** El negocio no depende de bibliotecas externas
- **Testeable:** La lógica de negocio puede probarse sin UI, DB o elementos externos
- **Independencia de UI:** La UI puede cambiar sin afectar el resto del sistema
- **Independencia de Base de Datos:** Puedes cambiar de BD sin afectar las reglas de negocio
- **Independencia de Agentes Externos:** Las reglas de negocio no saben nada del mundo exterior

Capas (de adentro hacia afuera):
1. **Entities (Domain):** Reglas de negocio empresariales
2. **Use Cases (Application):** Reglas de negocio específicas de la aplicación
3. **Interface Adapters:** Convertidores entre casos de uso y agentes externos
4. **Frameworks & Drivers (Infrastructure):** DB, UI, Web, Devices

Regla de Dependencia:
- El código solo puede depender hacia adentro
- Las capas internas no conocen las externas
- Las estructuras de datos fluyen hacia adentro

**Ventajas:**
- Alta mantenibilidad y escalabilidad
- Facilita el testing unitario
- Cambios en tecnología no afectan la lógica de negocio
- Código desacoplado y modular

En este ejemplo, creamos un sistema de gestión de usuarios con capas claramente separadas: Entities (User), Use Cases (CreateUser, GetAllUsers), y Repository (InMemoryUserRepository).
`;

const filePaths = [
  'src/app/architectures/clean-architecture/_client_example.tsx',
];

export default function CleanArchitecturePage() {
  return (
    <ArchitecturePageLayout
      title="Clean Architecture"
      description={description}
      filePaths={filePaths}
      ClientExample={CleanArchitectureExample}
    />
  );
}

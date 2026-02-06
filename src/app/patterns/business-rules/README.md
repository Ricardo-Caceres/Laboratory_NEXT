# Business Rules Pattern

## 📋 Descripción

Este módulo enseña cómo implementar reglas de negocio en aplicaciones React/Next.js. Las reglas de negocio son la lógica central que define cómo debe comportarse una aplicación según los requisitos del negocio.

## 🎯 Objetivos de Aprendizaje

- Entender qué son las reglas de negocio y por qué son importantes
- Aprender a separar la lógica de negocio de la UI
- Implementar diferentes tipos de reglas: validación, cálculo, autorización y flujo de trabajo
- Aplicar patrones de diseño para organizar reglas de negocio
- Hacer las reglas testables y reutilizables

## 📚 Contenido

### Tipos de Reglas de Negocio

1. **Reglas de Validación**: Verifican que los datos cumplan con requisitos del negocio
   - Validación de edad, email, nombres
   - Restricciones de formato y rango

2. **Reglas de Cálculo**: Determinan cómo se calculan valores
   - Sistemas de descuentos
   - Precios dinámicos
   - Acumulación de beneficios

3. **Reglas de Autorización**: Determinan qué puede hacer cada usuario
   - Permisos basados en roles
   - Control de acceso a recursos
   - Acciones permitidas por estado

4. **Reglas de Flujo de Trabajo**: Definen transiciones válidas entre estados
   - Estados de órdenes de compra
   - Workflows de aprobación
   - Máquinas de estado

### Patrones de Implementación

1. **Rule Objects**: Clases estáticas con métodos de reglas
2. **Custom Hooks**: Encapsular reglas en hooks de React
3. **Specification Pattern**: Reglas combinables y componibles

## 🛠️ Ejemplo Interactivo

El ejemplo incluye un **carrito de compras completo** con:

- ✅ Validación de stock
- ✅ Límites de cantidad por producto
- ✅ Descuentos por membresía (Basic, Premium, VIP)
- ✅ Descuentos por volumen
- ✅ Descuentos por lealtad del cliente
- ✅ Cálculo de envío (envío gratis según condiciones)
- ✅ Validación de compra mínima

### Reglas Implementadas

```typescript
// Descuentos acumulativos con máximo del 35%
- Membresía: 0% (Basic), 10% (Premium), 20% (VIP)
- Volumen: 5% si compras 5+ items
- Lealtad: 5% si has gastado >$2000, 10% si >$5000

// Envío gratis si:
- Eres VIP (siempre)
- Eres Premium y compras >$50
- Cualquier membresía y compras >$100

// Restricciones
- Cantidad por producto: 1-10 unidades
- Compra mínima: $10
- Stock debe estar disponible
```

## 💡 Mejores Prácticas

1. **Separa las reglas de la UI**: Las reglas deben estar en módulos/clases independientes
2. **Usa TypeScript**: Los tipos ayudan a documentar y validar reglas
3. **Nombra claramente**: `canApproveTransaction`, `isEligibleForDiscount`
4. **Centraliza reglas relacionadas**: Agrúpalas en clases o módulos
5. **Haz las reglas puras**: Sin efectos secundarios para facilitar el testing
6. **Documenta las excepciones**: Explica casos especiales

## 🔍 Cuándo Usar Este Patrón

✅ **Usar cuando:**
- Tienes lógica de negocio compleja
- Las reglas cambian frecuentemente
- Necesitas reutilizar lógica en múltiples lugares
- Quieres testear la lógica de negocio sin UI

❌ **No usar cuando:**
- La lógica es extremadamente simple (ej: `value > 0`)
- Las reglas están acopladas a un solo componente
- No hay requisitos de negocio específicos

## 📖 Recursos Adicionales

- [Domain-Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html)
- [Specification Pattern](https://en.wikipedia.org/wiki/Specification_pattern)
- [Business Logic in React](https://kentcdodds.com/blog/colocation)

## 🧪 Testing

Las reglas de negocio son fáciles de testear porque son funciones puras:

```typescript
describe('ShoppingCartRules', () => {
  it('should calculate correct discount for premium member', () => {
    const customer = { membershipLevel: 'premium', totalPurchases: 0 };
    const discount = ShoppingCartRules.calculateTotalDiscount(customer, 1);
    expect(discount).toBe(0.1); // 10%
  });

  it('should apply maximum discount of 35%', () => {
    const customer = { membershipLevel: 'vip', totalPurchases: 6000 };
    const discount = ShoppingCartRules.calculateTotalDiscount(customer, 10);
    expect(discount).toBe(0.35); // Max 35%, no más
  });
});
```

## 🎨 Arquitectura

```
business-rules/
├── page.tsx                 # Página principal
├── metadata.ts             # Metadata SEO
├── _description.tsx        # Teoría y ejemplos de código
├── _client_example.tsx     # Demo interactiva del carrito
└── README.md              # Esta documentación
```

## 🚀 Próximos Pasos

1. Prueba modificar los valores de membresía y compras del cliente
2. Observa cómo cambian los descuentos y beneficios
3. Estudia cómo las reglas están separadas de la UI
4. Intenta agregar nuevas reglas (ej: descuento por categoría)
5. Implementa tests unitarios para las reglas

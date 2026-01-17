# Módulo de Idempotencia - 2026-01-17

## Resumen

Se ha agregado un **módulo completo de idempotencia** con ejemplos prácticos en React y Next.js, demostrando cómo implementar operaciones idempotentes para prevenir duplicados y garantizar consistencia en sistemas distribuidos.

---

## 📁 Archivos Creados

### 1. Página Principal - `/patterns/idempotency`

**Ubicación:** `src/app/patterns/idempotency/page.tsx`

**Características:**
- ✅ 5 pestañas educativas interactivas
- ✅ Explicaciones teóricas de idempotencia
- ✅ Ejemplos de código completos
- ✅ Demos interactivos funcionales
- ✅ Comparación de operaciones idempotentes vs no-idempotentes

**Contenido:**
1. **Introducción**: Conceptos básicos de idempotencia
2. **React Hooks**: Custom hook `useIdempotentAction`
3. **API Routes**: Implementación de endpoints idempotentes
4. **Pagos**: Sistema de pagos con protección contra duplicados
5. **Mutaciones**: Integración con React Query/TanStack Query

---

### 2. API Routes

#### `/api/idempotent-payment`
**Ubicación:** `src/app/api/idempotent-payment/route.ts`

**Funcionalidad:**
- Procesa pagos con protección de idempotencia
- Cachea resultados por 24 horas
- Retorna el mismo resultado para requests duplicados
- Usa header `Idempotency-Key`

**Ejemplo de uso:**
```typescript
const response = await fetch('/api/idempotent-payment', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Idempotency-Key': crypto.randomUUID(),
  },
  body: JSON.stringify({ amount: 100, currency: 'USD' }),
});
```

#### `/api/idempotent-mutation`
**Ubicación:** `src/app/api/idempotent-mutation/route.ts`

**Funcionalidad:**
- Crea recursos con protección de duplicados
- Cache con TTL de 24 horas
- Respuestas consistentes para mismo idempotency key

---

### 3. Custom Hooks

#### `useIdempotentAction`
**Ubicación:** `src/lib/hooks/useIdempotentAction.ts`

**Características:**
- ✅ Detecta operaciones en progreso
- ✅ Cachea resultados temporalmente
- ✅ Previene duplicados por doble-click
- ✅ TypeScript con genéricos completos
- ✅ Configurable con timeout

**Uso:**
```typescript
import { useIdempotentAction } from '@/lib/hooks/useIdempotentAction';

const processPayment = async (amount: number) => {
  const response = await fetch('/api/payment', {
    method: 'POST',
    body: JSON.stringify({ amount }),
  });
  return response.json();
};

const idempotentPayment = useIdempotentAction(processPayment);

// Usar con key única
await idempotentPayment('payment-123', 100);
```

#### `useIdempotentMutation`
**Ubicación:** `src/lib/hooks/useIdempotentMutation.ts`

**Características:**
- ✅ Integración con TanStack Query (React Query)
- ✅ Genera idempotency keys automáticamente
- ✅ Preserva keys para reintentos
- ✅ Invalida queries relacionadas

**Uso:**
```typescript
import { useIdempotentMutation } from '@/lib/hooks/useIdempotentMutation';

const mutation = useIdempotentMutation({
  endpoint: '/api/resources',
  method: 'POST',
});

await mutation.mutateAsync({
  name: 'New Resource',
  description: 'Created with idempotency',
});
```

---

## 🎯 Conceptos Cubiertos

### 1. Fundamentos de Idempotencia
- Definición y propósito
- HTTP methods idempotentes (GET, PUT, DELETE)
- HTTP methods no-idempotentes (POST)
- Por qué es importante en sistemas distribuidos

### 2. Implementación en React
- Custom hooks para operaciones idempotentes
- Manejo de estado y cache en cliente
- Prevención de doble-click
- Integración con formularios

### 3. API Routes en Next.js
- Headers de idempotencia estándar
- Almacenamiento de resultados (in-memory)
- TTL y expiración de cache
- Manejo de errores idempotente

### 4. Casos de Uso Prácticos
- **Pagos**: Prevenir cobros duplicados
- **Mutaciones**: Crear recursos sin duplicados
- **Reintentos**: Reintentar operaciones fallidas de forma segura
- **Requests de red**: Protección contra timeouts

### 5. Patrones Avanzados
- Idempotency keys con UUID
- Cache con expiración
- Middleware de idempotencia
- Integración con React Query

---

## 🎨 Demos Interactivos

### Demo 1: Sistema de Pagos
- Botón para crear nuevo pago con key única
- Botón para probar duplicados (misma key)
- Historial de transacciones
- Estado visual del procesamiento

### Demo 2: Mutaciones
- Creación de recursos con protección
- Feedback visual de éxito/error
- Integración con estado de mutación

---

## 🔧 Mejores Prácticas Incluidas

### En el Cliente
```typescript
// ✅ Generar UUID único
const idempotencyKey = crypto.randomUUID();

// ✅ Guardar key para reintentos
localStorage.setItem('payment-key', idempotencyKey);

// ✅ Enviar en header
headers: {
  'Idempotency-Key': idempotencyKey
}
```

### En el Servidor
```typescript
// ✅ Validar header
const key = request.headers.get('Idempotency-Key');
if (!key) return error;

// ✅ Verificar cache
const cached = cache.get(key);
if (cached) return cached;

// ✅ Procesar y cachear
const result = await process();
cache.set(key, result);
```

### Cache y TTL
```typescript
// ✅ Time-to-live de 24 horas (estándar)
const TTL = 24 * 60 * 60 * 1000;

// ✅ Limpiar automáticamente
setTimeout(() => cache.delete(key), TTL);

// ✅ Verificar expiración
if (Date.now() - cached.timestamp > TTL) {
  cache.delete(key);
}
```

---

## 🌟 Características Destacadas

1. **Educativo**: Explicaciones claras de conceptos
2. **Práctico**: Código funcional y listo para usar
3. **Interactivo**: Demos que se pueden probar en tiempo real
4. **Completo**: Cubre cliente, servidor y hooks
5. **TypeScript**: Totalmente tipado con genéricos
6. **Moderno**: Usa APIs web modernas (crypto.randomUUID)

---

## 📚 Recursos Adicionales

### Headers Estándar
- `Idempotency-Key`: Stripe, muchas APIs REST
- `X-Request-ID`: AWS, tracking de requests
- `X-Idempotency-Key`: Variante común

### Alternativas de Storage
- **Desarrollo**: Map in-memory (actual implementación)
- **Producción**: Redis con TTL automático
- **Base de datos**: Tabla de idempotency con índices
- **Distributed cache**: Memcached, DynamoDB

### Casos de Uso Reales
- Stripe Payments
- AWS API Gateway
- GitHub Webhooks
- Shopify API
- Twilio API

---

## 🎓 Lo que Aprenderás

Al explorar este módulo, aprenderás:

1. ✅ Qué es la idempotencia y por qué es crítica
2. ✅ Cómo implementar operaciones idempotentes en React
3. ✅ Crear API routes idempotentes en Next.js
4. ✅ Usar headers HTTP para idempotencia
5. ✅ Implementar cache con TTL
6. ✅ Integrar con React Query/TanStack Query
7. ✅ Manejar reintentos de forma segura
8. ✅ Prevenir cobros duplicados en pagos
9. ✅ Crear recursos sin duplicados
10. ✅ Mejores prácticas de la industria

---

## 🚀 Cómo Usar

1. Navega a `/patterns/idempotency` en tu aplicación
2. Explora las 5 pestañas de contenido
3. Prueba los demos interactivos
4. Estudia los ejemplos de código
5. Implementa los hooks en tus proyectos

---

## 🔗 Integración con el Proyecto

Este módulo se integra perfectamente con:
- ✅ Arquitectura de patterns existente
- ✅ Sistema de routing de Next.js
- ✅ Estilo Tailwind CSS del proyecto
- ✅ TypeScript strict mode
- ✅ Estructura de módulos educativos

---

## 📊 Estadísticas

- **Líneas de código**: ~700+
- **Archivos creados**: 5
- **Ejemplos de código**: 10+
- **Demos interactivos**: 2
- **Conceptos cubiertos**: 15+
- **Casos de uso**: 5

---

**Creado**: 2026-01-17  
**Categoría**: Patterns  
**Nivel**: Intermedio-Avanzado  
**Tecnologías**: React, Next.js, TypeScript, TanStack Query

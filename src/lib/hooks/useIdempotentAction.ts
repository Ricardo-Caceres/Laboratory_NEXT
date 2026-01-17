import { useRef, useCallback } from 'react';

interface IdempotentConfig {
  timeout?: number;
}

export function useIdempotentAction<T extends any[], R>(
  action: (...args: T) => Promise<R>,
  config: IdempotentConfig = {}
) {
  const { timeout = 5000 } = config;
  const pendingKeys = useRef(new Map<string, Promise<R>>());
  const completedKeys = useRef(new Map<string, { result: R; timestamp: number }>());

  const execute = useCallback(
    async (idempotencyKey: string, ...args: T): Promise<R> => {
      const pending = pendingKeys.current.get(idempotencyKey);
      if (pending) {
        console.log('🔄 Operación en progreso, retornando promesa existente');
        return pending;
      }

      const completed = completedKeys.current.get(idempotencyKey);
      if (completed) {
        const age = Date.now() - completed.timestamp;
        if (age < timeout) {
          console.log('✅ Operación ya completada, retornando resultado cached');
          return completed.result;
        }
        completedKeys.current.delete(idempotencyKey);
      }

      console.log('🚀 Ejecutando nueva operación');
      const promise = action(...args);
      pendingKeys.current.set(idempotencyKey, promise);

      try {
        const result = await promise;
        
        completedKeys.current.set(idempotencyKey, {
          result,
          timestamp: Date.now(),
        });
        
        return result;
      } finally {
        pendingKeys.current.delete(idempotencyKey);
      }
    },
    [action, timeout]
  );

  return execute;
}

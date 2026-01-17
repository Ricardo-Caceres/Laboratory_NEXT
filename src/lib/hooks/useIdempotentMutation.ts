import { useRef, useState, useCallback } from 'react';

interface IdempotentMutationConfig {
  endpoint: string;
  method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}

interface MutationState<TData> {
  data?: TData;
  error?: Error;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export function useIdempotentMutation<TData = unknown, TVariables = unknown>(
  config: IdempotentMutationConfig
) {
  const idempotencyKeyRef = useRef<string | null>(null);
  const [state, setState] = useState<MutationState<TData>>({
    isPending: false,
    isSuccess: false,
    isError: false,
  });

  const mutate = useCallback(async (variables: TVariables) => {
    if (!idempotencyKeyRef.current) {
      idempotencyKeyRef.current = crypto.randomUUID();
    }

    setState({ isPending: true, isSuccess: false, isError: false });

    try {
      const response = await fetch(config.endpoint, {
        method: config.method || 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': idempotencyKeyRef.current,
        },
        body: JSON.stringify(variables),
      });

      if (!response.ok) {
        throw new Error(`Mutation failed: ${response.statusText}`);
      }

      const data = await response.json() as TData;
      
      setState({
        data,
        isPending: false,
        isSuccess: true,
        isError: false,
      });

      idempotencyKeyRef.current = null;
      
      return data;
    } catch (error) {
      console.error('Mutation error, key preserved for retry:', error);
      const err = error instanceof Error ? error : new Error('Unknown error');
      
      setState({
        error: err,
        isPending: false,
        isSuccess: false,
        isError: true,
      });
      
      throw err;
    }
  }, [config.endpoint, config.method]);

  const mutateAsync = mutate;

  return {
    ...state,
    mutate,
    mutateAsync,
  };
}

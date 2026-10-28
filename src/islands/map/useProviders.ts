import { useEffect, useState } from 'react';
import type { MapProvider } from '../../lib/filters';

export type ProvidersState =
  { status: 'loading' } | { status: 'error'; message: string } | { status: 'ready'; providers: readonly MapProvider[] };

const PROVIDERS_URL = '/data/providers.json';

export function useProviders(): ProvidersState {
  const [state, setState] = useState<ProvidersState>({ status: 'loading' });

  useEffect(() => {
    const controller = new AbortController();
    fetch(PROVIDERS_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json() as Promise<MapProvider[]>;
      })
      .then((providers) => setState({ status: 'ready', providers }))
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        console.error('Failed to load providers', error);
        setState({ status: 'error', message: 'Nu am putut încărca serviciile. Reîncarcă pagina și încearcă din nou.' });
      });
    return () => controller.abort();
  }, []);

  return state;
}

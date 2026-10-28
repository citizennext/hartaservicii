import type { z } from 'zod';

export interface HasuraClientConfig {
  url: string;
  adminSecret: string;
  fetch?: typeof fetch;
}

export interface HasuraClient {
  request<T>(query: string, schema: z.ZodType<T>, variables?: Record<string, unknown>): Promise<T>;
}

interface GraphQLResponse {
  data?: unknown;
  errors?: { message: string }[];
}

export class HasuraError extends Error {
  override name = 'HasuraError';
}

export function createHasuraClient({ url, adminSecret, fetch: fetchImpl = fetch }: HasuraClientConfig): HasuraClient {
  if (!url) throw new HasuraError('HASURA_URL is not configured');
  if (!adminSecret) throw new HasuraError('HASURA_ADMIN_SECRET is not configured');

  async function post(query: string, variables?: Record<string, unknown>): Promise<GraphQLResponse> {
    let response: Response;
    try {
      response = await fetchImpl(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-hasura-admin-secret': adminSecret },
        body: JSON.stringify({ query, variables }),
      });
    } catch (error: unknown) {
      const reason = error instanceof Error ? error.message : 'unknown error';
      throw new HasuraError(`Request to Hasura failed: ${reason}`);
    }
    if (!response.ok) throw new HasuraError(`Hasura responded with HTTP ${response.status}`);
    return (await response.json()) as GraphQLResponse;
  }

  return {
    async request(query, schema, variables) {
      const body = await post(query, variables);
      if (body.errors?.length) {
        throw new HasuraError(`Hasura GraphQL errors: ${body.errors.map((e) => e.message).join('; ')}`);
      }
      const parsed = schema.safeParse(body.data);
      if (!parsed.success) {
        throw new HasuraError(`Unexpected response shape from Hasura: ${parsed.error.message}`);
      }
      return parsed.data;
    },
  };
}

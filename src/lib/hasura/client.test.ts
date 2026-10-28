import { describe, expect, test, vi } from 'vitest';
import { z } from 'zod';
import { createHasuraClient, HasuraError } from './client';

const CONFIG = { url: 'https://example.test/v1/graphql', adminSecret: 'shh' };
const COUNT_SCHEMA = z.object({ count: z.number() });

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
}

describe('createHasuraClient', () => {
  test('throws when url is missing', () => {
    expect(() => createHasuraClient({ ...CONFIG, url: '' })).toThrow(/HASURA_URL/);
  });

  test('throws when admin secret is missing', () => {
    expect(() => createHasuraClient({ ...CONFIG, adminSecret: '' })).toThrow(/HASURA_ADMIN_SECRET/);
  });

  test('posts query and variables with the admin secret header', async () => {
    // Arrange
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse({ data: { count: 3 } }));
    const client = createHasuraClient({ ...CONFIG, fetch: fetchMock });

    // Act
    await client.request('query Q($a: Int) { count }', COUNT_SCHEMA, { a: 1 });

    // Assert
    const [url, init] = fetchMock.mock.calls[0]!;
    expect(url).toBe(CONFIG.url);
    expect(init.method).toBe('POST');
    expect(init.headers['x-hasura-admin-secret']).toBe('shh');
    expect(JSON.parse(init.body)).toEqual({ query: 'query Q($a: Int) { count }', variables: { a: 1 } });
  });

  test('returns data parsed by the schema', async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse({ data: { count: 3, extra: 'ignored' } }));
    const client = createHasuraClient({ ...CONFIG, fetch: fetchMock });

    const result = await client.request('{ count }', COUNT_SCHEMA);

    expect(result).toEqual({ count: 3 });
  });

  test('throws HasuraError with GraphQL error messages', async () => {
    const fetchMock = vi
      .fn()
      .mockImplementation(async () => jsonResponse({ errors: [{ message: "field 'x' not found" }, { message: 'second' }] }));
    const client = createHasuraClient({ ...CONFIG, fetch: fetchMock });

    await expect(client.request('{ x }', COUNT_SCHEMA)).rejects.toThrow(HasuraError);
    await expect(client.request('{ x }', COUNT_SCHEMA)).rejects.toThrow(/field 'x' not found; second/);
  });

  test('throws HasuraError on non-2xx HTTP status', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('bad gateway', { status: 502 }));
    const client = createHasuraClient({ ...CONFIG, fetch: fetchMock });

    await expect(client.request('{ count }', COUNT_SCHEMA)).rejects.toThrow(/HTTP 502/);
  });

  test('throws HasuraError when the response does not match the schema', async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse({ data: { count: 'three' } }));
    const client = createHasuraClient({ ...CONFIG, fetch: fetchMock });

    await expect(client.request('{ count }', COUNT_SCHEMA)).rejects.toThrow(/unexpected response shape/i);
  });

  test('wraps network failures without leaking the admin secret', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new TypeError('fetch failed'));
    const client = createHasuraClient({ ...CONFIG, fetch: fetchMock });

    const error = await client.request('{ count }', COUNT_SCHEMA).catch((e: unknown) => e);

    expect(error).toBeInstanceOf(HasuraError);
    expect(String((error as Error).message)).toMatch(/fetch failed/);
    expect(String((error as Error).message)).not.toContain('shh');
  });
});

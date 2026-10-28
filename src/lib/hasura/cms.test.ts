import { describe, expect, test, vi } from 'vitest';
import { createHasuraClient } from './client';
import { fetchBlogs, fetchPages, withNeighbours } from './cms';

const BLOG = {
  id: 'b1',
  title: 'Titlu',
  summary: 'Rezumat',
  slug: 'titlu',
  featured: false,
  publishedAt: '2020-04-15T19:56:48.627+00:00',
  createdAt: '2020-01-13T21:53:51.161+00:00',
  updatedAt: '2020-04-15T19:56:48.627+00:00',
  content: { html: '<p>Salut</p>', text: 'Salut' },
  image: { url: 'https://eu-central-1.graphassets.com/x/y' },
};

const PAGE = {
  id: 'p1',
  title: 'Despre noi',
  summary: null,
  slug: 'despre-noi',
  header: 'despre noi',
  additionalData: { images: [] },
  updatedAt: '2020-04-14T06:43:45.801+00:00',
  content: { html: '<p>Despre</p>', text: 'Despre' },
  image: null,
};

function clientReturning(data: unknown) {
  const fetchMock = vi.fn().mockImplementation(async () => new Response(JSON.stringify({ data })));
  return { client: createHasuraClient({ url: 'https://h.test', adminSecret: 's', fetch: fetchMock }), fetchMock };
}

describe('fetchBlogs', () => {
  test('queries the cms namespace and returns parsed blogs', async () => {
    const { client, fetchMock } = clientReturning({ cms: { blogs: [BLOG] } });

    const blogs = await fetchBlogs(client);

    expect(blogs).toEqual([BLOG]);
    expect(JSON.parse(fetchMock.mock.calls[0]![1].body).query).toMatch(/cms\s*{\s*blogs/);
  });
});

describe('fetchPages', () => {
  test('accepts pages without image or summary', async () => {
    const { client } = clientReturning({ cms: { pages: [PAGE] } });
    expect(await fetchPages(client)).toEqual([PAGE]);
  });
});

describe('withNeighbours', () => {
  test('links each item to its older (previous) and newer (next) neighbour', () => {
    const items = [{ slug: 'newest' }, { slug: 'middle' }, { slug: 'oldest' }];

    const result = withNeighbours(items);

    expect(result.map(({ item, previous, next }) => [item.slug, previous?.slug ?? null, next?.slug ?? null])).toEqual([
      ['newest', 'middle', null],
      ['middle', 'oldest', 'newest'],
      ['oldest', null, 'middle'],
    ]);
  });
});

import { describe, expect, test } from 'vitest';
import { MAX_CONTENT_CHARS, hitPath, toSearchRecords } from './search';

const PROVIDER = { id: 'p1', name: 'Casa Ion', location: 'Cluj-Napoca', district: 'Cluj', supplier: { name: 'DGASPC Cluj' } };
const BLOG = {
  id: 'b1',
  slug: 'stire',
  title: 'Știre',
  summary: 'Rezumat',
  content: { text: 'Text', html: '<p>Text</p>' },
  updatedAt: '2020-01-01',
};
const PAGE = {
  id: 'g1',
  slug: 'despre-noi',
  title: 'Despre noi',
  summary: null,
  content: { text: 'Despre', html: '' },
  updatedAt: '2020-01-02',
};

describe('toSearchRecords', () => {
  test('maps providers, blogs and pages to the legacy index shape', () => {
    const records = toSearchRecords({ providers: [PROVIDER], blogs: [BLOG], pages: [PAGE] });

    expect(records).toEqual([
      {
        objectID: 'b1',
        type: 'Noutăți',
        slug: 'stire',
        title: 'Știre',
        summary: 'Rezumat',
        content: { text: 'Text' },
        updatedAt: '2020-01-01',
      },
      {
        objectID: 'g1',
        type: 'Pagini',
        slug: 'despre-noi',
        title: 'Despre noi',
        summary: null,
        content: { text: 'Despre' },
        updatedAt: '2020-01-02',
      },
      {
        objectID: 'p1',
        type: 'Servicii',
        name: 'Casa Ion',
        location: 'Cluj-Napoca',
        district: 'Cluj',
        supplier: { name: 'DGASPC Cluj' },
      },
    ]);
  });

  test('truncates long content so records stay under the Algolia size limit', () => {
    const long = { ...BLOG, content: { text: 'x'.repeat(MAX_CONTENT_CHARS + 500), html: '' } };
    const [record] = toSearchRecords({ providers: [], blogs: [long], pages: [] });
    expect(record && 'content' in record && record.content.text.length).toBe(MAX_CONTENT_CHARS);
  });
});

describe('hitPath', () => {
  test('links providers to their static page', () => {
    expect(hitPath({ type: 'Servicii', objectID: 'p1', name: 'Casa Ion' })).toBe('/harta/serviciu/casa-ion/p1/');
  });

  test('links news and pages by slug', () => {
    expect(hitPath({ type: 'Noutăți', objectID: 'b1', slug: 'stire' })).toBe('/noutati/stire');
    expect(hitPath({ type: 'Pagini', objectID: 'g1', slug: 'despre-noi' })).toBe('/despre-noi');
  });
});

import { providerPath } from './slug';

// Record shape matches the index the Gatsby plugin used to build, so search keeps working mid-migration.

export const MAX_CONTENT_CHARS = 8000;

export type SearchType = 'Servicii' | 'Noutăți' | 'Pagini';

interface ContentSource {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  content: { text: string } | null;
  updatedAt: string;
}

interface ProviderSource {
  id: string;
  name: string;
  location: string;
  district: string;
  supplier: { name: string };
}

export type ContentRecord = {
  objectID: string;
  type: 'Noutăți' | 'Pagini';
  slug: string;
  title: string;
  summary: string | null;
  content: { text: string };
  updatedAt: string;
};

export type ProviderRecord = {
  objectID: string;
  type: 'Servicii';
  name: string;
  location: string;
  district: string;
  supplier: { name: string };
};

export type SearchRecord = ContentRecord | ProviderRecord;

const toContentRecord =
  (type: ContentRecord['type']) =>
  ({ id, slug, title, summary, content, updatedAt }: ContentSource): ContentRecord => ({
    objectID: id,
    type,
    slug,
    title,
    summary,
    content: { text: (content?.text ?? '').slice(0, MAX_CONTENT_CHARS) },
    updatedAt,
  });

const toProviderRecord = ({ id, name, location, district, supplier }: ProviderSource): ProviderRecord => ({
  objectID: id,
  type: 'Servicii',
  name,
  location,
  district,
  supplier: { name: supplier.name },
});

export function toSearchRecords(sources: {
  providers: readonly ProviderSource[];
  blogs: readonly ContentSource[];
  pages: readonly ContentSource[];
}): SearchRecord[] {
  return [
    ...sources.blogs.map(toContentRecord('Noutăți')),
    ...sources.pages.map(toContentRecord('Pagini')),
    ...sources.providers.map(toProviderRecord),
  ];
}

export type HitLink = { objectID: string } & ({ type: 'Servicii'; name: string } | { type: 'Noutăți' | 'Pagini'; slug: string });

export function hitPath(hit: HitLink): string {
  switch (hit.type) {
    case 'Servicii':
      return providerPath({ id: hit.objectID, name: hit.name });
    case 'Noutăți':
      return `/noutati/${hit.slug}`;
    case 'Pagini':
      return `/${hit.slug}`;
  }
}

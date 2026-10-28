import { z } from 'zod';
import type { HasuraClient } from './client';

// Blog and page content comes from the GraphCMS remote schema, namespaced under `cms`.
const MAX_ITEMS = 100;

const BLOGS_QUERY = /* GraphQL */ `
  query Blogs($first: Int!) {
    cms {
      blogs(first: $first, orderBy: publishedAt_DESC) {
        id
        title
        summary
        slug
        featured
        publishedAt
        createdAt
        updatedAt
        content {
          html
          text
        }
        image {
          url
        }
      }
    }
  }
`;

const PAGES_QUERY = /* GraphQL */ `
  query Pages($first: Int!) {
    cms {
      pages(first: $first) {
        id
        title
        summary
        slug
        header
        additionalData
        updatedAt
        content {
          html
          text
        }
        image {
          url
        }
      }
    }
  }
`;

const RICH_TEXT_SCHEMA = z.object({ html: z.string(), text: z.string() });
const IMAGE_SCHEMA = z.object({ url: z.url() }).nullable();

const BLOG_SCHEMA = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string().nullable(),
  slug: z.string(),
  featured: z.boolean().nullable(),
  publishedAt: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  content: RICH_TEXT_SCHEMA.nullable(),
  image: IMAGE_SCHEMA,
});

const PAGE_SCHEMA = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string().nullable(),
  slug: z.string(),
  header: z.string().nullable(),
  additionalData: z.unknown(),
  updatedAt: z.string(),
  content: RICH_TEXT_SCHEMA.nullable(),
  image: IMAGE_SCHEMA,
});

const BLOGS_RESPONSE_SCHEMA = z.object({ cms: z.object({ blogs: z.array(BLOG_SCHEMA) }) });
const PAGES_RESPONSE_SCHEMA = z.object({ cms: z.object({ pages: z.array(PAGE_SCHEMA) }) });

export type Blog = z.infer<typeof BLOG_SCHEMA>;
export type Page = z.infer<typeof PAGE_SCHEMA>;

export interface WithNeighbours<T> {
  item: T;
  /** The older item (next in a newest-first list). */
  previous: T | null;
  /** The newer item (previous in a newest-first list). */
  next: T | null;
}

/** Blogs newest first. */
export async function fetchBlogs(client: HasuraClient): Promise<Blog[]> {
  const { cms } = await client.request(BLOGS_QUERY, BLOGS_RESPONSE_SCHEMA, { first: MAX_ITEMS });
  return cms.blogs;
}

export async function fetchPages(client: HasuraClient): Promise<Page[]> {
  const { cms } = await client.request(PAGES_QUERY, PAGES_RESPONSE_SCHEMA, { first: MAX_ITEMS });
  return cms.pages;
}

/** Mirrors the legacy gatsby-node prev/next wiring for a newest-first list. */
export function withNeighbours<T>(items: readonly T[]): WithNeighbours<T>[] {
  return items.map((item, index) => ({
    item,
    previous: items[index + 1] ?? null,
    next: items[index - 1] ?? null,
  }));
}

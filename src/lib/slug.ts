import getSlug from 'speakingurl';

// speakingurl is kept (not swapped) so provider URLs stay identical to the Gatsby site.
export function slugify(value: string): string {
  return getSlug(value);
}

export function providerPath({ id, name }: { id: string; name: string }): string {
  return `/harta/serviciu/${slugify(name)}/${id}/`;
}
